import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios';

const Home = () => {
    let [articles, setArticles] = useState([])

    useEffect(() => {
    
        axios.get('/back').then((res)=>{
            setArticles(res.data)
        })
      
    }, [])


    
    return (
        <div className='home'>
            <Header />
            <div className='content'>
                <div className='add_button'>
                    <Link to="/add" >
                        <button className='add'>Créez un article</button>
               </Link>
                </div>
                
                {articles.map(
                    (article)=>(
                    <Card key={article.id} article={article}/>
                ))}
            </div>
            
        </div>
    );
};

export default Home;