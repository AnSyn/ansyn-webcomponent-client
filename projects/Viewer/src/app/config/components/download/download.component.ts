import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { configModel } from '../../model/config.model';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { filter, tap, catchError } from 'rxjs/operators';
import { Subscription, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

const set = require('lodash.set');

const defaultIcon = 'archive';
@Component({
	selector: 'app-download',
	templateUrl: './download.component.html',
	styleUrls: ['./download.component.less']
})
export class DownloadComponent implements OnInit, OnDestroy {
	@Input() form: FormGroup;
	icon: null | 'archive' | 'done' = defaultIcon;
	subscriptions: Subscription[] = [];

	constructor(@Inject('config') protected appConfig: configModel[],
				protected http: HttpClient,
				private snackBar: MatSnackBar) {
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
		this.http.post(`${ environment.serverUrl }/component`, merged, {
			responseType: 'blob',
			observe: 'events',
			reportProgress: true
		}).pipe(
			tap(this.parseEvent.bind(this)),
			catchError((e) => {
				this.snackBar.open('Error creating component', '', {politeness: 'assertive', duration: 2000});
				this.icon = defaultIcon;
				return EMPTY;
			})).subscribe();

	}

	private parseEvent(event: HttpEvent<Blob>) {
		console.log({event})
		if (event.type === HttpEventType.Response) {
			this.icon = 'done';
			saveAs(event.body, 'custom-ansyn.tgz');
		}
	}

}
