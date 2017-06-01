import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CategoryService} from "./category.service";
import {Category} from "./category";

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  providers: [CategoryService],
  styleUrls: ['./category-show.component.scss']
})
export class CategoryShowComponent implements OnInit {
  id: number;
  category: Category;

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.categoryService.show(this.id)
                          .subscribe(
                              category => this.category = category
                          );
    });
  }
}
