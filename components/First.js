import {useNavigation} from '@react-navigation/native';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

const First = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#48dbfb'}}>
      <View style={{width: '100%'}}>
        <ImageBackground
          source={require('../Images/quiz.jpg')}
          style={{height: 320, resizeMode: 'contain'}}
        />
      </View>
      <View style={{padding: 10, marginTop: 25}}>
        <Text
          style={{
            color: '#e056fd',
            textAlign: 'center',
            fontSize: 25,
            fontWeight: '600',
          }}>
          Quiz Rules
        </Text>
      </View>
      <View style={{padding: 20, marginTop: 5}}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            gap: 10,
          }}>
          <Text style={{color: 'white', fontSize: 30}}>*</Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#3d3d3d',
              fontStyle: 'italic',
            }}>
            For each Answer You get 5 points.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            gap: 10,
          }}>
          <Text style={{color: 'white', fontSize: 30}}>*</Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#3d3d3d',
              fontStyle: 'italic',
            }}>
            There is no negative marking for wrong answer.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            gap: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
            }}>
            *
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#3d3d3d',
              fontStyle: 'italic',
            }}>
            Each question has a time limit of 15 seconds.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            gap: 10,
          }}>
          <Text style={{color: 'white', fontSize: 30}}>*</Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#3d3d3d',
              fontStyle: 'italic',
            }}>
            You have to compulsarily answer all the questions given.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#fad390',
          marginTop: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 12,
          borderRadius: 20,
          width: '45%',
        }}
        onPress={() => navigation.navigate('Quiz')}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 500,
          }}>
          Start Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default First;
