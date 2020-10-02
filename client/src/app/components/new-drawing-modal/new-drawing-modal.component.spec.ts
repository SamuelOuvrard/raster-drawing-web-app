import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { NewDrawingModalComponent } from './new-drawing-modal.component';

describe('NewDrawingComponent', () => {
    let component: NewDrawingModalComponent;
    let fixture: ComponentFixture<NewDrawingModalComponent>;
    let drawingServiceStub: DrawingService;

    beforeEach(async(() => {
        drawingServiceStub = {} as DrawingService;
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [NewDrawingModalComponent],
            providers: [{ provides: DrawingService, useValue: drawingServiceStub }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewDrawingModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call clearCanvas', () => {
        const testSpy = spyOn(component.drawingService, 'clearCanvas');
        component.createNewDrawing();
        expect(testSpy).toHaveBeenCalled();
    });
});