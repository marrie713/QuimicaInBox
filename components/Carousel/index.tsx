import Carousel from 'react-bootstrap/Carousel';
import theme from "@/theme"; 
import styled, { ThemeProvider } from "styled-components/native";
import { Text, Image } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';

function IndividualIntervalsExample() {
  return (
    <ThemeProvider theme={theme}>
    <Carousel style={{width: 1550, height: 500}}>
      <Carousel.Item interval={3000}>
        <Banner source={require('../../assets/images/Banner.png')} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Banner source={require('../../assets/images/Banner1.png')}/>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      < Banner source={require('../../assets/images/Banner.png')}/>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Banner source={require('../../assets/images/Banner.png')} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Banner source={require('../../assets/images/Banner.png')} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Banner source={require('../../assets/images/Banner.png')} />
      </Carousel.Item>
    </Carousel>
    </ThemeProvider>
  );
}
export default IndividualIntervalsExample;


const Banner = styled.Image`
  height: 450;
  width: 100%;

`



