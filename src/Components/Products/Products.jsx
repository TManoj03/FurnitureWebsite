import { React, useState } from 'react'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
// import img13 from '../../Assets/img13.jpg'

import heart1 from '../../Assets/heart1.png' //false Image
import heart from '../../Assets/heart.png'   //True Image

import cart1 from '../../Assets/cart1.png'  //fasle Image
import cart from '../../Assets/cart.png'    //True Image

import buy from '../../Assets/buy.png'
import offer from '../../Assets/offer1.png'

const Products = () => {

   // Product Array

    const [productItem, setProductItem] = useState([
         {
            id: 1, 
            name:'Chair With Table Set',
            price:4000,
            discount:500,
            img: img1,
            like: false,
            offer:false ,
            cart: true,

         },
         {
            id: 2, 
            name:'Sofa With Table Set',
            price:5000,
            discount:700,
            img: img2,
            like:false ,
            offer:false ,
            cart: true,
         },
         {
            id: 3, 
            name:'Wooden Drawer',
            price:2000,
            discount:340,
            img: img3,
            like: false,
            offer: true,
            cart: false,
         },
         {
            id: 4, 
            name:'Italiyan Sofa',
            price:7000,
            discount:900,
            img: img4,
            like: true,
            offer: false,
            cart: false,
         },
         {
            id: 5, 
            name:'Greek Sofa',
            price:4000,
            discount:500,
            img: img5,
            like:false ,
            offer:false ,
            cart: true,
         },
         {
            id: 6,
            name:'Adjustable Family Sofa',
            price:15000,
            discount:700,
            img: img6,
            like: true,
            offer: true,
            cart: false,
         },
         {
            id: 7,
            name:'White Hussion Sofa',
            price:6000,
            discount:340,
            img: img7,
            like: false,
            offer:false ,
            cart: true,
         },
         {
            id: 8,
            name:'Wooden Drawer',
            price:1000,
            discount:900,
            img: img8,
            like: false,
            offer:false ,
            cart: true,
         },
         {
            id: 9,
            name:'Black Irish Printed Sofa',
            price:4000,
            discount:500,
            img: img9,
            like: true,
            offer: true,
            cart: false,
         },
         {
            id: 10 ,
            name:'Sleeping Bed Set',
            price:7500,
            discount:700,
            img: img10,
            like: false,
            offer: false,
            cart: true,
         },
         {
            id: 11,
            name:'Drawer With Table Set',
            price:1000,
            discount:340,
            img: img11,
            like: true,
            offer: false,
            cart: true ,
         },
         {
            id: 12,
            name:'Working Table',
            price:1500,
            discount:900,
            img: img12,
            like: false,
            offer: false ,
            cart: false, 
         },
        
        ])

      //   Change The Heart Symble

        const chageHeart = (id)=>{
            const changeLike = productItem.map((data)=> 
            data.id  === id ? {...data,like:!data.like}:data)
            setProductItem(changeLike);
         }

      // Change the Cart Symble

         const changeCart =(id) =>{
            const changeShoppingCart = productItem.map((data)=>
               data.id === id ? {...data, cart:!data.cart}:data)
            setProductItem(changeShoppingCart);
            const productAddedCart = changeShoppingCart.find((data)=> data.id === id)
           if(productAddedCart.cart === false){
              alert(`Removed from Cart`)
            }
            else{
              alert(`Successfully Added ${productAddedCart.name}`)
           }
           
         }
        

  return (
    <div id='products'>        
    <h2 className='text-center '>Popular Products</h2>
    <p className='borderAnimation'></p>
    <section className='section container product'>
       {productItem.map((item)=>{
        return(
            <div className="product__card" key={item.id}>
            <div className="product__img">
                <img src={item.img} alt="Sofa" className='productImg' loading="lazy"/>
                {item.offer === true && <img src={offer} alt="offer" className='offerImg' loading="lazy"/>}
            </div>
            <div className="product__description">
                <div className="des__left">
                <h3>Name:&emsp;{item.name}</h3>
                {/* <p>Name:RS.{item.name}</p> */}
                <p>Price:&emsp;&emsp;&nbsp;RS.{item.price}</p>
                <p>Discount:&emsp;<strike>RS.{item.discount}</strike></p>
                </div>
                <div className="des__img">

                    {
                    item.like === false ? (<img src={heart1} alt="heart" className='heart1Img' loading="lazy" onClick={()=>chageHeart(item.id)}/>)
                    :(<img src={heart} alt="heart" className='heartImg' loading="lazy" onClick={()=>chageHeart(item.id)}/>)
                    }

                    {
                    item.cart === false ? (<img src={cart1} alt="cart1"  className='cartImg' loading="lazy" onClick={() => changeCart(item.id)}/>)
                    :(<img src={cart} alt="cart"  className='cartImg' loading="lazy" onClick={() => changeCart(item.id)}/>)
                    }

                    <img src={buy} alt="buy" className='buyImg' loading="lazy" />
                </div>
            </div>
        </div>
        )
       })}
    </section>
    </div>
  )
}

export default Products