import { Injectable } from '@angular/core';
import { SelectionBox } from '@app/classes/selection-box';
import { Vec2 } from '@app/classes/vec2';
import { ANGLE_HALF_TURN, MAX_ANGLE, ROTATION_STEP, ROTATION_STEP_ALT } from '@app/ressources/global-variables/global-variables';
import { DrawingService } from '@app/services/drawing/drawing.service';

@Injectable({
    providedIn: 'root',
})
export class RotateService {
    initialSelection: SelectionBox = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
    selection: SelectionBox;
    isTransformationOver: boolean = true;
    constructor(public drawingService: DrawingService) {}
    selectionImage: HTMLCanvasElement = document.createElement('canvas');
    selectionImageCtx: CanvasRenderingContext2D;
    angle: number = 0;
    isRotationOver: boolean = true;
    isAltKeyDown: boolean = false;
    mouseWheel: boolean = false;
    deltaRotation: number = ROTATION_STEP;
    intervalId: ReturnType<typeof setTimeout> | undefined = undefined;

    initialize(selection: SelectionBox, selectionImage: HTMLCanvasElement): void {
        this.initialSelection.startingPoint.x = selection.startingPoint.x;
        this.initialSelection.startingPoint.y = selection.startingPoint.y;
        this.initialSelection.height = selection.height;
        this.initialSelection.width = selection.width;
        this.selection = selection;
        this.selectionImage = selectionImage;
        this.selectionImageCtx = selectionImage.getContext('2d') as CanvasRenderingContext2D;
    }

    changeAngle(angle: number): void {
        this.angle = angle;
    }

    onWheelEvent(event: WheelEvent): void {
        this.mouseWheel = true;
        this.isRotationOver = false;
        const centerX = this.calculateCenter().x;
        const centerY = this.calculateCenter().y;
        this.setAngleRotation(this.deltaRotation, event);

        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.clearSelectionBackground();
        this.drawOnPreviewCanvas();
        this.rotateSelectedCanvas(this.angle, centerX, centerY);
    }

    setAngleRotation(deltaAngle: number, event: WheelEvent): void {
        const delY = Math.abs(event.deltaY);
        if (Math.abs(this.angle) === MAX_ANGLE) {
            this.angle = 0;
        }
        this.angle += (event.deltaY / delY) * deltaAngle;
    }

    rotateSelectedCanvas(angle: number, centerX: number, centerY: number): void {
        this.selectionImageCtx.translate(centerX, centerY);
        this.selectionImageCtx.rotate(angle * (Math.PI / ANGLE_HALF_TURN));
        this.selectionImageCtx.translate(-centerX, -centerY);
    }

    calculateCenter(): Vec2 {
        const cx = this.selection.startingPoint.x + this.selection.width / 2;
        const cy = this.selection.startingPoint.y + this.selection.height / 2;
        const centerSelection: Vec2 = { x: cx, y: cy };
        return centerSelection;
    }

    rotatePreviewCanvas(): void {
        const centerX = this.calculateCenter().x;
        const centerY = this.calculateCenter().y;
        this.drawingService.previewCtx.translate(centerX, centerY);
        this.drawingService.previewCtx.rotate(this.angle * (Math.PI / ANGLE_HALF_TURN));
        this.drawingService.previewCtx.translate(-centerX, -centerY);
    }

    drawOnPreviewCanvas(): void {
        this.drawingService.previewCtx.save();
        this.rotatePreviewCanvas();
        this.drawingService.previewCtx.drawImage(this.selectionImage, this.selection.startingPoint.x, this.selection.startingPoint.y);
        this.drawingService.previewCtx.restore();
    }

    clearSelectionBackground(): void {
        const currentFillStyle = this.drawingService.previewCtx.fillStyle;
        this.drawingService.previewCtx.fillStyle = 'white';

        this.drawingService.previewCtx.fillRect(
            this.initialSelection.startingPoint.x,
            this.initialSelection.startingPoint.y,
            this.initialSelection.width,
            this.initialSelection.height,
        );

        this.drawingService.previewCtx.globalCompositeOperation = 'destination-in';
        this.drawingService.previewCtx.drawImage(this.selectionImage, this.initialSelection.startingPoint.x, this.initialSelection.startingPoint.y);
        this.drawingService.previewCtx.globalCompositeOperation = 'source-over';

        this.drawingService.previewCtx.fillStyle = currentFillStyle;
    }

    restoreSelection(): void {
        this.isRotationOver = true;
        this.angle = 0;
    }

    onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Alt' && !this.isAltKeyDown) {
            event.preventDefault();
            this.isAltKeyDown = true;
            this.deltaRotation = ROTATION_STEP_ALT;
        }
    }

    onKeyUp(event: KeyboardEvent): void {
        if (this.isAltKeyDown && event.key === 'Alt') {
            this.isAltKeyDown = false;
            this.deltaRotation = ROTATION_STEP;
        }
    }
}
