import { Link } from 'react-router-dom'
import style from './style.module.css'

const Navbar = () => {
    return <div className={style.container}>
	<div className={style.headerBar}>
		<Link to='/'className={style.logo}>Online Shop</Link>
		<ul className={style.sliderMenu}>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/cart'>Cart</Link></li>
			<li><Link to='/addproduct'>Add Product</Link></li>
		</ul>
	</div>
</div>
}

export default Navbar