import { Component } from '@angular/core';
import { BookListComponent } from '../../ui/blocks/book-list/book-list.component';

@Component({
  selector: 'app-book-list-container',
  standalone: true,
  imports: [BookListComponent],
  templateUrl: './book-list-container.component.html',
})
export class BookListContainerComponent {}
