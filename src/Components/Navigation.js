import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


function Navigation() {

    return (

        <React.Fragment>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul style={{display: 'flex'}} >
                            <Link to="/">
                                <li style={{marginLeft: 20, listStyle: 'none'}} > Accueil</li>
                            </Link>
                            <Link to="/Rag">
                                <li style={{marginLeft: 20, listStyle: 'none'}} > Thor Ragnarok</li>
                            </Link>
                            <Link to="/Ultron">
                                <li style={{marginLeft: 20, listStyle: 'none'}} > Age of Ultron</li>
                            </Link>
                            <Link to="/Endgame">
                                <li style={{marginLeft: 20, listStyle: 'none'}} > Avengers End Game</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );

} 

export default Navigation;