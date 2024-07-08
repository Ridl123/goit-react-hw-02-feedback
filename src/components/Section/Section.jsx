import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={styles.SectionWrap}>
      <div className={styles.SectionTitle}>{title}</div>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
