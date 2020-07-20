import { Component, Inject, OnInit } from '@angular/core';
import { configModel } from './model/config.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-config-viewer',
	templateUrl: './config-viewer.component.html',
	styleUrls: ['./config-viewer.component.css']
})
export class ConfigViewerComponent implements OnInit {
	formGroup: FormGroup;

	constructor(@Inject('config') protected appConfig: configModel[],
				formBuilder: FormBuilder) {
		this.formGroup = formBuilder.group(this.buildConfigToForm());
	}

	ngOnInit() {
	}


	downloadComponent() {
		console.log(JSON.stringify(this.formGroup.value, null, 4));
	}


	private buildConfigToForm() {
		return this.appConfig.reduce((configGroup, config) => {
			return { ...configGroup, [config.id]: Array.isArray(config.defaultValue) ? [config.defaultValue] : config.defaultValue };
		}, {});
	}
}
