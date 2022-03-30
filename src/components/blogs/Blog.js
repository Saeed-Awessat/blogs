import React, {useContext, useState} from 'react';
import style from './style/blog.module.css';
import { Button } from 'react-bootstrap';
import {AppContext} from '../../App';


const Blog = ({title, description, numOfLikes})=>{
    const {login} = useContext(AppContext);
    const [likes, setLike] = useState(numOfLikes);
    return (
        <div className={style.root}>
            <div className={style.header}>
                <h2>{title}</h2>
            </div>
            <div className={style.main}><section>{description}</section></div>
            <div className={style.footer}>
                <div>
                    <Button 
                    variant="primary" 
                    disabled={!login} 
                    onClick={()=>{ likes ? setLike(likes - 1) : setLike(likes + 1)}}
                    >
                        {likes ? 'unlike' : 'Like'}
                    </Button>
                </div>
            <div><span>{`Likes: ${likes}`}</span></div>
            </div>
        </div>
    );
};

export default Blog;