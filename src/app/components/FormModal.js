'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/context/LanguageContext';

const FormModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [contactReason, setContactReason] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          reason: contactReason,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setContactReason('');
      onClose();
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {contactReason === 'consultation'
              ? t('contact.form.consultationTitle')
              : t('contact.form.title')}
          </DialogTitle>
          <DialogDescription>
            {contactReason === 'consultation'
              ? t('contact.form.consultationSubtitle')
              : t('contact.form.subtitle')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{t('contact.form.name')}</Label>
            <Input
              id="name"
              placeholder={t('contact.form.namePlaceholder')}
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t('contact.form.emailAddress')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('contact.form.emailPlaceholder')}
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">{t('contact.form.reason.title')}</Label>
            <Select onValueChange={setContactReason} value={contactReason}>
              <SelectTrigger>
                <SelectValue
                  placeholder={t('contact.form.reason.placeholder')}
                />
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
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          )}

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{t('contact.form.success')}</p>}

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              {t('contact.form.cancelButton')}
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? t('contact.form.sending') : t('contact.form.sendButton')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;