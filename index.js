
iproduct = []
iquantity = []
iprice = []





function addItem(){
  
  iproduct.push(document.getElementById('a_product').value)
  iquantity.push(parseInt(document.getElementById('a_quantity').value))
  iprice.push(parseInt(document.getElementById('a_price').value))
  
  displayCart()
   
}

function selectItem(){
  
  iproduct.push(document.getElementById('s_product').value)
  iquantity.push(parseInt(document.getElementById('s_quantity').value))
  iprice.push(parseInt(document.getElementById('s_price').value))
  
  displayCart()
   
}

function setPrice(value) {

// [0] Pisang    : 6000
// [1] Jeruk     : 8500
// [2] Duren     : 25000
// [3] Nangka    : 3000
// [4] Salak     : 2500
// [5] Apel      : 9000
// [6] Semangka  : 23000
// [7] Alpukat   : 14000
// [8] Melon     : 12000
  fruitname = value

switch(fruitname) {
    case "Pisang":
        price = 6000
        break;
    case "Jeruk":
        price = 8500
        break;
    case "Duren":
        price = 25000
        break;
    case "Nangka":
        price = 3000
        break;
    case "Salak":
        price = 2500
        break;
    case "Apel":
        price = 9000
        break;
    case "Semangka":
        price = 23000
        break;
    case "Alpukat":
        price = 14000
        break;
    case "Melon":
        price = 12000
        break;
    default:
        t

  }

  document.getElementById('s_price').value = price
}


function displayCart(){
  
  
  cartdata = '<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
  
  total = 0;
  
  for (i=0; i<iproduct.length; i++){
    total += iquantity[i] * iprice[i]
    cartdata += "<tr><td>" + iproduct[i] + "</td><td>" + iquantity[i] + "</td><td>" + "Rp. " + iprice[i] + "</td><td>" + "Rp. " + iquantity[i] * iprice[i] + 
    "</td><td><button type='button' class='btn btn-danger' onclick='delElement(" + i + ")'>Hapus</button></td></tr>"
  }
  
  cartdata += '<tr><td></td><td></td><td></td><td>' + 'Rp. ' + total + 
  '</td><td><button type="button" class="btn btn-primary" onclick="Checkout(total)">Bayar</button></td></tr></table>'  
  
  document.getElementById('cart').innerHTML = cartdata
  
}


function delElement(a){   
  // here a is the current position i
  // at position 'a' remove 1 item

  iproduct.splice(a, 1);
  iquantity.splice(a, 1)
  iprice.splice(a, 1)
  displayCart()
}


function Checkout(tot){
  total_price = tot
  
  document.getElementById('total').value = total_price
  document.getElementById('final').value = total_price
}

function promo(){
  after_discount = document.getElementById('final').value * 0.8
  // We give 20% discount with promo code

  document.getElementById('final').value = after_discount
}

function calc_exchange() {
  final_price = document.getElementById('final').value
  payment = document.getElementById('cash').value

  document.getElementById('exchange').value = payment - final_price
}