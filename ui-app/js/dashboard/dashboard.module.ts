import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const ROUTES: Routes = [
	{ path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }}
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forRoot(ROUTES)
	],
	exports: [
		DashboardComponent
	],
	declarations: [
		DashboardComponent
	],
	entryComponents: [
		DashboardComponent
	],
	providers: [
	]
})
export class DashboardModule { }
