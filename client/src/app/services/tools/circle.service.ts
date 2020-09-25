import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { TOOL_NAMES } from '@app/ressources/global-variables/tool-names';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Vec2 } from '@app/classes/vec2';
//import { MouseButton } from '@app/ressources/global-variables/global-variables';


@Injectable({
    providedIn: 'root',
})
export class CircleService extends Tool {
    name: string = TOOL_NAMES.CIRCLE_TOOL_NAME;
    mouseDown: boolean;
    width: number = 1;
    lastPoint: Vec2;
    firstPoint: Vec2;

    constructor(drawingService: DrawingService) {
        super(drawingService);
        this.mouseDown = false;
    }

    handleCursor(): void {
        const previewLayer = document.getElementById('previewLayer');
        if (previewLayer) {
            previewLayer.style.cursor = 'crosshair';
        }
    }

    onMouseUp(event: MouseEvent): void {
        if (this.mouseDown) {
            this.lastPoint = this.getPositionFromMouse(event);
            const topLeftPoint = this.findTopLeftPoint(this.firstPoint, this.lastPoint);
            this.drawCircle(this.drawingService.baseCtx, topLeftPoint);
            this.mouseDown = false;
        }
    }

    onMouseMove(event: MouseEvent): void {
        if (this.mouseDown) {
            this.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            const topLeftPoint = this.findTopLeftPoint(this.firstPoint, this.lastPoint);
            this.drawCircle(this.drawingService.previewCtx, topLeftPoint);
        }
    }

    private drawCircle(ctx: CanvasRenderingContext2D, point: Vec2): void {
        ctx.fillStyle = '#000000';
        ctx.lineWidth = this.width;
        ctx.beginPath(); 
        ctx.ellipse(point.x, point.y, this.circleWidth, this.circleHeight, 0, 0, Math.PI * 2, false);
        ctx.stroke();
    }

        /*
     to find the top left point of the rectangle or the square
     */
    private findTopLeftPoint(point1: Vec2, point2: Vec2): Vec2 {
        let x = point1.x;
        let y = point1.y;
        // in the left edge
        if (point1.x > point2.x && point1.y > point2.y) {
            x = point2.x;
            y = point2.y;
        } else if (point1.x > point2.x && point1.y < point2.y) {
            x = point2.x;
            y = point1.y;
        } else if (point1.x < point2.x && point1.y > point2.y) {
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

    get CircleWidth(): number {
        return this.width > this.circleHeight ? this.width : this.circleHeight;
    }

}
