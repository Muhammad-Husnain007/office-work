import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Office = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
    <View style={styles.sortcontainer}>
      {/* Touchable Button */}
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text>Sort by</Text>
        <Image style={styles.icon} source={require('../assests/user.png')} />
      </TouchableOpacity>

      {/* Dropdown View - Show below the button */}
      {dropdownVisible && (
        <View style={styles.dropdown}>
          <Text>Option 1</Text>
          <Text>Option 2</Text>
          <Text>Option 3</Text>
        </View>
      )}
    </View>
    <ScrollView style={{width: '100%', height: 'auto', backgroundColor: 'yellow', marginTop: 52}}>
        <View style={{width: '100%', height: 400, backgroundColor: 'gray'}}></View>
        <View style={{width: '100%', height: 400, backgroundColor: 'black'}}></View>
        <View style={{width: '100%', height: 400, backgroundColor: 'purple'}}></View>
        <View style={{width: '100%', height: 400, backgroundColor: 'aqua'}}></View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  sortcontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50, 
    zIndex: 1
  },
  button: {
    width: 140,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'white',
  },
  icon: {
    width: 20,
    height: 20,
  },
  dropdown: {
    width: 140,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 5, // Space between button and dropdown
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    height: 100
  },
});

export default Office;




 // Button connect and cancel request

// const [isClicked, setIsClicked] = useState(false);

// const handlePress = () => {
//   setIsClicked(!isClicked);
// };
    // <View style={styles.container}>
    //   <TouchableOpacity
    //     style={[styles.button, isClicked ? styles.clicked : null]}
    //     onPress={handlePress}
    //   >
    //     <Text style={styles.buttonText}>
    //       {isClicked ? 'Cancel request' : 'Connect'}
    //     </Text>
    //   </TouchableOpacity>
    // </View>

      // Button connect and cancel request CSS 
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     width: 200,
//     height: 40,
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   clicked: {
//     backgroundColor: 'green',
//   },