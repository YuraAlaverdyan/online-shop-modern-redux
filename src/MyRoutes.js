import { Route, Routes } from "react-router-dom"
import AddProduct from "./Pages/AddProduct"
import Cart from "./Pages/Cart"
import ProductList from "./Pages/ProductList"

const MyRoutes = () => {
    return <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addproduct" element = {<AddProduct />} />
    </Routes>
}

export default MyRoutes