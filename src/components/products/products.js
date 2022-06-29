import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../redux/producSlice/productSlice";
import style from './products.module.css'


function Products(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    
    useEffect(() =>{
        dispatch(fetchProducts())
    },[])

    return(
        <div className={style.products}>
            <div className={style.container}>
                <div className={style.products_in}>
                   <h1 className={style.product_title}> All Products </h1>
                    <div className={style.product}>
                    {products.map(item =><NavLink to={'/profile/' + item.id}><img src={item.images[0]}/></NavLink>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products