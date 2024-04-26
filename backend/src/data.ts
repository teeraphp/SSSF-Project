import { User } from './models/userModel'
import { Product } from './models/productModel'
import bcrypt from 'bcryptjs'

export const sampleProducts: Product[] = [
  {
    name: 'Harry Potter',
    slug: 'harry-potter',
    image: '../images/p1.jpg',
    category: 'Fantasy',
    brand: 'J.K. Rowling',
    price: 200,
    countInStock: 30,
    description: 'Wizarding World of Harry Potter',
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: 'Percy Jackson',
    slug: 'percy-jackson',
    image: '../images/p2.jpg',
    category: 'Fantasy',
    brand: 'Rick Riordan',
    price: 150,
    countInStock: 15,
    description: 'Greek Mythology Fantasy Novel',
    rating: 4,
    numReviews: 5,
  },
  {
    name: 'The Hobbit',
    slug: 'the-hobbit',
    image: '../images/p3.jpg',
    category: 'Fantasy',
    brand: 'J.R.R. Tolkien',
    price: 250,
    countInStock: 20,
    description: 'Middle Earth Fantasy Novel',
    rating: 4.9,
    numReviews: 15,
  },
  {
    name: 'The Hunger Games',
    slug: 'the-hunger-games',
    image: '../images/p4.jpg',
    category: 'Dystopian',
    brand: 'Suzanne Collins',
    price: 175,
    countInStock: 0,
    description: 'Dystopian World of Panem',
    rating: 4.7,
    numReviews: 12,
  },
]

export const sampleUsers: User[] = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user1@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
