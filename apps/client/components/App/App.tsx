import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const App = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('api/v1/hello')
      .then(res => res.text())
      .then(text => setTitle(text));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default App;
