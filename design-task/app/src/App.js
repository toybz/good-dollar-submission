import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import {LeftOutline} from 'antd-mobile-icons';

const primaryColor = '#00AFFF';
const textColor = '#555555';
const phraseColor = '#42454A';
const phraseNumberColor = 'white';
const fontFamily = {fontFamily: 'Roboto'};

const PassPhrase = ({number, phrase}) => {
  return (
    <TouchableOpacity
      style={{
        width: 180,
        height: 50,
        borderRadius: 100,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: primaryColor,
        alignItems: 'center',
      }}>
      <View style={styles.phraseContainer}>
        <Text style={styles.phraseNumber}>{number}</Text>
      </View>
      <Text style={styles.phraseText}>{phrase}</Text>
    </TouchableOpacity>
  );
};

function App({route, navigation}) {
  const passPhrases = [
    'bike',
    'dark',
    'jumping',
    'cave',
    'rooms',
    'socks',
    'dove',
    'orange',
    'bottle',
    'blanket',
    'salt',
    'bug',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        <Pressable
          style={{
            position: 'relative',
          }}
          hitSlop={27}
          onPress={() => navigation.goBack()}>
          <LeftOutline color={'white'} fontSize={25} />
        </Pressable>

        <View style={styles.pageTitleContainer}>
          <Text family="medium" style={styles.pageTitle}>
            BACKUP MY WALLET
          </Text>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={styles.header}>Please save your 12-words pass phrase</Text>
        <Text style={styles.subHeader}>and keep it in a secure location</Text>
        <Text style={styles.subHeader}>
          so you can recover your wallet anytime
        </Text>
      </View>

      <View style={{marginTop: 20, justifyContent: 'center'}}>
        {passPhrases.map((phrase, index) => (
          <>
            {index % 2 === 0 ? (
              <View style={styles.horizontalContainer}>
                <PassPhrase number={index + 1} phrase={passPhrases[index]} />
                <PassPhrase
                  number={index + 2}
                  phrase={passPhrases[index + 1]}
                />
              </View>
            ) : null}
          </>
        ))}
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={{marginTop: 50}}>
          <Text style={styles.actionableText}>Copy all to clipboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 40}}>
          <Text style={styles.actionableText}>Send me a backup email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blockButton}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  navigationContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#00AFFF',
    height: 60,
  },
  pageTitleContainer: {
    width: '88%',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 25,
    color: 'white',
    ...fontFamily,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: textColor,
    ...fontFamily,
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 15,
    color: textColor,
    ...fontFamily,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
  actionableText: {
    textDecorationLine: 'underline',
    color: primaryColor,
    fontSize: 17,
    ...fontFamily,
  },
  blockButton: {
    marginTop: 40,
    backgroundColor: primaryColor,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    ...fontFamily,
  },
  phraseContainer: {
    backgroundColor: '#00AFFF',
    height: '100%',
    width: 40,
    borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%',
    justifyContent: 'center',
  },
  phraseNumber: {
    textAlign: 'center',
    fontSize: 18,
    color: phraseNumberColor,
    ...fontFamily,
  },
  phraseText: {
    textAlign: 'center',
    fontSize: 17,
    marginLeft: 10,
    color: phraseColor,
    ...fontFamily,
  },
});

export default App;
