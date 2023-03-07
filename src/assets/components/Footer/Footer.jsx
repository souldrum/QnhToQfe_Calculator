import React from "react";
import footerData from "../../../services/footerData";
import "./Footer.sass";

const Footer = () => {
    return (
        <footer className="footer">
            {footerData.map((attr, i) => {
                return (
                    <address key={i} className={attr.classAddress}>
                        {attr.title}
                        <a
                            className="footer__link"
                            href={attr.href}
                            target="blank"
                        >
                            <img
                                className="footer__link-icon"
                                alt={attr.alt}
                                src={attr.src}
                            />
                        </a>
                    </address>
                );
            })}
        </footer>
    );
};

export default Footer;
