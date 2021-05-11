import React from 'react'
import { View } from 'react-native'
import NavBarIcon from '../../../components/molecules/NavBarIcon'
// import { withNavigation } from 'react-navigation'
import { useNavigation } from '@react-navigation/native';

class NavBar extends React.Component {
	render() {
		const { navigation } = this.props;		
		return (
	      <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
	        <NavBarIcon onPress={() => navigation.navigate("Home")} img={require('../../../assets/icon/home-active.png')} title="Home" active={true}/>        
	        <NavBarIcon onPress={() => navigation.navigate("Orders")} img={require('../../../assets/icon/order.png')} title="Orders" active={false}/>        
	        <NavBarIcon onPress={() => navigation.navigate("Help")} img={require('../../../assets/icon/help.png')} title="Help" active={false}/>        
	        <NavBarIcon onPress={() => navigation.navigate("Inbox")} img={require('../../../assets/icon/inbox.png')} title="Inbox" active={false}/>        
	        <NavBarIcon onPress={() => navigation.navigate("Account")} img={require('../../../assets/icon/account.png')} title="Account" active={false}/>        
	      </View>
		)
	}
}

// export default NavBar;

// Wrap and export
export default function(props) {
  const navigation = useNavigation();

  return <NavBar {...props} navigation={navigation} />;
}