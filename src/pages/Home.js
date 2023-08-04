import React, { Component } from 'react'
import { Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList, Text, View } from 'react-native'

export class Home extends Component {

  // handle onpress action
  getlistviewitem = (item) =>{
    Alert.alert(item.key);
  }

  render() {
    return (
      <View>
        <FlatList data={[  
                        {key: 'Delhi'},{key: 'Kolkata'},{key: 'Berlin'},{key: 'Moscow'},{key: 'Tokyo'},
                        {key: 'Mumbai'},{key: 'London'},{key: 'Paris'},{key: 'Singapore'},{key: 'Los Angeles'},
                        {key: 'New York'},{key: 'San Francisco'},{key: 'Amsterdam'},{key: 'Manchester'},
                        {key: 'Copenhagen'},{key: 'Montreal'},{key: 'Pune'},
                    ]} renderItem={({item}) => <Text style={styles.item} onPress={this.getlistviewitem.bind(this, item)} >{item.key}</Text> } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item:{
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: '#FEEFED',
  }
})

export default Home;
