import { Component, OnInit } from '@angular/core';
import { HowToConfig } from '../how-to.config';

@Component({
	selector: 'app-angular-how-to',
	templateUrl: './angular-how-to.component.html',
	styleUrls: ['./../how-to.global.less']
})
export class AngularHowToComponent extends HowToConfig implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() {
	}

}
