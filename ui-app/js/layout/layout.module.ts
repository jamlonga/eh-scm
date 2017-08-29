import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SidebarLeftComponent } from './sidebar-left.component';
import { TopbarComponent } from './topbar.component';
import { BreadcrumbService } from './breadcrumb.service';

@NgModule({
	imports: [SharedModule],
	declarations: [TopbarComponent, SidebarLeftComponent],
	exports: [TopbarComponent, SidebarLeftComponent],
	providers: [BreadcrumbService]
})
export class LayoutModule {}
