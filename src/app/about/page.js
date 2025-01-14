'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '../components/Footer';
import {
  Target,
  Award,
  Building2,
  Shield,
  BookOpen,
  GraduationCap,
  BarChart,
  Briefcase,
  HandshakeIcon,
  LineChart,
  Users2,
  Network,
  Scale,
  Clock,
  Trophy,
  Heart,
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
              <Image
                src="/images/logo.png"
                alt="United Training Consulting Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-primary sm:text-6xl mb-4">
            {t('about.hero.title')}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Trophy className="w-4 h-4 mr-2" />
              {t('about.stats.trainingSessions')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <BookOpen className="w-4 h-4 mr-2" />
              {t('about.stats.uniqueTopics')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Users2 className="w-4 h-4 mr-2" />
              {t('about.stats.participants')}
            </Badge>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Target className="h-6 w-6" />
                {t('about.vision.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-6 w-6" />
                {t('about.mission.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <ul className="space-y-4">
                {t('about.mission.points', { returnObjects: true }).map(
                  (point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  )
                )}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {t('about.coreValues.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                key: 0,
              },
              {
                icon: <Heart className="h-8 w-8" />,
                key: 1,
              },
              {
                icon: <Network className="h-8 w-8" />,
                key: 2,
              },
              {
                icon: <LineChart className="h-8 w-8" />,
                key: 3,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
                  <div className="relative z-10">
                    <div className="text-primary mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">
                      {t(`about.coreValues.values.${item.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`about.coreValues.values.${item.key}.description`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Features */}
        <Card className="shadow-lg relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              {t('about.whyChooseUs.title')}
            </CardTitle>
            <CardDescription>
              {t('about.whyChooseUs.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="h-6 w-6 text-primary" />,
                  key: 0,
                },
                {
                  icon: <BarChart className="h-6 w-6 text-primary" />,
                  key: 1,
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-primary" />,
                  key: 2,
                },
                {
                  icon: <HandshakeIcon className="h-6 w-6 text-primary" />,
                  key: 3,
                },
                {
                  icon: <Scale className="h-6 w-6 text-primary" />,
                  key: 4,
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />,
                  key: 5,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <h3 className="font-semibold text-lg">
                      {t(`about.whyChooseUs.features.${feature.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t(`about.whyChooseUs.features.${feature.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Approach */}
        <Card className="shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Target className="h-6 w-6" />
              {t('about.strategicApproach.title')}
            </CardTitle>
            <CardDescription>
              {t('about.strategicApproach.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Network className="h-6 w-6 text-primary" />,
                  key: 0,
                },
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  key: 1,
                },
                {
                  icon: <LineChart className="h-6 w-6 text-primary" />,
                  key: 2,
                },
                {
                  icon: <Trophy className="h-6 w-6 text-primary" />,
                  key: 3,
                },
              ].map((strategy, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {strategy.icon}
                    <h3 className="font-semibold text-lg">
                      {t(
                        `about.strategicApproach.strategies.${strategy.key}.title`
                      )}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t(
                      `about.strategicApproach.strategies.${strategy.key}.description`
                    )}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
