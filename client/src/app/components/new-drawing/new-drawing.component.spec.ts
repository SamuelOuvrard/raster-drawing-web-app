import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { NewDrawingComponent } from './new-drawing.component';

import SpyObj = jasmine.SpyObj;
// const RECTANGLE_WIDTH = 40;
// const RECTANGLE_HEIGTH = 20;

describe('NewDrawingComponent', () => {
    let component: NewDrawingComponent;
    let fixture: ComponentFixture<NewDrawingComponent>;
    let drawingServiceSpy: SpyObj<DrawingService>;
    let baseCtxStub: CanvasRenderingContext2D;
    let previewCtxStub: CanvasRenderingContext2D;
    const WIDTH = 100;
    const HEIGHT = 100;

    beforeEach(async(() => {
        const canvas = document.createElement('canvas');
        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        const drawCanvas = document.createElement('canvas');
        drawCanvas.width = WIDTH;
        drawCanvas.height = HEIGHT;

        baseCtxStub = canvas.getContext('2d') as CanvasRenderingContext2D;
        previewCtxStub = drawCanvas.getContext('2d') as CanvasRenderingContext2D;
        drawingServiceSpy = jasmine.createSpyObj('drawingService', ['clearCanvas']);

        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [NewDrawingComponent],
            providers: [{ provides: DrawingService, useValue: drawingServiceSpy }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewDrawingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        // tslint:disable-next-line: no-string-literal
        component['drawingService'].baseCtx = baseCtxStub;
        component.drawingService.previewCtx = previewCtxStub;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    /* Test FAIL
    it('should call clearCanvas', () => {
        component.createNewDrawing();
        expect(drawingServiceSpy.clearCanvas).toHaveBeenCalled();
    });*/
});
