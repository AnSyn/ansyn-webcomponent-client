import { Component, OnInit } from '@angular/core';
import { HowToConfig } from '../how-to.config';

@Component({
	selector: 'app-html-how-to',
	templateUrl: './html-how-to.component.html',
	styleUrls: ['./../how-to.global.less']
})
export class HtmlHowToComponent extends HowToConfig implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {
	}

}
