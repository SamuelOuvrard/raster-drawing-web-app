import { EventEmitter, Injectable, Output } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { Vec2 } from '@app/classes/vec2';
import { MouseButton, ZOOM_PIPETTE, ZOOM_RADIUS } from '@app/ressources/global-variables/global-variables';
import { TOOL_NAMES } from '@app/ressources/global-variables/tool-names';
import { ColorSelectionService } from '@app/services/color-selection/color-selection.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Subject } from 'rxjs';

const MAX_OPACITY = 255;

@Injectable({
    providedIn: 'root',
})
export class PipetteService extends Tool {
    @Output() mouseOut: Subject<boolean> = new Subject();
    color: string[] = ['#000000', '0'];
    primaryColor: EventEmitter<string[]> = new EventEmitter<string[]>();
    secondaryColor: EventEmitter<string[]> = new EventEmitter<string[]>();
    name: string = TOOL_NAMES.PIPETTE_TOOL_NAME;
    zoom: HTMLCanvasElement;
    zoomCtx: CanvasRenderingContext2D;
    isNearBorder: boolean = false;

    constructor(drawingService: DrawingService, public colorSelectionService: ColorSelectionService) {
        super(drawingService);
    }

    handleCursor(): void {
        const previewCanvas = this.drawingService.previewCanvas;
        previewCanvas.style.cursor = 'crosshair';
    }

    onMouseDown(event: MouseEvent): void {
        this.mouseDown = true;
        this.mouseDownCoord = this.getPositionFromMouse(event);
        const pixel = this.drawingService.baseCtx.getImageData(this.mouseDownCoord.x, this.mouseDownCoord.y, 1, 1);
        const pixelData = pixel.data;
        console.log(pixelData);
        this.color[0] = '#' + pixelData[0].toString(16) + pixelData[1].toString(16) + pixelData[2].toString(16);
        this.color[1] = pixelData[3].toString();
        console.log(this.color[0]);
        if (event.button === MouseButton.LEFT) {
            this.primaryColor.emit(this.color);
        }
        if (event.button === MouseButton.RIGHT) {
            this.secondaryColor.emit(this.color);
        }
    }

    showZoomPixel(event: MouseEvent): void {
        this.clearCanvas();
        if (!this.isNearBorder) {
            this.drawOnZoom(event);
        }
    }

    drawOnZoom(event: MouseEvent): void {
        const x = this.getPositionFromMouse(event).x;
        const y = this.getPositionFromMouse(event).y;

        const hSource = this.zoom.height / ZOOM_PIPETTE;
        const wSource = this.zoom.width / ZOOM_PIPETTE;

        this.zoomCtx.beginPath();
        this.zoomCtx.arc(this.zoom.width / 2, this.zoom.height / 2, ZOOM_RADIUS, 0, 2 * Math.PI);
        this.zoomCtx.clip();
        this.zoomCtx.drawImage(
            this.drawingService.canvas,
            x - wSource / 2,
            y - hSource / 2,
            wSource,
            hSource,
            0,
            0,
            this.zoom.width,
            this.zoom.height,
        );
        this.zoomCtx.closePath();
        this.handleCursorOnPixel(event, this.zoom.width, this.zoom.height);
    }

    handleCursorOnPixel(e: MouseEvent, width: number, height: number): void {
        const mousePosition = this.getPositionFromMouse(e);
        const pixelData = this.drawingService.baseCtx.getImageData(mousePosition.x, mousePosition.y, 1, 1).data;
        const opacityIndex = 3;
        const color = 'rgba(' + pixelData[0] + ', ' + pixelData[1] + ', ' + pixelData[2] + ', ' + pixelData[opacityIndex] / MAX_OPACITY + ')';
        this.zoomCtx.beginPath();
        this.zoomCtx.fillStyle = color;
        this.zoomCtx.strokeStyle = 'white';
        this.zoomCtx.setLineDash([2, 1]);
        this.zoomCtx.strokeRect(width / 2, height / 2, ZOOM_PIPETTE, ZOOM_PIPETTE);
        this.zoomCtx.strokeStyle = 'black';
        this.zoomCtx.setLineDash([1, 2]);
        this.zoomCtx.strokeRect(width / 2, height / 2, ZOOM_PIPETTE, ZOOM_PIPETTE);
        this.zoomCtx.fillRect(width / 2, height / 2, ZOOM_PIPETTE, ZOOM_PIPETTE);
        this.zoomCtx.stroke();
    }

    handleNearBorder(mousePosition: Vec2): void {
        this.isNearBorder = false;
        if (mousePosition.x >= this.drawingService.canvas.width || mousePosition.x <= 0) {
            this.isNearBorder = true;
        }
        if (mousePosition.y > this.drawingService.canvas.height || mousePosition.y <= 0) {
            this.isNearBorder = true;
        }
        if (this.isNearBorder) {
            this.clearCanvas();
        }
    }

    clearCanvas(): void {
        this.zoomCtx.clearRect(0, 0, this.zoom.width, this.zoom.height);
    }

    onMouseMove(event: MouseEvent): void {
        this.handleNearBorder(this.getPositionFromMouse(event));
        this.showZoomPixel(event);
    }
    onMouseEnter(): void {
        this.mouseOut.next(true);
    }

    onMouseLeave(): void {
        this.mouseOut.next(false);
    }
}
