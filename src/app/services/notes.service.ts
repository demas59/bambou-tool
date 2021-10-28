import { Injectable } from '@angular/core';
import Notes from 'src/classes/Notes';
import { Observable, of } from 'rxjs';
import { NOTES } from './mock-notes';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Notes[] = [];

  getNotes(): Observable<Notes[]> {
    return of(NOTES);
  }
}
