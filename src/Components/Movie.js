import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



function Movie() {

    return(

        <React.Fragment>
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Movie App</h1>
                    </div>

                </div>

                <div className="row">
                    <div className="col-4">
                        <img src="rag.jpeg" className="imagetaille" />
                        <h2>Thor Ragnarok</h2>
                        <Link to="/Rag"><button className="btn btn-primary">Plus de détails</button></Link>
                    </div>

                    <div className="col-4">
                        <img src="ultron.jpg" className="imagetaille" />
                        <h2>Age of ultron</h2>
                        <Link to="/Ultron"><button className="btn btn-primary">Plus de détails</button></Link>
                    </div>

                    <div className="col-4">
                        <img src="endgame.jpeg" className="imagetaille" />
                        <h2>Avengers End game</h2>
                        <Link to="/Endgame"><button className="btn btn-primary">Plus de détails</button></Link>
                    </div>

                </div>

                

            </div>

        </React.Fragment>

        
    );
}

export default Movie;
