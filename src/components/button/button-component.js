import React from 'react';

import styles from './button.module.css';

function Button({ className, ...props }) {
  return <button className={`${className} ${styles.error}`} {...props} />
}

export default Button;