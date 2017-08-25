import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { RebootUIModule } from 'reboot-ui2';
import { SharedServicesModule } from './services/shared-services.module';
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
	declarations: [],
	exports: [
		CommonModule,
		NgbModule,
		RouterModule,
		// RebootUIModule,
		SharedServicesModule,
		SharedComponentsModule
	],
	providers: []
})
export class SharedModule {}
