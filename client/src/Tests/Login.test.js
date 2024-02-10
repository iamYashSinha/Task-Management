import Login from "../components/Auth/Login";
import { render, screen } from "@testing-library/react";


describe('Login component', () => {
    it('renders login form correctly', () => {
      render(<Login />);
     
      expect(screen.getByTestId('login-title')).toBeInTheDocument();
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
      expect(screen.getByTestId('password-input')).toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });
  
  });