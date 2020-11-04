import { TestBed } from '@angular/core/testing';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from './drawing.service';

describe('DrawingService', () => {
    let service: DrawingService;
    const WIDTH = 100;
    const HEIGHT = 100;

    beforeEach(() => {
        const canvas = document.createElement('canvas');
        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        const drawCanvas = document.createElement('canvas');
        drawCanvas.width = WIDTH;
        drawCanvas.height = HEIGHT;

        TestBed.configureTestingModule({});
        service = TestBed.inject(DrawingService);
        service.canvas = canvas;
        service.baseCtx = canvas.getContext('2d') as CanvasRenderingContext2D;
        service.previewCtx = drawCanvas.getContext('2d') as CanvasRenderingContext2D;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should clear the whole canvas', () => {
        service.clearCanvas(service.baseCtx);
        const pixelBuffer = new Uint32Array(service.baseCtx.getImageData(0, 0, service.canvas.width, service.canvas.height).data.buffer);
        const hasColoredPixels = pixelBuffer.some((color) => color !== 0);
        expect(hasColoredPixels).toEqual(false);
    });

    it('should initialize canvas as all white canvas', () => {
        const fillRectSpy = spyOn(service.baseCtx, 'fillRect');
        service.initializeBaseCanvas();
        expect(service.baseCtx.fillStyle).toEqual('#ffffff');
        expect(fillRectSpy).toHaveBeenCalledWith(0, 0, service.canvas.width, service.canvas.height);
    });

    it('should return true if the canvas is blank', () => {
        service.initializeBaseCanvas();
        expect(service.isCanvasBlank(service.baseCtx)).toEqual(true);
    });

    it('should return false if the canvas is not blank', () => {
        service.initializeBaseCanvas();
        service.baseCtx.fillStyle = 'red';
        service.baseCtx.fillRect(0, 0, 1, 1);
        expect(service.isCanvasBlank(service.baseCtx)).toEqual(false);
    });

    it('should get pixelData from baseCtx', () => {
        const pixel: Vec2 = { x: 1, y: 1 };
        // tslint:disable-next-line: no-magic-numbers
        const expectedResult: Uint8ClampedArray = new Uint8ClampedArray([255, 0, 0, 255]);

        service.initializeBaseCanvas();
        service.baseCtx.fillStyle = 'red';
        service.baseCtx.fillRect(1, 1, 1, 1);

        expect(service.getPixelData(pixel)).toEqual(expectedResult);
    });

    it('should get ImageData from baseCtx', () => {
        // tslint:disable-next-line: no-magic-numbers
        const pixels: Uint8ClampedArray = new Uint8ClampedArray([255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]);
        const expectedCanvasData: ImageData = { data: pixels, height: 2, width: 2 };

        service.canvas.width = 2;
        service.canvas.height = 2;

        service.initializeBaseCanvas();
        service.baseCtx.fillStyle = 'red';
        service.baseCtx.fillRect(0, 0, 1, 1);

        const canvasData = service.getCanvasData();
        expect(canvasData.data).toEqual(expectedCanvasData.data);
        expect(canvasData.width).toEqual(expectedCanvasData.width);
        expect(canvasData.height).toEqual(expectedCanvasData.height);
    });
});
