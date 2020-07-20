import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanEditComponent } from './boolean-edit.component';

describe('BooleanEditComponent', () => {
	let component: BooleanEditComponent;
	let fixture: ComponentFixture<BooleanEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BooleanEditComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BooleanEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
