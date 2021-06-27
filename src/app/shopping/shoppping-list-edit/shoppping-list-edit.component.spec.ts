import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopppingListEditComponent } from './shoppping-list-edit.component';

describe('ShopppingListEditComponent', () => {
  let component: ShopppingListEditComponent;
  let fixture: ComponentFixture<ShopppingListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopppingListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopppingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
