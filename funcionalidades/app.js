import {getProducts, sendProduct} from './firebase.js';

window.addEventListener('DOMContentLoaded', async () => {
 

getProducts((querySnapshot)=> {
  querySnapshot.forEach((doc)=>{
  // console.log(doc.data());
  createCards(doc.data())

    
  })
  })
  createCards()
})



const fecha = document.getElementById("date")
const name = document.getElementById("name")
const cantidadProducto = document.getElementById("cantidad")
const embalaje = document.getElementById("option")

const producto = document.getElementById("producto")

const envio = document.getElementById("envio")

const table = document.getElementById('containerList')

const newImage = document.getElementById("image")

// uploadImage


let imgSelected = ""

if (newImage) {

  newImage.addEventListener('click', () => {
    widget_cloudinary.open();
  }, false);
  
}



// newImage2.addEventListener('click', () => {
//   widget_cloudinarys.open();
// }, false);

// newImage2.addEventListener('change', widget_cloudinary);

// funcion para entregarme la imagen para el nuevo elemento.



  let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'b9',
    uploadPreset: 'Inventario'
}, (err, result) => {
    if (!err && result && result.event  === 'success') {
        console.log('Imagen subida con éxito', result.info);
        newImage.src = result.info.secure_url ;
        imgSelected = result.info.secure_url
        console.log(imgSelected);
       
       
    }
});





// +++++++++++++++++++

envio.addEventListener('click', () => {
  createProduct()
  
    })




const createProduct = async () =>{

  const product = {
    nameAccount: localStorage.getItem("nombre"),
    name: name.value,
    date: fecha.value,
    quantity: cantidadProducto.value,
    packages: producto.options[producto.selectedIndex].text,
    img: imgSelected
  }
  await sendProduct(product);  
  
}







// -------------


function  createCards(Prcdt) {


  const {name, img, quantity, date, nameAccount, packages } = Prcdt;

  
  const containerT = document.createElement('tr');

  const nameP = document.createElement('td');
  nameP.textContent = name;
  

  const quantityP = document.createElement('td')
  quantityP.textContent = quantity

  const dateP = document.createElement('td');
  dateP.textContent = date;

  const account = document.createElement('td');
  account.textContent = nameAccount;

  const packagesP = document.createElement('td');
  packagesP.textContent = packages;

  table.appendChild(containerT)
  containerT.appendChild(account);
  containerT.appendChild(nameP);
  containerT.appendChild(dateP);
  containerT.appendChild(quantityP);
  containerT.appendChild(packagesP);



  // aca tira la cantidad de productos que hay
  //  console.log(Prcdt.quantityP);

} 