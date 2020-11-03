import { Injectable } from '@angular/core';
import { Trigonometry } from '@app/classes/math/trigonometry';
import { SelectionBox } from '@app/classes/selection-box';
import { Tool } from '@app/classes/tool';
import { Rectangle } from '@app/classes/tool-properties';
import { Vec2 } from '@app/classes/vec2';
import { FILL_STYLES } from '@app/ressources/global-variables/fill-styles';
import { MouseButton } from '@app/ressources/global-variables/global-variables';
import { TOOL_NAMES } from '@app/ressources/global-variables/tool-names';
import { ColorSelectionService } from '@app/services/color-selection/color-selection.service';
import { DrawingService } from '@app/services/drawing/drawing.service';

@Injectable({
    providedIn: 'root',
})
export class SquareService extends Tool {
    name: string = TOOL_NAMES.SQUARE_TOOL_NAME;
    mouseDown: boolean = false;
    rectangleData: Rectangle;
    isShiftKeyDown: boolean = false;
    width: number = 1;
    topLeftPoint: Vec2;
    lastPoint: Vec2;
    firstPoint: Vec2;
    previewLayer: HTMLElement | null;
    fillStyle: number = FILL_STYLES.FILL;
    rectangleHeight: number;
    rectangleWidth: number;
    trigonometry: Trigonometry = new Trigonometry();
    
    constructor(drawingService: DrawingService, public colorSelectionService: ColorSelectionService) {
        super(drawingService);
    }

    initialize(): void {
        this.mouseDown = false;
        this.drawingService.previewCtx.lineCap = 'square';
        this.drawingService.baseCtx.lineCap = 'square';
    }

    setRectangleWidth(): void {
        this.rectangleWidth = Math.abs(this.firstPoint.x - this.lastPoint.x);
    }

    setRectangleHeight(): void {
        this.rectangleHeight = Math.abs(this.firstPoint.y - this.lastPoint.y);
    }

    changeWidth(newWidth: number): void {
        this.width = newWidth;
    }

    changeFillStyle(newFillStyle: number): void {
        this.fillStyle = newFillStyle;
    }

    onMouseDown(event: MouseEvent): void {
        this.mouseDown = event.button === MouseButton.LEFT;
        if (this.mouseDown) {
            this.firstPoint = this.getPositionFromMouse(event);
            this.lastPoint = this.getPositionFromMouse(event);
        }
    }

    onMouseUp(event: MouseEvent): void {
        if (this.mouseDown) {
            this.lastPoint = this.getPositionFromMouse(event);
            this.drawShape(this.drawingService.baseCtx);
            this.mouseDown = false;
        }
    }

    onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Shift') {
            this.isShiftKeyDown = true;
            if (this.mouseDown) {
                this.drawingService.clearCanvas(this.drawingService.previewCtx);
                this.drawShape(this.drawingService.previewCtx);
            }
        }
    }

    onKeyUp(event: KeyboardEvent): void {
        if (event.key === 'Shift' && this.isShiftKeyDown) {
            this.isShiftKeyDown = false;
            if (this.mouseDown) {
                this.drawingService.clearCanvas(this.drawingService.previewCtx);
                this.drawShape(this.drawingService.previewCtx);
            }
        }
    }

    onMouseMove(event: MouseEvent): void {
        if (this.mouseDown) {
            this.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.drawShape(this.drawingService.previewCtx);
        }
    }

    drawShape(ctx: CanvasRenderingContext2D): SelectionBox {
        this.setRectangleHeight();
        this.setRectangleWidth();
        if (this.isShiftKeyDown) {
            this.rectangleWidth = Math.min(this.rectangleHeight, this.rectangleWidth);
            this.rectangleHeight = this.rectangleWidth;
        }
        this.topLeftPoint = this.trigonometry.findTopLeftPoint(this.firstPoint, this.lastPoint);

        this.updateRectangleData();
        this.drawRectangle(ctx, this.rectangleData);

        if (ctx === this.drawingService.baseCtx) {
            this.drawingService.updateStack(this.rectangleData);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
        }

        return { startingPoint: this.topLeftPoint, width: this.rectangleWidth, height: this.rectangleHeight };
    }

    drawRectangle(ctx: CanvasRenderingContext2D, rectangle: Rectangle): void {
        ctx.fillStyle = rectangle.primaryColor;
        ctx.strokeStyle = rectangle.secondaryColor;
        ctx.lineWidth = rectangle.lineWidth;
        if (rectangle.fillStyle === FILL_STYLES.FILL) {
            ctx.strokeStyle = rectangle.primaryColor;
            ctx.lineWidth = 1;
        }
        ctx.beginPath();
        ctx.rect(rectangle.topLeftPoint.x, rectangle.topLeftPoint.y, rectangle.width, rectangle.height);
        if (rectangle.fillStyle !== FILL_STYLES.BORDER && rectangle.fillStyle !== FILL_STYLES.DASHED) {
            ctx.fillRect(rectangle.topLeftPoint.x, rectangle.topLeftPoint.y, rectangle.width, rectangle.height);
        }
        ctx.stroke();
    }

    private updateRectangleData(): void {
        this.rectangleData = {
            type: 'rectangle',
            primaryColor: this.colorSelectionService.primaryColor,
            secondaryColor: this.colorSelectionService.secondaryColor,
            height: this.rectangleHeight,
            width: this.rectangleWidth,
            topLeftPoint: this.topLeftPoint,
            fillStyle: this.fillStyle,
            isShiftDown: this.isShiftKeyDown,
            lineWidth: this.width,
        };
    }
}
