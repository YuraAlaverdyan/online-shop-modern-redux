import { useDispatch, useSelector } from "react-redux"
import CartItem from "../../Components/CartItem"
import style from "./style.module.css"
import { calculateSubtotal, clearCart } from "../../Components/Cart/Cart.slice"
import { useEffect, useState } from "react"
import CheckOutModal from "../../Components/CheckOutModal"

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const subtotal = useSelector(state => state.cart.subtotal)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(calculateSubtotal())
    },[items])


    return <div className={style.CartContainer}>
        <div className={style.Header}>
            <h3 className={style.Heading}>Shopping Cart</h3>
            <h5 onClick = {() => dispatch(clearCart())} className={style.Action}>Remove all</h5>
        </div >
        
        {
            items.map(elm => {
                return <CartItem key={elm.id} product={elm} />
            })
        }
        <hr />
            <div className={style.checkout}>
                <div className={style.total}>
                    <div>
                        <div className={style.Subtotal}>Sub-Total</div>
                        <div className={style.items}>{items.length === 1 ? items.length + " item" : items.length + " items"}</div>
                    </div>
                    <div className={style.totalAmount}>$ {subtotal}</div>
                </div>
                <button disabled={!items.length} style={!items.length ? {color:'whitesmoke',opacity:0.5} : {}} onClick={() => setOpen(true)} className={style.button}>Checkout</button>
            </div>
            <CheckOutModal open = {open} handleClose = {handleClose} />
    </div >
}

export default Cart