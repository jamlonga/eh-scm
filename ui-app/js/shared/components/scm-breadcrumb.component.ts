
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';

interface ScmBreadcrumb {
	label: string;
	params: Params;
	url: string;
}

@Component({
	selector: 'scm-breadcrumb',
	templateUrl: './scm-breadcrumb.component.pug',
})

export class ScmBreadcrumbComponent implements OnInit {
	breadcrumbs: ScmBreadcrumb[];
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
			this.activatedRoute.data.subscribe(data => {
				console.log('bread', data);
			});
			// this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
			// console.log(this.breadcrumbs);
		});
	}

	private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: ScmBreadcrumb[]=[]): ScmBreadcrumb[] {
		const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

		//get the child routes
		let children: ActivatedRoute[] = route.children;
		console.log(children);
		//return if there are no more children
		if (children.length === 0) {
			return breadcrumbs;
		}
		//iterate over each children
		for (let child of children) {
			//verify primary route
			if (child.outlet !== PRIMARY_OUTLET) {
				continue;
			}
			//verify the custom data property "breadcrumb" is specified on the route
			if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
				return this.getBreadcrumbs(child, url, breadcrumbs);
			}
			//get the route's URL segment
			let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
			//append route URL to URL
			url += `/${routeURL}`;
			//add breadcrumb
			let breadcrumb: ScmBreadcrumb = {
				label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
				params: child.snapshot.params,
				url: url
			};
			breadcrumbs.push(breadcrumb);
			//recursive
			return this.getBreadcrumbs(child, url, breadcrumbs);
		}
	}
}
