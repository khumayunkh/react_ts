import React from "react";
import style from './products.module.css'


function Product({products}){
    return(
        <div className={style.products}>
            <div className={style.container}>
                   <h1 className={style.product_title}> All Products </h1>
                <div className={style.products_in}>
                    {products.map(item => 
                     <div className={style.product}>
                        <img src={item.images[0]}/>
                     </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Product