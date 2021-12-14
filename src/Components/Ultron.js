import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



function Rag() {

    return (

        <React.Fragment>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Avengers, ère d'Ultron </h2>
                        <h3>Résumé du film</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur 
                            libero elit, euismod eu orci tempor, blandit scelerisque arcu. Nulla 
                            egestas euismod nunc, nec maximus turpis. Interdum et malesuada 
                            fames ac ante ipsum primis in faucibus. Curabitur tincidunt turpis 
                            eros, pellentesque dictum arcu tempus a. Nam imperdiet elit eget 
                            malesuada euismod. Aliquam vehicula convallis orci, ut 
                            dignissim quam blandit eget.
                        </p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ANbZ-zJ7Ig8" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br>
                        <Link to="/"><button className="btn btn-primary">Retournez à l'acceuil</button></Link>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );

} 

export default Rag;