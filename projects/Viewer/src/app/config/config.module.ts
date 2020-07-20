import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import config from './config';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
import { BooleanEditComponent } from './boolean-edit/boolean-edit.component';
import { EnumEditComponent } from './enum-edit/enum-edit.component';
import { StringEditComponent } from './string-edit/string-edit.component';
@NgModule({
	declarations: [ConfigViewerComponent, NumberEditComponent, BooleanEditComponent, EnumEditComponent, StringEditComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule
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
