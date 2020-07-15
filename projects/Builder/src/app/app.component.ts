import { Component, EventEmitter, Output } from '@angular/core';
import * as packageJson from 'root/package';
import { AnsynApi } from '@ansyn/ansyn';

@Component({
	selector: 'app-root',
	template: `
		<ansyn-app [version]="version"></ansyn-app>
	`,
	styles: [`
		:host {
			display: block;
			flex-direction: column;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
		}
	`]
})
export class AppComponent {
	version: string = (packageJson as any).dependencies['@ansyn/ansyn'].replace(/[/^/~]/g, '');

	@Output() Ready = new EventEmitter();

	constructor(protected ansynApi: AnsynApi) {
		window['ansynApi'] = ansynApi;

		this.ansynApi.events.onReady.subscribe(() => this.Ready.next());
	}
}
