import {View, Text} from 'react-native';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter }from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeader, Welcome } from '../components';

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;