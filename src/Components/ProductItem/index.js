import { useDispatch } from 'react-redux'
import { addToCart } from '../Cart/Cart.slice'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return <div className={style.card}>

        <div className={style.imgBox}>
            <img src={product.photo} className={style.mouse} />
        </div>

        <div className={style.contentBox}>
            <p>{product.name}</p>
            <p className={style.price}>{product.price} €</p>
            <button onClick={() => {
                dispatch(addToCart(product))
                navigate('/cart ')
            }} className={style.buy}>Buy Now</button>
        </div>
    </div>

}

export default ProductItem