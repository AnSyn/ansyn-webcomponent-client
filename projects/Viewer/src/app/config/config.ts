import { configModel } from './config-viewer/model/config.model';

const config: configModel[] = [
	{
		id: 'mouseShadow',
		placeholder: 'enable shadow mouse by default',
		path: 'toolsConfig.ShadowMouse.activeByDefault',
		type: 'boolean',
		defaultValue: true
	},
	{
		id: 'filterNumber',
		placeholder: 'enter maximum filters to show',
		path: 'statusBarConfig.filters.maximumOpen',
		type: 'number',
		defaultValue: 2
	},
	{
		id: 'filtersName',
		placeholder: 'filter to be showed',
		path: 'statusBarConfig.filters.filterNames',
		type: 'enum',
		enum: ['sensorType', 'sensorName', 'sourceType', 'isGeoRegistered', 'containedInSearchPolygon'],
		defaultValue: ['sensorName', 'isGeoRegistered']
	},
	{
		id: 'menuNames',
		placeholder: 'menu to be shown',
		path: 'menuConfig.menuItems',
		type: 'enum',
		enum: ['Filters', 'Results table', 'Data Layers', 'Tools', 'Permissions'],
		defaultValue: ['Results table', 'Data Layers', 'Tools']
	}
];

export default config;
