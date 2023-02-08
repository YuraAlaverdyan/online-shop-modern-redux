import style from "./style.module.css"

const Footer = () => {
    return <footer className={style.footer}>

        <div className={style.footerLeft}>

            <h3>Company<span>logo</span></h3>

            <p className={style.footerLinks}>
                <a href="#" className={style.link1}>Home</a>

                <a href="#">Blog</a>

                <a href="#">Pricing</a>

                <a href="#">About</a>

                <a href="#">Faq</a>

                <a href="#">Contact</a>
            </p>

            <p className={style.companyName}>Company Name © 2015</p>
        </div>
    </footer>
}

export default Footer