import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
	imports: [
		SharedModule,
		ReactiveFormsModule
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
