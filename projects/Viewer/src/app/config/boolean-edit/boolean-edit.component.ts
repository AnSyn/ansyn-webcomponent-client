import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-boolean-edit',
	templateUrl: './boolean-edit.component.html',
	styleUrls: ['./boolean-edit.component.less']
})
export class BooleanEditComponent implements OnInit {
	@Input() value;
	@Input() id;
	@Input() form;
	constructor() {
	}

	ngOnInit() {
	}

}
