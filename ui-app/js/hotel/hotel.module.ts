import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel.component'
import { HotelIndexComponent } from './hotel-index.component'
import { HotelViewComponent } from './hotel-view.component'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HotelResolveService } from './hotel-resolve.service';

import { RounterCanActivateService } from '../shared/services/router-can-activate.service'

const ROUTES: Routes = [
	{
		path: 'hotel',
		component: HotelComponent,
		data: { breadcrumb: 'Hotel', title: 'Hotel' },
		canActivate: [RounterCanActivateService],
		canActivateChild: [RounterCanActivateService],
		children: [
			{ path: '', component: HotelIndexComponent, data: { breadcrumb: 'Hotel index', title: 'Hotel index' }},
			{
				path: ':id',
				component: HotelViewComponent,
				data: { title: 'Hotel view' },
				resolve: {
					model: HotelResolveService
				}
			}
		]
	}
];
@NgModule({
	imports: [
		SharedModule,
		RouterModule.forRoot(ROUTES)
	],
	exports: [
		RouterModule
	],
	declarations: [
		HotelComponent,
		HotelIndexComponent,
		HotelViewComponent
	],
	providers: [
		RounterCanActivateService,
		HotelResolveService
	]
})
export class HotelModule {}
