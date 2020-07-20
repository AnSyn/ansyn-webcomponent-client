interface INumberConfigModel {
	placeholder: string;
	path: string;
	type: 'number';
	defaultValue: number;
}

interface IBooleanConfigModel {
	placeholder: string;
	path: string;
	type: 'boolean';
	defaultValue: boolean;
}

interface IStringConfigModel {
	placeholder: string;
	path: string;
	type: 'string';
	defaultValue: string;
}

interface IEnumConfigModel {
	placeholder: string;
	path: string;
	type: 'enum';
	enum: string[];
	defaultValue: string[];
}

export type IConfigModel = INumberConfigModel | IBooleanConfigModel | IStringConfigModel | IEnumConfigModel;
