import React from 'react';
import { View, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import colors from '../themes/colors';

let MapView, Marker;

if (Platform.OS !== 'web') {
    try {
        const MapModule = require('react-native-maps');
        MapView = MapModule.default;
        Marker = MapModule.Marker;
    } catch (e) {
        console.log('react-native-maps not available');
    }
}

export default function MapViewWrapper({ latitude, longitude, description, style }) {
    if (Platform.OS === 'web') {
        return (
            <View style={[style, { backgroundColor: colors.fondo, justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: colors.textoPrincipal, fontSize: 16, marginBottom: 10 }}>
                    Vista de mapa no disponible en web
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
                        Linking.openURL(url);
                    }}
                    style={{ backgroundColor: colors.azul, padding: 10, borderRadius: 5 }}
                >
                    <Text style={{ color: colors.blanco }}>Abrir en Google Maps</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (!MapView || !Marker) {
        return (
            <View style={[style, { backgroundColor: colors.fondo, justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: colors.textoPrincipal }}>Mapa no disponible</Text>
            </View>
        );
    }

    return (
        <MapView
            style={style}
            initialRegion={{
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Marker
                coordinate={{
                    latitude: parseFloat(latitude),
                    longitude: parseFloat(longitude),
                }}
                title="Ubicación"
                description={description}
            />
        </MapView>
    );
}
