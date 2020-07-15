import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnsynModule } from '@ansyn/ansyn';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserAnimationsModule,
		AnsynModule.component(),
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
