import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { RebootUIModule } from 'reboot-ui2';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		ReactiveFormsModule,
		// NgbModule.forRoot(),
		// RebootUIModule.forRoot(),

		DashboardModule
	],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
