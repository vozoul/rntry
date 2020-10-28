import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar, Platform } from 'react-native'
import { TileCard} from 'components'

const Root = () => {

  const [data, setData] = useState({})
  const [users, setUsers] = useState()

  useEffect(() => {
    fetch('http://10.0.2.2/users')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setData({...data, result})
      })
  }, [])

  useEffect(() => {
    if (data.result) {
      setUsers(data.result.users)
    }
  }, [data])

  return (
    <ImageBackground source={require('./assets/images/bg.jpg')} style={style.container}>
      { (users) ? users.map(
        (u, k) => <TileCard key={k} props={u}/>
      ): <Text style={style.text}> Chargement ... </Text>}
    </ImageBackground>
  )
}

export default Root

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    color: "#fff"
  }
})