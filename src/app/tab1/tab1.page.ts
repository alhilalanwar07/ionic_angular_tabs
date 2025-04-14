import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone X',
      price: 899.99,
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Latest model with advanced camera and long battery life',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Laptop Pro',
      price: 1299.99,
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      description: 'Powerful laptop for professionals with 16GB RAM',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      price: 149.99,
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      description: 'Premium sound quality with noise cancellation',
      rating: 4.5
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 249.99,
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Track your fitness and stay connected',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 79.99,
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      description: 'Portable speaker with amazing sound quality',
      rating: 4.3
    },
    {
      id: 6,
      name: 'Gaming Console',
      price: 499.99,
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      description: 'Next-gen gaming with 4K graphics',
      rating: 4.9
    }
  ];

  constructor() {}

  getStarArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    return Array(fullStars).fill(0);
  }
}
