import createItem from "./services/item.js";
 
const cart = [];

console.log("Bem-vindo ao carrinho de compras da Shopee");

const item1 = await createItem("Camisa", 25.99, 1)
const item2 = await createItem("Calça", 50.00, 2)

console.log(item2.subtotal());