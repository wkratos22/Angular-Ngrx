import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailContentComponent } from './modal-detail-content.component';

describe('ModalContentComponent', () => {
  let component: ModalDetailContentComponent;
  let fixture: ComponentFixture<ModalDetailContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetailContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
