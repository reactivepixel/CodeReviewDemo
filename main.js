//  main.js

// import the target file as 'myTool'
const myTool = require('/path/to/tool.js');

// We loop through the cart items
for (let cartIndex = 0;
        cartIndex < aryShoppingCart.length;
        cartIndex++){

    // Singular Item in Cart
    let itemInLoop = aryShoppingCart[cartIndex]

    // Send info to the Debug Tool to determine when to show.
    // For more info consult Debug Tool Documentation
    myTool.debug("Cart Item ProductID", itemInLoop.productID, 3);
}
