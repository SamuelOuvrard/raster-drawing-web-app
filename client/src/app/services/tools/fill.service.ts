import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { Vec2 } from '@app/classes/vec2';
import { MouseButton } from '@app/ressources/global-variables/global-variables';
import { TOOL_NAMES } from '@app/ressources/global-variables/tool-names';
import { ColorSelectionService } from '@app/services/color-selection/color-selection.service';
import { DrawingService } from '@app/services/drawing/drawing.service';

@Injectable({
    providedIn: 'root',
})
export class FillService extends Tool {
    name: string = TOOL_NAMES.FILL_TOOL_NAME;
    maxTolerance: number = 100;
    minTolerance: number = 0;
    tolerance: number = 0;
    mouseDownCoord: Vec2;
    initialPixelData: Uint8ClampedArray;

    constructor(public drawingService: DrawingService, public colorSelectionService: ColorSelectionService) {
        super(drawingService);
    }

    handleCursor(): void {
        const previewCanvas = this.drawingService.previewCanvas;
        previewCanvas.style.cursor = 'crosshair';
    }

    changeTolerance(newTolerance: number): void {
        this.tolerance = newTolerance;
    }

    onMouseDown(event: MouseEvent): void {
        this.mouseDownCoord = this.getPositionFromMouse(event);
        this.initialPixelData = this.drawingService.getPixelData(this.mouseDownCoord);
        if (event.button === MouseButton.Left) {
            this.drawingService.baseCtx.fillStyle = this.colorSelectionService.primaryColor;
            this.contiguousFill(this.mouseDownCoord);
        } else if (event.button === MouseButton.Right) {
            this.fill();
        }
    }

    // contiguousFill(): void {
    //     // TODO
    // }

    contiguousFill(pixel: Vec2): void {
        const initialPixelData = this.initialPixelData;
        const curentPixelData = this.drawingService.getPixelData(pixel);
        if (
            initialPixelData[0] - (this.tolerance * 255) / 100 <= curentPixelData[0] &&
            curentPixelData[0] <= initialPixelData[0] + (this.tolerance * 255) / 100 &&
            initialPixelData[1] - (this.tolerance * 255) / 100 <= curentPixelData[1] &&
            curentPixelData[1] <= initialPixelData[1] + (this.tolerance * 255) / 100 &&
            initialPixelData[2] - (this.tolerance * 255) / 100 <= curentPixelData[2] &&
            curentPixelData[2] <= initialPixelData[2] + (this.tolerance * 255) / 100 &&
            initialPixelData[3] - (this.tolerance * 255) / 100 <= curentPixelData[3] &&
            curentPixelData[3] <= initialPixelData[3] + (this.tolerance * 255) / 100
        ) {
            this.drawingService.baseCtx.fillRect(pixel.x, pixel.y, 1, 1);

            if (pixel.y - 1 >= 0) {
                this.contiguousFill({ x: pixel.x, y: pixel.y - 1 });
            }
            if (pixel.y + 1 < this.drawingService.canvas.height) {
                this.contiguousFill({ x: pixel.x, y: pixel.y + 1 });
            }
            if (pixel.x + 1 < this.drawingService.canvas.width) {
                this.contiguousFill({ x: pixel.x + 1, y: pixel.y });
            }
            if (pixel.x - 1 >= 0) {
                this.contiguousFill({ x: pixel.x - 1, y: pixel.y });
            }
        }
    }

    // contiguousFill(): void {
    //     const pixelData = this.drawingService.getPixelData(this.mouseDownCoord);
    //     const stack: Vec2[] = [this.mouseDownCoord];
    //     const canvasData: ImageData = this.drawingService.getCanvasData();

