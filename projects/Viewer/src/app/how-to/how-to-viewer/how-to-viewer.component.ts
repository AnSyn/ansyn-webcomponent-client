import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
	selector: 'app-how-to-viewer',
	templateUrl: './how-to-viewer.component.html',
	styleUrls: ['./how-to-viewer.component.less']
})
export class HowToViewerComponent implements OnInit {
	@HostBinding('class') class = 'content';
	selectedIndex: number;

	constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
				protected router: Router) {
		iconRegistry.addSvgIcon(
			'angular',
			sanitizer.bypassSecurityTrustResourceUrl('assets/Angular.svg'));
		iconRegistry.addSvgIcon(
			'react',
			sanitizer.bypassSecurityTrustResourceUrl('assets/React.svg'));
	}

	ngOnInit() {
		this.selectedIndex = 1;
	}

	selectIndex(index: number) {
		if (index === 0) {
			this.router.navigate(['']);
		} else {
			this.selectedIndex = index;
		}
	}
}
