import { Injectable } from '@angular/core';
import {Foods} from 'src/app/shared/models/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
    /*  '/assets/food1.jpeg',
       '/assets/food10.jpeg',
        '/assets/food3.jpeg',
         '/assets/food1.jpeg',
          '/assets/food5.jpeg',
           '/assets/food6.jpeg',
            '/assets/food7.jpeg',
             '/assets/food8.jpeg',
    */

    {
      id:1,
      name:'daal makhani',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin:['India'],
      star:3,
      imageUrl:'/assets/food1.jpeg',
      tags:['Lunch','FastFood','Pizza'],
    },

    {
 id:2,
      name:' Chicken Biryani',
      cookTime:'10-20',
      price: 20,
      favorite:false,
      origin:['India'],
      star:4,
      imageUrl:'/assets/food11.jpg',
      tags:['Lunch','FastFood','Pizza'],
    },


    {
      id:3,
      name:' Burgur',
      cookTime:'10-20',
      price: 25,
      favorite:true,
      origin:['Itlay'],
      star:4,
      imageUrl:'/assets/food3.jpeg',
      tags:['Lunch','FastFood','Pizza'],
    },

    {
      
      id:4,
      name:' Panipuri',
      cookTime:'10-20',
      price: 25,
      favorite:true,
      origin:['India'],
      star:4,
      imageUrl:'/assets/food4.jpeg',
      tags:['Lunch','FastFood','Pizza'],
    },

    {
      id:5,
      name:' Veg Kabab',
      cookTime:'10-20',
      price: 30,
      favorite:false,
      origin:['India'],
      star:4,
      imageUrl:'/assets/food5.jpeg',
      tags:['Lunch','FastFood','Pizza'],
    },


    {
      id:6,
      name:' Veg chesse pizza',
      cookTime:'10-20',
      price: 30,
      favorite:false,
      origin:['Itlay'],
      star:4,
      imageUrl:'/assets/food6.jpeg',
      tags:['Lunch','FastFood','Pizza'],
    },

    {
      id:7,
      name:' South ki Idli',
      cookTime:'10-20',
      price: 20,
      favorite:false,
      origin:['India'],
      star:4,
      imageUrl:'/assets/food7.jpeg',
      tags:['Lunch','FastFood','Pizza'],
    },


    {
       id:8,
      name:' South ki Dosa',
      cookTime:'10-20',
      price: 20,
      favorite:false,
      origin:['India'],
      star:4,
      imageUrl:'/assets/food8.jpeg',
      tags:['Lunch','FastFood','Pizza'],
    }


    ];

  }


}
