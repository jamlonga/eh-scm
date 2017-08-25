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
		data: { title: 'Hotel' },
		canActivate: [RounterCanActivateService],
		children: [
			{ path: '', component: HotelIndexComponent, data: { title: 'Hotel index' }},
			{
				path: ':id',
				component: HotelViewComponent,
				data: { title: 'Hotel index' }
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
