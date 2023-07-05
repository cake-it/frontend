import { StyleSheet } from 'react-native';
import { theme } from 'styles/theme';

export const registerStyles = StyleSheet.create({
  inputContainer: {
    marginTop: 35,
    marginLeft: 15,
    paddingRight: 15,
    flex: 1,
  },
  inputLabel: {
    fontFamily: theme.bold,
    fontSize: 24,
    color: theme.black,
    marginBottom: 25,
  },
  idView: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingBottom: 5,
  },
  idText: {
    fontSize: 20,
    fontFamily: theme.bold,
    color: theme.black,
  },
  infoText: {
    fontFamily: theme.bold,
    fontSize: 14,
    color: '#8B8B8B',
    marginBottom: 10,
  },
  marginTop: {
    marginTop: 40,
  },
  inputFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
