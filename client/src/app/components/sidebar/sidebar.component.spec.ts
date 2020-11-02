import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { HotkeyService } from '@app/services/hotkey/hotkey.service';
import { NewDrawingService } from '@app/services/new-drawing/new-drawing.service';
import { ToolSelectionService } from '@app/services/tool-selection/tool-selection.service';
<<<<<<< HEAD
import { BrushService } from '@app/services/tools/brush.service';
import { CircleService } from '@app/services/tools/circle.service';
import { EraserService } from '@app/services/tools/eraser.service';
import { FillService } from '@app/services/tools/fill.service';
import { LineService } from '@app/services/tools/line.service';
import { PencilService } from '@app/services/tools/pencil-service';
import { PolygoneService } from '@app/services/tools/polygone.service';
import { SelectionService } from '@app/services/tools/selection.service';
import { SquareService } from '@app/services/tools/square.service';
=======
import { Subject } from 'rxjs';
>>>>>>> dev

import SpyObj = jasmine.SpyObj;
describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;
    let matdialogSpy: SpyObj<MatDialog>;
    let newDrawingServiceSpy: SpyObj<NewDrawingService>;
    let toolSelectionServiceSpy: SpyObj<ToolSelectionService>;
    let hotkeyServiceSpy: SpyObj<HotkeyService>;
    let obs: Subject<string>;

<<<<<<< HEAD
    beforeEach(async(() => {
        toolStub = new ToolStub({} as DrawingService);
        toolSelectionStub = new ToolSelectionService(
            toolStub as PencilService,
            toolStub as BrushService,
            toolStub as SquareService,
            toolStub as CircleService,
            toolStub as LineService,
            toolStub as FillService,
            toolStub as EraserService,
            toolStub as PolygoneService,
            toolStub as SelectionService,
        );
        matdialogSpy = jasmine.createSpyObj('dialog', ['open']);
=======
    beforeEach(() => {
        obs = new Subject<string>();
        toolSelectionServiceSpy = jasmine.createSpyObj('ToolSelectionService', ['changeTool', 'setCurrentToolCursor']);
>>>>>>> dev
        newDrawingServiceSpy = jasmine.createSpyObj('newDrawingService', ['openWarning']);
        matdialogSpy = jasmine.createSpyObj('dialog', ['open']);
        hotkeyServiceSpy = jasmine.createSpyObj('HotkeyService', ['getKey']);
        hotkeyServiceSpy.getKey.and.returnValue(obs.asObservable());

        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [SidebarComponent],
            providers: [
                { provide: ToolSelectionService, useValue: toolSelectionServiceSpy },
                { provide: NewDrawingService, useValue: newDrawingServiceSpy },
                { provide: MatDialog, useValue: matdialogSpy },
                { provide: HotkeyService, useValue: hotkeyServiceSpy },
            ],
        }).compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call toolSelectionService.changeTool', () => {
        const button = fixture.debugElement.nativeElement.querySelector('#Pinceau');
        button.click();
        expect(toolSelectionServiceSpy.changeTool).toHaveBeenCalled();
    });

    it('should call toolSelectionService.setCurrentToolCursor', () => {
        const button = fixture.debugElement.nativeElement.querySelector('#Pinceau');
        button.click();
        expect(toolSelectionServiceSpy.setCurrentToolCursor).toHaveBeenCalled();
    });

    it('should call open of MatDialog', () => {
        component.openUserguide();
        expect(matdialogSpy.open).toHaveBeenCalled();
    });

    it('should call openWarning', () => {
        const button: DebugElement = fixture.debugElement.query(By.css('mat-icon[type=newDrawing]'));
        fixture.detectChanges();
        button.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(newDrawingServiceSpy.openWarning).toHaveBeenCalled();
    });

    it('should not change tool nor set cursor on an invalid event', () => {
        const value = undefined;
        const target = ({
            value,
        } as unknown) as HTMLInputElement;
        const event = ({
            target,
        } as unknown) as InputEvent;
        component.onToolChange(event);
        expect(toolSelectionServiceSpy.setCurrentToolCursor).not.toHaveBeenCalled();
        expect(toolSelectionServiceSpy.changeTool).not.toHaveBeenCalled();
    });
});
