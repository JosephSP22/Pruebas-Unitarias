import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

// Mock de react-native-vector-icons/MaterialIcons
// Esto es necesario porque el componente utiliza iconos de MaterialIcons
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');


describe('HomeScreen', () => {
    const mockNavigation = {
        navigate: jest.fn()
    };

    beforeEach(() => {
        mockNavigation.navigate.mockClear();
    });
    // Test para verificar que el componente muestra el mensaje "No hay piezas, Agregue una" cuando no hay piezas
    it('muestra mensaje cuando no hay piezas', () => {
        const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
        expect(getByText('No hay piezas, Agregue una')).toBeTruthy();
    });

    // Test para verificar que el componente muestra la lista de piezas
    it('navega a la pantalla de agregar al presionar el botón', () => {
        const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
        const addButton = getByText('Agregar Pieza');
        
        fireEvent.press(addButton);
        
        expect(mockNavigation.navigate).toHaveBeenCalledWith(
            'Agregar',
            expect.any(Object)
        );
    });
});