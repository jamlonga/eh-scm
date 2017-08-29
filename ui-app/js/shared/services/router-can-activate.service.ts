import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class RounterCanActivateService implements CanActivate, CanActivateChild {
	constructor(private http: Http, private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> | boolean {
		return this.getHead(state);
	}

	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.getHead(state);
	}

	private getHead(state: RouterStateSnapshot): Promise<boolean> {
		return this.http.head(state.url).map((r) => true).catch(() => {
			this.router.navigate(['/not-found']);
			return Observable.throw(false);
		})
		.toPromise();
	}
}
