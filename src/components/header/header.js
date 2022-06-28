import React from "react";
import style from './header.module.css'

function Header(){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.main_in}>
                    <h1>Search over a million products on Shopping.com</h1>
                    <div>
                         <select className={style.wears}>
                            <option>Search By</option>
                            <option>T-shirt</option>
                            <option>Jeans</option>
                            <option>Sneakers</option>
                            <option>Caps</option> 
                        </select>
                        <input className={style.input} type="text" placeholder="What are you shopping for"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header