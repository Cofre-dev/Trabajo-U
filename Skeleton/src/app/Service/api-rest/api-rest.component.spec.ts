import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestComponent } from './api-rest.component';

describe('ApiRestComponent', () => {
  let component: ApiRestComponent;
  let fixture: ComponentFixture<ApiRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiRestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
