import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HotelService } from '../shared/services/hotel.service';
import { Hotel } from '../shared/types/hotel';

@Component({
	selector: 'hotel-view',
	templateUrl: './hotel-view.component.pug',
})
export class HotelViewComponent implements OnInit {
	title: string;
	id: number;
	model: Hotel;
	form: FormGroup;

	constructor(
		private route: ActivatedRoute,
		private hotelService: HotelService
	) {}

	ngOnInit(): void {
		this.title = this.route.snapshot.data.title;
		this.id = this.route.snapshot.params.id;
		this.model = this.route.snapshot.data.model;
		this.form = new FormGroup({
			id: new FormControl(this.model.id),
			name: new FormControl(this.model.name),
			address: new FormControl(this.model.address),
			postCode: new FormControl(this.model.postCode),
			countryId: new FormControl(this.model.countryId),
			dateCreated: new FormControl(this.model.dateCreated),
			lastUpdated: new FormControl(this.model.lastUpdated),
			orderEnable: new FormControl(this.model.orderEnable),
		});
	}

	onSubmit(): void {
		const params: Hotel = this.form.value
		this.form.disable();
		this.hotelService.save(params)
		.finally(() => {
			this.form.enable();
		})
		.subscribe((response) => {
			console.log('success', response);
		}, (error) => {
			console.log('error', error)
		});
	}

}
