import { Injectable } from '@angular/core';
import { Eraser, Fill, Line, Resize, Shape, Pencil, Brush } from '@app/classes/tool-properties';

@Injectable({
    providedIn: 'root',
})
export class DrawingService {
    baseCtx: CanvasRenderingContext2D;
    previewCtx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    previewCanvas: HTMLCanvasElement;
    undoStack: (Pencil | Brush | Eraser | Shape | Line | Resize | Fill)[] = [];
    redoStack: (Pencil | Brush | Eraser | Shape | Line | Resize | Fill)[] = [];

    constructor(){}

    clearCanvas(context: CanvasRenderingContext2D): void {
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    isCanvasBlank(context: CanvasRenderingContext2D): boolean {
        const blank = document.createElement('canvas');
        blank.width = this.canvas.width;
        blank.height = this.canvas.height;

        return context.canvas.toDataURL() === blank.toDataURL();
    }

    updateStack(modification: Pencil | Brush | Eraser | Shape | Line | Resize | Fill): void {
        this.undoStack.push(modification);
        if (this.redoStack.length !== 0) {
            this.redoStack = [];
        }
    }

    drawPencilStroke(ctx: CanvasRenderingContext2D, pencil: Pencil): void{
        ctx.lineWidth = pencil.lineWidth;
        ctx.strokeStyle = pencil.primaryColor;
        ctx.lineJoin = 'round';
        ctx.lineCap = pencil.lineCap as CanvasLineCap;
        ctx.beginPath();
        for (const point of pencil.path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
    }

    drawBrushStroke(ctx: CanvasRenderingContext2D, brush: Brush): void {
        ctx.lineWidth = brush.lineWidth;
        ctx.strokeStyle = brush.primaryColor;
        ctx.lineJoin = 'round';
        ctx.lineCap = brush.lineCap as CanvasLineCap;
        if (brush.pattern === 'none') {
            this.baseCtx.filter = 'none';
            this.previewCtx.filter = 'none';
        } else {
            this.baseCtx.filter = 'url(/assets/patterns.svg#' + brush.pattern + ')';
            this.previewCtx.filter = 'url(/assets/patterns.svg#' + brush.pattern + ')';
        }
        // Les deux lignes ci-dessous servent a faire rafraichir les canvas pour appliquer le filtre
        this.baseCtx.strokeRect(-this.baseCtx.lineWidth, 0, 1, 0);
        this.previewCtx.strokeRect(-this.previewCtx.lineWidth, 0, 1, 0);
        ctx.beginPath();
        for (const point of brush.path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
        this.baseCtx.filter = 'none';
        this.previewCtx.filter = 'none';
    }

    drawEraserStroke(ctx: CanvasRenderingContext2D, eraser: Eraser): void {
        ctx.lineWidth = eraser.lineWidth;
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'square';
        ctx.beginPath();
        for (const point of eraser.path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
    }
}
