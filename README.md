```markdown
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

Instalar Expo CLI:
```bash
npm install -g expo-cli
```

## 🚀 Instalación

1. 📥 **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd Prueba-App
```

2. 📦 **Instalar dependencias**
```bash
npm install
```

3. 🧪 **Instalar dependencias de desarrollo (testing)**
```bash
npm install --save-dev @testing-library/react-native@13.2.0 
npm install --save-dev @testing-library/jest-native@5.4.3
npm install --save-dev jest-expo@52.0.6
npm install --save-dev react-test-renderer@18.3.1
npm install --save-dev react-native-gesture-handler
npm install --save-dev react-native-reanimated
```

## 🗂️ Estructura del Proyecto
```
Prueba-App/
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

## ✅ Pruebas Unitarias

### 🧩 Componentes Testeados

#### 📌 DetalleModal
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

#### 🏠 HomeScreen
```javascript
describe('HomeScreen', () => {
  it('muestra mensaje cuando no hay piezas', () => {
    // Verifica el estado vacío
  });

  it('navega a la pantalla de agregar al presionar el botón', () => {
    // Verifica la navegación
  });
});
```

### 🧪 Ejecutar Pruebas

```bash
# ✅ Ejecutar todas las pruebas
npm test

# 🧠 Ejecutar pruebas específicas
npm test DetalleModal.test.js

# 👀 Modo watch
npm test -- --watch

# 🧼 Limpiar caché
npm test -- --clearCache
```

## 🛠️ Solución de Problemas

Si encontrás errores al ejecutar las pruebas:

1. 🧹 **Limpiar caché de Jest**
```bash
npm test -- --clearCache
```

2. 🔄 **Reinstalar dependencias**
```bash
rm -rf node_modules
npm install
```

3. 📋 **Verificar versiones de dependencias**
```bash
npm list @testing-library/react-native
npm list jest-expo
```
