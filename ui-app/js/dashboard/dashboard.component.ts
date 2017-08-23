import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared/services';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.pug',
	// styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
	size: number;
	hotels: any;

	constructor(
		private hotelService: HotelService
	) {}

	ngOnInit(): void {
		this.hotelService.get()
		.subscribe((response: any[]) => {
			this.hotels = response;
			this.size = response.length;
		});
	}
}
