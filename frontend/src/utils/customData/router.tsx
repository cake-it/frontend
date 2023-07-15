import Cream from '../../components/Custom/CustomItem/Cream';
import Letter from '../../components/Custom/CustomItem/Letter';
import Image from '../../components/Custom/CustomItem/Image';
import Sticker from '../../components/Custom/CustomItem/Sticker';
import { View } from 'react-native';

export const renderScene = ({ route }: { route: any }) => {
  switch (route.key) {
    case 'background':
      return <Cream />;
    case 'image':
      return <Image />;
    case 'cake':
    case 'candle':
    case 'fruit':
      return <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />;
    case 'letter':
      return <Letter />;
    case 'cream':
      return <Cream />;
    case 'sticker':
      return <Sticker />;
    default:
      return null;
  }
};
