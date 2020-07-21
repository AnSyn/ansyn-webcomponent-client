import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { configModel } from '../config-viewer/model/config.model';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { filter, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

const set = require('lodash.set');

const defaultIcon = 'archive';
@Component({
	selector: 'app-download',
	templateUrl: './download.component.html',
	styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit, OnDestroy {
	@Input() form: FormGroup;
	icon: null | 'archive' | 'done' = null;
	subscriptions: Subscription[] = [];

	constructor(@Inject('config') protected appConfig: configModel[],
				protected http: HttpClient) {
	}

	ngOnInit() {
		this.subscriptions.push(
			this.form.valueChanges.pipe(
				filter(() => this.icon !== defaultIcon),
				tap(() => this.icon = defaultIcon)
			).subscribe()
		);
	}
	ngOnDestroy(): void {
		this.subscriptions.forEach( (sub) => sub.unsubscribe());
	}


	downloadComponent() {
		this.icon = null;
		const merged = {};
		this.appConfig.forEach(({ path, id }) => {
			set(merged, path, this.form.value[id]);
		});
		this.http.post(`${ environment.serverUrl }/test`, merged, {
			responseType: 'blob',
			observe: 'events',
			reportProgress: true
		}).subscribe(this.parseEvent.bind(this));

	}

	private parseEvent(event: HttpEvent<Blob>) {
		if (event.type === HttpEventType.Response) {
			this.icon = 'done';
			saveAs(event.body, 'custom-ansyn.tgz');
		}
	}

}
