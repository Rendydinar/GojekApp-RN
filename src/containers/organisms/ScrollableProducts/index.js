import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import ScrollableItem from '../../../components/molecules/ScrollableItem'

export default class ScrollableProducts extends React.Component {
	render() {
		return (
	        <View>
	            <View style={{height: 15, width: 60, marginLeft: 16}}>
	              <Image source={require('../../../assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />              
	            </View>          
	            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
	              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}> Nearby Restaurant</Text>
	              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
	            </View>
	            <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
	            	<ScrollableItem img={require('../../../assets/dummy/go-food-kfc.jpg')} title="KFC Aeon Mall" />
	            	<ScrollableItem img={require('../../../assets/dummy/go-food-gm.jpg')} title="Bakmi GM Aeon Mall" />
	            	<ScrollableItem img={require('../../../assets/dummy/go-food-orins.jpg')} title="Martabak Orins" />
	            	<ScrollableItem img={require('../../../assets/dummy/go-food-banka.jpg')} title="Martabak Bank" />
	            	<ScrollableItem img={require('../../../assets/dummy/go-food-pak-boss.jpg')} title="Ayam Bakar Pak Bos" />
	            </ScrollView> 
	            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20, marginHorizontal: 16}}>
	            </View>
	        </View>
		)
	}
}