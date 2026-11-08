import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders a mailto link for the contact email', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const emailLink = screen.getByRole('link', { name: /correo electrónico/i });
  expect(emailLink).toHaveAttribute('href', 'mailto:info@socorrosmutuos.com.ar');
});
