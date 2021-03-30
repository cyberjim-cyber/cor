import React, { useEffect, useState } from 'react';
import SingleHome from '../SingleHome/SingleHome';
import { useHistory } from 'react-router';

const Home = () => {
    const history=useHistory()

    const [cors,setcors]=useState([])
    console.log(cors)

    useEffect(() => {

        fetch(`https://api.coinpaprika.com/v1/coins/`)
        .then((response) =>response.json())
        .then(data =>{
           
            setcors(data.slice(0,50))
        })

    },[])

    const handleDetail=(id) => {


        console.log(id)
        history.push(`/detail/${id}`)
    }
    return (
        <div>
            {
                cors.map(cor=><SingleHome handleDetail={handleDetail} key={cor.id} cor={cor}></SingleHome>)
            }
        </div>
    );
};

export default Home;