"use client";

import { useState } from 'react';

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
}

export default function ContactForm({ onSubmit, onCancel }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    firstName: '',
    lastName: '',
    pesel: '',
    phone: '',
    street: '',
    houseNumber: '',
    apartmentNumber: '',
    postalCode: '',
    city: '',
    createAccount: false,
    password: '',
  });

  const handleChange = (field: keyof ContactFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Info */}
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
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
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
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
        </div>
      </div>

      {/* Personal Info */}
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
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
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
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
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
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Adres dostawy recepty
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ulica <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => handleChange('street', e.target.value)}
              placeholder="ul. Długa"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nr domu <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.houseNumber}
              onChange={(e) => handleChange('houseNumber', e.target.value)}
              placeholder="12"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nr mieszkania
            </label>
            <input
              type="text"
              value={formData.apartmentNumber}
              onChange={(e) => handleChange('apartmentNumber', e.target.value)}
              placeholder="5"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kod pocztowy <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.postalCode}
              onChange={(e) => handleChange('postalCode', e.target.value)}
              placeholder="12-345"
              maxLength={6}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Miejscowość <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              placeholder="Warszawa"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
        </div>
      </div>

      {/* Create Account */}
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
              Utwórz konto na recepta.pl
            </span>
            <p className="text-xs text-gray-500 mt-0.5">
              Załóż konto, abyśmy mogli wysłać Ci receptę w formie elektronicznej
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
              className="w-full md:w-80 px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required={formData.createAccount}
            />
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
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="Powtórz hasło"
              minLength={8}
              className="w-full md:w-80 px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required={formData.createAccount}
            />
            <p className="text-xs text-gray-500 mt-1">
              Hasła muszą się zgadzać
            </p>
          </div>
          </>
        )}
      </div>

      {/* Actions */}
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
          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Dalej: Płatność →
        </button>
      </div>
    </form>
  );
}
