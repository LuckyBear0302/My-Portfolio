import React from "react";
import "./Footer.css";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fecha
  let fecha = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>&copy; {fecha}. All Rights Reserved.</p>
        </div>
        <div className="redes-sociales">
          <a
            href="mailto:tech.top.talent@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa fa-envelope"></i>
          </a>
          <a
            href="https://github.com/LuckyBear0302/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://t.me/luckybear0302/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=380983123414"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
