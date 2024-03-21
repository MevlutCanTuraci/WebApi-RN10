import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {

    const [loading, setLoading] = useState(true);
    const [userList, setuserList] = useState([]);

    async function fetchData(){

        // asenkron veri çekme örneği
        // const response = await axios.get(URL);
        // setuserList(response.data); 
        // setLoading(false);

        // senkron veri çekme örneği
        axios.get(URL).then(response => {
            setuserList(response.data);
            setLoading(false);
        });

    } 

    const renderUser = ({item}) => {
        return(
            <UserCard 
                name={item.name} 
                username={item.username}
                email={item.email}
            />
        );
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(

        <SafeAreaView>

            {
                loading? 
                (
                    <ActivityIndicator size="large" />
                )
                :
                (
                    <FlatList
                        data={userList}
                        renderItem={renderUser}
                        keyExtractor={item => item.id.toString()}
                    />
                )
            }

            {/* <Button onPress={fetchData} title='Get Data' /> */}

        </SafeAreaView>

    );

}

export default App;