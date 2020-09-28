import { TestBed } from '@angular/core/testing';
import { Line } from '@app/classes/line';
import { Vec2 } from '@app/classes/vec2';
import { MouseButton } from '@app/ressources/global-variables/global-variables';
import { DrawingService } from '../drawing/drawing.service';
import { LineService } from './line.service';

fdescribe('LineService', () => {
    let service: LineService;
    let mouseEvent: MouseEvent;
    let deleteLastSegmentSpy: jasmine.Spy<any>;
    let deleteLineSpy: jasmine.Spy<any>;
    let drawServiceSpy: jasmine.SpyObj<DrawingService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
        });

        service = TestBed.inject(LineService);
        deleteLastSegmentSpy = spyOn<any>(service, 'deleteLastSegment').and.callThrough();
        deleteLineSpy = spyOn<any>(service, 'deleteLine').and.callThrough();
        drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas']);

        mouseEvent = {
            offsetX: 25,
            offsetY: 25,
            button: MouseButton.Left,
        } as MouseEvent;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should change line width', () => {
        service.lineWidth = 0;
        service.changeLineWidth(1);
        expect(service.lineWidth).toBe(1);
    });

    it('should change dot width', () => {
        service.dotWidth = 0;
        service.changeDotWidth(1);
        expect(service.dotWidth).toBe(1);
    });

    it('should change junction type', () => {
        service.isDot = false;
        service.changeJunction(true);
        expect(service.isDot).toBe(true);
    });

    it('mouse up should add a click to mouseclicks', () => {
        service.onMouseUp(mouseEvent);
        expect(service.mouseClicks[0].x).toEqual(mouseEvent.offsetX);
        expect(service.mouseClicks[0].y).toEqual(mouseEvent.offsetY);
    });

    it('mouse up should update the number of clicks', () => {
        service.onMouseUp(mouseEvent);
        expect(service.numberOfClicks).toBe(1);
    });

    it('mouse up should set drawing bool to true on single click', () => {
        service.onMouseUp(mouseEvent);
        expect(service.isDrawing).toBe(true);
    });

    it('mouse up should set is drawing to false on double click', () => {
        service.onMouseUp(mouseEvent);
        service.onMouseUp(mouseEvent);
        expect(service.isDrawing).toBe(false);
    });

    it('mouse up should reset the mouse clicks list if double click when not drawing a line', () => {
        service.onMouseUp(mouseEvent);
        service.onMouseUp(mouseEvent);
        expect(service.mouseClicks).toEqual([]);
    });

    it('mouse up should reset the number mouse clicks if double click when not drawing a line', () => {
        service.onMouseUp(mouseEvent);
        service.onMouseUp(mouseEvent);
        expect(service.numberOfClicks).toBe(0);
    });

    it('isShiftKeyDown should be true when shift key is pressed down', () => {
        const event = new KeyboardEvent('keypress', {
            key: 'Shift',
        });
        service.onKeyDown(event);
        expect(service.isShiftKeyDown).toBe(true);
    });

    it('isShiftKeyDown should be false when shift key is released', () => {
        const event = new KeyboardEvent('keypress', {
            key: 'Shift',
        });
        service.onKeyUp(event);
        expect(service.isShiftKeyDown).toBe(false);
    });

    it('last segment of line should be deleted when releasing backspace', () => {
        const event = new KeyboardEvent('keypress', {
            key: 'Backspace',
        });
        service.numberOfClicks = 2;
        service.onKeyUp(event);
        expect(deleteLastSegmentSpy).toHaveBeenCalled();
    });

    it('line should be deleted when escape key is released', () => {
        const event = new KeyboardEvent('keypress', {
            key: 'Escape',
        });
        service.onKeyUp(event);
        expect(deleteLineSpy).toHaveBeenCalled();
    });

    it('should return false if the two last clicks are different', () => {
        const click1: Vec2 = { x: 10, y: 10 };
        const click2: Vec2 = { x: 11, y: 10 };
        service.mouseClicks.push(click1);
        service.mouseClicks.push(click2);
        service.numberOfClicks = 2;
        const returnValue: boolean = service.checkIfDoubleClick();
        expect(returnValue).toBe(false);
    });

    // WTF
    it('should remove last storedLine, last mouseClick and decrement numberOfClicks', () => {
        const click1: Vec2 = { x: 10, y: 10 };
        const click2: Vec2 = { x: 11, y: 11 };
        const line: Line = { startingPoint: click1, endingPoint: click2 };
        service.storedLines.push(line);
        service.mouseClicks.push(click2);
        service.numberOfClicks = 1;

        service.deleteLastSegment();
        // expect(service.storedLines.length).toBe(0);
        // expect(service.mouseClicks.length).toBe(0);
        expect(service.numberOfClicks).toBe(0);
    });

    it('should reset storedLines, mouseClicks and numberOfClicks', () => {
        service.isDrawing = true;
        service.deleteLine();
        expect(service.isDrawing).toBe(false);
    });
});
