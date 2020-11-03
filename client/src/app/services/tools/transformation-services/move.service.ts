import { Injectable } from '@angular/core';
import { Rectangle } from '@app/classes/rectangle';
import { ARROW_KEYS } from '@app/ressources/global-variables/arrow-keys';
import { CONFIRM_KEY_PRESS_DURATION, KEY_PRESS_INTERVAL_DURATION, SELECTION_MOVE_STEP_SIZE } from '@app/ressources/global-variables/global-variables';
import { DrawingService } from '@app/services/drawing/drawing.service';

@Injectable({
    providedIn: 'root',
})
export class MoveService {
    initialSelection: Rectangle = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
    selection: Rectangle;
    isTransformationOver: boolean = true;
    pressedKeys: Map<string, boolean> = new Map([
        [ARROW_KEYS.LEFT, false],
        [ARROW_KEYS.UP, false],
        [ARROW_KEYS.RIGHT, false],
        [ARROW_KEYS.DOWN, false],
    ]);
    intervalId: ReturnType<typeof setTimeout> | undefined = undefined;
    selectionImage: HTMLCanvasElement = document.createElement('canvas');

    constructor(public drawingService: DrawingService) {}

    initialize(selection: Rectangle, selectionImage: HTMLCanvasElement): void {
        this.initialSelection.startingPoint.x = selection.startingPoint.x;
        this.initialSelection.startingPoint.y = selection.startingPoint.y;
        this.initialSelection.height = selection.height;
        this.initialSelection.width = selection.width;
        this.selection = selection;
        this.selectionImage = selectionImage;
    }

    onMouseDown(event: MouseEvent): void {
        if (this.isTransformationOver) {
            this.isTransformationOver = false;
        }
    }

    onMouseMove(event: MouseEvent): void {
        this.selection.startingPoint.x += event.movementX;
        this.selection.startingPoint.y += event.movementY;
        this.printSelection(this.drawingService.previewCtx);
    }

    onKeyDown(event: KeyboardEvent): void {
        let isArrowKey = false;

        switch (event.key) {
            case ARROW_KEYS.LEFT:
                if (this.pressedKeys.get(ARROW_KEYS.LEFT) === false) {
                    this.selection.startingPoint.x -= SELECTION_MOVE_STEP_SIZE;
                }
                break;
            case ARROW_KEYS.UP:
                if (this.pressedKeys.get(ARROW_KEYS.UP) === false) {
                    this.selection.startingPoint.y -= SELECTION_MOVE_STEP_SIZE;
                }
                break;
            case ARROW_KEYS.RIGHT:
                if (this.pressedKeys.get(ARROW_KEYS.RIGHT) === false) {
                    this.selection.startingPoint.x += SELECTION_MOVE_STEP_SIZE;
                }
                break;
            case ARROW_KEYS.DOWN:
                if (this.pressedKeys.get(ARROW_KEYS.DOWN) === false) {
                    this.selection.startingPoint.y += SELECTION_MOVE_STEP_SIZE;
                }
                break;
        }

        if (this.pressedKeys.has(event.key)) {
            this.pressedKeys.set(event.key, true);
            isArrowKey = true;
        }

        setTimeout(() => {
            if (this.isArrowKeyPressed()) {
                if (this.intervalId === undefined) {
                    this.intervalId = setInterval(this.move, KEY_PRESS_INTERVAL_DURATION, this);
                }
            }
        }, CONFIRM_KEY_PRESS_DURATION);

        if (isArrowKey){
            this.printSelection(this.drawingService.previewCtx);
            if (this.isTransformationOver) {
                this.isTransformationOver = false;
            }
        }
    }

    onKeyUp(event: KeyboardEvent): void {
        if (this.pressedKeys.has(event.key)) {
            this.pressedKeys.set(event.key, false);
        }

        if (this.intervalId !== undefined) {
            if (!this.isArrowKeyPressed()) {
                clearInterval(this.intervalId);
                this.intervalId = undefined;
            }
        }
    }

    clearSelectionBackground(ctx: CanvasRenderingContext2D): void {
        const currentFillStyle = ctx.fillStyle;
        ctx.fillStyle = 'white';

        ctx.fillRect(
            this.initialSelection.startingPoint.x,
            this.initialSelection.startingPoint.y,
            this.initialSelection.width,
            this.initialSelection.height,
        );

        ctx.globalCompositeOperation = 'destination-in';
        ctx.drawImage(this.selectionImage, this.initialSelection.startingPoint.x, this.initialSelection.startingPoint.y);
        ctx.globalCompositeOperation = 'source-over';

        ctx.fillStyle = currentFillStyle;
    }

    printSelection(ctx: CanvasRenderingContext2D): void {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.clearSelectionBackground(ctx);
        ctx.drawImage(this.selectionImage, this.selection.startingPoint.x, this.selection.startingPoint.y);
    }

    private move(self: MoveService): void {
        if (self.pressedKeys.get(ARROW_KEYS.LEFT)) {
            self.selection.startingPoint.x -= SELECTION_MOVE_STEP_SIZE;
        }
        if (self.pressedKeys.get(ARROW_KEYS.UP)) {
            self.selection.startingPoint.y -= SELECTION_MOVE_STEP_SIZE;
        }
        if (self.pressedKeys.get(ARROW_KEYS.RIGHT)) {
            self.selection.startingPoint.x += SELECTION_MOVE_STEP_SIZE;
        }
        if (self.pressedKeys.get(ARROW_KEYS.DOWN)) {
            self.selection.startingPoint.y += SELECTION_MOVE_STEP_SIZE;
        }

        self.printSelection(self.drawingService.previewCtx);
    }

    private isArrowKeyPressed(): boolean {
        for (const [key] of this.pressedKeys) {
            if (this.pressedKeys.get(key)) {
                return true;
            }
        }
        return false;
    }
}
