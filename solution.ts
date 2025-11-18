
function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else if (typeof value === 'number') {
      return value * 10;
    } else if (typeof value === 'boolean') {
      return !value;
    }
    
    return value;}

    function getLength(value: string | any[]): number {
        if (typeof value === 'string') {
          return value.length;
        } else if (Array.isArray(value)) {
          return value.length;
        }
       
        return 0; 
      }



      class Person {
        name: string;
        age: number;
      
        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }
      
        getDetails(): string {
          return `Name: ${this.name}, Age: ${this.age}`;
        }
      }




type Rating = 0 | 1 | 2 | 3 | 4 | 5;


interface ItemWithRating {
  title: string;
  rating: Rating;
}
  
  function filterByRating(items: ItemWithRating[]): ItemWithRating[] {
   
    return items.filter(item => item.rating >= 4);
  }





interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  
  function filterActiveUsers(users: User[]): User[] {
    
    return users.filter(user => user.isActive === true);
  }



  
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
  }
  
  function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
  }
  



function getUniqueValues<T extends string | number>(array1: T[], array2: T[]): T[] {
    const uniqueMap: { [key: string]: boolean } = {};
    let result: T[] = [];
  
    for (let i = 0; i < array1.length; i++) {
      const value = array1[i];
      const key = String(value);
      if (!uniqueMap[key]) {
        uniqueMap[key] = true;
        result[result.length] = value;
      }
    }
  
    for (let i = 0; i < array2.length; i++) {
      const value = array2[i];
      const key = String(value);
      if (!uniqueMap[key]) {
        uniqueMap[key] = true;
        result[result.length] = value;
      }
    }
  
    return result;
  }

  interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }
  
  function calculateTotalPrice(products: Product[]): number {
    return products.reduce((acc, product) => {
      let price = product.price * product.quantity;
  
      if (product.discount !== undefined) {
        if (product.discount < 0 || product.discount > 100) {
          throw new Error("Discount must be between 0 and 100");
        }
        price -= price * (product.discount / 100);
      }
  
      return acc + price;
    }, 0);
  }
  