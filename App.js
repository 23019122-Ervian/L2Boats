import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Boats from "./components/Boats";

const AllBoats =() => {
  return (
      <ScrollView>
        <Text></Text>
        <Text></Text>
        <Boats
            name= "Flipper 640 ST"
            description= "A modern take on the classic, traditional hardtop and perfect for a family picnic."
            picture={require('./img/flipper.jpg')}
        />
        <Boats
            name= "Princess V48"
            description= "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
            picture={require('./img/princess.jpg')}
        />
        <Boats
            name= "Bayliner 175 Bowrider"
            description= "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
            picture={require('./img/bayliner.jpg')}
        />
        <Boats
            name= "Fairline Targa 47"
            description= "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            picture={require('./img/fairline.jpg')}
        />
      </ScrollView>
  )
}
export default AllBoats;
