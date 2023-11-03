import { useFonts } from '@expo-google-fonts/nunito-sans';

export const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular: require('/home/kamal/WorkSpace/ReactNative-Dev/Expo/HotelDot/assets/fonts/static/NunitoSans_10pt-Regular.ttf'),
    NunitoSans_700Bold: require('/home/kamal/WorkSpace/ReactNative-Dev/Expo/HotelDot/assets/fonts/NunitoSans-VariableFont.ttf'),
    
  });

  return fontsLoaded;
};