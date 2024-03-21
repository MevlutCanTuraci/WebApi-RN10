import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const UserCard = (props) => { 

    return(
        <View style={styles.container}>
            <Text style={styles.username }>
                {props.username}
            </Text>

            <View style={styles.inner_container}>

                <Text>
                    {props.name}
                </Text>

                <Text style={styles.email}>
                    {props.email}
                </Text>

            </View>

        </View>
    ); 
    
}

export default UserCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        marginVertical: 5,
        padding: 6 
    },
    email: {
        fontSize: 12,
        color: '#757575'
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    }
  
});  