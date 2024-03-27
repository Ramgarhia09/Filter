import React ,{useState,useEffect} from 'react'
import "./Products.css"
import Data from "./Data/Data.js"
const Products = () => {
   

      const [productItem ,setProductItem] = useState([])

         const handleFilter = () =>{
          const filterItem = productItem.filter((item)=>{
return(
     item.price>30
)


            }
)

setProductItem(filterItem)
         }

             useEffect(()=>{
                fetch('https://fakestoreapi.com/products/category/jewelery')
                .then(res=>res.json())
                .then(data=>setProductItem(data))
             },[])
    return( 
    <div>
        <p className='filter' onClick={handleFilter}>Filter By Price</p>
    <div className='cart' >
        {
            productItem.map((product) => {
                return (
                    <div className="product"
                    key={product.id}>
                        <div className='product-image'>
                            <img src={product.image} alt="" style={{width:"50%"}}/>
                        </div>
                        <div className='product-details'>
                            <p className='product-tile'>{product.title}</p>
                            <p className='product-price'>₹{product.price}</p>

                            </div>
                            <button>Add</button>
                     
                  
                        </div>


                )
            })

        }
    </div>
    </div>
    )
}

export default Products