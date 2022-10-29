import React from 'react';
import PropTypes from 'prop-types';
import styles from './Jumbotron.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Jumbotron = () => (
  <div className={styles.contain}>
    <div className={styles.title}><h1>A Warm Welcome!</h1></div>
    <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p></div>
    <div className={styles.but}><Button variant="primary">Primary</Button>{' '}</div>
  </div>
   
);

Jumbotron.propTypes = {};

Jumbotron.defaultProps = {};

export default Jumbotron;
