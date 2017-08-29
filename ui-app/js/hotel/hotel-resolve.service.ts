import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HotelService } from '../shared/services';

@Injectable()
export class HotelResolveService implements Resolve<{}> {
	hotel: {};
	constructor(private service: HotelService, private router: Router) {}
	resolve(route: ActivatedRouteSnapshot) {
		const id: string = route.params['id'];
		return this.service.get(id)
		.catch((e) => {
			this.router.navigate(['/not-found']);
			return Observable.of(false);
		});
	}
}