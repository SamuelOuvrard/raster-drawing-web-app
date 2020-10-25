import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrawingData } from '@common/communication/drawing-data';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DatabaseService {
    private readonly BASE_URL: string = 'http://localhost:3000/api/database';

    constructor(private http: HttpClient) {}

    addDrawing(drawingData: DrawingData): Observable<void> {
        return this.http.post<void>(this.BASE_URL + '/addDrawing', drawingData).pipe(catchError(this.handleError<void>('addDrawing')));
    }

    deleteDrawing(id: string): Observable<string> {
        console.log(id);
        return this.http.delete<string>(this.BASE_URL + '/deleteDrawing/' + id).pipe(catchError(this.handleError<string>('deleteDrawing')));
    }

    getDrawingData(): Observable<DrawingData[]> {
        return this.http.get<DrawingData[]>(this.BASE_URL + '/getDrawingData').pipe(catchError(this.handleError<DrawingData[]>('getDrawing')));
    }

    private handleError<T>(request: string, result?: T): (error: Error) => Observable<T> {
        return (error: Error): Observable<T> => {
            return of(result as T);
        };
    }
}
