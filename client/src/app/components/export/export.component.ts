import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterStyles, FILTER_STYLES } from '@app/ressources/global-variables/filter';
import { MAX_NAME_LENGTH } from '@app/ressources/global-variables/global-variables';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { HotkeyService } from '@app/services/hotkey/hotkey.service';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.scss'],
})
export class ExportComponent implements AfterViewInit, OnInit, OnDestroy {
    filterStyles: FilterStyles = {
        NONE: FILTER_STYLES.NONE,
        BLACK_AND_WHITE: FILTER_STYLES.BLACK_AND_WHITE,
        SEPHIA: FILTER_STYLES.SEPHIA,
        SATURATE: FILTER_STYLES.SATURATE,
        INVERT: FILTER_STYLES.INVERT,
        BLUR: FILTER_STYLES.BLUR,
    };
    differentFilter: string[] = ['none', 'grayscale(100%)', 'sepia(100%)', 'saturate(8)', 'invert(100%)', 'blur(5px)'];
    typeOfFile: string[] = ['image/png', 'image/jpeg'];

    name: string = '';
    emailAdress: string = '';
    imagesrc: string = '';
    urlImage: string = '';
    filterCanvas: HTMLCanvasElement = document.createElement('canvas');
    link: HTMLAnchorElement = document.createElement('a');
    ownerForm: FormGroup;

    constructor(public drawingService: DrawingService, public hotkeyService: HotkeyService, private cdRef: ChangeDetectorRef) {}
    @ViewChild('exportModal') exportModal: ElementRef<HTMLButtonElement>;
    ngOnInit(): void {
        this.hotkeyService.isHotkeyEnabled = false;
        this.ownerForm = new FormGroup({
            name: new FormControl(this.name, [Validators.required, Validators.maxLength(MAX_NAME_LENGTH)]),
        });
    }
    ngAfterViewInit(): void {
        this.cdRef.detectChanges();
        setTimeout(() => {
            this.imagesrc = this.drawingService.canvas.toDataURL();
            this.urlImage = this.imagesrc;
            this.filterCanvas = this.drawingService.canvas;
        });
    }

    changeName(name: string): void {
        this.name = name;
        this.ownerForm.markAllAsTouched();
    }

    changeFilter(event: Event): void {
        const target = event.target as HTMLInputElement;
        const filterNumber: number = Number(target.value);
        const canvasFilter = document.createElement('canvas') as HTMLCanvasElement;
        const canvasFilterCtx = canvasFilter.getContext('2d') as CanvasRenderingContext2D;
        canvasFilter.height = this.drawingService.canvas.height;
        canvasFilter.width = this.drawingService.canvas.width;

        canvasFilterCtx.filter = this.differentFilter[filterNumber];
        canvasFilterCtx.drawImage(this.drawingService.canvas, 0, 0);
        this.filterCanvas = canvasFilter;
        this.imagesrc = canvasFilterCtx.canvas.toDataURL();
        this.urlImage = this.imagesrc;
    }

    getImageUrl(event: Event): void {
        const target = event.target as HTMLInputElement;
        const typeNumber: number = Number(target.value);
        this.urlImage = this.filterCanvas.toDataURL(this.typeOfFile[typeNumber]);
    }

    exportLocally(): void {
        if (this.name !== '') {
            this.link.href = this.urlImage;
            this.link.setAttribute('download', this.name);
            this.link.click();
        }
    }

    hasNameError(controlName: string, errorName: string): boolean {
        return this.ownerForm.controls[controlName].hasError(errorName);
    }

    ngOnDestroy(): void {
        this.hotkeyService.isHotkeyEnabled = true;
    }
}
