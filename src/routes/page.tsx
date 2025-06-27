import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import { useNavigate } from '@modern-js/runtime/router';
import { useEffect } from 'react';

export default (): void => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/en');
  }, []);
}
