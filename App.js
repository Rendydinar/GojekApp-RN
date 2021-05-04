import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  StatusBar.setHidden(true);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
        <View
          style={{
            flex: 1, // like height: 100vh
          }}
        >
          <View style={{
            flex: 1,
            backgroundColor: 'gray'
          }}>
            
          </View>
          <View style={{
            height: 54,
            flexDirection: 'row',
            backgroundColor: 'white'
          }}>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
              <Image
                style={{
                  width: 26,
                  height: 26
                }}
                source={require('./icon/home-active.png')}
              />
              <Text style={{
                fontSize: 10,
                color: '#545454',
                marginTop: 4,
                color: '#43AB4A'
              }}>
                Home
              </Text>
            </View>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
              <Image
                style={{
                  width: 26,
                  height: 26
                }}
                source={require('./icon/order.png')}
              />
              <Text style={{
                fontSize: 10,
                color: '#545454',
                marginTop: 4
              }}>
                Orders
              </Text>
            </View>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
              <Image
                style={{
                  width: 26,
                  height: 26
                }}
                source={require('./icon/help.png')}
              />
              <Text style={{
                fontSize: 10,
                color: '#545454',
                marginTop: 4
              }}>
                Help
              </Text>
            </View>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
              <Image
                style={{
                  width: 26,
                  height: 26
                }}
                source={require('./icon/inbox.png')}
              />
              <Text style={{
                fontSize: 10,
                color: '#545454',
                marginTop: 4
              }}>
                Inbox
              </Text>
            </View>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
              <Image
                style={{
                  width: 26,
                  height: 26
                }}
                source={require('./icon/account.png')}
              />
              <Text style={{
                fontSize: 10,
                color: '#545454',
                marginTop: 4
              }}>
                Account
              </Text>
            </View>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
