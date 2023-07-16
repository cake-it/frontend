import { StyleSheet } from 'react-native';
import { theme } from 'styles/theme';

export const customStyles = StyleSheet.create({
  // 대부분의 global styles
  container: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 30,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  imageItem: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    overflow: 'hidden',
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 25,
    alignSelf: 'flex-start',
  },
  selectedImageItem: {
    borderColor: theme.pink,
    borderWidth: 3,
    borderRadius: 100,
  },
  image: {
    width: 80,
    height: 80,
  },
  lastImageItem: {
    marginBottom: 60,
  },
  labelText: {
    fontSize: 16,
    color: '#999999',
    fontFamily: theme.regular,
  },

  // letter
  letterImageItem: {
    borderWidth: 1,
    width: 81,
    height: 81,
    borderColor: theme.borderGray,
    backgroundColor: '#F8F8F8',
    borderRadius: 100,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 25,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  letterImage: {
    width: 45,
    height: 22,
    alignSelf: 'center',
  },
  letterLabelBox: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    width: 255,
    marginBottom: 18,
  },

  //image
  uploadWrapper: {
    alignItems: 'center',
    marginVertical: 30,
  },
  cameraView: {
    marginVertical: 30,
    alignItems: 'center',
  },
  uploadButton: {
    marginVertical: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 99,
    borderColor: '#939393',
    borderWidth: 1,
    padding: 10,
    width: 125,
    gap: 7,
  },
});
