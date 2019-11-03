import {useEffect} from 'react';
import { logout } from '../../config/auth';

const Logout = ({ history }) => {
  useEffect(()=>{
    localStorage.clear();
  }, [])
  logout(history);
  return null;
};

export default Logout;
