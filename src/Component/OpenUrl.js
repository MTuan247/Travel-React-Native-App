import React, { useCallback } from "react";
import { Alert, Button, Linking, Platform } from "react-native";

export function openUrl(url) {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = Linking.canOpenURL(url);

    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        Linking.openURL(url);
    } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
    }

};

export const callNumber = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phone}`;
    }
    else {
        phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not available');
            } else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
};

export const sendEmail = email => {
    console.log('sendEmail ----> ', email);
    let emailCode = "mailto:" + email;
    
    Linking.canOpenURL(emailCode)
        .then(supported => {
            if (!supported) {
                Alert.alert('Email is unsupported');
            } else {
                return Linking.openURL(emailCode);
            }
        })
        .catch(err => console.log(err));
};