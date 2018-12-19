import React from "react";
import "./Header.css";
import Wrapper from "../Wrapper";


const Header = () => (

    <div>

        <nav className="navbar">
           
                
                <div className="item">Clicky Game</div>
                <div className="item">Click an image to begin</div>
                <div className="item">Score: {12} | Top Score: {0} </div>

                {/* Wrapper.state.score Wrapper.state.topScore */}

           
        </nav>

        <div className="jumbotron">
            <h1 className="display-4">Studio Ghibli - Clicky Game!!</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once! </p>

        </div>

    </div>

);

export default Header;
