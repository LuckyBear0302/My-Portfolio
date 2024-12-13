import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />
    <section className="inicio" id="inicio">
      <div className="titulo">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" defaultMessage="Hello" />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage
            id="name"
            defaultMessage="I am a senior Full-stack developer"
          />
        </h1>
        <div className="redes-sociales">
          <a
            href="mailto:tech.top.talent@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <i className="fab fa fa-envelope"></i>
          </a>
          <a
            href="https://github.com/Nahuel61920/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/nahuelcarrizolc/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=380983123414"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div className="wrapper">
          <a
            className="button"
            href="mailto:tech.top.talent@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa fa-envelope"></i>
            </div>
            <span>GMail</span>
          </a>
          <a
            className="button"
            href="https://github.com/luckybear0302/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="https://www.instagram.com/nahuelcarrizolc/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-telegram"></i>
            </div>
            <span>Telegram</span>
          </a>
          <a
            className="button"
            href="https://api.whatsapp.com/send?phone=380983123414"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <span>Whatsapp</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
