import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared/services';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'hotel-index',
	templateUrl: './hotel-index.component.pug',
})
export class HotelIndexComponent implements OnInit {
	title: string;
	size: number;
	hotels: any;
	id: number;

	constructor(
		private hotelService: HotelService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.title = this.route.snapshot.data.title;
		this.id = this.route.snapshot.params.id;
		this.hotelService.get()
		.subscribe((response: any[]) => {
			this.hotels = response;
			this.size = response.length;
		});
	}
}
