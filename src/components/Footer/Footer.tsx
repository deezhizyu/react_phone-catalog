import './Footer.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <img src="/logo.svg" alt="Logo" className="footer__logo" />

        <div className="footer__links">
          <a className="footer__links-link text-button">Github</a>
          <a className="footer__links-link text-button">Contacts</a>
          <a className="footer__links-link text-button">Rights</a>
        </div>

        <button
          className="footer__back-to-top button--text"
          onClick={scrollToTop}
        >
          <p className="small-text footer__back-to-top-text">Back to top</p>
          <img
            className="button--arrow"
            src="/icons/arrow_up.svg"
            alt="Arrow up"
          />
        </button>
      </div>
    </footer>
  );
};
