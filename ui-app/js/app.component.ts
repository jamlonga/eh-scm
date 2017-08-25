import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<img src="image/EH_logo-01.svg" width="150px">
		<ul class="nav nav-pills">
			<li><a routerLink="/" routerLinkActive="active">Home</a></li>
			<li><a routerLink="/hotel" [queryParams]="{ page: 1, size: 15 }" routerLinkActive="active">Hotel</a></li>
			<li><a routerLink="/hotel/123" routerLinkActive="active">Hotel 123</a></li>
			<li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
			<li><a routerLink="/not-create-this-page-yet" routerLinkActive="active">No page</a></li>
		</ul>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
	constructor() {}
}
