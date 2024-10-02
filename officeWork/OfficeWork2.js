import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'

const OfficeWork2 = () => {
    return (
        <>
            <View style={styles.navbar}>
                <Text>Navbar</Text>
            </View>
            {/* Color */}
            <View style={styles.belowNav}>
            </View>
            <ScrollView style={styles.mainContainer}>
                {/* Slider */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imagesSlider}>
                    {/* images slider */}

                    <View style={styles.image1}>
                        <Text>Row 1</Text>
                    </View>

                    <View style={styles.image1}>
                        <Text>Row 1</Text>
                    </View>

                    <View style={styles.image1}>
                        <Text>Row 1</Text>
                    </View>

                    <View style={styles.image1}>
                        <Text>Row 1</Text>
                    </View>

                </ScrollView>
                {/* Details */}

                <View style={styles.detailsContainer}>

                    <View style={styles.slideImgeOneByOne}>
                        <Image source={require('../assests/user.png')} />
                        <Text style={styles.tex}>1/4</Text>
                        <Image source={require('../assests/user.png')} />
                    </View>
                    {/* db and names 2nd row */}

                    <View style={styles.rowTwo}>

                        <View style={styles.userDpView}>
                            <Image source={require('../assests/user.png')} />
                        </View>
                        <View style={styles.userNameView}>
                            <Text>Name</Text>
                            <Text>Name John</Text>
                        </View>

                        <View style={styles.silPriceView}>
                            <View style={styles.silView}>
                                <Text>SIL</Text>
                            </View>
                            <Text>$ 75,000</Text>
                        </View>

                    </View>
                    {/* 3rd row */}

                    <View style={styles.rowThree}>
                        <View style={styles.propertyLocationView}>
                            <Text>Property name</Text>
                            <View style={styles.locationView}>
                                <Image source={require("../assests/user.png")} />
                                <Text>Milton, QLD</Text>
                            </View>

                        </View>

                        <View style={styles.houseView}>
                            <Text>House</Text>
                        </View>

                    </View>
                    {/* 4th row */}

                    <View style={styles.threeIconsView}>
                        <View style={styles.iconOne}>
                            <Image source={require("../assests/user.png")} />
                            <Text>Icon 1</Text>
                        </View>
                        <View style={styles.iconTwo}>
                            <Image source={require("../assests/user.png")} />
                            <Text>Icon 2</Text>
                        </View>
                        <View style={styles.iconThree}>
                            <Image source={require("../assests/user.png")} />
                            <Text>Icon 3</Text>
                        </View>
                    </View>
                    {/* 5th row */}

                    <View style={styles.rowFive}>
                        <Text>Lorem --------------..</Text>
                    </View>
                </View>

                {/* About */}
                <View style={styles.aboutContainer}>
                    <Text>About</Text>
                </View>
                {/* Location */}
                <View style={styles.locationContainer}>
                    <Text>Location</Text>
                </View>

            </ScrollView>
            {/* Buttons */}
            <View style={styles.bottomButtonsContainer}>
                <Text>Button fixed</Text>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 80,
        backgroundColor: 'green'
    },
    belowNav: {
        width: '100%',
        height: 20,
        backgroundColor: 'pink'
    },
    mainContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'white'
    },
    imagesSlider: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',

    },
    image1: {
        width: 290,
        height: 240,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20, // Add space between each box
        marginTop: 20, // Add space between each box
        borderRadius: 10, // Optional border radius for a rounded effect
    },
    detailsContainer: {
        width: '100%',
        height: 450,
        backgroundColor: 'yellow'
    },
    slideImgeOneByOne: {
        width: '100%',
        height: 40,
        backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40
    },
    rowTwo: {
        width: '100%',
        height: 120,
        backgroundColor: 'aqua',
        flexDirection: 'row',
        paddingLeft: 30,
        // gap: 40
        alignItems: 'center'

    },
    userDpView:{
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userNameView:{
        width: 140,
        height: 80,
        // backgroundColor: 'gray',
        justifyContent: 'space-evenly',
        paddingLeft: 20,
    },
    silPriceView:{
        width: 90,
        height: 80,
        // backgroundColor: 'pink',
        justifyContent: 'space-evenly',
        marginLeft: 20,
        paddingLeft: 10
    },
    silView:{
        width: 40,
        height: 40,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    rowThree: {
        width: '100%',
        height: 120,
        backgroundColor: 'pink',
        flexDirection: 'row',
        paddingLeft: 30,
        
    },
    propertyLocationView: {
        width: 200,
        height: 100,
        backgroundColor: 'gray',
        gap: 20,
        paddingTop: 20
    },
    locationView: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        gap: 10
    },
    houseView: {
        width: 100,
        height: 50,
        backgroundColor: 'red',
        marginTop: 50,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
        
    },
    rowFour: {
        width: '100%',
        height: 100,
        backgroundColor: 'aqua'
    },
    rowFive: {
        width: '100%',
        height: 100,
        backgroundColor: 'aqua'
    },
    aboutContainer: {
        width: '100%',
        height: 250,
        backgroundColor: 'purple'
    },
    locationContainer: {
        width: '100%',
        height: 250,
        backgroundColor: 'azure'
    },
    bottomButtonsContainer: {
        width: '100%',
        height: 80,
        backgroundColor: 'aqua'
    },

});

export default OfficeWork2
