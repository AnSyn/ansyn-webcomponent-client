import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-enum-edit',
	templateUrl: './enum-edit.component.html',
	styleUrls: ['./enum-edit.component.css']
})
export class EnumEditComponent implements OnInit {
	@Input() id;
	@Input() values: string[];
	@Input() value: string[];
	@Input() form;
	@Input() placeholder;
	control = new FormControl();
	constructor() {
	}

	ngOnInit() {
		this.control.setValue(this.value);
	}

}
