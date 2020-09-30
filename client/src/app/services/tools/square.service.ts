import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
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
    mouseDown: boolean;
    isShiftKeyDown: boolean = false;
    width: number = 1;
    lastPoint: Vec2;
    firstPoint: Vec2;
    previewLayer: HTMLElement | null;
    fillStyle: number;

    constructor(drawingService: DrawingService, public colorSelectionService: ColorSelectionService) {
        super(drawingService);
        this.mouseDown = false;
        this.fillStyle = FILL_STYLES.FILL_AND_BORDER;
    }

    handleCursor(): void {
        const previewCanvas = this.drawingService.previewCanvas;
        if (previewCanvas) {
            previewCanvas.style.cursor = 'crosshair';
        }
    }

    changeWidth(newWidth: number): void {
        this.width = newWidth;
    }

    changeFillStyle(newFillStyle: number): void {
        this.fillStyle = newFillStyle;
    }

    onMouseDown(event: MouseEvent): void {
        this.mouseDown = event.button === MouseButton.Left;
        if (this.mouseDown) {
            this.firstPoint = this.getPositionFromMouse(event);
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
        if (event.key === 'Shift') {
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

    private drawShape(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.colorSelectionService.primaryColor;
        ctx.strokeStyle = this.colorSelectionService.secondaryColor;
        ctx.globalAlpha = this.colorSelectionService.primaryOpacity;
        ctx.lineWidth = this.width;

        switch (this.fillStyle) {
            case FILL_STYLES.FILL:
                ctx.strokeStyle = this.colorSelectionService.primaryColor;
                ctx.lineWidth = 1;
                break;
            case FILL_STYLES.BORDER:
                ctx.globalAlpha = this.colorSelectionService.secondaryOpacity;
                break;
            default:
        }

        ctx.beginPath();

        if (this.isShiftKeyDown) {
            this.drawSquare(ctx);
        } else {
            this.drawRectangle(ctx);
        }

        if (ctx === this.drawingService.baseCtx) {
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
        }

        ctx.stroke();
    }

    private drawRectangle(ctx: CanvasRenderingContext2D): void {
        const topLeftPoint = this.findTopLeftPoint(this.rectangleWidth, this.rectangleHeight);
        ctx.rect(topLeftPoint.x, topLeftPoint.y, this.rectangleWidth, this.rectangleHeight);
        if (this.fillStyle !== FILL_STYLES.BORDER) {
            ctx.fillRect(topLeftPoint.x, topLeftPoint.y, this.rectangleWidth, this.rectangleHeight);
        }
    }

    private drawSquare(ctx: CanvasRenderingContext2D): void {
        const squareWidth = Math.min(this.rectangleHeight, this.rectangleWidth);
        const topLeftPoint = this.findTopLeftPoint(squareWidth, squareWidth);

        ctx.rect(topLeftPoint.x, topLeftPoint.y, squareWidth, squareWidth);
        if (this.fillStyle !== FILL_STYLES.BORDER) {
            ctx.fillRect(topLeftPoint.x, topLeftPoint.y, squareWidth, squareWidth);
        }
    }

    /*
     to find the top left point of the rectangle or the square
     */
    private findTopLeftPoint(width: number, height: number): Vec2 {
        const point1 = this.firstPoint;
        const point2 = this.lastPoint;
        // firstPoint is top left corner lastPoint is bottom right corner
        let x = point1.x;
        let y = point1.y;

        if (point1.x > point2.x && point1.y > point2.y) {
            // firstPoint is bottom right corner lastPoint is top left corner
            x = point1.x - width;
            y = point1.y - height;
        } else if (point1.x > point2.x && point1.y < point2.y) {
            // firstPoint is top right corner lastPoint is bottom left corner
            x = point1.x - width;
            y = point1.y;
        } else if (point1.x < point2.x && point1.y > point2.y) {
            // firstPoint is bottom left corner lastPoint is top right corner
            x = point1.x;
            y = point1.y - height;
        }

        return { x, y };
    }

    get rectangleWidth(): number {
        return Math.abs(this.firstPoint.x - this.lastPoint.x);
    }

    get rectangleHeight(): number {
        return Math.abs(this.firstPoint.y - this.lastPoint.y);
    }
}
