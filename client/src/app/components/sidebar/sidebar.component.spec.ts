import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { HotkeyService } from '@app/services/hotkey/hotkey.service';
import { NewDrawingService } from '@app/services/new-drawing/new-drawing.service';
import { ToolSelectionService } from '@app/services/tool-selection/tool-selection.service';
import { Subject } from 'rxjs';

import SpyObj = jasmine.SpyObj;
describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;
    let matdialogSpy: SpyObj<MatDialog>;
    let newDrawingServiceSpy: SpyObj<NewDrawingService>;
    let toolSelectionServiceSpy: SpyObj<ToolSelectionService>;
    let hotkeyServiceSpy: SpyObj<HotkeyService>;
    let obs: Subject<string>;

    beforeEach(() => {
        obs = new Subject<string>();
        toolSelectionServiceSpy = jasmine.createSpyObj('ToolSelectionService', ['changeTool', 'setCurrentToolCursor']);
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
        const button = fixture.debugElement.nativeElement.querySelector('#new-drawing');
        button.click();
        expect(newDrawingServiceSpy.openWarningWindow).toHaveBeenCalled();
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
