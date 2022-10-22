import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./carousel-item";
import { carouselData as data } from "../../LV1/dummy_data";

const CarouselCard = () => {
  const [index, setIndex] = React.useState(0);

  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={1}
        ref={isCarousel}
        data={data}
        renderItem={CarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        loop
        autoplay={true}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        containerStyle={{ paddingVertical: 15 }}
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,

          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCard;
