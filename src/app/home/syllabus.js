'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import syllabus from '@/data/syllabus';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function SyllabusSection() {
  const syllabusEntries = Object.entries(syllabus);
  const { t } = useLanguage();

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {t('home.syllabus.title')
              .split(/(Silabus|Syllabus)/i)
              .map((word, index) =>
                word.toLowerCase() === 'silabus' ||
                word.toLowerCase() === 'syllabus' ? (
                  <span key={index} className="text-primary">
                    {word}
                  </span>
                ) : (
                  <span key={index}>{word}</span>
                )
              )}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('home.syllabus.subtitle')}
          </p>
        </div>
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-10">
            {syllabusEntries.map(([key, syllabusData]) => (
              <Card
                key={key}
                className="cursor-pointer w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] min-w-0 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <Drawer>
                  <DrawerTrigger asChild>
                    <CardHeader className="cursor-pointer space-y-4">
                      <div className="w-16 h-16 mx-auto bg-[hsl(48,77%,52%,0.1)] rounded-full flex items-center justify-center">
                        <syllabusData.icon className="h-8 w-8 text-[hsl(48,77%,52%)]" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-800">
                        {t(`home.syllabus.categories.${key}.title`)}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {t(`home.syllabus.categories.${key}.description`)}
                      </CardDescription>
                    </CardHeader>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle className="text-2xl font-bold text-[hsl(48,77%,52%)]">
                        {t(`home.syllabus.categories.${key}.title`)}
                      </DrawerTitle>
                    </DrawerHeader>
                    <ScrollArea className="p-6 max-h-[60vh] overflow-auto">
                      <ul className="space-y-3">
                        {syllabusData.courses.map((course, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 mt-2 mr-2 bg-[hsl(48,77%,52%)] rounded-full"></span>
                            {course}
                          </li>
                        ))}
                      </ul>
                      <DrawerClose asChild>
                        <Button variant="outline" className="mt-6 w-full">
                          Close
                        </Button>
                      </DrawerClose>
                    </ScrollArea>
                  </DrawerContent>
                </Drawer>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
