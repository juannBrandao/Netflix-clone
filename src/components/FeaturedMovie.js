import React from 'react';
import './FeaturedMovie.css';

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }
    let description = item.overview;
    if (description.length > 200){
        description = description.substring(0, 200) +'...'
    }
    return (
        <section className="feautured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}>
            <div className="feautured--vertical">
                <div className="feautured--horizontal">
                    <div className="feautured--name">{item.original_name}</div>
                    <div className="feautured--info">
                        <div className="feautured--points">{item.vote_average} pontos</div>
                        <div className="feautured--year">{firstDate.getFullYear()}</div>
                        <div className="feautured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="feautured--description">
                        {description}
                    </div>
                    <div className="feautured--butons">
                        <a href={`/watch/${item.id}`} className="feautured--watchbutton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="feautured--mylistbutton">+ Minha lista</a>
                    </div>
                    <div className="feautured--genres">
                        <strong>Gêneros: </strong>{genres.join(', ')}
                    </div>
                </div>

            </div>
        </section>
    )
}