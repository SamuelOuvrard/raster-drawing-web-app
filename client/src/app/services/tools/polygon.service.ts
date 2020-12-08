import { Injectable } from '@angular/core';
import { Trigonometry } from '@app/classes/math/trigonometry';
import { Tool } from '@app/classes/tool';
import { Polygon } from '@app/classes/tool-properties';
import { Vec2 } from '@app/classes/vec2';
import { FILL_STYLES } from '@app/ressources/global-variables/fill-styles';
import {
    DASH_LENGTH,
    DASH_SPACE_LENGTH,
    LINE_WIDTH_POLYGONE_CORRECTION,
    MAX_SIDES,
    MIN_SIDES,
    MouseButton,
    Quadrant,
} from '@app/ressources/global-variables/global-variables';
import { TOOL_NAMES } from '@app/ressources/global-variables/tool-names';
import { ColorSelectionService } from '@app/services/color-selection/color-selection.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { CircleService } from '@app/services/tools/circle.service';

@Injectable({
    providedIn: 'root',
})
export class PolygonService extends Tool {
    name: string = TOOL_NAMES.POLYGONE_TOOL_NAME;
    centerX: number;
    centerY: number;
    center: Vec2;
    private trigonometry: Trigonometry = new Trigonometry();
    private polygonData: Polygon;
    minNumberOfSides: number = MIN_SIDES;
    maxNumberOfSides: number = MAX_SIDES;

    constructor(drawingService: DrawingService, public colorSelectionService: ColorSelectionService, public circleService: CircleService) {
        super(drawingService);
        this.polygonData = {
            type: 'polygone',
            primaryColor: this.colorSelectionService.primaryColor,
            secondaryColor: this.colorSelectionService.secondaryColor,
            fillStyle: FILL_STYLES.FILL_AND_BORDER,
            lineWidth: 1,
            circleHeight: 0,
            circleWidth: 0,
            firstPoint: { x: 0, y: 0 },
            lastPoint: { x: 0, y: 0 },
            sides: 3,
        };
    }

    initialize(): void {
        this.drawingService.previewCtx.lineJoin = 'miter';
        this.drawingService.baseCtx.lineJoin = 'miter';
    }

    changeFillStyle(newFillStyle: number): void {
        this.polygonData.fillStyle = newFillStyle;
    }
    changeWidth(newWidth: number): void {
        this.polygonData.lineWidth = newWidth;
    }
    setSides(sides: number): void {
        this.polygonData.sides = sides;
    }

    getFillStyle(): number {
        return this.polygonData.fillStyle;
    }
    getWidth(): number {
        return this.polygonData.lineWidth;
    }
    getSides(): number {
        return this.polygonData.sides;
    }

    setCenterX(): void {
        this.centerX = Math.abs(this.polygonData.firstPoint.y - this.polygonData.lastPoint.y);
    }
    setCenterY(): void {
        this.centerY = Math.abs(this.polygonData.firstPoint.y - this.polygonData.lastPoint.y);
    }
    setCircleWidth(): void {
        this.polygonData.circleWidth = Math.abs(this.polygonData.firstPoint.x - this.polygonData.lastPoint.x);
    }
    setCircleHeight(): void {
        this.polygonData.circleHeight = Math.abs(this.polygonData.firstPoint.y - this.polygonData.lastPoint.y);
    }

    onMouseDown(event: MouseEvent): void {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        this.mouseDown = event.button === MouseButton.LEFT;
        if (this.mouseDown) {
            this.polygonData.firstPoint = this.getPositionFromMouse(event);
            this.polygonData.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.setIsToolInUse(true);
            console.log(this.polygonData.firstPoint);
            console.log(this.polygonData.lastPoint);
        }
    }

    onMouseUp(event: MouseEvent): void {
        if (this.mouseDown) {
            this.polygonData.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.updatePolygoneDataColor();
            if (this.polygonData.firstPoint.x !== this.polygonData.lastPoint.x && this.polygonData.firstPoint.y !== this.polygonData.lastPoint.y) {
                this.drawPolygone(this.drawingService.baseCtx, this.polygonData);
                this.drawingService.updateStack(this.polygonData);
            }
            this.mouseDown = false;
            this.drawingService.setIsToolInUse(false);

            this.polygonData.circleWidth = 0;
            this.polygonData.circleHeight = 0;
        }
        this.drawingService.autoSave();
    }

