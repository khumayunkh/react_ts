import React, {useRef} from "react";  
import { useDispatch } from "react-redux";
import { filteredProducts, filterCategory } from "../redux/producSlice/productSlice";
import style from './header.module.css'


function Header(){
    const inputRef = useRef('')
    const optionRef = useRef('') 
    const optionRefSmart = useRef('')
    const dispatch = useDispatch()
    const filterProducts = () =>{
          dispatch(filteredProducts(inputRef.current.value))
    }
    const filterByCategorySmartphones = () =>{
        dispatch(filterCategory(optionRefSmart.current.value))
    }
    const filterByCategoryLaptops = () =>{
        dispatch(filterCategory(optionRef.current.value))
        
  }
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.main_in}>
                    <h1>Search over a million products on Shopping.com</h1>
                    <div>
                         <select className={style.wears}>
                            <option>Search By</option>
                            <option onClick={filterByCategorySmartphones} ref={optionRefSmart}>smartphones</option>
                            <option onClick={filterByCategoryLaptops} ref={optionRef}>laptops</option>
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