# 📥 Instrucciones para Descargar y Ejecutar el Proyecto

## ¿Por qué la carpeta aparece "vacía" después de descargar?

Cuando descargas el proyecto desde GitHub (como ZIP o RAR), verás que la carpeta `gevopi-app/node_modules` **NO está incluida**. Esto es **completamente normal** y es la forma correcta de trabajar con proyectos Node.js.

### ¿Por qué?
- La carpeta `node_modules` contiene más de **1000 paquetes** (aproximadamente 500 MB)
- No se sube a GitHub para ahorrar espacio y tiempo
- Cada desarrollador debe instalar estas dependencias localmente

## ✅ Pasos para Configurar el Proyecto Correctamente

### 1. Descargar el Proyecto
- Descarga el proyecto desde GitHub (botón "Code" → "Download ZIP")
- Extrae el archivo ZIP en tu computadora

### 2. Instalar Node.js
Si no tienes Node.js instalado:
- Descarga desde: https://nodejs.org/
- Instala la versión LTS (Long Term Support)
- Verifica la instalación:
```bash
node --version
npm --version
```

### 3. Abrir Terminal en la Carpeta del Proyecto
- Abre una terminal (CMD, PowerShell, o Terminal)
- Navega a la carpeta `gevopi-app`:
```bash
cd ruta/al/proyecto/gevopi-app
```

### 4. Instalar Dependencias (OBLIGATORIO)
```bash
npm install
```
**Este paso es FUNDAMENTAL**. Descargará todos los paquetes necesarios.

⏱️ **Tiempo estimado**: 3-5 minutos dependiendo de tu conexión a internet

### 5. Ejecutar la Aplicación

#### Para Web:
```bash
npx expo start --web
```

#### Para Android:
```bash
npx expo start --android
```

#### Para iOS (solo en Mac):
```bash
npx expo start --ios
```

## 🚨 Errores Comunes

### "npm: command not found" o "npm no se reconoce"
**Solución**: Instala Node.js desde https://nodejs.org/

### "Cannot find module..."
**Solución**: No ejecutaste `npm install`. Hazlo antes de continuar.

### La aplicación no carga en el navegador
**Solución**: Asegúrate de que no haya otro servicio usando el puerto 8081

## 📁 Estructura del Proyecto Después de Instalación

```
gevopi-app/
├── node_modules/        ← Esta carpeta se crea con npm install
├── src/
│   ├── screens/
│   ├── components/
│   ├── services/
│   └── ...
├── package.json         ← Lista de dependencias
├── App.js
└── ...
```

## 💡 Nota Importante

- **NUNCA** subas la carpeta `node_modules` a GitHub
- Siempre ejecuta `npm install` después de clonar o descargar el proyecto
- Si compartes el proyecto con alguien, solo comparte el código fuente, no `node_modules`

---

**¿Sigue sin funcionar?** Verifica que:
1. ✅ Node.js está instalado
2. ✅ Ejecutaste `npm install` dentro de `gevopi-app/`
3. ✅ No hay errores en la consola durante `npm install`
