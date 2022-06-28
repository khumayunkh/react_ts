import React, {useRef} from "react";  
import { useDispatch } from "react-redux";
import { filteredProducts } from "../redux/producSlice/productSlice";
import style from './header.module.css'


function Header(){
    const inputRef = useRef('') 
    const dispatch = useDispatch()
    const filterProducts = () =>{
          dispatch(filteredProducts(inputRef.current.value))
    }
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
                        <input 
                            className={style.input} 
                            type="text" 
                            placeholder="What are you shopping for"
                            ref={inputRef}
                            onChange={filterProducts} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header