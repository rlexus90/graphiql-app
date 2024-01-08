import { FC } from 'react';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footer-container">
          <li>
            <a href="https://rs.school/react/" target="_blank">
              <img src="/rs_school_js.svg" alt="RS SCHOOL" />
            </a>
          </li>
          <li style={{ cursor: 'default' }}>2024</li>
          <li>
            <a
              className="github"
              href="https://github.com/rlexus90"
              target="_blank"
            >
              <img src="/github-mark.svg" alt="GitHub link" />
              <span>rlexus</span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
