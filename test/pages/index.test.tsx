import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Homepage from '../../src/pages/index';

describe('Homepage', () => {
    it('loades homepage properly', () => {
        render(<Homepage />);

        expect(screen.getByTestId('homepage')).toBeInTheDocument();
    });
});
