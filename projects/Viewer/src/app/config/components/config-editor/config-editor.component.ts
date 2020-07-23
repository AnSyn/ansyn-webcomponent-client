import { Component, Inject, Input, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { configModel } from '../../model/config.model';

@Component({
	selector: 'app-config-editor',
	templateUrl: './config-editor.component.html',
	styleUrls: ['./config-editor.component.less']
})
export class ConfigEditorComponent implements OnInit {
	@Input() form: FormGroup;
	@HostBinding('class') class = 'content';
	constructor(@Inject('config') public appConfig: configModel[]) {
	}

	ngOnInit() {
	}

}
