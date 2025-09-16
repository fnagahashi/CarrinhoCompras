
// CASOS DE USO
// adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}
// deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}
// remover item do carrinho - dimninuir a quantidade
async function removeItem(userCart, index){

}
// calcular o valor total do carrinho
async function totalCart(userCart){
    console.log("\nShopee Cart TOTAL:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🛒 Total: R$${result}`);
}

async function displayCart(userCart){
    console.log("\nShopee Cart List: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name} - R$${item.price} | ${item.quantity}x | Subtotal: R$${item.subtotal()}`);
    })

}

export { addItem, deleteItem, removeItem, totalCart, displayCart };