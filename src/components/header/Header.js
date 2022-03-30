import { Button } from 'react-bootstrap';
import React, {useContext} from "react";
import style from './style/header.module.css';
import {AppContext} from '../../App';


const Header = ()=>{

    const {login, setLogin} = useContext(AppContext);

    return (
        <div className={style.root}>
            <h1 className='text-primary mb-3'>My Blog</h1>
            <div><Button variant='primary' onClick={()=>setLogin(!login)}>{login ? 'Logout' : 'Login'}</Button></div>
        </div>
    );
};

export default Header;