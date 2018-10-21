# Cashier Program

This is a web based simulation of a cashier program that was made for web development assignment.
It was made by using simple HTML, CSS, and Javascript.


## Requirements

The requirements for the assignments were:

Create a one page application that mimics the cashier program:
- You can manually add products, or you can select from predefined products
- Products have pre defined price
- You can add quantity that will multiply the product price into subtotal
- There may be a discount
- You can show the total Price
- You can input the amount of user paying, and what is the remainder (kembalian)

### Tools

If you wish to download, run, and modify the file offline, to ensure identical results it is advisable to use the same tools hereby.
The tools that were used in making and running this web app are:
- Sublime text editor 
- Google Chrome
- Bootstrap 4.0

### Code

Everything is written using simple HTML and CSS. In designing the application, Bootstrap framework is used very heavily for the forms and containers. This also results in a longer code despite having a very minimum underlying structure.

The Javascript codes that are implemented are the use of calling and updating values by using *getElementById* property as well as the utilisation of functions.  Furthermore simple properties such as loop, and array is also used

The code is generally comprised of 4 main parts.
- Add Manual
- Select Product
- Cart
- Checkout

#### Add Manual
Here you are able to add the product name that you want as well as the quantity. With this type of input, you have to know or specify the exact amount of pricing

#### Select Product
Here you can also input the product, but here you can select them right away and each comes with their own predefined price. This prices will update when you select them. This is done by using the *onchange()*

#### Cart
The cart here is a table that updates everytime a new item is added. You can add items by both Manually or through selection. Finally after you are done you can pay by using the 'Bayar' button

#### Checkout
The checkout will have the total price coming from the cart. It will also have a promo code that will give a discount to the final price. Finally the amount of cash paid can be inserted, and it will give the exchange value.

## Acknowledgments & References

- https://www.youtube.com/watch?v=EfgxnmOWLUE&t=14s
- https://getbootstrap.com/docs/4.0/components/forms/
- https://github.com/wojodesign/simplecart-js
