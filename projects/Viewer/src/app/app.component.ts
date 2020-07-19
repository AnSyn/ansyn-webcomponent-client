import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Viewer';

	download() {
		window.open('assets/element.tgz', '_blank');
	}
}
