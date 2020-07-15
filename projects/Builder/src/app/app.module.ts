import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnsynModule } from '@ansyn/ansyn';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

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
	entryComponents: [AppComponent]
})
export class AppModule {
	constructor(private injector: Injector) {
		const webComponent = createCustomElement(AppComponent, {injector});
		customElements.define('custom-ansyn', webComponent);
	}
	ngDoBootstrap() {}
}
