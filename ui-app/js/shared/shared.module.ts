import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { RebootUIModule } from 'reboot-ui2';
import { SharedServicesModule } from './services/shared-services.module';

@NgModule({
	declarations: [],
	exports: [
		CommonModule,
		NgbModule,
		// RebootUIModule,
		SharedServicesModule
	],
	providers: []
})
export class SharedModule {}
