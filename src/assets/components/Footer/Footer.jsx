import React from "react";
import "./Footer.sass";

const footerAttrs = [
    {
        classAddress: "footer__address vk",
        title: "Author`s page:",
        href: "https://vk.com/souldrum",
        alt: "vk",
        src: "https://img.icons8.com/3d-fluency/100/000000/vk-circled.png",
    },
    {
        classAddress: "footer__address github",
        title: "© Aleksandr Dushenko (souldrum):",
        href: "https://github.com/souldrum",
        alt: "github",
        src: "https://img.icons8.com/color/48/000000/github--v1.png",
    },
    {
        classAddress: "footer__address vk",
        title: "Manual on github:",
        href: "https://github.com/souldrum/QnhToQfe_Calculator#readme",
        alt: "github",
        src: "https://img.icons8.com/color/48/000000/github--v1.png",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            {footerAttrs.map((attr, i) => {
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
