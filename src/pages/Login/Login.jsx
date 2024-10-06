import React, { useState } from 'react';
import LoginDiscord from '../../components/LoginDiscord/LoginDiscord';
import FormField from '../../components/FormField/FormField';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-black text-white opacity-90 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            patternError={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            errorMessage='Entrez une adresse mail valide'

          />
          <FormField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            errorMessage='Le mot de passe doit contenir au moins 8 caractères, incluant au moins une lettre et un chiffre.'
            patternError={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
            />
          <button 
            className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="mt-4">
          <LoginDiscord />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;