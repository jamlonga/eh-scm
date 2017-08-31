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

	constructor(
		private activatedRoute: ActivatedRoute,
		private hotelService: HotelService,
		private router: Router
	) {}

	ngOnInit(): void {
		if (this.activatedRoute.snapshot.data.model) {
			this.model = this.activatedRoute.snapshot.data.model;
			this.title = this.model.name;
		} else {
			this.model = new Hotel;
			this.title = this.activatedRoute.snapshot.data.breadcrumb;
		}
		this.id = this.activatedRoute.snapshot.params.id;
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
			} else {
				this.router.navigate(['/hotel', response.id, 'edit']);
			}
		}, (error) => {
			console.log('error', error)
		});
	}
}
