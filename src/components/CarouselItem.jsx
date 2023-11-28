import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React,{useRef, useState} from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';



import Slider1 from '../assets/slider1.jpeg';
import Slider2 from '../assets/slider2.jpeg';
import Slider3 from '../assets/slider3.jpeg';
import Slider4 from '../assets/slider4.jpeg';
import Slider5 from '../assets/slider5.jpeg';
import Slider6 from '../assets/slider6.png';
import Slider7 from '../assets/slider7.jpeg';
import Slider8 from '../assets/slider8.jpeg';


const sliderWidth = Dimensions.get('screen').width;

const carouselData = [
    {
      id: 1,
      image: Slider1
    },
    {
      id: 2,
      image: Slider2
    },
    {
      id: 3,
      image: Slider3
    },
    {
      id: 4,
      image: Slider4
    },
    {
      id: 5,
      image: Slider5
    },
    {
      id: 6,
      image: Slider6
    },
    {
      id: 7,
      image: Slider7
    },
    {
        id: 8,
        image: Slider8
    }
]

export default function CarouselItem() {
  const [activeSlide, setActiveSlide] = useState(0);
   const carouselRef = useRef();
   const _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.imgStyle} source={item.image}/>
            </View>
        );
    }
  return (
    <View style={styles.carouselContainer}>
     <Carousel
      ref={carouselRef}
      data={carouselData}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={500}
      onSnapToItem={index =>setActiveSlide(index)}
    />
    <Pagination
              dotsLength={carouselData.length}
              activeDotIndex={activeSlide}
              containerStyle={{
                position:'absolute',
                bottom:0,
                left:'15%',
               }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
              }}
              inactiveDotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
              }}
              dotColor="green"
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
            </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer:{
    position:'relative'
  },
  imgStyle:{
    height:250,
    width:'100%'
  }
});
