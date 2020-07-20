interface IConfigModel {
	id: string;
	path: string;
	placeholder: string;
}
interface INumberConfigModel extends IConfigModel {
	type: 'number';
	defaultValue: number;
}

interface IBooleanConfigModel extends IConfigModel {
	type: 'boolean';
	defaultValue: boolean;
}

interface IStringConfigModel extends IConfigModel {
	type: 'string';
	defaultValue: string;
}

interface IEnumConfigModel extends IConfigModel {
	type: 'enum';
	enum: string[];
	defaultValue: string[];
}

export type configModel = INumberConfigModel | IBooleanConfigModel | IStringConfigModel | IEnumConfigModel;
