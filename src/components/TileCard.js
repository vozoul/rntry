import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'


const TileCard = ({props}) => {
  const { role, firstname, lastname, birthdate} = props

  const bg = (role) => {
    switch (role){
      case "admin":
        return "rgba(255, 0, 0, .7)"
      case "guest":
        return "rgba(0, 0, 255, .7)"
      default:
        return "rgba(0, 160, 0, .7)"
    }
  }

  return (
    <View style={tileCardStyle.container}>
      <Text style={[tileCardStyle.header, {backgroundColor: bg(role)}]}>{role}</Text>
      <Text numberOfLines={3} style={tileCardStyle.content}>
        {lastname}{"\n"}
        {firstname}{"\n"}
        {birthdate}
      </Text>
    </View>
  )

}


const {width, height} = Dimensions.get('window')

const tileCardStyle = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, .7)",
    width: (width / 2) - 15,
    marginVertical: 10,
    borderRadius: 7,
    elevation: 6,
  },
  header:{
    color: "#fff",
    padding: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  content: {
    padding: 20
  }
})

export default TileCard