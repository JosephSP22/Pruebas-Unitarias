import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DetalleModal from '../components/DetalleModal';


// Mock de react-native-vector-icons/MaterialIcons
// Esto es necesario porque el componente utiliza iconos de MaterialIcons
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

describe('DetalleModal', () => {
    // Mock de la pieza
    const mockPieza = {
        id: '1',
        nombre: 'Filtro de aceite',
        marca: 'Toyota',
        serie: '12345',
        fecha: '2025-04-08'
    };

    // Mock de la función onClose
    // Esta función se utiliza para cerrar el modal
    const mockOnClose = jest.fn();

    beforeEach(() => {
        mockOnClose.mockClear();
    });

    // Test para verificar que el modal se muestra correctamente
    it('muestra correctamente los detalles de la pieza', () => {
        const { getByText } = render(
            <DetalleModal 
                visible={true}
                pieza={mockPieza}
                onClose={mockOnClose}
            />
        );

        expect(getByText('Filtro de aceite')).toBeTruthy();
        expect(getByText('Toyota')).toBeTruthy();
        expect(getByText('12345')).toBeTruthy();
        expect(getByText('2025-04-08')).toBeTruthy();
    });

    // Test para verificar que el modal llama a la función onClose al cerrarse
    it('llama a onClose cuando se presiona el botón cerrar', () => {
        const { getByText } = render(
            <DetalleModal 
                visible={true}
                pieza={mockPieza}
                onClose={mockOnClose}
            />
        );

        const closeButton = getByText('Cerrar');
        fireEvent.press(closeButton);
        
        expect(mockOnClose).toHaveBeenCalled();
    });
});