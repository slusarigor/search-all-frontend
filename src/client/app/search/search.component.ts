import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  values: string = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
        .subscribe(results => {
          this.results = results;
        });
  }

}
