const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Configuración para resolver problemas de compatibilidad web
config.resolver.resolverMainFields = ['browser', 'module', 'main'];

// Excluir módulos problemáticos en web
config.resolver.blockList = [
  /react-native\/Libraries\/NewAppScreen/,
];

// Resolver react-native-maps y módulos problemáticos como vacíos en web
const originalResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Bloquear react-native-maps en web
  if (platform === 'web' && moduleName === 'react-native-maps') {
    return {
      type: 'empty',
    };
  }
  // Bloquear NewAppScreen y sus dependencias en web
  if (platform === 'web' && (
    moduleName.includes('NewAppScreen') ||
    moduleName.includes('react-native/Libraries/NewAppScreen')
  )) {
    return {
      type: 'empty',
    };
  }
  if (originalResolveRequest) {
    return originalResolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
