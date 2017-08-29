import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
// import { Hotel } from 'shared/types';

@Injectable()
export class HotelService {
	constructor(private http: Http) {}
	list(): Observable<{}> {
		return this.http.get('/api/scm/v1/hotels')
		.catch((r) => Observable.throw(r.json()))
		.map((r) => r.json());
	}

	get(id: string): Observable<{}> {
		return this.http.get(`api/scm/v1/hotels/${id}`)
		.catch((r) => Observable.throw(r.json()))
		.map((r) => r.json());
	}
}
