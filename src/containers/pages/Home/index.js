import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import GopayFeature from '../../../components/molecules/GopayFeature'
import MainFeature from '../../../components/molecules/MainFeature'
import SearchFeature from '../../../components/molecules/SearchFeature'
import GoNews from '../../../components/molecules/GoNews'
import GoInfo from '../../../components/molecules/GoInfo'
import GoBanner from '../../../components/molecules/GoBanner'
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts'
import NavBar from '../../../containers/organisms/NavBar'
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature'
import HomeGopay from '../../../containers/organisms/HomeGopay'

export default class Home extends React.Component {
	render() {
		return (
		    <View
		      style={{ flex: 1, }}
		    >
		      <ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
		        {/* search bar */}
		        <SearchFeature />
		        {/* gopay */}
		        <HomeGopay />
		        {/*main feature*/}       
		        <HomeMainFeature />
		        <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
		        {/*News Section*/}
		        <GoNews onPress={() => this.props.navigation.navigate("NewsDetail")}/>
		        {/*Internal Information Section*/}
		        <GoInfo />
		        {/*GoFood Banner Section*/}
		        <GoBanner />
		        {/*Nearby G-Food Section*/}
		        <ScrollableProducts />
		      </ScrollView>
		      <NavBar />
		    </View>
		)
	}
}