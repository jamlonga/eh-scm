import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'hotel',
	template: `
		<h1>{{title}}</h1>
		<router-outlet></router-outlet>
	`,
})
export class HotelComponent implements OnInit {
	title: string;

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.title = this.route.snapshot.data.title;
	}
}
