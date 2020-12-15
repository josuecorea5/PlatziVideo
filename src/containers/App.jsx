import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';
import '../assets/Styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);
  // console.log(initialState);
  return initialState.length === 0 ? (
    <h1> Loading...</h1>
  ) : (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist && initialState.mylist.length && (
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.mylist?.map((item) => (
              <CarouselItem
                key={item.id}
                cover={item.cover}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends?.map((item) => (
            <CarouselItem
              key={item.id}
              cover={item.cover}
              title={item.title}
              year={item.year}
              contentRating={item.contentRating}
              duration={item.duration}
            />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals?.map((item) => (
            <CarouselItem
              key={item.id}
              cover={item.cover}
              title={item.title}
              year={item.year}
              contentRating={item.contentRating}
              duration={item.duration}
            />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
