import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { deleteItem, quantityDown, quantityUp } from "../Cart/Cart.slice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.CartItems}>
      <div className={style.ImageBox}>
        <img src={product.photo} style={{ height: "120px" }} />
      </div>
      <div className={style.about}>
        <h1 className={style.title}>{product.name}</h1>
        <h3 className={style.subtitle}>{product.category}</h3>
      </div>
      <div className={style.counter}>
        <div
          onClick={() => dispatch(quantityDown(product.id))}
          className={style.btn}
        >
          -
        </div>
        <div className={style.count}>{product.quantity}</div>
        <div
          onClick={() => dispatch(quantityUp(product.id))}
          className={style.btn}
        >
          +
        </div>
      </div>
      <div className={style.prices}>
        <div className={style.amount}>$ {product.quantity * product.price}</div>
        <div
          onClick={() => dispatch(deleteItem(product.id))}
          className={style.remove}
        >
          <u>Remove</u>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
