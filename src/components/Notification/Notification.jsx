import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return <div className={styles.Text}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
