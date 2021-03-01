import React,{useState, useEffect} from 'react';
import PokeCard from './PokeCard';
import './grid.css';

import axios from 'axios';

const Home = () =>{
    const[data,setData] = useState([])

    useEffect(() => {
        const get = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            setData(response.data.results)
        }
        get()    
    },[])

    const view = data.map((value) => {
        return <PokeCard key={value.url} name={value.name} url={value.url}/>
    })

    return(
        <>
            <div className="row">
                <div className="col-md-12">
                    {view}
                </div>
            </div>
        </>
    )
}

export default Home;