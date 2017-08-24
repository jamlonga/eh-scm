import { NgModule } from '@angular/core';
import { HotelIndexComponent } from './hotel-index.component'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
	{ path: 'hotel', component: HotelIndexComponent, data: { title: 'Hotel index' }},
	{ path: 'hotel/:id', component: HotelIndexComponent, data: { title: 'Hotel index' }},
];
@NgModule({
	imports: [
		SharedModule,
		RouterModule.forRoot(ROUTES)
	],
	declarations: [
		HotelIndexComponent
	]
})
export class HotelModule {}