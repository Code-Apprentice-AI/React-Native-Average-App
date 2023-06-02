import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from './components/Gradients';
import Average from './components/Average';

const App = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Average />
      </View>
    </GradientBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF000000',
  },
});
