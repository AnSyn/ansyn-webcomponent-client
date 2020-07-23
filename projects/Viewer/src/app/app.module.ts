import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigModule } from './config/config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HowToModule } from './how-to/how-to.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserAnimationsModule,
		ConfigModule,
		HowToModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
