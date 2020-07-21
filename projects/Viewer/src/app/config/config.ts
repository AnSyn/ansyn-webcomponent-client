import { configModel } from './model/config.model';

const config: configModel[] = [
	{
		id: 'mouseShadow',
		hint: 'Enable shadow mouse by default',
		path: 'toolsConfig.ShadowMouse.activeByDefault',
		type: 'boolean',
		defaultValue: true
	},
	{
		id: 'footerCollapse',
		hint: 'Timeline could be collapse',
		path: 'coreConfig.isFooterCollapsible',
		type: 'boolean',
		defaultValue: true
	},
	{
		id: 'menuCollapse',
		hint: 'Menu could be collapse',
		path: 'menuConfig.isCollapsible',
		type: 'boolean',
		defaultValue: true
	},
	{
		id: 'filterNumber',
		hint: 'Enter maximum filters to show',
		path: 'statusBarConfig.filters.maximumOpen',
		type: 'number',
		defaultValue: 2
	},
	{
		id: 'filtersName',
		hint: 'Filters to be showed',
		placeholder: 'Filters',
		path: 'statusBarConfig.filters.filterNames',
		type: 'enum',
		enum: ['sensorType', 'sensorName', 'sourceType', 'isGeoRegistered', 'containedInSearchPolygon'],
		defaultValue: ['sensorName', 'isGeoRegistered']
	},
	{
		id: 'menuNames',
		hint: 'Menu to be shown',
		placeholder: 'Menu Items',
		path: 'menuConfig.menuItems',
		type: 'enum',
		enum: ['Filters', 'Results table', 'Data Layers', 'Tools', 'Permissions'],
		defaultValue: ['Results table', 'Data Layers', 'Tools']
	}
];

export default config;
