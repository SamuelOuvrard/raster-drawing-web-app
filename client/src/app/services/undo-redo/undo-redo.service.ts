import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import {
    Brush,
    Ellipse,
    Eraser,
    Fill,
    Line,
    Pencil,
    Polygon,
    Rectangle,
    Resize,
    Selection,
    Stamp,
    ToolProperties,
} from '@app/classes/tool-properties';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { ResizeDrawingService } from '@app/services/resize-drawing/resize-drawing.service';
import { BrushService } from '@app/services/tools/brush.service';
import { CircleService } from '@app/services/tools/circle.service';
import { EraserService } from '@app/services/tools/eraser.service';
import { LineService } from '@app/services/tools/line.service';
import { PencilService } from '@app/services/tools/pencil.service';
import { PolygonService } from '@app/services/tools/polygon.service';
import { SelectionService } from '@app/services/tools/selection-services/selection.service';
import { SquareService } from '@app/services/tools/square.service';
import { StampService } from '@app/services/tools/stamp.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UndoRedoService extends Tool {
    isUndoAvailable: boolean = false;
    isUndoAvailableSubject: Subject<boolean> = new Subject<boolean>();
    isRedoAvailable: boolean = false;
    isRedoAvailableSubject: Subject<boolean> = new Subject<boolean>();

    constructor(
        public drawingService: DrawingService,
        public circleService: CircleService,
        public resizeDrawingService: ResizeDrawingService,
        public squareService: SquareService,
        public pencilService: PencilService,
        public eraserService: EraserService,
        public lineService: LineService,
        public brushService: BrushService,
        public polygonService: PolygonService,
        public selectionService: SelectionService,
        public stampService: StampService,
    ) {
        super(drawingService);
        this.drawingService.getIsToolInUse().subscribe((value) => {
            if (value) {
                this.setUndoAvailability(false);
                this.setRedoAvailability(false);
            } else {
                this.setUndoAvailability(true);
                this.setRedoAvailability(true);
                this.changeUndoAvailability();
                this.changeRedoAvailability();
            }
        });
    }

    setUndoAvailability(isAvailable: boolean): void {
        this.isUndoAvailable = isAvailable;
        this.isUndoAvailableSubject.next(isAvailable);
    }

    setRedoAvailability(isAvailable: boolean): void {
        this.isRedoAvailable = isAvailable;
        this.isRedoAvailableSubject.next(isAvailable);
    }

    getUndoAvailability(): Observable<boolean> {
        return this.isUndoAvailableSubject.asObservable();
    }

    getRedoAvailability(): Observable<boolean> {
        return this.isRedoAvailableSubject.asObservable();
    }

    undo(): void {
        this.selectionService.reset();
        this.changeUndoAvailability();
        this.changeRedoAvailability();
        if (!this.isUndoAvailable) {
            return;
        }
        this.resizeDrawingService.resizeCanvasSize(this.resizeDrawingService.workSpaceSize.x / 2, this.resizeDrawingService.workSpaceSize.y / 2);
        const modification = this.drawingService.undoStack.pop();
        if (modification) {
            this.drawingService.redoStack.push(modification);
        }
        this.drawingService.clearCanvas(this.drawingService.baseCtx);
        this.drawingService.undoStack.forEach((element) => {
            this.drawElement(element);
        });
        this.changeUndoAvailability();
        this.changeRedoAvailability();
        this.drawingService.autoSave();
    }

    redo(): void {
        this.selectionService.reset();
        this.changeUndoAvailability();
        this.changeRedoAvailability();
        if (!this.isRedoAvailable) {
            return;
        }
        const redoStackLength = this.drawingService.redoStack.length;
        if (redoStackLength) {
            const element = this.drawingService.redoStack[redoStackLength - 1];
            this.drawElement(element);
            const modification = this.drawingService.redoStack.pop();

            this.drawingService.undoStack.push(
                modification as Pencil | Brush | Eraser | Polygon | Line | Resize | Fill | Rectangle | Ellipse | Stamp,
            );
        }
        this.changeUndoAvailability();
        this.changeRedoAvailability();
        this.drawingService.autoSave();
    }

    changeUndoAvailability(): void {
        if (this.drawingService.undoStack.length) {
            this.setUndoAvailability(true);
        } else {
            this.setUndoAvailability(false);
        }
    }

    changeRedoAvailability(): void {
        if (this.drawingService.redoStack.length) {
            this.setRedoAvailability(true);
        } else {
            this.setRedoAvailability(false);
        }
    }

    drawElement(element: ToolProperties): void {
        switch (element.type) {
            case 'pencil':
                this.pencilService.drawPencilStroke(this.drawingService.baseCtx, element as Pencil);
                break;
            case 'brush':
                this.brushService.drawLine(this.drawingService.baseCtx, element as Brush);
                break;
            case 'eraser':
                this.eraserService.drawEraserStroke(this.drawingService.baseCtx, element as Eraser);
                break;
            case 'line':
                this.lineService.drawFullLine(this.drawingService.baseCtx, element as Line);
                break;
            case 'rectangle':
                this.squareService.drawRectangle(this.drawingService.baseCtx, element as Rectangle);
                break;
            case 'ellipse':
                this.circleService.drawEllipse(this.drawingService.baseCtx, element as Ellipse);
                break;
            case 'fill':
                this.drawingService.drawFill(element as Fill);
                break;
            case 'resize':
                this.resizeDrawingService.restoreCanvas(element as Resize);
                break;
            case 'polygon':
                this.polygonService.drawPolygon(this.drawingService.baseCtx, element as Polygon);
                break;
            case 'selection':
                this.drawingService.restoreSelection(element as Selection);
                break;
            case 'stamp':
                this.stampService.printStamp(this.drawingService.baseCtx, element as Stamp);
                break;
        }
    }
}
