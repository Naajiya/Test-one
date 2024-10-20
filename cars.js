const cars= [
    {
        id:1,
        make:"Toyota",
        model:"Camry",
        price:24425,
        inStock:'yes',
        features :{
            engine:"2.5L 4-cylinder",
            horsepower:203,
        }
    },

    {
        id:2,
        make:"Ford",
        model:"Mustang",
        price:27470,
        inStock:'No',
        features :{
            engine:"2.3L turbo4-cylinder",
            horsepower:310,
        }
    },

    {
        id:3,
        make:"Chevrolet",
        model:"Tahoe",
        price:49900,
        inStock:'yes',
        features :{
            engine:"5.3L V8",
            horsepower:335,
        }
    },

    {
        id:4,
        make:"Tesla",
        model:"Model 3",
        price:39990,
        inStock:'yes',
        features :{
            engine:"Electric",
            horsepower:283,
        }
    },

    {
        id:5,
        make:"BMW",
        model:"3 series",
        price:41450,
        inStock:'No',
        features :{
            engine:"2.0L turbo 4-cylinder",
            horsepower:255,
        }
    }
]

console.log('------car name -----------');


cars.forEach(f=>console.log(f.make));

console.log('-----greate than 30000------');


cars.filter(mdl=>mdl.price>30000 && console.log(mdl.make));

console.log('-----out of stock cars-----');

cars.filter(f=>f.inStock=='No' && console.log(f.make))

console.log('---------powehors gtthan 300-----');


cars.filter(f=>f.features.horsepower>300).forEach(f=>console.log(f.make));

console.log('-----total revenue for instock cars-----');

console.log(cars.filter(f=>f.inStock=='yes').map(m=>m.price).reduce((n1,n2)=>n1+n2));

