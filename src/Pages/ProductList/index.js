import style from "./style.module.css"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../../Components/ProductItem"
import Filter from "../../Components/Filter"
import { Button, Container } from "@mui/material"
import { useEffect, useState } from "react"
import { changeCurrentPage } from "../../Components/Products/Products.slice"

const ProductList = () => {
    const currentFilter = useSelector(state => state.filter.currentFilter)
    const currentPage = useSelector(state => state.products.currentPage)
    const limit = useSelector(state => state.products.limit)
    const dispatch = useDispatch()
    const items = useSelector(state => {
        switch (currentFilter) {
            case "All":
                return state.products.items

            default:
                return state.products.items.filter(elm => elm.category === currentFilter)
        }
    })

    useEffect(() => {
        dispatch(changeCurrentPage(0))
    },[currentFilter])





    return <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Filter />

        <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 5, gap: 10 }}>
            {
                items.slice(currentPage * limit, limit + (limit * currentPage)).map(elm => {
                    return <ProductItem key={elm.id} product={elm} />
                })
            }
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 5, gap: 4 }}>
            <Button disabled={currentPage == 0} onClick={() => currentPage > 0 && dispatch(changeCurrentPage(currentPage - 1))} variant="contained">{'<'}</Button>
            {
                [...Array.from({length: Math.ceil(items.length / limit)}, (elm,i) => i)].map((elm, i) => {
                    return <Button variant={currentPage === elm ? 'outlined' : 'contained'} color="secondary" onClick={() => dispatch(changeCurrentPage(elm))} key={i}>{elm + 1}</Button>
                })
            }
            <Button disabled={currentPage === Math.ceil(items.length / limit) - 1} variant='contained' onClick={() => currentPage < Math.ceil(items.length / limit) - 1 && dispatch(changeCurrentPage(currentPage + 1))}>{'>'}</Button>
        </Container>
    </div>

}

export default ProductList