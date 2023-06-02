import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  SafeAreaView,
  ImageBackgroundComponent,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Style';

const Average = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [result, setResult] = useState(null);

  const handleAverage = () => {
    const average =
      (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
    setResult(average);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <View style={styles.display}>
            <Text style={styles.result}>
              Average: {result ? result.toFixed(2) : null}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter num1"
              keyboardType="numeric"
              style={styles.inputStyle}
              onChangeText={setNum1}
            />
            <TextInput
              placeholder="Enter num1"
              keyboardType="numeric"
              style={styles.inputStyle}
              onChangeText={setNum2}
            />
            <TextInput
              placeholder="Enter num1"
              keyboardType="numeric"
              style={styles.inputStyle}
              onChangeText={setNum3}
            />

            <View
              style={[
                styles.buttonContainer,
                {backgroundColor: 'crimson', borderWidth: 4, borderRadius: 18},
              ]}>
              <Pressable
                style={[styles.button, {backgroundColor: '#ffffff'}]}
                onPress={handleAverage}>
                <Text style={styles.buttonLabel}>Get Average</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Average;
