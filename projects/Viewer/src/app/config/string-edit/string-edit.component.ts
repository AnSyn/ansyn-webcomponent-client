import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-string-edit',
	templateUrl: './string-edit.component.html',
	styleUrls: ['./string-edit.component.less']
})
export class StringEditComponent implements OnInit {
	@Input() id;
	@Input() value: string[];
	@Input() form;
	@Input() placeholder;

	constructor() {
	}

	ngOnInit() {
	}

}
