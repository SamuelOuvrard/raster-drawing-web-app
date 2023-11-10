(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+fG1":
/*!********************************************************************!*\
  !*** ./src/app/ressources/global-variables/brush-pattern-names.ts ***!
  \********************************************************************/
/*! exports provided: PATTERN_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATTERN_NAMES", function() { return PATTERN_NAMES; });
const PATTERN_NAMES = {
    FIRST_PATTERN: 'pattern1',
    SECOND_PATTERN: 'pattern2',
    THIRD_PATTERN: 'pattern3',
    FOURTH_PATTERN: 'pattern4',
    FIFTH_PATTERN: 'pattern5',
};


/***/ }),

/***/ "/Jh1":
/*!*********************************************!*\
  !*** ./src/app/ressources/texts/feature.ts ***!
  \*********************************************/
/*! exports provided: GENERALS_FEATURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERALS_FEATURE", function() { return GENERALS_FEATURE; });
const GENERALS_FEATURE = [
    {
        NAME: 'Créer ou continuer un dessin',
        DESCRIPTION: "Le bouton «Nouveau Dessin» permet d'effacer le dessin sur la surface de dessin et d'en créer un nouveau. S'il y a un dessin sur la surface de dessin, une fenêtre va apparaître pour s'assurer que vous voulez vraiment effacer le dessin présent sur la surface. ",
        PICTURE: './../../../assets/img/nouveau-dessin.png',
    },
    {
        NAME: 'Carrousel de dessin',
        DESCRIPTION: "Le carrousel de dessin permet d'ouvrir un dessin déjà créé et sauvegardé sur le serveur. Les dessins sauvegardés sont sous la forme d'un carrousel. Il est possible de voir trois dessins en même temps. Il est possible d'entrer des étiquettes pour pouvoir filtrer les dessins. Il est possible de charger le dessin en cliquant dessus.",
        PICTURE: './../../../assets/img/carrousel.png',
    },
    {
        NAME: 'Sauvegarde',
        DESCRIPTION: "Cette fonctionnalité permet de sauvegarder le dessin sur le serveur en format PNG. Pour sauvegarder le dessin, il faut entrer un nom. Il est possible d'ajouter des étiquettes (max 5 étiquettes).",
        PICTURE: './../../../assets/img/sauvegarde.png',
    },
    {
        NAME: 'Exportation',
        DESCRIPTION: "Cette fonctionnalité permet d'exporter le dessin localement ou par courriel en format PNG ou JPG. Elle permet aussi d'appliquer un filtre sur l'image avant de l'exporter. Il faut nommer l'image pour pouvoir l'exporter ",
        PICTURE: './../../../assets/img/exporter.png',
    },
    {
        NAME: 'Sauvegarde automatique',
        DESCRIPTION: "Cette fonctionnalité permet de sauvegarder le dessin automatiquement pendant son édition. La sauvegarde est déclenchée après la création d'un dessin, le chargement d'un dessin ou lors d'une modification sur la surface de dessin. Il est possible de récupérer le dessin avec le button Continuer un dessin",
        PICTURE: './../../../assets/img/continuer.png',
    },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\projet2\log2990-208\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0+1q":
/*!**************************************************!*\
  !*** ./src/app/services/tools/circle.service.ts ***!
  \**************************************************/
/*! exports provided: CircleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleService", function() { return CircleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_math_trigonometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/math/trigonometry */ "tW64");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/fill-styles */ "HwfQ");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");













class CircleService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_5__["TOOL_NAMES"].CIRCLE_TOOL_NAME;
        this.mouseDown = false;
        this.trigonometry = new _app_classes_math_trigonometry__WEBPACK_IMPORTED_MODULE_1__["Trigonometry"]();
        this.ellipseData = {
            type: 'ellipse',
            primaryColor: this.colorSelectionService.primaryColor,
            secondaryColor: this.colorSelectionService.secondaryColor,
            center: { x: 0, y: 0 },
            radius: { x: 0, y: 0 },
            fillStyle: _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].FILL_AND_BORDER,
            isShiftDown: false,
            lineWidth: 1,
            firstPoint: { x: 0, y: 0 },
            lastPoint: { x: 0, y: 0 },
        };
    }
    setIsShiftDown(isShiftDown) {
        this.ellipseData.isShiftDown = isShiftDown;
    }
    setFirstPoint(newPoint) {
        this.ellipseData.firstPoint = newPoint;
    }
    setLastPoint(newPoint) {
        this.ellipseData.lastPoint = newPoint;
    }
    setFillStyle(newFillStyle) {
        this.ellipseData.fillStyle = newFillStyle;
    }
    getFillStyle() {
        return this.ellipseData.fillStyle;
    }
    initialize() {
        this.mouseDown = false;
    }
    changeWidth(newWidth) {
        this.ellipseData.lineWidth = newWidth;
    }
    onKeyDown(event) {
        if (event.key === 'Shift') {
            this.ellipseData.isShiftDown = true;
            if (this.mouseDown) {
                this.drawingService.clearCanvas(this.drawingService.previewCtx);
                this.drawShape(this.drawingService.previewCtx);
            }
        }
    }
    onKeyUp(event) {
        if (event.key === 'Shift' && this.ellipseData.isShiftDown) {
            this.ellipseData.isShiftDown = false;
            if (this.mouseDown) {
                this.drawingService.clearCanvas(this.drawingService.previewCtx);
                this.drawShape(this.drawingService.previewCtx);
            }
        }
    }
    onMouseDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        this.mouseDown = event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["MouseButton"].LEFT;
        if (this.mouseDown) {
            this.ellipseData.firstPoint = this.getPositionFromMouse(event);
            this.ellipseData.lastPoint = this.getPositionFromMouse(event);
            this.undoRedoStackService.setIsToolInUse(true);
        }
    }
    onMouseUp(event) {
        if (this.mouseDown) {
            this.ellipseData.lastPoint = this.getPositionFromMouse(event);
            this.drawShape(this.drawingService.baseCtx);
            this.mouseDown = false;
            this.undoRedoStackService.setIsToolInUse(false);
        }
        this.drawingService.autoSave();
    }
    onMouseMove(event) {
        if (this.mouseDown) {
            this.ellipseData.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.drawShape(this.drawingService.previewCtx);
        }
    }
    drawShape(ctx) {
        const topLeftPoint = this.trigonometry.findTopLeftPointCircle(this.ellipseData.firstPoint, this.ellipseData.lastPoint);
        ctx.fillStyle = this.colorSelectionService.primaryColor;
        ctx.strokeStyle = this.colorSelectionService.secondaryColor;
        ctx.lineWidth = this.ellipseData.lineWidth;
        ctx.setLineDash([0]);
        if (this.ellipseData.fillStyle === _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].FILL) {
            ctx.strokeStyle = this.colorSelectionService.primaryColor;
            ctx.lineWidth = 1;
        }
        this.setEllipseHeight();
        this.setEllipseWidth();
        this.ellipseData.radius = { x: this.ellipseWidth / 2, y: this.ellipseHeight / 2 };
        this.ellipseData.center = { x: topLeftPoint.x + this.ellipseData.radius.x, y: topLeftPoint.y + this.ellipseData.radius.y };
        if (this.ellipseData.isShiftDown) {
            this.drawCircle(ctx, topLeftPoint);
        }
        else {
            this.updateEllipseDataColor();
            this.drawEllipse(ctx, this.ellipseData);
        }
        if (ctx === this.drawingService.previewCtx) {
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.setLineDash([_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_LENGTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_SPACE_LENGTH"]]);
            ctx.rect(topLeftPoint.x, topLeftPoint.y, this.ellipseWidth, this.ellipseHeight);
            ctx.stroke();
            ctx.lineWidth = this.ellipseData.lineWidth;
        }
        else {
            this.undoRedoStackService.updateStack(this.ellipseData);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.drawingService.previewCtx.setLineDash([0]);
        }
        topLeftPoint.x = this.ellipseData.center.x - this.ellipseData.radius.x;
        topLeftPoint.y = this.ellipseData.center.y - this.ellipseData.radius.y;
        return { startingPoint: topLeftPoint, width: this.ellipseData.radius.x * 2, height: this.ellipseData.radius.y * 2 };
    }
    drawEllipse(ctx, ellipse) {
        ctx.fillStyle = ellipse.primaryColor;
        ctx.strokeStyle = ellipse.secondaryColor;
        ctx.lineWidth = ellipse.lineWidth;
        if (ellipse.fillStyle === _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].FILL) {
            ctx.strokeStyle = ellipse.primaryColor;
            ctx.lineWidth = 1;
        }
        ctx.beginPath();
        if (ellipse.radius.x > ctx.lineWidth / 2 && ellipse.radius.y > ctx.lineWidth / 2) {
            ellipse.radius.x -= ctx.lineWidth / 2;
            ellipse.radius.y -= ctx.lineWidth / 2;
            ctx.ellipse(ellipse.center.x, ellipse.center.y, ellipse.radius.x, ellipse.radius.y, 0, 0, Math.PI * 2, false);
            if (ellipse.fillStyle !== _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].BORDER && ellipse.fillStyle !== _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].DASHED) {
                ctx.fill();
            }
        }
        ctx.stroke();
    }
    drawCircle(ctx, point) {
        this.setCircleHeight();
        this.setCircleWidth();
        this.quadrant = this.trigonometry.findQuadrant(this.ellipseData.firstPoint, this.ellipseData.lastPoint);
        const ellipseRadiusX = this.circleWidth / 2;
        const ellipseRadiusY = this.circleHeight / 2;
        let circleRadius = Math.min(ellipseRadiusX, ellipseRadiusY);
        let ellipseCenterX = point.x + circleRadius;
        let ellipseCenterY = point.y + circleRadius;
        switch (this.quadrant) {
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].BOTTOM_LEFT:
                ellipseCenterX = this.ellipseData.firstPoint.x - circleRadius;
                ellipseCenterY = this.ellipseData.firstPoint.y + circleRadius;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].TOP_LEFT:
                ellipseCenterX = this.ellipseData.firstPoint.x - circleRadius;
                ellipseCenterY = this.ellipseData.firstPoint.y - circleRadius;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].BOTTOM_RIGHT:
                ellipseCenterX = this.ellipseData.firstPoint.x + circleRadius;
                ellipseCenterY = this.ellipseData.firstPoint.y + circleRadius;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].TOP_RIGHT:
                ellipseCenterX = this.ellipseData.firstPoint.x + circleRadius;
                ellipseCenterY = this.ellipseData.firstPoint.y - circleRadius;
                break;
        }
        ctx.beginPath();
        if (circleRadius > ctx.lineWidth / 2) {
            circleRadius -= ctx.lineWidth / 2;
            ctx.arc(ellipseCenterX, ellipseCenterY, circleRadius, 0, Math.PI * 2, false);
            if (this.ellipseData.fillStyle !== _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].BORDER && this.ellipseData.fillStyle !== _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].DASHED) {
                ctx.fill();
            }
        }
        ctx.stroke();
        this.ellipseData.radius = { x: circleRadius, y: circleRadius };
        this.ellipseData.center = { x: ellipseCenterX, y: ellipseCenterY };
        this.updateEllipseDataColor();
    }
    setEllipseWidth() {
        this.ellipseWidth = Math.abs(this.ellipseData.firstPoint.x - this.ellipseData.lastPoint.x);
    }
    setEllipseHeight() {
        this.ellipseHeight = Math.abs(this.ellipseData.firstPoint.y - this.ellipseData.lastPoint.y);
    }
    updateEllipseDataColor() {
        this.ellipseData.primaryColor = this.colorSelectionService.primaryColor;
        this.ellipseData.secondaryColor = this.colorSelectionService.secondaryColor;
    }
    setCircleWidth() {
        this.circleWidth = Math.abs(this.ellipseData.firstPoint.x - this.ellipseData.lastPoint.x);
    }
    setCircleHeight() {
        this.circleHeight = Math.abs(this.ellipseData.firstPoint.y - this.ellipseData.lastPoint.y);
    }
}
CircleService.ɵfac = function CircleService_Factory(t) { return new (t || CircleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoStackService"])); };
CircleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CircleService, factory: CircleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "1/UG":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/tools/magic-wand-attributes/magic-wand-attributes.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MagicWandAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicWandAttributesComponent", function() { return MagicWandAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/selection-services/magic-wand.service */ "NWRK");
/* harmony import */ var _shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/magnetism/magnetism.component */ "uozt");





class MagicWandAttributesComponent {
    constructor(magicWandService) {
        this.magicWandService = magicWandService;
    }
}
MagicWandAttributesComponent.ɵfac = function MagicWandAttributesComponent_Factory(t) { return new (t || MagicWandAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_1__["MagicWandService"])); };
MagicWandAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MagicWandAttributesComponent, selectors: [["app-magic-wand-attributes"]], decls: 5, vars: 2, consts: [["id", "magicWand"], [1, "toolName"], [3, "service"]], template: function MagicWandAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-magnetism", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.magicWandService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("service", ctx.magicWandService);
    } }, directives: [_shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_2__["MagnetismComponent"]], styles: ["#magicWand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n\napp-magnetism[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9tYWdpYy13YW5kLWF0dHJpYnV0ZXMvbWFnaWMtd2FuZC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvbWFnaWMtd2FuZC1hdHRyaWJ1dGVzL21hZ2ljLXdhbmQtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWdpY1dhbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmFwcC1tYWduZXRpc20ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRvb2xOYW1lIHtcbiAgICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagicWandAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-magic-wand-attributes',
                templateUrl: './magic-wand-attributes.component.html',
                styleUrls: ['./magic-wand-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_1__["MagicWandService"] }]; }, null); })();


/***/ }),

/***/ "12tw":
/*!************************************************!*\
  !*** ./src/app/services/tools/fill.service.ts ***!
  \************************************************/
/*! exports provided: FillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillService", function() { return FillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/rgba */ "4IQm");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");












class FillService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.drawingService = drawingService;
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAMES"].FILL_TOOL_NAME;
        this.maxTolerance = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MAX_TOLERANCE_VALUE"];
        this.minTolerance = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MIN_TOLERANCE_VALUE"];
        this.tolerance = this.minTolerance;
    }
    changeTolerance(newTolerance) {
        this.tolerance = newTolerance;
    }
    onMouseDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        this.mouseDownCoord = this.getPositionFromMouse(event);
        this.initialPixelData = this.drawingService.getPixelData(this.mouseDownCoord);
        if (event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].LEFT) {
            this.drawingService.baseCtx.fillStyle = this.colorSelectionService.primaryColor;
            this.contiguousFill();
        }
        else if (event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].RIGHT) {
            this.fill();
        }
    }
    contiguousFill() {
        const pixelData = this.drawingService.getPixelData(this.mouseDownCoord);
        const stack = [this.mouseDownCoord];
        const coloredPixels = new Map();
        const canvasData = this.drawingService.getCanvasData();
        const rgbaPrimaryColor = this.colorSelectionService.getRgbaPrimaryColor();
        while (stack.length) {
            const currentPixel = stack.pop();
            const index = (currentPixel.x + currentPixel.y * this.drawingService.canvas.width) * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_LENGTH"];
            if (coloredPixels.has(this.vec2ToString(currentPixel))) {
                continue;
            }
            else if (this.isInToleranceRange(pixelData, canvasData, index)) {
                canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].RED] = rgbaPrimaryColor.RED;
                canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].GREEN] = rgbaPrimaryColor.GREEN;
                canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].BLUE] = rgbaPrimaryColor.BLUE;
                canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].ALPHA] = rgbaPrimaryColor.ALPHA;
                coloredPixels.set(this.vec2ToString(currentPixel), true);
                if (currentPixel.y - 1 >= 0) {
                    stack.push({ x: currentPixel.x, y: currentPixel.y - 1 });
                }
                if (currentPixel.y + 1 < this.drawingService.canvas.height) {
                    stack.push({ x: currentPixel.x, y: currentPixel.y + 1 });
                }
                if (currentPixel.x + 1 < this.drawingService.canvas.width) {
                    stack.push({ x: currentPixel.x + 1, y: currentPixel.y });
                }
                if (currentPixel.x - 1 >= 0) {
                    stack.push({ x: currentPixel.x - 1, y: currentPixel.y });
                }
            }
        }
        this.canvasData = canvasData;
        this.updateFillData();
        this.drawingService.baseCtx.putImageData(canvasData, 0, 0);
        this.undoRedoStackService.updateStack(this.fillData);
    }
    fill() {
        const pixelData = this.drawingService.getPixelData(this.mouseDownCoord);
        const canvasData = this.drawingService.getCanvasData();
        const rgbaPrimaryColor = this.colorSelectionService.getRgbaPrimaryColor();
        let i;
        for (i = 0; i < canvasData.data.length; i += _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_LENGTH"]) {
            if (this.isInToleranceRange(pixelData, canvasData, i)) {
                canvasData.data[i + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].RED] = rgbaPrimaryColor.RED;
                canvasData.data[i + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].GREEN] = rgbaPrimaryColor.GREEN;
                canvasData.data[i + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].BLUE] = rgbaPrimaryColor.BLUE;
                canvasData.data[i + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].ALPHA] = rgbaPrimaryColor.ALPHA;
            }
        }
        this.canvasData = canvasData;
        this.updateFillData();
        this.drawingService.baseCtx.putImageData(canvasData, 0, 0);
        this.undoRedoStackService.updateStack(this.fillData);
    }
    vec2ToString(pixel) {
        return pixel.x.toString() + ',' + pixel.y.toString();
    }
    isInToleranceRange(pixelData, canvasData, index) {
        const diffRed = Math.abs(pixelData[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].RED] - canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].RED]);
        const diffGreen = Math.abs(pixelData[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].GREEN] - canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].GREEN]);
        const diffBlue = Math.abs(pixelData[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].BLUE] - canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].BLUE]);
        const diffAlpha = Math.abs(pixelData[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].ALPHA] - canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_INDEXER"].ALPHA]);
        const diffPercentage = ((diffRed + diffGreen + diffBlue + diffAlpha) / (_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["RGBA_LENGTH"] * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_3__["MAXIMUM_RGBA_VALUE"])) * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MAX_PERCENTAGE"];
        if (diffPercentage > this.tolerance) {
            return false;
        }
        return true;
    }
    updateFillData() {
        this.fillData = {
            type: 'fill',
            imageData: this.canvasData,
        };
        this.drawingService.autoSave();
    }
}
FillService.ɵfac = function FillService_Factory(t) { return new (t || FillService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__["UndoRedoStackService"])); };
FillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FillService, factory: FillService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "1gAd":
/*!*********************************************************!*\
  !*** ./src/app/services/undo-redo/undo-redo.service.ts ***!
  \*********************************************************/
/*! exports provided: UndoRedoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoService", function() { return UndoRedoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/resize-drawing/resize-drawing.service */ "JXhA");
/* harmony import */ var _app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/tools/brush.service */ "j+pl");
/* harmony import */ var _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/tools/circle.service */ "0+1q");
/* harmony import */ var _app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/tools/eraser.service */ "UqM6");
/* harmony import */ var _app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/tools/line.service */ "7kIh");
/* harmony import */ var _app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/tools/pen.service */ "jZBZ");
/* harmony import */ var _app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/tools/pencil.service */ "ZiOh");
/* harmony import */ var _app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/tools/polygon.service */ "Spv2");
/* harmony import */ var _app_services_tools_selection_services_selection_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/tools/selection-services/selection.service */ "a4AR");
/* harmony import */ var _app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/tools/spray.service */ "PE9K");
/* harmony import */ var _app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/tools/square.service */ "O4K9");
/* harmony import */ var _app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/services/tools/stamp.service */ "afaw");
/* harmony import */ var _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/services/tools/text.service */ "2Eww");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./undo-redo-stack.service */ "i3Rd");


































class UndoRedoService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, circleService, resizeDrawingService, squareService, pencilService, eraserService, lineService, brushService, polygonService, selectionService, stampService, undoRedoStackService, sprayService, penService, textService) {
        super(drawingService);
        this.drawingService = drawingService;
        this.circleService = circleService;
        this.resizeDrawingService = resizeDrawingService;
        this.squareService = squareService;
        this.pencilService = pencilService;
        this.eraserService = eraserService;
        this.lineService = lineService;
        this.brushService = brushService;
        this.polygonService = polygonService;
        this.selectionService = selectionService;
        this.stampService = stampService;
        this.undoRedoStackService = undoRedoStackService;
        this.sprayService = sprayService;
        this.penService = penService;
        this.textService = textService;
        this.isUndoAvailable = false;
        this.isUndoAvailableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_16__["Subject"]();
        this.isRedoAvailable = false;
        this.isRedoAvailableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_16__["Subject"]();
        this.undoRedoStackService.getIsToolInUse().subscribe((value) => {
            if (value) {
                this.setUndoAvailability(false);
                this.setRedoAvailability(false);
            }
            else {
                this.setUndoAvailability(true);
                this.setRedoAvailability(true);
                this.changeUndoAvailability();
                this.changeRedoAvailability();
            }
        });
    }
    setUndoAvailability(isAvailable) {
        this.isUndoAvailable = isAvailable;
        this.isUndoAvailableSubject.next(isAvailable);
    }
    setRedoAvailability(isAvailable) {
        this.isRedoAvailable = isAvailable;
        this.isRedoAvailableSubject.next(isAvailable);
    }
    getUndoAvailability() {
        return this.isUndoAvailableSubject.asObservable();
    }
    getRedoAvailability() {
        return this.isRedoAvailableSubject.asObservable();
    }
    undo() {
        this.selectionService.reset();
        this.changeUndoAvailability();
        this.changeRedoAvailability();
        if (!this.isUndoAvailable) {
            return;
        }
        this.resizeDrawingService.resizeCanvasSize(this.resizeDrawingService.workSpaceSize.x / 2, this.resizeDrawingService.workSpaceSize.y / 2);
        const modification = this.undoRedoStackService.undoStack.pop();
        if (modification) {
            this.undoRedoStackService.redoStack.push(modification);
        }
        this.drawingService.clearCanvas(this.drawingService.baseCtx);
        this.undoRedoStackService.undoStack.forEach((element) => {
            this.drawElement(element);
        });
        this.changeUndoAvailability();
        this.changeRedoAvailability();
        this.drawingService.autoSave();
    }
    redo() {
        this.selectionService.reset();
        this.changeUndoAvailability();
        this.changeRedoAvailability();
        if (!this.isRedoAvailable) {
            return;
        }
        const redoStackLength = this.undoRedoStackService.redoStack.length;
        if (redoStackLength) {
            const element = this.undoRedoStackService.redoStack[redoStackLength - 1];
            this.drawElement(element);
            const modification = this.undoRedoStackService.redoStack.pop();
            this.undoRedoStackService.undoStack.push(modification);
        }
        this.changeUndoAvailability();
        this.changeRedoAvailability();
        this.drawingService.autoSave();
    }
    changeUndoAvailability() {
        if (this.undoRedoStackService.undoStack.length) {
            this.setUndoAvailability(true);
        }
        else {
            this.setUndoAvailability(false);
        }
    }
    changeRedoAvailability() {
        if (this.undoRedoStackService.redoStack.length) {
            this.setRedoAvailability(true);
        }
        else {
            this.setRedoAvailability(false);
        }
    }
    drawElement(element) {
        switch (element.type) {
            case 'pencil':
                this.pencilService.drawPencilStroke(this.drawingService.baseCtx, element);
                break;
            case 'brush':
                this.brushService.drawLine(this.drawingService.baseCtx, element);
                break;
            case 'eraser':
                this.eraserService.drawEraserStroke(this.drawingService.baseCtx, element);
                break;
            case 'line':
                this.lineService.drawFullLine(this.drawingService.baseCtx, element);
                break;
            case 'rectangle':
                this.squareService.drawRectangle(this.drawingService.baseCtx, element);
                break;
            case 'ellipse':
                this.circleService.drawEllipse(this.drawingService.baseCtx, element);
                break;
            case 'fill':
                this.drawingService.drawFill(element);
                break;
            case 'resize':
                this.resizeDrawingService.restoreCanvas(element);
                break;
            case 'polygon':
                this.polygonService.drawPolygon(this.drawingService.baseCtx, element);
                break;
            case 'selection':
                this.drawingService.restoreSelection(element);
                break;
            case 'stamp':
                this.stampService.printStamp(this.drawingService.baseCtx, element);
                break;
            case 'spray':
                this.sprayService.restoreSpray(element);
                break;
            case 'pen':
                this.penService.restorePen(element);
                break;
            case 'text':
                this.textService.restoreText(element);
                break;
        }
    }
}
UndoRedoService.ɵfac = function UndoRedoService_Factory(t) { return new (t || UndoRedoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_5__["CircleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__["ResizeDrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_13__["SquareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_9__["PencilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_6__["EraserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_7__["LineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_4__["BrushService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_10__["PolygonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_selection_services_selection_service__WEBPACK_IMPORTED_MODULE_11__["SelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_14__["StampService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_17__["UndoRedoStackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_12__["SprayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_8__["PenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_15__["TextService"])); };
UndoRedoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UndoRedoService, factory: UndoRedoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UndoRedoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"] }, { type: _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_5__["CircleService"] }, { type: _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__["ResizeDrawingService"] }, { type: _app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_13__["SquareService"] }, { type: _app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_9__["PencilService"] }, { type: _app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_6__["EraserService"] }, { type: _app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_7__["LineService"] }, { type: _app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_4__["BrushService"] }, { type: _app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_10__["PolygonService"] }, { type: _app_services_tools_selection_services_selection_service__WEBPACK_IMPORTED_MODULE_11__["SelectionService"] }, { type: _app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_14__["StampService"] }, { type: _undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_17__["UndoRedoStackService"] }, { type: _app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_12__["SprayService"] }, { type: _app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_8__["PenService"] }, { type: _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_15__["TextService"] }]; }, null); })();


/***/ }),

/***/ "2Eww":
/*!************************************************!*\
  !*** ./src/app/services/tools/text.service.ts ***!
  \************************************************/
/*! exports provided: TextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextService", function() { return TextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/arrow-keys */ "ijVN");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/text */ "hZmb");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");















class TextService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, hotkeyService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.hotkeyService = hotkeyService;
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_5__["TOOL_NAMES"].TEXT_TOOL_NAME;
        this.indexIndicator = 0;
        this.textStartingPoint = { x: 0, y: 0 };
        this.isNewText = false;
        this.font = 'Georgia';
        this.textSize = 30;
        this.italicText = 'normal';
        this.boldText = 'normal';
        this.align = 'start';
        this.isFrontDelete = false;
        this.isWritingEnable = true;
    }
    initializeNewText() {
        this.hotkeyService.isHotkeyEnabled = false;
        this.text = [];
        this.isNewText = true;
        this.text.push('|');
        this.applyTextStyle();
    }
    destroy() {
        this.text = [];
        this.isNewText = false;
        this.indexIndicator = 0;
        this.hotkeyService.isHotkeyEnabled = true;
    }
    onMouseDown(event) {
        if (this.isMouseOnText(this.getPositionFromMouse(event)) || event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MouseButton"].RIGHT) {
            return;
        }
        if (!this.isNewText) {
            const mousePosition = this.getPositionFromMouse(event);
            this.textStartingPoint = { x: mousePosition.x, y: mousePosition.y };
            this.initializeNewText();
        }
        else {
            this.createText();
        }
    }
    isMouseOnText(mousePosition) {
        if (!this.text)
            return false;
        const selectionWidth = this.textStartingPoint.x + this.drawingService.previewCtx.measureText(this.maxLine).width;
        const selectionHeight = this.height * this.text.join('').split('Enter').length + this.textStartingPoint.y;
        if (mousePosition.x >= this.textStartingPoint.x &&
            mousePosition.x <= selectionWidth &&
            mousePosition.y >= this.textStartingPoint.y &&
            mousePosition.y <= selectionHeight) {
            return true;
        }
        else {
            return false;
        }
    }
    createText() {
        if (!this.text)
            return;
        this.removeIndicator();
        this.printText();
        this.drawingService.applyPreview();
        this.canvasData = this.drawingService.getCanvasData();
        this.updateTextData();
        this.undoRedoStackService.updateStack(this.textData);
        this.destroy();
    }
    onMouseEnter() {
        this.applyTextStyle();
    }
    onKeyDown(event) {
        if (!this.isNewText || !this.isWritingEnable)
            return;
        switch (event.key) {
            case 'Backspace':
                this.isFrontDelete = false;
                this.deleteText(this.indexIndicator - 1);
                this.indexIndicator--;
                break;
            case 'Delete':
                this.isFrontDelete = true;
                this.deleteText(this.indexIndicator + 1);
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_2__["ARROW_KEYS"].LEFT:
                this.moveIndicator(_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MOVE_DOWN"]);
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_2__["ARROW_KEYS"].RIGHT:
                this.moveIndicator(1);
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_2__["ARROW_KEYS"].UP:
                this.moveIndicatorUpAndDown('UP');
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_2__["ARROW_KEYS"].DOWN:
                this.moveIndicatorUpAndDown('DOWN');
                break;
            case 'Escape':
                this.createText();
                break;
            case 'Alt':
                event.preventDefault();
                break;
            default:
                if (this.isCorrectKey(event.key)) {
                    this.insertItemInText(event.key);
                    this.indexIndicator++;
                }
                break;
        }
    }
    onKeyUp(event) {
        this.printText();
    }
    getIndicatorLineAndIndex(lines) {
        let i = 0;
        for (const line of lines) {
            const indicatorIndex = line.indexOf('|');
            if (indicatorIndex >= 0) {
                return { x: indicatorIndex, y: i };
            }
            i++;
        }
        return { x: -1, y: -1 };
    }
    moveIndicatorUpAndDown(mouvement) {
        const lines = this.text.join('').split('Enter');
        const indicatorPosition = this.getIndicatorLineAndIndex(lines);
        if (mouvement === 'UP' && !this.isInFirstLine()) {
            if (lines[indicatorPosition.y - 1].length < indicatorPosition.x) {
                this.indexIndicator -= indicatorPosition.x + 1;
            }
            else {
                this.indexIndicator -= indicatorPosition.x + 1;
                this.indexIndicator -= lines[indicatorPosition.y - 1].length - indicatorPosition.x;
            }
        }
        else if (mouvement === 'DOWN' && !this.isInLastLine()) {
            if (lines[indicatorPosition.y + 1].length < indicatorPosition.x) {
                this.indexIndicator += lines[indicatorPosition.y].length - indicatorPosition.x;
                this.indexIndicator += lines[indicatorPosition.y + 1].length;
            }
            else {
                this.indexIndicator += lines[indicatorPosition.y].length - indicatorPosition.x;
                this.indexIndicator += indicatorPosition.x;
            }
        }
        this.removeIndicator();
        this.insertItemInText('|');
    }
    isInFirstLine() {
        const indexEnter = this.text.indexOf('Enter');
        if (indexEnter > this.indexIndicator || indexEnter < 0) {
            return true;
        }
        else {
            return false;
        }
    }
    isInLastLine() {
        const indexEnter = this.text.lastIndexOf('Enter');
        if (indexEnter < this.indexIndicator || indexEnter < 0) {
            return true;
        }
        else {
            return false;
        }
    }
    insertItemInText(item) {
        if (item === '|' && this.indexIndicator >= this.text.length) {
            this.text.push('|');
        }
        else if (this.indexIndicator >= this.text.length) {
            this.text.pop();
            this.text.push(item);
            this.text.push('|');
        }
        else {
            const newText = [];
            let i = 0;
            for (const char of this.text) {
                if (i === this.indexIndicator) {
                    newText.push(item);
                }
                newText.push(char);
                i++;
            }
            this.text = newText;
        }
    }
    deleteText(index) {
        if (index < 0 && this.isFrontDelete)
            return;
        if (index >= this.text.length && !this.isFrontDelete) {
            return;
        }
        const beforeItem = this.text.slice(0, index);
        const afterItem = this.text.slice(index + 1);
        this.text = beforeItem.concat(afterItem);
    }
    removeIndicator() {
        const newText = [];
        for (const char of this.text) {
            if (char !== '|') {
                newText.push(char);
            }
        }
        this.text = newText;
    }
    printText() {
        this.maxLine = '';
        if (!this.text)
            return;
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        let line = [];
        let lineHeight = this.textStartingPoint.y + this.height;
        let lineWidth = this.textStartingPoint.x;
        for (const char of this.text) {
            if (char === 'Enter') {
                if (line.indexOf('|') >= 0) {
                    this.printIndicatorLine(line, lineHeight);
                }
                else {
                    this.drawingService.previewCtx.fillText(line.join(''), lineWidth, lineHeight);
                }
                lineHeight += this.height + _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MARGIN"];
                if (line.length > this.maxLine.length)
                    this.maxLine = line.join('');
                line = [];
                lineWidth = this.textStartingPoint.x;
            }
            else {
                line.push(char);
            }
        }
        if (line.indexOf('|') >= 0) {
            this.printIndicatorLine(line, lineHeight);
        }
        else {
            this.drawingService.previewCtx.fillText(line.join(''), lineWidth, lineHeight);
        }
        if (line.length > this.maxLine.length)
            this.maxLine = line.join('');
    }
    setStratingPointX(line) {
        let lineWidth = this.textStartingPoint.x;
        if (this.align === 'center') {
            lineWidth -= this.drawingService.previewCtx.measureText(line.join('')).width / 2;
        }
        else if (this.align === 'end') {
            lineWidth -= this.drawingService.previewCtx.measureText(line.join('')).width;
        }
        return lineWidth;
    }
    printIndicatorLine(line, lineHeight) {
        const afterIndicator = line.slice(line.indexOf('|') + 1);
        const beforeIndicator = line.slice(0, line.indexOf('|'));
        let lineWidth = this.setStratingPointX(line);
        this.drawingService.previewCtx.textAlign = 'start';
        this.drawingService.previewCtx.fillText(beforeIndicator.join(''), lineWidth, lineHeight);
        lineWidth += this.drawingService.previewCtx.measureText(beforeIndicator.join('')).width;
        this.printIndicator(lineWidth, lineHeight);
        lineWidth += this.drawingService.previewCtx.measureText('|').width;
        this.drawingService.previewCtx.fillText(afterIndicator.join(''), lineWidth, lineHeight);
        this.drawingService.previewCtx.textAlign = this.align;
    }
    printIndicator(lineWidth, lineHeight) {
        const fillStyle = this.drawingService.previewCtx.fillStyle;
        this.drawingService.previewCtx.fillStyle = '#000000';
        this.drawingService.previewCtx.fillText('|', lineWidth, lineHeight);
        this.drawingService.previewCtx.fillStyle = fillStyle;
    }
    moveIndicator(interval) {
        if (interval < 0 && this.indexIndicator <= 0)
            return;
        else if (interval > 0 && this.indexIndicator + 1 >= this.text.length)
            return;
        this.removeIndicator();
        this.indexIndicator = this.indexIndicator + interval;
        this.insertItemInText('|');
    }
    applyTextStyle() {
        const textTest = 'wWmML';
        this.drawingService.previewCtx.fillStyle = this.colorSelectionService.primaryColor;
        this.drawingService.previewCtx.font = this.italicText + ' ' + this.boldText + ' ' + this.textSize.toString() + 'px ' + this.font;
        this.drawingService.previewCtx.textAlign = this.align;
        const metrics = this.drawingService.previewCtx.measureText(textTest);
        this.height = metrics.actualBoundingBoxAscent;
        this.printText();
    }
    isCorrectKey(key) {
        const isLetter = key >= 'a' && key <= 'z';
        const isNumber = key >= '0' && key <= '9';
        if (isLetter || isNumber || _app_ressources_global_variables_text__WEBPACK_IMPORTED_MODULE_4__["AUTHORIZED_KEY"].includes(key))
            return true;
        else
            return false;
    }
    restoreText(textData) {
        this.drawingService.baseCtx.putImageData(textData.imageData, 0, 0);
    }
    updateTextData() {
        this.textData = {
            type: 'text',
            imageData: this.canvasData,
        };
        this.drawingService.autoSave();
    }
}
TextService.ɵfac = function TextService_Factory(t) { return new (t || TextService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_8__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__["UndoRedoStackService"])); };
TextService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TextService, factory: TextService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_8__["HotkeyService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "2Npv":
/*!***************************************************!*\
  !*** ./src/app/services/tools/pipette.service.ts ***!
  \***************************************************/
/*! exports provided: PipetteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipetteService", function() { return PipetteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");










class PipetteService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, colorSelectionService) {
        super(drawingService);
        this.colorSelectionService = colorSelectionService;
        this.mouseOut = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.color = ['#000000', '0'];
        this.primaryColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.secondaryColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAMES"].PIPETTE_TOOL_NAME;
        this.isNearBorder = false;
    }
    onMouseDown(event) {
        this.mouseDown = true;
        this.mouseDownCoord = this.getPositionFromMouse(event);
        const pixel = this.drawingService.baseCtx.getImageData(this.mouseDownCoord.x, this.mouseDownCoord.y, 1, 1);
        const pixelData = pixel.data;
        let r = pixelData[0].toString(16);
        let g = pixelData[1].toString(16);
        let b = pixelData[2].toString(16);
        if (r.length === 1) {
            r = '0' + r;
        }
        if (g.length === 1) {
            g = '0' + g;
        }
        if (b.length === 1) {
            b = '0' + b;
        }
        this.color[0] = '#' + r + g + b;
        this.color[1] = pixelData[3].toString();
        if (event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].LEFT) {
            this.primaryColor.emit(this.color);
        }
        if (event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].RIGHT) {
            this.secondaryColor.emit(this.color);
        }
    }
    showZoomPixel(event) {
        this.clearCanvas();
        if (!this.isNearBorder) {
            this.drawOnZoom(event);
        }
    }
    drawOnZoom(event) {
        const x = this.getPositionFromMouse(event).x;
        const y = this.getPositionFromMouse(event).y;
        const hSource = this.zoom.height / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"];
        const wSource = this.zoom.width / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"];
        this.zoomCtx.beginPath();
        this.zoomCtx.arc(this.zoom.width / 2, this.zoom.height / 2, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["ZOOM_RADIUS"], 0, 2 * Math.PI);
        this.zoomCtx.clip();
        this.zoomCtx.drawImage(this.drawingService.canvas, x - wSource / 2, y - hSource / 2, wSource, hSource, 0, 0, this.zoom.width, this.zoom.height);
        this.zoomCtx.closePath();
        this.cursorOnPixel(event, this.zoom.width, this.zoom.height);
    }
    cursorOnPixel(e, width, height) {
        const mousePosition = this.getPositionFromMouse(e);
        const pixelData = this.drawingService.baseCtx.getImageData(mousePosition.x, mousePosition.y, 1, 1).data;
        const opacityIndex = 3;
        const color = 'rgba(' + pixelData[0] + ', ' + pixelData[1] + ', ' + pixelData[2] + ', ' + pixelData[opacityIndex] / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MAX_OPACITY_RGBA"] + ')';
        this.zoomCtx.beginPath();
        this.zoomCtx.fillStyle = color;
        this.zoomCtx.strokeStyle = 'white';
        this.zoomCtx.setLineDash([2, 1]);
        this.zoomCtx.strokeRect(width / 2 - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"] / 2, height / 2 - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"] / 2, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"]);
        this.zoomCtx.strokeStyle = 'black';
        this.zoomCtx.setLineDash([1, 2]);
        this.zoomCtx.strokeRect(width / 2 - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"] / 2, height / 2 - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"] / 2, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"]);
        this.zoomCtx.fillRect(width / 2 - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"] / 2, height / 2 - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"] / 2, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["GROWTH_ZOOM_PIPETTE"]);
        this.zoomCtx.stroke();
    }
    nearBorder(mousePosition) {
        this.isNearBorder = false;
        if (mousePosition.x >= this.drawingService.canvas.width || mousePosition.x <= 0) {
            this.isNearBorder = true;
        }
        if (mousePosition.y >= this.drawingService.canvas.height || mousePosition.y <= 0) {
            this.isNearBorder = true;
        }
        if (this.isNearBorder) {
            this.clearCanvas();
        }
    }
    clearCanvas() {
        this.zoomCtx.clearRect(0, 0, this.zoom.width, this.zoom.height);
    }
    onMouseMove(event) {
        this.nearBorder(this.getPositionFromMouse(event));
        this.showZoomPixel(event);
    }
    onMouseEnter() {
        this.mouseOut.next(true);
    }
    onMouseLeave() {
        this.mouseOut.next(false);
    }
}
PipetteService.ɵfac = function PipetteService_Factory(t) { return new (t || PipetteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"])); };
PipetteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PipetteService, factory: PipetteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipetteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"] }]; }, { mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "3+1Z":
/*!*********************************************************************!*\
  !*** ./src/app/services/color-selection/color-selection.service.ts ***!
  \*********************************************************************/
/*! exports provided: ColorSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSelectionService", function() { return ColorSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/rgba */ "4IQm");



class ColorSelectionService {
    getRgbaPrimaryColor() {
        const slicingIndex = this.primaryColor.indexOf('(') + 1;
        const primaryColor = this.primaryColor.slice(slicingIndex);
        const subStrings = primaryColor.split(',');
        const rgba = {
            RED: parseInt(subStrings[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_1__["RGBA_INDEXER"].RED], 10),
            GREEN: parseInt(subStrings[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_1__["RGBA_INDEXER"].GREEN], 10),
            BLUE: parseInt(subStrings[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_1__["RGBA_INDEXER"].BLUE], 10),
            ALPHA: parseFloat(subStrings[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_1__["RGBA_INDEXER"].ALPHA]) * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_1__["MAXIMUM_RGBA_VALUE"],
        };
        return rgba;
    }
}
ColorSelectionService.ɵfac = function ColorSelectionService_Factory(t) { return new (t || ColorSelectionService)(); };
ColorSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorSelectionService, factory: ColorSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "3bcJ":
/*!**************************************************************!*\
  !*** ./src/app/ressources/global-variables/grid-elements.ts ***!
  \**************************************************************/
/*! exports provided: GRID_NAME, GRID_INCREASE_NAME, GRID_DECREASE_NAME, GRID_ELEMENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_NAME", function() { return GRID_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_INCREASE_NAME", function() { return GRID_INCREASE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_DECREASE_NAME", function() { return GRID_DECREASE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_ELEMENTS", function() { return GRID_ELEMENTS; });
const GRID_NAME = 'Grid';
const GRID_INCREASE_NAME = 'Grid Increase';
const GRID_DECREASE_NAME = 'Grid Decrease';
const GRID_ELEMENTS = {
    GRID_NAME: 'Grid',
    GRID_INCREASE_NAME: 'Grid Increase',
    GRID_DECREASE_NAME: 'Grid Decrease',
};


/***/ }),

/***/ "4IQm":
/*!*****************************************************!*\
  !*** ./src/app/ressources/global-variables/rgba.ts ***!
  \*****************************************************/
/*! exports provided: MAXIMUM_RGBA_VALUE, RGBA_LENGTH, RGBA_INDEXER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_RGBA_VALUE", function() { return MAXIMUM_RGBA_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_LENGTH", function() { return RGBA_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_INDEXER", function() { return RGBA_INDEXER; });
const MAXIMUM_RGBA_VALUE = 255;
const RGBA_LENGTH = 4;
const RGBA_INDEXER = {
    RED: 0,
    GREEN: 1,
    BLUE: 2,
    ALPHA: 3,
};


/***/ }),

/***/ "4td7":
/*!*************************************************************!*\
  !*** ./src/app/ressources/global-variables/limit-angles.ts ***!
  \*************************************************************/
/*! exports provided: LIMIT_ANGLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT_ANGLES", function() { return LIMIT_ANGLES; });
const LIMIT_ANGLES = {
    DEGREES_0: 0,
    DEGREES_22POINT5: 22.5,
    DEGREES_67POINT5: 67.5,
    DEGREES_90: 90,
};


/***/ }),

/***/ "6Ip1":
/*!*******************************************************************************!*\
  !*** ./src/app/services/tools/selection-services/square-selection.service.ts ***!
  \*******************************************************************************/
/*! exports provided: SquareSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareSelectionService", function() { return SquareSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/clipboard/clipboard.service */ "l+p6");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/tools/square.service */ "O4K9");
/* harmony import */ var _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/tools/transformation-services/move.service */ "Uu7x");
/* harmony import */ var _app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/tools/transformation-services/rotate.service */ "88n9");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var _magnetism_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./magnetism.service */ "BemE");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection.service */ "a4AR");



















class SquareSelectionService extends _selection_service__WEBPACK_IMPORTED_MODULE_10__["SelectionService"] {
    constructor(drawingService, squareService, moveService, rotateService, clipboardService, magnetismService, undoRedoStackService) {
        super(drawingService, moveService, rotateService, clipboardService, magnetismService, undoRedoStackService);
        this.squareService = squareService;
        this.moveService = moveService;
        this.rotateService = rotateService;
        this.clipboardService = clipboardService;
        this.magnetismService = magnetismService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_2__["TOOL_NAMES"].SQUARE_SELECTION_TOOL_NAME;
        super.underlyingService = squareService;
        this.selectionType = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["SelectionType"].SQUARE;
    }
    setSelectionData() {
        this.selectionImage.width = this.selection.width;
        this.selectionImage.height = this.selection.height;
        const selectionImageCtx = this.selectionImage.getContext('2d');
        selectionImageCtx.drawImage(this.drawingService.canvas, this.selection.startingPoint.x, this.selection.startingPoint.y, this.selection.width, this.selection.height, 0, 0, this.selection.width, this.selection.height);
        this.moveService.initialize(this.selection, this.selectionImage);
        this.rotateService.initialize(this.selection, this.selectionImage);
    }
    setMagnetismAlignment(alignment) {
        this.currentAlignment = alignment;
    }
    strokeSelection() {
        if (this.selection.height !== 0 && this.selection.width !== 0) {
            this.drawingService.previewCtx.save();
            this.rotateService.rotatePreviewCanvas();
            this.drawingService.previewCtx.strokeRect(this.selection.startingPoint.x, this.selection.startingPoint.y, this.selection.width, this.selection.height);
            this.drawingService.previewCtx.restore();
        }
        this.drawingService.autoSave();
    }
}
SquareSelectionService.ɵfac = function SquareSelectionService_Factory(t) { return new (t || SquareSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_5__["SquareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_6__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_7__["RotateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_magnetism_service__WEBPACK_IMPORTED_MODULE_9__["MagnetismService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoStackService"])); };
SquareSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SquareSelectionService, factory: SquareSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SquareSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_5__["SquareService"] }, { type: _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_6__["MoveService"] }, { type: _app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_7__["RotateService"] }, { type: _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"] }, { type: _magnetism_service__WEBPACK_IMPORTED_MODULE_9__["MagnetismService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "6MVv":
/*!*******************************************************************************!*\
  !*** ./src/app/services/tools/selection-services/circle-selection.service.ts ***!
  \*******************************************************************************/
/*! exports provided: CircleSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleSelectionService", function() { return CircleSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/clipboard/clipboard.service */ "l+p6");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/tools/circle.service */ "0+1q");
/* harmony import */ var _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/tools/transformation-services/move.service */ "Uu7x");
/* harmony import */ var _app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/tools/transformation-services/rotate.service */ "88n9");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var _magnetism_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./magnetism.service */ "BemE");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection.service */ "a4AR");



















class CircleSelectionService extends _selection_service__WEBPACK_IMPORTED_MODULE_10__["SelectionService"] {
    constructor(drawingService, circleService, moveService, rotateService, clipboardService, magnetismService, undoRedoStackService) {
        super(drawingService, moveService, rotateService, clipboardService, magnetismService, undoRedoStackService);
        this.circleService = circleService;
        this.moveService = moveService;
        this.rotateService = rotateService;
        this.clipboardService = clipboardService;
        this.magnetismService = magnetismService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_2__["TOOL_NAMES"].CIRCLE_SELECTION_TOOL_NAME;
        super.underlyingService = circleService;
        this.selectionType = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["SelectionType"].CIRCLE;
    }
    setSelectionData() {
        this.selectionImage.width = this.selection.width;
        this.selectionImage.height = this.selection.height;
        const selectionImageCtx = this.selectionImage.getContext('2d');
        selectionImageCtx.beginPath();
        selectionImageCtx.ellipse(this.selection.width / 2, this.selection.height / 2, this.selection.width / 2, this.selection.height / 2, 0, 0, Math.PI * 2);
        selectionImageCtx.clip();
        selectionImageCtx.closePath();
        selectionImageCtx.drawImage(this.drawingService.canvas, this.selection.startingPoint.x, this.selection.startingPoint.y, this.selection.width, this.selection.height, 0, 0, this.selection.width, this.selection.height);
        this.moveService.initialize(this.selection, this.selectionImage);
        this.rotateService.initialize(this.selection, this.selectionImage);
    }
    setMagnetismAlignment(alignment) {
        this.currentAlignment = alignment;
    }
    strokeSelection() {
        if (this.selection.height !== 0 && this.selection.width !== 0) {
            this.drawingService.previewCtx.beginPath();
            this.drawingService.previewCtx.save();
            this.rotateService.rotatePreviewCanvas();
            this.drawingService.previewCtx.ellipse(this.selection.startingPoint.x + this.selection.width / 2, this.selection.startingPoint.y + this.selection.height / 2, this.selection.width / 2, this.selection.height / 2, 0, 0, Math.PI * 2);
            this.drawingService.previewCtx.strokeRect(this.moveService.selection.startingPoint.x, this.moveService.selection.startingPoint.y, this.selection.width, this.selection.height);
            this.drawingService.previewCtx.restore();
            this.drawingService.previewCtx.stroke();
        }
        this.drawingService.autoSave();
    }
}
CircleSelectionService.ɵfac = function CircleSelectionService_Factory(t) { return new (t || CircleSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_5__["CircleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_6__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_7__["RotateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_magnetism_service__WEBPACK_IMPORTED_MODULE_9__["MagnetismService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoStackService"])); };
CircleSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CircleSelectionService, factory: CircleSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_5__["CircleService"] }, { type: _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_6__["MoveService"] }, { type: _app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_7__["RotateService"] }, { type: _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"] }, { type: _magnetism_service__WEBPACK_IMPORTED_MODULE_9__["MagnetismService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "6SIj":
/*!****************************************************************!*\
  !*** ./src/app/ressources/global-variables/alignment-names.ts ***!
  \****************************************************************/
/*! exports provided: ALIGNMENT_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGNMENT_NAMES", function() { return ALIGNMENT_NAMES; });
const ALIGNMENT_NAMES = {
    ALIGN_TOP_LEFT_NAME: 'Haut-Gauche',
    ALIGN_TOP_RIGHT_NAME: 'Haut-Centre',
    ALIGN_TOP_CENTER_NAME: 'Haut-Droite',
    ALIGN_CENTER_LEFT_NAME: 'Centre-Gauche',
    ALIGN_CENTER_RIGHT_NAME: 'Centre-Droite',
    ALIGN_CENTER_NAME: 'Milieu',
    ALIGN_BOTTOM_LEFT_NAME: 'Bas-Gauche',
    ALIGN_BOTTOM_CENTER_NAME: 'Bas-Centre',
    ALIGN_BOTTOM_RIGHT_NAME: 'Bas-Droite',
};


/***/ }),

/***/ "7kIh":
/*!************************************************!*\
  !*** ./src/app/services/tools/line.service.ts ***!
  \************************************************/
/*! exports provided: LineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineService", function() { return LineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_math_trigonometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/math/trigonometry */ "tW64");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");












class LineService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.drawingService = drawingService;
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.trigonometry = new _app_classes_math_trigonometry__WEBPACK_IMPORTED_MODULE_1__["Trigonometry"]();
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAMES"].LINE_TOOL_NAME;
        this.shiftClick = { x: 0, y: 0 };
        this.isShiftKeyDown = false;
        this.isDrawing = false;
        this.numberOfClicks = 0;
        this.lineData = {
            type: 'line',
            lineWidth: 1,
            lineCap: 'round',
            primaryColor: this.colorSelectionService.primaryColor,
            secondaryColor: this.colorSelectionService.secondaryColor,
            mouseClicks: [],
            storedLines: [],
            isDot: false,
            line: { startingPoint: { x: 0, y: 0 }, endingPoint: { x: 0, y: 0 } },
            isShiftDoubleClick: false,
            hasLastPointBeenChanged: false,
            dotWidth: 1,
        };
    }
    changeLineWidth(newWidth) {
        this.lineData.lineWidth = newWidth;
    }
    changeJunction(isDot) {
        this.lineData.isDot = isDot;
    }
    changeDotWidth(newWidth) {
        this.lineData.dotWidth = newWidth;
    }
    onMouseDown(event) {
        this.undoRedoStackService.setIsToolInUse(true);
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        if (event.button !== _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MouseButton"].LEFT) {
            return;
        }
        this.isDrawing = true;
        this.lineData.mouseClicks.push(this.getPositionFromMouse(event));
        this.numberOfClicks = this.lineData.mouseClicks.length;
        // Check if it's a new line
        if (this.numberOfClicks <= 1) {
            return;
        }
        // Check if it's a double click holding shift
        if (this.getPositionFromMouse(event).x === this.shiftClick.x && this.getPositionFromMouse(event).y === this.shiftClick.y) {
            this.lineData.isShiftDoubleClick = true;
        }
        this.shiftClick = this.getPositionFromMouse(event);
        // Check if it is a double click
        const isDoubleClick = this.checkIfDoubleClick();
        if (isDoubleClick || this.lineData.isShiftDoubleClick) {
            this.isDrawing = false;
            // Handle case when user double click when there is no line
            if (this.lineData.mouseClicks[0].x === this.lineData.mouseClicks[1].x &&
                this.lineData.mouseClicks[0].y === this.lineData.mouseClicks[1].y) {
                this.lineData.mouseClicks = [];
                this.numberOfClicks = 0;
                return;
            }
            // Check if the last point is 20px away from initial point
            const distance = this.trigonometry.distanceBetweenTwoDots(this.lineData.mouseClicks[0], this.lineData.mouseClicks[this.numberOfClicks - 2]);
            if (distance < this.trigonometry.MAX_DISTANCE_BETWEEN_TWO_DOTS) {
                // Replace the ending point received from the click coordinates with the inital point of the line
                this.lineData.mouseClicks[this.lineData.mouseClicks.length - 1] = this.lineData.mouseClicks[0];
                this.lineData.storedLines[this.lineData.storedLines.length - 1].endingPoint = this.lineData.mouseClicks[0];
                this.lineData.hasLastPointBeenChanged = true;
            }
            // Draw line on base canvas
            this.lineData.primaryColor = this.colorSelectionService.primaryColor;
            this.lineData.secondaryColor = this.colorSelectionService.secondaryColor;
            this.drawFullLine(this.drawingService.baseCtx, this.lineData);
            this.undoRedoStackService.updateStack(this.lineData);
            this.lineData.hasLastPointBeenChanged = false;
            // Clear the preview canvas, the stored clicks and the stored lines used for previewing
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.lineData.storedLines = [];
            this.lineData.mouseClicks = [];
            this.lineData.isShiftDoubleClick = false;
            this.undoRedoStackService.setIsToolInUse(false);
            return;
        }
        this.drawSegment();
        this.drawingService.autoSave();
    }
    drawSegment() {
        if (!this.isDrawing) {
            return;
        }
        this.lineData.line = {
            startingPoint: this.lineData.mouseClicks[this.numberOfClicks - 2],
            endingPoint: this.endingClickCoordinates,
        };
        this.drawLine(this.lineData.line.startingPoint, this.lineData.line.endingPoint, this.drawingService.previewCtx, this.lineData.lineWidth);
        if (this.lineData.isDot) {
            this.drawDots(this.lineData.dotWidth, this.drawingService.previewCtx);
        }
        this.lineData.storedLines.push(this.lineData.line);
        this.lineData.mouseClicks[this.lineData.mouseClicks.length - 1] = this.endingClickCoordinates;
    }
    onMouseMove(event) {
        this.mouseEvent = event;
        if (!this.isDrawing)
            return;
        // Clear the old line segment preview
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        // Restore previous line segments
        this.lineData.storedLines.forEach((line) => {
            this.drawLine(line.startingPoint, line.endingPoint, this.drawingService.previewCtx, this.lineData.lineWidth);
        });
        if (this.lineData.isDot) {
            this.drawDots(this.lineData.dotWidth, this.drawingService.previewCtx);
        }
        if (this.isShiftKeyDown) {
            // Handle angles (set a different ending coordinates depending on mouse position)
            this.adjustLineAngle(this.getPositionFromMouse(event));
        }
        else {
            // Get new coordinates for end of line
            this.endingClickCoordinates = this.getPositionFromMouse(event);
        }
        this.drawLine(this.lineData.mouseClicks[this.numberOfClicks - 1], this.endingClickCoordinates, this.drawingService.previewCtx, this.lineData.lineWidth);
    }
    checkIfDoubleClick() {
        const previousClickX = this.lineData.mouseClicks[this.numberOfClicks - 2].x;
        const previousClickY = this.lineData.mouseClicks[this.numberOfClicks - 2].y;
        const currentClickX = this.lineData.mouseClicks[this.numberOfClicks - 1].x;
        const currentClickY = this.lineData.mouseClicks[this.numberOfClicks - 1].y;
        if (previousClickX === currentClickX && previousClickY === currentClickY) {
            return true;
        }
        return false;
    }
    onKeyDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        if (event.key === 'Shift') {
            this.isShiftKeyDown = true;
            this.onMouseMove(this.mouseEvent);
        }
    }
    onKeyUp(event) {
        switch (event.key) {
            case 'Shift': {
                this.isShiftKeyDown = false;
                this.onMouseMove(this.mouseEvent);
                break;
            }
            case 'Backspace': {
                if (this.numberOfClicks > 1) {
                    this.deleteLastSegment();
                }
                break;
            }
            case 'Escape': {
                this.deleteLine();
                break;
            }
        }
    }
    deleteLastSegment() {
        this.lineData.storedLines.pop();
        this.lineData.mouseClicks.pop();
        --this.numberOfClicks;
        // Clear the old line segment preview
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        // Restore previous line segments
        this.lineData.storedLines.forEach((line) => {
            this.drawLine(line.startingPoint, line.endingPoint, this.drawingService.previewCtx, this.lineData.lineWidth);
        });
        // Draw the new line preview
        this.drawLine(this.lineData.mouseClicks[this.numberOfClicks - 1], this.endingClickCoordinates, this.drawingService.previewCtx, this.lineData.lineWidth);
        if (this.lineData.isDot) {
            this.drawDots(this.lineData.dotWidth, this.drawingService.previewCtx);
        }
    }
    deleteLine() {
        this.lineData.storedLines = [];
        this.lineData.mouseClicks = [];
        this.numberOfClicks = 0;
        this.isDrawing = false;
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
    }
    adjustLineAngle(mouseCoordinates) {
        let opposite;
        let adjacent;
        let hypothenuse;
        let angleDegree;
        let angleRadians;
        let quadrant;
        let lineAngle;
        adjacent = mouseCoordinates.x - this.lineData.mouseClicks[this.lineData.mouseClicks.length - 1].x;
        opposite = this.lineData.mouseClicks[this.lineData.mouseClicks.length - 1].y - mouseCoordinates.y;
        hypothenuse = Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
        quadrant = this.trigonometry.findCursorQuadrant(adjacent, opposite);
        adjacent = Math.abs(adjacent);
        opposite = Math.abs(opposite);
        if (!hypothenuse) {
            hypothenuse = 1;
        }
        angleRadians = Math.asin(opposite / hypothenuse);
        angleDegree = this.trigonometry.radiansToDegrees(angleRadians);
        lineAngle = this.trigonometry.findClosestAngle(quadrant, angleDegree);
        this.endingClickCoordinates = this.trigonometry.adjustEndingPoint(lineAngle, mouseCoordinates, adjacent, this.lineData.mouseClicks);
    }
    drawLine(startingPoint, endingPoint, ctx, lineWidth) {
        ctx.strokeStyle = this.colorSelectionService.primaryColor;
        ctx.lineCap = 'round';
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(startingPoint.x, startingPoint.y);
        ctx.lineTo(endingPoint.x, endingPoint.y);
        ctx.stroke();
    }
    drawDots(width, ctx) {
        let lastDot = this.lineData.mouseClicks.length;
        if (ctx === this.drawingService.baseCtx) {
            lastDot--;
            this.lineData.mouseClicks[this.lineData.mouseClicks.length - 2] = this.lineData.mouseClicks[this.lineData.mouseClicks.length - 1];
            this.lineData.mouseClicks.pop();
            if (this.lineData.isShiftDoubleClick) {
                this.lineData.mouseClicks[this.lineData.mouseClicks.length - 1] = this.lineData.storedLines[this.lineData.storedLines.length - 1].endingPoint;
            }
        }
        for (let i = 0; i < lastDot; i++) {
            ctx.lineWidth = 1;
            ctx.strokeStyle = this.colorSelectionService.secondaryColor;
            ctx.fillStyle = this.colorSelectionService.secondaryColor;
            ctx.beginPath();
            ctx.arc(this.lineData.mouseClicks[i].x, this.lineData.mouseClicks[i].y, width / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
    drawFullLine(ctx, line) {
        line.storedLines.forEach((element) => {
            ctx.strokeStyle = line.primaryColor;
            ctx.lineCap = 'round';
            ctx.lineWidth = line.lineWidth;
            ctx.beginPath();
            ctx.moveTo(element.startingPoint.x, element.startingPoint.y);
            ctx.lineTo(element.endingPoint.x, element.endingPoint.y);
            ctx.stroke();
        });
        if (line.isDot) {
            const LAST_DOT = line.mouseClicks.length;
            let doubleClickPoint;
            // Remove the double click that doesnt need to be drawed on the canvas
            if (line.hasLastPointBeenChanged) {
                line.mouseClicks[line.mouseClicks.length - 2] = line.mouseClicks[line.mouseClicks.length - 1];
                doubleClickPoint = line.mouseClicks.pop();
            }
            // If it's a double click holding shift adjust ending dot
            if (line.isShiftDoubleClick) {
                line.mouseClicks[line.mouseClicks.length - 1] = line.storedLines[line.storedLines.length - 1].endingPoint;
            }
            for (let i = 0; i < LAST_DOT - 1; i++) {
                ctx.lineWidth = 1;
                ctx.strokeStyle = line.secondaryColor;
                ctx.fillStyle = line.secondaryColor;
                ctx.beginPath();
                ctx.arc(line.mouseClicks[i].x, line.mouseClicks[i].y, line.dotWidth / 2, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }
            if (line.hasLastPointBeenChanged) {
                line.mouseClicks.push(doubleClickPoint);
            }
        }
    }
}
LineService.ɵfac = function LineService_Factory(t) { return new (t || LineService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__["UndoRedoStackService"])); };
LineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LineService, factory: LineService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "88n9":
/*!**************************************************************************!*\
  !*** ./src/app/services/tools/transformation-services/rotate.service.ts ***!
  \**************************************************************************/
/*! exports provided: RotateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateService", function() { return RotateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");





class RotateService {
    constructor(drawingService) {
        this.drawingService = drawingService;
        this.initialSelection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.selectionImage = document.createElement('canvas');
        this.angle = 0;
        this.isRotationOver = true;
        this.isAltKeyDown = false;
        this.mouseWheel = false;
        this.deltaRotation = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["ROTATION_STEP"];
    }
    initialize(selection, selectionImage) {
        this.initialSelection.startingPoint.x = selection.startingPoint.x;
        this.initialSelection.startingPoint.y = selection.startingPoint.y;
        this.initialSelection.height = selection.height;
        this.initialSelection.width = selection.width;
        this.selection = selection;
        this.selectionImage = selectionImage;
        this.selectionImageCtx = selectionImage.getContext('2d');
    }
    changeAngle(angle) {
        this.angle = angle;
    }
    onWheelEvent(event) {
        this.mouseWheel = true;
        this.isRotationOver = false;
        const centerX = this.calculateCenter().x;
        const centerY = this.calculateCenter().y;
        this.setAngleRotation(event);
        this.drawOnPreviewCanvas();
        this.rotateSelectedCanvas(this.selectionImageCtx, centerX, centerY);
    }
    setAngleRotation(event) {
        if (Math.abs(this.angle) >= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_ANGLE"]) {
            this.angle = 0;
        }
        const newAngle = this.angle + (event.deltaY / Math.abs(event.deltaY)) * this.deltaRotation;
        this.changeAngle(newAngle);
    }
    rotateSelectedCanvas(ctx, centerX, centerY) {
        ctx.translate(centerX, centerY);
        ctx.rotate(this.angle * (Math.PI / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["ANGLE_HALF_TURN"]));
        ctx.translate(-centerX, -centerY);
    }
    calculateCenter() {
        const centerX = this.selection.startingPoint.x + this.selection.width / 2;
        const centerY = this.selection.startingPoint.y + this.selection.height / 2;
        const centerSelection = { x: centerX, y: centerY };
        return centerSelection;
    }
    rotatePreviewCanvas() {
        const centerX = this.calculateCenter().x;
        const centerY = this.calculateCenter().y;
        this.drawingService.previewCtx.translate(centerX, centerY);
        this.drawingService.previewCtx.rotate(this.angle * (Math.PI / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["ANGLE_HALF_TURN"]));
        this.drawingService.previewCtx.translate(-centerX, -centerY);
    }
    drawOnPreviewCanvas() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.clearSelectionBackground();
        this.drawingService.previewCtx.save();
        this.rotatePreviewCanvas();
        this.drawingService.previewCtx.drawImage(this.selectionImage, this.selection.startingPoint.x, this.selection.startingPoint.y);
        this.drawingService.previewCtx.restore();
    }
    clearSelectionBackground() {
        const currentFillStyle = this.drawingService.previewCtx.fillStyle;
        this.drawingService.previewCtx.fillStyle = 'white';
        this.drawingService.previewCtx.fillRect(this.initialSelection.startingPoint.x, this.initialSelection.startingPoint.y, this.initialSelection.width, this.initialSelection.height);
        this.drawingService.previewCtx.globalCompositeOperation = 'destination-in';
        this.drawingService.previewCtx.drawImage(this.selectionImage, this.initialSelection.startingPoint.x, this.initialSelection.startingPoint.y);
        this.drawingService.previewCtx.globalCompositeOperation = 'source-over';
        this.drawingService.previewCtx.fillStyle = currentFillStyle;
    }
    restoreSelection() {
        this.drawOnPreviewCanvas();
        this.isRotationOver = true;
        this.angle = 0;
    }
    onKeyDown(event) {
        if (event.key === 'Alt' && !this.isAltKeyDown) {
            event.preventDefault();
            this.isAltKeyDown = true;
            this.deltaRotation = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["ROTATION_STEP_ALT"];
        }
    }
    onKeyUp(event) {
        if (this.isAltKeyDown && event.key === 'Alt') {
            this.isAltKeyDown = false;
            this.deltaRotation = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["ROTATION_STEP"];
        }
    }
}
RotateService.ɵfac = function RotateService_Factory(t) { return new (t || RotateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"])); };
RotateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RotateService, factory: RotateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RotateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "Aplx":
/*!***********************************************!*\
  !*** ../common/communication/drawing-data.ts ***!
  \***********************************************/
/*! exports provided: ID_NAME, NAME, TAGS_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID_NAME", function() { return ID_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_NAME", function() { return TAGS_NAME; });
const ID_NAME = 'id';
const NAME = 'name';
const TAGS_NAME = 'tags';


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BA1N":
/*!*************************************************************!*\
  !*** ./src/app/services/new-drawing/new-drawing.service.ts ***!
  \*************************************************************/
/*! exports provided: NewDrawingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDrawingService", function() { return NewDrawingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_components_new_drawing_modal_new_drawing_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/new-drawing-modal/new-drawing-modal.component */ "MmXv");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");







class NewDrawingService {
    constructor(drawingService, dialog) {
        this.drawingService = drawingService;
        this.dialog = dialog;
    }
    openWarningModal() {
        if (!this.drawingService.isCanvasBlank(this.drawingService.baseCtx)) {
            this.dialog.open(_app_components_new_drawing_modal_new_drawing_modal_component__WEBPACK_IMPORTED_MODULE_2__["NewDrawingModalComponent"]);
        }
    }
}
NewDrawingService.ɵfac = function NewDrawingService_Factory(t) { return new (t || NewDrawingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
NewDrawingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewDrawingService, factory: NewDrawingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewDrawingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "BUhm":
/*!*************************************************************************!*\
  !*** ./src/app/ressources/global-variables/sidebar-element-tooltips.ts ***!
  \*************************************************************************/
/*! exports provided: SIDEBAR_ELEMENT_TOOLTIPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_ELEMENT_TOOLTIPS", function() { return SIDEBAR_ELEMENT_TOOLTIPS; });
const SIDEBAR_ELEMENT_TOOLTIPS = {
    MAGIC_WAND_DESCRIPTION: 'Baguette magique (V)',
    CAROUSEL_DESCRIPTION: 'Carroussel de dessin (Ctrl + G)',
    NEW_DRAWING_DESCRIPTION: 'Nouveau Dessin (Ctrl + O)',
    PENCIL_TOOL_DESCRIPTION: 'Crayon (C)',
    PEN_TOOL_DESCRIPTION: 'Plume (P)',
    BRUSH_TOOL_DESCRIPTION: 'Pinceau (W)',
    SPRAY_TOOL_DESCRIPTION: 'Aérosol (A)',
    SQUARE_TOOL_DESCRIPTION: 'Rectangle (1)',
    CIRCLE_TOOL_DESCRIPTION: 'Ellipse (2)',
    LINE_TOOL_DESCRIPTION: 'Ligne (L)',
    FILL_TOOL_DESCRIPTION: 'Sceau (B)',
    ERASER_TOOL_DESCRIPTION: 'Efface (E)',
    TEXT_TOOL_DESCRIPTION: 'Texte (T)',
    PIPETTE_TOOL_DESCRIPTION: 'Pipette (I)',
    POLYGON_TOOL_DESCRIPTION: 'Polygone (3)',
    STAMP_TOOL_DESCRIPTION: 'Étampe (D)',
    CIRCLE_SELECTION_TOOL_NAME: 'Sélection par ellipse (S)',
    SQUARE_SELECTION_TOOL_NAME: 'Sélection par rectangle (R)',
    HELP_DESCRIPTION: "Guide d'utilisation",
    UNDO_DESCRIPTION: 'Annuler (Ctrl + Z)',
    REDO_DESCRIPTION: 'Refaire (Ctrl + Shift + Z)',
    SAVE_DRAWING_DESCRIPTION: 'Sauvegarder dessin (Ctrl + S)',
    EXPORT_DRAWING_DESCRIPTION: 'Exporter dessin (Ctrl + E)',
    SELECT_ALL_DESCRIPTION: 'Tout sélectionner (Ctrl + A)',
    SEND_DESCRIPTION: 'Envoyer un dessin',
    CUT_DESCRIPTION: 'Couper la sélection (Ctrl + X)',
    COPY_DESCRIPTION: 'Copier la sélection (Ctrl + C)',
    PASTE_DESCRIPTION: 'Coller la sélection (Ctrl + V)',
};


/***/ }),

/***/ "BemE":
/*!************************************************************************!*\
  !*** ./src/app/services/tools/selection-services/magnetism.service.ts ***!
  \************************************************************************/
/*! exports provided: MagnetismService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnetismService", function() { return MagnetismService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_alignment_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/alignment-names */ "6SIj");
/* harmony import */ var _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/tools/transformation-services/move.service */ "Uu7x");





class MagnetismService {
    constructor(moveService) {
        this.moveService = moveService;
        this.alignmentNames = _app_ressources_global_variables_alignment_names__WEBPACK_IMPORTED_MODULE_1__["ALIGNMENT_NAMES"];
    }
    magnetismCoordinateReference(alignement, selection) {
        switch (alignement) {
            case this.alignmentNames.ALIGN_TOP_CENTER_NAME: {
                return { x: selection.startingPoint.x + selection.width / 2, y: selection.startingPoint.y };
            }
            case this.alignmentNames.ALIGN_TOP_RIGHT_NAME: {
                return { x: selection.startingPoint.x + selection.width, y: selection.startingPoint.y };
            }
            case this.alignmentNames.ALIGN_CENTER_LEFT_NAME: {
                return { x: selection.startingPoint.x, y: selection.startingPoint.y + selection.height / 2 };
            }
            case this.alignmentNames.ALIGN_CENTER_RIGHT_NAME: {
                return { x: selection.startingPoint.x + selection.width, y: selection.startingPoint.y + selection.height / 2 };
            }
            case this.alignmentNames.ALIGN_CENTER_NAME: {
                return {
                    x: selection.startingPoint.x + selection.width / 2,
                    y: selection.startingPoint.y + selection.height / 2,
                };
            }
            case this.alignmentNames.ALIGN_BOTTOM_LEFT_NAME: {
                return { x: selection.startingPoint.x, y: selection.startingPoint.y + selection.height };
            }
            case this.alignmentNames.ALIGN_BOTTOM_CENTER_NAME: {
                return { x: selection.startingPoint.x + selection.width / 2, y: selection.startingPoint.y + selection.height };
            }
            case this.alignmentNames.ALIGN_BOTTOM_RIGHT_NAME: {
                return { x: selection.startingPoint.x + selection.width, y: selection.startingPoint.y + selection.height };
            }
            default: {
                return { x: selection.startingPoint.x, y: selection.startingPoint.y };
            }
        }
    }
    magnetismXAxisChange(mousePosDifferenceX, gridInfo, selection) {
        const startingCoordRefX = this.magnetismCoordinateReference(gridInfo.ALIGNMENT, selection).x;
        const coordToSnapX = startingCoordRefX + mousePosDifferenceX;
        const lowestXDistance = coordToSnapX % gridInfo.SQUARE_SIZE;
        if (lowestXDistance > gridInfo.SQUARE_SIZE / 2) {
            mousePosDifferenceX = mousePosDifferenceX + gridInfo.SQUARE_SIZE;
        }
        const changeX = mousePosDifferenceX - lowestXDistance;
        return changeX;
    }
    magnetismYAxisChange(mousePosDifferenceY, gridInfo, selection) {
        const startingCoordRefY = this.magnetismCoordinateReference(gridInfo.ALIGNMENT, selection).y;
        const coordToSnapY = startingCoordRefY + mousePosDifferenceY;
        const lowestYDistance = coordToSnapY % gridInfo.SQUARE_SIZE;
        if (lowestYDistance > gridInfo.SQUARE_SIZE / 2) {
            mousePosDifferenceY = mousePosDifferenceY + gridInfo.SQUARE_SIZE;
        }
        const changeY = mousePosDifferenceY - lowestYDistance;
        return changeY;
    }
    onMouseMoveMagnetism(changeX, changeY) {
        this.moveService.onMouseMove(changeX, changeY);
    }
}
MagnetismService.ɵfac = function MagnetismService_Factory(t) { return new (t || MagnetismService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_2__["MoveService"])); };
MagnetismService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MagnetismService, factory: MagnetismService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagnetismService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_2__["MoveService"] }]; }, null); })();


/***/ }),

/***/ "CUwC":
/*!*******************************************************************!*\
  !*** ./src/app/components/color-picker/color-picker.component.ts ***!
  \*******************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/rgba */ "4IQm");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/tools/pipette.service */ "2Npv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = ["primary"];
const _c1 = ["secondary"];
const _c2 = function (a0) { return { "background-color": a0 }; };
function ColorPickerComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const color_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.restorePreviousColor(color_r3, true); })("contextmenu", function ColorPickerComponent_button_33_Template_button_contextmenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const color_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.restorePreviousColor(color_r3, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, color_r3));
} }
class ColorPickerComponent {
    constructor(colorSelectionService, hotkeyService, pipetteService) {
        this.colorSelectionService = colorSelectionService;
        this.hotkeyService = hotkeyService;
        this.pipetteService = pipetteService;
        this.primaryColor = '#000000';
        this.secondaryColor = '#000000';
        this.colors = ['#000000'];
        this.primaryOpacity = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"];
        this.secondaryOpacity = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"];
        this.colorSelectionService.primaryColor = this.hexToRGBA(this.primaryColor, this.primaryOpacity);
        this.colorSelectionService.secondaryColor = this.hexToRGBA(this.secondaryColor, this.secondaryOpacity);
    }
    onInput(e) {
        e.stopPropagation();
    }
    changePrimaryColor(color) {
        this.primaryColor = color;
        this.colors.unshift(this.primaryColor);
        if (this.colors.length > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAXIMUM_NUMBER_OF_COLORS"]) {
            this.colors.pop();
        }
        this.colorSelectionService.primaryColor = this.hexToRGBA(color, this.primaryOpacity);
    }
    changeSecondaryColor(color) {
        this.secondaryColor = color;
        this.colors.unshift(this.secondaryColor);
        if (this.colors.length > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAXIMUM_NUMBER_OF_COLORS"]) {
            this.colors.pop();
        }
        this.colorSelectionService.secondaryColor = this.hexToRGBA(color, this.secondaryOpacity);
    }
    swapColors() {
        const temp = this.primaryColor;
        this.primaryColor = this.secondaryColor;
        this.secondaryColor = temp;
        this.colorSelectionService.primaryColor = this.hexToRGBA(this.primaryColor, this.primaryOpacity);
        this.colorSelectionService.secondaryColor = this.hexToRGBA(this.secondaryColor, this.secondaryOpacity);
    }
    decrementPrimaryOpacity() {
        if (this.primaryOpacity > 0) {
            --this.primaryOpacity;
        }
        this.colorSelectionService.primaryColor = this.hexToRGBA(this.primaryColor, this.primaryOpacity);
    }
    incrementPrimaryOpacity() {
        if (this.primaryOpacity < _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"]) {
            ++this.primaryOpacity;
        }
        this.colorSelectionService.primaryColor = this.hexToRGBA(this.primaryColor, this.primaryOpacity);
    }
    decrementSecondaryOpacity() {
        if (this.secondaryOpacity > 0) {
            --this.secondaryOpacity;
        }
        this.colorSelectionService.secondaryColor = this.hexToRGBA(this.secondaryColor, this.secondaryOpacity);
    }
    incrementSecondaryOpacity() {
        if (this.secondaryOpacity < _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"]) {
            ++this.secondaryOpacity;
        }
        this.colorSelectionService.secondaryColor = this.hexToRGBA(this.secondaryColor, this.secondaryOpacity);
    }
    changePrimaryOpacity(opacity, event) {
        event.stopPropagation();
        if (isNaN(opacity) || opacity < 0 || opacity > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"] || opacity.toString() === '') {
            this.primaryOpacity = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"];
            this.colorSelectionService.primaryColor = this.hexToRGBA(this.primaryColor, this.primaryOpacity);
            alert("L'opacité doit être un nombre entre 0 et 100.");
        }
        else {
            this.primaryOpacity = opacity;
            this.colorSelectionService.primaryColor = this.hexToRGBA(this.primaryColor, this.primaryOpacity);
        }
    }
    changeSecondaryOpacity(opacity, event) {
        event.stopPropagation();
        if (isNaN(opacity) || opacity < 0 || opacity > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"] || opacity.toString() === '') {
            this.secondaryOpacity = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"];
            alert("L'opacité doit être un nombre entre 0 et 100.");
        }
        else {
            this.secondaryOpacity = opacity;
        }
        this.colorSelectionService.secondaryColor = this.hexToRGBA(this.secondaryColor, this.secondaryOpacity);
    }
    restorePreviousColor(color, isPrimary) {
        if (isPrimary) {
            this.primaryColor = color;
            this.colorSelectionService.primaryColor = this.hexToRGBA(color, this.primaryOpacity);
        }
        else {
            this.secondaryColor = color;
            this.colorSelectionService.secondaryColor = this.hexToRGBA(color, this.secondaryOpacity);
        }
    }
    hexToRGBA(color, opacity) {
        const SLICING_END = 16;
        const SLICING_START_R_1 = -6;
        const SLICING_START_R_2 = -4;
        const SLICING_START_G_1 = -4;
        const SLICING_START_G_2 = -2;
        const SLICING_START_B = -2;
        const r = parseInt(color.slice(SLICING_START_R_1, SLICING_START_R_2), SLICING_END);
        const g = parseInt(color.slice(SLICING_START_G_1, SLICING_START_G_2), SLICING_END);
        const b = parseInt(color.slice(SLICING_START_B), SLICING_END);
        const rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + (opacity / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"]).toString() + ')';
        return rgba;
    }
    ngAfterViewInit() {
        this.pipetteService.primaryColor.subscribe((data) => {
            this.changePrimaryColor(data[0]);
            this.primaryOpacity = Math.round((Number(data[1]) / _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["MAXIMUM_RGBA_VALUE"]) * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"]);
            const primary = this.primaryColorElement.nativeElement;
            primary.value = data[0];
        });
        this.pipetteService.secondaryColor.subscribe((data) => {
            this.changeSecondaryColor(data[0]);
            this.secondaryOpacity = Math.round((Number(data[1]) / _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["MAXIMUM_RGBA_VALUE"]) * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_OPACITY"]);
            const secondary = this.secondaryColorElement.nativeElement;
            secondary.value = data[0];
        });
    }
    onFocus() {
        this.hotkeyService.isHotkeyEnabled = false;
    }
    onFocusOut() {
        this.hotkeyService.isHotkeyEnabled = true;
    }
}
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_3__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_5__["PipetteService"])); };
ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPickerComponent, selectors: [["app-color-picker"]], viewQuery: function ColorPickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.primaryColorElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.secondaryColorElement = _t.first);
    } }, hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ColorPickerComponent_keyup_HostBindingHandler($event) { return ctx.onInput($event); });
    } }, decls: 34, vars: 8, consts: [[1, "color-picker"], [1, "color-selection-container"], [1, "choice-container"], ["id", "primary", "type", "color", 1, "color-input", 3, "value", "change"], ["primary", ""], ["id", "sliderDetails"], [1, "grid-element", 3, "click"], ["id", "primary-opacity", "type", "text", 1, "opacity-input", "grid-element", 3, "ngModel", "min", "max", "change", "ngModelChange", "focus", "focusout"], ["id", "secondary", "type", "color", 1, "color-input", 3, "value", "change"], ["secondary", ""], ["id", "secondary-opacity", "type", "text", "max", "100", 1, "opacity-input", "grid-element", 3, "ngModel", "min", "change", "ngModelChange", "focus", "focusout"], ["id", "swap-button", 3, "click"], [1, "previous-color"], ["class", "color", 3, "ngStyle", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "color", 3, "ngStyle", "click", "contextmenu"]], template: function ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Couleur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Couleur principale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ColorPickerComponent_Template_input_change_8_listener($event) { return ctx.changePrimaryColor($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_button_click_11_listener() { return ctx.decrementPrimaryOpacity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ColorPickerComponent_Template_input_change_13_listener($event) { return ctx.changePrimaryOpacity($event.target.value, $event); })("ngModelChange", function ColorPickerComponent_Template_input_ngModelChange_13_listener($event) { return ctx.primaryOpacity = $event; })("focus", function ColorPickerComponent_Template_input_focus_13_listener() { return ctx.onFocus(); })("focusout", function ColorPickerComponent_Template_input_focusout_13_listener() { return ctx.onFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_button_click_14_listener() { return ctx.incrementPrimaryOpacity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Couleur secondaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ColorPickerComponent_Template_input_change_19_listener($event) { return ctx.changeSecondaryColor($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_button_click_22_listener() { return ctx.decrementSecondaryOpacity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ColorPickerComponent_Template_input_change_24_listener($event) { return ctx.changeSecondaryOpacity($event.target.value, $event); })("ngModelChange", function ColorPickerComponent_Template_input_ngModelChange_24_listener($event) { return ctx.secondaryOpacity = $event; })("focus", function ColorPickerComponent_Template_input_focus_24_listener() { return ctx.onFocus(); })("focusout", function ColorPickerComponent_Template_input_focusout_24_listener() { return ctx.onFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_button_click_25_listener() { return ctx.incrementSecondaryOpacity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_mat_icon_click_27_listener() { return ctx.swapColors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "swap_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "R\u00E9cemment utilis\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ColorPickerComponent_button_33_Template, 1, 3, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.primaryColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.primaryOpacity)("min", 0)("max", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.secondaryColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondaryOpacity)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"]], styles: [".color-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  font-size: 12px;\n  padding: 0 5px 0 5px;\n}\n\n.color-selection-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.choice-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n\n.color-input[_ngcontent-%COMP%] {\n  margin: 0 10;\n  width: 30px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 96%;\n  background-color: #cfcfcf;\n  height: 1px;\n  margin-top: 10px;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 5px 5px 0px 5px;\n  color: black;\n  align-self: center;\n  font-weight: bold;\n}\n\n.opacity-input[_ngcontent-%COMP%] {\n  width: 23px;\n}\n\n.previous-color[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto auto auto;\n}\n\n.color[_ngcontent-%COMP%] {\n  height: 23px;\n  width: 23px;\n  background-color: red;\n  display: grid;\n  margin: 3px;\n  border: none;\n  border-radius: 15%;\n  outline: none;\n  cursor: pointer;\n}\n\n.choice-container[_ngcontent-%COMP%]   .grid-element[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n#sliderDetails[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n\n#swap-button[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  align-self: center;\n  height: 40%;\n  width: 15px;\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsK0NBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXBpY2tlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XG59XG5cbi5jb2xvci1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbn1cblxuLmNob2ljZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG59XG5cbi5jb2xvci1pbnB1dCB7XG4gICAgbWFyZ2luOiAwIDEwO1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5NiU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjZjtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5oNCB7XG4gICAgbWFyZ2luOiA1cHggNXB4IDBweCA1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9wYWNpdHktaW5wdXQge1xuICAgIHdpZHRoOiAyM3B4O1xufVxuXG4ucHJldmlvdXMtY29sb3Ige1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG59XG5cbi5jb2xvciB7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaG9pY2UtY29udGFpbmVyIC5ncmlkLWVsZW1lbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNzbGlkZXJEZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG59XG5cbiNzd2FwLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-picker',
                templateUrl: './color-picker.component.html',
                styleUrls: ['./color-picker.component.scss'],
            }]
    }], function () { return [{ type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_3__["ColorSelectionService"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__["HotkeyService"] }, { type: _app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_5__["PipetteService"] }]; }, { primaryColorElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['primary', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], secondaryColorElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['secondary', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "FQBM":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tools/shared-Attributes/slider/slider.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");




class SliderComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    decrement() {
        if (this.value > this.min) {
            this.value -= this.step;
            this.value = Math.round((this.value + Number.EPSILON) * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["TWO_DECIMAL_MULTIPLIER"]) / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["TWO_DECIMAL_MULTIPLIER"];
        }
        this.changeValue();
    }
    increment() {
        if (this.value < this.max) {
            this.value += this.step;
            this.value = Math.round((this.value + Number.EPSILON) * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["TWO_DECIMAL_MULTIPLIER"]) / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["TWO_DECIMAL_MULTIPLIER"];
        }
        this.changeValue();
    }
    changeValue() {
        this.valueChange.emit(this.value);
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], inputs: { min: "min", max: "max", step: "step", value: "value", title: "title" }, outputs: { valueChange: "valueChange" }, decls: 12, vars: 8, consts: [["id", "slider"], [3, "min", "max", "step", "value", "valueChange", "change"], ["id", "sliderDetails"], ["type", "text", "readonly", "", 3, "value", "min", "max", "valueChange", "change"], [3, "click"], [1, "bottomBorder"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SliderComponent_Template_mat_slider_valueChange_3_listener($event) { return ctx.value = $event; })("change", function SliderComponent_Template_mat_slider_change_3_listener() { return ctx.changeValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SliderComponent_Template_input_valueChange_5_listener($event) { return ctx.value = $event; })("change", function SliderComponent_Template_input_change_5_listener() { return ctx.changeValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_7_listener() { return ctx.decrement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_9_listener() { return ctx.increment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("step", ctx.step)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("min", ctx.min)("max", ctx.max);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSlider"]], styles: ["#slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n\n#sliderDetails[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  width: 80%;\n  justify-content: space-between;\n}\n\n#sliderDetails[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  line-height: 20px;\n}\n\n#sliderDetails[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 26px;\n  line-height: 20px;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  padding-top: 0;\n  height: 30px;\n  bottom: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 10px 0px 0px 0px;\n  font-size: 12px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  cursor: context-menu;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-width: 1px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  text-align: center;\n  outline: n;\n}\n\n.topBorder[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.bottomBorder[_ngcontent-%COMP%] {\n  margin: 1em 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9zaGFyZWQtQXR0cmlidXRlcy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29scy9zaGFyZWQtQXR0cmlidXRlcy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NsaWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NsaWRlckRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNzbGlkZXJEZXRhaWxzIGlucHV0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4jc2xpZGVyRGV0YWlscyBidXR0b24ge1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtc2xpZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBjdXJzb3I6IGNvbnRleHQtbWVudTtcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG47XG59XG5cbi50b3BCb3JkZXIge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJvdHRvbUJvcmRlciB7XG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss'],
            }]
    }], null, { min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "HpQq":
/*!*************************************************************************************!*\
  !*** ./src/app/components/tools/polygon-attributes/polygon-attributes.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PolygonAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonAttributesComponent", function() { return PolygonAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/polygon.service */ "Spv2");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");
/* harmony import */ var _shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-Attributes/fill-types-selection/fill-types-selection.component */ "XRzb");






class PolygonAttributesComponent {
    constructor(polygonService) {
        this.polygonService = polygonService;
        this.toolWidth = polygonService.getWidth();
        this.fillStyle = polygonService.getFillStyle();
        this.numberOfSides = polygonService.getSides();
    }
    changeBorderWidth(newWidth) {
        this.toolWidth = newWidth;
        this.polygonService.changeWidth(newWidth);
    }
    changeFillStyle(newFillStyle) {
        this.polygonService.changeFillStyle(newFillStyle);
    }
    changeNumberOfSides(sides) {
        this.numberOfSides = sides;
        this.polygonService.setSides(sides);
    }
}
PolygonAttributesComponent.ɵfac = function PolygonAttributesComponent_Factory(t) { return new (t || PolygonAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_1__["PolygonService"])); };
PolygonAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolygonAttributesComponent, selectors: [["app-polygon-attributes"]], decls: 7, vars: 10, consts: [["id", "polygonAttributes"], [1, "toolName"], ["title", "\u00C9paisseur Contour", 3, "min", "max", "step", "value", "valueChange"], ["title", "Nombre de points", 3, "min", "max", "step", "value", "valueChange"], [3, "currentFillStyle", "valueChange"]], template: function PolygonAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PolygonAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeBorderWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PolygonAttributesComponent_Template_app_slider_valueChange_5_listener($event) { return ctx.changeNumberOfSides($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-fill-types-selection", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PolygonAttributesComponent_Template_app_fill_types_selection_valueChange_6_listener($event) { return ctx.changeFillStyle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.polygonService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.polygonService.minBorderWidth)("max", ctx.polygonService.maxBorderWidth)("step", 1)("value", ctx.toolWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.polygonService.minNumberOfSides)("max", ctx.polygonService.maxNumberOfSides)("step", 1)("value", ctx.numberOfSides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentFillStyle", ctx.fillStyle);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"], _shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_3__["FillTypesSelectionComponent"]], styles: ["#polygonAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\napp-type-of-fill-selection[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9wb2x5Z29uLWF0dHJpYnV0ZXMvcG9seWdvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29scy9wb2x5Z29uLWF0dHJpYnV0ZXMvcG9seWdvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BvbHlnb25BdHRyaWJ1dGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRvb2xOYW1lIHtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuYXBwLXR5cGUtb2YtZmlsbC1zZWxlY3Rpb24ge1xuICAgIG1hcmdpbjogNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolygonAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-polygon-attributes',
                templateUrl: './polygon-attributes.component.html',
                styleUrls: ['./polygon-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_1__["PolygonService"] }]; }, null); })();


/***/ }),

/***/ "HwfQ":
/*!************************************************************!*\
  !*** ./src/app/ressources/global-variables/fill-styles.ts ***!
  \************************************************************/
/*! exports provided: FILL_STYLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILL_STYLES", function() { return FILL_STYLES; });
const FILL_STYLES = {
    FILL_AND_BORDER: 0,
    FILL: 1,
    BORDER: 2,
    DASHED: 3,
};


/***/ }),

/***/ "Irla":
/*!*****************************************************************!*\
  !*** ./src/app/ressources/global-variables/global-variables.ts ***!
  \*****************************************************************/
/*! exports provided: MINIMUM_CANVAS_WIDTH, MINIMUM_CANVAS_HEIGHT, MINIMUM_WORKSPACE_WIDTH, MINIMUM_WORKSPACE_HEIGHT, ZOOM_RADIUS, HALF_RATIO, TOOLTIP_DELAY, MAXIMUM_DISTANCE_LINE_CONNECTION, DEGREES_180, MAXIMUM_NUMBER_OF_COLORS, MAX_OPACITY, ONE_NEGATIVE_PIXEL, MAX_TOOL_WIDTH, MIN_TOOL_WIDTH, MIN_ERASER_TOOL_WIDTH, MAX_BORDER, MIN_BORDER, DASH_LENGTH, DASH_SPACE_LENGTH, GROWTH_ZOOM_PIPETTE, MIN_TOLERANCE_VALUE, MAX_TOLERANCE_VALUE, MAX_PERCENTAGE, RGBA_STRING_, CONFIRM_SAVED_DURATION, CONFIRM_KEY_PRESS_DURATION, KEY_PRESS_INTERVAL_DURATION, SELECTION_MOVE_STEP_SIZE, LINE_WIDTH_POLYGON_CORRECTION, MIN_GRID_SQUARE_SIZE, MAX_GRID_SQUARE_SIZE, MIN_GRID_OPACITY, MAX_GRID_OPACITY, DEFAULT_GRID_SIZE, GRID_STEP, MAGIC_WAND_BORDER_ONE_SIDE, MAGIC_WAND_BORDER_BOTH_SIDES, MAGIC_WAND_TOLERANCE, MAGIC_WAND_SECONDARY_TOLERANCE, OFFSET, DEFAULT_GRID_OPACITY, TWO_DECIMAL_MULTIPLIER, MARGIN, SIZE_STEP, MIN_TEXT_TOOL_SIZE, MAX_TEXT_TOOL_SIZE, MOVE_DOWN, ANGLE_HALF_TURN, MAX_ANGLE, ROTATION_STEP_ALT, MAGNETISM_NAME, SPRAY_DENSITY, MIN_SPRAY_WIDTH, MIN_SPRAY_DOT_WIDTH, MAX_SPRAY_DOT_WIDTH, MIN_SPRAY_FREQUENCY, MAX_SPRAY_FREQUENCY, ONE_SECOND, ROTATION_STEP, MAX_NUMBER_VISIBLE_DRAWINGS, MIN_SIDES, MAX_SIDES, MAX_TAG_LENGTH, MAX_NAME_LENGTH, SELECTION_POINT_WIDTH, MAX_NUMBER_TAG, MAX_OPACITY_RGBA, Quadrant, LineAngle, MouseButton, SelectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMUM_CANVAS_WIDTH", function() { return MINIMUM_CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMUM_CANVAS_HEIGHT", function() { return MINIMUM_CANVAS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMUM_WORKSPACE_WIDTH", function() { return MINIMUM_WORKSPACE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMUM_WORKSPACE_HEIGHT", function() { return MINIMUM_WORKSPACE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOOM_RADIUS", function() { return ZOOM_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HALF_RATIO", function() { return HALF_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_DELAY", function() { return TOOLTIP_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_DISTANCE_LINE_CONNECTION", function() { return MAXIMUM_DISTANCE_LINE_CONNECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEGREES_180", function() { return DEGREES_180; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_NUMBER_OF_COLORS", function() { return MAXIMUM_NUMBER_OF_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_OPACITY", function() { return MAX_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_NEGATIVE_PIXEL", function() { return ONE_NEGATIVE_PIXEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_TOOL_WIDTH", function() { return MAX_TOOL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_TOOL_WIDTH", function() { return MIN_TOOL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_ERASER_TOOL_WIDTH", function() { return MIN_ERASER_TOOL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_BORDER", function() { return MAX_BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_BORDER", function() { return MIN_BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH_LENGTH", function() { return DASH_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH_SPACE_LENGTH", function() { return DASH_SPACE_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROWTH_ZOOM_PIPETTE", function() { return GROWTH_ZOOM_PIPETTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_TOLERANCE_VALUE", function() { return MIN_TOLERANCE_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_TOLERANCE_VALUE", function() { return MAX_TOLERANCE_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PERCENTAGE", function() { return MAX_PERCENTAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_STRING_", function() { return RGBA_STRING_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_SAVED_DURATION", function() { return CONFIRM_SAVED_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_KEY_PRESS_DURATION", function() { return CONFIRM_KEY_PRESS_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_PRESS_INTERVAL_DURATION", function() { return KEY_PRESS_INTERVAL_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_MOVE_STEP_SIZE", function() { return SELECTION_MOVE_STEP_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_WIDTH_POLYGON_CORRECTION", function() { return LINE_WIDTH_POLYGON_CORRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_GRID_SQUARE_SIZE", function() { return MIN_GRID_SQUARE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_GRID_SQUARE_SIZE", function() { return MAX_GRID_SQUARE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_GRID_OPACITY", function() { return MIN_GRID_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_GRID_OPACITY", function() { return MAX_GRID_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GRID_SIZE", function() { return DEFAULT_GRID_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_STEP", function() { return GRID_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_WAND_BORDER_ONE_SIDE", function() { return MAGIC_WAND_BORDER_ONE_SIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_WAND_BORDER_BOTH_SIDES", function() { return MAGIC_WAND_BORDER_BOTH_SIDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_WAND_TOLERANCE", function() { return MAGIC_WAND_TOLERANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_WAND_SECONDARY_TOLERANCE", function() { return MAGIC_WAND_SECONDARY_TOLERANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFSET", function() { return OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GRID_OPACITY", function() { return DEFAULT_GRID_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO_DECIMAL_MULTIPLIER", function() { return TWO_DECIMAL_MULTIPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARGIN", function() { return MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZE_STEP", function() { return SIZE_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_TEXT_TOOL_SIZE", function() { return MIN_TEXT_TOOL_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_TEXT_TOOL_SIZE", function() { return MAX_TEXT_TOOL_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_DOWN", function() { return MOVE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_HALF_TURN", function() { return ANGLE_HALF_TURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ANGLE", function() { return MAX_ANGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_STEP_ALT", function() { return ROTATION_STEP_ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGNETISM_NAME", function() { return MAGNETISM_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRAY_DENSITY", function() { return SPRAY_DENSITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SPRAY_WIDTH", function() { return MIN_SPRAY_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SPRAY_DOT_WIDTH", function() { return MIN_SPRAY_DOT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SPRAY_DOT_WIDTH", function() { return MAX_SPRAY_DOT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SPRAY_FREQUENCY", function() { return MIN_SPRAY_FREQUENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SPRAY_FREQUENCY", function() { return MAX_SPRAY_FREQUENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_SECOND", function() { return ONE_SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_STEP", function() { return ROTATION_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_NUMBER_VISIBLE_DRAWINGS", function() { return MAX_NUMBER_VISIBLE_DRAWINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SIDES", function() { return MIN_SIDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SIDES", function() { return MAX_SIDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_TAG_LENGTH", function() { return MAX_TAG_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_NAME_LENGTH", function() { return MAX_NAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_POINT_WIDTH", function() { return SELECTION_POINT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_NUMBER_TAG", function() { return MAX_NUMBER_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_OPACITY_RGBA", function() { return MAX_OPACITY_RGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quadrant", function() { return Quadrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineAngle", function() { return LineAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseButton", function() { return MouseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
// Global variables are stored here
const MINIMUM_CANVAS_WIDTH = 250;
const MINIMUM_CANVAS_HEIGHT = 250;
const MINIMUM_WORKSPACE_WIDTH = 500;
const MINIMUM_WORKSPACE_HEIGHT = 500;
const ZOOM_RADIUS = 75;
const HALF_RATIO = 0.5;
const TOOLTIP_DELAY = 500;
const MAXIMUM_DISTANCE_LINE_CONNECTION = 20;
const DEGREES_180 = 180;
const MAXIMUM_NUMBER_OF_COLORS = 10;
const MAX_OPACITY = 100;
const ONE_NEGATIVE_PIXEL = -1;
const MAX_TOOL_WIDTH = 50;
const MIN_TOOL_WIDTH = 1;
const MIN_ERASER_TOOL_WIDTH = 5;
const MAX_BORDER = 20;
const MIN_BORDER = 1;
const DASH_LENGTH = 5;
const DASH_SPACE_LENGTH = 3;
const GROWTH_ZOOM_PIPETTE = 16;
const MIN_TOLERANCE_VALUE = 0;
const MAX_TOLERANCE_VALUE = 100;
const MAX_PERCENTAGE = 100;
const RGBA_STRING_ = 100;
const CONFIRM_SAVED_DURATION = 5000;
const CONFIRM_KEY_PRESS_DURATION = 500;
const KEY_PRESS_INTERVAL_DURATION = 100;
const SELECTION_MOVE_STEP_SIZE = 3;
const LINE_WIDTH_POLYGON_CORRECTION = 1.4;
const MIN_GRID_SQUARE_SIZE = 5;
const MAX_GRID_SQUARE_SIZE = 200;
const MIN_GRID_OPACITY = 10;
const MAX_GRID_OPACITY = 100;
const DEFAULT_GRID_SIZE = 5;
const GRID_STEP = 5;
const MAGIC_WAND_BORDER_ONE_SIDE = 2;
const MAGIC_WAND_BORDER_BOTH_SIDES = 4;
const MAGIC_WAND_TOLERANCE = 10;
const MAGIC_WAND_SECONDARY_TOLERANCE = 50;
const OFFSET = -1;
const DEFAULT_GRID_OPACITY = 100;
const TWO_DECIMAL_MULTIPLIER = 100;
// constant for text service
const MARGIN = 5;
const SIZE_STEP = 5;
const MIN_TEXT_TOOL_SIZE = 15;
const MAX_TEXT_TOOL_SIZE = 100;
const MOVE_DOWN = -1;
// constant for rotation service
const ANGLE_HALF_TURN = 180;
const MAX_ANGLE = 360;
const ROTATION_STEP_ALT = 1;
// constants for circle selection and square selection
const MAGNETISM_NAME = 'Magnétisme';
// constants for spray service
const SPRAY_DENSITY = 40;
const MIN_SPRAY_WIDTH = 5;
const MIN_SPRAY_DOT_WIDTH = 1;
const MAX_SPRAY_DOT_WIDTH = 20;
const MIN_SPRAY_FREQUENCY = 10;
const MAX_SPRAY_FREQUENCY = 50;
const ONE_SECOND = 1000;
// constants for pen service
const ROTATION_STEP = 15;
const MAX_NUMBER_VISIBLE_DRAWINGS = 3;
const MIN_SIDES = 3;
const MAX_SIDES = 12;
const MAX_TAG_LENGTH = 15;
const MAX_NAME_LENGTH = 15;
const SELECTION_POINT_WIDTH = 6;
const MAX_NUMBER_TAG = 5;
const MAX_OPACITY_RGBA = 255;
var Quadrant;
(function (Quadrant) {
    Quadrant[Quadrant["TOP_RIGHT"] = 0] = "TOP_RIGHT";
    Quadrant[Quadrant["TOP_LEFT"] = 1] = "TOP_LEFT";
    Quadrant[Quadrant["BOTTOM_LEFT"] = 2] = "BOTTOM_LEFT";
    Quadrant[Quadrant["BOTTOM_RIGHT"] = 3] = "BOTTOM_RIGHT";
})(Quadrant || (Quadrant = {}));
var LineAngle;
(function (LineAngle) {
    LineAngle[LineAngle["DEGREES_0"] = 0] = "DEGREES_0";
    LineAngle[LineAngle["DEGREES_45"] = 1] = "DEGREES_45";
    LineAngle[LineAngle["DEGREES_90"] = 2] = "DEGREES_90";
    LineAngle[LineAngle["DEGREES_135"] = 3] = "DEGREES_135";
    LineAngle[LineAngle["DEGREES_180"] = 4] = "DEGREES_180";
    LineAngle[LineAngle["DEGREES_225"] = 5] = "DEGREES_225";
    LineAngle[LineAngle["DEGREES_270"] = 6] = "DEGREES_270";
    LineAngle[LineAngle["DEGREES_315"] = 7] = "DEGREES_315";
})(LineAngle || (LineAngle = {}));
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["LEFT"] = 0] = "LEFT";
    MouseButton[MouseButton["MIDDLE"] = 1] = "MIDDLE";
    MouseButton[MouseButton["RIGHT"] = 2] = "RIGHT";
    MouseButton[MouseButton["BACK"] = 3] = "BACK";
    MouseButton[MouseButton["FORWARD"] = 4] = "FORWARD";
})(MouseButton || (MouseButton = {}));
var SelectionType;
(function (SelectionType) {
    SelectionType[SelectionType["SQUARE"] = 0] = "SQUARE";
    SelectionType[SelectionType["CIRCLE"] = 1] = "CIRCLE";
    SelectionType[SelectionType["WAND"] = 2] = "WAND";
})(SelectionType || (SelectionType = {}));


/***/ }),

/***/ "JXhA":
/*!*******************************************************************!*\
  !*** ./src/app/services/resize-drawing/resize-drawing.service.ts ***!
  \*******************************************************************/
/*! exports provided: ResizeDrawingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeDrawingService", function() { return ResizeDrawingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_canvas_resizing_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/canvas-resizing-points */ "SXY0");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");








class ResizeDrawingService {
    constructor(drawingService, undoRedoStackService) {
        this.drawingService = drawingService;
        this.undoRedoStackService = undoRedoStackService;
        this.mouseDown = false;
    }
    setDefaultCanvasSize() {
        if (this.workSpaceSize.x > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MINIMUM_WORKSPACE_WIDTH"]) {
            this.canvasSize.x = this.workSpaceSize.x * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["HALF_RATIO"];
        }
        else {
            this.canvasSize.x = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MINIMUM_CANVAS_WIDTH"];
        }
        if (this.workSpaceSize.y > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MINIMUM_WORKSPACE_HEIGHT"]) {
            this.canvasSize.y = this.workSpaceSize.y * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["HALF_RATIO"];
        }
        else {
            this.canvasSize.y = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MINIMUM_CANVAS_HEIGHT"];
        }
        this.previewSize.x = this.canvasSize.x;
        this.previewSize.y = this.canvasSize.y;
        setTimeout(() => {
            this.drawingService.initializeBaseCanvas();
        });
    }
    resizeCanvasSize(width, height) {
        this.drawingService.canvas.width = width;
        this.drawingService.canvas.height = height;
        this.drawingService.previewCanvas.width = width;
        this.drawingService.previewCanvas.height = height;
        this.previewSize.x = width;
        this.previewSize.y = height;
    }
    restoreCanvas(resizeData) {
        this.resizeCanvasSize(resizeData.canvasSize.x, resizeData.canvasSize.y);
        this.drawingService.baseCtx.putImageData(resizeData.imageData, 0, 0);
    }
    onMouseDown(event) {
        this.mouseDown = event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].LEFT;
        if (this.mouseDown) {
            this.mouseDownCoord = this.getPositionFromMouse(event);
            const target = event.target;
            this.serviceCaller = target.id;
        }
    }
    onMouseUp() {
        if (this.mouseDown) {
            this.imageData = this.drawingService.getCanvasData();
            const previewData = this.drawingService.getPreviewData();
            this.canvasSize.x = this.previewSize.x;
            this.canvasSize.y = this.previewSize.y;
            this.updateResizeData();
            this.undoRedoStackService.updateStack(this.resizeData);
            setTimeout(() => {
                this.drawingService.initializeBaseCanvas();
                this.drawingService.baseCtx.putImageData(this.imageData, 0, 0);
                this.drawingService.previewCtx.putImageData(previewData, 0, 0);
            });
        }
        this.mouseDown = false;
        this.drawingService.autoSave();
    }
    getPositionFromMouse(event) {
        return { x: event.clientX, y: event.clientY };
    }
    resizeCanvas(event) {
        switch (this.serviceCaller) {
            case _app_ressources_global_variables_canvas_resizing_points__WEBPACK_IMPORTED_MODULE_1__["CANVAS_RESIZING_POINTS"].VERTICAL:
                this.verticalResize(event);
                break;
            case _app_ressources_global_variables_canvas_resizing_points__WEBPACK_IMPORTED_MODULE_1__["CANVAS_RESIZING_POINTS"].HORIZONTAL:
                this.horizontalResize(event);
                break;
            case _app_ressources_global_variables_canvas_resizing_points__WEBPACK_IMPORTED_MODULE_1__["CANVAS_RESIZING_POINTS"].VERTICAL_AND_HORIZONTAL:
                this.verticalAndHorizontalResize(event);
                break;
            default:
        }
    }
    verticalResize(event) {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            const mousePositionChangeY = mousePosition.y - this.mouseDownCoord.y;
            const newCanvasHeight = this.previewSize.y + mousePositionChangeY;
            if (newCanvasHeight >= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MINIMUM_CANVAS_HEIGHT"]) {
                this.previewSize.y = newCanvasHeight;
            }
            this.mouseDownCoord = mousePosition;
        }
    }
    verticalAndHorizontalResize(event) {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            const mousePositionChangeY = mousePosition.y - this.mouseDownCoord.y;
            const newCanvasHeight = this.previewSize.y + mousePositionChangeY;
            if (newCanvasHeight >= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MINIMUM_CANVAS_HEIGHT"]) {
                this.previewSize.y = newCanvasHeight;
            }
            const mousePositionChangeX = mousePosition.x - this.mouseDownCoord.x;
            const newCanvasWidth = this.previewSize.x + mousePositionChangeX;
            if (newCanvasWidth >= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MINIMUM_CANVAS_WIDTH"]) {
                this.previewSize.x = newCanvasWidth;
            }
            this.mouseDownCoord = mousePosition;
        }
    }
    horizontalResize(event) {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            const mousePositionChangeX = mousePosition.x - this.mouseDownCoord.x;
            const newCanvasWidth = this.previewSize.x + mousePositionChangeX;
            if (newCanvasWidth >= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MINIMUM_CANVAS_WIDTH"]) {
                this.previewSize.x = newCanvasWidth;
            }
            this.mouseDownCoord = mousePosition;
        }
    }
    updateResizeData() {
        this.resizeData = {
            type: 'resize',
            canvasSize: { x: this.canvasSize.x, y: this.canvasSize.y },
            imageData: this.imageData,
        };
    }
}
ResizeDrawingService.ɵfac = function ResizeDrawingService_Factory(t) { return new (t || ResizeDrawingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__["UndoRedoStackService"])); };
ResizeDrawingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResizeDrawingService, factory: ResizeDrawingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeDrawingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "Kbhk":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tools/spray-attributes/spray-attributes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SprayAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprayAttributesComponent", function() { return SprayAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/spray.service */ "PE9K");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");





class SprayAttributesComponent {
    constructor(sprayService) {
        this.sprayService = sprayService;
        this.toolWidth = sprayService.width;
        this.dotWidth = sprayService.dotWidth;
        this.sprayFrequency = sprayService.sprayFrequency;
    }
    changeWidth(newWidth) {
        this.toolWidth = newWidth;
        this.sprayService.changeWidth(this.toolWidth);
    }
    changeDotWidth(newWidth) {
        this.dotWidth = newWidth;
        this.sprayService.changeDotWidth(this.dotWidth);
    }
    changeSprayFrequency(newSprayFrequency) {
        this.sprayFrequency = newSprayFrequency;
        this.sprayService.changeSprayFrequency(newSprayFrequency);
    }
}
SprayAttributesComponent.ɵfac = function SprayAttributesComponent_Factory(t) { return new (t || SprayAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_1__["SprayService"])); };
SprayAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SprayAttributesComponent, selectors: [["app-spray-attributes"]], decls: 7, vars: 13, consts: [["id", "sprayAttributes"], [1, "toolName"], ["title", "Diam\u00E8tre du jet", 3, "min", "max", "step", "value", "valueChange"], ["title", "Diam\u00E8tre des gouttes", 3, "min", "max", "step", "value", "valueChange"], ["title", "\u00C9mission par seconde", 3, "min", "max", "step", "value", "valueChange"]], template: function SprayAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SprayAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SprayAttributesComponent_Template_app_slider_valueChange_5_listener($event) { return ctx.changeDotWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SprayAttributesComponent_Template_app_slider_valueChange_6_listener($event) { return ctx.changeSprayFrequency($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sprayService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.sprayService.minToolWidth)("max", ctx.sprayService.maxToolWidth)("step", 1)("value", ctx.toolWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.sprayService.minDotWidth)("max", ctx.sprayService.maxDotWidth)("step", 1)("value", ctx.dotWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.sprayService.minFrequency)("max", ctx.sprayService.maxFrequency)("step", 1)("value", ctx.sprayFrequency);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]], styles: ["#sprayAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9zcHJheS1hdHRyaWJ1dGVzL3NwcmF5LWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xzL3NwcmF5LWF0dHJpYnV0ZXMvc3ByYXktYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcHJheUF0dHJpYnV0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XG59XG5cbmhyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjZmNmY2Y7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udG9vbE5hbWUge1xuICAgIG1hcmdpbjogNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SprayAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spray-attributes',
                templateUrl: './spray-attributes.component.html',
                styleUrls: ['./spray-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_1__["SprayService"] }]; }, null); })();


/***/ }),

/***/ "L+iO":
/*!***********************************************************************!*\
  !*** ./src/app/services/continue-drawing/continue-drawing.service.ts ***!
  \***********************************************************************/
/*! exports provided: ContinueDrawingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueDrawingService", function() { return ContinueDrawingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_database_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/database/database.service */ "aX8X");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/resize-drawing/resize-drawing.service */ "JXhA");
/* harmony import */ var _app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/server-response/server-response.service */ "Y39l");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");














class ContinueDrawingService {
    constructor(drawingService, resizeDrawingService, router, serverResponseService, databaseService) {
        this.drawingService = drawingService;
        this.resizeDrawingService = resizeDrawingService;
        this.router = router;
        this.serverResponseService = serverResponseService;
        this.databaseService = databaseService;
        this.isLastDrawing = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.filteredMetadata = [];
        this.isDrawingLoaded = false;
    }
    continueDrawing() {
        const sourceDrawingURI = localStorage.getItem('drawingKey');
        const savedCanvasWidth = Number(localStorage.getItem('canvasWidth'));
        const savedCanvasHeight = Number(localStorage.getItem('canvasHeight'));
        this.convertURIToImageData(sourceDrawingURI, savedCanvasWidth, savedCanvasHeight);
    }
    convertURIToImageData(URI, savedCanvasWidth, savedCanvasHeight) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (URI == null)
                    return reject();
                const context = this.drawingService.baseCtx;
                const image = new Image();
                image.src = URI;
                image.addEventListener('load', () => {
                    if (!this.isDrawingLoaded) {
                        this.resizeDrawingService.resizeCanvasSize(savedCanvasWidth, savedCanvasHeight);
                        context.drawImage(image, 0, 0, savedCanvasWidth, savedCanvasHeight);
                        resolve();
                        this.isDrawingLoaded = true;
                    }
                }, false);
            });
        });
    }
    loadOldDrawing() {
        this.isDrawingLoaded = false;
        this.drawingService.isLastDrawing = localStorage.length > 0;
        this.router.navigateByUrl('/editor');
        return this.isLastDrawing;
    }
    setLastDrawing() {
        this.drawingService.isLastDrawing = localStorage.length > 0;
    }
    unlockContinueDrawing() {
        this.drawingService.isLastDrawing = false;
    }
    clearCanvas() {
        this.drawingService.clearCanvas(this.drawingService.baseCtx);
    }
}
ContinueDrawingService.ɵfac = function ContinueDrawingService_Factory(t) { return new (t || ContinueDrawingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_5__["ResizeDrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_6__["ServerResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"])); };
ContinueDrawingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContinueDrawingService, factory: ContinueDrawingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContinueDrawingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_5__["ResizeDrawingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_6__["ServerResponseService"] }, { type: _app_services_database_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }]; }, null); })();


/***/ }),

/***/ "LNOw":
/*!*****************************************************************!*\
  !*** ./src/app/ressources/global-variables/sidebar-elements.ts ***!
  \*****************************************************************/
/*! exports provided: SIDEBAR_ELEMENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_ELEMENTS", function() { return SIDEBAR_ELEMENTS; });
const SIDEBAR_ELEMENTS = {
    NEW_DRAWING_NAME: 'NouveauDessin',
    CAROUSEL_NAME: 'Carousel',
    SAVE_SERVER_NAME: 'SauvegardeServeur',
    EXPORT_DRAWING_NAME: 'ExporterDessin',
    SELECT_ALL: 'Tout sélectionner',
    UNDO: 'Annuler',
    REDO: 'Refaire',
};


/***/ }),

/***/ "MmXv":
/*!*****************************************************************************!*\
  !*** ./src/app/components/new-drawing-modal/new-drawing-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NewDrawingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDrawingModalComponent", function() { return NewDrawingModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/resize-drawing/resize-drawing.service */ "JXhA");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













class NewDrawingModalComponent {
    constructor(drawingService, resizeDrawingService, hotkeyService, undoRedoStackService) {
        this.drawingService = drawingService;
        this.resizeDrawingService = resizeDrawingService;
        this.hotkeyService = hotkeyService;
        this.undoRedoStackService = undoRedoStackService;
    }
    ngOnInit() {
        this.hotkeyService.isHotkeyEnabled = false;
    }
    createNewDrawing() {
        this.resizeDrawingService.setDefaultCanvasSize();
        this.drawingService.clearCanvas(this.drawingService.baseCtx);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.undoRedoStackService.resetStack();
    }
    ngOnDestroy() {
        this.hotkeyService.isHotkeyEnabled = true;
    }
}
NewDrawingModalComponent.ɵfac = function NewDrawingModalComponent_Factory(t) { return new (t || NewDrawingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__["ResizeDrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_2__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__["UndoRedoStackService"])); };
NewDrawingModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewDrawingModalComponent, selectors: [["app-new-drawing-modal"]], decls: 14, vars: 0, consts: [[1, "newDrawingModal"], ["mat-dialog-title", ""], [1, "example-tab-icon"], ["mat-dialog-content", "", 1, "text"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "newDraw", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "warn", "mat-dialog-close", ""]], template: function NewDrawingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Attention ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Il y a pr\u00E9sentement d\u00E9j\u00E0 un dessin sur la surface.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Voulez-vous l'effacer et cr\u00E9er un nouveau dessin? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewDrawingModalComponent_Template_button_click_10_listener() { return ctx.createNewDrawing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Oui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"]], styles: ["h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: red;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  height: auto;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctZHJhd2luZy1tb2RhbC9uZXctZHJhd2luZy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy1kcmF3aW5nLW1vZGFsL25ldy1kcmF3aW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHJlZDtcbn1cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewDrawingModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-drawing-modal',
                templateUrl: './new-drawing-modal.component.html',
                styleUrls: ['./new-drawing-modal.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"] }, { type: _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__["ResizeDrawingService"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_2__["HotkeyService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "NRvI":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tools/pen-attributes/pen-attributes.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PenAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenAttributesComponent", function() { return PenAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/pen.service */ "jZBZ");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");





class PenAttributesComponent {
    constructor(penService) {
        this.penService = penService;
        this.toolWidth = penService.width;
        this.angle = penService.angle;
        this.penService.getAngle().subscribe((angle) => {
            this.angle = angle;
        });
    }
    changeWidth(newWidth) {
        this.toolWidth = newWidth;
        this.penService.changeWidth(this.toolWidth);
    }
    changeAngle(newAngle) {
        this.angle = newAngle;
        this.penService.changeAngle(this.angle);
    }
}
PenAttributesComponent.ɵfac = function PenAttributesComponent_Factory(t) { return new (t || PenAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_1__["PenService"])); };
PenAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PenAttributesComponent, selectors: [["app-pen-attributes"]], decls: 6, vars: 9, consts: [["id", "penAttributes"], [1, "toolName"], ["title", "\u00C9paisseur Ligne", 3, "min", "max", "step", "value", "valueChange"], ["title", "Angle", 3, "min", "max", "step", "value", "valueChange"]], template: function PenAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PenAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PenAttributesComponent_Template_app_slider_valueChange_5_listener($event) { return ctx.changeAngle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.penService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.penService.minToolWidth)("max", ctx.penService.maxToolWidth)("step", 1)("value", ctx.toolWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 180)("step", 1)("value", ctx.angle);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]], styles: ["#penAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9wZW4tYXR0cmlidXRlcy9wZW4tYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvcGVuLWF0dHJpYnV0ZXMvcGVuLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGVuQXR0cmlidXRlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50b29sTmFtZSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PenAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pen-attributes',
                templateUrl: './pen-attributes.component.html',
                styleUrls: ['./pen-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_1__["PenService"] }]; }, null); })();


/***/ }),

/***/ "NWRK":
/*!*************************************************************************!*\
  !*** ./src/app/services/tools/selection-services/magic-wand.service.ts ***!
  \*************************************************************************/
/*! exports provided: MagicWandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicWandService", function() { return MagicWandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/rgba */ "4IQm");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/clipboard/clipboard.service */ "l+p6");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/tools/transformation-services/move.service */ "Uu7x");
/* harmony import */ var _app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/tools/transformation-services/rotate.service */ "88n9");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var _magnetism_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./magnetism.service */ "BemE");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selection.service */ "a4AR");




















class MagicWandService extends _selection_service__WEBPACK_IMPORTED_MODULE_11__["SelectionService"] {
    constructor(drawingService, moveService, rotateService, magnetismService, colorSelectionService, clipboardService, undoRedoStackService) {
        super(drawingService, moveService, rotateService, clipboardService, magnetismService, undoRedoStackService);
        this.moveService = moveService;
        this.rotateService = rotateService;
        this.magnetismService = magnetismService;
        this.colorSelectionService = colorSelectionService;
        this.clipboardService = clipboardService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAMES"].MAGIC_WAND_TOOL_NAME;
        this.initialSelection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.selectionImageCtx = this.selectionImage.getContext('2d');
        this.transormation = '';
        this.isNewSelection = false;
        this.tolerance = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_TOLERANCE"];
        this.secondaryTolerance = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_SECONDARY_TOLERANCE"];
        this.borderCanvas = document.createElement('canvas');
        this.borderCanvasCtx = this.borderCanvas.getContext('2d');
        this.cornerSelectionValues = new Map([
            ['minX', 0],
            ['maxX', 0],
            ['minY', 0],
            ['maxY', 0],
        ]);
        this.selectionType = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["SelectionType"].WAND;
    }
    setMagnetismAlignment(alignment) {
        this.currentAlignment = alignment;
    }
    onMouseDown(event) {
        this.mouseDownCoord = this.getPositionFromMouse(event);
        if (!this.isInSelection(event)) {
            this.isNewSelection = true;
            if (!this.moveService.isTransformationOver) {
                this.moveService.isTransformationOver = true;
                this.moveService.printSelectionOnPreview();
                this.applyPreview();
            }
            if (!this.rotateService.isRotationOver) {
                this.rotateService.restoreSelection();
                this.applyPreview();
            }
            this.selection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            if (event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MouseButton"].LEFT && this.isSelectionOver) {
                this.setContiguousWand();
            }
            else if (event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MouseButton"].RIGHT && this.isSelectionOver) {
                this.setWand();
            }
            this.isSelectionOver = true;
        }
        else {
            this.isSelectionOver = false;
            this.mouseDownCoord.x = event.x;
            this.mouseDownCoord.y = event.y;
            this.transormation = 'move';
            this.moveService.onMouseDown(event);
        }
        this.undoRedoStackService.setIsToolInUse(true);
    }
    onMouseUp(event) {
        if (this.isNewSelection) {
            if (this.selection.height !== 0 && this.selection.width !== 0) {
                this.isSelectionOver = false;
                this.setSelection(this.initialSelection, this.selection);
            }
            this.isNewSelection = false;
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.isSelectionEmptySubject.next(false);
        }
        else if (this.transormation === 'move') {
            this.transormation = '';
        }
        this.strokeSelection();
        this.setSelectionPoint();
        this.undoRedoStackService.setIsToolInUse(false);
    }
    onKeyUp(event) {
        this.moveService.onKeyUp(event);
        this.rotateService.onKeyUp(event);
        this.strokeSelection();
        this.setSelectionPoint();
    }
    onMouseMove(event) {
        if (this.transormation === 'move') {
            if (this.isMagnetism) {
                const mousePosDifferenceX = event.x - this.mouseDownCoord.x;
                const mousePosDifferenceY = event.y - this.mouseDownCoord.y;
                this.onMouseMoveMagnetism(mousePosDifferenceX, mousePosDifferenceY);
            }
            else {
                this.moveService.onMouseMove(event.movementX, event.movementY);
            }
        }
    }
    adjustCornerSelectionValues(value) {
        if (value.x < this.cornerSelectionValues.get('minX')) {
            this.cornerSelectionValues.set('minX', value.x);
        }
        else if (value.x > this.cornerSelectionValues.get('maxX')) {
            this.cornerSelectionValues.set('maxX', value.x);
        }
        if (value.y < this.cornerSelectionValues.get('minY')) {
            this.cornerSelectionValues.set('minY', value.y);
        }
        else if (value.y > this.cornerSelectionValues.get('maxY')) {
            this.cornerSelectionValues.set('maxY', value.y);
        }
    }
    setContiguousWand() {
        this.pixelData = this.drawingService.getPixelData(this.mouseDownCoord);
        this.stack = [this.mouseDownCoord];
        const selectedPixels = new Map();
        this.cornerSelectionValues = new Map([
            ['minX', this.mouseDownCoord.x],
            ['maxX', this.mouseDownCoord.x],
            ['minY', this.mouseDownCoord.y],
            ['maxY', this.mouseDownCoord.y],
        ]);
        const canvasData = this.drawingService.getCanvasData();
        this.selectionImageData = new ImageData(this.drawingService.canvas.width, this.drawingService.canvas.height);
        while (this.stack.length) {
            const currentPixel = this.stack.pop();
            const index = (currentPixel.x + currentPixel.y * this.drawingService.canvas.width) * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"];
            if (selectedPixels.has(this.vec2ToString(currentPixel))) {
                continue;
            }
            if (this.isSameColor(this.pixelData, canvasData, index, this.tolerance)) {
                this.addPixelToSelection(index, canvasData);
                this.adjustCornerSelectionValues(currentPixel);
                selectedPixels.set(this.vec2ToString(currentPixel), true);
                this.nextContiguousPixels(currentPixel, canvasData);
            }
        }
        this.setSelectionWithCorners();
        this.setSelectionData();
    }
    setSelectionWithCorners() {
        this.selection = {
            startingPoint: {
                x: this.cornerSelectionValues.get('minX') - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"],
                y: this.cornerSelectionValues.get('minY') - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"],
            },
            height: this.cornerSelectionValues.get('maxY') -
                this.cornerSelectionValues.get('minY') +
                _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_BOTH_SIDES"],
            width: this.cornerSelectionValues.get('maxX') -
                this.cornerSelectionValues.get('minX') +
                _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_BOTH_SIDES"],
        };
    }
    nextContiguousPixels(currentPixel, canvasData) {
        if (currentPixel.y - 1 >= 0) {
            const index = (currentPixel.x + (currentPixel.y - 1) * this.drawingService.canvas.width) * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"];
            if (this.isSameColor(this.pixelData, canvasData, index, this.tolerance)) {
                this.stack.push({ x: currentPixel.x, y: currentPixel.y - 1 });
            }
            else {
                this.addSecondaryTolerance(this.pixelData, index, canvasData, { x: currentPixel.x, y: currentPixel.y - 1 });
            }
        }
        if (currentPixel.y + 1 < this.drawingService.canvas.height) {
            const index = (currentPixel.x + (currentPixel.y + 1) * this.drawingService.canvas.width) * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"];
            if (this.isSameColor(this.pixelData, canvasData, index, this.tolerance)) {
                this.stack.push({ x: currentPixel.x, y: currentPixel.y + 1 });
            }
            else {
                this.addSecondaryTolerance(this.pixelData, index, canvasData, { x: currentPixel.x, y: currentPixel.y + 1 });
            }
        }
        if (currentPixel.x + 1 < this.drawingService.canvas.width) {
            const index = (currentPixel.x + 1 + currentPixel.y * this.drawingService.canvas.width) * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"];
            if (this.isSameColor(this.pixelData, canvasData, index, this.tolerance)) {
                this.stack.push({ x: currentPixel.x + 1, y: currentPixel.y });
            }
            else {
                this.addSecondaryTolerance(this.pixelData, index, canvasData, { x: currentPixel.x + 1, y: currentPixel.y });
            }
        }
        if (currentPixel.x - 1 >= 0) {
            const index = (currentPixel.x - 1 + currentPixel.y * this.drawingService.canvas.width) * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"];
            if (this.isSameColor(this.pixelData, canvasData, index, this.tolerance)) {
                this.stack.push({ x: currentPixel.x - 1, y: currentPixel.y });
            }
            else {
                this.addSecondaryTolerance(this.pixelData, index, canvasData, { x: currentPixel.x - 1, y: currentPixel.y });
            }
        }
    }
    addPixelToSelection(index, canvasData) {
        this.selectionImageData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].RED] = canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].RED];
        this.selectionImageData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].GREEN] = canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].GREEN];
        this.selectionImageData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].BLUE] = canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].BLUE];
        this.selectionImageData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].ALPHA] = canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].ALPHA];
    }
    addSecondaryTolerance(pixelData, index, canvasData, currentPixel) {
        if (!this.isSameColor(pixelData, canvasData, index, this.secondaryTolerance))
            return;
        this.adjustCornerSelectionValues(currentPixel);
        this.addPixelToSelection(index, canvasData);
    }
    setSelectionData() {
        this.selectionImage.width = this.selection.width;
        this.selectionImage.height = this.selection.height;
        this.selectionImageCtx.putImageData(this.selectionImageData, -this.selection.startingPoint.x, -this.selection.startingPoint.y);
        this.moveService.initialize(this.selection, this.selectionImage);
        this.rotateService.initialize(this.selection, this.selectionImage);
        this.undoRedoStackService.updateStack(this.selectionData);
    }
    strokeSelection() {
        if (this.selection.height !== 0 && this.selection.width !== 0) {
            this.drawingService.previewCtx.save();
            this.rotateService.rotatePreviewCanvas();
            this.setBorderCanvas();
            this.drawingService.previewCtx.strokeRect(this.selection.startingPoint.x, this.selection.startingPoint.y, this.selection.width, this.selection.height);
            this.drawingService.previewCtx.restore();
        }
    }
    setBorderPattern() {
        const patternCanvas = document.createElement('canvas');
        patternCanvas.width = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_BOTH_SIDES"];
        patternCanvas.height = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_BOTH_SIDES"];
        const patternCtx = patternCanvas.getContext('2d');
        patternCtx.fillStyle = 'rgb(0, 0, 0)';
        patternCtx.fillRect(0, 0, 2, 2);
        patternCtx.fillRect(2, 2, 2, 2);
        return patternCtx.createPattern(patternCanvas, 'repeat');
    }
    setBorderCanvas() {
        this.borderCanvas.width = this.selectionImage.width + _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_BOTH_SIDES"];
        this.borderCanvas.height = this.selectionImage.height + _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_BOTH_SIDES"];
        const dArr = [_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["OFFSET"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["OFFSET"], 0, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["OFFSET"], 1, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["OFFSET"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["OFFSET"], 0, 1, 0, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["OFFSET"], 1, 0, 1, 1, 1];
        for (let i = 0; i < dArr.length; i += 2)
            this.borderCanvasCtx.drawImage(this.selectionImage, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"] + dArr[i] * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"] + dArr[i + 1] * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"]);
        this.borderCanvasCtx.globalCompositeOperation = 'source-in';
        this.borderCanvasCtx.fillStyle = this.setBorderPattern();
        this.borderCanvasCtx.fillRect(0, 0, this.borderCanvas.width, this.borderCanvas.height);
        this.borderCanvasCtx.globalCompositeOperation = 'source-over';
        this.borderCanvasCtx.drawImage(this.selectionImage, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"]);
        this.drawingService.previewCtx.drawImage(this.borderCanvas, this.selection.startingPoint.x - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"], this.selection.startingPoint.y - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGIC_WAND_BORDER_ONE_SIDE"]);
    }
    setWand() {
        this.pixelData = this.drawingService.getPixelData(this.mouseDownCoord);
        this.cornerSelectionValues = new Map([
            ['minX', this.mouseDownCoord.x],
            ['maxX', this.mouseDownCoord.x],
            ['minY', this.mouseDownCoord.y],
            ['maxY', this.mouseDownCoord.y],
        ]);
        const canvasData = this.drawingService.getCanvasData();
        this.selectionImageData = new ImageData(this.drawingService.canvas.width, this.drawingService.canvas.height);
        for (let index = 0; index < canvasData.data.length; index += _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"]) {
            if (this.isSameColor(this.pixelData, canvasData, index, this.tolerance)) {
                this.addPixelToSelection(index, canvasData);
                const currentPixel = {
                    x: (index / _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"]) % this.drawingService.canvas.width,
                    y: Math.floor(index / _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"] / this.drawingService.canvas.width),
                };
                this.adjustCornerSelectionValues(currentPixel);
            }
        }
        this.setSelectionWithCorners();
        this.setSelectionData();
    }
    isSameColor(pixelData, canvasData, index, tolerance) {
        const diffRed = Math.abs(pixelData[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].RED] - canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].RED]);
        const diffGreen = Math.abs(pixelData[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].GREEN] - canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].GREEN]);
        const diffBlue = Math.abs(pixelData[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].BLUE] - canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].BLUE]);
        const diffAlpha = Math.abs(pixelData[_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].ALPHA] - canvasData.data[index + _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_INDEXER"].ALPHA]);
        const diffPercentage = ((diffRed + diffGreen + diffBlue + diffAlpha) / (_app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["RGBA_LENGTH"] * _app_ressources_global_variables_rgba__WEBPACK_IMPORTED_MODULE_2__["MAXIMUM_RGBA_VALUE"])) * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_PERCENTAGE"];
        if (diffPercentage > tolerance) {
            return false;
        }
        else {
            return true;
        }
    }
    vec2ToString(pixel) {
        return pixel.x.toString() + ',' + pixel.y.toString();
    }
}
MagicWandService.ɵfac = function MagicWandService_Factory(t) { return new (t || MagicWandService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_7__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_8__["RotateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_magnetism_service__WEBPACK_IMPORTED_MODULE_10__["MagnetismService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__["UndoRedoStackService"])); };
MagicWandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MagicWandService, factory: MagicWandService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagicWandService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"] }, { type: _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_7__["MoveService"] }, { type: _app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_8__["RotateService"] }, { type: _magnetism_service__WEBPACK_IMPORTED_MODULE_10__["MagnetismService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__["ColorSelectionService"] }, { type: _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "O4K9":
/*!**************************************************!*\
  !*** ./src/app/services/tools/square.service.ts ***!
  \**************************************************/
/*! exports provided: SquareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareService", function() { return SquareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_math_trigonometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/math/trigonometry */ "tW64");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/fill-styles */ "HwfQ");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");













class SquareService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_5__["TOOL_NAMES"].SQUARE_TOOL_NAME;
        this.mouseDown = false;
        this.trigonometry = new _app_classes_math_trigonometry__WEBPACK_IMPORTED_MODULE_1__["Trigonometry"]();
        this.rectangleData = {
            type: 'rectangle',
            primaryColor: this.colorSelectionService.primaryColor,
            secondaryColor: this.colorSelectionService.secondaryColor,
            height: 0,
            width: 0,
            topLeftPoint: { x: 0, y: 0 },
            fillStyle: _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].FILL_AND_BORDER,
            isShiftDown: false,
            lineWidth: 1,
        };
    }
    initialize() {
        this.mouseDown = false;
        this.drawingService.previewCtx.lineJoin = 'miter';
        this.drawingService.baseCtx.lineJoin = 'miter';
    }
    setIsShiftDown(isShiftDown) {
        this.rectangleData.isShiftDown = isShiftDown;
    }
    setFirstPoint(newPoint) {
        this.firstPoint = newPoint;
    }
    setLastPoint(newPoint) {
        this.lastPoint = newPoint;
    }
    setFillStyle(newFillStyle) {
        this.rectangleData.fillStyle = newFillStyle;
    }
    getFillStyle() {
        return this.rectangleData.fillStyle;
    }
    setRectangleWidth() {
        this.rectangleData.width = Math.abs(this.firstPoint.x - this.lastPoint.x);
    }
    setRectangleHeight() {
        this.rectangleData.height = Math.abs(this.firstPoint.y - this.lastPoint.y);
    }
    changeWidth(newWidth) {
        this.rectangleData.lineWidth = newWidth;
    }
    onMouseDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        this.mouseDown = event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["MouseButton"].LEFT;
        if (this.mouseDown) {
            this.firstPoint = this.getPositionFromMouse(event);
            this.lastPoint = this.getPositionFromMouse(event);
            this.undoRedoStackService.setIsToolInUse(true);
        }
    }
    onMouseUp(event) {
        if (this.mouseDown) {
            this.lastPoint = this.getPositionFromMouse(event);
            this.drawShape(this.drawingService.baseCtx);
            this.mouseDown = false;
            this.undoRedoStackService.setIsToolInUse(false);
            this.drawingService.autoSave();
        }
    }
    onKeyDown(event) {
        if (event.key === 'Shift') {
            this.rectangleData.isShiftDown = true;
            if (this.mouseDown) {
                this.drawingService.clearCanvas(this.drawingService.previewCtx);
                this.drawShape(this.drawingService.previewCtx);
            }
        }
    }
    onKeyUp(event) {
        if (event.key === 'Shift' && this.rectangleData.isShiftDown) {
            this.rectangleData.isShiftDown = false;
            if (this.mouseDown) {
                this.drawingService.clearCanvas(this.drawingService.previewCtx);
                this.drawShape(this.drawingService.previewCtx);
            }
        }
    }
    onMouseMove(event) {
        if (this.mouseDown) {
            this.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.drawShape(this.drawingService.previewCtx);
        }
    }
    drawShape(ctx) {
        this.setRectangleHeight();
        this.setRectangleWidth();
        if (this.rectangleData.isShiftDown) {
            this.rectangleData.width = Math.min(this.rectangleData.height, this.rectangleData.width);
            this.rectangleData.height = this.rectangleData.width;
            this.setSquareAttributes();
        }
        else {
            this.rectangleData.topLeftPoint = this.trigonometry.findTopLeftPointCircle(this.firstPoint, this.lastPoint);
        }
        this.updateRectangleDataColor();
        this.drawRectangle(ctx, this.rectangleData);
        if (ctx === this.drawingService.baseCtx) {
            this.undoRedoStackService.updateStack(this.rectangleData);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
        }
        return { startingPoint: this.rectangleData.topLeftPoint, width: this.rectangleData.width, height: this.rectangleData.height };
    }
    drawRectangle(ctx, rectangle) {
        ctx.fillStyle = rectangle.primaryColor;
        ctx.strokeStyle = rectangle.secondaryColor;
        ctx.lineWidth = rectangle.lineWidth;
        if (rectangle.fillStyle === _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].FILL) {
            ctx.strokeStyle = rectangle.primaryColor;
            ctx.lineWidth = 1;
        }
        ctx.beginPath();
        if (rectangle.width > ctx.lineWidth && rectangle.height > ctx.lineWidth) {
            rectangle.width -= ctx.lineWidth;
            rectangle.height -= ctx.lineWidth;
            rectangle.topLeftPoint.x += ctx.lineWidth / 2;
            rectangle.topLeftPoint.y += ctx.lineWidth / 2;
            ctx.rect(rectangle.topLeftPoint.x, rectangle.topLeftPoint.y, rectangle.width, rectangle.height);
            if (rectangle.fillStyle !== _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].BORDER && rectangle.fillStyle !== _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].DASHED) {
                ctx.fillRect(rectangle.topLeftPoint.x, rectangle.topLeftPoint.y, rectangle.width, rectangle.height);
            }
            rectangle.width += ctx.lineWidth;
            rectangle.height += ctx.lineWidth;
        }
        ctx.stroke();
    }
    setSquareAttributes() {
        switch (this.trigonometry.findQuadrant(this.firstPoint, this.lastPoint)) {
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].BOTTOM_LEFT:
                this.rectangleData.topLeftPoint.x = this.firstPoint.x - this.rectangleData.width;
                this.rectangleData.topLeftPoint.y = this.firstPoint.y;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].TOP_LEFT:
                this.rectangleData.topLeftPoint.x = this.firstPoint.x - this.rectangleData.width;
                this.rectangleData.topLeftPoint.y = this.firstPoint.y - this.rectangleData.height;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].BOTTOM_RIGHT:
                this.rectangleData.topLeftPoint.x = this.firstPoint.x;
                this.rectangleData.topLeftPoint.y = this.firstPoint.y;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].TOP_RIGHT:
                this.rectangleData.topLeftPoint.x = this.firstPoint.x;
                this.rectangleData.topLeftPoint.y = this.firstPoint.y - this.rectangleData.height;
                break;
        }
    }
    updateRectangleDataColor() {
        this.rectangleData.primaryColor = this.colorSelectionService.primaryColor;
        this.rectangleData.secondaryColor = this.colorSelectionService.secondaryColor;
    }
}
SquareService.ɵfac = function SquareService_Factory(t) { return new (t || SquareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoStackService"])); };
SquareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SquareService, factory: SquareService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SquareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "PE9K":
/*!*************************************************!*\
  !*** ./src/app/services/tools/spray.service.ts ***!
  \*************************************************/
/*! exports provided: SprayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprayService", function() { return SprayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");











// this tool was inpired by the code found on http://perfectionkills.com/exploring-canvas-drawing-techniques/
class SprayService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAMES"].SPRAY_TOOL_NAME;
        this.density = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["SPRAY_DENSITY"];
        this.minDotWidth = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MIN_SPRAY_DOT_WIDTH"];
        this.maxDotWidth = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MAX_SPRAY_DOT_WIDTH"];
        this.minFrequency = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MIN_SPRAY_FREQUENCY"];
        this.maxFrequency = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MAX_SPRAY_FREQUENCY"];
        this.minToolWidth = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MIN_SPRAY_WIDTH"];
        this.width = this.minToolWidth;
        this.dotWidth = this.minDotWidth;
        this.sprayFrequency = this.minFrequency;
    }
    ngOnDestroy() {
        clearTimeout(this.timeoutId);
    }
    onMouseDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        if (event.button !== _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].LEFT) {
            return;
        }
        else {
            this.mouseDown = true;
            this.mouseCoord = this.getPositionFromMouse(event);
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(this.drawSpray, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["ONE_SECOND"] / this.sprayFrequency, this, this.drawingService.previewCtx);
            this.undoRedoStackService.setIsToolInUse(true);
        }
    }
    onMouseUp() {
        if (this.mouseDown) {
            clearTimeout(this.timeoutId);
            this.drawingService.applyPreview();
            this.undoRedoStackService.setIsToolInUse(false);
            this.canvasData = this.drawingService.getCanvasData();
            this.updateSprayData();
            this.undoRedoStackService.updateStack(this.sprayData);
        }
        this.mouseDown = false;
        this.drawingService.autoSave();
    }
    onMouseMove(event) {
        if (this.mouseDown) {
            this.mouseCoord = this.getPositionFromMouse(event);
        }
    }
    onMouseLeave() {
        if (this.mouseDown) {
            clearTimeout(this.timeoutId);
            this.drawingService.applyPreview();
            this.undoRedoStackService.setIsToolInUse(false);
        }
    }
    onMouseEnter(event) {
        if (this.mouseDown) {
            this.mouseCoord = this.getPositionFromMouse(event);
            this.timeoutId = setTimeout(this.drawSpray, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["ONE_SECOND"] / this.sprayFrequency, this, this.drawingService.previewCtx);
            this.undoRedoStackService.setIsToolInUse(true);
        }
    }
    drawSpray(self, ctx) {
        for (let i = self.density; i--;) {
            const angle = self.getRandomNumber(0, Math.PI * 2);
            const radius = self.getRandomNumber(0, self.width);
            ctx.globalAlpha = Math.random();
            ctx.strokeStyle = self.colorSelectionService.primaryColor;
            ctx.fillStyle = self.colorSelectionService.primaryColor;
            ctx.beginPath();
            ctx.arc(self.mouseCoord.x + radius * Math.cos(angle), self.mouseCoord.y + radius * Math.sin(angle), self.getRandomNumber(1, self.dotWidth / 2), 0, 2 * Math.PI);
            ctx.fill();
        }
        if (!self.timeoutId)
            return;
        self.timeoutId = setTimeout(self.drawSpray, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["ONE_SECOND"] / self.sprayFrequency, self, ctx);
    }
    getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
    changeWidth(newWidth) {
        this.width = newWidth;
    }
    changeDotWidth(newDotWidth) {
        this.dotWidth = newDotWidth;
    }
    changeSprayFrequency(newSprayFrequency) {
        this.sprayFrequency = newSprayFrequency;
    }
    reset() {
        clearTimeout(this.timeoutId);
        this.drawingService.previewCtx.globalAlpha = 1;
    }
    updateSprayData() {
        this.sprayData = {
            type: 'fill',
            imageData: this.canvasData,
        };
        this.drawingService.autoSave();
    }
    restoreSpray(sprayData) {
        this.drawingService.baseCtx.putImageData(sprayData.imageData, 0, 0);
    }
}
SprayService.ɵfac = function SprayService_Factory(t) { return new (t || SprayService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoStackService"])); };
SprayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SprayService, factory: SprayService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SprayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "PVPv":
/*!*******************************************************!*\
  !*** ./src/app/ressources/global-variables/filter.ts ***!
  \*******************************************************/
/*! exports provided: FILTER_STYLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_STYLES", function() { return FILTER_STYLES; });
const FILTER_STYLES = {
    NONE: 0,
    BLACK_AND_WHITE: 1,
    SEPHIA: 2,
    SATURATE: 3,
    INVERT: 4,
    BLUR: 5,
};


/***/ }),

/***/ "PaKX":
/*!*************************************************!*\
  !*** ./src/app/services/email/email.service.ts ***!
  \*************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class EmailService {
    constructor(http) {
        this.http = http;
    }
    sendMail(url, body) {
        return this.http.post(url, body);
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Q8WQ":
/*!*******************************************************!*\
  !*** ./src/app/components/saving/saving.component.ts ***!
  \*******************************************************/
/*! exports provided: SavingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingComponent", function() { return SavingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_database_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/database/database.service */ "aX8X");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/server-response/server-response.service */ "Y39l");
/* harmony import */ var _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/tools/text.service */ "2Eww");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




























const _c0 = ["chipList"];
const _c1 = ["tag"];
function SavingComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nom est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SavingComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nom est trop long (max 15 charact\u00E8res)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SavingComponent_mat_chip_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function SavingComponent_mat_chip_18_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const tag_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.removeTag(tag_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r8, " ");
} }
function SavingComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "L'\u00E9tiquette est trop longue. (max. 15 charact\u00E8res)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SavingComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nombre maximum d'\u00E9tiquettes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SavingComponent {
    constructor(hotkeyService, serverResponseService, databaseService, drawingService, dialog, textService) {
        this.hotkeyService = hotkeyService;
        this.serverResponseService = serverResponseService;
        this.databaseService = databaseService;
        this.drawingService = drawingService;
        this.dialog = dialog;
        this.textService = textService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.isSaveButtonDisabled = false;
        this.currentTag = '';
        this.name = '';
        this.maxTags = false;
        this.isLastTagInvalid = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["SPACE"]];
        this.tags = [];
    }
    ngOnInit() {
        if (this.textService.isNewText) {
            this.textService.createText();
        }
        this.hotkeyService.isHotkeyEnabled = false;
        this.ownerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_NAME_LENGTH"])]),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentTag, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_NAME_LENGTH"])]),
        });
    }
    currentTagInput(tag) {
        this.currentTag = tag;
        if (tag.length > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_TAG_LENGTH"]) {
            this.chipList.errorState = true;
            this.chipList._markAsTouched();
        }
        else {
            this.chipList.errorState = false;
        }
    }
    hasError(controlName, errorName) {
        return this.ownerForm.controls[controlName].hasError(errorName);
    }
    hasTagError(tag) {
        return tag.length > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_TAG_LENGTH"];
    }
    addTag(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.validateTag(value);
        }
        if (this.tags.length === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_NUMBER_TAG"]) {
            this.maxTags = true;
            this.tagInput.nativeElement.disabled = true;
        }
        if (input) {
            input.value = '';
        }
    }
    validateTag(tag) {
        if (this.tags.length < _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_NUMBER_TAG"]) {
            if (tag.length > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_TAG_LENGTH"]) {
                this.isLastTagInvalid = true;
            }
            else {
                this.tags.push(tag.trim());
                this.isLastTagInvalid = false;
            }
        }
    }
    removeTag(tag) {
        const index = this.tags.indexOf(tag);
        if (this.maxTags) {
            this.maxTags = false;
            this.tagInput.nativeElement.disabled = false;
        }
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
    addDrawing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSaveButtonDisabled = true;
            const canvas = this.drawingService.baseCtx.canvas.toDataURL();
            const blob = yield (yield fetch(canvas)).blob();
            const ID = new Date().getUTCMilliseconds() + '';
            const meta = { id: ID, name: this.name, tags: this.tags };
            this.databaseService
                .addDrawing(meta, blob)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                this.isSaveButtonDisabled = false;
                this.serverResponseService.saveConfirmSnackBar();
                this.dialog.closeAll();
            }, () => {
                this.isSaveButtonDisabled = false;
                this.serverResponseService.saveErrorSnackBar();
                this.dialog.closeAll();
            });
        });
    }
    changeName(name) {
        this.name = name;
        this.ownerForm.markAllAsTouched();
    }
    ngOnDestroy() {
        this.hotkeyService.isHotkeyEnabled = true;
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
SavingComponent.ɵfac = function SavingComponent_Factory(t) { return new (t || SavingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_9__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_10__["ServerResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_8__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_11__["TextService"])); };
SavingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SavingComponent, selectors: [["app-saving"]], viewQuery: function SavingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chipList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
    } }, decls: 30, vars: 12, consts: [[1, "saving"], ["mat-dialog-title", ""], ["autocomplete", "off", 1, "saving", 3, "formGroup"], ["appearance", "fill", "floatLabel", "floatLabelControl.value"], ["matInput", "", "type", "text", "id", "name", "formControlName", "name", "placeholder", "Ex: For\u00EAt Bor\u00E9al", 3, "required", "keyup"], ["name", ""], ["align", "end", 1, "mat-hint"], [4, "ngIf"], [1, "chip-list"], [1, "placeholder"], ["aria-label", "Tag selection"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["type", "text", "id", "tag", 3, "disabled", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "keyup", "keydown", "matChipInputTokenEnd"], ["tag", ""], ["align", "end"], ["class", "maxTags-notification", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "save", 3, "disabled", "click"], ["mat-button", "", "color", "warn", "mat-dialog-close", ""], [3, "removed"], ["matChipRemove", ""], [1, "maxTags-notification"]], template: function SavingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sauvegarde du dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nom du dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function SavingComponent_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8); return ctx.changeName(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Pas plus de 15 charact\u00E8res de long.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SavingComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SavingComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-placeholder", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00C9tiquettes du dessin:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-chip-list", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SavingComponent_mat_chip_18_Template, 4, 1, "mat-chip", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function SavingComponent_Template_input_keyup_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20); return ctx.currentTagInput(_r5.value); })("keydown", function SavingComponent_Template_input_keydown_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20); return ctx.currentTagInput(_r5.value); })("matChipInputTokenEnd", function SavingComponent_Template_input_matChipInputTokenEnd_19_listener($event) { return ctx.addTag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SavingComponent_mat_error_21_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Max 5 \u00E9tiquettes - Max 15 char./\u00E9tiquette.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SavingComponent_div_24_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SavingComponent_Template_button_click_26_listener() { return ctx.addDrawing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Sauvegarder");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ownerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasError("name", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasError("name", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.maxTags)("matChipInputFor", _r3)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasTagError(_r5.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.maxTags);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.ownerForm.valid || ctx.isSaveButtonDisabled);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatPlaceholder"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipInput"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipRemove"]], styles: [".saving[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 110%;\n  width: auto;\n}\n\n.chip-list[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n  margin-top: 30px;\n}\n\n.maxTags-notification[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.longTag-notification[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.placeholder[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYXZpbmcvc2F2aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NhdmluZy9zYXZpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2aW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gICAgaGVpZ2h0OiAxMTAlO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4uY2hpcC1saXN0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWF4VGFncy1ub3RpZmljYXRpb24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5sb25nVGFnLW5vdGlmaWNhdGlvbiB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SavingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-saving',
                templateUrl: './saving.component.html',
                styleUrls: ['./saving.component.scss'],
            }]
    }], function () { return [{ type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_9__["HotkeyService"] }, { type: _app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_10__["ServerResponseService"] }, { type: _app_services_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] }, { type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_8__["DrawingService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_11__["TextService"] }]; }, { chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['chipList']
        }], tagInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['tag']
        }] }); })();


/***/ }),

/***/ "QbMc":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/tools/circle-selection-attributes/circle-selection-attributes.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CircleSelectionAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleSelectionAttributesComponent", function() { return CircleSelectionAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/selection-services/circle-selection.service */ "6MVv");
/* harmony import */ var _shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/magnetism/magnetism.component */ "uozt");





class CircleSelectionAttributesComponent {
    constructor(circleSelectionService) {
        this.circleSelectionService = circleSelectionService;
    }
}
CircleSelectionAttributesComponent.ɵfac = function CircleSelectionAttributesComponent_Factory(t) { return new (t || CircleSelectionAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_1__["CircleSelectionService"])); };
CircleSelectionAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircleSelectionAttributesComponent, selectors: [["app-circle-selection-attributes"]], decls: 5, vars: 2, consts: [["id", "circleSelectionAttributes"], [1, "toolName"], [3, "service"]], template: function CircleSelectionAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-magnetism", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.circleSelectionService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("service", ctx.circleSelectionService);
    } }, directives: [_shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_2__["MagnetismComponent"]], styles: ["#circleSelectionAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\napp-magnetism[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9jaXJjbGUtc2VsZWN0aW9uLWF0dHJpYnV0ZXMvY2lyY2xlLXNlbGVjdGlvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29scy9jaXJjbGUtc2VsZWN0aW9uLWF0dHJpYnV0ZXMvY2lyY2xlLXNlbGVjdGlvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NpcmNsZVNlbGVjdGlvbkF0dHJpYnV0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XG59XG5cbmFwcC1tYWduZXRpc20ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRvb2xOYW1lIHtcbiAgICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleSelectionAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-circle-selection-attributes',
                templateUrl: './circle-selection-attributes.component.html',
                styleUrls: ['./circle-selection-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_1__["CircleSelectionService"] }]; }, null); })();


/***/ }),

/***/ "SXY0":
/*!***********************************************************************!*\
  !*** ./src/app/ressources/global-variables/canvas-resizing-points.ts ***!
  \***********************************************************************/
/*! exports provided: CANVAS_RESIZING_POINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_RESIZING_POINTS", function() { return CANVAS_RESIZING_POINTS; });
const CANVAS_RESIZING_POINTS = {
    VERTICAL: 'verticalCanvasResizePoint',
    HORIZONTAL: 'horizontalCanvasResizePoint',
    VERTICAL_AND_HORIZONTAL: 'verticalAndHorizontalCanvasResizePoint',
};


/***/ }),

/***/ "Spv2":
/*!***************************************************!*\
  !*** ./src/app/services/tools/polygon.service.ts ***!
  \***************************************************/
/*! exports provided: PolygonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonService", function() { return PolygonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_math_trigonometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/math/trigonometry */ "tW64");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/fill-styles */ "HwfQ");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/tools/circle.service */ "0+1q");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");















class PolygonService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__["Tool"] {
    constructor(drawingService, colorSelectionService, circleService, undoRedoStackService) {
        super(drawingService);
        this.colorSelectionService = colorSelectionService;
        this.circleService = circleService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_5__["TOOL_NAMES"].POLYGON_TOOL_NAME;
        this.trigonometry = new _app_classes_math_trigonometry__WEBPACK_IMPORTED_MODULE_1__["Trigonometry"]();
        this.minNumberOfSides = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["MIN_SIDES"];
        this.maxNumberOfSides = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_SIDES"];
        this.polygonData = {
            type: 'polygon',
            primaryColor: this.colorSelectionService.primaryColor,
            secondaryColor: this.colorSelectionService.secondaryColor,
            fillStyle: _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].FILL_AND_BORDER,
            lineWidth: 1,
            circleHeight: 0,
            circleWidth: 0,
            firstPoint: { x: 0, y: 0 },
            lastPoint: { x: 0, y: 0 },
            sides: 3,
        };
    }
    initialize() {
        this.drawingService.previewCtx.lineJoin = 'miter';
        this.drawingService.baseCtx.lineJoin = 'miter';
    }
    changeFillStyle(newFillStyle) {
        this.polygonData.fillStyle = newFillStyle;
    }
    changeWidth(newWidth) {
        this.polygonData.lineWidth = newWidth;
    }
    setSides(sides) {
        this.polygonData.sides = sides;
    }
    getFillStyle() {
        return this.polygonData.fillStyle;
    }
    getWidth() {
        return this.polygonData.lineWidth;
    }
    getSides() {
        return this.polygonData.sides;
    }
    setCenterX() {
        this.centerX = Math.abs(this.polygonData.firstPoint.y - this.polygonData.lastPoint.y);
    }
    setCenterY() {
        this.centerY = Math.abs(this.polygonData.firstPoint.y - this.polygonData.lastPoint.y);
    }
    setCircleWidth() {
        this.polygonData.circleWidth = Math.abs(this.polygonData.firstPoint.x - this.polygonData.lastPoint.x);
    }
    setCircleHeight() {
        this.polygonData.circleHeight = Math.abs(this.polygonData.firstPoint.y - this.polygonData.lastPoint.y);
    }
    onMouseDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        this.mouseDown = event.button === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["MouseButton"].LEFT;
        if (this.mouseDown) {
            this.polygonData.firstPoint = this.getPositionFromMouse(event);
            this.polygonData.lastPoint = this.getPositionFromMouse(event);
            this.undoRedoStackService.setIsToolInUse(true);
        }
    }
    onMouseUp(event) {
        if (this.mouseDown) {
            this.polygonData.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.updatePolygonDataColor();
            if (this.polygonData.firstPoint.x !== this.polygonData.lastPoint.x && this.polygonData.firstPoint.y !== this.polygonData.lastPoint.y) {
                this.drawPolygon(this.drawingService.baseCtx, this.polygonData);
                this.undoRedoStackService.updateStack(this.polygonData);
            }
            this.mouseDown = false;
            this.undoRedoStackService.setIsToolInUse(false);
            this.polygonData.circleWidth = 0;
            this.polygonData.circleHeight = 0;
        }
        this.drawingService.autoSave();
    }
    onMouseMove(event) {
        if (this.mouseDown) {
            this.polygonData.lastPoint = this.getPositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.center = this.trigonometry.getCenter(this.polygonData.firstPoint, this.polygonData.lastPoint);
            const currentLineWidth = this.drawingService.previewCtx.lineWidth;
            this.drawingService.previewCtx.lineWidth = 1;
            this.drawingService.previewCtx.strokeStyle = 'black';
            this.drawingService.previewCtx.setLineDash([_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_LENGTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_SPACE_LENGTH"]]);
            this.drawCircle(this.drawingService.previewCtx);
            this.drawingService.previewCtx.lineWidth = currentLineWidth;
            this.drawingService.previewCtx.setLineDash([0]);
            this.updatePolygonDataColor();
            this.drawPolygon(this.drawingService.previewCtx, this.polygonData);
        }
    }
    drawCircle(ctx) {
        this.circleService.setFillStyle(_app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].BORDER);
        this.circleService.ellipseData.firstPoint = this.polygonData.firstPoint;
        this.circleService.ellipseData.lastPoint = this.polygonData.lastPoint;
        this.circleService.drawCircle(ctx, this.trigonometry.findTopLeftPointCircle(this.polygonData.firstPoint, this.polygonData.lastPoint));
    }
    drawPolygon(ctx, polygonData) {
        ctx.fillStyle = polygonData.primaryColor;
        ctx.strokeStyle = polygonData.secondaryColor;
        ctx.lineWidth = polygonData.lineWidth;
        ctx.setLineDash([0]);
        if (this.polygonData.fillStyle === _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].FILL) {
            ctx.strokeStyle = this.colorSelectionService.primaryColor;
            ctx.lineWidth = 1;
        }
        this.polygonData.firstPoint = polygonData.firstPoint;
        this.polygonData.lastPoint = polygonData.lastPoint;
        this.setCircleHeight();
        this.setCircleWidth();
        const ellipseRadiusX = polygonData.circleWidth / 2;
        const ellipseRadiusY = polygonData.circleHeight / 2;
        let circleRadius = Math.min(ellipseRadiusX, ellipseRadiusY);
        const quadrant = this.trigonometry.findQuadrant(polygonData.firstPoint, polygonData.lastPoint);
        const center = { x: 0, y: 0 };
        switch (quadrant) {
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].BOTTOM_LEFT:
                center.x = polygonData.firstPoint.x - circleRadius;
                center.y = polygonData.firstPoint.y + circleRadius;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].TOP_LEFT:
                center.x = polygonData.firstPoint.x - circleRadius;
                center.y = polygonData.firstPoint.y - circleRadius;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].BOTTOM_RIGHT:
                center.x = polygonData.firstPoint.x + circleRadius;
                center.y = polygonData.firstPoint.y + circleRadius;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["Quadrant"].TOP_RIGHT:
                center.x = polygonData.firstPoint.x + circleRadius;
                center.y = polygonData.firstPoint.y - circleRadius;
                break;
        }
        ctx.beginPath();
        ctx.lineWidth = polygonData.lineWidth;
        if (circleRadius > ctx.lineWidth / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["LINE_WIDTH_POLYGON_CORRECTION"]) {
            circleRadius -= ctx.lineWidth / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["LINE_WIDTH_POLYGON_CORRECTION"];
            ctx.moveTo(center.x, center.y - circleRadius);
            for (let i = 0; i <= polygonData.sides + 1; i++) {
                ctx.lineTo(center.x + circleRadius * Math.cos((i * 2 * Math.PI) / polygonData.sides - Math.PI / 2), center.y + circleRadius * Math.sin((i * 2 * Math.PI) / polygonData.sides - Math.PI / 2));
            }
            if (this.polygonData.fillStyle !== _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].BORDER) {
                ctx.fill();
            }
        }
        ctx.stroke();
        ctx.closePath();
    }
    updatePolygonDataColor() {
        this.polygonData.primaryColor = this.colorSelectionService.primaryColor;
        this.polygonData.secondaryColor = this.colorSelectionService.secondaryColor;
    }
}
PolygonService.ɵfac = function PolygonService_Factory(t) { return new (t || PolygonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_8__["CircleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__["UndoRedoStackService"])); };
PolygonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolygonService, factory: PolygonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolygonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_6__["ColorSelectionService"] }, { type: _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_8__["CircleService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_9__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "UqM6":
/*!**************************************************!*\
  !*** ./src/app/services/tools/eraser.service.ts ***!
  \**************************************************/
/*! exports provided: EraserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraserService", function() { return EraserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");









class EraserService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, undoRedoStackService) {
        super(drawingService);
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAMES"].ERASER_TOOL_NAME;
        this.minToolWidth = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MIN_ERASER_TOOL_WIDTH"];
        this.eraserData = {
            type: 'eraser',
            path: [],
            lineWidth: 5,
            lineCap: 'square',
            fillStyle: 'white',
            primaryColor: 'white',
        };
        this.clearPath();
    }
    setCursor() {
        this.drawingService.gridCanvas.style.cursor = 'none';
    }
    onMouseDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        if (event.button !== _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].LEFT) {
            return;
        }
        else {
            this.mouseDown = true;
            this.clearPath();
            this.mouseDownCoord = this.getPositionFromMouse(event);
            this.eraserData.path.push(this.mouseDownCoord);
            this.drawRect(this.drawingService.previewCtx, this.eraserData.path);
            this.undoRedoStackService.setIsToolInUse(true);
        }
        this.squareCursor(event);
    }
    onMouseUp(event) {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            this.eraserData.path.push(mousePosition);
            this.drawEraserStroke(this.drawingService.baseCtx, this.eraserData);
            this.undoRedoStackService.updateStack(this.eraserData);
            this.undoRedoStackService.setIsToolInUse(false);
        }
        this.mouseDown = false;
        this.clearPath();
        this.drawingService.autoSave();
    }
    onMouseLeave() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.drawEraserStroke(this.drawingService.baseCtx, this.eraserData);
        this.clearPath();
    }
    onMouseMove(event) {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            this.eraserData.path.push(mousePosition);
            this.drawEraserStroke(this.drawingService.previewCtx, this.eraserData);
        }
        this.squareCursor(event);
    }
    squareCursor(event) {
        this.drawingService.previewCtx.lineWidth = 1;
        this.drawingService.previewCtx.strokeStyle = 'black';
        this.drawingService.previewCtx.fillStyle = 'white';
        this.drawingService.previewCtx.strokeRect(this.getPositionFromMouse(event).x - this.eraserData.lineWidth / 2, this.getPositionFromMouse(event).y - this.eraserData.lineWidth / 2, this.eraserData.lineWidth, this.eraserData.lineWidth);
        this.drawingService.previewCtx.fillRect(this.getPositionFromMouse(event).x - this.eraserData.lineWidth / 2, this.getPositionFromMouse(event).y - this.eraserData.lineWidth / 2, this.eraserData.lineWidth, this.eraserData.lineWidth);
    }
    drawEraserStroke(ctx, eraser) {
        ctx.lineWidth = eraser.lineWidth;
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'square';
        ctx.beginPath();
        for (const point of eraser.path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
    }
    changeWidth(newWidth) {
        this.eraserData.lineWidth = newWidth;
    }
    drawRect(ctx, path) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        for (const point of path) {
            ctx.rect(point.x - this.eraserData.lineWidth / 2, point.y - this.eraserData.lineWidth / 2, this.eraserData.lineWidth, this.eraserData.lineWidth);
        }
        ctx.fill();
        ctx.stroke();
    }
    clearPath() {
        this.eraserData.path = [];
    }
}
EraserService.ɵfac = function EraserService_Factory(t) { return new (t || EraserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_5__["UndoRedoStackService"])); };
EraserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EraserService, factory: EraserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EraserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_5__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "Uu7x":
/*!************************************************************************!*\
  !*** ./src/app/services/tools/transformation-services/move.service.ts ***!
  \************************************************************************/
/*! exports provided: MoveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveService", function() { return MoveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/arrow-keys */ "ijVN");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var _rotate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rotate.service */ "88n9");










class MoveService {
    constructor(drawingService, rotateService, undoRedoStackService) {
        this.drawingService = drawingService;
        this.rotateService = rotateService;
        this.undoRedoStackService = undoRedoStackService;
        this.initialSelection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.isTransformationOver = true;
        this.pressedKeys = new Map([
            [_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].LEFT, false],
            [_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].UP, false],
            [_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].RIGHT, false],
            [_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].DOWN, false],
        ]);
        this.intervalId = undefined;
        this.selectionImage = document.createElement('canvas');
    }
    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
    initialize(selection, selectionImage) {
        this.setSelection(this.initialSelection, selection);
        this.selection = selection;
        this.selectionImage = selectionImage;
    }
    snapOnGrid(event, baseCoordinates, squareSize) {
        let isArrowKey = false;
        switch (event.key) {
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].LEFT:
                this.selection.startingPoint.x -= baseCoordinates.x % squareSize;
                let changeYLeft = baseCoordinates.y % squareSize;
                if (changeYLeft > squareSize / 2) {
                    changeYLeft = changeYLeft - squareSize;
                }
                this.selection.startingPoint.y -= changeYLeft;
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].UP:
                this.selection.startingPoint.y -= baseCoordinates.y % squareSize;
                let changeXUp = baseCoordinates.x % squareSize;
                if (changeXUp > squareSize / 2) {
                    changeXUp = changeXUp - squareSize;
                }
                this.selection.startingPoint.x -= changeXUp;
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].RIGHT:
                if (baseCoordinates.x % squareSize !== 0)
                    this.selection.startingPoint.x += squareSize - (baseCoordinates.x % squareSize);
                let changeYRight = baseCoordinates.y % squareSize;
                if (changeYRight > squareSize / 2) {
                    changeYRight = changeYRight - squareSize;
                }
                this.selection.startingPoint.y -= changeYRight;
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].DOWN:
                if (baseCoordinates.y % squareSize !== 0)
                    this.selection.startingPoint.y += squareSize - (baseCoordinates.y % squareSize);
                let changeXDown = baseCoordinates.x % squareSize;
                if (changeXDown > squareSize / 2) {
                    changeXDown = changeXDown - squareSize;
                }
                this.selection.startingPoint.x -= changeXDown;
                break;
        }
        if (this.pressedKeys.has(event.key)) {
            this.pressedKeys.set(event.key, true);
            isArrowKey = true;
        }
        if (isArrowKey) {
            this.printSelectionOnPreview();
            this.isTransformationOver = false;
        }
    }
    onMouseDown(event) {
        this.isTransformationOver = false;
    }
    onMouseMove(movementX, movementY) {
        this.selection.startingPoint.x += movementX;
        this.selection.startingPoint.y += movementY;
        this.printSelectionOnPreview();
    }
    onKeyDown(event, isMagnetism, squareSize) {
        let isArrowKey = false;
        let moveStep = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["SELECTION_MOVE_STEP_SIZE"];
        if (isMagnetism) {
            moveStep = squareSize;
        }
        switch (event.key) {
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].LEFT:
                if (!this.pressedKeys.get(_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].LEFT)) {
                    this.selection.startingPoint.x -= moveStep;
                }
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].UP:
                if (!this.pressedKeys.get(_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].UP)) {
                    this.selection.startingPoint.y -= moveStep;
                }
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].RIGHT:
                if (!this.pressedKeys.get(_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].RIGHT)) {
                    this.selection.startingPoint.x += moveStep;
                }
                break;
            case _app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].DOWN:
                if (!this.pressedKeys.get(_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].DOWN)) {
                    this.selection.startingPoint.y += moveStep;
                }
                break;
        }
        if (this.pressedKeys.has(event.key)) {
            this.pressedKeys.set(event.key, true);
            isArrowKey = true;
        }
        setTimeout(() => {
            if (this.isArrowKeyPressed()) {
                this.undoRedoStackService.setIsToolInUse(true);
                if (!this.intervalId) {
                    this.intervalId = setInterval(this.move, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["KEY_PRESS_INTERVAL_DURATION"], this, isMagnetism, squareSize);
                }
            }
        }, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["CONFIRM_KEY_PRESS_DURATION"]);
        if (isArrowKey) {
            this.printSelectionOnPreview();
            this.isTransformationOver = false;
        }
    }
    onKeyUp(event) {
        if (this.pressedKeys.has(event.key)) {
            this.pressedKeys.set(event.key, false);
            this.undoRedoStackService.setIsToolInUse(false);
        }
        if (this.intervalId) {
            if (!this.isArrowKeyPressed()) {
                clearInterval(this.intervalId);
                this.intervalId = undefined;
            }
        }
    }
    clearSelectionBackground() {
        const currentFillStyle = this.drawingService.previewCtx.fillStyle;
        this.drawingService.previewCtx.fillStyle = 'white';
        this.drawingService.previewCtx.fillRect(this.initialSelection.startingPoint.x, this.initialSelection.startingPoint.y, this.initialSelection.width, this.initialSelection.height);
        this.drawingService.previewCtx.globalCompositeOperation = 'destination-in';
        this.drawingService.previewCtx.drawImage(this.selectionImage, this.initialSelection.startingPoint.x, this.initialSelection.startingPoint.y);
        this.drawingService.previewCtx.globalCompositeOperation = 'source-over';
        this.drawingService.previewCtx.fillStyle = currentFillStyle;
    }
    printSelectionOnPreview() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.clearSelectionBackground();
        this.drawingService.previewCtx.save();
        this.rotateService.rotatePreviewCanvas();
        this.drawingService.previewCtx.drawImage(this.selectionImage, this.selection.startingPoint.x, this.selection.startingPoint.y);
        this.drawingService.previewCtx.restore();
    }
    move(self, isMagnetism, squareSize) {
        let moveStep = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["SELECTION_MOVE_STEP_SIZE"];
        if (isMagnetism) {
            moveStep = squareSize;
        }
        if (self.pressedKeys.get(_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].LEFT)) {
            self.selection.startingPoint.x -= moveStep;
        }
        if (self.pressedKeys.get(_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].UP)) {
            self.selection.startingPoint.y -= moveStep;
        }
        if (self.pressedKeys.get(_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].RIGHT)) {
            self.selection.startingPoint.x += moveStep;
        }
        if (self.pressedKeys.get(_app_ressources_global_variables_arrow_keys__WEBPACK_IMPORTED_MODULE_1__["ARROW_KEYS"].DOWN)) {
            self.selection.startingPoint.y += moveStep;
        }
        self.printSelectionOnPreview();
    }
    isArrowKeyPressed() {
        for (const [key] of this.pressedKeys) {
            if (this.pressedKeys.get(key)) {
                return true;
            }
        }
        return false;
    }
    setSelection(selection, incomingSelection) {
        selection.startingPoint.x = incomingSelection.startingPoint.x;
        selection.startingPoint.y = incomingSelection.startingPoint.y;
        selection.width = incomingSelection.width;
        selection.height = incomingSelection.height;
    }
}
MoveService.ɵfac = function MoveService_Factory(t) { return new (t || MoveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rotate_service__WEBPACK_IMPORTED_MODULE_5__["RotateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__["UndoRedoStackService"])); };
MoveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoveService, factory: MoveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"] }, { type: _rotate_service__WEBPACK_IMPORTED_MODULE_5__["RotateService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_4__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "V0iU":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tools/text-attributes/text-attributes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/text */ "hZmb");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/tools/text.service */ "2Eww");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














const _c0 = ["textSizeInput"];
class TextComponent {
    constructor(textService, hotkeyService) {
        this.textService = textService;
        this.hotkeyService = hotkeyService;
        this.fontStyle = {
            GEORGIA: _app_ressources_global_variables_text__WEBPACK_IMPORTED_MODULE_2__["FONTS"].GEORGIA,
            ARIAL: _app_ressources_global_variables_text__WEBPACK_IMPORTED_MODULE_2__["FONTS"].ARIAL,
            TIME_NEW_ROMAN: _app_ressources_global_variables_text__WEBPACK_IMPORTED_MODULE_2__["FONTS"].TIME_NEW_ROMAN,
            VERDANA: _app_ressources_global_variables_text__WEBPACK_IMPORTED_MODULE_2__["FONTS"].VERDANA,
            COURIER_NEW: _app_ressources_global_variables_text__WEBPACK_IMPORTED_MODULE_2__["FONTS"].COURIER_NEW,
        };
        this.maxTextSize = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_TEXT_TOOL_SIZE"];
        this.minTextSize = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MIN_TEXT_TOOL_SIZE"];
        this.textSize = this.textService.textSize;
    }
    changeFont(font) {
        this.textService.font = font;
        this.textService.applyTextStyle();
    }
    changeSize(size) {
        size = Number(size);
        if (isNaN(size) || size < _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MIN_TEXT_TOOL_SIZE"] || size > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_TEXT_TOOL_SIZE"] || size.toString() === '') {
            alert('La taille du texte doit être un nombre entre 10 et 100.');
        }
        else {
            this.textSize = size;
            this.textService.textSize = size;
            this.textService.applyTextStyle();
        }
    }
    changeItalic(style) {
        if (style) {
            this.textService.italicText = 'italic';
        }
        else {
            this.textService.italicText = 'normal';
        }
        this.textService.applyTextStyle();
    }
    changeBoldText(bold) {
        if (bold) {
            this.textService.boldText = 'bold';
        }
        else {
            this.textService.boldText = 'normal';
        }
        this.textService.applyTextStyle();
    }
    changeAlignment(align) {
        this.textService.align = align;
        this.textService.applyTextStyle();
    }
    ngOnDestroy() {
        this.textService.createText();
    }
    onFocus() {
        this.hotkeyService.isHotkeyEnabled = false;
        this.textService.isWritingEnable = false;
    }
    onFocusOut() {
        this.textService.isWritingEnable = true;
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.textSizeInput.nativeElement.blur();
            event.stopPropagation();
        }
    }
}
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_4__["TextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_3__["HotkeyService"])); };
TextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextComponent, selectors: [["app-text-attributes"]], viewQuery: function TextComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textSizeInput = _t.first);
    } }, decls: 53, vars: 10, consts: [["id", "textAttributes"], [1, "toolName"], ["appearance", "fill"], [3, "value", "selectionChange"], [3, "value"], ["id", "sizeDetail"], ["type", "text", 3, "value", "min", "max", "valueChange", "change", "keydown", "focus", "focusout"], ["textSizeInput", ""], [3, "click"], ["id", "style"], [3, "change"], ["italic", ""], ["gras", ""], ["group", "matButtonToggleGroup"], ["value", "start", "checked", "", 3, "change"], ["value", "center", 3, "change"], ["value", "end", 3, "change"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Police");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TextComponent_Template_mat_select_selectionChange_7_listener($event) { return ctx.changeFont($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Georgia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Arial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Times New Roman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Verdana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Courier New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Taille");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TextComponent_Template_input_valueChange_22_listener($event) { return ctx.textSize = $event; })("change", function TextComponent_Template_input_change_22_listener($event) { return ctx.changeSize($event.target.value); })("keydown", function TextComponent_Template_input_keydown_22_listener($event) { return ctx.onKeyDown($event); })("focus", function TextComponent_Template_input_focus_22_listener() { return ctx.onFocus(); })("focusout", function TextComponent_Template_input_focusout_22_listener() { return ctx.onFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextComponent_Template_button_click_25_listener() { return ctx.changeSize(ctx.textSize - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextComponent_Template_button_click_27_listener() { return ctx.changeSize(ctx.textSize + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-checkbox", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TextComponent_Template_mat_checkbox_change_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx.changeItalic(_r1.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Italique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-checkbox", 10, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TextComponent_Template_mat_checkbox_change_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return ctx.changeBoldText(_r2.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Gras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Alignement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-button-toggle-group", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TextComponent_Template_mat_button_toggle_change_44_listener($event) { return ctx.changeAlignment($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "format_align_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-button-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TextComponent_Template_mat_button_toggle_change_47_listener($event) { return ctx.changeAlignment($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "format_align_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-button-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TextComponent_Template_mat_button_toggle_change_50_listener($event) { return ctx.changeAlignment($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "format_align_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fontStyle.GEORGIA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fontStyle.GEORGIA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fontStyle.ARIAL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fontStyle.TIME_NEW_ROMAN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fontStyle.VERDANA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fontStyle.COURIER_NEW);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.textSize)("min", ctx.minTextSize)("max", ctx.maxTextSize);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: ["#textAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n#style[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n#style[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  margin: 2px;\n  font-size: medium;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 10x 0px 0px 0px;\n  font-size: 12px;\n}\n\n#sizeDetail[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  width: 80%;\n  justify-content: space-between;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 90%;\n  margin: 0;\n}\n\n#sizeDetail[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  line-height: 20px;\n}\n\n#sizeDetail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 26px;\n  line-height: 20px;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\nmat-button-toggle-group[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy90ZXh0LWF0dHJpYnV0ZXMvdGV4dC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xzL3RleHQtYXR0cmlidXRlcy90ZXh0LWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGV4dEF0dHJpYnV0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjZmNmY2Y7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udG9vbE5hbWUge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4jc3R5bGUge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4jc3R5bGUgbWF0LWNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMnB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDEweCAwcHggMHB4IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbiNzaXplRGV0YWlsIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jc2l6ZURldGFpbCBpbnB1dCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuI3NpemVEZXRhaWwgYnV0dG9uIHtcbiAgICB3aWR0aDogMjZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIG1hcmdpbjogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-attributes',
                templateUrl: './text-attributes.component.html',
                styleUrls: ['./text-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_4__["TextService"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_3__["HotkeyService"] }]; }, { textSizeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['textSizeInput', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "VM6T":
/*!*************************************************************************************!*\
  !*** ./src/app/components/tools/pipette-attributes/pipette-attributes.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PipetteAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipetteAttributesComponent", function() { return PipetteAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/pipette.service */ "2Npv");




const _c0 = ["zoom"];
class PipetteAttributesComponent {
    constructor(pipetteService) {
        this.pipetteService = pipetteService;
    }
    ngOnInit() {
        this.pipetteService.mouseOut.subscribe((data) => {
            data ? (this.zoom.nativeElement.style.visibility = 'visible') : (this.zoom.nativeElement.style.visibility = 'hidden');
        });
    }
    ngAfterViewInit() {
        this.zoom.nativeElement.style.visibility = 'hidden';
        this.zoomCtx = this.zoom.nativeElement.getContext('2d');
        this.pipetteService.zoomCtx = this.zoomCtx;
        this.pipetteService.zoom = this.zoom.nativeElement;
    }
}
PipetteAttributesComponent.ɵfac = function PipetteAttributesComponent_Factory(t) { return new (t || PipetteAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_1__["PipetteService"])); };
PipetteAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipetteAttributesComponent, selectors: [["app-pipette-attributes"]], viewQuery: function PipetteAttributesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.zoom = _t.first);
    } }, decls: 6, vars: 1, consts: [["id", "pipetteAttributes"], [1, "toolName"], ["id", "zoom", "width", "150px", "height", "150px"], ["zoom", ""]], template: function PipetteAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pipetteService.name);
    } }, styles: ["#pipetteAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n#zoom[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9waXBldHRlLWF0dHJpYnV0ZXMvcGlwZXR0ZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvcGlwZXR0ZS1hdHRyaWJ1dGVzL3BpcGV0dGUtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaXBldHRlQXR0cmlidXRlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50b29sTmFtZSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbiN6b29tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipetteAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pipette-attributes',
                templateUrl: './pipette-attributes.component.html',
                styleUrls: ['./pipette-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_1__["PipetteService"] }]; }, { zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['zoom', { static: false }]
        }] }); })();


/***/ }),

/***/ "Vuel":
/*!*********************************************************!*\
  !*** ./src/app/components/drawing/drawing.component.ts ***!
  \*********************************************************/
/*! exports provided: DrawingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingComponent", function() { return DrawingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/continue-drawing/continue-drawing.service */ "L+iO");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/resize-drawing/resize-drawing.service */ "JXhA");
/* harmony import */ var _app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/tool-selection/tool-selection.service */ "zEF1");










const _c0 = ["baseCanvas"];
const _c1 = ["previewCanvas"];
const _c2 = ["gridCanvas"];
class DrawingComponent {
    constructor(drawingService, toolSelectionService, resizeDrawingService, continueDrawingService) {
        this.drawingService = drawingService;
        this.toolSelectionService = toolSelectionService;
        this.resizeDrawingService = resizeDrawingService;
        this.continueDrawingService = continueDrawingService;
    }
    ngAfterViewInit() {
        this.baseCtx = this.baseCanvas.nativeElement.getContext('2d');
        this.previewCtx = this.previewCanvas.nativeElement.getContext('2d');
        this.gridCtx = this.gridCanvas.nativeElement.getContext('2d');
        this.drawingService.baseCtx = this.baseCtx;
        this.drawingService.gridCtx = this.gridCtx;
        this.drawingService.previewCtx = this.previewCtx;
        this.drawingService.canvas = this.baseCanvas.nativeElement;
        this.drawingService.previewCanvas = this.previewCanvas.nativeElement;
        this.drawingService.gridCanvas = this.gridCanvas.nativeElement;
        this.toolSelectionService.setCurrentToolCursor();
    }
    onMouseMove(event) {
        this.toolSelectionService.currentToolMouseMove(event);
    }
    onMouseDown(event) {
        this.toolSelectionService.currentToolMouseDown(event);
    }
    onMouseUp(event) {
        this.toolSelectionService.currentToolMouseUp(event);
    }
    onMouseLeave() {
        this.toolSelectionService.currentToolMouseLeave();
    }
    onMouseEnter(event) {
        this.toolSelectionService.currentToolMouseEnter(event);
    }
    onMouseWheel(event) {
        this.toolSelectionService.currentToolWheelEvent(event);
    }
    get width() {
        return this.canvasSize.x;
    }
    get height() {
        return this.canvasSize.y;
    }
}
DrawingComponent.ɵfac = function DrawingComponent_Factory(t) { return new (t || DrawingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_4__["ToolSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__["ResizeDrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_1__["ContinueDrawingService"])); };
DrawingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawingComponent, selectors: [["app-drawing"]], viewQuery: function DrawingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.baseCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.previewCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridCanvas = _t.first);
    } }, hostBindings: function DrawingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function DrawingComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); })("mousedown", function DrawingComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mouseup", function DrawingComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); })("mouseleave", function DrawingComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); })("mouseenter", function DrawingComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event); })("mousewheel", function DrawingComponent_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheel($event); });
    } }, inputs: { canvasSize: "canvasSize", previewSize: "previewSize" }, decls: 7, vars: 6, consts: [["id", "canvas-container"], ["id", "canvas"], ["baseCanvas", ""], ["id", "previewLayer"], ["previewCanvas", ""], ["id", "gridLayer"], ["gridCanvas", ""]], template: function DrawingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "canvas", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.width)("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.width)("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.width)("height", ctx.height);
    } }, styles: ["canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  z-index: 0;\n  background-color: #ffffff;\n  border-bottom: 3px;\n  border-right: 3px;\n  border-top: 0px;\n  border-left: 0px;\n  border-style: solid;\n  border-color: #3b3737;\n}\n\n#drawCanvas[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n#canvas-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcmF3aW5nL2RyYXdpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJhd2luZy9kcmF3aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG59XG5cbiNjYW52YXMge1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAzcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXRvcDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICMzYjM3Mzc7XG59XG5cbiNkcmF3Q2FudmFzIHtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4jY2FudmFzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drawing',
                templateUrl: './drawing.component.html',
                styleUrls: ['./drawing.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"] }, { type: _app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_4__["ToolSelectionService"] }, { type: _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_3__["ResizeDrawingService"] }, { type: _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_1__["ContinueDrawingService"] }]; }, { baseCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['baseCanvas', { static: false }]
        }], previewCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['previewCanvas', { static: false }]
        }], gridCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gridCanvas', { static: false }]
        }], canvasSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previewSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], onMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave', ['$event']]
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter', ['$event']]
        }], onMouseWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousewheel', ['$event']]
        }] }); })();


/***/ }),

/***/ "WfQD":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        const func = (e) => {
            e.preventDefault();
        };
        document.addEventListener('contextmenu', func, false);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%], div.cdk-overlay-container[_ngcontent-%COMP%]   mat-select-panel[_ngcontent-%COMP%] {\n  z-index: 1001;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcixcbmRpdi5jZGstb3ZlcmxheS1jb250YWluZXIgbWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgei1pbmRleDogMTAwMTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XDV4":
/*!*********************************!*\
  !*** ./src/app/classes/tool.ts ***!
  \*********************************/
/*! exports provided: Tool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tool", function() { return Tool; });
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");

// disabling ts lint because methods have to be empty since they are implemented in the inhereting classes (polymorphism)
// tslint:disable:no-empty
class Tool {
    constructor(drawingService) {
        this.drawingService = drawingService;
        this.mouseDown = false;
        this.maxToolWidth = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_0__["MAX_TOOL_WIDTH"];
        this.minToolWidth = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_0__["MIN_TOOL_WIDTH"];
        this.maxBorderWidth = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_0__["MAX_BORDER"];
        this.minBorderWidth = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_0__["MIN_BORDER"];
    }
    onMouseDown(event) { }
    onMouseUp(event) { }
    onMouseMove(event) { }
    onMouseLeave() { }
    onMouseEnter(event) { }
    onKeyDown(event) { }
    onKeyPress(event) { }
    onKeyUp(event) { }
    onWheelEvent(event) { }
    getPositionFromMouse(event) {
        return { x: event.offsetX, y: event.offsetY };
    }
    setCursor() {
        this.drawingService.gridCanvas.style.cursor = 'crosshair';
    }
    reset() { }
    initialize() { }
}


/***/ }),

/***/ "XRzb":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/tools/shared-Attributes/fill-types-selection/fill-types-selection.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: FillTypesSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillTypesSelectionComponent", function() { return FillTypesSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/fill-styles */ "HwfQ");



class FillTypesSelectionComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fillStyles = {
            FILL_AND_BORDER: _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_1__["FILL_STYLES"].FILL_AND_BORDER,
            FILL: _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_1__["FILL_STYLES"].FILL,
            BORDER: _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_1__["FILL_STYLES"].BORDER,
            DASHED: _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_1__["FILL_STYLES"].DASHED,
        };
    }
    changeValue(event) {
        const target = event.target;
        this.valueChange.emit(Number(target.value));
    }
}
FillTypesSelectionComponent.ɵfac = function FillTypesSelectionComponent_Factory(t) { return new (t || FillTypesSelectionComponent)(); };
FillTypesSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FillTypesSelectionComponent, selectors: [["app-fill-types-selection"]], inputs: { currentFillStyle: "currentFillStyle" }, outputs: { valueChange: "valueChange" }, decls: 16, vars: 6, consts: [[1, "typeOfFill"], [1, "title"], [1, "radioContainer"], ["type", "radio", "name", "typeOfFill", 3, "value", "checked", "change"]], template: function FillTypesSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type de trac\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FillTypesSelectionComponent_Template_input_change_5_listener($event) { return ctx.changeValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Plein avec contour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FillTypesSelectionComponent_Template_input_change_9_listener($event) { return ctx.changeValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Plein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FillTypesSelectionComponent_Template_input_change_13_listener($event) { return ctx.changeValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fillStyles.FILL_AND_BORDER)("checked", ctx.currentFillStyle === ctx.fillStyles.FILL_AND_BORDER);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fillStyles.FILL)("checked", ctx.currentFillStyle === ctx.fillStyles.FILL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.fillStyles.BORDER)("checked", ctx.currentFillStyle === ctx.fillStyles.BORDER);
    } }, styles: [".radioContainer[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-items: flex-start;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 12px;\n}\n\n.typeOfFill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9zaGFyZWQtQXR0cmlidXRlcy9maWxsLXR5cGVzLXNlbGVjdGlvbi9maWxsLXR5cGVzLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvc2hhcmVkLUF0dHJpYnV0ZXMvZmlsbC10eXBlcy1zZWxlY3Rpb24vZmlsbC10eXBlcy1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW9Db250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnR5cGVPZkZpbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FillTypesSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fill-types-selection',
                templateUrl: './fill-types-selection.component.html',
                styleUrls: ['./fill-types-selection.component.scss'],
            }]
    }], null, { currentFillStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "XcmA":
/*!*************************************************************************!*\
  !*** ./src/app/components/attribute-panel/attribute-panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: AttributePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePanelComponent", function() { return AttributePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/tool-selection/tool-selection.service */ "zEF1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grid/grid.component */ "m4bG");
/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-picker/color-picker.component */ "CUwC");
/* harmony import */ var _tools_pencil_attributes_pencil_attributes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/pencil-attributes/pencil-attributes.component */ "w0tv");
/* harmony import */ var _tools_pen_attributes_pen_attributes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/pen-attributes/pen-attributes.component */ "NRvI");
/* harmony import */ var _tools_brush_attributes_brush_attributes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/brush-attributes/brush-attributes.component */ "vaeZ");
/* harmony import */ var _tools_spray_attributes_spray_attributes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools/spray-attributes/spray-attributes.component */ "Kbhk");
/* harmony import */ var _tools_stamp_attributes_stamp_attributes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tools/stamp-attributes/stamp-attributes.component */ "qgPj");
/* harmony import */ var _tools_square_attributes_square_attributes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tools/square-attributes/square-attributes.component */ "ph8/");
/* harmony import */ var _tools_circle_attributes_circle_attributes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tools/circle-attributes/circle-attributes.component */ "hAYi");
/* harmony import */ var _tools_line_attributes_line_attributes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tools/line-attributes/line-attributes.component */ "Zal2");
/* harmony import */ var _tools_fill_attributes_fill_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tools/fill-attributes/fill-attributes.component */ "f93k");
/* harmony import */ var _tools_eraser_attributes_eraser_attributes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tools/eraser-attributes/eraser-attributes.component */ "mdC4");
/* harmony import */ var _tools_text_attributes_text_attributes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tools/text-attributes/text-attributes.component */ "V0iU");
/* harmony import */ var _tools_polygon_attributes_polygon_attributes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../tools/polygon-attributes/polygon-attributes.component */ "HpQq");
/* harmony import */ var _tools_circle_selection_attributes_circle_selection_attributes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../tools/circle-selection-attributes/circle-selection-attributes.component */ "QbMc");
/* harmony import */ var _tools_square_selection_attributes_square_selection_attributes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../tools/square-selection-attributes/square-selection-attributes.component */ "jTK1");
/* harmony import */ var _tools_magic_wand_attributes_magic_wand_attributes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../tools/magic-wand-attributes/magic-wand-attributes.component */ "1/UG");
/* harmony import */ var _tools_pipette_attributes_pipette_attributes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../tools/pipette-attributes/pipette-attributes.component */ "VM6T");
























function AttributePanelComponent_div_1_app_pencil_attributes_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pencil-attributes");
} }
function AttributePanelComponent_div_1_app_pen_attributes_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pen-attributes");
} }
function AttributePanelComponent_div_1_app_brush_attributes_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-brush-attributes");
} }
function AttributePanelComponent_div_1_app_spray_attributes_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spray-attributes");
} }
function AttributePanelComponent_div_1_app_stamp_attributes_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stamp-attributes");
} }
function AttributePanelComponent_div_1_app_square_attributes_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-square-attributes");
} }
function AttributePanelComponent_div_1_app_circle_attributes_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-circle-attributes");
} }
function AttributePanelComponent_div_1_app_line_attributes_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-line-attributes");
} }
function AttributePanelComponent_div_1_app_fill_attributes_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-fill-attributes");
} }
function AttributePanelComponent_div_1_app_eraser_attributes_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-eraser-attributes");
} }
function AttributePanelComponent_div_1_app_text_attributes_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-text-attributes");
} }
function AttributePanelComponent_div_1_app_polygon_attributes_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-polygon-attributes");
} }
function AttributePanelComponent_div_1_app_circle_selection_attributes_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-circle-selection-attributes");
} }
function AttributePanelComponent_div_1_app_square_selection_attributes_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-square-selection-attributes");
} }
function AttributePanelComponent_div_1_app_magic_wand_attributes_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-magic-wand-attributes");
} }
function AttributePanelComponent_div_1_app_pipette_attributes_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pipette-attributes");
} }
function AttributePanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributePanelComponent_div_1_app_pencil_attributes_1_Template, 1, 0, "app-pencil-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttributePanelComponent_div_1_app_pen_attributes_2_Template, 1, 0, "app-pen-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributePanelComponent_div_1_app_brush_attributes_3_Template, 1, 0, "app-brush-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributePanelComponent_div_1_app_spray_attributes_4_Template, 1, 0, "app-spray-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AttributePanelComponent_div_1_app_stamp_attributes_5_Template, 1, 0, "app-stamp-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AttributePanelComponent_div_1_app_square_attributes_6_Template, 1, 0, "app-square-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributePanelComponent_div_1_app_circle_attributes_7_Template, 1, 0, "app-circle-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AttributePanelComponent_div_1_app_line_attributes_8_Template, 1, 0, "app-line-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AttributePanelComponent_div_1_app_fill_attributes_9_Template, 1, 0, "app-fill-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AttributePanelComponent_div_1_app_eraser_attributes_10_Template, 1, 0, "app-eraser-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AttributePanelComponent_div_1_app_text_attributes_11_Template, 1, 0, "app-text-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AttributePanelComponent_div_1_app_polygon_attributes_12_Template, 1, 0, "app-polygon-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AttributePanelComponent_div_1_app_circle_selection_attributes_13_Template, 1, 0, "app-circle-selection-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AttributePanelComponent_div_1_app_square_selection_attributes_14_Template, 1, 0, "app-square-selection-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AttributePanelComponent_div_1_app_magic_wand_attributes_15_Template, 1, 0, "app-magic-wand-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AttributePanelComponent_div_1_app_pipette_attributes_16_Template, 1, 0, "app-pipette-attributes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.PENCIL_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.PEN_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.BRUSH_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.SPRAY_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.STAMP_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.SQUARE_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.CIRCLE_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.LINE_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.FILL_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.ERASER_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.TEXT_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.POLYGON_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.CIRCLE_SELECTION_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.SQUARE_SELECTION_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.MAGIC_WAND_TOOL_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toolSelectionService.currentTool.name === ctx_r0.toolNames.PIPETTE_TOOL_NAME);
} }
class AttributePanelComponent {
    constructor(toolSelectionService) {
        this.toolSelectionService = toolSelectionService;
        this.toolNames = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_1__["TOOL_NAMES"];
    }
}
AttributePanelComponent.ɵfac = function AttributePanelComponent_Factory(t) { return new (t || AttributePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_2__["ToolSelectionService"])); };
AttributePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributePanelComponent, selectors: [["app-attribute-panel"]], decls: 5, vars: 1, consts: [[1, "attribute-panel"], ["class", "container", 4, "ngIf"], ["id", "modifiers"], [1, "container"], [4, "ngIf"]], template: function AttributePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributePanelComponent_div_1_Template, 17, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-color-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toolSelectionService.currentTool);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_5__["ColorPickerComponent"], _tools_pencil_attributes_pencil_attributes_component__WEBPACK_IMPORTED_MODULE_6__["PencilAttributesComponent"], _tools_pen_attributes_pen_attributes_component__WEBPACK_IMPORTED_MODULE_7__["PenAttributesComponent"], _tools_brush_attributes_brush_attributes_component__WEBPACK_IMPORTED_MODULE_8__["BrushAttributesComponent"], _tools_spray_attributes_spray_attributes_component__WEBPACK_IMPORTED_MODULE_9__["SprayAttributesComponent"], _tools_stamp_attributes_stamp_attributes_component__WEBPACK_IMPORTED_MODULE_10__["StampAttributesComponent"], _tools_square_attributes_square_attributes_component__WEBPACK_IMPORTED_MODULE_11__["SquareAttributesComponent"], _tools_circle_attributes_circle_attributes_component__WEBPACK_IMPORTED_MODULE_12__["CircleAttributesComponent"], _tools_line_attributes_line_attributes_component__WEBPACK_IMPORTED_MODULE_13__["LineAttributesComponent"], _tools_fill_attributes_fill_attributes_component__WEBPACK_IMPORTED_MODULE_14__["FillAttributesComponent"], _tools_eraser_attributes_eraser_attributes_component__WEBPACK_IMPORTED_MODULE_15__["EraserAttributesComponent"], _tools_text_attributes_text_attributes_component__WEBPACK_IMPORTED_MODULE_16__["TextComponent"], _tools_polygon_attributes_polygon_attributes_component__WEBPACK_IMPORTED_MODULE_17__["PolygonAttributesComponent"], _tools_circle_selection_attributes_circle_selection_attributes_component__WEBPACK_IMPORTED_MODULE_18__["CircleSelectionAttributesComponent"], _tools_square_selection_attributes_square_selection_attributes_component__WEBPACK_IMPORTED_MODULE_19__["SquareSelectionAttributesComponent"], _tools_magic_wand_attributes_magic_wand_attributes_component__WEBPACK_IMPORTED_MODULE_20__["MagicWandAttributesComponent"], _tools_pipette_attributes_pipette_attributes_component__WEBPACK_IMPORTED_MODULE_21__["PipetteAttributesComponent"]], styles: [".attribute-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  width: 150px;\n  background-color: #f0f0f0;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdHRyaWJ1dGUtcGFuZWwvYXR0cmlidXRlLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F0dHJpYnV0ZS1wYW5lbC9hdHRyaWJ1dGUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXR0cmlidXRlLXBhbmVsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attribute-panel',
                templateUrl: './attribute-panel.component.html',
                styleUrls: ['./attribute-panel.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_2__["ToolSelectionService"] }]; }, null); })();


/***/ }),

/***/ "Xtub":
/*!***********************************************************!*\
  !*** ./src/app/ressources/global-variables/tool-names.ts ***!
  \***********************************************************/
/*! exports provided: TOOL_NAMES, TOOL_NAMES_ARRAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_NAMES", function() { return TOOL_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_NAMES_ARRAY", function() { return TOOL_NAMES_ARRAY; });
const TOOL_NAMES = {
    PENCIL_TOOL_NAME: 'Crayon',
    PEN_TOOL_NAME: 'Plume',
    BRUSH_TOOL_NAME: 'Pinceau',
    SPRAY_TOOL_NAME: 'Aérosol',
    SQUARE_TOOL_NAME: 'Rectangle',
    CIRCLE_TOOL_NAME: 'Ellipse',
    LINE_TOOL_NAME: 'Ligne',
    FILL_TOOL_NAME: 'Sceau',
    ERASER_TOOL_NAME: 'Efface',
    SQUARE_SELECTION_TOOL_NAME: 'Sélection - Rectangle',
    CIRCLE_SELECTION_TOOL_NAME: 'Sélection - Ellipse',
    PIPETTE_TOOL_NAME: 'Pipette',
    POLYGON_TOOL_NAME: 'Polygone',
    TEXT_TOOL_NAME: 'Texte',
    STAMP_TOOL_NAME: 'Étampe',
    MAGIC_WAND_TOOL_NAME: 'Baguette Magique',
};
const TOOL_NAMES_ARRAY = [
    TOOL_NAMES.PENCIL_TOOL_NAME,
    TOOL_NAMES.PEN_TOOL_NAME,
    TOOL_NAMES.BRUSH_TOOL_NAME,
    TOOL_NAMES.SPRAY_TOOL_NAME,
    TOOL_NAMES.SQUARE_TOOL_NAME,
    TOOL_NAMES.CIRCLE_TOOL_NAME,
    TOOL_NAMES.LINE_TOOL_NAME,
    TOOL_NAMES.FILL_TOOL_NAME,
    TOOL_NAMES.ERASER_TOOL_NAME,
    TOOL_NAMES.PIPETTE_TOOL_NAME,
    TOOL_NAMES.SQUARE_SELECTION_TOOL_NAME,
    TOOL_NAMES.CIRCLE_SELECTION_TOOL_NAME,
    TOOL_NAMES.POLYGON_TOOL_NAME,
    TOOL_NAMES.TEXT_TOOL_NAME,
    TOOL_NAMES.STAMP_TOOL_NAME,
    TOOL_NAMES.MAGIC_WAND_TOOL_NAME,
];


/***/ }),

/***/ "Y39l":
/*!*********************************************************************!*\
  !*** ./src/app/services/server-response/server-response.service.ts ***!
  \*********************************************************************/
/*! exports provided: ServerResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerResponseService", function() { return ServerResponseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");





class ServerResponseService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    loadErrorSnackBar() {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        this.snackBar.open('Erreur dans le chargement du dessin', 'Fermer', config);
    }
    saveErrorSnackBar() {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        this.snackBar.open('Erreur dans la sauvegarde du dessin', 'Fermer', config);
    }
    deleteErrorSnackBar() {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        this.snackBar.open('Erreur dans la suppression du dessin', 'Fermer', config);
    }
    saveConfirmSnackBar() {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.duration = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["CONFIRM_SAVED_DURATION"];
        this.snackBar.open('Le dessin a été sauvegardé', 'Fermer', config);
    }
    sendMailConfirmSnackBar() {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.duration = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["CONFIRM_SAVED_DURATION"];
        this.snackBar.open('Le courriel est bien envoyé', 'Fermer', config);
    }
    sendMailErrorSnackBar() {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        this.snackBar.open("Erreur dans l'envoie du courriel", 'Fermer', config);
    }
}
ServerResponseService.ɵfac = function ServerResponseService_Factory(t) { return new (t || ServerResponseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
ServerResponseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServerResponseService, factory: ServerResponseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerResponseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "YJIf":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/drawing/drawing.component */ "Vuel");
/* harmony import */ var _app_ressources_global_variables_canvas_resizing_points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/canvas-resizing-points */ "SXY0");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/resize-drawing/resize-drawing.service */ "JXhA");
/* harmony import */ var _app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/tool-selection/tool-selection.service */ "zEF1");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _attribute_panel_attribute_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attribute-panel/attribute-panel.component */ "XcmA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");















const _c0 = ["drawingComponent"];
const _c1 = ["workSpace"];
const _c2 = ["previewDiv"];
const _c3 = function (a0, a1) { return { height: a0, width: a1 }; };
const _c4 = function (a0, a1) { return { "top.px": a0, "left.px": a1 }; };
class EditorComponent {
    constructor(hotkeyService, toolSelectionService, resizeDrawingService) {
        this.hotkeyService = hotkeyService;
        this.toolSelectionService = toolSelectionService;
        this.resizeDrawingService = resizeDrawingService;
        this.workSpaceSize = { x: _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MINIMUM_WORKSPACE_WIDTH"], y: _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MINIMUM_WORKSPACE_HEIGHT"] };
        this.previewSize = { x: _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MINIMUM_CANVAS_WIDTH"], y: _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MINIMUM_CANVAS_HEIGHT"] };
        this.canvasSize = { x: _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MINIMUM_CANVAS_WIDTH"], y: _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MINIMUM_CANVAS_HEIGHT"] };
        this.canvasResizingPoints = _app_ressources_global_variables_canvas_resizing_points__WEBPACK_IMPORTED_MODULE_2__["CANVAS_RESIZING_POINTS"];
        this.shortcutsArray = ['c', 'p', 'w', '1', '2', '3', 'l', 'b', 'e', 'i', 'o', 'g', 's', 'r', 'a', 'z', 'Z', 'd', 'm', 't', '+', '-', 'v'];
        this.resizeDrawingService.workSpaceSize = this.workSpaceSize;
        this.resizeDrawingService.previewSize = this.previewSize;
        this.resizeDrawingService.canvasSize = this.canvasSize;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const workspaceElement = this.workSpaceRef.nativeElement;
            this.workSpaceSize.x = workspaceElement.offsetWidth;
            this.workSpaceSize.y = workspaceElement.offsetHeight;
            this.previewDiv = this.previewDivRef.nativeElement;
            this.previewDiv.style.display = 'none';
            this.previewDiv.style.borderWidth = '1px';
            this.previewDiv.style.borderColor = '#09acd9';
            this.previewDiv.style.borderStyle = 'dashed';
            this.previewDiv.style.position = 'absolute';
            this.resizeDrawingService.setDefaultCanvasSize();
        });
    }
    onKeyUp(event) {
        this.toolSelectionService.currentToolKeyUp(event);
    }
    onKeyDown(event) {
        if (this.shortcutsArray.includes(event.key)) {
            this.hotkeyService.onKeyDown(event);
        }
        this.toolSelectionService.currentToolKeyDown(event);
    }
    onMouseDown(event) {
        this.previewDiv.style.display = 'block';
        this.resizeDrawingService.onMouseDown(event);
    }
    onMouseMove(event) {
        this.resizeDrawingService.resizeCanvas(event);
    }
    onMouseUp(event) {
        this.resizeDrawingService.onMouseUp();
        this.previewDiv.style.display = 'none';
        this.toolSelectionService.currentToolMouseUp(event);
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_6__["ToolSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_5__["ResizeDrawingService"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], viewQuery: function EditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawingComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.workSpaceRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.previewDivRef = _t.first);
    } }, hostBindings: function EditorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EditorComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function EditorComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mousemove", function EditorComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); })("mouseup", function EditorComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); });
    } }, decls: 12, vars: 21, consts: [[1, "container"], ["id", "workSpace"], ["workSpace", ""], ["tabindex", "0", 1, "drawing", 3, "canvasSize", "previewSize"], ["drawingComponent", ""], ["id", "previewDiv", 3, "ngStyle"], ["previewDiv", ""], [1, "canvasResizePoint", 3, "id", "ngStyle", "mousedown"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-attribute-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-drawing", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function EditorComponent_Template_div_mousedown_9_listener($event) { return ctx.onMouseDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function EditorComponent_Template_div_mousedown_10_listener($event) { return ctx.onMouseDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function EditorComponent_Template_div_mousedown_11_listener($event) { return ctx.onMouseDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("canvasSize", ctx.canvasSize)("previewSize", ctx.previewSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c3, ctx.previewSize.y + "px", ctx.previewSize.x + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.canvasResizingPoints.VERTICAL)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c4, ctx.previewSize.y - 3, ctx.previewSize.x / 2 - 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.canvasResizingPoints.VERTICAL_AND_HORIZONTAL)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c4, ctx.previewSize.y - 9, ctx.previewSize.x - 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.canvasResizingPoints.HORIZONTAL)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c4, ctx.previewSize.y / 2 - 15, ctx.previewSize.x - 3));
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _attribute_panel_attribute_panel_component__WEBPACK_IMPORTED_MODULE_8__["AttributePanelComponent"], _app_components_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_1__["DrawingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n}\n\n#workSpace[_ngcontent-%COMP%] {\n  background-color: #3b3737;\n  overflow: auto;\n  flex: 1 1 auto;\n}\n\n.drawing[_ngcontent-%COMP%] {\n  display: grid;\n  width: min-content;\n  outline: none;\n}\n\n#previewDiv[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.canvasResizePoint[_ngcontent-%COMP%] {\n  position: relative;\n  height: 6px;\n  width: 6px;\n  background-color: #09acd9;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuI3dvcmtTcGFjZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzczNztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmRyYXdpbmcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbiNwcmV2aWV3RGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYW52YXNSZXNpemVQb2ludCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNnB4O1xuICAgIHdpZHRoOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5YWNkOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor',
                templateUrl: './editor.component.html',
                styleUrls: ['./editor.component.scss'],
            }]
    }], function () { return [{ type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__["HotkeyService"] }, { type: _app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_6__["ToolSelectionService"] }, { type: _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_5__["ResizeDrawingService"] }]; }, { drawingComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['drawingComponent', { static: false }]
        }], workSpaceRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['workSpace', { static: false }]
        }], previewDivRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['previewDiv', { static: false }]
        }], onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup', ['$event']]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
        }], onMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/services/continue-drawing/continue-drawing.service */ "L+iO");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/app/app.component */ "WfQD");
/* harmony import */ var _components_attribute_panel_attribute_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/attribute-panel/attribute-panel.component */ "XcmA");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/color-picker/color-picker.component */ "CUwC");
/* harmony import */ var _components_drawing_detail_drawing_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/drawing-detail/drawing-detail.component */ "dbvP");
/* harmony import */ var _components_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/drawing/drawing.component */ "Vuel");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/editor/editor.component */ "YJIf");
/* harmony import */ var _components_export_export_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/export/export.component */ "k77x");
/* harmony import */ var _components_general_detail_general_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/general-detail/general-detail.component */ "sR8V");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/grid/grid.component */ "m4bG");
/* harmony import */ var _components_load_selected_drawing_alert_load_selected_drawing_alert_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/load-selected-drawing-alert/load-selected-drawing-alert.component */ "a7xf");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "oaKM");
/* harmony import */ var _components_new_drawing_modal_new_drawing_modal_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/new-drawing-modal/new-drawing-modal.component */ "MmXv");
/* harmony import */ var _components_saving_saving_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/saving/saving.component */ "Q8WQ");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_tools_brush_attributes_brush_attributes_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/tools/brush-attributes/brush-attributes.component */ "vaeZ");
/* harmony import */ var _components_tools_circle_attributes_circle_attributes_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/tools/circle-attributes/circle-attributes.component */ "hAYi");
/* harmony import */ var _components_tools_circle_selection_attributes_circle_selection_attributes_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/tools/circle-selection-attributes/circle-selection-attributes.component */ "QbMc");
/* harmony import */ var _components_tools_eraser_attributes_eraser_attributes_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/tools/eraser-attributes/eraser-attributes.component */ "mdC4");
/* harmony import */ var _components_tools_fill_attributes_fill_attributes_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/tools/fill-attributes/fill-attributes.component */ "f93k");
/* harmony import */ var _components_tools_line_attributes_line_attributes_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/tools/line-attributes/line-attributes.component */ "Zal2");
/* harmony import */ var _components_tools_magic_wand_attributes_magic_wand_attributes_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/tools/magic-wand-attributes/magic-wand-attributes.component */ "1/UG");
/* harmony import */ var _components_tools_pen_attributes_pen_attributes_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/tools/pen-attributes/pen-attributes.component */ "NRvI");
/* harmony import */ var _components_tools_pencil_attributes_pencil_attributes_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/tools/pencil-attributes/pencil-attributes.component */ "w0tv");
/* harmony import */ var _components_tools_pipette_attributes_pipette_attributes_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/tools/pipette-attributes/pipette-attributes.component */ "VM6T");
/* harmony import */ var _components_tools_polygon_attributes_polygon_attributes_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/tools/polygon-attributes/polygon-attributes.component */ "HpQq");
/* harmony import */ var _components_tools_shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/tools/shared-Attributes/fill-types-selection/fill-types-selection.component */ "XRzb");
/* harmony import */ var _components_tools_shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/tools/shared-Attributes/magnetism/magnetism.component */ "uozt");
/* harmony import */ var _components_tools_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/tools/shared-Attributes/slider/slider.component */ "FQBM");
/* harmony import */ var _components_tools_spray_attributes_spray_attributes_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/tools/spray-attributes/spray-attributes.component */ "Kbhk");
/* harmony import */ var _components_tools_square_attributes_square_attributes_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/tools/square-attributes/square-attributes.component */ "ph8/");
/* harmony import */ var _components_tools_square_selection_attributes_square_selection_attributes_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/tools/square-selection-attributes/square-selection-attributes.component */ "jTK1");
/* harmony import */ var _components_tools_stamp_attributes_stamp_attributes_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/tools/stamp-attributes/stamp-attributes.component */ "qgPj");
/* harmony import */ var _components_tools_text_attributes_text_attributes_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/tools/text-attributes/text-attributes.component */ "V0iU");
/* harmony import */ var _components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/userguide/user-guide.component */ "rVPD");



























































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: 'ContinueDrawingService', useClass: _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_21__["ContinueDrawingService"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["NoopAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
        _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_32__["GridComponent"],
        _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_29__["EditorComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__["SidebarComponent"],
        _components_tools_magic_wand_attributes_magic_wand_attributes_component__WEBPACK_IMPORTED_MODULE_44__["MagicWandAttributesComponent"],
        _components_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_28__["DrawingComponent"],
        _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_34__["MainPageComponent"],
        _components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_57__["UserGuideComponent"],
        _components_load_selected_drawing_alert_load_selected_drawing_alert_component__WEBPACK_IMPORTED_MODULE_33__["LoadSelectedDrawingAlertComponent"],
        _components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_57__["UserGuideComponent"],
        _components_drawing_detail_drawing_detail_component__WEBPACK_IMPORTED_MODULE_27__["DrawingDetailComponent"],
        _components_general_detail_general_detail_component__WEBPACK_IMPORTED_MODULE_31__["GeneralDetailComponent"],
        _components_attribute_panel_attribute_panel_component__WEBPACK_IMPORTED_MODULE_24__["AttributePanelComponent"],
        _components_tools_brush_attributes_brush_attributes_component__WEBPACK_IMPORTED_MODULE_38__["BrushAttributesComponent"],
        _components_tools_circle_attributes_circle_attributes_component__WEBPACK_IMPORTED_MODULE_39__["CircleAttributesComponent"],
        _components_tools_eraser_attributes_eraser_attributes_component__WEBPACK_IMPORTED_MODULE_41__["EraserAttributesComponent"],
        _components_tools_line_attributes_line_attributes_component__WEBPACK_IMPORTED_MODULE_43__["LineAttributesComponent"],
        _components_tools_pencil_attributes_pencil_attributes_component__WEBPACK_IMPORTED_MODULE_46__["PencilAttributesComponent"],
        _components_tools_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_51__["SliderComponent"],
        _components_tools_square_attributes_square_attributes_component__WEBPACK_IMPORTED_MODULE_53__["SquareAttributesComponent"],
        _components_new_drawing_modal_new_drawing_modal_component__WEBPACK_IMPORTED_MODULE_35__["NewDrawingModalComponent"],
        _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_26__["ColorPickerComponent"],
        _components_tools_shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_49__["FillTypesSelectionComponent"],
        _components_tools_pipette_attributes_pipette_attributes_component__WEBPACK_IMPORTED_MODULE_47__["PipetteAttributesComponent"],
        _components_tools_fill_attributes_fill_attributes_component__WEBPACK_IMPORTED_MODULE_42__["FillAttributesComponent"],
        _components_saving_saving_component__WEBPACK_IMPORTED_MODULE_36__["SavingComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_25__["CarouselComponent"],
        _components_export_export_component__WEBPACK_IMPORTED_MODULE_30__["ExportComponent"],
        _components_tools_polygon_attributes_polygon_attributes_component__WEBPACK_IMPORTED_MODULE_48__["PolygonAttributesComponent"],
        _components_tools_square_selection_attributes_square_selection_attributes_component__WEBPACK_IMPORTED_MODULE_54__["SquareSelectionAttributesComponent"],
        _components_tools_circle_selection_attributes_circle_selection_attributes_component__WEBPACK_IMPORTED_MODULE_40__["CircleSelectionAttributesComponent"],
        _components_tools_pen_attributes_pen_attributes_component__WEBPACK_IMPORTED_MODULE_45__["PenAttributesComponent"],
        _components_tools_spray_attributes_spray_attributes_component__WEBPACK_IMPORTED_MODULE_52__["SprayAttributesComponent"],
        _components_tools_text_attributes_text_attributes_component__WEBPACK_IMPORTED_MODULE_56__["TextComponent"],
        _components_tools_stamp_attributes_stamp_attributes_component__WEBPACK_IMPORTED_MODULE_55__["StampAttributesComponent"],
        _components_tools_shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_50__["MagnetismComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["NoopAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_app_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
                    _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_32__["GridComponent"],
                    _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_29__["EditorComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_37__["SidebarComponent"],
                    _components_tools_magic_wand_attributes_magic_wand_attributes_component__WEBPACK_IMPORTED_MODULE_44__["MagicWandAttributesComponent"],
                    _components_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_28__["DrawingComponent"],
                    _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_34__["MainPageComponent"],
                    _components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_57__["UserGuideComponent"],
                    _components_load_selected_drawing_alert_load_selected_drawing_alert_component__WEBPACK_IMPORTED_MODULE_33__["LoadSelectedDrawingAlertComponent"],
                    _components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_57__["UserGuideComponent"],
                    _components_drawing_detail_drawing_detail_component__WEBPACK_IMPORTED_MODULE_27__["DrawingDetailComponent"],
                    _components_general_detail_general_detail_component__WEBPACK_IMPORTED_MODULE_31__["GeneralDetailComponent"],
                    _components_attribute_panel_attribute_panel_component__WEBPACK_IMPORTED_MODULE_24__["AttributePanelComponent"],
                    _components_tools_brush_attributes_brush_attributes_component__WEBPACK_IMPORTED_MODULE_38__["BrushAttributesComponent"],
                    _components_tools_circle_attributes_circle_attributes_component__WEBPACK_IMPORTED_MODULE_39__["CircleAttributesComponent"],
                    _components_tools_eraser_attributes_eraser_attributes_component__WEBPACK_IMPORTED_MODULE_41__["EraserAttributesComponent"],
                    _components_tools_line_attributes_line_attributes_component__WEBPACK_IMPORTED_MODULE_43__["LineAttributesComponent"],
                    _components_tools_pencil_attributes_pencil_attributes_component__WEBPACK_IMPORTED_MODULE_46__["PencilAttributesComponent"],
                    _components_tools_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_51__["SliderComponent"],
                    _components_tools_square_attributes_square_attributes_component__WEBPACK_IMPORTED_MODULE_53__["SquareAttributesComponent"],
                    _components_new_drawing_modal_new_drawing_modal_component__WEBPACK_IMPORTED_MODULE_35__["NewDrawingModalComponent"],
                    _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_26__["ColorPickerComponent"],
                    _components_tools_shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_49__["FillTypesSelectionComponent"],
                    _components_tools_pipette_attributes_pipette_attributes_component__WEBPACK_IMPORTED_MODULE_47__["PipetteAttributesComponent"],
                    _components_tools_fill_attributes_fill_attributes_component__WEBPACK_IMPORTED_MODULE_42__["FillAttributesComponent"],
                    _components_saving_saving_component__WEBPACK_IMPORTED_MODULE_36__["SavingComponent"],
                    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_25__["CarouselComponent"],
                    _components_export_export_component__WEBPACK_IMPORTED_MODULE_30__["ExportComponent"],
                    _components_tools_polygon_attributes_polygon_attributes_component__WEBPACK_IMPORTED_MODULE_48__["PolygonAttributesComponent"],
                    _components_tools_square_selection_attributes_square_selection_attributes_component__WEBPACK_IMPORTED_MODULE_54__["SquareSelectionAttributesComponent"],
                    _components_tools_circle_selection_attributes_circle_selection_attributes_component__WEBPACK_IMPORTED_MODULE_40__["CircleSelectionAttributesComponent"],
                    _components_tools_pen_attributes_pen_attributes_component__WEBPACK_IMPORTED_MODULE_45__["PenAttributesComponent"],
                    _components_tools_spray_attributes_spray_attributes_component__WEBPACK_IMPORTED_MODULE_52__["SprayAttributesComponent"],
                    _components_tools_text_attributes_text_attributes_component__WEBPACK_IMPORTED_MODULE_56__["TextComponent"],
                    _components_tools_stamp_attributes_stamp_attributes_component__WEBPACK_IMPORTED_MODULE_55__["StampAttributesComponent"],
                    _components_tools_shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_50__["MagnetismComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["NoopAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                ],
                entryComponents: [_components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_57__["UserGuideComponent"], _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_34__["MainPageComponent"]],
                providers: [{ provide: 'ContinueDrawingService', useClass: _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_21__["ContinueDrawingService"] }],
                bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Zal2":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tools/line-attributes/line-attributes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LineAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineAttributesComponent", function() { return LineAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/line.service */ "7kIh");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");






class LineAttributesComponent {
    constructor(lineService) {
        this.lineService = lineService;
        this.toolWidth = lineService.lineData.lineWidth;
        this.dotWith = lineService.lineData.dotWidth;
        this.isDot = lineService.lineData.isDot;
    }
    changeDotWidth(newWidth) {
        this.dotWith = newWidth;
        this.lineService.changeDotWidth(newWidth);
    }
    changeLineWidth(newWidth) {
        this.toolWidth = newWidth;
        this.lineService.changeLineWidth(newWidth);
    }
    changeJunctionPoint(isChecked) {
        this.lineService.changeJunction(isChecked);
    }
}
LineAttributesComponent.ɵfac = function LineAttributesComponent_Factory(t) { return new (t || LineAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"])); };
LineAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineAttributesComponent, selectors: [["app-line-attributes"]], decls: 8, vars: 10, consts: [["id", "lineAttributes"], [1, "toolName"], ["title", "\u00C9paisseur Ligne", 3, "min", "max", "step", "value", "valueChange"], ["title", "Diam\u00E8tre Point Jonction", 3, "min", "max", "step", "value", "valueChange"], [3, "checked", "change"]], template: function LineAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LineAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeLineWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LineAttributesComponent_Template_app_slider_valueChange_5_listener($event) { return ctx.changeDotWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LineAttributesComponent_Template_mat_checkbox_change_6_listener($event) { return ctx.changeJunctionPoint($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Afficher jonction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lineService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.lineService.minToolWidth)("max", ctx.lineService.maxToolWidth)("step", 1)("value", ctx.toolWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.lineService.minToolWidth)("max", ctx.lineService.maxToolWidth)("step", 1)("value", ctx.dotWith);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isDot);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"]], styles: ["#lineAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 12px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9saW5lLWF0dHJpYnV0ZXMvbGluZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29scy9saW5lLWF0dHJpYnV0ZXMvbGluZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmVBdHRyaWJ1dGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRvb2xOYW1lIHtcbiAgICBtYXJnaW46IDVweDtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line-attributes',
                templateUrl: './line-attributes.component.html',
                styleUrls: ['./line-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"] }]; }, null); })();


/***/ }),

/***/ "ZiOh":
/*!**************************************************!*\
  !*** ./src/app/services/tools/pencil.service.ts ***!
  \**************************************************/
/*! exports provided: PencilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PencilService", function() { return PencilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");











class PencilService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAMES"].PENCIL_TOOL_NAME;
        this.pencilData = {
            type: 'pencil',
            path: [],
            lineWidth: 1,
            primaryColor: this.colorSelectionService.primaryColor,
        };
    }
    onMouseLeave() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.drawPencilStroke(this.drawingService.baseCtx, this.pencilData);
        this.clearPath();
    }
    onMouseDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        if (event.button !== _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].LEFT) {
            return;
        }
        else {
            this.mouseDown = true;
            this.clearPath();
            this.mouseDownCoord = this.getPositionFromMouse(event);
            this.pencilData.path.push(this.mouseDownCoord);
            this.pencilData.primaryColor = this.colorSelectionService.primaryColor;
            this.drawPencilStroke(this.drawingService.previewCtx, this.pencilData);
            this.undoRedoStackService.setIsToolInUse(true);
        }
    }
    onMouseUp(event) {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            this.pencilData.path.push(mousePosition);
            this.undoRedoStackService.updateStack(this.pencilData);
            this.pencilData.primaryColor = this.colorSelectionService.primaryColor;
            this.drawPencilStroke(this.drawingService.baseCtx, this.pencilData);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.undoRedoStackService.setIsToolInUse(false);
        }
        this.mouseDown = false;
        this.clearPath();
        this.drawingService.autoSave();
    }
    onMouseMove(event) {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            this.pencilData.path.push(mousePosition);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.pencilData.primaryColor = this.colorSelectionService.primaryColor;
            this.drawPencilStroke(this.drawingService.previewCtx, this.pencilData);
        }
    }
    drawPencilStroke(ctx, pencil) {
        ctx.lineWidth = pencil.lineWidth;
        ctx.strokeStyle = pencil.primaryColor;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        for (const point of pencil.path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
    }
    changeWidth(newWidth) {
        this.pencilData.lineWidth = newWidth;
    }
    clearPath() {
        this.pencilData.path = [];
    }
}
PencilService.ɵfac = function PencilService_Factory(t) { return new (t || PencilService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoStackService"])); };
PencilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PencilService, factory: PencilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PencilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "a4AR":
/*!************************************************************************!*\
  !*** ./src/app/services/tools/selection-services/selection.service.ts ***!
  \************************************************************************/
/*! exports provided: SelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return SelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_alignment_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/alignment-names */ "6SIj");
/* harmony import */ var _app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/fill-styles */ "HwfQ");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/clipboard/clipboard.service */ "l+p6");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_tools_selection_services_magnetism_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/tools/selection-services/magnetism.service */ "BemE");
/* harmony import */ var _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/tools/transformation-services/move.service */ "Uu7x");
/* harmony import */ var _app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/tools/transformation-services/rotate.service */ "88n9");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");



















// disabling ts lint because methods have to be empty since they are implemented in the inhereting classes (polymorphism)
// tslint:disable:no-empty
class SelectionService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, moveService, rotateService, clipboardService, magnetismService, undoRedoStackService) {
        super(drawingService);
        this.drawingService = drawingService;
        this.moveService = moveService;
        this.rotateService = rotateService;
        this.clipboardService = clipboardService;
        this.magnetismService = magnetismService;
        this.undoRedoStackService = undoRedoStackService;
        this.initialSelection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.selection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.selectionImage = document.createElement('canvas');
        this.transormation = '';
        this.isNewSelection = false;
        this.isSelectionOver = true;
        this.isSelectionEmptySubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.isMagnetism = false;
        this.alignmentNames = _app_ressources_global_variables_alignment_names__WEBPACK_IMPORTED_MODULE_2__["ALIGNMENT_NAMES"];
        this.currentAlignment = this.alignmentNames.ALIGN_TOP_LEFT_NAME;
        this.mouseDownCoord = { x: 0, y: 0 };
        this.isSelectionEmptySubject.next(true);
    }
    initialize() {
        this.drawingService.previewCtx.lineWidth = 1;
        this.drawingService.previewCtx.strokeStyle = 'black';
        this.drawingService.previewCtx.setLineDash([_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_LENGTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_SPACE_LENGTH"]]);
        if ((this.clipboardService.selection.height !== 0 || this.clipboardService.selection.height !== 0) &&
            this.selectionType === this.clipboardService.selectionType) {
            this.clipboardService.isPasteAvailableSubject.next(true);
        }
    }
    setGridSpacing(size) {
        this.squareSize = size;
    }
    enableMagnetism(isChecked) {
        this.isMagnetism = isChecked;
    }
    onMouseDown(event) {
        this.drawingService.previewCtx.setLineDash([_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_LENGTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_SPACE_LENGTH"]]);
        if (event.button !== _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["MouseButton"].LEFT)
            return;
        if (!this.isInSelection(event)) {
            this.isNewSelection = true;
            if (!this.moveService.isTransformationOver) {
                this.moveService.isTransformationOver = true;
                this.moveService.printSelectionOnPreview();
                this.applyPreview();
            }
            if (!this.rotateService.isRotationOver) {
                this.rotateService.restoreSelection();
                this.applyPreview();
            }
            this.isSelectionOver = true;
            this.selection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
            this.isSelectionEmptySubject.next(true);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.underlyingService.changeWidth(1);
            this.underlyingService.onMouseDown(event);
        }
        else {
            this.isSelectionOver = false;
            this.mouseDownCoord.x = event.x;
            this.mouseDownCoord.y = event.y;
            this.transormation = 'move';
            this.moveService.onMouseDown(event);
        }
        this.undoRedoStackService.setIsToolInUse(true);
    }
    onMouseUp(event) {
        if (this.isNewSelection) {
            this.underlyingService.setLastPoint(this.getPositionFromMouse(event));
            const currentFillStyle = this.underlyingService.getFillStyle();
            this.underlyingService.setFillStyle(_app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].DASHED);
            this.selection = this.underlyingService.drawShape(this.drawingService.previewCtx);
            if (this.selection.height !== 0 && this.selection.width !== 0) {
                this.isSelectionEmptySubject.next(false);
                this.isSelectionOver = false;
                this.setSelection(this.initialSelection, this.selection);
                this.setSelectionData();
            }
            this.underlyingService.setFillStyle(currentFillStyle);
            this.isNewSelection = false;
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
        }
        else if (this.transormation === 'move') {
            this.transormation = '';
        }
        this.strokeSelection();
        this.setSelectionPoint();
        this.undoRedoStackService.setIsToolInUse(false);
        this.drawingService.autoSave();
    }
    onMouseMove(event) {
        if (this.isNewSelection) {
            const currentFillStyle = this.underlyingService.getFillStyle();
            this.underlyingService.setFillStyle(_app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].BORDER);
            this.underlyingService.onMouseMove(event);
            this.underlyingService.setFillStyle(currentFillStyle);
        }
        else if (this.transormation === 'move') {
            if (this.isMagnetism) {
                const mousePosDifferenceX = event.x - this.mouseDownCoord.x;
                const mousePosDifferenceY = event.y - this.mouseDownCoord.y;
                this.onMouseMoveMagnetism(mousePosDifferenceX, mousePosDifferenceY);
            }
            else {
                this.moveService.onMouseMove(event.movementX, event.movementY);
            }
        }
    }
    onMouseMoveMagnetism(mousePosDifferenceX, mousePosDifferenceY) {
        const gridInfo = { SQUARE_SIZE: this.squareSize, ALIGNMENT: this.currentAlignment };
        const changeX = this.magnetismService.magnetismXAxisChange(mousePosDifferenceX, gridInfo, this.selection);
        this.mouseDownCoord.x = this.mouseDownCoord.x + changeX;
        const changeY = this.magnetismService.magnetismYAxisChange(mousePosDifferenceY, gridInfo, this.selection);
        this.mouseDownCoord.y = this.mouseDownCoord.y + changeY;
        this.magnetismService.onMouseMoveMagnetism(changeX, changeY);
    }
    isSnappedOnGrid(coordinates) {
        if (coordinates.x % this.squareSize === 0 && coordinates.y % this.squareSize === 0)
            return true;
        return false;
    }
    onKeyDown(event) {
        this.rotateService.onKeyDown(event);
        if (event.ctrlKey) {
            this.ctrlKeyDown(event);
        }
        if (this.selection.height !== 0 || this.selection.height !== 0) {
            const axisCoordinates = this.magnetismService.magnetismCoordinateReference(this.currentAlignment, this.selection);
            if (this.isMagnetism && !this.isSnappedOnGrid(axisCoordinates)) {
                this.moveService.snapOnGrid(event, axisCoordinates, this.squareSize);
            }
            else {
                this.moveService.onKeyDown(event, this.isMagnetism, this.squareSize);
            }
        }
        if (this.isNewSelection) {
            this.underlyingService.setFillStyle(_app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].DASHED);
            this.underlyingService.onKeyDown(event);
        }
        switch (event.key) {
            case 'Escape': {
                this.isEscapeKeyPressed = true;
                this.reset();
                break;
            }
            case 'Shift': {
                this.isShiftKeyDown = true;
                if (this.underlyingService)
                    this.underlyingService.setIsShiftDown(true);
                break;
            }
            case 'Delete': {
                this.drawingService.clearCanvas(this.drawingService.previewCtx);
                this.moveService.clearSelectionBackground();
                this.applyPreview();
                this.selection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
                this.isSelectionEmptySubject.next(true);
                const selectionImageCtx = this.selectionImage.getContext('2d');
                selectionImageCtx.clearRect(0, 0, this.selectionImage.width, this.selectionImage.height);
                this.moveService.initialize(this.selection, this.selectionImage);
                this.moveService.isTransformationOver = true;
                break;
            }
        }
    }
    ctrlKeyDown(event) {
        switch (event.key) {
            case 'x': {
                this.cut();
                break;
            }
            case 'c': {
                this.copy();
                break;
            }
            case 'v': {
                this.paste();
                break;
            }
        }
    }
    selectAll() {
        this.selection = {
            startingPoint: { x: 0, y: 0 },
            width: this.drawingService.canvas.width,
            height: this.drawingService.canvas.height,
        };
        this.isSelectionEmptySubject.next(false);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.underlyingService.setFirstPoint({ x: 0, y: 0 });
        this.underlyingService.setLastPoint({ x: this.drawingService.canvas.width, y: this.drawingService.canvas.height });
        this.underlyingService.setFillStyle(_app_ressources_global_variables_fill_styles__WEBPACK_IMPORTED_MODULE_3__["FILL_STYLES"].DASHED);
        this.selection = this.underlyingService.drawShape(this.drawingService.previewCtx);
        this.setSelection(this.initialSelection, this.selection);
        this.setSelectionData();
        this.setSelectionPoint();
    }
    onKeyUp(event) {
        if (event.key === 'z') {
        }
        this.moveService.onKeyUp(event);
        this.rotateService.onKeyUp(event);
        if (!this.isShiftKeyDown) {
            this.underlyingService.onKeyUp(event);
            this.strokeSelection();
        }
        if (event.key === 'Shift') {
            if (this.isNewSelection) {
                this.underlyingService.onKeyUp(event);
            }
            this.underlyingService.setIsShiftDown(false);
            this.isShiftKeyDown = false;
        }
        this.setSelectionPoint();
    }
    isInSelection(event) {
        const currentPosition = this.getPositionFromMouse(event);
        if (this.rotateService.mouseWheel) {
            const angleRad = this.rotateService.angle * (Math.PI / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["ANGLE_HALF_TURN"]);
            const sin = Math.sin(angleRad);
            const cos = Math.cos(angleRad);
            const x = cos * (currentPosition.x - this.rotateService.calculateCenter().x) +
                sin * (currentPosition.y - this.rotateService.calculateCenter().y) +
                this.rotateService.calculateCenter().x;
            const y = cos * (currentPosition.y - this.rotateService.calculateCenter().y) -
                sin * (currentPosition.x - this.rotateService.calculateCenter().x) +
                this.rotateService.calculateCenter().y;
            currentPosition.x = x;
            currentPosition.y = y;
        }
        if (currentPosition.x > this.selection.startingPoint.x &&
            currentPosition.x < this.selection.startingPoint.x + this.selection.width &&
            currentPosition.y > this.selection.startingPoint.y &&
            currentPosition.y < this.selection.startingPoint.y + this.selection.height) {
            return true;
        }
        else {
            return false;
        }
    }
    reset() {
        if (this.selection.height !== 0 && this.selection.height !== 0 && !this.isEscapeKeyPressed) {
            this.moveService.printSelectionOnPreview();
            this.applyPreview();
        }
        this.selection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.isSelectionEmptySubject.next(true);
        this.moveService.initialSelection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.mouseDown = false;
        this.transormation = '';
        this.moveService.isTransformationOver = true;
        this.drawingService.previewCtx.setLineDash([0]);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.clipboardService.isPasteAvailableSubject.next(false);
    }
    setSelection(selection, incomingSelection) {
        selection.startingPoint.x = incomingSelection.startingPoint.x;
        selection.startingPoint.y = incomingSelection.startingPoint.y;
        selection.width = incomingSelection.width;
        selection.height = incomingSelection.height;
    }
    setSelectionImage(selectionImage) {
        this.selectionImage.width = selectionImage.width;
        this.selectionImage.height = selectionImage.height;
        const selectionImageCtx = this.selectionImage.getContext('2d');
        selectionImageCtx.drawImage(selectionImage, 0, 0);
    }
    setSelectionData() { }
    strokeSelection() { }
    applyPreview() {
        this.drawingService.applyPreview();
        this.canvasData = this.drawingService.getCanvasData();
        this.updateSelectionData();
        this.undoRedoStackService.updateStack(this.selectionData);
    }
    updateSelectionData() {
        this.selectionData = {
            type: 'selection',
            imageData: this.canvasData,
        };
    }
    setSelectionPoint() {
        if (this.selection.height !== 0 && this.selection.width !== 0) {
            const topY = this.selection.startingPoint.y - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"] / 2;
            const middleY = this.selection.startingPoint.y + this.selection.height / 2 - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"] / 2;
            const bottomY = this.selection.startingPoint.y + this.selection.height - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"] / 2;
            const leftX = this.selection.startingPoint.x - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"] / 2;
            const middleX = this.selection.startingPoint.x + this.selection.width / 2 - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"] / 2;
            const rightX = this.selection.startingPoint.x + this.selection.width - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"] / 2;
            this.drawingService.previewCtx.save();
            this.rotateService.rotatePreviewCanvas();
            this.drawingService.previewCtx.fillStyle = '#09acd9';
            this.drawingService.previewCtx.fillRect(leftX, topY, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"]);
            this.drawingService.previewCtx.fillRect(middleX, topY, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"]);
            this.drawingService.previewCtx.fillRect(rightX, topY, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"]);
            this.drawingService.previewCtx.fillRect(leftX, middleY, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"]);
            this.drawingService.previewCtx.fillRect(rightX, middleY, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"]);
            this.drawingService.previewCtx.fillRect(leftX, bottomY, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"]);
            this.drawingService.previewCtx.fillRect(middleX, bottomY, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"]);
            this.drawingService.previewCtx.fillRect(rightX, bottomY, _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["SELECTION_POINT_WIDTH"]);
            this.drawingService.previewCtx.restore();
        }
    }
    onWheelEvent(event) {
        this.drawingService.previewCtx.setLineDash([_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_LENGTH"], _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["DASH_SPACE_LENGTH"]]);
        if (!this.isSelectionOver) {
            this.rotateService.onWheelEvent(event);
            this.strokeSelection();
            this.setSelectionPoint();
        }
    }
    cut() {
        if (this.selection.height !== 0 || this.selection.height !== 0) {
            this.clipboardService.copy(this.selection, this.selectionImage, this.rotateService.angle);
            this.clipboardService.selectionType = this.selectionType;
            this.moveService.clearSelectionBackground();
            this.applyPreview();
            this.selection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
            this.isSelectionEmptySubject.next(true);
            this.moveService.isTransformationOver = true;
            this.isSelectionOver = true;
        }
    }
    copy() {
        if (this.selection.height !== 0 || this.selection.height !== 0) {
            this.clipboardService.copy(this.selection, this.selectionImage, this.rotateService.angle);
            this.clipboardService.selectionType = this.selectionType;
            this.moveService.printSelectionOnPreview();
        }
    }
    paste() {
        if ((this.clipboardService.selection.height !== 0 || this.clipboardService.selection.height !== 0) &&
            this.selectionType === this.clipboardService.selectionType) {
            if (!this.moveService.isTransformationOver || !this.isSelectionOver) {
                this.moveService.clearSelectionBackground();
                this.moveService.printSelectionOnPreview();
                this.applyPreview();
            }
            this.setSelection(this.selection, this.clipboardService.selection);
            this.setSelectionImage(this.clipboardService.clipBoardCanvas);
            this.rotateService.initialize(this.selection, this.selectionImage);
            this.isSelectionEmptySubject.next(false);
            this.rotateService.angle = this.clipboardService.angle;
            this.rotateService.initialSelection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
            this.isSelectionOver = false;
            this.moveService.initialize(this.selection, this.selectionImage);
            this.moveService.initialSelection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
            this.moveService.printSelectionOnPreview();
            this.moveService.isTransformationOver = false;
            this.strokeSelection();
            this.setSelectionPoint();
        }
    }
    getIsSelectionEmptySubject() {
        return this.isSelectionEmptySubject.asObservable();
    }
    setMagnetismAlignment(currentAlignment) { }
}
SelectionService.ɵfac = function SelectionService_Factory(t) { return new (t || SelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_8__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_9__["RotateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_selection_services_magnetism_service__WEBPACK_IMPORTED_MODULE_7__["MagnetismService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_10__["UndoRedoStackService"])); };
SelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectionService, factory: SelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"] }, { type: _app_services_tools_transformation_services_move_service__WEBPACK_IMPORTED_MODULE_8__["MoveService"] }, { type: _app_services_tools_transformation_services_rotate_service__WEBPACK_IMPORTED_MODULE_9__["RotateService"] }, { type: _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"] }, { type: _app_services_tools_selection_services_magnetism_service__WEBPACK_IMPORTED_MODULE_7__["MagnetismService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_10__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "a7xf":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/load-selected-drawing-alert/load-selected-drawing-alert.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LoadSelectedDrawingAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSelectedDrawingAlertComponent", function() { return LoadSelectedDrawingAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class LoadSelectedDrawingAlertComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    close() {
        this.dialogRef.close('Fermer');
    }
    load() {
        this.dialogRef.close('Oui');
    }
}
LoadSelectedDrawingAlertComponent.ɵfac = function LoadSelectedDrawingAlertComponent_Factory(t) { return new (t || LoadSelectedDrawingAlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
LoadSelectedDrawingAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadSelectedDrawingAlertComponent, selectors: [["app-load-selected-drawing-alert"]], decls: 14, vars: 0, consts: [[1, "loadSelectedModal"], ["mat-dialog-title", ""], [1, "example-tab-icon"], ["mat-dialog-content", "", 1, "text"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "loadDrawing", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "id", "close", "color", "warn", "mat-dialog-close", "", 3, "click"]], template: function LoadSelectedDrawingAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Attention ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Il y a pr\u00E9sentement d\u00E9j\u00E0 un dessin sur la surface.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Voulez-vous l'effacer et charger le dessin s\u00E9lectionn\u00E9? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadSelectedDrawingAlertComponent_Template_button_click_10_listener() { return ctx.load(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Oui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadSelectedDrawingAlertComponent_Template_button_click_12_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZC1zZWxlY3RlZC1kcmF3aW5nLWFsZXJ0L2xvYWQtc2VsZWN0ZWQtZHJhd2luZy1hbGVydC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadSelectedDrawingAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-load-selected-drawing-alert',
                templateUrl: './load-selected-drawing-alert.component.html',
                styleUrls: ['./load-selected-drawing-alert.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "aX8X":
/*!*******************************************************!*\
  !*** ./src/app/services/database/database.service.ts ***!
  \*******************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_communication_drawing_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/communication/drawing-data */ "Aplx");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class DatabaseService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/api/database';
    }
    addDrawing(meta, blob) {
        const formData = new FormData();
        formData.append(_common_communication_drawing_data__WEBPACK_IMPORTED_MODULE_2__["ID_NAME"], meta.id);
        formData.append(_common_communication_drawing_data__WEBPACK_IMPORTED_MODULE_2__["NAME"], meta.name);
        meta.tags.forEach((tag) => {
            formData.append(_common_communication_drawing_data__WEBPACK_IMPORTED_MODULE_2__["TAGS_NAME"], tag);
        });
        formData.append('image', blob);
        return this.http.post(this.BASE_URL + '/addDrawing', formData);
    }
    deleteDrawing(fileName) {
        return this.http.delete(this.BASE_URL + '/deleteDrawing/' + fileName);
    }
    getAllDBData() {
        return this.http.get(this.BASE_URL + '/getDBData').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllDBData')));
    }
    getDrawingPng(filename) {
        return this.http
            .get(this.BASE_URL + '/getDrawingPng/' + filename, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDrawingPng')));
    }
    handleError(request, result) {
        return (error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
}
DatabaseService.ɵfac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatabaseService, factory: DatabaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "afaw":
/*!*************************************************!*\
  !*** ./src/app/services/tools/stamp.service.ts ***!
  \*************************************************/
/*! exports provided: StampService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampService", function() { return StampService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/stamps */ "g/7b");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");













class StampService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.drawingService = drawingService;
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAMES"].STAMP_TOOL_NAME;
        this.maxSize = _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["MAX_STAMP_SIZE"];
        this.minSize = _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["MIN_STAMP_SIZE"];
        this.angleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.isAltKeyDown = false;
        this.stampData = {
            type: 'stamp',
            color: this.colorSelectionService.primaryColor,
            size: _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STAMP_SIZE"],
            position: { x: 0, y: 0 },
            currentStamp: _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["STAMPS"].ANGULAR,
            angle: _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STAMP_ANGLE"],
        };
    }
    setSize(newSize) {
        this.stampData.size = newSize;
    }
    setCurrentStamp(newStamp) {
        this.stampData.currentStamp = newStamp;
    }
    setAngle(newAngle) {
        this.stampData.angle = newAngle;
    }
    getSize() {
        return this.stampData.size;
    }
    setCursor() {
        this.drawingService.gridCanvas.style.cursor = 'none';
    }
    onMouseEnter() {
        this.setCursor();
    }
    onKeyDown(event) {
        if (event.key === 'Alt') {
            event.preventDefault();
            this.isAltKeyDown = true;
        }
    }
    onKeyUp(event) {
        if (event.key === 'Alt') {
            this.isAltKeyDown = false;
        }
    }
    onMouseMove(event) {
        this.currentMouseEvent = event;
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.updateStampData(event);
        this.printStamp(this.drawingService.previewCtx, this.stampData);
    }
    onMouseDown(event) {
        this.updateStampData(event);
        this.printStamp(this.drawingService.baseCtx, this.stampData);
        this.undoRedoStackService.updateStack(this.stampData);
        this.undoRedoStackService.setIsToolInUse(false);
        this.drawingService.autoSave();
    }
    printStamp(ctx, stampData) {
        const path = new Path2D(stampData.currentStamp.path);
        const center = { x: stampData.position.x, y: stampData.position.y };
        // Rotate stamp
        ctx.translate(center.x, center.y);
        ctx.rotate(-((stampData.angle * Math.PI) / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["ANGLE_HALF_TURN"]));
        ctx.translate(-center.x, -center.y);
        // Move stamp center to cursor position
        ctx.translate(stampData.position.x - stampData.size * _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["TRANSLATION_FACTOR"], stampData.position.y - stampData.size * _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["TRANSLATION_FACTOR"]);
        ctx.scale(stampData.size / _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["SCALE_FACTOR"], stampData.size / _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["SCALE_FACTOR"]);
        // Print stamp on canvas
        ctx.strokeStyle = ctx.fillStyle = stampData.color;
        ctx.stroke(path);
        ctx.fill(path);
        ctx.scale(stampData.size * _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["SCALE_FACTOR"], stampData.size * _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["SCALE_FACTOR"]);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    onWheelEvent(event) {
        let rotationStep = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["ROTATION_STEP"];
        if (this.isAltKeyDown) {
            rotationStep = 1;
        }
        this.changeAngle(this.stampData.angle - (event.deltaY / Math.abs(event.deltaY)) * rotationStep);
        this.onMouseMove(this.currentMouseEvent);
    }
    onMouseLeave() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
    }
    updateStampData(mouseEvent) {
        this.stampData.color = this.colorSelectionService.primaryColor;
        this.stampData.position = this.getPositionFromMouse(mouseEvent);
    }
    getAngle() {
        return this.angleObservable;
    }
    changeAngle(newAngle) {
        newAngle %= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MAX_ANGLE"];
        if (newAngle < 0) {
            newAngle += _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_3__["MAX_ANGLE"];
        }
        this.stampData.angle = newAngle;
        this.angleObservable.next(this.stampData.angle);
    }
}
StampService.ɵfac = function StampService_Factory(t) { return new (t || StampService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__["UndoRedoStackService"])); };
StampService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StampService, factory: StampService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StampService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_5__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_7__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "bDCT":
/*!*****************************************************!*\
  !*** ./src/app/services/drawing/drawing.service.ts ***!
  \*****************************************************/
/*! exports provided: DrawingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingService", function() { return DrawingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");



class DrawingService {
    constructor(injector) {
        this.injector = injector;
    }
    setGrid() {
        this.clearCanvas(this.gridCtx);
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        this.gridCtx.beginPath();
        for (let x = 0; x <= canvasWidth; x += this.gridSpacing) {
            this.gridCtx.moveTo(x, 0);
            this.gridCtx.lineTo(x, canvasHeight);
        }
        for (let x = 0; x <= canvasHeight; x += this.gridSpacing) {
            this.gridCtx.moveTo(0, x);
            this.gridCtx.lineTo(canvasWidth, x);
        }
        this.gridCtx.globalAlpha = this.gridOpacity / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_PERCENTAGE"];
        this.gridCtx.strokeStyle = 'black';
        this.gridCtx.closePath();
        this.gridCtx.stroke();
    }
    clearCanvas(context) {
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    checkedDrawing() {
        return this.isLastDrawing;
    }
    initializeBaseCanvas() {
        if (this.isGridEnabled)
            this.setGrid();
        if (this.isLastDrawing) {
            // using an injector with a deprecated version to inject and bypass an observed circular dependency
            // Retrieves an instance from the injector based on the provided token.
            // tslint:disable-next-line: deprecation
            this.injector.get('ContinueDrawingService').continueDrawing();
        }
        else {
            this.baseCtx.fillStyle = 'white';
            this.baseCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    isCanvasBlank(context) {
        const blank = document.createElement('canvas');
        blank.width = this.canvas.width;
        blank.height = this.canvas.height;
        const blankCtx = blank.getContext('2d');
        blankCtx.fillStyle = 'white';
        blankCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        return context.canvas.toDataURL() === blank.toDataURL();
    }
    applyPreview() {
        this.baseCtx.drawImage(this.previewCanvas, 0, 0);
        this.clearCanvas(this.previewCtx);
    }
    drawFill(fill) {
        this.baseCtx.putImageData(fill.imageData, 0, 0);
    }
    restoreSelection(selection) {
        this.baseCtx.putImageData(selection.imageData, 0, 0);
    }
    getPixelData(pixelCoord) {
        return this.baseCtx.getImageData(pixelCoord.x, pixelCoord.y, 1, 1).data;
    }
    getCanvasData() {
        return this.baseCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }
    getPreviewData() {
        return this.previewCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }
    autoSave() {
        if (!this.canvas)
            return;
        localStorage.clear();
        localStorage.setItem('drawingKey', this.canvas.toDataURL());
        localStorage.setItem('canvasWidth', this.canvas.width.toString());
        localStorage.setItem('canvasHeight', this.canvas.height.toString());
    }
}
DrawingService.ɵfac = function DrawingService_Factory(t) { return new (t || DrawingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
DrawingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DrawingService, factory: DrawingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "dbvP":
/*!***********************************************************************!*\
  !*** ./src/app/components/drawing-detail/drawing-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: DrawingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingDetailComponent", function() { return DrawingDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_texts_tool_descriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/texts/tool-descriptions */ "zDum");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DrawingDetailComponent_mat_expansion_panel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const basicTool_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", basicTool_r7.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](basicTool_r7.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", basicTool_r7.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DrawingDetailComponent_mat_expansion_panel_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drawingTool_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", drawingTool_r8.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](drawingTool_r8.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", drawingTool_r8.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DrawingDetailComponent_mat_expansion_panel_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shape_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", shape_r9.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shape_r9.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", shape_r9.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DrawingDetailComponent_mat_expansion_panel_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fill_r10.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fill_r10.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", fill_r10.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DrawingDetailComponent_mat_expansion_panel_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transformation_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transformation_r11.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transformation_r11.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", transformation_r11.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DrawingDetailComponent_mat_expansion_panel_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r12.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r12.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", feature_r12.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DrawingDetailComponent_mat_expansion_panel_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const undo_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", undo_r13.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](undo_r13.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", undo_r13.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DrawingDetailComponent {
    constructor() {
        this.basicTools = _app_ressources_texts_tool_descriptions__WEBPACK_IMPORTED_MODULE_1__["BASIC_TOOLS"];
        this.otherFeatures = _app_ressources_texts_tool_descriptions__WEBPACK_IMPORTED_MODULE_1__["OTHER_FEATURES"];
        this.drawingTools = _app_ressources_texts_tool_descriptions__WEBPACK_IMPORTED_MODULE_1__["DRAWING_TOOLS"];
        this.shapes = _app_ressources_texts_tool_descriptions__WEBPACK_IMPORTED_MODULE_1__["SHAPES"];
        this.fills = _app_ressources_texts_tool_descriptions__WEBPACK_IMPORTED_MODULE_1__["FILL"];
        this.undoredo = _app_ressources_texts_tool_descriptions__WEBPACK_IMPORTED_MODULE_1__["UNDO_REDO"];
        this.transformations = _app_ressources_texts_tool_descriptions__WEBPACK_IMPORTED_MODULE_1__["TRANSFORMATIONS"];
    }
}
DrawingDetailComponent.ɵfac = function DrawingDetailComponent_Factory(t) { return new (t || DrawingDetailComponent)(); };
DrawingDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawingDetailComponent, selectors: [["app-drawing-detail"]], decls: 23, vars: 7, consts: [[4, "ngFor", "ngForOf"], ["hideToggle", ""], ["hideToggle", "", 4, "ngFor", "ngForOf"], ["autoplay", "", "loop", "", "muted", ""], ["type", "video/mp4", 1, "animated-gif", 3, "src"], ["type", "image/png", 1, "image", 3, "src"], ["src", "../../../assets/img/refaire.png", "type", "image/png", 1, "image"]], template: function DrawingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Outils ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DrawingDetailComponent_mat_expansion_panel_4_Template, 8, 3, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Outils de tracage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DrawingDetailComponent_mat_expansion_panel_9_Template, 8, 3, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Forme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DrawingDetailComponent_mat_expansion_panel_14_Template, 8, 3, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DrawingDetailComponent_mat_expansion_panel_15_Template, 8, 3, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Outils de s\u00E9lection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DrawingDetailComponent_mat_expansion_panel_20_Template, 8, 3, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DrawingDetailComponent_mat_expansion_panel_21_Template, 7, 3, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DrawingDetailComponent_mat_expansion_panel_22_Template, 10, 3, "mat-expansion-panel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.basicTools);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drawingTools);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shapes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transformations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.otherFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.undoredo);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".mat-expansion-panel[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\nvideo[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 40%;\n  width: 50%;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 50%;\n  width: 60%;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcmF3aW5nLWRldGFpbC9kcmF3aW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJhd2luZy1kZXRhaWwvZHJhd2luZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG52aWRlbyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiA1MCU7XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNjAlO1xufVxuXG5wIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drawing-detail',
                templateUrl: './drawing-detail.component.html',
                styleUrls: ['./drawing-detail.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "eXtk":
/*!***************************************************!*\
  !*** ./src/app/services/hotkey/hotkey.service.ts ***!
  \***************************************************/
/*! exports provided: HotkeyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotkeyService", function() { return HotkeyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_grid_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/grid-elements */ "3bcJ");
/* harmony import */ var _app_ressources_global_variables_sidebar_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/sidebar-elements */ "LNOw");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");







class HotkeyService {
    constructor() {
        this.toolName = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.toolNames = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAMES"];
        this.sidebarElements = _app_ressources_global_variables_sidebar_elements__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_ELEMENTS"];
        this.isHotkeyEnabled = true;
        this.keyMapping = new Map([
            ['c', this.toolNames.PENCIL_TOOL_NAME],
            ['p', this.toolNames.PEN_TOOL_NAME],
            ['w', this.toolNames.BRUSH_TOOL_NAME],
            ['a', this.toolNames.SPRAY_TOOL_NAME],
            ['1', this.toolNames.SQUARE_TOOL_NAME],
            ['2', this.toolNames.CIRCLE_TOOL_NAME],
            ['l', this.toolNames.LINE_TOOL_NAME],
            ['3', this.toolNames.POLYGON_TOOL_NAME],
            ['b', this.toolNames.FILL_TOOL_NAME],
            ['e', this.toolNames.ERASER_TOOL_NAME],
            ['r', this.toolNames.SQUARE_SELECTION_TOOL_NAME],
            ['s', this.toolNames.CIRCLE_SELECTION_TOOL_NAME],
            ['i', this.toolNames.PIPETTE_TOOL_NAME],
            ['t', this.toolNames.TEXT_TOOL_NAME],
            ['d', this.toolNames.STAMP_TOOL_NAME],
            ['v', this.toolNames.MAGIC_WAND_TOOL_NAME],
            ['-', _app_ressources_global_variables_grid_elements__WEBPACK_IMPORTED_MODULE_2__["GRID_DECREASE_NAME"]],
            ['+', _app_ressources_global_variables_grid_elements__WEBPACK_IMPORTED_MODULE_2__["GRID_INCREASE_NAME"]],
            ['g', _app_ressources_global_variables_grid_elements__WEBPACK_IMPORTED_MODULE_2__["GRID_NAME"]],
            ['m', _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAGNETISM_NAME"]],
        ]);
        this.keysNeedCtrl = new Map([
            ['o', this.sidebarElements.NEW_DRAWING_NAME],
            ['g', this.sidebarElements.CAROUSEL_NAME],
            ['s', this.sidebarElements.SAVE_SERVER_NAME],
            ['e', this.sidebarElements.EXPORT_DRAWING_NAME],
            ['a', this.sidebarElements.SELECT_ALL],
            ['z', this.sidebarElements.UNDO],
        ]);
        this.keysNeedShift = new Map([['Z', this.sidebarElements.REDO]]);
    }
    onKeyDown(event) {
        if (!this.isHotkeyEnabled)
            return;
        if (event.shiftKey || event.ctrlKey)
            event.preventDefault();
        let keyName;
        if (event.shiftKey && event.ctrlKey) {
            keyName = this.keysNeedShift.get(event.key.toString());
        }
        else if (event.ctrlKey) {
            keyName = this.keysNeedCtrl.get(event.key.toString());
        }
        else {
            keyName = this.keyMapping.get(event.key.toString());
        }
        if (keyName) {
            this.toolName.next(keyName);
        }
    }
    getKey() {
        return this.toolName.asObservable();
    }
}
HotkeyService.ɵfac = function HotkeyService_Factory(t) { return new (t || HotkeyService)(); };
HotkeyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HotkeyService, factory: HotkeyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotkeyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "f93k":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tools/fill-attributes/fill-attributes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FillAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillAttributesComponent", function() { return FillAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_fill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/fill.service */ "12tw");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");





class FillAttributesComponent {
    constructor(fillService) {
        this.fillService = fillService;
        this.tolerance = fillService.tolerance;
    }
    changeTolerance(newTolerance) {
        this.tolerance = newTolerance;
        this.fillService.changeTolerance(this.tolerance);
    }
}
FillAttributesComponent.ɵfac = function FillAttributesComponent_Factory(t) { return new (t || FillAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_fill_service__WEBPACK_IMPORTED_MODULE_1__["FillService"])); };
FillAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FillAttributesComponent, selectors: [["app-fill-attributes"]], decls: 5, vars: 5, consts: [["id", "fillAttributes"], [1, "toolName"], ["title", "Tol\u00E9rance", 3, "min", "max", "step", "value", "valueChange"]], template: function FillAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FillAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeTolerance($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fillService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.fillService.minTolerance)("max", ctx.fillService.maxTolerance)("step", 1)("value", ctx.tolerance);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]], styles: ["#fillAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9maWxsLWF0dHJpYnV0ZXMvZmlsbC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29scy9maWxsLWF0dHJpYnV0ZXMvZmlsbC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpbGxBdHRyaWJ1dGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRvb2xOYW1lIHtcbiAgICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FillAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fill-attributes',
                templateUrl: './fill-attributes.component.html',
                styleUrls: ['./fill-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_fill_service__WEBPACK_IMPORTED_MODULE_1__["FillService"] }]; }, null); })();


/***/ }),

/***/ "g/7b":
/*!***********************************!*\
  !*** ./src/app/classes/stamps.ts ***!
  \***********************************/
/*! exports provided: SCALE_FACTOR, TRANSLATION_FACTOR, MIN_STAMP_SIZE, MAX_STAMP_SIZE, INITIAL_STAMP_SIZE, INITIAL_STAMP_ANGLE, STAMPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE_FACTOR", function() { return SCALE_FACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATION_FACTOR", function() { return TRANSLATION_FACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_STAMP_SIZE", function() { return MIN_STAMP_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_STAMP_SIZE", function() { return MAX_STAMP_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STAMP_SIZE", function() { return INITIAL_STAMP_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STAMP_ANGLE", function() { return INITIAL_STAMP_ANGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAMPS", function() { return STAMPS; });
const SCALE_FACTOR = 20;
const TRANSLATION_FACTOR = 11;
const MIN_STAMP_SIZE = 1;
const MAX_STAMP_SIZE = 10;
const INITIAL_STAMP_SIZE = 5;
const INITIAL_STAMP_ANGLE = 0;
const STAMPS = {
    ANGULAR: {
        path: 'M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z',
        width: 448,
        height: 512,
    },
    NODEJS: {
        path: 'M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z',
        width: 448,
        height: 512,
    },
    DOCKER: {
        path: 'M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z',
        width: 640,
        height: 512,
    },
    JAVASCRIPT: {
        path: 'M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z',
        width: 448,
        height: 512,
    },
    GITLAB: {
        path: 'M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z',
        width: 512,
        height: 512,
    },
};


/***/ }),

/***/ "hAYi":
/*!***********************************************************************************!*\
  !*** ./src/app/components/tools/circle-attributes/circle-attributes.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CircleAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleAttributesComponent", function() { return CircleAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/circle.service */ "0+1q");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");
/* harmony import */ var _shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-Attributes/fill-types-selection/fill-types-selection.component */ "XRzb");






class CircleAttributesComponent {
    constructor(circleService) {
        this.circleService = circleService;
        this.toolWidth = circleService.ellipseData.lineWidth;
        this.fillStyle = circleService.getFillStyle();
    }
    changeBorderWidth(newWidth) {
        this.toolWidth = newWidth;
        this.circleService.changeWidth(newWidth);
    }
    changeFillStyle(newFillStyle) {
        this.circleService.setFillStyle(newFillStyle);
    }
}
CircleAttributesComponent.ɵfac = function CircleAttributesComponent_Factory(t) { return new (t || CircleAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_1__["CircleService"])); };
CircleAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircleAttributesComponent, selectors: [["app-circle-attributes"]], decls: 6, vars: 6, consts: [["id", "circleAttributes"], [1, "toolName"], ["title", "\u00C9paisseur Contour", 3, "min", "max", "step", "value", "valueChange"], [3, "currentFillStyle", "valueChange"]], template: function CircleAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CircleAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeBorderWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-fill-types-selection", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CircleAttributesComponent_Template_app_fill_types_selection_valueChange_5_listener($event) { return ctx.changeFillStyle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.circleService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.circleService.minBorderWidth)("max", ctx.circleService.maxBorderWidth)("step", 1)("value", ctx.toolWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentFillStyle", ctx.fillStyle);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"], _shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_3__["FillTypesSelectionComponent"]], styles: ["#circleAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\napp-type-of-fill-selection[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9jaXJjbGUtYXR0cmlidXRlcy9jaXJjbGUtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvY2lyY2xlLWF0dHJpYnV0ZXMvY2lyY2xlLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2lyY2xlQXR0cmlidXRlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50b29sTmFtZSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbmFwcC10eXBlLW9mLWZpbGwtc2VsZWN0aW9uIHtcbiAgICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-circle-attributes',
                templateUrl: './circle-attributes.component.html',
                styleUrls: ['./circle-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_1__["CircleService"] }]; }, null); })();


/***/ }),

/***/ "hZmb":
/*!*****************************************************!*\
  !*** ./src/app/ressources/global-variables/text.ts ***!
  \*****************************************************/
/*! exports provided: FONTS, AUTHORIZED_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHORIZED_KEY", function() { return AUTHORIZED_KEY; });
const FONTS = {
    GEORGIA: 'Georgia',
    ARIAL: 'Arial',
    TIME_NEW_ROMAN: 'Time New Roman',
    VERDANA: 'Verdana',
    COURIER_NEW: 'Courier New',
};
const AUTHORIZED_KEY = [
    '.',
    ',',
    "'",
    'é',
    'à',
    'è',
    ';',
    'ç',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'N',
    'M',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '!',
    '@',
    '#',
    '$',
    '%',
    '?',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    '-',
    '=',
    '|',
    'Enter',
    ' ',
];


/***/ }),

/***/ "i3Rd":
/*!***************************************************************!*\
  !*** ./src/app/services/undo-redo/undo-redo-stack.service.ts ***!
  \***************************************************************/
/*! exports provided: UndoRedoStackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoStackService", function() { return UndoRedoStackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class UndoRedoStackService {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
        this.isToolInUse = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setIsToolInUse(isInUse) {
        this.isToolInUse.next(isInUse);
    }
    getIsToolInUse() {
        return this.isToolInUse.asObservable();
    }
    updateStack(modification) {
        this.undoStack.push(Object.assign({}, modification));
        if (this.redoStack.length) {
            this.redoStack = [];
        }
    }
    resetStack() {
        this.undoStack = [];
        this.redoStack = [];
    }
}
UndoRedoStackService.ɵfac = function UndoRedoStackService_Factory(t) { return new (t || UndoRedoStackService)(); };
UndoRedoStackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UndoRedoStackService, factory: UndoRedoStackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UndoRedoStackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "ijVN":
/*!***********************************************************!*\
  !*** ./src/app/ressources/global-variables/arrow-keys.ts ***!
  \***********************************************************/
/*! exports provided: ARROW_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_KEYS", function() { return ARROW_KEYS; });
const ARROW_KEYS = {
    LEFT: 'ArrowLeft',
    UP: 'ArrowUp',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown',
};


/***/ }),

/***/ "j+pl":
/*!*************************************************!*\
  !*** ./src/app/services/tools/brush.service.ts ***!
  \*************************************************/
/*! exports provided: BrushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushService", function() { return BrushService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");











class BrushService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAMES"].BRUSH_TOOL_NAME;
        this.brushData = {
            type: 'brush',
            path: [],
            lineWidth: 1,
            lineCap: 'round',
            pattern: 'none',
            primaryColor: this.colorSelectionService.primaryColor,
        };
    }
    reset() {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
    }
    onMouseDown(event) {
        if (event.button !== _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].LEFT) {
            return;
        }
        else {
            this.mouseDown = true;
            this.clearPath();
            this.applyPattern(this.brushData.pattern);
            this.mouseDownCoord = this.getPositionFromMouse(event);
            this.brushData.path.push(this.mouseDownCoord);
            this.brushData.primaryColor = this.colorSelectionService.primaryColor;
            this.drawLine(this.drawingService.previewCtx, this.brushData);
            this.undoRedoStackService.setIsToolInUse(true);
        }
    }
    onMouseUp(event) {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            this.brushData.path.push(mousePosition);
            this.brushData.primaryColor = this.colorSelectionService.primaryColor;
            this.drawLine(this.drawingService.baseCtx, this.brushData);
            this.undoRedoStackService.updateStack(this.brushData);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.applyPattern('none');
            this.undoRedoStackService.setIsToolInUse(false);
        }
        this.mouseDown = false;
        this.clearPath();
        this.drawingService.autoSave();
    }
    onMouseLeave() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.brushData.primaryColor = this.colorSelectionService.primaryColor;
        this.drawLine(this.drawingService.baseCtx, this.brushData);
        this.clearPath();
    }
    onMouseMove(event) {
        if (this.mouseDown) {
            const mousePosition = this.getPositionFromMouse(event);
            this.brushData.path.push(mousePosition);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.drawLine(this.drawingService.previewCtx, this.brushData);
        }
    }
    changeWidth(newWidth) {
        this.brushData.lineWidth = newWidth;
    }
    setPattern(pattern) {
        this.brushData.pattern = pattern;
    }
    drawLine(ctx, brush) {
        this.applyPattern(brush.pattern);
        ctx.lineWidth = brush.lineWidth;
        ctx.lineCap = ctx.lineJoin = 'round';
        ctx.strokeStyle = brush.primaryColor;
        ctx.beginPath();
        for (const point of brush.path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
    }
    applyPattern(pattern) {
        if (pattern === 'none') {
            this.drawingService.baseCtx.filter = 'none';
            this.drawingService.previewCtx.filter = 'none';
        }
        else {
            this.drawingService.baseCtx.filter = 'url(/assets/patterns.svg#' + pattern + ')';
            this.drawingService.previewCtx.filter = 'url(/assets/patterns.svg#' + pattern + ')';
        }
        this.drawingService.baseCtx.strokeRect(-this.drawingService.baseCtx.lineWidth, 0, 1, 0);
        this.drawingService.previewCtx.strokeRect(-this.drawingService.previewCtx.lineWidth, 0, 1, 0);
    }
    clearPath() {
        this.brushData.path = [];
    }
}
BrushService.ɵfac = function BrushService_Factory(t) { return new (t || BrushService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoStackService"])); };
BrushService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrushService, factory: BrushService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrushService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "jTK1":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/tools/square-selection-attributes/square-selection-attributes.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SquareSelectionAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareSelectionAttributesComponent", function() { return SquareSelectionAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/selection-services/square-selection.service */ "6Ip1");
/* harmony import */ var _shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/magnetism/magnetism.component */ "uozt");





class SquareSelectionAttributesComponent {
    constructor(squareSelectionService) {
        this.squareSelectionService = squareSelectionService;
    }
}
SquareSelectionAttributesComponent.ɵfac = function SquareSelectionAttributesComponent_Factory(t) { return new (t || SquareSelectionAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_1__["SquareSelectionService"])); };
SquareSelectionAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SquareSelectionAttributesComponent, selectors: [["app-square-selection-attributes"]], decls: 5, vars: 2, consts: [["id", "squareSelectionAttributes"], [1, "toolName"], [3, "service"]], template: function SquareSelectionAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-magnetism", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.squareSelectionService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("service", ctx.squareSelectionService);
    } }, directives: [_shared_Attributes_magnetism_magnetism_component__WEBPACK_IMPORTED_MODULE_2__["MagnetismComponent"]], styles: ["#squareSelectionAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\napp-magnetism[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9zcXVhcmUtc2VsZWN0aW9uLWF0dHJpYnV0ZXMvc3F1YXJlLXNlbGVjdGlvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29scy9zcXVhcmUtc2VsZWN0aW9uLWF0dHJpYnV0ZXMvc3F1YXJlLXNlbGVjdGlvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NxdWFyZVNlbGVjdGlvbkF0dHJpYnV0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XG59XG5cbmFwcC1tYWduZXRpc20ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRvb2xOYW1lIHtcbiAgICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SquareSelectionAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-square-selection-attributes',
                templateUrl: './square-selection-attributes.component.html',
                styleUrls: ['./square-selection-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_1__["SquareSelectionService"] }]; }, null); })();


/***/ }),

/***/ "jZBZ":
/*!***********************************************!*\
  !*** ./src/app/services/tools/pen.service.ts ***!
  \***********************************************/
/*! exports provided: PenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenService", function() { return PenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "XDV4");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/color-selection/color-selection.service */ "3+1Z");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");












// this tool was inpired by the code found on http://perfectionkills.com/exploring-canvas-drawing-techniques/
class PenService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, colorSelectionService, undoRedoStackService) {
        super(drawingService);
        this.colorSelectionService = colorSelectionService;
        this.undoRedoStackService = undoRedoStackService;
        this.name = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAMES"].PEN_TOOL_NAME;
        this.width = 1;
        this.angle = 0;
        this.angleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.altKeyPressed = false;
    }
    changeWidth(newWidth) {
        this.width = newWidth;
    }
    changeAngle(newAngle) {
        newAngle %= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["ANGLE_HALF_TURN"];
        if (newAngle < 0) {
            newAngle += _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["ANGLE_HALF_TURN"];
        }
        this.angle = newAngle;
        this.angleObservable.next(this.angle);
    }
    onMouseDown(event) {
        this.drawingService.baseCtx.filter = 'none';
        this.drawingService.previewCtx.filter = 'none';
        if (event.button !== _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MouseButton"].LEFT) {
            return;
        }
        else {
            this.mouseDown = true;
            this.lastPoint = this.getPositionFromMouse(event);
            this.currentPoint = this.getPositionFromMouse(event);
            this.drawPenStroke(this.drawingService.previewCtx);
            this.undoRedoStackService.setIsToolInUse(true);
        }
    }
    onMouseUp(event) {
        if (this.mouseDown) {
            this.drawingService.applyPreview();
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.undoRedoStackService.setIsToolInUse(false);
            this.canvasData = this.drawingService.getCanvasData();
            this.updatePenData();
            this.undoRedoStackService.updateStack(this.penData);
        }
        this.mouseDown = false;
        this.drawingService.autoSave();
    }
    onMouseMove(event) {
        if (this.mouseDown) {
            this.lastPoint = this.currentPoint;
            this.currentPoint = this.getPositionFromMouse(event);
            this.drawPenStroke(this.drawingService.previewCtx);
        }
    }
    onKeyDown(event) {
        if (event.altKey && !this.altKeyPressed) {
            event.preventDefault();
            this.altKeyPressed = true;
        }
    }
    onKeyUp(event) {
        if (event.key === 'Alt') {
            this.altKeyPressed = false;
        }
    }
    onWheelEvent(event) {
        let rotationStep = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["ROTATION_STEP"];
        if (this.altKeyPressed) {
            rotationStep = 1;
        }
        const newAngle = this.angle - (event.deltaY / Math.abs(event.deltaY)) * rotationStep;
        this.changeAngle(newAngle);
    }
    drawPenStroke(ctx) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.colorSelectionService.primaryColor;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        const lastPoint = this.lastPoint;
        const point = this.currentPoint;
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(point.x, point.y);
        const angleRadians = this.toRadians(this.angle);
        for (let j = 1; j <= this.width / 2; j++) {
            ctx.moveTo(lastPoint.x - j * Math.sin(angleRadians), lastPoint.y - j * Math.cos(angleRadians));
            ctx.lineTo(point.x - j * Math.sin(angleRadians), point.y - j * Math.cos(angleRadians));
            ctx.moveTo(lastPoint.x + j * Math.sin(angleRadians), lastPoint.y + j * Math.cos(angleRadians));
            ctx.lineTo(point.x + j * Math.sin(angleRadians), point.y + j * Math.cos(angleRadians));
        }
        ctx.stroke();
    }
    toRadians(angle) {
        return angle * (Math.PI / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["ANGLE_HALF_TURN"]);
    }
    getAngle() {
        return this.angleObservable;
    }
    restorePen(penData) {
        this.drawingService.baseCtx.putImageData(penData.imageData, 0, 0);
    }
    updatePenData() {
        this.penData = {
            type: 'pen',
            imageData: this.canvasData,
        };
        this.drawingService.autoSave();
    }
}
PenService.ɵfac = function PenService_Factory(t) { return new (t || PenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoStackService"])); };
PenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PenService, factory: PenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }, { type: _app_services_color_selection_color_selection_service__WEBPACK_IMPORTED_MODULE_4__["ColorSelectionService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoStackService"] }]; }, null); })();


/***/ }),

/***/ "k77x":
/*!*******************************************************!*\
  !*** ./src/app/components/export/export.component.ts ***!
  \*******************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_ressources_global_variables_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ressources/global-variables/filter */ "PVPv");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_email_email_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/email/email.service */ "PaKX");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/server-response/server-response.service */ "Y39l");
/* harmony import */ var _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/tools/text.service */ "2Eww");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
























const _c0 = ["exportModal"];
function ExportComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imagesrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ExportComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nom est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExportComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nom est trop long. (max. 15 charact\u00E8res)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExportComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Un courriel est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExportComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Courriel invalide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExportComponent {
    constructor(drawingService, emailService, hotkeyService, dialogRef, textService, serverResponseService, dialog) {
        this.drawingService = drawingService;
        this.emailService = emailService;
        this.hotkeyService = hotkeyService;
        this.dialogRef = dialogRef;
        this.textService = textService;
        this.serverResponseService = serverResponseService;
        this.dialog = dialog;
        this.filterStyles = {
            NONE: _app_ressources_global_variables_filter__WEBPACK_IMPORTED_MODULE_3__["FILTER_STYLES"].NONE,
            BLACK_AND_WHITE: _app_ressources_global_variables_filter__WEBPACK_IMPORTED_MODULE_3__["FILTER_STYLES"].BLACK_AND_WHITE,
            SEPHIA: _app_ressources_global_variables_filter__WEBPACK_IMPORTED_MODULE_3__["FILTER_STYLES"].SEPHIA,
            SATURATE: _app_ressources_global_variables_filter__WEBPACK_IMPORTED_MODULE_3__["FILTER_STYLES"].SATURATE,
            INVERT: _app_ressources_global_variables_filter__WEBPACK_IMPORTED_MODULE_3__["FILTER_STYLES"].INVERT,
            BLUR: _app_ressources_global_variables_filter__WEBPACK_IMPORTED_MODULE_3__["FILTER_STYLES"].BLUR,
        };
        this.differentFilter = ['none', 'grayscale(100%)', 'sepia(100%)', 'saturate(8)', 'invert(100%)', 'blur(5px)'];
        this.extension = ['image/png', 'image/jpeg'];
        this.name = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.imagesrc = '';
        this.urlImage = '';
        this.urlExtension = '';
        this.filterCanvas = document.createElement('canvas');
        this.link = document.createElement('a');
        this.emailAddress = '';
        this.isSendMailButtonDisabled = false;
        this.isExportButtonDisabled = false;
    }
    ngOnInit() {
        if (this.textService.isNewText) {
            this.textService.createText();
        }
        this.hotkeyService.isHotkeyEnabled = false;
        this.ownerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_NAME_LENGTH"])]),
        });
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.imagesrc = this.drawingService.canvas.toDataURL();
            this.urlImage = this.imagesrc;
            this.filterCanvas = this.drawingService.canvas;
        });
    }
    changeName(name) {
        this.name = name;
        this.ownerForm.markAllAsTouched();
    }
    changeFilter(event) {
        const target = event.target;
        const filterNumber = Number(target.value);
        const canvasFilter = document.createElement('canvas');
        const canvasFilterCtx = canvasFilter.getContext('2d');
        canvasFilter.height = this.drawingService.canvas.height;
        canvasFilter.width = this.drawingService.canvas.width;
        canvasFilterCtx.filter = this.differentFilter[filterNumber];
        canvasFilterCtx.drawImage(this.drawingService.canvas, 0, 0);
        this.filterCanvas = canvasFilter;
        this.imagesrc = canvasFilterCtx.canvas.toDataURL();
        this.urlImage = this.imagesrc;
    }
    getImageUrl(event) {
        const target = event.target;
        const typeNumber = Number(target.value);
        this.urlImage = this.filterCanvas.toDataURL(this.extension[typeNumber]);
        this.urlExtension = this.extension[typeNumber];
    }
    exportLocally() {
        this.isExportButtonDisabled = true;
        if (this.name !== '' && this.name.length <= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_NAME_LENGTH"]) {
            this.link.href = this.urlImage;
            this.link.setAttribute('download', this.name);
            this.isExportButtonDisabled = false;
            this.link.click();
            this.dialogRef.close();
        }
    }
    hasNameError(controlName, errorName) {
        return this.ownerForm.controls[controlName].hasError(errorName);
    }
    sendMail() {
        this.isSendMailButtonDisabled = true;
        const url = 'http://localhost:3000/api/email/';
        const base64 = this.urlImage.split(',')[1];
        const body = {
            DESTINATION: this.emailAddress,
            PAYLOAD: base64,
            FILENAME: this.name,
            FORMAT: this.urlExtension,
        };
        this.emailService
            .sendMail(url, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.isSendMailButtonDisabled = false;
            this.serverResponseService.sendMailConfirmSnackBar();
            this.dialog.closeAll();
        }, () => {
            this.isSendMailButtonDisabled = false;
            this.serverResponseService.sendMailErrorSnackBar();
            this.dialog.closeAll();
        });
        this.link.click();
        this.dialogRef.close();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
        this.hotkeyService.isHotkeyEnabled = true;
    }
}
ExportComponent.ɵfac = function ExportComponent_Factory(t) { return new (t || ExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_email_email_service__WEBPACK_IMPORTED_MODULE_6__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_7__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_9__["TextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_8__["ServerResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ExportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExportComponent, selectors: [["app-export"]], viewQuery: function ExportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.exportModal = _t.first);
    } }, decls: 73, vars: 20, consts: [[1, "exporting"], ["exportModal", ""], [1, "imageContainer"], ["id", "image", "height", "200px", "width", "300px", 3, "src", 4, "ngIf"], ["autocomplete", "off", 1, "export", 3, "formGroup"], ["appearance", "fill"], ["matInput", "", "type", "text", "id", "name", "formControlName", "name", "placeholder", "Ex: For\u00EAt Bor\u00E9al", 3, "required", "keyup"], ["name", ""], [1, "mat-hint"], [4, "ngIf"], [1, "Section"], [1, "radioContainer"], ["type", "radio", "name", "typeOfFilter", "checked", "", 3, "value", "change"], ["type", "radio", "name", "typeOfFilter", 3, "value", "change"], ["name", "extension", 3, "value", "change"], [3, "value"], [3, "formGroup"], ["formDirective", "ngForm"], [1, "form-control"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "autocomplete", "off", "placeholder", "votre_email@polymtl.ca", "type", "email", "formControlName", "email", "pattern", "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}", 1, "form-input-field", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "export", 3, "disabled", "click"], ["mat-button", "", "id", "sendMail", 3, "disabled", "click"], ["mat-button", "", "color", "warn", "mat-dialog-close", ""], ["id", "image", "height", "200px", "width", "300px", 3, "src"]], template: function ExportComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Exportation du dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExportComponent_img_5_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fichier: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nom du dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ExportComponent_Template_input_keyup_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.changeName(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Max 15 charact\u00E8res");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExportComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExportComponent_mat_error_18_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Filtre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExportComponent_Template_input_change_23_listener($event) { return ctx.changeFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Aucun filtre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExportComponent_Template_input_change_26_listener($event) { return ctx.changeFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Noir et blanc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExportComponent_Template_input_change_29_listener($event) { return ctx.changeFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sepia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExportComponent_Template_input_change_32_listener($event) { return ctx.changeFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Saturer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExportComponent_Template_input_change_35_listener($event) { return ctx.changeFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Inverser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExportComponent_Template_input_change_38_listener($event) { return ctx.changeFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Embrouiller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Format d'exportation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExportComponent_Template_select_change_46_listener($event) { return ctx.getImageUrl($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "PNG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "JPEG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExportComponent_Template_input_ngModelChange_62_listener($event) { return ctx.emailAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ExportComponent_mat_error_63_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ExportComponent_mat_error_64_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportComponent_Template_button_click_67_listener() { return ctx.exportLocally(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Exporter sur ordinateur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportComponent_Template_button_click_69_listener() { return ctx.sendMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Envoyer par email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_16_0 = null;
        var tmp_17_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagesrc !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ownerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNameError("name", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNameError("name", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.filterStyles.NONE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.filterStyles.BLACK_AND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.filterStyles.SEPHIA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.filterStyles.SATURATE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.filterStyles.INVERT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.filterStyles.BLUR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx.userForm.get("email")) == null ? null : tmp_16_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.userForm.get("email")) == null ? null : tmp_17_0.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.ownerForm.valid || ctx.isExportButtonDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userForm.valid || ctx.isSendMailButtonDisabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  position: relative;\n  border: 2px solid #555;\n}\n\n.imageContainer[_ngcontent-%COMP%] {\n  align-self: center;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n\n.Section[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.exporting[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.export[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.sendMail[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcbn1cblxuLmltYWdlQ29udGFpbmVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uU2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZXhwb3J0aW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmV4cG9ydCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlbmRNYWlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-export',
                templateUrl: './export.component.html',
                styleUrls: ['./export.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }, { type: _app_services_email_email_service__WEBPACK_IMPORTED_MODULE_6__["EmailService"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_7__["HotkeyService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_9__["TextService"] }, { type: _app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_8__["ServerResponseService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { exportModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['exportModal']
        }] }); })();


/***/ }),

/***/ "l+p6":
/*!*********************************************************!*\
  !*** ./src/app/services/clipboard/clipboard.service.ts ***!
  \*********************************************************/
/*! exports provided: ClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class ClipboardService {
    constructor(drawingService) {
        this.drawingService = drawingService;
        this.selection = { startingPoint: { x: 0, y: 0 }, width: 0, height: 0 };
        this.clipBoardCanvas = document.createElement('canvas');
        this.isPasteAvailableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isPasteAvailableSubject.next(false);
    }
    copy(selection, selectionImage, angle) {
        this.setSelection(selection);
        this.isPasteAvailableSubject.next(true);
        this.clipBoardCanvas.width = this.selection.width;
        this.clipBoardCanvas.height = this.selection.height;
        const selectionImageCtx = this.clipBoardCanvas.getContext('2d');
        selectionImageCtx.drawImage(selectionImage, 0, 0);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.angle = angle;
    }
    setSelection(selection) {
        this.selection.startingPoint.x = selection.startingPoint.x;
        this.selection.startingPoint.y = selection.startingPoint.y;
        this.selection.height = selection.height;
        this.selection.width = selection.width;
    }
    setSelectionType(selectionType) {
        this.selectionType = selectionType;
    }
    getIsPasteAvailableSubject() {
        return this.isPasteAvailableSubject.asObservable();
    }
}
ClipboardService.ɵfac = function ClipboardService_Factory(t) { return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"])); };
ClipboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClipboardService, factory: ClipboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "m4bG":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_grid_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/grid-elements */ "3bcJ");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/tools/selection-services/circle-selection.service */ "6MVv");
/* harmony import */ var _app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/tools/selection-services/magic-wand.service */ "NWRK");
/* harmony import */ var _app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/tools/selection-services/square-selection.service */ "6Ip1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");















class GridComponent {
    constructor(drawingService, hotkeyService, circleSelectionService, squareSelectionService, magicWandService) {
        this.drawingService = drawingService;
        this.hotkeyService = hotkeyService;
        this.circleSelectionService = circleSelectionService;
        this.squareSelectionService = squareSelectionService;
        this.magicWandService = magicWandService;
        this.isEnabled = false;
        this.minSquareSize = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MIN_GRID_SQUARE_SIZE"];
        this.maxSquareSize = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_GRID_SQUARE_SIZE"];
        this.minOpacity = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MIN_GRID_OPACITY"];
        this.maxOpacity = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_GRID_OPACITY"];
        this.currentSquareSize = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GRID_SIZE"];
        this.currentOpacity = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GRID_OPACITY"];
        this.drawingService.gridSpacing = this.currentSquareSize;
        this.circleSelectionService.setGridSpacing(this.currentSquareSize);
        this.magicWandService.setGridSpacing(this.currentSquareSize);
        this.squareSelectionService.setGridSpacing(this.currentSquareSize);
        this.drawingService.gridOpacity = this.currentOpacity;
        this.hotkeyService.getKey().subscribe((toolName) => {
            switch (toolName) {
                case _app_ressources_global_variables_grid_elements__WEBPACK_IMPORTED_MODULE_2__["GRID_NAME"]: {
                    if (this.isEnabled)
                        this.changeGridView(false);
                    else
                        this.changeGridView(true);
                    break;
                }
                case _app_ressources_global_variables_grid_elements__WEBPACK_IMPORTED_MODULE_2__["GRID_INCREASE_NAME"]: {
                    if (this.currentSquareSize + _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["GRID_STEP"] <= this.maxSquareSize) {
                        this.currentSquareSize += _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["GRID_STEP"];
                        this.changeGridSize(this.currentSquareSize);
                    }
                    break;
                }
                case _app_ressources_global_variables_grid_elements__WEBPACK_IMPORTED_MODULE_2__["GRID_DECREASE_NAME"]: {
                    if (this.currentSquareSize - _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["GRID_STEP"] >= this.minSquareSize) {
                        this.currentSquareSize -= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["GRID_STEP"];
                        this.changeGridSize(this.currentSquareSize);
                    }
                    break;
                }
            }
        });
    }
    changeGridView(isEnabled) {
        this.isEnabled = isEnabled;
        this.drawingService.isGridEnabled = isEnabled;
        if (isEnabled)
            this.drawingService.setGrid();
        else
            this.drawingService.clearCanvas(this.drawingService.gridCtx);
    }
    changeGridSize(newSize) {
        newSize = Number(newSize);
        if (isNaN(newSize) || newSize < _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MIN_GRID_SQUARE_SIZE"] || newSize > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_GRID_SQUARE_SIZE"] || newSize.toString() === '') {
            alert('La taille des carrés doit être un nombre entre 5 et 200.');
        }
        else {
            this.drawingService.gridSpacing = newSize;
            this.currentSquareSize = newSize;
            this.circleSelectionService.setGridSpacing(this.currentSquareSize);
            this.magicWandService.setGridSpacing(this.currentSquareSize);
            this.squareSelectionService.setGridSpacing(this.currentSquareSize);
            if (this.isEnabled) {
                this.drawingService.setGrid();
            }
        }
    }
    changeOpacity(newOpacity) {
        newOpacity = Number(newOpacity);
        newOpacity = Math.round((newOpacity + Number.EPSILON) * _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["TWO_DECIMAL_MULTIPLIER"]) / _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["TWO_DECIMAL_MULTIPLIER"];
        if (isNaN(newOpacity) || newOpacity < _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MIN_GRID_OPACITY"] || newOpacity > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAX_GRID_OPACITY"] || newOpacity.toString() === '') {
            alert("L'opacité doit être un nombre entre 10 et 100.");
        }
        else {
            this.drawingService.gridOpacity = newOpacity;
            this.currentOpacity = newOpacity;
            if (this.isEnabled) {
                this.drawingService.setGrid();
            }
        }
    }
    onFocus() {
        this.hotkeyService.isHotkeyEnabled = false;
    }
    onFocusOut() {
        this.hotkeyService.isHotkeyEnabled = true;
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_5__["CircleSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_7__["SquareSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_6__["MagicWandService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 29, vars: 7, consts: [[1, "grid"], [1, "finalBorder"], [3, "checked", "change"], ["id", "section"], [1, "attributeContainer"], ["type", "text", 3, "value", "min", "max", "valueChange", "change", "focus", "focusout"], [3, "click"], [1, "bottomBorder"], [1, "bottomBorder", "finalBorder"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Grille");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GridComponent_Template_mat_checkbox_change_4_listener($event) { return ctx.changeGridView($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Afficher grille");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Grosseur Carr\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function GridComponent_Template_input_valueChange_11_listener($event) { return ctx.currentSquareSize = $event; })("change", function GridComponent_Template_input_change_11_listener($event) { return ctx.changeGridSize($event.target.value); })("focus", function GridComponent_Template_input_focus_11_listener() { return ctx.onFocus(); })("focusout", function GridComponent_Template_input_focusout_11_listener() { return ctx.onFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_Template_button_click_13_listener() { return ctx.changeGridSize(ctx.currentSquareSize - 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_Template_button_click_15_listener() { return ctx.changeGridSize(ctx.currentSquareSize + 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Opacit\u00E9 des lignes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function GridComponent_Template_input_valueChange_22_listener($event) { return ctx.currentOpacity = $event; })("change", function GridComponent_Template_input_change_22_listener($event) { return ctx.changeOpacity($event.target.value); })("focus", function GridComponent_Template_input_focus_22_listener() { return ctx.onFocus(); })("focusout", function GridComponent_Template_input_focusout_22_listener() { return ctx.onFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_Template_button_click_24_listener() { return ctx.changeOpacity(ctx.currentOpacity - 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_Template_button_click_26_listener() { return ctx.changeOpacity(ctx.currentOpacity + 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentSquareSize)("min", ctx.minSquareSize)("max", ctx.maxSquareSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentOpacity)("min", ctx.minOpacity)("max", ctx.maxOpacity);
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"]], styles: [".grid[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  background: rgba(219, 55, 111, 0.12);\n  border-radius: 3%;\n  padding: 0 5px 0 5px;\n}\n\n.section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 5px 5px 0px 5px;\n  color: #db376f;\n  align-self: center;\n  font-weight: bold;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  margin: 0px 5px 5px 5px;\n}\n\n.attributeContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  width: 80%;\n  justify-content: space-between;\n}\n\n.attributeContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  line-height: 20px;\n}\n\n.attributeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 26px;\n  line-height: 20px;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 5px 0px 0px 0px;\n  font-size: 12px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n}\n\n.finalBorder[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  height: 0px;\n  border-radius: 50px;\n}\n\n.bottomBorder[_ngcontent-%COMP%] {\n  margin: 1em 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxOSwgNTUsIDExMSwgMC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogMyU7XG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oNCB7XG4gICAgbWFyZ2luOiA1cHggNXB4IDBweCA1cHg7XG4gICAgY29sb3I6ICNkYjM3NmY7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDBweCA1cHggNXB4IDVweDtcbn1cblxuLmF0dHJpYnV0ZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmF0dHJpYnV0ZUNvbnRhaW5lciBpbnB1dCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmF0dHJpYnV0ZUNvbnRhaW5lciBidXR0b24ge1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmhyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjZmNmY2Y7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maW5hbEJvcmRlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uYm90dG9tQm9yZGVyIHtcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_4__["HotkeyService"] }, { type: _app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_5__["CircleSelectionService"] }, { type: _app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_7__["SquareSelectionService"] }, { type: _app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_6__["MagicWandService"] }]; }, null); })();


/***/ }),

/***/ "mdC4":
/*!***********************************************************************************!*\
  !*** ./src/app/components/tools/eraser-attributes/eraser-attributes.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EraserAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraserAttributesComponent", function() { return EraserAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/eraser.service */ "UqM6");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");





class EraserAttributesComponent {
    constructor(eraserService) {
        this.eraserService = eraserService;
        this.toolWidth = eraserService.eraserData.lineWidth;
    }
    changeWidth(newWidth) {
        this.toolWidth = newWidth;
        this.eraserService.changeWidth(this.toolWidth);
    }
}
EraserAttributesComponent.ɵfac = function EraserAttributesComponent_Factory(t) { return new (t || EraserAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_1__["EraserService"])); };
EraserAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EraserAttributesComponent, selectors: [["app-eraser-attributes"]], decls: 5, vars: 5, consts: [["id", "eraserAttributes"], [1, "toolName"], ["title", "\u00C9paisseur Ligne", 3, "min", "max", "step", "value", "valueChange"]], template: function EraserAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EraserAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.eraserService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.eraserService.minToolWidth)("max", ctx.eraserService.maxToolWidth)("step", 1)("value", ctx.toolWidth);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]], styles: ["#eraserAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9lcmFzZXItYXR0cmlidXRlcy9lcmFzZXItYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvZXJhc2VyLWF0dHJpYnV0ZXMvZXJhc2VyLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJhc2VyQXR0cmlidXRlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50b29sTmFtZSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EraserAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eraser-attributes',
                templateUrl: './eraser-attributes.component.html',
                styleUrls: ['./eraser-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_1__["EraserService"] }]; }, null); })();


/***/ }),

/***/ "oaKM":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _app_components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/userguide/user-guide.component */ "rVPD");
/* harmony import */ var _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/continue-drawing/continue-drawing.service */ "L+iO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function MainPageComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.loadOldDrawing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continuer un dessin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainPageComponent {
    constructor(dialog, continueDrawingService) {
        this.dialog = dialog;
        this.continueDrawingService = continueDrawingService;
        this.title = 'PolyDessin';
    }
    openUserguide() {
        this.dialog.open(_app_components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_3__["UserGuideComponent"]);
    }
    openCarousel() {
        this.dialog.open(_app_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]);
    }
    loadOldDrawing() {
        this.continueDrawingService.loadOldDrawing();
    }
    unlockContinueDrawing() {
        this.continueDrawingService.unlockContinueDrawing();
    }
    isContinueDrawingEnable() {
        return localStorage.getItem('drawingKey') ? true : false;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_4__["ContinueDrawingService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 14, vars: 2, consts: [[1, "main-page"], [1, "nav-area"], [3, "click"], [1, "title-text"], ["routerLink", "/editor", 3, "click"], [3, "click", 4, "ngIf"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_3_listener() { return ctx.openCarousel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Carrousel de dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_6_listener() { return ctx.openUserguide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Guide d'utilisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_11_listener() { return ctx.unlockContinueDrawing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nouveau dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainPageComponent_a_13_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isContinueDrawingEnable());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: none;\n  padding: none;\n}\n\n.main-page[_ngcontent-%COMP%] {\n  background-image: url('arriere-plan.png');\n  background-size: cover;\n  height: 100%;\n  background-position: center center;\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n#ContinueButton[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-area[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-top: 30px;\n  display: flex;\n  flex-flow: row nowrap;\n  max-width: 1170px;\n  padding: 3%;\n}\n\n.nav-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.nav-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  padding: 5px 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.nav-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #333;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 60px;\n}\n\n.title-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 10px 25px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-top: 20px;\n  display: inline-block;\n  color: #fff;\n}\n\n.title-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #333;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlDQUFBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IG5vbmU7XG4gICAgcGFkZGluZzogbm9uZTtcbn1cblxuLm1haW4tcGFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYXJyaWVyZS1wbGFuLnBuZyk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI0NvbnRpbnVlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmF2LWFyZWEge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgcGFkZGluZzogMyU7XG59XG5cbi5uYXYtYXJlYSBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2LWFyZWEgbGkgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm5hdi1hcmVhIGxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtdGV4dCBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4udGl0bGUtdGV4dCBhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi50aXRsZS10ZXh0IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbmxpIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_4__["ContinueDrawingService"] }]; }, null); })();


/***/ }),

/***/ "ph8/":
/*!***********************************************************************************!*\
  !*** ./src/app/components/tools/square-attributes/square-attributes.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SquareAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareAttributesComponent", function() { return SquareAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/square.service */ "O4K9");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");
/* harmony import */ var _shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-Attributes/fill-types-selection/fill-types-selection.component */ "XRzb");






class SquareAttributesComponent {
    constructor(squareService) {
        this.squareService = squareService;
        this.toolWidth = squareService.rectangleData.lineWidth;
        this.fillStyle = squareService.rectangleData.fillStyle;
    }
    changeBorderWidth(newWidth) {
        this.toolWidth = newWidth;
        this.squareService.changeWidth(newWidth);
    }
    changeFillStyle(newFillStyle) {
        this.squareService.setFillStyle(newFillStyle);
    }
}
SquareAttributesComponent.ɵfac = function SquareAttributesComponent_Factory(t) { return new (t || SquareAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_1__["SquareService"])); };
SquareAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SquareAttributesComponent, selectors: [["app-square-attributes"]], decls: 6, vars: 6, consts: [["id", "squareAttributes"], [1, "toolName"], ["title", "\u00C9paisseur Contour", 3, "min", "max", "step", "value", "valueChange"], [3, "currentFillStyle", "valueChange"]], template: function SquareAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SquareAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeBorderWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-fill-types-selection", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SquareAttributesComponent_Template_app_fill_types_selection_valueChange_5_listener($event) { return ctx.changeFillStyle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.squareService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.squareService.minBorderWidth)("max", ctx.squareService.maxBorderWidth)("step", 1)("value", ctx.toolWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentFillStyle", ctx.fillStyle);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"], _shared_Attributes_fill_types_selection_fill_types_selection_component__WEBPACK_IMPORTED_MODULE_3__["FillTypesSelectionComponent"]], styles: ["#squareAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\napp-type-of-fill-selection[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9zcXVhcmUtYXR0cmlidXRlcy9zcXVhcmUtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvc3F1YXJlLWF0dHJpYnV0ZXMvc3F1YXJlLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3F1YXJlQXR0cmlidXRlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50b29sTmFtZSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbmFwcC10eXBlLW9mLWZpbGwtc2VsZWN0aW9uIHtcbiAgICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SquareAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-square-attributes',
                templateUrl: './square-attributes.component.html',
                styleUrls: ['./square-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_1__["SquareService"] }]; }, null); })();


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_components_load_selected_drawing_alert_load_selected_drawing_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/load-selected-drawing-alert/load-selected-drawing-alert.component */ "a7xf");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/continue-drawing/continue-drawing.service */ "L+iO");
/* harmony import */ var _app_services_database_database_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/database/database.service */ "aX8X");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/resize-drawing/resize-drawing.service */ "JXhA");
/* harmony import */ var _app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/server-response/server-response.service */ "Y39l");
/* harmony import */ var _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/services/tools/text.service */ "2Eww");
/* harmony import */ var _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo-stack.service */ "i3Rd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




































const _c0 = ["chipList"];
function CarouselComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_4_mat_chip_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function CarouselComponent_div_4_mat_chip_7_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const tag_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.removeTag(tag_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r12, " ");
} }
function CarouselComponent_div_4_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pas d'espace");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_4_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "L'\u00E9tiquette est trop longue. (max. 15 charact\u00E8res)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nombre maximum d'\u00E9tiquettes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_4_div_22_ng_container_3_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_22_ng_container_3_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r22.deleteDrawing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_4_div_22_ng_container_3_div_10_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r25, " ");
} }
function CarouselComponent_div_4_div_22_ng_container_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarouselComponent_div_4_div_22_ng_container_3_div_10_i_1_Template, 3, 1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drawingIndex_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r19.filteredMetadata[drawingIndex_r16].tags);
} }
function CarouselComponent_div_4_div_22_ng_container_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drawingIndex_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r21.filteredMetadata[drawingIndex_r16].tags, " ");
} }
const _c1 = function (a0, a1) { return { "selected-drawing": a0, "mat-child": a1 }; };
function CarouselComponent_div_4_div_22_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_22_ng_container_3_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const carouselPosition_r17 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r28.onPreviewClick(carouselPosition_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CarouselComponent_div_4_div_22_ng_container_3_button_6_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "TAGS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CarouselComponent_div_4_div_22_ng_container_3_div_10_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CarouselComponent_div_4_div_22_ng_container_3_ng_template_11_Template, 3, 1, "ng-template", 32, 33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const drawingIndex_r16 = ctx.$implicit;
    const carouselPosition_r17 = ctx.index;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", carouselPosition_r17)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c1, carouselPosition_r17 === ctx_r15.drawingOfInterest, carouselPosition_r17 != ctx_r15.drawingOfInterest));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.filteredMetadata[drawingIndex_r16].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r15.IMAGE_BASE_PATH + ctx_r15.filteredMetadata[drawingIndex_r16].fileName, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", carouselPosition_r17 === ctx_r15.drawingOfInterest);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.isArray(ctx_r15.filteredMetadata[drawingIndex_r16]))("ngIfElse", _r20);
} }
function CarouselComponent_div_4_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r30.onPreviousClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CarouselComponent_div_4_div_22_ng_container_3_Template, 13, 10, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r32.onNextClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.visibleDrawingsIndexes);
} }
function CarouselComponent_div_4_div_23_ng_container_3_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_23_ng_container_3_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r40.deleteDrawing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_4_div_23_ng_container_3_div_10_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r43, " ");
} }
function CarouselComponent_div_4_div_23_ng_container_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarouselComponent_div_4_div_23_ng_container_3_div_10_i_1_Template, 3, 1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drawingIndex_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r37.filteredMetadata[drawingIndex_r34].tags);
} }
function CarouselComponent_div_4_div_23_ng_container_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drawingIndex_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r39.filteredMetadata[drawingIndex_r34].tags, " ");
} }
function CarouselComponent_div_4_div_23_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_23_ng_container_3_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const carouselPosition_r35 = ctx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r46.onPreviewClick(carouselPosition_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CarouselComponent_div_4_div_23_ng_container_3_button_6_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "TAGS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CarouselComponent_div_4_div_23_ng_container_3_div_10_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CarouselComponent_div_4_div_23_ng_container_3_ng_template_11_Template, 3, 1, "ng-template", 32, 33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const drawingIndex_r34 = ctx.$implicit;
    const carouselPosition_r35 = ctx.index;
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", carouselPosition_r35)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c1, carouselPosition_r35 === ctx_r33.drawingOfInterest, carouselPosition_r35 != ctx_r33.drawingOfInterest));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r33.filteredMetadata[drawingIndex_r34].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r33.IMAGE_BASE_PATH + ctx_r33.filteredMetadata[drawingIndex_r34].fileName, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", carouselPosition_r35 === ctx_r33.drawingOfInterest);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r33.isArray(ctx_r33.filteredMetadata[drawingIndex_r34]))("ngIfElse", _r38);
} }
function CarouselComponent_div_4_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r48.onClickTwoDrawings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CarouselComponent_div_4_div_23_ng_container_3_Template, 13, 10, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_23_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r50.onClickTwoDrawings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.visibleDrawingsIndexes);
} }
function CarouselComponent_div_4_div_24_div_10_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r55, " ");
} }
function CarouselComponent_div_4_div_24_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarouselComponent_div_4_div_24_div_10_i_1_Template, 3, 1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r51.filteredMetadata[0].tags);
} }
function CarouselComponent_div_4_div_24_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r53.filteredMetadata[0].tags, " ");
} }
function CarouselComponent_div_4_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_24_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r56.loadSelectedDrawing(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_div_4_div_24_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r58.deleteDrawing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "TAGS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CarouselComponent_div_4_div_24_div_10_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CarouselComponent_div_4_div_24_ng_template_11_Template, 3, 1, "ng-template", 32, 33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.filteredMetadata[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r11.IMAGE_BASE_PATH + ctx_r11.filteredMetadata[0].fileName, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.isArray(ctx_r11.filteredMetadata[0]))("ngIfElse", _r52);
} }
function CarouselComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Filtrage par tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-chip-list", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CarouselComponent_div_4_mat_chip_7_Template, 4, 3, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CarouselComponent_div_4_Template_input_keyup_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r59.currentTagInput(_r5.value); })("keydown", function CarouselComponent_div_4_Template_input_keydown_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.currentTagInput(_r5.value); })("focus", function CarouselComponent_div_4_Template_input_focus_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r62.disableEvents(); })("focusout", function CarouselComponent_div_4_Template_input_focusout_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r63.enableEvents(); })("matChipInputTokenEnd", function CarouselComponent_div_4_Template_input_matChipInputTokenEnd_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r64.addTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CarouselComponent_div_4_mat_error_10_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CarouselComponent_div_4_mat_error_11_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "- Pas d'espace, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "- Max 15 charact\u00E8res ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "- Max 5 \u00E9tiquettes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CarouselComponent_div_4_div_18_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CarouselComponent_div_4_div_22_Template, 6, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CarouselComponent_div_4_div_23_Template, 6, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CarouselComponent_div_4_div_24_Template, 13, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.maxTags)("matChipInputFor", _r3)("matChipInputSeparatorKeyCodes", ctx_r1.separatorKeysCodes)("matChipInputAddOnBlur", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.hasSpaceTagError(_r5.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.hasLengthTagError(_r5.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.maxTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.filteredMetadata.length, " dessin(s) trouv\u00E9(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.visibleDrawingsIndexes.length > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.visibleDrawingsIndexes.length === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.visibleDrawingsIndexes.length === 1);
} }
function CarouselComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Aucun dessin en sauvegarde");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CarouselComponent {
    constructor(router, hotkeyService, serverResponseService, databaseService, dialog, drawingService, resizeDrawingService, continueDrawingService, textService, undoRedoStackService) {
        this.router = router;
        this.hotkeyService = hotkeyService;
        this.serverResponseService = serverResponseService;
        this.databaseService = databaseService;
        this.dialog = dialog;
        this.drawingService = drawingService;
        this.resizeDrawingService = resizeDrawingService;
        this.continueDrawingService = continueDrawingService;
        this.textService = textService;
        this.undoRedoStackService = undoRedoStackService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__["Subject"]();
        this.databaseMetadata = [];
        this.filteredMetadata = [];
        this.gotImages = false;
        this.visibleDrawingsIndexes = [];
        this.currentTag = '';
        this.maxTags = false;
        this.isArrowEventsChecked = true;
        this.name = '';
        this.drawingOfInterest = 0;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tags = [];
        this.IMAGE_BASE_PATH = 'http://localhost:3000/api/database/getDrawingPng/';
    }
    ngOnInit() {
        if (this.textService.isNewText) {
            this.textService.createText();
        }
        this.hotkeyService.isHotkeyEnabled = false;
        this.loadDBData();
        this.currentRoute = this.router.url;
    }
    disableEvents() {
        this.isArrowEventsChecked = false;
    }
    enableEvents() {
        this.isArrowEventsChecked = true;
    }
    onKeyDown(event) {
        if (!this.isArrowEventsChecked)
            return;
        if (this.databaseMetadata.length <= 1)
            return;
        if (this.databaseMetadata.length === 2 && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
            this.onClickTwoDrawings();
            return;
        }
        if (event.key === 'ArrowLeft') {
            this.onPreviousClick();
        }
        else if (event.key === 'ArrowRight') {
            this.onNextClick();
        }
    }
    loadDBData() {
        this.gotImages = false;
        this.databaseMetadata = [];
        this.visibleDrawingsIndexes = [];
        this.databaseService
            .getAllDBData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.destroy$))
            .subscribe((dBData) => {
            this.databaseMetadata = dBData;
            this.filteredMetadata = this.databaseMetadata;
            this.manageShownDrawings();
            this.gotImages = true;
        });
        this.showDrawingsWithFilter();
    }
    isArray(object) {
        return Array.isArray(object.tags);
    }
    manageShownDrawings() {
        for (let i = 0; i < this.filteredMetadata.length; i++) {
            if (i >= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_7__["MAX_NUMBER_VISIBLE_DRAWINGS"]) {
                break;
            }
            if (i === 1) {
                this.drawingOfInterest = i;
            }
            this.visibleDrawingsIndexes.push(i);
        }
        this.gotImages = true;
    }
    onPreviewClick(positionIndex) {
        if (this.filteredMetadata.length === 2) {
            if (positionIndex === this.drawingOfInterest)
                this.loadSelectedDrawing(positionIndex);
            else
                this.onClickTwoDrawings();
        }
        else {
            if (positionIndex < 1) {
                this.onPreviousClick();
            }
            else if (positionIndex > 1) {
                this.onNextClick();
            }
            else {
                this.loadSelectedDrawing(positionIndex);
            }
        }
    }
    loadSelectedDrawing(positionIndex) {
        if (this.currentRoute !== '/home' && !this.drawingService.isCanvasBlank(this.drawingService.baseCtx)) {
            const loadDrawingAlert = this.dialog.open(_app_components_load_selected_drawing_alert_load_selected_drawing_alert_component__WEBPACK_IMPORTED_MODULE_6__["LoadSelectedDrawingAlertComponent"]);
            loadDrawingAlert
                .afterClosed()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.destroy$))
                .subscribe((optionChosen) => {
                if (optionChosen === 'Oui') {
                    this.applySelectedDrawing(this.visibleDrawingsIndexes[positionIndex]);
                    this.dialog.closeAll();
                }
            });
        }
        else {
            this.applySelectedDrawing(this.visibleDrawingsIndexes[positionIndex]);
            this.dialog.closeAll();
        }
    }
    applySelectedDrawing(index) {
        if (this.currentRoute === '/home') {
            this.router.navigateByUrl('/editor');
            this.currentRoute = '/editor';
        }
        this.databaseService
            .getDrawingPng(this.filteredMetadata[index].fileName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.destroy$))
            .subscribe((image) => {
            const img = URL.createObjectURL(image);
            this.drawImageOnCanvas(img);
        }, () => {
            this.serverResponseService.loadErrorSnackBar();
        });
    }
    addTag(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            if (this.tags.length < _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_7__["MAX_NUMBER_TAG"]) {
                if (value.length < _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_7__["MAX_TAG_LENGTH"]) {
                    this.tags.push(value.trim());
                }
            }
            if (this.tags.length === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_7__["MAX_NUMBER_TAG"]) {
                this.maxTags = true;
            }
        }
        if (input) {
            input.value = '';
        }
        this.showDrawingsWithFilter();
    }
    removeTag(tags) {
        const index = this.tags.indexOf(tags);
        if (this.maxTags) {
            this.maxTags = false;
        }
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
        this.showDrawingsWithFilter();
    }
    showDrawingsWithFilter() {
        this.gotImages = false;
        this.filteredMetadata = [];
        this.visibleDrawingsIndexes = [];
        if (!this.tags.length) {
            this.filteredMetadata = this.databaseMetadata;
        }
        for (const data of this.databaseMetadata) {
            if (!data.tags.length)
                return;
            if (!Array.isArray(data.tags)) {
                if (this.tags.includes(data.tags)) {
                    this.filteredMetadata.push(data);
                    return;
                }
            }
            for (const tag of data.tags) {
                if (this.tags.includes(tag)) {
                    this.filteredMetadata.push(data);
                    break;
                }
            }
        }
        this.manageShownDrawings();
    }
    drawImageOnCanvas(image) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const drawing = new Image();
                drawing.src = image;
                drawing.onload = () => {
                    this.resizeDrawingService.resizeCanvasSize(drawing.width, drawing.height);
                    this.drawingService.baseCtx.drawImage(drawing, 0, 0, drawing.width, drawing.height);
                    this.undoRedoStackService.resetStack();
                    resolve();
                };
            });
        });
    }
    deleteDrawing() {
        this.gotImages = false;
        let fileName = this.databaseMetadata[this.visibleDrawingsIndexes[0]].fileName;
        if (this.databaseMetadata.length > 1) {
            fileName = this.databaseMetadata[this.visibleDrawingsIndexes[this.drawingOfInterest]].fileName;
        }
        this.databaseService
            .deleteDrawing(fileName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.loadDBData();
        }, () => {
            this.serverResponseService.deleteErrorSnackBar();
            this.gotImages = true;
        });
    }
    onClickTwoDrawings() {
        this.drawingOfInterest === 1 ? (this.drawingOfInterest = 0) : (this.drawingOfInterest = 1);
    }
    onPreviousClick() {
        this.visibleDrawingsIndexes[2] = this.visibleDrawingsIndexes[1];
        this.visibleDrawingsIndexes[1] = this.visibleDrawingsIndexes[0];
        this.visibleDrawingsIndexes[0] ? this.visibleDrawingsIndexes[0]-- : (this.visibleDrawingsIndexes[0] = this.filteredMetadata.length - 1);
    }
    onNextClick() {
        this.visibleDrawingsIndexes[0] = this.visibleDrawingsIndexes[1];
        this.visibleDrawingsIndexes[1] = this.visibleDrawingsIndexes[2];
        this.visibleDrawingsIndexes[2] === this.filteredMetadata.length - 1 ? (this.visibleDrawingsIndexes[2] = 0) : this.visibleDrawingsIndexes[2]++;
    }
    hasLengthTagError(tag) {
        return tag.length > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_7__["MAX_NAME_LENGTH"];
    }
    hasSpaceTagError(tag) {
        if (tag.indexOf(' ') < 0) {
            return false;
        }
        return true;
    }
    currentTagInput(tag) {
        this.currentTag = tag;
        if (tag.length > _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_7__["MAX_TAG_LENGTH"] || tag.indexOf(' ') >= 0) {
            this.chipList.errorState = true;
            this.chipList._markAsTouched();
        }
        else {
            this.chipList.errorState = false;
        }
    }
    ngOnDestroy() {
        this.hotkeyService.isHotkeyEnabled = true;
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_11__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_13__["ServerResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_10__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_12__["ResizeDrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_8__["ContinueDrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_14__["TextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_15__["UndoRedoStackService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chipList = _t.first);
    } }, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function CarouselComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 9, vars: 3, consts: [[1, "carousel"], ["mat-dialog-title", ""], [4, "ngIf"], ["class", "search", 4, "ngIf"], ["mat-dialog-actions", ""], ["color", "warn", "mat-button", "", "mat-dialog-close", "", 1, "close"], [1, "search"], [1, "tags-card"], [1, "tag-list"], ["aria-label", "Tag selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["type", "text", "id", "tag", "placeholder", "Tags:", 3, "disabled", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "keyup", "keydown", "focus", "focusout", "matChipInputTokenEnd"], ["tag", ""], ["class", "maxTags-notification", 4, "ngIf"], [1, "slider"], ["class", "mat-parent", 4, "ngIf"], [3, "selectable", "removable", "removed"], ["matChipRemove", ""], [1, "maxTags-notification"], [1, "mat-parent"], [1, "control", "prev", 3, "click"], [1, "arrow", "left"], [4, "ngFor", "ngForOf"], [1, "control", "next", 3, "click"], [1, "arrow", "right"], [3, "id", "ngClass", "click"], [1, "name"], [1, "image-container"], [1, "image", 3, "src"], ["class", "remove", "mat-button", "", 3, "click", 4, "ngIf"], ["class", "preview-tags", 4, "ngIf", "ngIfElse"], ["class", "preview-tags"], ["oneTag", ""], ["mat-button", "", 1, "remove", 3, "click"], [1, "preview-tags"], [1, "selected-drawing", 3, "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Carrousel de dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CarouselComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CarouselComponent_div_4_Template, 25, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CarouselComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gotImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.databaseMetadata.length > 0 && ctx.gotImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.databaseMetadata.length == 0 && ctx.gotImages);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatHint"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipRemove"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n\n.search[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n}\n\n.selected-drawing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  width: 282px;\n  height: 402px;\n  margin-left: 5px;\n  margin-right: 5px;\n  border: 3px solid black;\n  cursor: pointer;\n}\n\n.preview-tags[_ngcontent-%COMP%] {\n  width: 250px;\n  text-align: center;\n  overflow-wrap: normal;\n}\n\n.mat-child[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 250px;\n  height: 370px;\n  cursor: pointer;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  width: 155px;\n  height: 155px;\n}\n\n.image[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  max-width: 150px;\n  max-height: 150px;\n  object-fit: cover;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  border-radius: 0.5em;\n}\n\n.remove[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: red;\n}\n\n.control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: black;\n  font-weight: bold;\n  font-size: 3em;\n  user-select: none;\n  height: 100%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n}\n\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n}\n\n.control.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.control.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  display: block;\n  border-left: 0.1em solid black;\n  border-bottom: 0.1em solid black;\n  width: 0.5em;\n  height: 0.5em;\n}\n\n.arrow.left[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.arrow.right[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n}\n\n.tags-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  padding-bottom: 30px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n}\n\n.mat-parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  height: auto;\n  width: auto;\n  padding: 2em;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0.5em;\n}\n\n.slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: left;\n}\n\n.slide[_ngcontent-%COMP%]:hover {\n  transform: scale(1.025);\n}\n\n@media screen and (max-width: 1635px) {\n  .mat-parent[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    height: auto;\n    width: auto;\n    padding: 0.5em;\n    padding-bottom: 2em;\n    position: relative;\n    overflow: hidden;\n    border-radius: 0.5em;\n  }\n\n  .selected-drawing[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    width: 125px;\n    height: 282px;\n    margin-left: 5px;\n    margin-right: 5px;\n    border: 3px solid black;\n    cursor: pointer;\n  }\n\n  .preview-tags[_ngcontent-%COMP%] {\n    width: 100px;\n    text-align: center;\n    overflow-wrap: normal;\n  }\n\n  .mat-child[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 100px;\n    height: 250px;\n    cursor: pointer;\n  }\n\n  .image-container[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 100px;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    position: relative;\n    top: 0;\n    left: 0;\n    max-width: 75px;\n    max-height: 100px;\n    object-fit: cover;\n    transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n    border-radius: 0.5em;\n  }\n\n  .preview-tags[_ngcontent-%COMP%] {\n    width: 100px;\n    text-align: center;\n    overflow-wrap: normal;\n    line-height: 9px;\n    font-size: 8px;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n\n  .control[_ngcontent-%COMP%] {\n    border: none;\n    background-color: transparent;\n    outline: 0;\n    position: relative;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0.2em;\n    color: black;\n    font-weight: bold;\n    font-size: 3em;\n    user-select: none;\n    height: 100%;\n    opacity: 80%;\n    transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  }\n  .control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\n    opacity: 1;\n  }\n  .control.next[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .control.prev[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE9BQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOERBQUE7QUFFSjs7QUFBSTtFQUVJLFVBQUE7QUFDUjs7QUFFSTtFQUNJLFFBQUE7QUFBUjs7QUFFSTtFQUNJLE9BQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBR0k7RUFDSSx3QkFBQTtBQURSOztBQUdJO0VBQ0kseUJBQUE7QUFEUjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7RUFBTjs7RUFHRTtJQUNJLGFBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VBQU47O0VBR0U7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQUFOOztFQUdFO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBQU47O0VBRUU7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQUNOOztFQUVFO0lBQ0ksa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0VBQUE7SUFDQSxvQkFBQTtFQUNOOztFQUNFO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFFTjs7RUFDRTtJQUNJLGNBQUE7RUFFTjs7RUFDRTtJQUNJLFlBQUE7SUFDQSw2QkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDhEQUFBO0VBRU47RUFBTTtJQUVJLFVBQUE7RUFDVjtFQUVNO0lBQ0ksUUFBQTtFQUFWO0VBRU07SUFDSSxPQUFBO0VBQVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZmxleDogMTtcbn1cbi5jYXJvdXNlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNlbGVjdGVkLWRyYXdpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDI4MnB4O1xuICAgIGhlaWdodDogNDAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcmV2aWV3LXRhZ3Mge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xufVxuXG4ubWF0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTU1cHg7XG4gICAgaGVpZ2h0OiAxNTVweDtcbn1cblxuLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG4ucmVtb3ZlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi8vQXJyb3dzIGluc3BpcmVkIGZyb20gaHR0cHM6Ly9tZWRpdW0uY29tL3Nob3dwYWQtZW5naW5lZXJpbmcvYW5ndWxhci1hbmltYXRpb25zLWxldHMtY3JlYXRlLWEtY2Fyb3VzZWwtd2l0aC1yZXVzYWJsZS1hbmltYXRpb25zLTgxYzBkZDg4NDdlOFxuLmNvbnRyb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogODAlO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAmLm5leHQge1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi5wcmV2IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5hcnJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWxlZnQ6IDAuMWVtIHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBoZWlnaHQ6IDAuNWVtO1xuXG4gICAgJi5sZWZ0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICAmLnJpZ2h0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICB9XG59XG5cbi50YWdzLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tYXQtcGFyZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cbi5zbGlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG59XG5cbi5zbGlkZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MzVweCkge1xuICAgIC5tYXQtcGFyZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIH1cblxuICAgIC5zZWxlY3RlZC1kcmF3aW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgIGhlaWdodDogMjgycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5wcmV2aWV3LXRhZ3Mge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICAgIH1cblxuICAgIC5tYXQtY2hpbGQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gICAgLmltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1heC13aWR0aDogNzVweDtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICB9XG4gICAgLnByZXZpZXctdGFncyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogODAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5leHQge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJi5wcmV2IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_11__["HotkeyService"] }, { type: _app_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_13__["ServerResponseService"] }, { type: _app_services_database_database_service__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_10__["DrawingService"] }, { type: _app_services_resize_drawing_resize_drawing_service__WEBPACK_IMPORTED_MODULE_12__["ResizeDrawingService"] }, { type: _app_services_continue_drawing_continue_drawing_service__WEBPACK_IMPORTED_MODULE_8__["ContinueDrawingService"] }, { type: _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_14__["TextService"] }, { type: _app_services_undo_redo_undo_redo_stack_service__WEBPACK_IMPORTED_MODULE_15__["UndoRedoStackService"] }]; }, { chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['chipList', { static: false }]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "qgPj":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tools/stamp-attributes/stamp-attributes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StampAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampAttributesComponent", function() { return StampAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/stamps */ "g/7b");
/* harmony import */ var _app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/tools/stamp.service */ "afaw");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");






class StampAttributesComponent {
    constructor(stampService) {
        this.stampService = stampService;
        this.angle = _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STAMP_ANGLE"];
        this.stamps = _app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["STAMPS"];
        this.stampService.setCurrentStamp(_app_classes_stamps__WEBPACK_IMPORTED_MODULE_1__["STAMPS"].ANGULAR);
        this.toolSize = this.stampService.getSize();
        this.stampService.getAngle().subscribe((angle) => {
            this.angle = angle;
        });
    }
    changeSize(newSize) {
        this.toolSize = newSize;
        this.stampService.setSize(newSize);
    }
    changeStamp(newStamp) {
        this.stampService.setCurrentStamp(newStamp);
    }
    changeAngle(newAngle) {
        this.angle = newAngle;
        this.stampService.setAngle(newAngle);
    }
}
StampAttributesComponent.ɵfac = function StampAttributesComponent_Factory(t) { return new (t || StampAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_2__["StampService"])); };
StampAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StampAttributesComponent, selectors: [["app-stamp-attributes"]], decls: 22, vars: 9, consts: [["id", "stampAttributes"], [1, "toolName"], ["title", "Taille de l'\u00E9tampe", 3, "min", "max", "step", "value", "valueChange"], ["title", "Angle", 3, "min", "max", "step", "value", "valueChange"], ["id", "stamps"], ["type", "radio", "name", "stamp", "id", "angular", "checked", "", 3, "change"], ["src", "/assets/stamps/angular-brands.svg", "width", "50px", "height", "50px"], ["type", "radio", "name", "stamp", 3, "change"], ["src", "/assets/stamps/js-brands.svg", "width", "50px", "height", "50px"], ["src", "/assets/stamps/docker-brands.svg", "width", "50px", "height", "50px"], ["type", "radio", "name", "stamp", "name", "stamp", 3, "change"], ["src", "/assets/stamps/gitlab-brands.svg", "width", "50px", "height", "50px"], ["src", "/assets/stamps/node-js-brands.svg", "width", "50px", "height", "50px"]], template: function StampAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function StampAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function StampAttributesComponent_Template_app_slider_valueChange_5_listener($event) { return ctx.changeAngle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StampAttributesComponent_Template_input_change_8_listener() { return ctx.changeStamp(ctx.stamps.ANGULAR); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StampAttributesComponent_Template_input_change_11_listener() { return ctx.changeStamp(ctx.stamps.JAVASCRIPT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StampAttributesComponent_Template_input_change_14_listener() { return ctx.changeStamp(ctx.stamps.DOCKER); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StampAttributesComponent_Template_input_change_17_listener() { return ctx.changeStamp(ctx.stamps.GITLAB); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StampAttributesComponent_Template_input_change_20_listener() { return ctx.changeStamp(ctx.stamps.NODEJS); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stampService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.stampService.minSize)("max", ctx.stampService.maxSize)("step", 1)("value", ctx.toolSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 360)("step", 1)("value", ctx.angle);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]], styles: ["#stampAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n#stamps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n\n#stamps[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 10px 0 10px;\n}\n\n\n\ninput[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n[type=radio][_ngcontent-%COMP%]    + img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin-top: 10px;\n}\n\n\n\n[type=radio][_ngcontent-%COMP%]:checked    + img[_ngcontent-%COMP%] {\n  outline: 2px solid black;\n  background-color: #ff4081;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9zdGFtcC1hdHRyaWJ1dGVzL3N0YW1wLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFJQSxlQUFBOztBQUNBO0VBQ0ksYUFBQTtBQURKOztBQUlBLGlCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQSxtQkFBQTs7QUFDQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvc3RhbXAtYXR0cmlidXRlcy9zdGFtcC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0YW1wQXR0cmlidXRlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50b29sTmFtZSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbiNzdGFtcHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3N0YW1wcyBsYWJlbCB7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xufVxuXG4vL0NvZGUgYmVsb3cgaW5zcGlyZWQgYnkgYW4gYW5zd2VyIG9uIFN0YWNrb3ZlcmZsb3c6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3NTQxNjE0L3VzZS1pbWFnZXMtaW5zdGVhZC1vZi1yYWRpby1idXR0b25zXG5cbi8qIEhJREUgUkFESU8gKi9cbmlucHV0W3R5cGU9J3JhZGlvJ10ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIElNQUdFIFNUWUxFUyAqL1xuW3R5cGU9J3JhZGlvJ10gKyBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLyogQ0hFQ0tFRCBTVFlMRVMgKi9cblt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBpbWcge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StampAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stamp-attributes',
                templateUrl: './stamp-attributes.component.html',
                styleUrls: ['./stamp-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_2__["StampService"] }]; }, null); })();


/***/ }),

/***/ "rVPD":
/*!**************************************************************!*\
  !*** ./src/app/components/userguide/user-guide.component.ts ***!
  \**************************************************************/
/*! exports provided: UserGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuideComponent", function() { return UserGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _drawing_detail_drawing_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawing-detail/drawing-detail.component */ "dbvP");
/* harmony import */ var _general_detail_general_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general-detail/general-detail.component */ "sR8V");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function UserGuideComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Dessiner ");
} }
function UserGuideComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bubble_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Divers ");
} }
class UserGuideComponent {
    constructor() {
        this.disableAnimation = true;
    }
    ngAfterViewInit() {
        setTimeout(() => (this.disableAnimation = false));
    }
}
UserGuideComponent.ɵfac = function UserGuideComponent_Factory(t) { return new (t || UserGuideComponent)(); };
UserGuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserGuideComponent, selectors: [["app-userguide"]], decls: 13, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-tab-label", ""], ["mat-dialog-actions", ""], ["mat-button_wrapper", "", "mat-button", "", "color", "warn", "mat-dialog-close", ""], [1, "example-tab-icon"]], template: function UserGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guide d'utilisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserGuideComponent_ng_template_5_Template, 3, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-drawing-detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserGuideComponent_ng_template_8_Template, 3, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-general-detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", ctx.disableAnimation);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLabel"], _drawing_detail_drawing_detail_component__WEBPACK_IMPORTED_MODULE_3__["DrawingDetailComponent"], _general_detail_general_detail_component__WEBPACK_IMPORTED_MODULE_4__["GeneralDetailComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".mat-dialog[_ngcontent-%COMP%] {\n  max-height: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyZ3VpZGUvdXNlci1ndWlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJndWlkZS91c2VyLWd1aWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2cge1xuICAgIG1heC1oZWlnaHQ6IDExMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserGuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userguide',
                templateUrl: './user-guide.component.html',
                styleUrls: ['./user-guide.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "sR8V":
/*!***********************************************************************!*\
  !*** ./src/app/components/general-detail/general-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: GeneralDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDetailComponent", function() { return GeneralDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_texts_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/texts/feature */ "/Jh1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");





function GeneralDetailComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r1.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r1.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", info_r1.PICTURE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GeneralDetailComponent {
    constructor() {
        this.informations = _app_ressources_texts_feature__WEBPACK_IMPORTED_MODULE_1__["GENERALS_FEATURE"];
    }
}
GeneralDetailComponent.ɵfac = function GeneralDetailComponent_Factory(t) { return new (t || GeneralDetailComponent)(); };
GeneralDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralDetailComponent, selectors: [["app-general-detail"]], decls: 1, vars: 1, consts: [["hideToggle", "", 4, "ngFor", "ngForOf"], ["hideToggle", ""], ["type", "image/png", 1, "image", 3, "src"]], template: function GeneralDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralDetailComponent_mat_expansion_panel_0_Template, 7, 3, "mat-expansion-panel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.informations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"]], styles: [".mat-expansion-panel[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 50%;\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsLWRldGFpbC9nZW5lcmFsLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsLWRldGFpbC9nZW5lcmFsLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA2MCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-detail',
                templateUrl: './general-detail.component.html',
                styleUrls: ['./general-detail.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "tW64":
/*!**********************************************!*\
  !*** ./src/app/classes/math/trigonometry.ts ***!
  \**********************************************/
/*! exports provided: Trigonometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigonometry", function() { return Trigonometry; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/limit-angles */ "4td7");




class Trigonometry {
    constructor() {
        this.MAX_DISTANCE_BETWEEN_TWO_DOTS = 20;
    }
    findClosestAngle(quadrant, angleDegree) {
        switch (quadrant) {
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].TOP_RIGHT: {
                return this.findClosestAngleTopRight(quadrant, angleDegree);
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].TOP_LEFT: {
                return this.findClosestAngleTopLeft(quadrant, angleDegree);
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].BOTTOM_LEFT: {
                return this.findClosestAngleBottomLeft(quadrant, angleDegree);
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].BOTTOM_RIGHT: {
                return this.findClosestAngleBottomRight(quadrant, angleDegree);
            }
        }
    }
    adjustEndingPoint(lineAngle, mouseCoordinates, adjacent, mouseClicks) {
        switch (lineAngle) {
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_0: {
                return { x: mouseCoordinates.x, y: mouseClicks[mouseClicks.length - 1].y };
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_45: {
                return { x: mouseCoordinates.x, y: mouseClicks[mouseClicks.length - 1].y - adjacent };
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_90: {
                return { x: mouseClicks[mouseClicks.length - 1].x, y: mouseCoordinates.y };
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_135: {
                return { x: mouseCoordinates.x, y: mouseClicks[mouseClicks.length - 1].y - adjacent };
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_180: {
                return { x: mouseCoordinates.x, y: mouseClicks[mouseClicks.length - 1].y };
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_225: {
                return { x: mouseCoordinates.x, y: mouseClicks[mouseClicks.length - 1].y + adjacent };
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_270: {
                return { x: mouseClicks[mouseClicks.length - 1].x, y: mouseCoordinates.y };
            }
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_315: {
                return { x: mouseCoordinates.x, y: mouseClicks[mouseClicks.length - 1].y + adjacent };
            }
        }
    }
    findClosestAngleTopRight(quadrant, angleDegree) {
        if (_app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_0 <= angleDegree && angleDegree <= _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_22POINT5) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_0;
        }
        else if (_app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_22POINT5 < angleDegree && angleDegree <= _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_67POINT5) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_45;
        }
        else {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_90;
        }
    }
    findClosestAngleTopLeft(quadrant, angleDegree) {
        if (_app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_90 > angleDegree && angleDegree >= _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_67POINT5) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_90;
        }
        else if (_app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_67POINT5 > angleDegree && angleDegree >= _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_22POINT5) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_135;
        }
        else {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_180;
        }
    }
    findClosestAngleBottomLeft(quadrant, angleDegree) {
        if (_app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_0 <= angleDegree && angleDegree <= _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_22POINT5) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_180;
        }
        else if (_app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_22POINT5 < angleDegree && angleDegree <= _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_67POINT5) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_225;
        }
        else {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_270;
        }
    }
    findClosestAngleBottomRight(quadrant, angleDegree) {
        if (_app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_90 > angleDegree && angleDegree >= _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_67POINT5) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_270;
        }
        else if (_app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_67POINT5 > angleDegree && angleDegree >= _app_ressources_global_variables_limit_angles__WEBPACK_IMPORTED_MODULE_2__["LIMIT_ANGLES"].DEGREES_22POINT5) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_315;
        }
        else {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["LineAngle"].DEGREES_0;
        }
    }
    radiansToDegrees(radians) {
        return radians * (_app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["DEGREES_180"] / Math.PI);
    }
    findCursorQuadrant(adjacent, opposite) {
        if (adjacent >= 0 && opposite >= 0) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].TOP_RIGHT;
        }
        else if (adjacent <= 0 && opposite >= 0) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].TOP_LEFT;
        }
        else if (adjacent <= 0 && opposite <= 0) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].BOTTOM_LEFT;
        }
        else {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].BOTTOM_RIGHT;
        }
    }
    checkIf20pxAway(firstPoint, secondPoint) {
        const a = secondPoint.x - firstPoint.x;
        const b = secondPoint.y - firstPoint.y;
        const c = Math.sqrt(a * a + b * b);
        if (c <= _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["MAXIMUM_DISTANCE_LINE_CONNECTION"]) {
            return true;
        }
        else {
            return false;
        }
    }
    distanceBetweenTwoDots(firstDot, secondDot) {
        const a = secondDot.x - firstDot.x;
        const b = secondDot.y - firstDot.y;
        const c = Math.sqrt(a * a + b * b);
        return c;
    }
    findQuadrant(firstPoint, lastPoint) {
        if (firstPoint.x > lastPoint.x && firstPoint.y > lastPoint.y) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].TOP_LEFT;
        }
        else if (firstPoint.x > lastPoint.x && firstPoint.y < lastPoint.y) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].BOTTOM_LEFT;
        }
        else if (firstPoint.x < lastPoint.x && firstPoint.y > lastPoint.y) {
            return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].TOP_RIGHT;
        }
        return _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].BOTTOM_RIGHT;
    }
    findTopLeftPointCircle(firstPoint, lastPoint) {
        let x = 0;
        let y = 0;
        switch (this.findQuadrant(firstPoint, lastPoint)) {
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].BOTTOM_LEFT:
                x = lastPoint.x;
                y = firstPoint.y;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].TOP_LEFT:
                x = lastPoint.x;
                y = lastPoint.y;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].BOTTOM_RIGHT:
                x = firstPoint.x;
                y = firstPoint.y;
                break;
            case _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_1__["Quadrant"].TOP_RIGHT:
                x = firstPoint.x;
                y = lastPoint.y;
                break;
        }
        return { x, y };
    }
    getCenter(firstPoint, lastPoint) {
        let centerX = Math.floor(lastPoint.x - firstPoint.x) / 2;
        let centerY = Math.floor(lastPoint.y - firstPoint.y) / 2;
        centerX = firstPoint.x > lastPoint.x ? lastPoint.x + centerX : lastPoint.x - centerX;
        centerY = firstPoint.y > lastPoint.y ? lastPoint.y + centerY : lastPoint.y - centerY;
        return { x: centerX, y: centerY };
    }
}
Trigonometry.ɵfac = function Trigonometry_Factory(t) { return new (t || Trigonometry)(); };
Trigonometry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Trigonometry, factory: Trigonometry.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Trigonometry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "uozt":
/*!*************************************************************************************!*\
  !*** ./src/app/components/tools/shared-Attributes/magnetism/magnetism.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MagnetismComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnetismComponent", function() { return MagnetismComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_alignment_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/alignment-names */ "6SIj");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_tools_selection_services_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/tools/selection-services/selection.service */ "a4AR");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");








class MagnetismComponent {
    constructor(hotkeyService) {
        this.hotkeyService = hotkeyService;
        this.isMagnetismEnabled = false;
        this.alignmentNames = _app_ressources_global_variables_alignment_names__WEBPACK_IMPORTED_MODULE_1__["ALIGNMENT_NAMES"];
        this.currentAlignment = this.alignmentNames.ALIGN_TOP_LEFT_NAME;
        this.hotkeyService.getKey().subscribe((toolName) => {
            if (toolName === _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_2__["MAGNETISM_NAME"]) {
                if (this.isMagnetismEnabled)
                    this.enableGridMagnetism(false);
                else
                    this.enableGridMagnetism(true);
            }
        });
    }
    enableGridMagnetism(isChecked) {
        this.isMagnetismEnabled = isChecked;
        this.service.enableMagnetism(isChecked);
    }
    onAlignmentChange(event) {
        const target = event.target;
        if (target.value != undefined) {
            this.currentAlignment = target.value;
            this.service.setMagnetismAlignment(this.currentAlignment);
        }
    }
}
MagnetismComponent.ɵfac = function MagnetismComponent_Factory(t) { return new (t || MagnetismComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_3__["HotkeyService"])); };
MagnetismComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MagnetismComponent, selectors: [["app-magnetism"]], inputs: { service: "service" }, decls: 19, vars: 19, consts: [[1, "magnetism"], [3, "checked", "change"], [1, "alignmentTitle"], [1, "container-fluid"], [1, "row"], ["type", "radio", 1, "alignment", 3, "value", "checked", "change"]], template: function MagnetismComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_mat_checkbox_change_1_listener($event) { return ctx.enableGridMagnetism($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Magn\u00E9tisme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "point aiment\u00E9:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_8_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_9_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_10_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_12_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_13_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_14_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_16_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_17_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MagnetismComponent_Template_input_change_18_listener($event) { return ctx.onAlignmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isMagnetismEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_TOP_LEFT_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_TOP_LEFT_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_TOP_CENTER_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_TOP_CENTER_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_TOP_RIGHT_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_TOP_RIGHT_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_CENTER_LEFT_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_CENTER_LEFT_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_CENTER_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_CENTER_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_CENTER_RIGHT_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_CENTER_RIGHT_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_BOTTOM_LEFT_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_BOTTOM_LEFT_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_BOTTOM_CENTER_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_BOTTOM_CENTER_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alignmentNames.ALIGN_BOTTOM_RIGHT_NAME)("checked", ctx.currentAlignment.includes(ctx.alignmentNames.ALIGN_BOTTOM_RIGHT_NAME));
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"]], styles: [".magnetism[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.magnetism[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.magnetism[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  margin: 2px;\n}\n\n.alignmentTitle[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9zaGFyZWQtQXR0cmlidXRlcy9tYWduZXRpc20vbWFnbmV0aXNtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29scy9zaGFyZWQtQXR0cmlidXRlcy9tYWduZXRpc20vbWFnbmV0aXNtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hZ25ldGlzbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tYWduZXRpc20gaW5wdXQge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4ubWFnbmV0aXNtIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5hbGlnbm1lbnQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi5hbGlnbm1lbnRUaXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagnetismComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-magnetism',
                templateUrl: './magnetism.component.html',
                styleUrls: ['./magnetism.component.scss'],
            }]
    }], function () { return [{ type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_3__["HotkeyService"] }]; }, { service: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/editor/editor.component */ "YJIf");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "oaKM");






const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'editor', component: _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"] },
    { path: '**', redirectTo: '/home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vaeZ":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tools/brush-attributes/brush-attributes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BrushAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushAttributesComponent", function() { return BrushAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ressources_global_variables_brush_pattern_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/ressources/global-variables/brush-pattern-names */ "+fG1");
/* harmony import */ var _app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/tools/brush.service */ "j+pl");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");






class BrushAttributesComponent {
    constructor(brushService) {
        this.brushService = brushService;
        this.patternNames = _app_ressources_global_variables_brush_pattern_names__WEBPACK_IMPORTED_MODULE_1__["PATTERN_NAMES"];
        this.toolWidth = brushService.brushData.lineWidth;
        this.brushService.setPattern(this.patternNames.FIRST_PATTERN);
    }
    changeWidth(newWidth) {
        this.toolWidth = newWidth;
        this.brushService.changeWidth(this.toolWidth);
    }
    setPattern(pattern) {
        this.brushService.setPattern(pattern);
    }
}
BrushAttributesComponent.ɵfac = function BrushAttributesComponent_Factory(t) { return new (t || BrushAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_2__["BrushService"])); };
BrushAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrushAttributesComponent, selectors: [["app-brush-attributes"]], decls: 21, vars: 5, consts: [["id", "brushAttributes"], [1, "toolName"], ["title", "\u00C9paisseur Ligne", 3, "min", "max", "step", "value", "valueChange"], ["id", "patterns"], ["type", "radio", "id", "pattern1", "name", "patterns", "checked", "", 3, "change"], ["src", "/assets/pattern1.png"], ["type", "radio", "name", "patterns", 3, "change"], ["src", "/assets/pattern2.png"], ["src", "/assets/pattern3.png"], ["src", "/assets/pattern4.png"], ["src", "/assets/pattern5.png"]], template: function BrushAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BrushAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrushAttributesComponent_Template_input_change_7_listener() { return ctx.setPattern(ctx.patternNames.FIRST_PATTERN); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrushAttributesComponent_Template_input_change_10_listener() { return ctx.setPattern(ctx.patternNames.SECOND_PATTERN); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrushAttributesComponent_Template_input_change_13_listener() { return ctx.setPattern(ctx.patternNames.THIRD_PATTERN); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrushAttributesComponent_Template_input_change_16_listener() { return ctx.setPattern(ctx.patternNames.FOURTH_PATTERN); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrushAttributesComponent_Template_input_change_19_listener() { return ctx.setPattern(ctx.patternNames.FIFTH_PATTERN); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.brushService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.brushService.minToolWidth)("max", ctx.brushService.maxToolWidth)("step", 1)("value", ctx.toolWidth);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]], styles: ["#brushAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\n#patterns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n\n#patterns[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 10px 0 10px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n\n\ninput[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n[type=radio][_ngcontent-%COMP%]    + img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin-top: 10px;\n}\n\n\n\n[type=radio][_ngcontent-%COMP%]:checked    + img[_ngcontent-%COMP%] {\n  outline: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9icnVzaC1hdHRyaWJ1dGVzL2JydXNoLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFHQSxlQUFBOztBQUNBO0VBQ0ksYUFBQTtBQUFKOztBQUdBLGlCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQSxtQkFBQTs7QUFDQTtFQUNJLHdCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xzL2JydXNoLWF0dHJpYnV0ZXMvYnJ1c2gtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNicnVzaEF0dHJpYnV0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XG59XG5cbiNwYXR0ZXJucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jcGF0dGVybnMgbGFiZWwge1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50b29sTmFtZSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4vL0NvZGUgYmVsb3cgaW5zcGlyZWQgYnkgYW4gYW5zd2VyIG9uIFN0YWNrb3ZlcmZsb3c6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3NTQxNjE0L3VzZS1pbWFnZXMtaW5zdGVhZC1vZi1yYWRpby1idXR0b25zXG5cbi8qIEhJREUgUkFESU8gKi9cbmlucHV0W3R5cGU9J3JhZGlvJ10ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIElNQUdFIFNUWUxFUyAqL1xuW3R5cGU9J3JhZGlvJ10gKyBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLyogQ0hFQ0tFRCBTVFlMRVMgKi9cblt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBpbWcge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrushAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brush-attributes',
                templateUrl: './brush-attributes.component.html',
                styleUrls: ['./brush-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_2__["BrushService"] }]; }, null); })();


/***/ }),

/***/ "w0tv":
/*!***********************************************************************************!*\
  !*** ./src/app/components/tools/pencil-attributes/pencil-attributes.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PencilAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PencilAttributesComponent", function() { return PencilAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/tools/pencil.service */ "ZiOh");
/* harmony import */ var _shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Attributes/slider/slider.component */ "FQBM");





class PencilAttributesComponent {
    constructor(pencilService) {
        this.pencilService = pencilService;
        this.toolWidth = pencilService.pencilData.lineWidth;
    }
    changeWidth(newWidth) {
        this.toolWidth = newWidth;
        this.pencilService.changeWidth(this.toolWidth);
    }
}
PencilAttributesComponent.ɵfac = function PencilAttributesComponent_Factory(t) { return new (t || PencilAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_1__["PencilService"])); };
PencilAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PencilAttributesComponent, selectors: [["app-pencil-attributes"]], decls: 5, vars: 5, consts: [["id", "pencilAttributes"], [1, "toolName"], ["title", "\u00C9paisseur Ligne", 3, "min", "max", "step", "value", "valueChange"]], template: function PencilAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PencilAttributesComponent_Template_app_slider_valueChange_4_listener($event) { return ctx.changeWidth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pencilService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.pencilService.minToolWidth)("max", ctx.pencilService.maxToolWidth)("step", 1)("value", ctx.toolWidth);
    } }, directives: [_shared_Attributes_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]], styles: ["#pencilAttributes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 5px 0 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cfcfcf;\n  width: 100%;\n  margin: 0;\n}\n\n.toolName[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9wZW5jaWwtYXR0cmlidXRlcy9wZW5jaWwtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvcGVuY2lsLWF0dHJpYnV0ZXMvcGVuY2lsLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGVuY2lsQXR0cmlidXRlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50b29sTmFtZSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PencilAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pencil-attributes',
                templateUrl: './pencil-attributes.component.html',
                styleUrls: ['./pencil-attributes.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_1__["PencilService"] }]; }, null); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _app_components_export_export_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/export/export.component */ "k77x");
/* harmony import */ var _app_components_saving_saving_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/saving/saving.component */ "Q8WQ");
/* harmony import */ var _app_components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/userguide/user-guide.component */ "rVPD");
/* harmony import */ var _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/ressources/global-variables/global-variables */ "Irla");
/* harmony import */ var _app_ressources_global_variables_sidebar_element_tooltips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/ressources/global-variables/sidebar-element-tooltips */ "BUhm");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/clipboard/clipboard.service */ "l+p6");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_new_drawing_new_drawing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/new-drawing/new-drawing.service */ "BA1N");
/* harmony import */ var _app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/tool-selection/tool-selection.service */ "zEF1");
/* harmony import */ var _app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/tools/selection-services/circle-selection.service */ "6MVv");
/* harmony import */ var _app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/services/tools/selection-services/magic-wand.service */ "NWRK");
/* harmony import */ var _app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/services/tools/selection-services/square-selection.service */ "6Ip1");
/* harmony import */ var _app_services_undo_redo_undo_redo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo.service */ "1gAd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");































const _c0 = ["cutButton"];
const _c1 = ["copyButton"];
const _c2 = ["pasteButton"];
const _c3 = ["undo"];
const _c4 = ["redo"];
class SidebarComponent {
    constructor(toolSelectionService, dialog, newDrawingService, undoRedoService, hotkeyService, squareSelectionService, circleSelectionService, magicWandService, clipboardService) {
        this.toolSelectionService = toolSelectionService;
        this.dialog = dialog;
        this.newDrawingService = newDrawingService;
        this.undoRedoService = undoRedoService;
        this.hotkeyService = hotkeyService;
        this.squareSelectionService = squareSelectionService;
        this.circleSelectionService = circleSelectionService;
        this.magicWandService = magicWandService;
        this.clipboardService = clipboardService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.elementDescriptions = _app_ressources_global_variables_sidebar_element_tooltips__WEBPACK_IMPORTED_MODULE_7__["SIDEBAR_ELEMENT_TOOLTIPS"];
        this.tooltipShowDelay = _app_ressources_global_variables_global_variables__WEBPACK_IMPORTED_MODULE_6__["TOOLTIP_DELAY"];
        this.toolNames = _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAMES"];
        this.selectedTool = this.toolNames.PENCIL_TOOL_NAME;
    }
    ngOnInit() {
        this.toolSelectionService
            .getCurrentTool()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$))
            .subscribe((tool) => {
            if (_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAMES_ARRAY"].includes(tool)) {
                this.selectedTool = tool;
            }
        });
    }
    ngAfterViewInit() {
        this.undoRedoService.getUndoAvailability().subscribe((value) => {
            this.setButtonAvailability(value, this.undoButton);
        });
        this.undoRedoService.getRedoAvailability().subscribe((value) => {
            this.setButtonAvailability(value, this.redoButton);
        });
        this.squareSelectionService.getIsSelectionEmptySubject().subscribe((value) => {
            this.setButtonAvailability(!value, this.cutButton);
            this.setButtonAvailability(!value, this.copyButton);
        });
        this.circleSelectionService.getIsSelectionEmptySubject().subscribe((value) => {
            this.setButtonAvailability(!value, this.cutButton);
            this.setButtonAvailability(!value, this.copyButton);
        });
        this.magicWandService.getIsSelectionEmptySubject().subscribe((value) => {
            this.setButtonAvailability(!value, this.cutButton);
            this.setButtonAvailability(!value, this.copyButton);
        });
        this.clipboardService.getIsPasteAvailableSubject().subscribe((value) => {
            this.setButtonAvailability(value, this.pasteButton);
        });
    }
    onToolChange(event) {
        const target = event.target;
        if (target.value) {
            this.toolSelectionService.changeTool(target.value);
        }
    }
    selectAll() {
        this.toolSelectionService.selectAll();
    }
    openUserguide() {
        this.dialog.open(_app_components_userguide_user_guide_component__WEBPACK_IMPORTED_MODULE_5__["UserGuideComponent"]);
    }
    openDialog() {
        this.newDrawingService.openWarningModal();
    }
    openSaveWindow() {
        this.dialog.open(_app_components_saving_saving_component__WEBPACK_IMPORTED_MODULE_4__["SavingComponent"]);
    }
    openCarouselWindow() {
        this.dialog.open(_app_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]);
    }
    openExportWindow() {
        this.dialog.open(_app_components_export_export_component__WEBPACK_IMPORTED_MODULE_3__["ExportComponent"]);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    setButtonAvailability(value, buttonRef) {
        if (value) {
            buttonRef.nativeElement.style.cursor = 'pointer';
            buttonRef.nativeElement.style.opacity = '1';
        }
        else {
            buttonRef.nativeElement.style.cursor = 'not-allowed';
            buttonRef.nativeElement.style.opacity = '0.5';
        }
    }
    cut() {
        switch (this.selectedTool) {
            case this.toolNames.SQUARE_SELECTION_TOOL_NAME: {
                this.squareSelectionService.cut();
                break;
            }
            case this.toolNames.CIRCLE_SELECTION_TOOL_NAME: {
                this.circleSelectionService.cut();
                break;
            }
            case this.toolNames.MAGIC_WAND_TOOL_NAME: {
                this.magicWandService.cut();
                break;
            }
        }
    }
    copy() {
        switch (this.selectedTool) {
            case this.toolNames.SQUARE_SELECTION_TOOL_NAME: {
                this.squareSelectionService.copy();
                break;
            }
            case this.toolNames.CIRCLE_SELECTION_TOOL_NAME: {
                this.circleSelectionService.copy();
                break;
            }
            case this.toolNames.MAGIC_WAND_TOOL_NAME: {
                this.magicWandService.copy();
                break;
            }
        }
    }
    paste() {
        switch (this.selectedTool) {
            case this.toolNames.SQUARE_SELECTION_TOOL_NAME: {
                this.squareSelectionService.paste();
                break;
            }
            case this.toolNames.CIRCLE_SELECTION_TOOL_NAME: {
                this.circleSelectionService.paste();
                break;
            }
            case this.toolNames.MAGIC_WAND_TOOL_NAME: {
                this.magicWandService.paste();
                break;
            }
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_12__["ToolSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_new_drawing_new_drawing_service__WEBPACK_IMPORTED_MODULE_11__["NewDrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_undo_redo_undo_redo_service__WEBPACK_IMPORTED_MODULE_16__["UndoRedoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_10__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_15__["SquareSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_13__["CircleSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_14__["MagicWandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_9__["ClipboardService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cutButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.copyButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pasteButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.undoButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.redoButton = _t.first);
    } }, decls: 89, vars: 118, consts: [[1, "sidebar"], [1, "sidebarSection", "bottomDivider"], ["type", "radio", "id", "new-drawing", "matTooltipPosition", "right", 1, "material-icons", "sidebarSectionTop", 3, "matTooltip", "matTooltipShowDelay", "click"], [1, "toggleButtonGroup", "sidebarSection"], ["type", "radio", "name", "tool", 3, "id", "value", "checked", "change"], [3, "for"], ["matTooltipPosition", "right", 1, "material-icons", 3, "matTooltip", "matTooltipShowDelay"], ["matTooltipPosition", "right", 1, "fas", "fa-pen-fancy", 3, "matTooltip", "matTooltipShowDelay"], ["matTooltipPosition", "right", 1, "fas", "fa-spray-can", 3, "matTooltip", "matTooltipShowDelay"], ["matTooltipPosition", "right", 1, "fas", "fa-stamp", 3, "matTooltip", "matTooltipShowDelay"], ["matTooltipPosition", "right", 1, "fas", "fa-magic", 3, "matTooltip", "matTooltipShowDelay"], ["matTooltipPosition", "right", 1, "fas", "fa-fill-drip", 3, "matTooltip", "matTooltipShowDelay"], ["matTooltipPosition", "right", 1, "fas", "fa-eraser", 3, "matTooltip", "matTooltipShowDelay"], ["matTooltipPosition", "right", "mat-button", "", 1, "material-icons", "disabled", 3, "matTooltip", "matTooltipShowDelay", "click"], ["cutButton", ""], ["copyButton", ""], ["pasteButton", ""], [1, "topDivider", "sidebarSection"], ["matTooltipPosition", "right", "mat-button", "", 1, "material-icons", 3, "matTooltip", "matTooltipShowDelay", "click"], ["id", "new-drawing", "matTooltipPosition", "right", "mat-button", "", 1, "material-icons", 3, "matTooltip", "matTooltipShowDelay", "click"], ["id", "undo", "matTooltipPosition", "right", 1, "material-icons", "disabled", 3, "matTooltip", "matTooltipShowDelay", "click"], ["undo", ""], ["id", "redo", "matTooltipPosition", "right", 1, "material-icons", "disabled", 3, "matTooltip", "matTooltipShowDelay", "click"], ["redo", ""]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_2_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_4_listener() { return ctx.selectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "select_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_7_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_11_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_14_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "brush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_18_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_21_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "text_format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_25_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_28_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "crop_square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_32_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "panorama_fish_eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_36_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "change_history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_40_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_44_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "vignette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_48_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "highlight_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_52_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_55_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_58_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_61_listener($event) { return ctx.onToolChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "colorize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_65_listener() { return ctx.cut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "content_cut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 13, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_68_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 13, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_71_listener() { return ctx.paste(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "content_paste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_75_listener() { return ctx.openCarouselWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "collections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_77_listener() { return ctx.openSaveWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_79_listener() { return ctx.openExportWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "save_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_81_listener() { return ctx.openUserguide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-icon", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_83_listener() { return ctx.undoRedoService.undo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_icon_click_86_listener() { return ctx.undoRedoService.redo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "redo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.NEW_DRAWING_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.SELECT_ALL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.PENCIL_TOOL_NAME)("value", ctx.toolNames.PENCIL_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.PENCIL_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.PENCIL_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.PENCIL_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.PEN_TOOL_NAME)("value", ctx.toolNames.PEN_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.PEN_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.PEN_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.PEN_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.BRUSH_TOOL_NAME)("value", ctx.toolNames.BRUSH_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.BRUSH_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.BRUSH_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.BRUSH_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.SPRAY_TOOL_NAME)("value", ctx.toolNames.SPRAY_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.SPRAY_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.SPRAY_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.SPRAY_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.TEXT_TOOL_NAME)("value", ctx.toolNames.TEXT_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.TEXT_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.TEXT_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.TEXT_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.STAMP_TOOL_NAME)("value", ctx.toolNames.STAMP_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.STAMP_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.STAMP_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.STAMP_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.SQUARE_TOOL_NAME)("value", ctx.toolNames.SQUARE_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.SQUARE_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.SQUARE_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.SQUARE_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.CIRCLE_TOOL_NAME)("value", ctx.toolNames.CIRCLE_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.CIRCLE_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.CIRCLE_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.CIRCLE_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.POLYGON_TOOL_NAME)("value", ctx.toolNames.POLYGON_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.POLYGON_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.POLYGON_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.POLYGON_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.LINE_TOOL_NAME)("value", ctx.toolNames.LINE_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.LINE_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.LINE_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.LINE_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.CIRCLE_SELECTION_TOOL_NAME)("value", ctx.toolNames.CIRCLE_SELECTION_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.CIRCLE_SELECTION_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.CIRCLE_SELECTION_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.CIRCLE_SELECTION_TOOL_NAME)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.SQUARE_SELECTION_TOOL_NAME)("value", ctx.toolNames.SQUARE_SELECTION_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.SQUARE_SELECTION_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.SQUARE_SELECTION_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.SQUARE_SELECTION_TOOL_NAME)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.MAGIC_WAND_TOOL_NAME)("value", ctx.toolNames.MAGIC_WAND_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.MAGIC_WAND_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.MAGIC_WAND_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.MAGIC_WAND_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.FILL_TOOL_NAME)("value", ctx.toolNames.FILL_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.FILL_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.FILL_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.FILL_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.ERASER_TOOL_NAME)("value", ctx.toolNames.ERASER_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.ERASER_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.ERASER_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.ERASER_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.toolNames.PIPETTE_TOOL_NAME)("value", ctx.toolNames.PIPETTE_TOOL_NAME)("checked", ctx.selectedTool.includes(ctx.toolNames.PIPETTE_TOOL_NAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.toolNames.PIPETTE_TOOL_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.PIPETTE_TOOL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.CUT_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.COPY_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.PASTE_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.CAROUSEL_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.SAVE_DRAWING_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.EXPORT_DRAWING_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.HELP_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.UNDO_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.elementDescriptions.REDO_DESCRIPTION)("matTooltipShowDelay", ctx.tooltipShowDelay);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltip"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 76px;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #3b3737;\n  display: flex;\n  flex-flow: column;\n  overflow-y: hidden;\n}\n\n.sidebarSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.topDivider[_ngcontent-%COMP%] {\n  border-top: #c9c9c9;\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.bottomDivider[_ngcontent-%COMP%] {\n  border-bottom: #c9c9c9;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 7px;\n  color: #f5f5f5;\n}\n\n.toggleButtonGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.toggleButtonGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background-color: #dbdada;\n}\n\n.toggleButtonGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.toggleButtonGroup[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.toggleButtonGroup[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n\n.toggleButtonGroup[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n@media screen and (max-height: 380px) {\n  .material-icons[_ngcontent-%COMP%] {\n    font-size: 4vh;\n  }\n\n  .mat-icon[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQUk7RUFDSSxZQUFBO0FBRVI7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUFJO0VBQ0ksWUFBQTtBQUVSOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGNBQUE7RUFDTjs7RUFFRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VBQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDc2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzczNztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLnNpZGViYXJTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG5cbi50b3BEaXZpZGVyIHtcbiAgICBib3JkZXItdG9wOiAjYzljOWM5O1xuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbn1cblxuLmJvdHRvbURpdmlkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICNjOWM5Yzk7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgY29sb3I6ICNmNWY1ZjU7XG59XG5cbi50b2dnbGVCdXR0b25Hcm91cCBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50b2dnbGVCdXR0b25Hcm91cCBsYWJlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGFkYTtcbiAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufVxuXG4udG9nZ2xlQnV0dG9uR3JvdXAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZ2dsZUJ1dHRvbkdyb3VwIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59XG5cbi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAzODBweCkge1xuICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgIH1cblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tool_selection_tool_selection_service__WEBPACK_IMPORTED_MODULE_12__["ToolSelectionService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _app_services_new_drawing_new_drawing_service__WEBPACK_IMPORTED_MODULE_11__["NewDrawingService"] }, { type: _app_services_undo_redo_undo_redo_service__WEBPACK_IMPORTED_MODULE_16__["UndoRedoService"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_10__["HotkeyService"] }, { type: _app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_15__["SquareSelectionService"] }, { type: _app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_13__["CircleSelectionService"] }, { type: _app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_14__["MagicWandService"] }, { type: _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_9__["ClipboardService"] }]; }, { cutButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cutButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], copyButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['copyButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], pasteButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pasteButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], undoButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['undo', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], redoButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['redo', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "zDum":
/*!*******************************************************!*\
  !*** ./src/app/ressources/texts/tool-descriptions.ts ***!
  \*******************************************************/
/*! exports provided: OTHER_FEATURES, UNDO_REDO, BASIC_TOOLS, DRAWING_TOOLS, SHAPES, FILL, TRANSFORMATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER_FEATURES", function() { return OTHER_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDO_REDO", function() { return UNDO_REDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_TOOLS", function() { return BASIC_TOOLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAWING_TOOLS", function() { return DRAWING_TOOLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILL", function() { return FILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMATIONS", function() { return TRANSFORMATIONS; });
const OTHER_FEATURES = [
    {
        NAME: 'Palette de couleur',
        DESCRIPTION: 'Cet outil permet de définir la couleur de tous les outils. Vous pouvez définir deux couleurs : principale et secondaire. Ces deux couleurs peuvent intéragir entre eux. Vous pouvez choisir la couleur avec le panneau de couleur contenant toutes les couleurs. En changeant de couleur, l ancienne couleur est enregistré pour vous permettre de la récupérer au besoin. ',
        PICTURE: './../../../assets/img/couleur.png',
    },
    {
        NAME: 'Magnétisme',
        DESCRIPTION: "Cette option déplacera une boite englobante sur la ligne de la grille la plus proche lorsque vous la déplacez avec la souris. Ceci se fait en y et x. Il suffit d'activer cette outil pour l'utiliser. Il est aussi possible de faire le déplacement avec les touches directionnelles",
        PICTURE: './../../../assets/img/magnetisme.png',
    },
    {
        NAME: 'Grille',
        DESCRIPTION: "Cette fonctionnalité permet d'afficher une grille sur la surface de dessin. Il est possible d'activer et de désactiver la grille, de lui assigner une valeur d'opacité et d'indiquer la taille des carrées. Il est possible de modifier la taille des carrées avec les touches + et -",
        PICTURE: './../../../assets/img/grille.png',
    },
];
const UNDO_REDO = [
    {
        NAME: 'Annuler-refaire',
        DESCRIPTION: "Cet outil permet d'annuler et de refaire vos dernières modifications sur la surface du dessin. IL est possible d'utiliser le raccourci CTRL + Z pour annuler une action et le raccourci CTRL + SHIFT + Z pour refaire une action.",
        PICTURE: './../../../assets/img/annuler.png',
    },
];
const BASIC_TOOLS = [
    {
        NAME: 'Efface',
        DESCRIPTION: 'Cet outil permet d effacer tout ce qui se trouve sur la surface de dessin. Il peut avoir différente taille ce qui permet d effacer plus rapidement. ',
        PICTURE: './../../../assets/video/efface.mp4',
    },
    {
        NAME: 'Ligne',
        DESCRIPTION: "Cet outil permet de tracer une ligne composée d'un ou plusieurs segments. Un premier clic définit la position de départ de la ligne. Ensuite, chaque clic qui suit « connecte » avec le clic qui le précède pour former un segment de la ligne. Un double clic permet de terminer le segment. Si le double clic est fait près du point initial de la ligne, le segment se fusionnera au point initial. \nLa commande shifth permet de mettre la ligne a 90° ou 45°  de celle tracé précédemment. Il est possible d'afficher un point de jonction entre les segments en cliquant dans la boîte «Afficher jonction». La couleur des points de jonction est déterminée par la couleur secondaire.   ",
        PICTURE: './../../../assets/video/ligne.mp4',
    },
    {
        NAME: 'Texte',
        DESCRIPTION: "Cet outil permet d'écrire du texte sur la surface de dessin. Un indicateur est présent dans le texte pour vous permettre de savoir où vous êtes rendu. Il est possible de bouger cet indicateur avec les touches directionnelles. Il est possible de changer la taille, la police, le style et l'alignement du texte.",
        PICTURE: './../../../assets/video/texte.mp4',
    },
    {
        NAME: 'Étampe',
        DESCRIPTION: "Cet outil permet d'apposer de petites images sur le dessin. Pour l'afficher sur la surface de dessin, il suffit de faire un clic gauche à l'endroit où on désire la mettre. Il est possible faire pivoter l'étampe sur elle-même avec la roulette de la souris.",
        PICTURE: './../../../assets/video/etampe.mp4',
    },
    {
        NAME: 'Pipette',
        DESCRIPTION: "Cet outil permet de sélectionner la couleur sous la souris. Un cercle de prévisualisation qui représente les pixels sous la souris surdimensionnés et qui entoure le pixel qui sera sélectionné est présenté dans la barre d'attribut. Un clic gauche change la couleur principal et un clic gauche la couleur secondaire",
        PICTURE: './../../../assets/video/pipette.mp4',
    },
];
const DRAWING_TOOLS = [
    {
        NAME: 'Crayon',
        DESCRIPTION: 'Le crayon vous permet de tracer des traits simples. Il peut être de différente épaisseur. Vous pouvez changer la taille avec les boutons dans la barre a gauche',
        PICTURE: './../../../assets/video/crayon.mp4',
    },
    {
        NAME: 'Pinceau',
        DESCRIPTION: "Le pinceau permet de faire des traits de différente texture. Vous pouvez changer de texture en sélectionnant l'image correspondant à la texture désirée.",
        PICTURE: './../../../assets/video/brush.mp4',
    },
    {
        NAME: 'Plume',
        DESCRIPTION: "La plume permet de tracer une ligne très mince selon un angle choisi. Vous pouvez changer l'angle du trait à l'aide la roulette de la souris.",
        PICTURE: './../../../assets/video/plume.mp4',
    },
    {
        NAME: 'Aérosol',
        DESCRIPTION: "L'aérosol simule un effet de peinture en aérosol. Dès que le bouton est enfoncé, un jet de peinture est vaporisé sous le pointeur de la souris.",
        PICTURE: './../../../assets/video/aerosol.mp4',
    },
];
const SHAPES = [
    {
        NAME: 'Rectangle',
        DESCRIPTION: 'Cet outil permet de dessiner des rectangles de différente taille. Le rectangle tracé peut avoir un remplissage uni, juste un contour ou les deux. La couleur du remplissage est la couleur primaire et la couleur du contour est la couleur secondaire. Il est possible de faire un carré avec la commande shift.',
        PICTURE: './../../../assets/video/rectangle.mp4',
    },
    {
        NAME: 'Ellipse',
        DESCRIPTION: "Cet outil permet de dessiner des ellipses de différente taille. L'ellipse tracé peut avoir un remplissage complet et uni, juste un contour ou les deux. La couleur du remplissage est la couleur primaire et la couleur du contour est la couleur secondaire. Il est possible de faire un cercle parfait avec la commande shift.",
        PICTURE: './../../../assets/video/ellipse.mp4',
    },
    {
        NAME: 'Polygone',
        DESCRIPTION: 'Cet outil permet de dessiner des polygones de différente taille. Le polygone tracé peut avoir un remplissage complet et uni, juste un contour ou les deux. La couleur du remplissage est la couleur primaire et la couleur du contour est la couleur secondaire. Il est possible de choisir le nombre de côté du polygone (3 à 12)',
        PICTURE: './../../../assets/video/polygone.mp4',
    },
];
const FILL = [
    {
        NAME: 'Sceau de peinture ',
        DESCRIPTION: "Cet outil permet de remplir une région de la couleur principal. La tolérance définit l'étendue de la région à remplir.",
        PICTURE: './../../../assets/video/remplissage.mp4',
    },
];
const TRANSFORMATIONS = [
    {
        NAME: 'Déplacement par rectangle',
        DESCRIPTION: "Cette fonctionnalité permet de sélection une section en forme de rectangle de la surface de dessin et de déplacer cette sélection avec la souris à l'aide d'un glisser-déposer avec le bouton gauche de la souris. ",
        PICTURE: './../../../assets/video/selection_rectangle.mp4',
    },
    {
        NAME: 'Déplacement par ellipse',
        DESCRIPTION: "Cette fonctionnalité permet de sélection une section en forme d'ellipse de la surface de dessin et de déplacer cette sélection avec la souris à l'aide d'un glisser-déposer avec le bouton gauche de la souris. ",
        PICTURE: './../../../assets/video/selection_ellipse.mp4',
    },
    {
        NAME: "Rotation d'une sélection",
        DESCRIPTION: 'Cette fonctionnalité permet de pivoter une sélection sur son centre avec le roulette de la souris.',
        PICTURE: './../../../assets/video/rotation_selection.mp4',
    },
    {
        NAME: "Redimensionnement d'une sélection",
        DESCRIPTION: 'Cette fonctionnalité permet de redimensionner la sélection sur sa hauteur, sa largeur ou les deux en même temps. Pour ce faire, la surface dispose de trois points de contrôles sur les extrémités de la surface. Il suffit de glisser et déposer avec le bouton gauche de la souris.',
        PICTURE: './../../../assets/video/redimensionnement_selection.mp4',
    },
    {
        NAME: 'Redimensionnement',
        DESCRIPTION: 'Cette fonctionnalité permet de redimensionner la surface de dessin sur sa hauteur, sa largeur ou les deux en même temps. Pour ce faire, la surface dispose de trois points de contrôles sur les extrémités de la surface. Il suffit de glisser et déposer avec le bouton gauche de la souris.',
        PICTURE: './../../../assets/video/redimensionnement.mp4',
    },
    {
        NAME: 'Baguette magique',
        DESCRIPTION: 'Cette fonctionnalité permet de sélectionner avec un clic gauche une région spécifique sur la surface de dessin.',
        PICTURE: './../../../assets/video/baguette_magique.mp4',
    },
    {
        NAME: 'Copier Coller Couper',
        DESCRIPTION: 'Cet outil permet de copier une sélection et de la coller sur la surface de dessin. On peut aussi faire une sélection et la couper',
        PICTURE: './../../../assets/video/copier-coller-couper.mp4',
    },
];


/***/ }),

/***/ "zEF1":
/*!*******************************************************************!*\
  !*** ./src/app/services/tool-selection/tool-selection.service.ts ***!
  \*******************************************************************/
/*! exports provided: ToolSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolSelectionService", function() { return ToolSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _app_components_export_export_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/export/export.component */ "k77x");
/* harmony import */ var _app_components_saving_saving_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/saving/saving.component */ "Q8WQ");
/* harmony import */ var _app_ressources_global_variables_sidebar_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/ressources/global-variables/sidebar-elements */ "LNOw");
/* harmony import */ var _app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/ressources/global-variables/tool-names */ "Xtub");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "bDCT");
/* harmony import */ var _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/hotkey/hotkey.service */ "eXtk");
/* harmony import */ var _app_services_new_drawing_new_drawing_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/new-drawing/new-drawing.service */ "BA1N");
/* harmony import */ var _app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/tools/brush.service */ "j+pl");
/* harmony import */ var _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/tools/circle.service */ "0+1q");
/* harmony import */ var _app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/tools/eraser.service */ "UqM6");
/* harmony import */ var _app_services_tools_fill_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/services/tools/fill.service */ "12tw");
/* harmony import */ var _app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/services/tools/line.service */ "7kIh");
/* harmony import */ var _app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/services/tools/pen.service */ "jZBZ");
/* harmony import */ var _app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/services/tools/pencil.service */ "ZiOh");
/* harmony import */ var _app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/services/tools/pipette.service */ "2Npv");
/* harmony import */ var _app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/services/tools/polygon.service */ "Spv2");
/* harmony import */ var _app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/services/tools/selection-services/circle-selection.service */ "6MVv");
/* harmony import */ var _app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/services/tools/selection-services/magic-wand.service */ "NWRK");
/* harmony import */ var _app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/services/tools/selection-services/square-selection.service */ "6Ip1");
/* harmony import */ var _app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/services/tools/spray.service */ "PE9K");
/* harmony import */ var _app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/services/tools/square.service */ "O4K9");
/* harmony import */ var _app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @app/services/tools/stamp.service */ "afaw");
/* harmony import */ var _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @app/services/tools/text.service */ "2Eww");
/* harmony import */ var _app_services_undo_redo_undo_redo_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @app/services/undo-redo/undo-redo.service */ "1gAd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



















































class ToolSelectionService {
    constructor(dialog, hotkeyService, pencilService, penService, brushService, sprayService, squareService, circleService, lineService, fillService, eraserService, squareSelectionService, circleSelectionService, polygonService, pipetteService, drawingService, newDrawingService, magicWandService, undoRedoService, textService, stampService) {
        this.dialog = dialog;
        this.hotkeyService = hotkeyService;
        this.pencilService = pencilService;
        this.penService = penService;
        this.brushService = brushService;
        this.sprayService = sprayService;
        this.squareService = squareService;
        this.circleService = circleService;
        this.lineService = lineService;
        this.fillService = fillService;
        this.eraserService = eraserService;
        this.squareSelectionService = squareSelectionService;
        this.circleSelectionService = circleSelectionService;
        this.polygonService = polygonService;
        this.pipetteService = pipetteService;
        this.drawingService = drawingService;
        this.newDrawingService = newDrawingService;
        this.magicWandService = magicWandService;
        this.undoRedoService = undoRedoService;
        this.textService = textService;
        this.stampService = stampService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_27__["Subject"]();
        this.sidebarElements = _app_ressources_global_variables_sidebar_elements__WEBPACK_IMPORTED_MODULE_5__["SIDEBAR_ELEMENTS"];
        this.currentToolName = new rxjs__WEBPACK_IMPORTED_MODULE_27__["Subject"]();
        this.tools = new Map([
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].PENCIL_TOOL_NAME, pencilService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].PEN_TOOL_NAME, penService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].BRUSH_TOOL_NAME, brushService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].SPRAY_TOOL_NAME, sprayService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].SQUARE_TOOL_NAME, squareService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].CIRCLE_TOOL_NAME, circleService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].LINE_TOOL_NAME, lineService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].FILL_TOOL_NAME, fillService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].ERASER_TOOL_NAME, eraserService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].SQUARE_SELECTION_TOOL_NAME, squareSelectionService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].CIRCLE_SELECTION_TOOL_NAME, circleSelectionService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].PIPETTE_TOOL_NAME, pipetteService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].POLYGON_TOOL_NAME, polygonService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].TEXT_TOOL_NAME, textService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].STAMP_TOOL_NAME, stampService],
            [_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].MAGIC_WAND_TOOL_NAME, magicWandService],
        ]);
        this.currentTool = pencilService;
        this.hotkeyService
            .getKey()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_28__["takeUntil"])(this.destroy$))
            .subscribe((tool) => {
            if (this.tools.has(tool)) {
                this.changeTool(tool);
            }
            else {
                this.selectItem(tool);
            }
        });
    }
    changeTool(toolName) {
        const selectedTool = this.tools.get(toolName);
        if (selectedTool) {
            this.currentTool.reset();
            this.currentTool = selectedTool;
            this.currentTool.initialize();
            this.currentTool.setCursor();
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.currentToolName.next(toolName);
        }
    }
    selectItem(toolName) {
        switch (toolName) {
            case this.sidebarElements.NEW_DRAWING_NAME:
                this.newDrawingService.openWarningModal();
                break;
            case this.sidebarElements.CAROUSEL_NAME:
                this.dialog.open(_app_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]);
                break;
            case this.sidebarElements.SAVE_SERVER_NAME:
                this.dialog.open(_app_components_saving_saving_component__WEBPACK_IMPORTED_MODULE_4__["SavingComponent"]);
                break;
            case this.sidebarElements.EXPORT_DRAWING_NAME:
                this.dialog.open(_app_components_export_export_component__WEBPACK_IMPORTED_MODULE_3__["ExportComponent"]);
                break;
            case this.sidebarElements.SELECT_ALL:
                this.selectAll();
                break;
            case this.sidebarElements.UNDO:
                this.undo();
                break;
            case this.sidebarElements.REDO:
                this.redo();
                break;
        }
    }
    undo() {
        this.undoRedoService.undo();
    }
    redo() {
        this.undoRedoService.redo();
    }
    selectAll() {
        this.changeTool(_app_ressources_global_variables_tool_names__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAMES"].SQUARE_SELECTION_TOOL_NAME);
        this.squareSelectionService.selectAll();
    }
    getCurrentToolName() {
        return this.currentTool.name;
    }
    setCurrentToolCursor() {
        this.currentTool.setCursor();
    }
    currentToolKeyUp(event) {
        this.currentTool.onKeyUp(event);
    }
    currentToolKeyDown(event) {
        this.currentTool.onKeyDown(event);
    }
    currentToolMouseMove(event) {
        this.currentTool.onMouseMove(event);
    }
    currentToolMouseDown(event) {
        this.currentTool.onMouseDown(event);
    }
    currentToolMouseUp(event) {
        this.currentTool.onMouseUp(event);
    }
    currentToolMouseLeave() {
        this.currentTool.onMouseLeave();
    }
    currentToolMouseEnter(event) {
        this.currentTool.onMouseEnter(event);
    }
    currentToolWheelEvent(event) {
        this.currentTool.onWheelEvent(event);
    }
    getCurrentTool() {
        return this.currentToolName.asObservable();
    }
}
ToolSelectionService.ɵfac = function ToolSelectionService_Factory(t) { return new (t || ToolSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_8__["HotkeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_16__["PencilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_15__["PenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_10__["BrushService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_22__["SprayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_23__["SquareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_11__["CircleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_14__["LineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_fill_service__WEBPACK_IMPORTED_MODULE_13__["FillService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_12__["EraserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_21__["SquareSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_19__["CircleSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_18__["PolygonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_17__["PipetteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_new_drawing_new_drawing_service__WEBPACK_IMPORTED_MODULE_9__["NewDrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_20__["MagicWandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_undo_redo_undo_redo_service__WEBPACK_IMPORTED_MODULE_26__["UndoRedoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_25__["TextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_24__["StampService"])); };
ToolSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToolSelectionService, factory: ToolSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _app_services_hotkey_hotkey_service__WEBPACK_IMPORTED_MODULE_8__["HotkeyService"] }, { type: _app_services_tools_pencil_service__WEBPACK_IMPORTED_MODULE_16__["PencilService"] }, { type: _app_services_tools_pen_service__WEBPACK_IMPORTED_MODULE_15__["PenService"] }, { type: _app_services_tools_brush_service__WEBPACK_IMPORTED_MODULE_10__["BrushService"] }, { type: _app_services_tools_spray_service__WEBPACK_IMPORTED_MODULE_22__["SprayService"] }, { type: _app_services_tools_square_service__WEBPACK_IMPORTED_MODULE_23__["SquareService"] }, { type: _app_services_tools_circle_service__WEBPACK_IMPORTED_MODULE_11__["CircleService"] }, { type: _app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_14__["LineService"] }, { type: _app_services_tools_fill_service__WEBPACK_IMPORTED_MODULE_13__["FillService"] }, { type: _app_services_tools_eraser_service__WEBPACK_IMPORTED_MODULE_12__["EraserService"] }, { type: _app_services_tools_selection_services_square_selection_service__WEBPACK_IMPORTED_MODULE_21__["SquareSelectionService"] }, { type: _app_services_tools_selection_services_circle_selection_service__WEBPACK_IMPORTED_MODULE_19__["CircleSelectionService"] }, { type: _app_services_tools_polygon_service__WEBPACK_IMPORTED_MODULE_18__["PolygonService"] }, { type: _app_services_tools_pipette_service__WEBPACK_IMPORTED_MODULE_17__["PipetteService"] }, { type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"] }, { type: _app_services_new_drawing_new_drawing_service__WEBPACK_IMPORTED_MODULE_9__["NewDrawingService"] }, { type: _app_services_tools_selection_services_magic_wand_service__WEBPACK_IMPORTED_MODULE_20__["MagicWandService"] }, { type: _app_services_undo_redo_undo_redo_service__WEBPACK_IMPORTED_MODULE_26__["UndoRedoService"] }, { type: _app_services_tools_text_service__WEBPACK_IMPORTED_MODULE_25__["TextService"] }, { type: _app_services_tools_stamp_service__WEBPACK_IMPORTED_MODULE_24__["StampService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map