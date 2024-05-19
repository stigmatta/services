import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from './filter-service.service';
import { FormsModule } from '@angular/forms';
import { SortService } from './sort.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers: [FilterService,SortService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "products-list";
  originalProducts: string[] = [];
  filteredProducts: string[] = [];
  filter: string = '';


  digits: number[] = [];
  sortedDigits:number[]=[];

  constructor(private productService: FilterService,private digitsService:SortService) {
    this.originalProducts = this.productService.getData();
    this.digits = this.digitsService.getArray();
    this.sortedDigits=this.digits;
    this.applyFilter();
  }

  applyFilter() {
    if (this.filter.trim() !== '') {
      this.filteredProducts = this.productService.filterProducts(this.filter);
    } else {
      this.filteredProducts = this.originalProducts;
    }

  }

  onSubmit(){
    this.applyFilter();
  }



  sortDescending() {
    return this.digitsService.sortDescending(this.sortedDigits);
  }

  sortAscending() {
    return this.digitsService.sortAscending(this.sortedDigits);
  }

  findMax() {
    return this.digitsService.findMax(this.sortedDigits);
  }
}
