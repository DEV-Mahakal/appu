import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Results = ({navigation, route}) => {
  const {score} = route.params;
  return (
    <View>
      <Text>Results:{score}</Text>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Home')}>First Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Results;
