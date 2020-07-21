import { Component, Inject, OnInit } from '@angular/core';
import { configModel } from './model/config.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { saveAs } from 'file-saver';

const set = require('lodash.set');

@Component({
	selector: 'app-config-viewer',
	templateUrl: './config-viewer.component.html',
	styleUrls: ['./config-viewer.component.css']
})
export class ConfigViewerComponent implements OnInit {
	formGroup: FormGroup;

	constructor(@Inject('config') public appConfig: configModel[],
				protected http: HttpClient,
				formBuilder: FormBuilder) {
		this.formGroup = formBuilder.group(this.buildConfigToForm());
	}

	ngOnInit() {
	}


	downloadComponent() {
		const merged = {};
		this.appConfig.forEach(({ path, id }) => {
			set(merged, path, this.formGroup.value[id]);
		});
		this.http.post(`${ environment.serverUrl }/component`, merged, { responseType: 'blob' }).subscribe(blob => saveAs(blob, 'element.tgz'));

	}


	private buildConfigToForm() {
		return this.appConfig.reduce((configGroup, config) => {
			return { ...configGroup, [config.id]: Array.isArray(config.defaultValue) ? [config.defaultValue] : config.defaultValue };
		}, {});
	}
}
