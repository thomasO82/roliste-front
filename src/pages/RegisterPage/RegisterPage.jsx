import React, { useState } from 'react';
import LoginDiscord from '../../components/LoginDiscord/LoginDiscord';
import FormField from '../../components/FormField/FormField';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    console.log('Form data:', formData);
    // Ici, vous ajouteriez la logique pour envoyer les données d'inscription à votre backend
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-black text-white opacity-90 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Inscription</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nom d'utilisateur"
            patternError={/^[a-zA-Z0-9_]{3,20}$/}
            errorMessage="Le nom d'utilisateur doit contenir entre 3 et 20 caractères alphanumériques ou underscore."
          />
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
            placeholder="Mot de passe"
            errorMessage='Le mot de passe doit contenir au moins 8 caractères, incluant au moins une lettre et un chiffre.'
            patternError={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
          />
          <FormField
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmer le mot de passe"
            errorMessage='Les mots de passe doivent correspondre.'
            patternError={new RegExp(`^${formData.password}$`)}
          />
          <button 
            className="w-full p-3 text-white bg-green-500 rounded-md hover:bg-green-600"
            type="submit"
          >
            S'inscrire
          </button>
        </form>
        <div className="mt-4">
          <LoginDiscord />
        </div>
        <p className="text-center mt-4">
          Déjà inscrit ? <a href="/login" className="text-blue-400 hover:underline">Se connecter</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;