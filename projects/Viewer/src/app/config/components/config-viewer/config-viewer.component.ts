import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { configModel } from '../../model/config.model';

@Component({
	selector: 'app-config-viewer',
	templateUrl: './config-viewer.component.html',
	styleUrls: ['./config-viewer.component.less']
})
export class ConfigViewerComponent implements OnInit {
	formGroup: FormGroup;

	constructor(@Inject('config') public appConfig: configModel[],
				formBuilder: FormBuilder) {
		this.formGroup = formBuilder.group(this.buildConfigToForm());
	}

	ngOnInit() {
	}

	private buildConfigToForm() {
		return this.appConfig.reduce((configGroup, config) => {
			return { ...configGroup, [config.id]: Array.isArray(config.defaultValue) ? [config.defaultValue] : config.defaultValue };
		}, {});
	}
}
