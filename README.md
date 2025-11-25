# GEVOPI - Aplicación Móvil

Aplicación móvil de GEVOPI desarrollada con React Native y Expo.

## ⚠️ Importante - Después de Descargar

Cuando descargues este proyecto desde GitHub, la carpeta `node_modules` **NO** estará incluida (esto es normal en proyectos Node.js). **DEBES instalar las dependencias** antes de ejecutar la aplicación.

## Requisitos

- Node.js v22.18.0 o superior
- npm v10.9.3 o superior
- Expo CLI (se instalará automáticamente con las dependencias)

## Instalación

### 1. Navegar a la carpeta del proyecto
```bash
cd gevopi-app
```

### 2. Instalar todas las dependencias (OBLIGATORIO)
```bash
npm install
```
Este comando descargará todas las librerías necesarias en la carpeta `node_modules` (aproximadamente 1000+ paquetes)

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
