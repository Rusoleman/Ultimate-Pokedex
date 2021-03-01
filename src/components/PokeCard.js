import React,{useState , useEffect} from 'react';
import './PokeCard.css';
import './grid.css';

import axios from 'axios';

const PokeCard = ({name, url}) => {
    const[pokeInfo, setPokeInfo] = useState(null);
    const[types, setTypes] = useState([]);
    const[idImage,setIdImage] = useState([]);

    useEffect(() => {
       if(url){
        axios.get(url)
        .then(response => {
            setPokeInfo({
                hpName: response.data.stats[0].stat.name,
                hpBase: response.data.stats[0].base_stat,
                //══════════════════ Speed ═════════════════
                speed: response.data.stats[5].stat.name,
                speedBase: response.data.stats[5].base_stat,
                //══════════════════ Defense ═══════════════
                defense: response.data.stats[2].stat.name,
                defenseBase: response.data.stats[2].base_stat,
                //══════════════════ Attack ════════════════
                attack: response.data.stats[1].stat.name,
                attackBase: response.data.stats[1].base_stat
            })
            setTypes(response.data.types)
            setIdImage(response.data)
        })
        .catch(err =>{
            console.log(err)
        })
       }
    },[url])

    const typeData = types.map((typePokemon) => {
        return <p>{typePokemon.type.name}</p>
    })
    
    return(
                <div className="cards-container">
                     <div className="col-md-3">
                        <div className="card-container">
                            <div className="character-card">
                                Character-Image
                                <img src={`https://pokeres.bastionbot.org/images/pokemon/${idImage.id}.png`} alt="pokemon-img"/>
                            </div>
                            <div className="container-info">

                                <p>{name}</p>
                                <p>{typeData}</p>

                                <p>{pokeInfo.hpName}</p>
                                <p>{pokeInfo.hpBase}</p>

                                <p>{pokeInfo.attack}</p>
                                <p>{pokeInfo.attackBase}</p>

                                <p>{pokeInfo.defense}</p>
                                <p>{pokeInfo.defenseBase}</p>

                                <p>{pokeInfo.speed}</p>
                                <p>{pokeInfo.speedBase}</p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default PokeCard;