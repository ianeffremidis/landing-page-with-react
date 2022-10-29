import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return(
  <div className={styles.Footer}>
      <div className="row bg-dark justify-content-center p-3 align-middle">
        <div className="col text-light text-center">Copyright Ian Effraimidis 2022</div>
      </div>
  </div>
);
}

export default Footer;
