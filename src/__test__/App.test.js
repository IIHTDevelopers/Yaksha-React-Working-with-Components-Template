import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
    test('AppComponent boundary renders the Header component', () => {
        render(<App />);
        // Check if the Header component is rendered by checking for a part of its content
        const headerText = screen.getByText('Welcome to the React Card Layout');
        expect(headerText).toBeInTheDocument(); // Ensure the header text is present
    });

    test('AppComponent boundary renders three Card components', () => {
        render(<App />);
        // Check if the Card component is rendered three times
        const cardElements = screen.getAllByText('Section Title'); // Assuming "Section Title" is part of the Card component
        expect(cardElements.length).toBe(3); // Ensure there are three Card components
    });

    test('AppComponent boundary renders the Footer component', () => {
        render(<App />);
        // Check if the Footer component is rendered by checking for a part of its content
        const footerText = screen.getByText('Footer Content');
        expect(footerText).toBeInTheDocument(); // Ensure the footer text is present
    });
});
