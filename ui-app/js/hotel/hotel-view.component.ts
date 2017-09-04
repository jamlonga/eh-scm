import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
	alert: {};

	constructor(
		private activatedRoute: ActivatedRoute,
		private hotelService: HotelService,
		private router: Router
	) {}

	ngOnInit(): void {
		const routeSnapshot = this.activatedRoute.snapshot;
		if (routeSnapshot.data.model) {
			this.model = routeSnapshot.data.model;
			this.title = this.model.name;
		} else {
			this.model = new Hotel;
			this.title = routeSnapshot.data.breadcrumb;
		}
		this.id = routeSnapshot.params.id;
		this.form = new FormGroup({
			id: new FormControl(this.model.id),
			name: new FormControl(this.model.name),
			address: new FormControl(this.model.address),
			postCode: new FormControl(this.model.postCode)
		});
	}

	onSubmit(): void {
		const params: Hotel = this.form.value
		this.form.disable();
		this.hotelService.save(params)
		.subscribe((response) => {
			if (params.id) {
				window.scrollTo(0, 0);
				this.model = response;
				this.title = this.model.name;
				this.form.enable();
				this.alert = { success: true };
			} else {
				this.router.navigate(['/hotel', response.id, 'edit',]);
			}
		}, (error) => {
			console.log('error', error)
		});
	}
}
