import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { NewDrawingService } from './new-drawing.service';

import SpyObj = jasmine.SpyObj;
const RECTANGLE_WIDTH = 40;
const RECTANGLE_HEIGTH = 20;

describe('NewDrawingService', () => {
    let service: NewDrawingService;
    let matDialogSpy: SpyObj<MatDialog>;
    let drawingServiceSpy: SpyObj<DrawingService>;

    beforeEach(async(() => {
        matDialogSpy = jasmine.createSpyObj('dialog', ['open']);
        drawingServiceSpy = jasmine.createSpyObj('DrawingService', ['isCanvasBlank', 'clearCanvas']);
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: MatDialog, useValue: matDialogSpy },
                { provide: DrawingService, useValue: drawingServiceSpy },
            ],
        });
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NewDrawingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should open Warning', () => {
        const canvas = document.createElement('canvas');
        const baseCtxStub = canvas.getContext('2d') as CanvasRenderingContext2D;
        baseCtxStub.fillRect(0, 0, RECTANGLE_WIDTH, RECTANGLE_HEIGTH);
        service.drawingService.canvas = canvas;
        service.drawingService.baseCtx = baseCtxStub;

        service.openWarning();
        expect(drawingServiceSpy.isCanvasBlank(baseCtxStub)).toBeFalsy();
        expect(matDialogSpy.open).toHaveBeenCalled();
    });
});
