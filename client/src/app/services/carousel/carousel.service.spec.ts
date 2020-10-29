/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { CarouselService } from './carousel.service';

describe('Service: Carousel', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CarouselService],
        });
    });

    it('should ...', inject([CarouselService], (service: CarouselService) => {
        expect(service).toBeTruthy();
    }));
});
