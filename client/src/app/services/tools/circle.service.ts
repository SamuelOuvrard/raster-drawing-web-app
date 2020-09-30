import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { Vec2 } from '@app/classes/vec2';
import { FILL_STYLES } from '@app/ressources/global-variables/fill-styles';
import { DASH_LENGTH, DASH_SPACE_LENGTH, MouseButton } from '@app/ressources/global-variables/global-variables';
import { TOOL_NAMES } from '@app/ressources/global-variables/tool-names';
import { ColorSelectionService } from '@app/services/color-selection/color-selection.service';
import { DrawingService } from '@app/services/drawing/drawing.service';

@Injectable({
    providedIn: 'root',
})
export class CircleService extends Tool {
    name: string = TOOL_NAMES.CIRCLE_TOOL_NAME;
    mouseDown: boolean;
    isShiftKeyDown: boolean = false;
    width: number = 1;
    lastPoint: Vec2;
    firstPoint: Vec2;
    fillStyle: number;

    constructor(drawingService: DrawingService, public colorSelectionService: ColorSelectionService) {
        super(drawingService);
        this.mouseDown = false;
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

    onMouseMove(event: MouseEvent): void {
        if (this.mouseDown) {
            this.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.drawShape(this.drawingService.previewCtx);
        }
    }

    private drawShape(ctx: CanvasRenderingContext2D): void {
        const topLeftPoint = this.findTopLeftPoint();
        ctx.fillStyle = this.colorSelectionService.primaryColor;
        ctx.strokeStyle = this.colorSelectionService.secondaryColor;
        ctx.lineWidth = this.width;
        ctx.setLineDash([0]);

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

        if (this.isShiftKeyDown) {
            this.drawCircle(ctx, topLeftPoint);
        } else {
            this.drawEllipse(ctx, topLeftPoint);
        }

        if (ctx === this.drawingService.previewCtx) {
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.setLineDash([DASH_LENGTH, DASH_SPACE_LENGTH]);
            ctx.rect(topLeftPoint.x, topLeftPoint.y, this.circleWidth, this.circleHeight);
            ctx.stroke();
            ctx.lineWidth = this.width;
        } else {
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.drawingService.previewCtx.setLineDash([0]);
        }
    }

    private drawCircle(ctx: CanvasRenderingContext2D, point: Vec2): void {
        const ellipseRadiusX = this.circleWidth / 2;
        const ellipseRadiusY = this.circleHeight / 2;
        const ellipseCenterX = point.x + ellipseRadiusX;
        const ellipseCenterY = point.y + ellipseRadiusY;

        if (this.circleWidth >= this.circleHeight) {
            ctx.beginPath();
            ctx.arc(ellipseCenterX, ellipseCenterY, ellipseRadiusY, 0, Math.PI * 2, false);
            if (this.fillStyle !== FILL_STYLES.BORDER) {
                ctx.fill();
            }
            ctx.stroke();
        } else if (this.circleWidth < this.circleHeight) {
            ctx.beginPath();
            ctx.arc(ellipseCenterX, ellipseCenterY, ellipseRadiusX, 0, Math.PI * 2, false);
            if (this.fillStyle !== FILL_STYLES.BORDER) {
                ctx.fill();
            }
            ctx.stroke();
        }
    }

    private drawEllipse(ctx: CanvasRenderingContext2D, point: Vec2): void {
        const ellipseRadiusX = this.circleWidth / 2;
        const ellipseRadiusY = this.circleHeight / 2;
        const ellipseCenterX = point.x + ellipseRadiusX;
        const ellipseCenterY = point.y + ellipseRadiusY;

        ctx.beginPath();
        ctx.ellipse(ellipseCenterX, ellipseCenterY, ellipseRadiusX, ellipseRadiusY, 0, 0, Math.PI * 2, false);
        if (this.fillStyle !== FILL_STYLES.BORDER) {
            ctx.fill();
        }
        ctx.stroke();
    }

    /*
     to find the top left point of the rectangle or the square
     */
    private findTopLeftPoint(): Vec2 {
        const point1 = this.firstPoint;
        const point2 = this.lastPoint;
        // firstPoint is top left corner lastPoint is bottom right corner
        let x = point1.x;
        let y = point1.y;
        if (point1.x > point2.x && point1.y > point2.y) {
            // firstPoint is bottom right corner lastPoint is top left corner
            x = point2.x;
            y = point2.y;
        } else if (point1.x > point2.x && point1.y < point2.y) {
            // firstPoint is top right corner lastPoint is bottom left corner
            x = point2.x;
            y = point1.y;
        } else if (point1.x < point2.x && point1.y > point2.y) {
            // firstPoint is bottom left corner lastPoint is top right corner
            x = point1.x;
            y = point2.y;
        }

        return { x, y };
    }

    get circleWidth(): number {
        return Math.abs(this.firstPoint.x - this.lastPoint.x);
    }

    get circleHeight(): number {
        return Math.abs(this.firstPoint.y - this.lastPoint.y);
    }
}
