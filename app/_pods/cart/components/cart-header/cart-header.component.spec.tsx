import { CartHeader } from ".."
import { render, screen } from '@testing-library/react'

describe('Cart: cart-header.component.tsx', () => {

    it("should display the text 'Mi Cesta:'", () => {
        // Act
        render(<CartHeader />);

        // Assert
        const element = screen.getByText('Mi Cesta:');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Mi Cesta:')
        expect(element).not.toBeNull();
    })

})