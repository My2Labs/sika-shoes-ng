import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model"
import { Products } from "../../Products"

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = []
  error = false
  ngOnInit() {
    Products.forEach((item) => {
      this.products = [
        ...this.products,
        new ImageItem({ src: item.imageUrl, name: item.name  }),
      ];
    });
  }
}
