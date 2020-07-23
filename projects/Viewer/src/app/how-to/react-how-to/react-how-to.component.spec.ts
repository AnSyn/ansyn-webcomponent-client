import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactHowToComponent } from './react-how-to.component';

describe('ReactHowToComponent', () => {
	let component: ReactHowToComponent;
	let fixture: ComponentFixture<ReactHowToComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ReactHowToComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ReactHowToComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
