import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Form from './src/form';
const App = () => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
});

export default App;
