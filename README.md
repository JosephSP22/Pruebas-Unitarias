# 🚗 Aplicación de Gestión de Piezas Automotrices

## 📝 Descripción
Aplicación desarrollada con **React Native** para gestionar el inventario de piezas automotrices. Incluye **pruebas unitarias** para asegurar la calidad y correcto funcionamiento de los componentes.

## ✨ Características
- 🔍 Visualización de piezas disponibles  
- ➕ Agregado de nuevas piezas  
- ❌ Eliminación de piezas existentes  
- 📄 Vista detallada de cada pieza  

## ⚙️ Requisitos Previos
- [🔗 Node.js](https://nodejs.org/) (v14 o superior)  
- [🔗 npm](https://www.npmjs.com/) (v6 o superior)  
- [🔗 Expo CLI](https://docs.expo.dev/get-started/installation/)

## 🚀 Instalación y Configuración

### 1. Instalar Expo CLI
```bash
npm install -g expo-cli
```

### 2. Clonar el Repositorio
```bash
git clone https://github.com/JosephSP22/Pruebas-Unitarias.git
cd Pruebas-Unitarias
```

### 3. Instalar Dependencias del Proyecto
```bash
npm install
```

### 4. Instalar Dependencias de Testing
```bash
npm install --save-dev @testing-library/react-native@13.2.0 
npm install --save-dev @testing-library/jest-native@5.4.3
npm install --save-dev jest-expo@52.0.6
npm install --save-dev react-test-renderer@18.3.1
npm install --save-dev react-native-gesture-handler
npm install --save-dev react-native-reanimated
```

## 📁 Estructura del Proyecto
```
Pruebas-Unitarias/
├── __tests__/              
│   ├── DetalleModal.test.js
│   └── HomeScreen.test.js
├── components/
│   ├── DetalleModal.js
│   └── PiezaItem.js
├── screens/             
│   └── HomeScreen.js
└── App.js                   
```

## 🧪 Pruebas Unitarias

### Componentes Testeados

#### 1. DetalleModal
Pruebas para el componente modal que muestra detalles de piezas:
```javascript
describe('DetalleModal', () => {
    it('muestra correctamente los detalles de la pieza', () => {
        // Verifica la visualización de detalles
    });

    it('llama a onClose cuando se presiona el botón cerrar', () => {
        // Verifica la funcionalidad de cierre
    });
});
```

#### 2. HomeScreen
Pruebas para la pantalla principal:
```javascript
describe('HomeScreen', () => {
    it('muestra mensaje cuando no hay piezas', () => {
        // Verifica el estado vacío
    });

    it('navega a la pantalla de agregar', () => {
        // Verifica la navegación
    });
});
```

### Ejecutar Pruebas

#### Comandos Disponibles

Para ejecutar todas las pruebas:
```bash
npm test
```

Para ejecutar una prueba específica:
```bash
npm test DetalleModal.test.js
```

Para ejecutar en modo watch:
```bash
npm test -- --watch
```

Para limpiar caché:
```bash
npm test -- --clearCache
```

## 🛠️ Solución de Problemas

### Errores Comunes

1. **Error en la Caché de Jest**
   - Solución:
   ```bash
   npm test -- --clearCache
   ```

2. **Problemas con Dependencias**
   - Solución:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Verificación de Versiones**
   - Comando:
   ```bash
   npm list @testing-library/react-native
   npm list jest-expo
   ```

