import { useState } from "react"


function Header() {

   

    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen((open) => !open )
    }



    return (
        <div className="nav-content">
            <nav className="main-nav-content">
                
             <a href=""> <img src="/images/logo.png" alt="logo" className="logo" /> </a>   

                <div className="inner-nav-content hide-for-mobile">
                    <a className="ancor" href="">Features</a>
                    <a className="ancor" href="">Reviews</a>
                    <a className="ancor" href="">Pricing</a>
                    <a className="ancor" href="">FAQS</a>
                </div>
                
            </nav>

            <nav className="nav-btn ">
                <i className={`bx bx-menu-alt-right hide-for-desktop show-for-mobile hamburger-btn ${isOpen ? "has-fade" : ""}`} onClick={toggle}></i>
                <button className="login-btn btn hide-for-mobile">Login</button>
                <button className="download-btn btn hide-for-mobile">Download</button>
            </nav>

           <div className={`header-menu hide-for-desktop ${isOpen ? "is-open" : ""} `} >
            <a className="ancor menu-content" href="">Features</a>
           <a className="ancor menu-content" href="">Reviews</a>
           <a className="ancor menu-content" href="">Pricing</a>
           <a className="ancor menu-content" href="">FAQS</a>
           <button className="login-btn btn ">Login</button>
            <button className="download-btn btn ">Download</button>

</div>

        </div>
    )


}

export default Header