import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import config from './config';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
import { BooleanEditComponent } from './boolean-edit/boolean-edit.component';
@NgModule({
	declarations: [ConfigViewerComponent, NumberEditComponent, BooleanEditComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatSliderModule,
		MatSlideToggleModule
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
