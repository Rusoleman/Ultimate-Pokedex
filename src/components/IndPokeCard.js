import React from 'react';
import './IndPokeCard.css';

const IndPokeCard = () => {
    return(
        <div className="row">{/*row*/}
            <div className="col-md-8">{/*col-md*/}
                <div className="general-container">{/*general container*/}
                    {/*═══════════════════════════ First division ═══════════════════════════ */}
                    <div className="row">
                        <div className="block-container">{/*First Cont*/}
                            <div className="col-md-4">
                                <div className="card-info">
                                    <h3>MOVES</h3>
                                </div>
                            </div>
                            {/*<div className="col-md-4">
                                <div className="card-info">
                                    
                                </div>
                            </div>*/}
                            <div className="col-md-4">
                                <div className="card-info">
                                    <h3 className="rigth-text">General Characteristics</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*═══════════════════════════ Second division ═══════════════════════════ */}
                    <div className="col-md-6">{/*ImagePoke Cont*/}
                        <div className="circle-base">
                           <div className="circle-contrast">
                               <div className="circle-center">
                                    <p>ss</p>
                               </div>
                           </div>
                        </div>
                    </div>
                    {/*═══════════════════════════ Third division ═════════════════════════════ */}
                    <div className="row">
                        <div className="block-container">{/*Second Cont*/}
                            <div className="col-md-4">
                                <div className="card-info">
                                    <h3>Habilities</h3>
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="card-info">
                                    <h3 className="rigth-text">OPTIONS</h3>
                                    <button>Return</button>
                                    <button>Encounters</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndPokeCard;