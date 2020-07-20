import { Component, Inject, OnInit } from '@angular/core';
import { IConfigModel } from './model/config.model';

@Component({
	selector: 'app-config-viewer',
	templateUrl: './config-viewer.component.html',
	styleUrls: ['./config-viewer.component.css']
})
export class ConfigViewerComponent implements OnInit {

	constructor(@Inject('config') protected appConfig: IConfigModel[]) {
	}

	ngOnInit() {
	}

}
