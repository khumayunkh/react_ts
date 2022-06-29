import React from "react";
import style from './products.module.css'

const Pagination =({postsPerPage, totalPosts, paginate})=>{
    const pageNumber = [];

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        console.log('pageeeeeeeeee', i)
        pageNumber.push(i)
    }

    return(
    <>
        {pageNumber.map(number => (
                <div className={style.pagination} key={number}>
                    <div className={style.pagination_in}>
                    <button className={style.pagination_btn} onClick={() => paginate(number)} >
                        {number}                 
                     </button>
                     </div>
                </div>
            ))}
    </>
    )
}

export default Pagination