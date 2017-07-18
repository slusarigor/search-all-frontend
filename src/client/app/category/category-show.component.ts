import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CategoryService} from "./category.service";
import {Category} from "./category";
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  providers: [CategoryService],
  styleUrls: ['./category-show.component.scss']
})
export class CategoryShowComponent implements OnInit {
  id: number;
  category: Category;
  lat: number = 49.8398093;
  lng: number = 23.9935223;
  markers: marker[] = [];

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {}

  addMarkers(category): Category {
    if(category){
      if(category.shops) {
        for (let shop_index in category.shops) {
          let shop = category.shops[shop_index];
          for (let address in shop.shop_addresses) {
            let m = shop.shop_addresses[address];
            this.markers.push({
              lat: m.latitude,
              lng: m.longitude,
              info: shop.name + ". " + m.address
            });
          }
        }
      }
    }
    return category;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  setPosition(position){
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    console.log(position.coords);
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.categoryService.show(this.id)
                          .subscribe(
                              category => this.category = this.addMarkers(category)
                          );
    });
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  info?: string;
  draggable?: boolean;
}