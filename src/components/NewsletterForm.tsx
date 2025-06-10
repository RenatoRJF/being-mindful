'use client';

import { useState } from 'react';
import { Input } from './Input';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

interface NewsletterFormProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function NewsletterForm({ variant = 'default', className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isLoading || !email) return;
    
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocorreu um erro ao processar sua inscrição.');
      }

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao processar sua inscrição.');
      setEmail(''); // Clear the email field on error too
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-brand-teal font-medium mb-2">✨ Inscrição realizada com sucesso!</p>
        <p className="text-slate-300 text-sm">
          Obrigado por se inscrever. Em breve você receberá nosso e-mail de boas-vindas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="flex flex-col gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setError('');
            setEmail(e.target.value);
          }}
          placeholder="Seu e-mail aqui"
          icon={variant === 'default' ? <EnvelopeIcon className="w-5 h-5" /> : undefined}
          required
          error={error}
          className={variant === 'compact' ? 'py-4' : ''}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className={`
            px-6 py-2.5 bg-gradient-brand text-white rounded-lg font-medium 
            hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed
            ${variant === 'compact' ? 'absolute right-2 top-1/2 -translate-y-1/2' : 'w-full'}
          `}
        >
          {isLoading ? 'Processando...' : 'Quero receber'}
        </button>
      </div>
    </form>
  );
} 