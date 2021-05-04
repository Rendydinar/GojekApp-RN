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
  Image,
  TextInput,
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
            backgroundColor: 'white',
            paddingTop: 40,
          }}>
            <View style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15
            }}>
              <View 
                style={{
                  position: 'relative',
                  flex: 1
                }}
              >
                <TextInput 
                  placeholder="What do you want to ear ?" 
                  style={{
                    borderWidth: 1,
                    borderColor: '#43AB4A',
                    borderRadius: 25,
                    height: 40,
                    fontSize: 13,
                    paddingLeft: 45,
                    paddingRight: 20,
                    backgroundColor: 'white',
                    marginRight: 18
                  }}
                />
                <Image 
                  source={require('./icon/search.png')} 
                  style={{
                    position: 'absolute',
                    top: 5,
                    left: 12 
                  }}
                />
              </View>
              <View style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image 
                  source={require('./icon/promo.png')} 
                />
              </View>
            </View>
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
