import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { fetchConfigProviders } from '@ansyn/ansyn';

if (environment.production) {
	enableProdMode();
}

const mergeChanges = {
	toolsConfig: {
		ShadowMouse: {
			forceSendShadowMousePosition: true
		}
	},
	layersManagerConfig: {
		schema: null
	},
	menuConfig: {
		menuItems: [
			'Data Layers'
		],
		isCollapsible: true
	},
	mapFacadeConfig: {
		mapSearch: {
			active: false
		}
	},
	coreConfig: {
		enable3D: false
	},
	multipleOverlaysSourceConfig: {
		useAngleDebugMode: false,
		indexProviders: {
			SENTINEL: {
				inActive: true
			}
		}
	}
};

fetchConfigProviders('assets/config/app.config.json', mergeChanges)
	.then(providers => platformBrowserDynamic(providers).bootstrapModule(AppModule).catch(err => console.log(err)));
