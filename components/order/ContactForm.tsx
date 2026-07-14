"use client";

import { useState, useEffect } from 'react';
import { validatePESEL } from '@/app/utils/pesel-validator';

interface ContactFormData {
  email: string;
  firstName: string;
  lastName: string;
  pesel: string;
  phone: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  postalCode: string;
  city: string;
  createAccount: boolean;
  password?: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
  isAuthenticated?: boolean;
  userEmail?: string;
  userPhone?: string;
  userFirstName?: string;
  userLastName?: string;
}

export default function ContactForm({ onSubmit, onCancel, isSubmitting = false, isAuthenticated = false, userEmail = '', userPhone = '', userFirstName = '', userLastName = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    email: userEmail || '',
    firstName: userFirstName || '',
    lastName: userLastName || '',
    pesel: '',
    phone: userPhone || '',
    street: '',
    houseNumber: '',
    apartmentNumber: '',
    postalCode: '',
    city: '',
    createAccount: false,
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      email: userEmail || prev.email,
      firstName: userFirstName || prev.firstName,
      lastName: userLastName || prev.lastName,
      phone: userPhone || prev.phone,
    }));
  }, [userEmail, userFirstName, userLastName, userPhone]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email?.trim()) {
      newErrors.email = 'E-mail jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Podaj prawidłowy adres e-mail';
    }

    if (!formData.firstName?.trim()) {
      newErrors.firstName = 'Imię jest wymagane';
    }

    if (!formData.lastName?.trim()) {
      newErrors.lastName = 'Nazwisko jest wymagane';
    }

    if (!formData.pesel?.trim()) {
      newErrors.pesel = 'PESEL jest wymagany';
    } else {
      const peselValidation = validatePESEL(formData.pesel);
      if (!peselValidation.valid) {
        newErrors.pesel = peselValidation.errors[0] || 'PESEL jest nieprawidłowy';
      }
    }

    if (!formData.phone?.trim()) {
      newErrors.phone = 'Telefon jest wymagany';
    } else if (!/^\d{9,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Podaj prawidłowy numer telefonu';
    }

    if (formData.createAccount) {
      if (!formData.password || formData.password.length < 8) {
        newErrors.password = 'Hasło musi mieć minimum 8 znaków';
      }
      if (formData.password !== confirmPassword) {
        newErrors.confirmPassword = 'Hasła nie są identyczne';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ContactFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Dane kontaktowe
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="twoj@email.pl"
              disabled={isAuthenticated && !!userEmail}
              className={`w-full px-4 py-2.5 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } ${isAuthenticated && !!userEmail ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : ''}`}
              required
            />
            {isAuthenticated && !!userEmail && (
              <p className="text-green-600 text-xs mt-1">✓ Pobrano z Twojego konta</p>
            )}
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefon <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+48 123 456 789"
              disabled={isAuthenticated && !!userPhone}
              className={`w-full px-4 py-2.5 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                errors.phone ? 'border-red-500' : 'border-gray-200'
              } ${isAuthenticated && !!userPhone ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : ''}`}
              required
            />
            {isAuthenticated && !!userPhone && (
              <p className="text-green-600 text-xs mt-1">✓ Pobrano z Twojego konta</p>
            )}
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Dane osobowe
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Imię <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              placeholder="Jan"
              disabled={isAuthenticated && !!userFirstName}
              className={`w-full px-4 py-2.5 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                errors.firstName ? 'border-red-500' : 'border-gray-200'
              } ${isAuthenticated && !!userFirstName ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : ''}`}
              required
            />
            {isAuthenticated && !!userFirstName && (
              <p className="text-green-600 text-xs mt-1">✓ Pobrano z Twojego konta</p>
            )}
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nazwisko <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              placeholder="Kowalski"
              disabled={isAuthenticated && !!userLastName}
              className={`w-full px-4 py-2.5 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                errors.lastName ? 'border-red-500' : 'border-gray-200'
              } ${isAuthenticated && !!userLastName ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : ''}`}
              required
            />
            {isAuthenticated && !!userLastName && (
              <p className="text-green-600 text-xs mt-1">✓ Pobrano z Twojego konta</p>
            )}
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PESEL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.pesel}
              onChange={(e) => handleChange('pesel', e.target.value)}
              placeholder="12345678901"
              maxLength={11}
              className={`w-full px-4 py-2.5 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                errors.pesel ? 'border-red-500' : 'border-gray-200'
              }`}
              required
            />
            {errors.pesel && <p className="text-red-500 text-xs mt-1">{errors.pesel}</p>}
          </div>
        </div>
      </div>

      {!isAuthenticated && (
        <div className="border-t border-gray-200 pt-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.createAccount}
              onChange={(e) => handleChange('createAccount', e.target.checked)}
              className="w-5 h-5 mt-0.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">
                Utwórz konto na naszej platformie
              </span>
              <p className="text-xs text-gray-500 mt-0.5">
                Załóż konto, abyśmy mogli wysłać Ci szczegółową poradę w formie elektronicznej
              </p>
            </div>
          </label>

        {formData.createAccount && (
            <>
          <div className="mt-4 ml-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hasło <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="Minimum 8 znaków"
              minLength={8}
              className={`w-full md:w-80 px-4 py-2.5 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              }`}
              required={formData.createAccount}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            <p className="text-xs text-gray-500 mt-1">
              Hasło musi zawierać co najmniej 8 znaków
            </p>
          </div>
                     <div className="mt-4 ml-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Powtórz hasło <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Powtórz hasło"
              minLength={8}
              className={`w-full md:w-80 px-4 py-2.5 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
              }`}
              required={formData.createAccount}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Hasła muszą się zgadzać
            </p>
            </div>
            </>
          )}
        </div>
      )}

      <div className="flex gap-4 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          ← Wróć do wywiadu
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-6 py-3  text-white rounded-lg hover:bg-[#DAE9E6] hover:text-[#064743] cursor-pointer bg-[#064743] transition-colors font-medium disabled:opacity-50"
        >
          {isSubmitting ? 'Przetwarzanie...' : 'Dalej: Płatność →'}
        </button>
      </div>
    </form>
  );
}
