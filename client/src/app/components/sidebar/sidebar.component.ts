import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarouselComponent } from '@app/components/carousel/carousel.component';
import { SavingComponent } from '@app/components/saving/saving.component';
import { UserguideComponent } from '@app/components/userguide/userguide.component';
import { TOOLTIP_DELAY } from '@app/ressources/global-variables/global-variables';
import { SidebarElementTooltips, SIDEBAR_ELEMENT_TOOLTIPS } from '@app/ressources/global-variables/sidebar-element-tooltips';
import { ToolNames, TOOL_NAMES, TOOL_NAMES_ARRAY } from '@app/ressources/global-variables/tool-names';
import { HotkeyService } from '@app/services/hotkey/hotkey.service';
import { NewDrawingService } from '@app/services/new-drawing/new-drawing.service';
import { ToolSelectionService } from '@app/services/tool-selection/tool-selection.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    elementDescriptions: SidebarElementTooltips = SIDEBAR_ELEMENT_TOOLTIPS;
    tooltipShowDelay: number = TOOLTIP_DELAY;
    selectedTool: string = this.toolSelectionService.toolNames.PENCIL_TOOL_NAME;
    toolNames: ToolNames = TOOL_NAMES;
    constructor(
        public toolSelectionService: ToolSelectionService,
        public dialog: MatDialog,
        public newDrawingService: NewDrawingService,
        public hotkeyService: HotkeyService,
    ) {}

    ngOnInit(): void {
        this.hotkeyService.getKey().subscribe((tool) => {
            if (TOOL_NAMES_ARRAY.includes(tool)) {
                this.selectedTool = tool;
            }
        });
    }
    onToolChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        if (target.value != undefined) {
            this.toolSelectionService.changeTool(target.value);
            this.toolSelectionService.currentTool.setCursor();
        }
    }

    openUserguide(): void {
        this.dialog.open(UserguideComponent);
    }

    openDialog(): void {
        this.newDrawingService.openWarning();
    }

    openSaveWindow(): void {
        this.dialog.open(SavingComponent);
    }
    openCarouselWindow(): void {
        this.dialog.open(CarouselComponent);
    }
}
