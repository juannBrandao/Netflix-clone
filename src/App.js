import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/linhaDeFilmes';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header'

export default () => {


  const [movielist, setmovielist] = useState([]);
  const [feauturedData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false)

  useEffect(() => {
    const loadALL = async () => {
      // pegando a lista de filmes
      let list = await Tmdb.getHomelist();
      setmovielist(list)
      //pegando o feautured
      let originals = list.filter(i => i.slug === 'originals');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadALL();
  }, []);

  useEffect(() => {
    const scrollistner = () => {
      if (window.scrollY > 10) {
        setblackHeader(true)
      }
      else {
        setblackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollistner);
    return () => {
      window.removeEventListener('scroll', scrollistner)
    }
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {feauturedData &&
        <FeaturedMovie item={feauturedData} />
      }

      <section className="lists">
        {movielist.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Direitos de imagem a netflix <br />
        Dados pegos do site Themoviedb.org
      </footer>
      {
        movielist.length <= 0 &&
        <div className="loading">
          <img src="https://blog.metageek.net/wp-content/uploads/2020/09/buffering-800px.gif" alt="Carregando" />
        </div>
      }
    </div>
  );
}