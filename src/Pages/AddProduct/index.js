import {
    Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../../Components/Products/Products.slice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const categories = useSelector((state) => state.filter.categories);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    photo: "",
  });
  const handleCheck = (e) => {
    e.preventDefault()
    dispatch(addToProduct(product))
    setProduct({name: "", category: "", price: "", photo: ""})
    navigate('/')

  }
  return (
    <div style={{ marginTop: 50 }}>
      <form
        onSubmit={(e) => handleCheck(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          required
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            color="secondary"
            required
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          >
            {categories.map((category) => {
              if (category !== "All") {
                return (
                  <MenuItem key={category} value={category}>
                    {category[0].toUpperCase() +
                      category.slice(1).toLowerCase()}
                  </MenuItem>
                );
              }
            })}
          </Select>
        </FormControl>
        <FormControl required variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Price</InputLabel>
          <Input
            variant="outlined"
            type="number"
            label="Photo"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </FormControl>
        <TextField
          variant="outlined"
          required
          label="Photo"
          value={product.photo}
          onChange={(e) => setProduct({ ...product, photo: e.target.value })}
        />
        <Button type="submit" color="secondary" variant="contained">Add To Products</Button>
      </form>
    </div>
  );
};

export default AddProduct;
