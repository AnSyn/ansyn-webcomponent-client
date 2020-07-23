import { Component, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
	selector: 'app-how-to-viewer',
	templateUrl: './how-to-viewer.component.html',
	styleUrls: ['./how-to-viewer.component.less']
})
export class HowToViewerComponent implements OnInit {
	@HostBinding('class') class = 'content';
	constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
		iconRegistry.addSvgIcon(
			'angular',
			sanitizer.bypassSecurityTrustResourceUrl('assets/Angular.svg'));
		iconRegistry.addSvgIcon(
			'react',
			sanitizer.bypassSecurityTrustResourceUrl('assets/React.svg'));
	}

	ngOnInit() {
}

	goBack() {
		console.log('go back');
	}
}
