import { TestBed } from '@angular/core/testing';
import { TOOL_NAMES } from '@app/ressources/global-variables/tool-names';
import { ToolSelectionService } from '@app/services/tool-selection/tool-selection.service';
import { EraserService } from '@app/services/tools/eraser.service';
import { PencilService } from '@app/services/tools/pencil-service';

describe('ToolSelectionService', () => {
    let service: ToolSelectionService;
    let eraserService: EraserService;
    let pencilService: PencilService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ToolSelectionService);
        eraserService = TestBed.inject(EraserService);
        pencilService = TestBed.inject(PencilService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should change tool', () => {
        service.changeTool(TOOL_NAMES.ERASER_TOOL_NAME);
        expect(service.currentTool).toBe(eraserService);
    });

    it('should get current tool', () => {
        expect(service.getCurrentToolName()).toBe(pencilService.name);
    });

    it('should not change current tool if changeTool is called with an invalid tool name', () => {
        service.currentTool = pencilService;
        service.changeTool('invalid tool name');
        expect(service.currentTool).toBe(pencilService);
    });
});