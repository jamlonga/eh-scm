import { Component, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
// import { RootScope, SidebarLeftService } from 'reboot-ui2';
// import { Authentication } from 'shared/services';

// let Ps = require('perfect-scrollbar');
// const scrollbarOptions = {
// 	minScrollbarLength: 30,
// 	suppressScrollX: true
// };

@Component({
	selector: 'sidebar-left',
	templateUrl: './sidebar-left.component.pug',
	styleUrls: ['./sidebar-left.component.less']
})
export class SidebarLeftComponent {

	constructor(
		// private authentication: Authentication,
		private el: ElementRef,
		// private sidebarLeftService: SidebarLeftService,
		@Inject(DOCUMENT) private document: Document
	) {}

	// ngAfterViewInit(): void {
	// 	this.windowRef.nativeWindow.addEventListener('resize', () => {
	// 		if (!this.document.querySelector('body').classList.contains(SidebarLeftService.SIDEBAR_MINIMIZED_CLASS_NAME)) {
	// 			Ps.update(this.el.nativeElement.querySelector('#rb-sidebar-menu-container'), scrollbarOptions);
	// 		}
	// 	});
	// 	this.sidebarLeftService.onSidebarStateChange(() => {
	// 		this.updateScrollbar();
	// 	});
	// 	setTimeout(() => {
	// 		this.updateScrollbar();
	// 	}, 100);
	// }

	// updateScrollbar() {
	// 	if (this.sidebarLeftService.sidebarState === 'maximized') {
	// 		Ps.initialize(this.el.nativeElement.querySelector('#rb-sidebar-menu-container'), scrollbarOptions);
	// 	} else {
	// 		Ps.destroy(this.el.nativeElement.querySelector('#rb-sidebar-menu-container'));
	// 	}
	// }
}
