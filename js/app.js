
//console.log("Hello java");


//{
//var name ="Sasindu";
//let age = 30;

//console.log(age);

//}

//console.log(name);



//age = 33;
//console.log(age);

//const number = 1;
//console.log(number);

//number  = 2;
//console.log(number);

//const customerList = ["saman","kamal","sasi"];
//console.log(customerList);

//customerList.push("Kumara");

//const number =[];

//number.push(1);
//number.push(2);
//number.push(3);
//number.push(4);
//number.push(5);
//console.log(number);
//number.reverse();
//console.log(number);


const productList =[
{name:"bun",inStock:true,price:100},
{name:"milk",inStock:true,price:200},
{name:"egg",inStock:true,price:300},
{name:"bread",inStock:true,price:400},
{name:"butter",inStock:true,price:500},
];

console.log(productList);

let inStockProducts =  productList.filter(
    function product(params){
        return productFilter(product);
    }
);

function productFilter(product){
    return product.inStock ==true;
}

console.log(inStockProducts);