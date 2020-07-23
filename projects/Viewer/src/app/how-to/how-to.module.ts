import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToViewerComponent } from './how-to-viewer/how-to-viewer.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
	declarations: [HowToViewerComponent],
	imports: [
		CommonModule,
		MatTabsModule,
		MatIconModule
	],
	exports: [HowToViewerComponent]
})
export class HowToModule {
}
