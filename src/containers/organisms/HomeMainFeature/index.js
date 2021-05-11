import React from 'react'
import { View } from 'react-native'
import MainFeature from '../../../components/molecules/MainFeature'

export default class HomeMainFeature extends React.Component {
	render() {
		return (
	        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
	          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
	            <MainFeature icon={require('../../../assets/icon/go-ride.png')} title="GO-RIDE" />
	            <MainFeature icon={require('../../../assets/icon/go-car.png')} title="GO-CAR" />
	            <MainFeature icon={require('../../../assets/icon/go-bluebird.png')} title="Go-BLUEBIRD" />
	            <MainFeature icon={require('../../../assets/icon/go-send.png')} title="Go-SEND" />
	            <MainFeature icon={require('../../../assets/icon/go-deals.png')} title="Go-DEALS" />
	            <MainFeature icon={require('../../../assets/icon/go-pulsa.png')} title="Go-PULSA" />
	            <MainFeature icon={require('../../../assets/icon/go-food.png')} title="Go-FOOD" />
	            <MainFeature icon={require('../../../assets/icon/go-more.png')} title="Go-MORE" />
	          </View>
	        </View>
		)
	}
}