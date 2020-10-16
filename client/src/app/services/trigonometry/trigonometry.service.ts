import { Injectable } from '@angular/core';
import { Vec2 } from '@app/classes/vec2';
import { DEGREES_180, LineAngle, MAXIMUM_DISTANCE_LINE_CONNECTION, Quadrant } from '@app/ressources/global-variables/global-variables';
import { LIMIT_ANGLES } from '@app/ressources/global-variables/limit-angles';

@Injectable({
    providedIn: 'root',
})
export class TrigonometryService {
    MAX_DISTANCE_BETWEEN_TWO_DOTS: number = 20;

    findClosestAngle(quadrant: Quadrant, angleDegree: number): LineAngle {
        switch (quadrant) {
            case Quadrant.TOP_RIGHT: {
                return this.findClosestAngleTopRight(quadrant, angleDegree);
            }
            case Quadrant.TOP_LEFT: {
                return this.findClosestAngleTopLeft(quadrant, angleDegree);
            }
            case Quadrant.BOTTOM_LEFT: {
                return this.findClosestAngleBottomLeft(quadrant, angleDegree);
            }
            case Quadrant.BOTTOM_RIGHT: {
                return this.findClosestAngleBottomRight(quadrant, angleDegree);
            }
        }
    }

    findClosestAngleTopRight(quadrant: Quadrant, angleDegree: number): LineAngle {
        if (LIMIT_ANGLES.DEGREES_0 <= angleDegree && angleDegree <= LIMIT_ANGLES.DEGREES_22POINT5) {
            return LineAngle.DEGREES_0;
        } else if (LIMIT_ANGLES.DEGREES_22POINT5 < angleDegree && angleDegree <= LIMIT_ANGLES.DEGREES_67POINT5) {
            return LineAngle.DEGREES_45;
        } else {
            return LineAngle.DEGREES_90;
        }
    }

    findClosestAngleTopLeft(quadrant: Quadrant, angleDegree: number): LineAngle {
        if (LIMIT_ANGLES.DEGREES_90 > angleDegree && angleDegree >= LIMIT_ANGLES.DEGREES_67POINT5) {
            return LineAngle.DEGREES_90;
        } else if (LIMIT_ANGLES.DEGREES_67POINT5 > angleDegree && angleDegree >= LIMIT_ANGLES.DEGREES_22POINT5) {
            return LineAngle.DEGREES_135;
        } else {
            return LineAngle.DEGREES_180;
        }
    }

    findClosestAngleBottomLeft(quadrant: Quadrant, angleDegree: number): LineAngle {
        if (LIMIT_ANGLES.DEGREES_0 <= angleDegree && angleDegree <= LIMIT_ANGLES.DEGREES_22POINT5) {
            return LineAngle.DEGREES_180;
        } else if (LIMIT_ANGLES.DEGREES_22POINT5 < angleDegree && angleDegree <= LIMIT_ANGLES.DEGREES_67POINT5) {
            return LineAngle.DEGREES_225;
        } else {
            return LineAngle.DEGREES_270;
        }
    }

    findClosestAngleBottomRight(quadrant: Quadrant, angleDegree: number): LineAngle {
        if (LIMIT_ANGLES.DEGREES_90 > angleDegree && angleDegree >= LIMIT_ANGLES.DEGREES_67POINT5) {
            return LineAngle.DEGREES_270;
        } else if (LIMIT_ANGLES.DEGREES_67POINT5 > angleDegree && angleDegree >= LIMIT_ANGLES.DEGREES_22POINT5) {
            return LineAngle.DEGREES_315;
        } else {
            return LineAngle.DEGREES_0;
        }
    }

    radiansToDegrees(radians: number): number {
        return radians * (DEGREES_180 / Math.PI);
    }

    findCursorQuadrant(adjacent: number, opposite: number): Quadrant {
        if (adjacent >= 0 && opposite >= 0) {
            return Quadrant.TOP_RIGHT;
        } else if (adjacent <= 0 && opposite >= 0) {
            return Quadrant.TOP_LEFT;
        } else if (adjacent <= 0 && opposite <= 0) {
            return Quadrant.BOTTOM_LEFT;
        } else {
            return Quadrant.BOTTOM_RIGHT;
        }
    }

    checkIf20pxAway(firstPoint: Vec2, secondPoint: Vec2): boolean {
        // Phytagore
        const a = secondPoint.x - firstPoint.x;
        const b = secondPoint.y - firstPoint.y;
        const c = Math.sqrt(a * a + b * b);
        if (c <= MAXIMUM_DISTANCE_LINE_CONNECTION) {
            return true;
        } else {
            return false;
        }
    }

    distanceBetweenTwoDots(firstDot: Vec2, secondDot: Vec2): number {
        // Phytagore
        const a = secondDot.x - firstDot.x;
        const b = secondDot.y - firstDot.y;
        const c = Math.sqrt(a * a + b * b);
        return c;
    }
}
