import { Component, OnInit } from '@angular/core';
import { HowToConfig } from '../how-to.config';

@Component({
	selector: 'app-react-how-to',
	templateUrl: './react-how-to.component.html',
	styleUrls: ['./../how-to.global.less']
})
export class ReactHowToComponent extends HowToConfig implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() {
	}

}
