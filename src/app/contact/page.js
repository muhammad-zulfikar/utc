'use client';

import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Phone, Mail, Building2, Rss, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [contactReason, setContactReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Infinite Grid Background */}
      <div className="absolute inset-0 z-[-1] bg-transparent">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] animate-scroll-grid"></div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            {t('contact.title')}
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-24">
          <Card>
            <CardHeader>
              <CardTitle>
                {contactReason === 'consultation'
                  ? t('contact.form.consultationTitle')
                  : t('contact.form.title')}
              </CardTitle>
              <CardDescription>
                {contactReason === 'consultation'
                  ? t('contact.form.consultationSubtitle')
                  : t('contact.form.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.form.name')}</Label>
                  <Input 
                    id="name" 
                    placeholder={t('contact.form.namePlaceholder')} 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.emailAddress')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">{t('contact.form.reason.title')}</Label>
                  <Select onValueChange={setContactReason} required>
                    <SelectTrigger>
                      <SelectValue placeholder={t('contact.form.reason.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="services">
                        {t('contact.form.reason.question')}
                      </SelectItem>
                      <SelectItem value="general">
                        {t('contact.form.reason.general')}
                      </SelectItem>
                      <SelectItem value="consultation">
                        {t('contact.form.reason.book')}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {contactReason !== 'consultation' && (
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                )}

                <div className="flex justify-center">
                  {contactReason === 'consultation' ? (
                    <Button
                      type="button"
                      size="lg"
                      className="w-full sm:w-auto px-8"
                      onClick={() =>
                        (window.location.href = '/book-consultation')
                      }
                    >
                      {t('contact.form.scheduleButton')}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto px-8"
                    >
                      {t('contact.form.sendButton')}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Contact Information */}
        <div className="mx-auto mb-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Building2 className="h-8 w-8 text-[#FFC000] mb-2" />
                <CardTitle>
                  <div className="mb-3">
                    {t('contact.office.title')}
                  </div>
                </CardTitle>
                <CardDescription>
                  {t('contact.office.address')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-[#FFC000] mb-2" />
                <CardTitle>
                  <div className="mb-3">
                    {t('contact.phone.title')}
                  </div>
                </CardTitle>
                <CardDescription>
                  <li>
                    <a
                      href="https://wa.me/+628212836526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {t('contact.phone.gunawan')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/+6281318517205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {t('contact.phone.mimie')}
                    </a>
                  </li>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-[#FFC000] mb-2" />
                <CardTitle>
                  <div className="mb-3">
                    {t('contact.email.title')}
                  </div>
                </CardTitle>
                <CardDescription>
                  <a
                    href="mailto:gunawan@united-trainingdevelopment.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t('contact.email.address')}
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Rss className="h-8 w-8 text-[#FFC000] mb-2" />
                <CardTitle>
                  <div className="mb-3">
                    {t('contact.socials.title')}
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="space-y-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline group"
                    >
                      <Instagram className="h-4 w-4 text-pink-500 group-hover:text-pink-600" />
                      <span>@unitedtraining</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline group"
                    >
                      <Linkedin className="h-4 w-4 text-[#0077B5] group-hover:text-[#005885]" />
                      <span>United Training</span>
                    </a>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}