import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-number-edit',
	templateUrl: './number-edit.component.html',
	styleUrls: ['./number-edit.component.css']
})
export class NumberEditComponent implements OnInit {
	@Input() value;
	@Input() id;
	@Input() form;
	constructor() {
	}

	ngOnInit() {
	}

}
