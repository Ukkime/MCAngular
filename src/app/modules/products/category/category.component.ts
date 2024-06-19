import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [DataService],
})
export class CategoryComponent implements OnInit {
  constructor(private _dataService: DataService) {}

  categories: any = [];
  selectedCategory: any;
  products: any = [];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this._dataService.listCategories().subscribe(
      (response) => {
        this.categories = response.results;
      },
      (error) => {
        console.log('Error en la petición:' + error);
        alert('Error en la petición');
      }
    );
  }

  openCategory(id: number) {
    this.selectedCategory = id;
    this.products = [];
    this._dataService.getProductsByCategory(id).subscribe((response) => {
      this.products = response.categories;
    });
  }

  volver() {
    this.selectedCategory = null;
  }
}
