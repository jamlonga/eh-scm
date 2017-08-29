import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'hotel-view',
	templateUrl: './hotel-view.component.pug',
})
export class HotelViewComponent implements OnInit {
	title: string;
	id: number;
	model: {};

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.title = this.route.snapshot.data.title;
		this.id = this.route.snapshot.params.id;
		this.model = this.route.snapshot.data.model;
	}
}
