import { Injectable, Injector } from '@angular/core';
import { Fill, Selection, ToolProperties } from '@app/classes/tool-properties';
import { Vec2 } from '@app/classes/vec2';
import { MAX_PERCENTAGE } from '@app/ressources/global-variables/global-variables';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DrawingService {
    baseCtx: CanvasRenderingContext2D;
    gridCtx: CanvasRenderingContext2D;
    previewCtx: CanvasRenderingContext2D;
    gridSpacing: number;
    gridOpacity: number;
    isGridEnabled: boolean;
    canvas: HTMLCanvasElement;
    gridCanvas: HTMLCanvasElement;
    previewCanvas: HTMLCanvasElement;
    undoStack: ToolProperties[] = [];
    redoStack: ToolProperties[] = [];
    isToolInUse: Subject<boolean> = new Subject<boolean>();
    isLastDrawing: boolean;

    constructor(private injector: Injector) {}
    setGrid(): void {
        this.clearCanvas(this.gridCtx);
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        this.gridCtx.beginPath();
        for (let x = 0; x <= canvasWidth; x += this.gridSpacing) {
            this.gridCtx.moveTo(x, 0);
            this.gridCtx.lineTo(x, canvasHeight);
        }

        for (let x = 0; x <= canvasHeight; x += this.gridSpacing) {
            this.gridCtx.moveTo(0, x);
            this.gridCtx.lineTo(canvasWidth, x);
        }
        this.gridCtx.globalAlpha = this.gridOpacity / MAX_PERCENTAGE;
        this.gridCtx.strokeStyle = 'black';
        this.gridCtx.closePath();
        this.gridCtx.stroke();
    }

    setIsToolInUse(isInUse: boolean): void {
        this.isToolInUse.next(isInUse);
    }

    getIsToolInUse(): Observable<boolean> {
        return this.isToolInUse.asObservable();
    }

    clearCanvas(context: CanvasRenderingContext2D): void {
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkedDrawing(): boolean {
        return this.isLastDrawing;
    }

    initializeBaseCanvas(): void {
        if (this.isGridEnabled) this.setGrid();
        // using an injector with a deprecated version to inject and bypass an observed circular dependency
        // Retrieves an instance from the injector based on the provided token.
        // tslint:disable-next-line: deprecation
        const continueDrawingService = this.injector.get('ContinueDrawingService');
        if (this.isLastDrawing) {
            continueDrawingService.continueDrawing();
        } else {
            this.baseCtx.fillStyle = 'white';
            this.baseCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    isCanvasBlank(context: CanvasRenderingContext2D): boolean {
        const blank = document.createElement('canvas');
        blank.width = this.canvas.width;
        blank.height = this.canvas.height;
        const blankCtx = blank.getContext('2d') as CanvasRenderingContext2D;
        blankCtx.fillStyle = 'white';
        blankCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        return context.canvas.toDataURL() === blank.toDataURL();
    }

    applyPreview(): void {
        this.baseCtx.drawImage(this.previewCanvas, 0, 0);
        this.clearCanvas(this.previewCtx);
    }

    updateStack(modification: ToolProperties): void {
        const copiedTool = Object.assign({}, modification);
        this.undoStack.push(copiedTool);
        if (this.redoStack.length) {
            this.redoStack = [];
        }
        console.log(this.undoStack);
    }

    drawFill(fill: Fill): void {
        this.baseCtx.putImageData(fill.imageData, 0, 0);
    }

    restoreSelection(selection: Selection): void {
        this.baseCtx.putImageData(selection.imageData, 0, 0);
    }

    getPixelData(pixelCoord: Vec2): Uint8ClampedArray {
        const pixelData = this.baseCtx.getImageData(pixelCoord.x, pixelCoord.y, 1, 1).data;
        return pixelData;
    }

    getCanvasData(): ImageData {
        const canvasData = this.baseCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        return canvasData;
    }

    getPreviewData(): ImageData {
        const canvasData = this.previewCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        return canvasData;
    }

    resetStack(): void {
        this.undoStack = [];
        this.redoStack = [];
    }

    autoSave(): void {
        if (!this.canvas) return;
        const sourceDrawing = this.canvas.toDataURL();
        localStorage.clear();
        localStorage.setItem('drawingKey', sourceDrawing);
    }
}
