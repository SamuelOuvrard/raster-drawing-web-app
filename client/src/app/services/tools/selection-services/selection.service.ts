import { Injectable } from '@angular/core';
import { Rectangle } from '@app/classes/rectangle';
import { Tool } from '@app/classes/tool';
import { FILL_STYLES } from '@app/ressources/global-variables/fill-styles';
import { MouseButton } from '@app/ressources/global-variables/global-variables';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { SquareService } from '@app/services/tools/square.service';
import { MoveService } from '@app/services/tools/transformation-services/move.service';

@Injectable({
    providedIn: 'root',
})
export class SelectionService extends Tool {
    selection: Rectangle = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
    selectionImage: HTMLCanvasElement = document.createElement('canvas');
    transormation: string = '';

    constructor(drawingService: DrawingService, public squareService: SquareService, public moveService: MoveService) {
        super(drawingService);
    }

    onMouseDown(event: MouseEvent): void {
        if (!this.isInSelection(event)) {
            this.mouseDown = event.button === MouseButton.LEFT;
            if (!this.moveService.isTransformationOver && this.mouseDown) {
                this.moveService.isTransformationOver = true;
                this.fillSelection();
            }
            if (this.mouseDown) {
                this.drawingService.clearCanvas(this.drawingService.previewCtx);
                this.squareService.onMouseDown(event);
            }
        } else {
            this.transormation = 'move';
            this.moveService.onMouseDown(event);
        }
    }

    onMouseUp(event: MouseEvent): void {
        if (this.mouseDown) {
            this.squareService.lastPoint = this.getPositionFromMouse(event);
            const currentFillStyle = this.squareService.fillStyle;
            this.squareService.fillStyle = FILL_STYLES.BORDER;
            this.selection = this.squareService.drawShape(this.drawingService.previewCtx);
            if (this.selection.height !== 0 && this.selection.width !== 0) {
                this.setSelectionData(this.selection);
            }
            this.squareService.fillStyle = currentFillStyle;
            this.mouseDown = false;
        } else if (this.transormation === 'move') {
            this.transormation = '';
            this.strokeSelection();
        }
    }

    onMouseMove(event: MouseEvent): void {
        if (this.mouseDown) {
            const currentFillStyle = this.squareService.fillStyle;
            this.squareService.fillStyle = FILL_STYLES.BORDER;
            this.squareService.onMouseMove(event);
            this.squareService.fillStyle = currentFillStyle;
        } else if (this.transormation === 'move') {
            this.moveService.onMouseMove(event);
        }
    }

    onKeyDown(event: KeyboardEvent): void {
        if (this.selection.height !== 0 || this.selection.height !== 0) {
            this.moveService.onKeyDown(event);
        }
    }

    onKeyUp(event: KeyboardEvent): void {
        this.moveService.onKeyUp(event);
        this.strokeSelection();
    }

    private isInSelection(event: MouseEvent): boolean {
        const currentPosition = this.getPositionFromMouse(event);
        if (
            currentPosition.x > this.selection.startingPoint.x &&
            currentPosition.x < this.selection.startingPoint.x + this.selection.width &&
            currentPosition.y > this.selection.startingPoint.y &&
            currentPosition.y < this.selection.startingPoint.y + this.selection.height
        ) {
            return true;
        } else {
            return false;
        }
    }

    reset(): void {
        this.fillSelection();
        this.selection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.moveService.initialSelection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.mouseDown = false;
        this.transormation = '';
        this.moveService.isTransformationOver = true;
    }

    setSelectionData(selection: Rectangle): void {}

    strokeSelection(): void {}

    fillSelection(): void {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.moveService.clearSelectionBackground(this.drawingService.baseCtx);
        this.drawingService.baseCtx.drawImage(
            this.selectionImage,
            0,
            0,
            this.selection.width,
            this.selection.height,
            this.selection.startingPoint.x,
            this.selection.startingPoint.y,
            this.selection.width,
            this.selection.height,
        );
    }
}
