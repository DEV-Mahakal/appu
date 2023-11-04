import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Question from '../data/Question'; // Import the Question component
import {useNavigation} from '@react-navigation/native';

const QuizPage = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [msg, setMsg] = useState('');
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);

  const nextPage = () => {
    if (index < data.length - 1) {
      setIndex(index + 1); // Increment index to move to the next question
      setTimer(15);
    } else {
      // Handle the case when there are no more questions
      setMsg('No more questions.');
      navigation.navigate('Result', {score: score});
      setTimer(0);
    }
  };

  const correctAnswer = _answer => {
    if (_answer === data[index].answer) {
      setScore(score + 10);
      console.log('correct');
    }
    //if (index !== data.length - 1) setIndex(index + 1);
    if (index == data.length - 1) {
      navigation.navigate('Result', {score: score});
    } else setIndex(index + 1);
  };

  useEffect(() => {
    setData(Question); // Use QuestionData imported from Question.js
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        // Move to the next question when the timer reaches 0
        if (index < data.length - 1) {
          setIndex(index + 1);
          setTimer(15); // Reset timer for the next question
        } else {
          // Handle the case when there are no more questions
          setMsg('No more questions.');
          navigation.navigate('Result', {score: score});
        }
      }
    }, 1000);

    return () => {
      clearInterval(countdown); // Clear interval on component unmount
    };
  }, [timer, index]);

  if (data.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View>
        <Text>{data[index].question}</Text>
        <Text>Time left: {timer} seconds</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => correctAnswer(data[index].options[0])}>
          <Text>A. {data[index].options[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => correctAnswer(data[index].options[1])}>
          <Text>B. {data[index].options[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => correctAnswer(data[index].options[2])}>
          <Text>C. {data[index].options[2]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => correctAnswer(data[index].options[3])}>
          <Text>D. {data[index].options[3]}</Text>
        </TouchableOpacity>
      </View>
      <Text>{msg}</Text>
      <TouchableOpacity style={{marginTop: 20}} onPress={nextPage}>
        <Text style={{textAlign: 'center', backgroundColor: 'red'}}>
          {index === data.length - 1 ? 'Show Results' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizPage;
