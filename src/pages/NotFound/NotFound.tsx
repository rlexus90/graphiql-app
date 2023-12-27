import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const navigate = useNavigate();
  const [time, setTime] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
      if (time === 0) {
        clearInterval(timer);
        navigate('/');
      }
    }, 1000);
  }, [time]);

  return (
    <div
      className={styles.notFound}
      onClick={() => {
        navigate('/');
      }}
    >
      <h1>Sorry... Page not found</h1>
      <p>You will return to main page {`${time} sec`}</p>
    </div>
  );
}
