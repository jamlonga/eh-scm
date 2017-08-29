import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbService } from './breadcrumb.service';
// import { RootScope} from 'reboot-ui2';
// import { Authentication } from 'shared/services';

@Component({
	selector: 'topbar',
	templateUrl: './topbar.component.pug',
	styleUrls: ['./topbar.component.less']
})

export class TopbarComponent implements OnInit {

	//The breadcrumbs of the current route
	public currentBreadcrumbs: Breadcrumb[];
	//All the breadcrumbs
	public breadcrumbs: Breadcrumb[];

	constructor(
		private breadcrumbService: BreadcrumbService,
		private activatedRoute: ActivatedRoute,
		private router: Router
		// private rootScope: RootScope,
		// private authentication: Authentication
	) {
		breadcrumbService.get().subscribe((breadcrumbs: Breadcrumb[]) => {
			this.breadcrumbs = breadcrumbs as Breadcrumb[];
		});
	}

	ngOnInit() {
		const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';
		const ROUTE_MODEL_BREADCRUMB: string = 'model';
		// const ROUTE_PARAM_BREADCRUMB: string = 'breadcrumb';
		const PREFIX_BREADCRUMB:string = 'prefixBreadcrumb';

		//subscribe to the NavigationEnd event
		this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
			//reset currentBreadcrumbs
			this.currentBreadcrumbs = [];

			//get the root of the current route
			let currentRoute: ActivatedRoute = this.activatedRoute.root;


			//set the url to an empty string
			let url: string = '';

			//iterate from activated route to children
			while (currentRoute.children.length > 0) {
				let childrenRoutes: ActivatedRoute[] = currentRoute.children;
				let breadCrumbLabel: string = '';

				//iterate over each children
				for (let route of childrenRoutes) {
					// Set currentRoute to this route
					currentRoute = route;
					// Verify this is the primary route
					if (route.outlet !== PRIMARY_OUTLET) {
						return;
					}

					/*
					 Verify the custom data property 'breadcrumb'
					 is specified on the route or in its parameters.

					 Route parameters take precedence over route data
					 attributes.
					 */
					if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
						breadCrumbLabel = route.snapshot.data[ROUTE_DATA_BREADCRUMB];
					} else if (route.snapshot.data.hasOwnProperty(ROUTE_MODEL_BREADCRUMB)) {
						breadCrumbLabel = route.snapshot.data[ROUTE_MODEL_BREADCRUMB].name;
					// } else if(route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB)) {
					// 	breadCrumbLabel = route.snapshot.params['breadcrumb'].replace(/_/g, ' ')
					} else {
						//fallback to empty string
						// breadCrumbLabel = 'empty_breadcrumb_name';
						continue;
					}

					// Get the route's URL segment
					let routeURL: string = route.snapshot.url.map(segment => segment.path).join('/');
					url += `/${routeURL}`;

					// Cannot have parameters on a root route
					if(routeURL.length == 0) {
						route.snapshot.params = {};
					}

					// Add breadcrumb
					let breadcrumb: Breadcrumb = {
						label: breadCrumbLabel,
						params: route.snapshot.params,
						queryParams: route.snapshot.queryParams,
						url: url
					};

					// Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
					if(route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
						this.breadcrumbService.storePrefixed(breadcrumb);
					}
					else {
						this.currentBreadcrumbs.push(breadcrumb);
					}

				}
				this.breadcrumbService.store(this.currentBreadcrumbs);
			}
		});
	}
}
