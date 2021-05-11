import React from 'react'
import { Text, View, Image} from 'react-native'
import GopayFeature from '../../../components/molecules/GopayFeature'
import { useNavigation } from '@react-navigation/native';


class HomeGopay extends React.Component {
	render() {
		return (
	        <View style={{ marginHorizontal: 17, marginTop: 8 }} >
	          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:  '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
	            <Image source={require('../../../assets/icon/gopay.png')} />
	            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }} >Rp. 50.000</Text>
	          </View>
	          <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2C5FB8', borderBottomLeftRadius: 4,  borderBottomRightRadius: 4,}}>
	            <GopayFeature onPress={() => this.props.navigation.navigate("ScanQRCoder")} icon={require("../../../assets/icon/pay.png")} title="Pay"  />
	            <GopayFeature icon={require("../../../assets/icon/nearby.png")} title="Nearby" />
	            <GopayFeature icon={require("../../../assets/icon/topup.png")} title="Top Up" />
	            <GopayFeature icon={require("../../../assets/icon/more.png")} title="More" />
	          </View>
	        </View>
		)
	}
}

// Wrap and export
export default function(props) {
  const navigation = useNavigation();

  return <HomeGopay {...props} navigation={navigation} />;
}