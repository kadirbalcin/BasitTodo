import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView, Alert } from 'react-native';
import ItemList from './ItemList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      text:'',
      data:[]
    }
  }

  handleSave = () => {
    const { text, data } = this.state;
    if(text != "") {
      data.push({text});
      this.setState( {data, text:''} );
    }else {
      Alert.alert(
        "Hata",
        "Mesaj alanı boş olamaz.",
        [
          { text: "Tamam"}
        ]
      );
    }
  };

  render() {
    const { text, data } = this.state;
    return (
      <View style={[{flex:1, paddingTop:30}]}>
        <View style={styles.title}><Text style={styles.title_text}>To-Do Application</Text></View>
        <View style={{ backgroundColor: '#ddd', padding: 10, flexDirection: 'row' }}>
          <TextInput
            placeholder="Görev Giriniz"
            style={styles.input}
            value={text}
            onChangeText={(text)=>{this.setState({text})}}
          />
          <TouchableOpacity onPress={this.handleSave} style={styles.button}>
            <Text style={styles.title_text}>Ekle</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
              { data.map((item) => {
                  return <ItemList text={item.text} />
                })
              }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'red',
    padding: 10
  },
  title_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  },
  input: {
    padding: 10, 
    backgroundColor: 'white',
    flex: 1
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    marginLeft: 10
  }
});
