import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHowToComponent } from './angular-how-to.component';

describe('AngularHowToComponent', () => {
	let component: AngularHowToComponent;
	let fixture: ComponentFixture<AngularHowToComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AngularHowToComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AngularHowToComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
