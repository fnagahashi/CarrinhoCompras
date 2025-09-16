import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";
 
const myCart = [];
const myWishList = [];

console.log("Bem-vindo ao carrinho de compras da Shopee");

const item1 = await createItem("Camisa", 25.99, 1)
const item2 = await createItem("Calça", 50.00, 2)
const item3 = await createItem("Bermuda", 35.8, 5)

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);
await cartService.addItem(myCart, item3);
await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item3.name);
// await cartService.deleteItem(myCart, item1.name);


await cartService.totalCart(myCart);


