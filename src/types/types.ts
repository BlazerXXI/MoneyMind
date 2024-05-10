export interface ITitle {
	title: {
		title: string;
		description: string;
	};
}

export interface IHeader extends ITitle {}

export interface IFooter extends ITitle {}
