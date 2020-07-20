import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import config from './config';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
@NgModule({
	declarations: [ConfigViewerComponent, NumberEditComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatSliderModule
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
