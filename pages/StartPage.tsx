import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';

interface StartPageProps {}

export default class App extends React.Component<StartPageProps> {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Pressable style={styles.startButton} onPress={() => {}}>
          <Text>Start</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
  },
});
