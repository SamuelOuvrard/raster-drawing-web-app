import { Injectable } from '@angular/core';
import { SidebarElements, SIDEBAR_ELEMENTS } from '@app/ressources/global-variables/sidebar-elements';
import { ToolNames, TOOL_NAMES } from '@app/ressources/global-variables/tool-names';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HotkeyService {
    toolName: Subject<string> = new Subject<string>();
    toolNames: ToolNames = TOOL_NAMES;
    sidebarElements: SidebarElements = SIDEBAR_ELEMENTS;
    isHotkeyEnabled: boolean = true;
    keyMapping: Map<string, string> = new Map([
        ['c', this.toolNames.PENCIL_TOOL_NAME],
        ['w', this.toolNames.BRUSH_TOOL_NAME],
        ['1', this.toolNames.SQUARE_TOOL_NAME],
        ['2', this.toolNames.CIRCLE_TOOL_NAME],
        ['l', this.toolNames.LINE_TOOL_NAME],
        ['b', this.toolNames.FILL_TOOL_NAME],
        ['e', this.toolNames.ERASER_TOOL_NAME],
        ['r', this.toolNames.SQUARE_SELECTION_TOOL_NAME],
        ['s', this.toolNames.CIRCLE_SELECTION_TOOL_NAME],
    ]);
    keysNeedCtrl: Map<string, string> = new Map([
        ['i', this.toolNames.PIPETTE_TOOL_NAME],
        ['o', this.sidebarElements.NEW_DRAWING_NAME],
        ['g', this.sidebarElements.CAROUSEL_NAME],
        ['s', this.sidebarElements.SAVE_SERVER_NAME],
        ['e', this.sidebarElements.EXPORT_DRAWING_NAME],
        ['a', this.sidebarElements.SELECT_ALL],
    ]);

    constructor() {
        this.isHotkeyEnabled = true;
    }

    onKeyDown(event: KeyboardEvent): void {
        if (!this.isHotkeyEnabled) return;
        event.preventDefault();
        let keyName: string | undefined;
        if (event.ctrlKey) {
            keyName = this.keysNeedCtrl.get(event.key.toString());
        } else {
            keyName = this.keyMapping.get(event.key.toString());
        }
        if (keyName) {
            this.toolName.next(keyName);
        }
    }
    getKey(): Observable<string> {
        return this.toolName.asObservable();
    }
}
