import "./footer.scss"


const Footer = () => {
    return (
        <div className="footer">
            <div className="Ellipse-4">
                <img src="/images/Ellipse 4.png" alt="" />
            </div>
            <div className="footer-details">

                <div className="footer-address">

                    <div className="address">
                        <p>Address:</p>
                        <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
                    </div>

                    <div className="address">
                        <p>Contact:</p>
                        <p>+91 123 456 7890</p>
                        <p>contact@bidai.in</p>
                    </div>

                    <div className="social-media-icons">

                        <a href="">
                            <img src="/images/Facebook.png" alt="" />
                        </a>

                        <a href="">

                            <img src="/images/insta.png" alt="" />
                        </a>

                        <a href="">

                            <img src="/images/x.png" alt="" />
                        </a>

                        <a href="">

                            <img src="/images/linkedin.png" alt="" />
                        </a>

                        <a href="">
                            <img src="/images/youtube.png" alt="" />
                        </a>
                    </div>

                </div>

                <div className="Product-container">
                    <div>
                        Product
                    </div>

                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Security </p>
                </div>

                <div className="Product-container">
                    <div>
                        Comoany
                    </div>

                    <p>About</p>
                    <p>Careers </p>
                </div>


                <div className="footer-logo">
                    <img src="/images/Frame LOGO 2.png" alt="" />
                </div>

            </div>

            <div className="footer-base">
                <div>
                    <p>© 2025 bidai. All rights reserved.</p>
                </div>

                <div>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
