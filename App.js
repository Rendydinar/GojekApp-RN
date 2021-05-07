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
  TouchableOpacity,
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
  StatusBar.setHidden(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View
      style={{
        flex: 1, // like height: 100vh
      }}
    >
      <ScrollView style={{
        flex: 1,
        backgroundColor: 'white',
        // paddingTop: 40,
      }}>
        {/* search bar */}
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
        {/* gopay */}
        <View 
          style={{
            marginHorizontal: 17,
            marginTop: 8,
          }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor:  '#2C5FB8',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            padding: 14
          }}>
            <Image
              source={require('./icon/gopay.png')}
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'white'
              }}
            >Rp. 50.000</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#2C5FB8',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
            <View style={{
              flex: 1,
              alignItems: 'center',
            }}>
              <Image source={require('./icon/pay.png')} />
              <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 15 
              }}>Pay</Text>
            </View>
            <View style={{
              flex: 1,
              alignItems: 'center',
            }}>
              <Image source={require('./icon/nearby.png')} />
              <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 15 
              }}>Nearby</Text>
            </View>
            <View style={{
              flex: 1,
              alignItems: 'center',
            }}>
              <Image source={require('./icon/topup.png')} />
              <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 15 
              }}>Top Up</Text>
            </View>
            <View style={{
              flex: 1,
              alignItems: 'center',
            }}>
              <Image source={require('./icon/more.png')} />
              <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 15 
              }}>More</Text>
            </View>
          </View>
        </View>
        {/*main feature*/}       
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-car.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-bluebird.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>Go-BLUEBIRD</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-send.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>Go-SEND</Text>
            </View>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-deals.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>Go-DEALS</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-pulsa.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>Go-PULSA</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-food.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>Go-FOOD</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-more.png')} />              
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>Go-MORE</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
        {/*News Section*/}
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
          <View style={{position: 'relative'}} >
            <Image source={require('./dummy/sepak-bola.jpg')} style={{height: 200, width: '100%', borderRadius: 6}} />
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.2, backgroundColor: 'black', borderRadius: 6}}></View>
            <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />              
            </View>            
          </View>
          <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
            <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Dimar Drajar selamatkan penalti, Timnas U-23 kalaskan Brunei</Text>
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*Internal Information Section*/}
        <View style={{padding: 16, paddingBottom: 0}}>
            <View style={{height: 15, width: 60, marginLeft: -4}}>
              <Image source={require('./logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />              
            </View>            
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
            <View style={{flexDirection: 'row', marginBottom: 16}}>
              <View>
                <Image source={require('./dummy/facebook-connect.png')} />
              </View>
              <View style={{marginLeft: 16, flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>Connect with Facebook</Text>
                <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '70%'}}>Login faster without verification code</Text>
              </View>
            </View>
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16}}></View>
        </View>
        {/*GoFood Banner Section*/}
        <View style={{padding: 16}}>
          <View style={{position: 'relative'}}>
            <Image source={require('./dummy/food-banner.jpg')} style={{height: 200, width: '100%', borderRadius: 6}} />          
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.2, backgroundColor: 'black', borderRadius: 6}}></View>
            <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
              <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />              
            </View>            
            <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%' , flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Free GO-FOOD voucher</Text>
                <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>Quick, before they run out!</Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4}}>
                  <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOURCHER</Text>
                </TouchableOpacity>                
              </View>
            </View>                      
          </View>
          <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, width: '100%'}}>
          </View>
        </View>
        {/*Nearby G-Food Section*/}
        <View>
            <View style={{height: 15, width: 60, marginLeft: 16}}>
              <Image source={require('./logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />              
            </View>          
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}> Nearby Restaurant</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
            </View>
            <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8}}>
                  <Image source={require('./dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>KFC Aeon Mall</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8}}>
                  <Image source={require('./dummy/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Bakmi GM Aeon Mall</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8}}>
                  <Image source={require('./dummy/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Martabak Orins</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8}}>
                  <Image source={require('./dummy/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Martabak Banka</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8}}>
                  <Image source={require('./dummy/go-food-pak-boss.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Ayam Bakar Pak Bos</Text>
              </View>
            </ScrollView> 
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20, marginHorizontal: 16}}>
            </View>
        </View>
      </ScrollView>
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
