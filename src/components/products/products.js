import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
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
                    <div className={style.product}>
                    {products.map(item => <img src={item.images}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products