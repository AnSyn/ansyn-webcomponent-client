import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { configModel } from '../../model/config.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-config-viewer',
	templateUrl: './config-viewer.component.html',
	styleUrls: ['./config-viewer.component.less']
})
export class ConfigViewerComponent implements OnInit {
	formGroup: FormGroup;

	constructor(@Inject('config') public appConfig: configModel[],
				formBuilder: FormBuilder,
				protected router: Router) {
		this.formGroup = formBuilder.group(this.buildConfigToForm());
	}

	ngOnInit() {
	}

	private buildConfigToForm() {
		return this.appConfig.reduce((configGroup, config) => {
			return { ...configGroup, [config.id]: Array.isArray(config.defaultValue) ? [config.defaultValue] : config.defaultValue };
		}, {});
	}

	goToHowTo() {
		this.router.navigate(['how-to']);
	}
}
