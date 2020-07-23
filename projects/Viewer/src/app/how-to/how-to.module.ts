import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToViewerComponent } from './how-to-viewer/how-to-viewer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { HtmlHowToComponent } from './html-how-to/html-how-to.component';
import { AngularHowToComponent } from './angular-how-to/angular-how-to.component';
import { ReactHowToComponent } from './react-how-to/react-how-to.component';


@NgModule({
	declarations: [HowToViewerComponent, HtmlHowToComponent, AngularHowToComponent, ReactHowToComponent],
	imports: [
		CommonModule,
		MatTabsModule,
		MatIconModule
	],
	exports: [HowToViewerComponent]
})
export class HowToModule {
}
