import { Component } from '@angular/core';
import { CircleService } from '@app/services/tools/circle.service';

@Component({
    selector: 'app-circle-attributes',
    templateUrl: './circle-attributes.component.html',
    styleUrls: ['./circle-attributes.component.scss'],
})
export class CircleAttributesComponent {
    toolWidth: number;

    constructor(public circleService: CircleService) {
        this.toolWidth = circleService.width;
    }

    handleBorderWidthChange(newWidth: number): void {
        this.toolWidth = newWidth;
        this.circleService.changeWidth(newWidth);
    }

    handleFillStyleChange(newFillStyle: number): void {
        this.circleService.changeFillStyle(newFillStyle);
    }
}