    onMouseMove(event: MouseEvent): void {
        if (this.mouseDown) {
            this.polygonData.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.center = this.trigonometry.getCenter(this.polygonData.firstPoint, this.polygonData.lastPoint);
            const currentLineWidth = this.drawingService.previewCtx.lineWidth;
            this.drawingService.previewCtx.lineWidth = 1;
            this.drawingService.previewCtx.strokeStyle = 'black';
            this.drawingService.previewCtx.setLineDash([DASH_LENGTH, DASH_SPACE_LENGTH]);
            this.drawCircle(this.drawingService.previewCtx);
            this.drawingService.previewCtx.lineWidth = currentLineWidth;
            this.drawingService.previewCtx.setLineDash([0]);
            this.updatePolygoneDataColor();
            this.drawPolygone(this.drawingService.previewCtx, this.polygonData);
        }
    }

    drawCircle(ctx: CanvasRenderingContext2D): void {
        this.circleService.changeFillStyle(FILL_STYLES.BORDER);
        this.circleService.firstPoint = this.polygonData.firstPoint;
        this.circleService.lastPoint = this.polygonData.lastPoint;
        this.circleService.drawCircle(ctx, this.trigonometry.findTopLeftPointCircle(this.polygonData.firstPoint, this.polygonData.lastPoint));
    }

    drawPolygone(ctx: CanvasRenderingContext2D, polygoneData: Polygon): void {
        ctx.fillStyle = polygoneData.primaryColor;
        ctx.strokeStyle = polygoneData.secondaryColor;
        ctx.lineWidth = polygoneData.lineWidth;
        ctx.setLineDash([0]);

        if (this.polygonData.fillStyle === FILL_STYLES.FILL) {
            ctx.strokeStyle = this.colorSelectionService.primaryColor;
            ctx.lineWidth = 1;
        }

        this.polygonData.firstPoint = polygoneData.firstPoint;
        this.polygonData.lastPoint = polygoneData.lastPoint;
        this.setCircleHeight();
        this.setCircleWidth();
        const ellipseRadiusX = polygoneData.circleWidth / 2;
        const ellipseRadiusY = polygoneData.circleHeight / 2;
        let circleRadius = Math.min(ellipseRadiusX, ellipseRadiusY);
        const quadrant = this.trigonometry.findQuadrant(polygoneData.firstPoint, polygoneData.lastPoint);
        const center: Vec2 = { x: 0, y: 0 };

        switch (quadrant) {
            case Quadrant.BOTTOM_LEFT:
                center.x = polygoneData.firstPoint.x - circleRadius;
                center.y = polygoneData.firstPoint.y + circleRadius;
                break;
            case Quadrant.TOP_LEFT:
                center.x = polygoneData.firstPoint.x - circleRadius;
                center.y = polygoneData.firstPoint.y - circleRadius;
                break;
            case Quadrant.BOTTOM_RIGHT:
                center.x = polygoneData.firstPoint.x + circleRadius;
                center.y = polygoneData.firstPoint.y + circleRadius;
                break;
            case Quadrant.TOP_RIGHT:
                center.x = polygoneData.firstPoint.x + circleRadius;
                center.y = polygoneData.firstPoint.y - circleRadius;
                break;
        }
        ctx.beginPath();
        ctx.lineWidth = polygoneData.lineWidth;

        if (circleRadius > ctx.lineWidth / LINE_WIDTH_POLYGONE_CORRECTION) {
            circleRadius -= ctx.lineWidth / LINE_WIDTH_POLYGONE_CORRECTION;
            ctx.moveTo(center.x, center.y - circleRadius);
            for (let i = 0; i <= polygoneData.sides + 1; i++) {
                ctx.lineTo(
                    center.x + circleRadius * Math.cos((i * 2 * Math.PI) / polygoneData.sides - Math.PI / 2),
                    center.y + circleRadius * Math.sin((i * 2 * Math.PI) / polygoneData.sides - Math.PI / 2),
                );
            }
            if (this.polygonData.fillStyle !== FILL_STYLES.BORDER) {
                ctx.fill();
            }
        }

        ctx.stroke();
        ctx.closePath();
    }

    private updatePolygoneDataColor(): void {
        this.polygonData.primaryColor = this.colorSelectionService.primaryColor;
        this.polygonData.secondaryColor = this.colorSelectionService.secondaryColor;
    }
}
