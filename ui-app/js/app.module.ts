import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { RebootUIModule } from 'reboot-ui2';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { HotelModule } from './hotel/hotel.module';

const ROUTES: Routes = [
	{ path: '', component: DashboardComponent, data: { title: 'Dashboard' }},
	{ path: 'not-found', component: PageNotFoundComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		ReactiveFormsModule,
		// NgbModule.forRoot(),
		// RebootUIModule.forRoot(),
		SharedModule,
		RouterModule.forRoot(ROUTES),

		DashboardModule,
		HotelModule
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
