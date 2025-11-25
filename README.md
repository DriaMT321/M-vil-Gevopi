# GEVOPI - Aplicación Móvil

Aplicación móvil de GEVOPI desarrollada con React Native y Expo.

## ⚠️ Importante - Después de Descargar

Cuando descargues este proyecto desde GitHub, la carpeta `node_modules` **NO** estará incluida (esto es normal en proyectos Node.js). **DEBES instalar las dependencias** antes de ejecutar la aplicación.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v22.18.0 o superior (descarga desde https://nodejs.org/)
- **npm** v10.9.3 o superior (viene incluido con Node.js)
- Expo CLI (se instalará automáticamente con las dependencias)

### Verificar Instalación de Node.js

Abre una terminal y ejecuta:
```bash
node --version
npm --version
```

Deberías ver algo como:
```
v22.18.0
10.9.3
```

## 🚀 Instalación y Ejecución

### Paso 1: Descargar el Proyecto
- Descarga el proyecto desde GitHub (botón verde "Code" → "Download ZIP")
- Extrae el archivo ZIP en tu computadora

### Paso 2: Abrir Terminal
- **Windows**: Abre PowerShell o CMD
- **Mac/Linux**: Abre Terminal

### Paso 3: Navegar a la Carpeta
```bash
cd ruta/donde/descargaste/el/proyecto/gevopi-app
```

Por ejemplo:
```bash
cd C:\Users\TuUsuario\Downloads\M-vil-Gevopi\gevopi-app
```

### Paso 4: Instalar Dependencias (OBLIGATORIO ⚠️)
```bash
npm install
```

**Esto tomará 3-5 minutos** y descargará aproximadamente **895 paquetes** (~500 MB).

Verás algo como:
```
added 895 packages in 15s
```

### Paso 5: Ejecutar la Aplicación

#### 🌐 Para Web (Recomendado para probar rápidamente):
```bash
npx expo start --web
```

**Si usas PowerShell y recibes un error de "ejecución de scripts deshabilitada"**, ejecuta primero:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
Luego vuelve a intentar `npx expo start --web`

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:8081`

#### 📱 Para Android:
```bash
npx expo start --android
```
Necesitas tener instalado Android Studio y un emulador o dispositivo conectado.

#### 🍎 Para iOS (solo en Mac):
```bash
npx expo start --ios
```
Necesitas tener instalado Xcode.

## ⏱️ Tiempos Esperados

- **Descarga del proyecto**: ~5-10 segundos
- **npm install**: ~3-5 minutos (primera vez)
- **Compilación inicial**: ~10-15 segundos
- **Abriendo en navegador**: Automático

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

## 🐛 Problemas Comunes y Soluciones

### ❌ "npm: command not found" o "npm no se reconoce"
**Causa**: Node.js no está instalado o no está en el PATH  
**Solución**: 
1. Instala Node.js desde https://nodejs.org/
2. Reinicia tu terminal después de instalar
3. Verifica con `node --version`

### ❌ "No se puede cargar el archivo npx.ps1 porque la ejecución de scripts está deshabilitada"
**Causa**: Política de ejecución de PowerShell  
**Solución**: Ejecuta esto antes de cualquier comando npm/npx:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### ❌ "Cannot find module..."
**Causa**: No ejecutaste `npm install`  
**Solución**: Asegúrate de estar en la carpeta `gevopi-app` y ejecuta `npm install`

### ❌ La aplicación no carga en el navegador
**Causa**: Puerto 8081 ocupado por otro programa  
**Solución**: 
1. Cierra cualquier otro servidor en ejecución
2. Reinicia la terminal
3. Vuelve a ejecutar `npx expo start --web`

### ❌ "packages should be updated for best compatibility"
**Esto es solo una advertencia**, la aplicación funcionará correctamente. Si quieres actualizar:
```bash
npx expo install --fix
```

## 📁 Estructura del Proyecto

```
gevopi-app/
├── node_modules/    # 📦 Se crea con npm install (no incluido en GitHub)
├── src/
│   ├── screens/     # 📱 Pantallas de la aplicación
│   ├── components/  # 🧩 Componentes reutilizables
│   ├── services/    # 🌐 Servicios de API
│   ├── styles/      # 🎨 Estilos de las pantallas
│   └── themes/      # 🎨 Colores y temas
├── .gitignore       # 🚫 Archivos ignorados por Git
├── App.js           # 🚀 Punto de entrada
├── package.json     # 📋 Lista de dependencias
└── metro.config.js  # ⚙️ Configuración para web
```

## ✨ Características

- 🔐 Autenticación de usuarios
- 🚨 Gestión de solicitudes de emergencia
- 👥 Perfil de voluntarios
- 📚 Necesidades y capacitaciones
- 🌍 Geolocalización (móvil y web)
- 📊 Evaluaciones y resultados
- 📜 Historial de actividades
- 📱 Soporte para Web, Android e iOS

## 💡 Notas Importantes

- ✅ **Es normal** que `node_modules` no esté en GitHub
- ✅ **Siempre ejecuta** `npm install` después de descargar el proyecto
- ✅ **La primera compilación** toma más tiempo (~10-15 segundos)
- ✅ **Los warnings de versiones** son normales y no afectan la funcionalidad
- ⚠️ **No subas** `node_modules` a GitHub si haces cambios

## 🆘 ¿Necesitas Ayuda?

Si sigues teniendo problemas:

1. ✅ Verifica que Node.js está instalado: `node --version`
2. ✅ Asegúrate de estar en la carpeta correcta: `cd gevopi-app`
3. ✅ Ejecuta `npm install` completamente sin errores
4. ✅ Revisa la sección de "Problemas Comunes" arriba

---

**Desarrollado con ❤️ usando React Native y Expo**