    //     while (stack.length) {
    //         const currentPixel = (stack.pop as unknown) as Vec2;
    //         const index = currentPixel.x + currentPixel.y * this.drawingService.canvas.width;
    //         if (this.isPrimaryColor(canvasData, index)) {
    //             continue;
    //         } else if (
    //             pixelData[0] - (this.tolerance * 255) / 100 <= canvasData.data[index + 0] &&
    //             canvasData.data[index + 0] <= pixelData[0] + (this.tolerance * 255) / 100 &&
    //             pixelData[1] - (this.tolerance * 255) / 100 <= canvasData.data[index + 1] &&
    //             canvasData.data[index + 1] <= pixelData[1] + (this.tolerance * 255) / 100 &&
    //             pixelData[2] - (this.tolerance * 255) / 100 <= canvasData.data[index + 2] &&
    //             canvasData.data[index + 2] <= pixelData[2] + (this.tolerance * 255) / 100 &&
    //             pixelData[3] - (this.tolerance * 255) / 100 <= canvasData.data[index + 3] &&
    //             canvasData.data[index + 3] <= pixelData[3] + (this.tolerance * 255) / 100
    //         ) {
    //             this.drawingService.baseCtx.fillRect(currentPixel.x, currentPixel.y, 1, 1);

    //             if (currentPixel.y - 1 >= 0) {
    //                 stack.push({ x: currentPixel.x, y: currentPixel.y - 1 });
    //             }
    //             if (currentPixel.y + 1 < this.drawingService.canvas.height) {
    //                 stack.push({ x: currentPixel.x, y: currentPixel.y + 1 });
    //             }
    //             if (currentPixel.x + 1 < this.drawingService.canvas.width) {
    //                 stack.push({ x: currentPixel.x + 1, y: currentPixel.y });
    //             }
    //             if (currentPixel.x - 1 >= 0) {
    //                 stack.push({ x: currentPixel.x - 1, y: currentPixel.y });
    //             }
    //         }
    //     }
    // }

    fill(): void {
        const pixelData = this.drawingService.getPixelData(this.mouseDownCoord);
        const canvasData = this.drawingService.getCanvasData();

        const primaryColor = this.colorSelectionService.primaryColor.slice(5);

        const subStrings = primaryColor.split(',');
        const r: number = parseInt(subStrings[0], 10);
        const g: number = parseInt(subStrings[1], 10);
        const b: number = parseInt(subStrings[2], 10);
        const a: number = parseFloat(subStrings[3]) * 255;

        console.log(a);

        let i;
        for (i = 0; i < canvasData.data.length; i += 4) {
            if (
                pixelData[0] - (this.tolerance * 255) / 100 <= canvasData.data[i] &&
                canvasData.data[i] <= pixelData[0] + (this.tolerance * 255) / 100 &&
                pixelData[1] - (this.tolerance * 255) / 100 <= canvasData.data[i + 1] &&
                canvasData.data[i + 1] <= pixelData[1] + (this.tolerance * 255) / 100 &&
                pixelData[2] - (this.tolerance * 255) / 100 <= canvasData.data[i + 2] &&
                canvasData.data[i + 2] <= pixelData[2] + (this.tolerance * 255) / 100 &&
                pixelData[3] - (this.tolerance * 255) / 100 <= canvasData.data[i + 3] &&
                canvasData.data[i + 3] <= pixelData[3] + (this.tolerance * 255) / 100
            ) {
                canvasData.data[i] = r;
                canvasData.data[i + 1] = g;
                canvasData.data[i + 2] = b;
                canvasData.data[i + 3] = a;
            }
        }

        this.drawingService.baseCtx.putImageData(canvasData, 0, 0);
    }

    isPrimaryColor(canvasData: ImageData, index: number): boolean {
        const primaryColor = this.colorSelectionService.primaryColor.slice(5);

        const subStrings = primaryColor.split(',');
        const r: number = parseInt(subStrings[0], 10);
        const g: number = parseInt(subStrings[1], 10);
        const b: number = parseInt(subStrings[2], 10);
        const a: number = parseFloat(subStrings[3]) * 255;

        if (
            canvasData.data[index] === r &&
            canvasData.data[index + 1] === g &&
            canvasData.data[index + 2] === b &&
            canvasData.data[index + 3] === a
        ) {
            return true;
        } else {
            return false;
        }
    }
}
