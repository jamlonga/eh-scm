import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Hotel } from '../types';

@Injectable()
export class HotelService {
	constructor(private http: Http) {}
	list(): Observable<{}> {
		return this.http.get('/api/scm/v1/hotels')
		.map((r) => r.json())
		.catch((r) => Observable.throw(r.json()));
	}

	get(id: string): Observable<{}> {
		return this.http.get(`api/scm/v1/hotels/${id}`)
		.map((r) => r.json())
		.catch((r) => Observable.throw(r.json()));
	}

	save(params: Hotel): Observable<Hotel> {
		return this.http.post('api/scm/v1/hotels', params)
		.map((r) => r.json())
		.catch((r) => Observable.throw(r.json()));
	}
}
