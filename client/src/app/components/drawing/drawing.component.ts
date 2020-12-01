import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Vec2 } from '@app/classes/vec2';
import { ContinueDesignService } from '@app/services/continue-design/continue-design.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { ResizeDrawingService } from '@app/services/resize-drawing/resize-drawing.service';
import { ToolSelectionService } from '@app/services/tool-selection/tool-selection.service';

@Component({
    selector: 'app-drawing',
    templateUrl: './drawing.component.html',
    styleUrls: ['./drawing.component.scss'],
})
export class DrawingComponent implements AfterViewInit {
    @ViewChild('baseCanvas', { static: false }) baseCanvas: ElementRef<HTMLCanvasElement>;
    @ViewChild('previewCanvas', { static: false }) previewCanvas: ElementRef<HTMLCanvasElement>;
    @ViewChild('gridCanvas', { static: false }) gridCanvas: ElementRef<HTMLCanvasElement>;

    @Input() canvasSize: Vec2;
    @Input() previewSize: Vec2;

    private baseCtx: CanvasRenderingContext2D;
    private previewCtx: CanvasRenderingContext2D;
    private gridCtx: CanvasRenderingContext2D;

    constructor(
        private drawingService: DrawingService,
        public toolSelectionService: ToolSelectionService,
        public resizeDrawingService: ResizeDrawingService,
        public continueDesignService: ContinueDesignService,
    ) {}

    ngAfterViewInit(): void {
        this.baseCtx = this.baseCanvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
        this.previewCtx = this.previewCanvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
        this.gridCtx = this.gridCanvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
        this.drawingService.baseCtx = this.baseCtx;
        this.drawingService.gridCtx = this.gridCtx;
        this.drawingService.previewCtx = this.previewCtx;
        this.drawingService.canvas = this.baseCanvas.nativeElement;
        this.drawingService.previewCanvas = this.previewCanvas.nativeElement;
        this.drawingService.gridCanvas = this.gridCanvas.nativeElement;
        this.toolSelectionService.setCurrentToolCursor();
        // Continuer dessin
        this.baseCanvas.nativeElement.height = this.drawingService.canvas.height;
        this.baseCanvas.nativeElement.width = this.drawingService.canvas.width;
        if (this.continueDesignService.loadOldDesign()) {
            this.continueDesignService.continueDesign();
        }
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit(): void {
        if (this.continueDesignService.newBaseCtx()) {
            this.continueDesignService.resizeCanvas();
        }
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        this.toolSelectionService.currentToolMouseMove(event);
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
        this.toolSelectionService.currentToolMouseDown(event);
    }

    @HostListener('mouseup', ['$event'])
    onMouseUp(event: MouseEvent): void {
        this.toolSelectionService.currentToolMouseUp(event);
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(): void {
        this.toolSelectionService.currentToolMouseLeave();
    }
    @HostListener('mouseenter', ['$event'])
    onMouseEnter(): void {
        this.toolSelectionService.currentToolMouseEnter();
    }
    @HostListener('mousewheel', ['$event'])
    onMouseWheel(event: WheelEvent): void {
        this.toolSelectionService.currentToolWheelEvent(event);
    }

    get width(): number {
        return this.canvasSize.x;
    }

    get height(): number {
        return this.canvasSize.y;
    }
}
