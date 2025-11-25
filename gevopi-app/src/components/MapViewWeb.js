import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Componente MapView compatible con web
let NativeMapView, NativeMarker;

if (Platform.OS !== 'web') {
  const ReactNativeMaps = require('react-native-maps');
  NativeMapView = ReactNativeMaps.default;
  NativeMarker = ReactNativeMaps.Marker;
}

export const MapView = Platform.OS === 'web' 
  ? ({ children, style, region, initialRegion, ...props }) => (
      <View style={[styles.mapContainer, style]}>
        <Text style={styles.mapText}>
          Mapa (Vista Web)
        </Text>
        <Text style={styles.coordsText}>
          Ubicación: {(region?.latitude || initialRegion?.latitude)?.toFixed(4)}, {(region?.longitude || initialRegion?.longitude)?.toFixed(4)}
        </Text>
        {children}
      </View>
    )
  : NativeMapView;

// Componente Marker compatible con web
export const Marker = Platform.OS === 'web'
  ? ({ coordinate, title, description }) => (
      <View style={styles.marker}>
        <Text style={styles.markerText}>📍 {title || 'Marcador'}</Text>
        {description && <Text style={styles.markerDescription}>{description}</Text>}
        <Text style={styles.coordsText}>
          {coordinate?.latitude?.toFixed(4)}, {coordinate?.longitude?.toFixed(4)}
        </Text>
      </View>
    )
  : NativeMarker;

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4caf50',
    padding: 16,
  },
  mapText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 8,
  },
  coordsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  marker: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
  },
  markerText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  markerDescription: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
  },
});

export default MapView;
