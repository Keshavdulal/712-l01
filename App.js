import React from 'react';
import {SafeAreaView, Text, View, TextInput, Button} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SafeAreaView>
        <Text>Keshav Dulal</Text>
        <Text>301209947</Text>

        {/* <TextInput
          style={{
            border: 'black',
          }}
          placeholder="Please enter your name"
        />
        <Button title="Submit" /> */}
      </SafeAreaView>
    </View>
  );
};

export default App;
