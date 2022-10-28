import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cardo.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardo = () => (
  <div className={styles.Cardo}>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://via.placeholder.com/640x360" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>;
  </div>
);

Cardo.propTypes = {};

Cardo.defaultProps = {};

export default Cardo;
