import { TestBed } from '@angular/core/testing';

import { ContinueDrawingService } from '@app/services/continue-drawing/continue-drawing.service';

describe('ContinueDrawingService', () => {
    let service: ContinueDrawingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: ContinueDrawingService, useValue: {} }],
        });
        service = TestBed.inject(ContinueDrawingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
