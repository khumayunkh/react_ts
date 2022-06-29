import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { fetchProducts } from "../redux/producSlice/productSlice";
import Pagination from "./pagination";
import Product from "./product";
import style from './products.module.css'


function Products(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)

    useEffect(() =>{
        dispatch(fetchProducts())
    },[])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return(
        <div>
            <Product products={currentPosts}/>
            <Pagination postsPerPage={postsPerPage} 
                totalPosts = {products.length} 
                paginate={paginate}/>
        </div>
    )
}

export default Products
