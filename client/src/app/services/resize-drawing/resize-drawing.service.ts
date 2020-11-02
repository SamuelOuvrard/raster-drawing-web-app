import { Injectable } from '@angular/core';
import { Resize } from '@app/classes/tool-properties';
import { Vec2 } from '@app/classes/vec2';
import { CANVAS_RESIZING_POINTS } from '@app/ressources/global-variables/canvas-resizing-points';
import {
    HALF_RATIO,
    MINIMUM_CANVAS_HEIGHT,
    MINIMUM_CANVAS_WIDTH,
    MINIMUM_WORKSPACE_HEIGHT,
    MINIMUM_WORKSPACE_WIDTH,
    MouseButton,
} from '@app/ressources/global-variables/global-variables';
import { DrawingService } from '@app/services/drawing/drawing.service';

@Injectable({
    providedIn: 'root',
})
export class ResizeDrawingService {
    canvasSize: Vec2;
    previewSize: Vec2;
    mouseDownCoord: Vec2;
    mouseDown: boolean = false;
    serviceCaller: string;
    workSpaceSize: Vec2;
    resizeData: Resize;
    imageData: ImageData;
    mouseEvent: MouseEvent;

    constructor(public drawingService: DrawingService) {}

    setDefaultCanvasSize(): void {
        if (this.workSpaceSize.x > MINIMUM_WORKSPACE_WIDTH) {
            this.canvasSize.x = this.workSpaceSize.x * HALF_RATIO;
        } else {
            this.canvasSize.x = MINIMUM_CANVAS_WIDTH;
        }

        if (this.workSpaceSize.y > MINIMUM_WORKSPACE_HEIGHT) {
            this.canvasSize.y = this.workSpaceSize.y * HALF_RATIO;
        } else {
            this.canvasSize.y = MINIMUM_CANVAS_HEIGHT;
        }

        this.previewSize.x = this.canvasSize.x;
        this.previewSize.y = this.canvasSize.y;

        setTimeout(() => {
            this.drawingService.initializeBaseCanvas();
        });
    }

    onMouseDown(event: MouseEvent): void {
        this.mouseDown = event.button === MouseButton.LEFT;
        if (this.mouseDown) {
            this.mouseDownCoord = this.getPositionFromMouse(event);
            const target = event.target as HTMLElement;
            this.serviceCaller = target.id;
        }
    }

    onMouseUp(): void {
        if (this.mouseDown) {
            this.updateResizeData();
            this.resizeCanvas(this.resizeData);
            this.drawingService.updateStack(this.resizeData);
        }
        this.mouseDown = false;
    }

    resizeCanvas(resizeData: Resize): void {
        const tempCanvas: HTMLCanvasElement = document.createElement('canvas');
        tempCanvas.width = resizeData.canvasSize.x;
        tempCanvas.height = resizeData.canvasSize.y;
        const tempCanvasCtx: CanvasRenderingContext2D = tempCanvas.getContext('2d') as CanvasRenderingContext2D;
        tempCanvasCtx.drawImage(this.drawingService.canvas, 0, 0);

        this.canvasSize.x = this.previewSize.x;
        this.canvasSize.y = this.previewSize.y;

        setTimeout(() => {
            this.drawingService.initializeBaseCanvas();
            let baseCtx: CanvasRenderingContext2D;
            baseCtx = this.drawingService.canvas.getContext('2d') as CanvasRenderingContext2D;
            baseCtx.drawImage(tempCanvas, 0, 0);
        });
        this.imageData = this.drawingService.getCanvasData();
    }

    getPositionFromMouse(event: MouseEvent): Vec2 {
        return { x: event.clientX, y: event.clientY };
    }

    adjustResizeDimensions(event: MouseEvent): void {
        switch (this.serviceCaller) {
            case CANVAS_RESIZING_POINTS.VERTICAL:
                this.adjustResizeHeight(event);
                break;
            case CANVAS_RESIZING_POINTS.HORIZONTAL:
                this.adjustResizeWidth(event);
                break;
            case CANVAS_RESIZING_POINTS.VERTICAL_AND_HORIZONTAL:
                this.adjustResizeWidthAndHeight(event);
                break;
            default:
        }
    }

    private adjustResizeHeight(event: MouseEvent): void {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            const mousePositionChangeY = mousePosition.y - this.mouseDownCoord.y;
            const newCanvasHeight = this.previewSize.y + mousePositionChangeY;
            if (newCanvasHeight >= MINIMUM_CANVAS_HEIGHT) {
                this.previewSize.y = newCanvasHeight;
            }
            this.mouseDownCoord = mousePosition;
        }
    }

    private adjustResizeWidthAndHeight(event: MouseEvent): void {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            const mousePositionChangeY = mousePosition.y - this.mouseDownCoord.y;
            const newCanvasHeight = this.previewSize.y + mousePositionChangeY;
            if (newCanvasHeight >= MINIMUM_CANVAS_HEIGHT) {
                this.previewSize.y = newCanvasHeight;
            }
            const mousePositionChangeX = mousePosition.x - this.mouseDownCoord.x;
            const newCanvasWidth = this.previewSize.x + mousePositionChangeX;
            if (newCanvasWidth >= MINIMUM_CANVAS_WIDTH) {
                this.previewSize.x = newCanvasWidth;
            }
            this.mouseDownCoord = mousePosition;
        }
    }

    private adjustResizeWidth(event: MouseEvent): void {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            const mousePositionChangeX = mousePosition.x - this.mouseDownCoord.x;
            const newCanvasWidth = this.previewSize.x + mousePositionChangeX;
            if (newCanvasWidth >= MINIMUM_CANVAS_WIDTH) {
                this.previewSize.x = newCanvasWidth;
            }
            this.mouseDownCoord = mousePosition;
        }
    }

    private updateResizeData(): void {
        this.resizeData = {
            type: 'resize',
            canvasSize: this.canvasSize,
        };
    }
}
