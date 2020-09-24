import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserguideComponent } from '@app/components/userguide/userguide.component';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
    readonly title: string = 'LOG2990';
    message: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(public dialog: MatDialog) {}

    openUserguide(): void {
        this.dialog.open(UserguideComponent, {
            height: '1000px',
            width: '1200px',
        });
    }
}
