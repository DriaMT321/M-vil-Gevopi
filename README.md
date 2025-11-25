# GEVOPI - Aplicación Móvil

Aplicación móvil de GEVOPI desarrollada con React Native y Expo.

## Requisitos

- Node.js v22.18.0 o superior
- npm v10.9.3 o superior
- Expo CLI

## Instalación

```bash
cd gevopi-app
npm install
```

## Ejecución

### Web
```bash
npx expo start --web
```

### Android
```bash
npx expo start --android
```

### iOS
```bash
npx expo start --ios
```

## Estructura del Proyecto

```
gevopi-app/
├── src/
│   ├── screens/     # Pantallas de la aplicación
│   ├── components/  # Componentes reutilizables
│   ├── services/    # Servicios de API
│   └── utils/       # Utilidades
├── assets/          # Recursos estáticos
└── App.js          # Punto de entrada
```

## Características

- Autenticación de usuarios
- Gestión de solicitudes de emergencia
- Perfil de voluntarios
- Necesidades y capacitaciones
- Soporte para Web, Android e iOS
