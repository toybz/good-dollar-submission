import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
//import all the missing Components and Hooks

const Test = () => {
  const [notify, setNotify] = useState(false);

  const toggleNotify = useCallback(() => {
    //setNotify(!notify)
    setNotify(latestNotifyValue => !latestNotifyValue); // used a function to ensure the latest value is always returned
  }, []);

  useEffect(() => {
    /*
    *Removed because window object not present in mobile OS
    window.addEventListener("blur", (e) => {
      toggleNotify()
    })*/

    toggleNotify();
  }, []); // added an empty dependencies array so effect only runs once

  return (
    <View style={styles.container}>
      {notify && (
        <View style={styles.notification}>
          <Text style={styles.label}>
            Don't forgot to save the changes Your did
          </Text>
          <Button
            style={styles.button}
            title="Dismiss"
            /*
             *onClick={onDismiss}
             * React native Button component doesnt have an onClick props, also the passed in function is not defined. Used onPress instead and passed in the toggleNotify function
             * */
            onPress={toggleNotify}
          />
        </View>
      )}
      <Text style={styles.label}>Some UI would be here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {},
  notifiction: {},
  button: {},
});

export default Test;

