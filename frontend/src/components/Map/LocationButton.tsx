import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Location from '@assets/images/map/location.svg';
import { theme } from 'styles/theme';
import { LocationButtonProps } from 'types/map/types';

const LocationButton = ({ onPress, markerPressed }: LocationButtonProps) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={1.0}
        onPress={onPress}
        style={[styles.locationButton, { bottom: markerPressed ? 403 : 15 }]}
      >
        <Location />
      </TouchableOpacity>
    </>
  );
};

export default LocationButton;

const styles = StyleSheet.create({
  locationButton: {
    backgroundColor: theme.white,
    padding: 12,
    borderRadius: 34,
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
});
