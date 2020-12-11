import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import { GetLocation, GetCountry, GetLocationPromise } from '../utils/Location';
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';



const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [position, setPosition] = useState(null);
  const [nationalMovies, setNationalMovies] = useState([]);

  /* buscando localizacao geografica   ****************************** */
  useEffect(() => {
    // const location = GetLocationPromise();
    const location = GetLocationPromise()
      .then((info) => {
        console.log("location OK ", info);
        setPosition(info);
      })
      .catch((error) => {
        console.log("location ERROR ", error);
        setPosition(null);
      });
  }, []);
  // console.log("position", position);

  /* filtrando filmes pela localizacao ****************************** */
  useEffect(() => {
    const getNationalMovies = async () => {

      if (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log("lat OK ? ", lat);
        console.log("lng OK ? ", lng);
        const country = await GetCountry({ lat, lng });
        console.log("country OK ? ", country);
        const filterMovies = movies.filter((item, index) => {
          return item.Country.indexOf(country) !== -1;
        });
        setNationalMovies(filterMovies);
      }
    };
    getNationalMovies();
  }, [position]);

  /** obtendo lista de filmes via JSON ****************************** */
  useEffect(() => {
    const data = require("../assets/Movies.json");
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!", data);
    setMovies(data);
  }, []);

  const user = props?.route?.params?.name;
  console.log("user -- ", user);

  let movieToResume = [];
  if (user) {
    const data = require("../assets/moviesToResume.json");
    movieToResume = data[user];
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assets/poster.jpg')}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}>
            <Header />
            <Hero />
          </Gradient>
        </Poster>
        <Movies
          label={`Continuar assistindo ${user}`}
          data={movieToResume} />
        <Movies label="Nacionais" data={movies} />
        {/* <Movies label="Nacionais" data={nationalMovies} /> */}
        <Movies label="Recomendados" data={movies} />
        <Movies label="Top 10" data={movies} />
      </Container>
    </>
  );
};

export default Home;
