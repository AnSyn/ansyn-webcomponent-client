import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlHowToComponent } from './html-how-to.component';

describe('Html5HowToComponent', () => {
	let component: HtmlHowToComponent;
	let fixture: ComponentFixture<HtmlHowToComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HtmlHowToComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HtmlHowToComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
