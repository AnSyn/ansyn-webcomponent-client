import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import config from './config';
import { ConfigViewerComponent } from './components/config-viewer/config-viewer.component';
import { DownloadComponent } from './components/download/download.component';
import { ConfigEditorComponent } from './components/config-editor/config-editor.component';

@NgModule({
	declarations: [ConfigViewerComponent,
		DownloadComponent,
		ConfigEditorComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule
	],
	exports: [ConfigViewerComponent],
	providers: [
		{
			provide: 'config',
			useValue: config
		}
	]
})
export class ConfigModule {
}
