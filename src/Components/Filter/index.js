import { Button, ButtonGroup } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "./Filter.splice"

const Filter = () => {
    const categories = useSelector(state => state.filter.categories)
    const currentFilter = useSelector(state => state.filter.currentFilter)
    const dispatch = useDispatch()

    return <ButtonGroup color="secondary" style={{marginTop:30}} aria-label="medium secondary button group">
        {
                categories.map(elm => {
                    return <Button onClick={() =>dispatch(changeFilter(elm))} sx={elm === currentFilter ? {border:'3px solid #9c27b0'} : {}} variant={elm === currentFilter ? "outlined" : "contained" } key={elm}>{elm}</Button>
                })
        }
    </ButtonGroup>
}

export default Filter