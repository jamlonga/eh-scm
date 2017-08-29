import { Params } from "@angular/router";
export class Breadcrumb {
	label: string;
	url: string;
	params?: Params;
	queryParams?: Params;
	active?: boolean = false;
}
