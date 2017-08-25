import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel.component'
import { HotelIndexComponent } from './hotel-index.component'
import { HotelViewComponent } from './hotel-view.component'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { RounterCanActivateService } from '../shared/services/router-can-activate.service'

const ROUTES: Routes = [
	{
		path: 'hotel',
		component: HotelComponent,
		data: { breadcrumb: 'Hotel' },
		canActivate: [RounterCanActivateService],
		canActivateChild: [RounterCanActivateService],
		children: [
			{ path: '', component: HotelIndexComponent, data: { breadcrumb: 'Hotel index' }},
			{
				path: ':id',
				component: HotelViewComponent,
				data: { breadcrumb: 'Hotel view' }
			}
		]
	},
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
		RounterCanActivateService
	]
})
export class HotelModule {}
