import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigViewerComponent } from './config/components/config-viewer/config-viewer.component';
import { HowToViewerComponent } from './how-to/how-to-viewer/how-to-viewer.component';

const routes: Routes = [
	{
		path: '',
		component: ConfigViewerComponent,
	},
	{
		path: 'how-to',
		component: HowToViewerComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
