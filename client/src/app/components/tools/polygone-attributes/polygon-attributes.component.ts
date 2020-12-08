import { Component } from '@angular/core';
import { PolygonService } from '@app/services/tools/polygon.service';

@Component({
    selector: 'app-polygon-attributes',
    templateUrl: './polygon-attributes.component.html',
    styleUrls: ['./polygon-attributes.component.scss'],
})
export class PolygonAttributesComponent {
    toolWidth: number;
    fillStyle: number;
    numberOfSides: number;

    constructor(public polygonService: PolygonService) {
        this.toolWidth = polygonService.polygonData.lineWidth;
        this.fillStyle = polygonService.polygonData.fillStyle;
        this.numberOfSides = polygonService.polygonData.sides;
    }

    changeBorderWidth(newWidth: number): void {
        this.toolWidth = newWidth;
        this.polygonService.changeWidth(newWidth);
    }

    changeFillStyle(newFillStyle: number): void {
        this.polygonService.changeFillStyle(newFillStyle);
    }

    changeNumberOfSides(sides: number): void {
        this.numberOfSides = sides;
        this.polygonService.setSides(sides);
    }
}
