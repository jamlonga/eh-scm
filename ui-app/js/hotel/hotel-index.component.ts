import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared/services';
import { ActivatedRoute, Params } from '@angular/router';
import { slideInDown } from '../shared/animations/slide';

@Component({
	selector: 'hotel-index',
	templateUrl: './hotel-index.component.pug',
	animations: [slideInDown]
})
export class HotelIndexComponent implements OnInit {
	title: string;
	size: number;
	hotels: any;
	queryParams: Params;

	constructor(
		private hotelService: HotelService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.title = this.route.snapshot.data.title;
		this.queryParams = this.route.snapshot.queryParams;
		this.hotelService.list()
		.subscribe((response: any[]) => {
			this.hotels = response;
			this.size = response.length;
		});
	}
}
