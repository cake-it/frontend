import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonFlex: {
    flex: 1,
    backgroundColor: theme.white,
  },
  buttonView: {
    alignItems: 'center',
    gap: 20,
    marginBottom: 50,
  },
});
