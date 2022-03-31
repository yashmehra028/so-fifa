import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PlayerCard = (props) => {
    const  player  = props.player;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-player/${player._id}`}>
                        { player.name }
                    </Link>
                </h2>
                <p>{player.overall_rating}</p>
                <p>{player.potential}</p>
            </div>
        </div>
    )
};

export default PlayerCard;