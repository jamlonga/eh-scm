import {
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/animations';

export const slideInDown = trigger('slideInDown', [
	state('in', style({transform: 'translate3d(0, 0, 0)', opacity: '1'})),
	transition('void => *', [
		style({transform: 'translate3d(0, -20px, 0)', opacity: '0'}),
		animate('0.2s ease-in')
	]),
	transition('* => void', [
		animate('0.2s ease-in', style({transform: 'translate3d(0, -20px, 0)', opacity: '0'}))
	])
]);

export const expand = trigger('expand', [
	transition('void => *', [
		style({height: '0', overflow: 'hidden'}),
		animate('0.2s ease-in', style({height: '*'}))
	]),
	transition('* => void', [
		style({overflow: 'hidden'}),
		animate('0.2s ease-in', style({height: '0'}))
	])
]);
