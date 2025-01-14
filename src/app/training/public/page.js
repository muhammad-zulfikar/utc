'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Filter,
  Calendar,
  Users,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import courseData from '@/data/training-2025.csv';

const benefitIcons = {
  networking: <Users className="w-6 h-6 text-primary" />,
  scheduling: <Calendar className="w-6 h-6 text-primary" />,
  certification: <Award className="w-6 h-6 text-primary" />,
  timeEfficient: <Clock className="w-6 h-6 text-primary" />,
};

const benefits = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Networking Opportunities',
    description:
      'Connect with professionals across different industries and expand your professional network.',
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: 'Flexible Scheduling',
    description:
      'Choose from multiple dates throughout the year that best fit your schedule.',
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: 'Certification',
    description:
      'Receive industry-recognized certification upon successful completion of the program.',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: 'Time-Efficient',
    description:
      'Concentrated learning experience designed to maximize your time investment.',
  },
];

function PublicTraining() {
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const { t } = useLanguage();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const topics = ['All', ...new Set(courseData.map((course) => course.Topik))];

  const filteredCourses = courseData.filter((course) => {
    if (!course || !course['Judul Pelatihan']) return false;
    const matchesSearch = course['Judul Pelatihan']
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTopic =
      selectedTopic === 'All' || course.Topik === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleFirstPage = () => setCurrentPage(1);

  const handleLastPage = () => setCurrentPage(totalPages);

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Infinite Grid Background */}
      <div className="absolute inset-0 z-[-1] bg-transparent">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] animate-scroll-grid"></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-80 bg-primary">
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">
              {t('services.publicTraining.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('services.publicTraining.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('services.publicTraining.whyChooseUs.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(
            t('services.publicTraining.whyChooseUs.benefits')
          ).map(([key, benefit]) => (
            <Card key={key} className="border-2 border-gray-100">
              <CardHeader className="space-y-4">
                <div>{benefitIcons[key]}</div>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Programs Section */}
      <div className="container mx-auto px-4 mb-16 bg-white rounded-2xl shadow-xl py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t('services.publicTraining.availablePrograms.title')}
        </h2>
        <div className="flex gap-4 mb-6 justify-end items-center">
          <Input
            placeholder={t('services.publicTraining.availablePrograms.search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm border-2 border-gray-300 focus:outline-none"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-2 border-gray-300 flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {t('services.publicTraining.availablePrograms.filter')}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {topics.map((topic, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedTopic(topic)}
                  className={selectedTopic === topic ? 'bg-gray-100' : ''}
                >
                  {topic}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="overflow-x-auto bg-gray-50 rounded-xl shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-200 text-sm font-semibold text-gray-700">
                <TableHead className="whitespace-nowrap">
                  {t(
                    'services.publicTraining.availablePrograms.table.trainingTitle'
                  )}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t('services.publicTraining.availablePrograms.table.topics')}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t(
                    'services.publicTraining.availablePrograms.table.trainingDays'
                  )}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t(
                    'services.publicTraining.availablePrograms.table.trainingHours'
                  )}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t(
                    'services.publicTraining.availablePrograms.table.startDate'
                  )}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t('services.publicTraining.availablePrograms.table.endDate')}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t(
                    'services.publicTraining.availablePrograms.table.onlinePrice'
                  )}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t(
                    'services.publicTraining.availablePrograms.table.offlinePrice'
                  )}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t(
                    'services.publicTraining.availablePrograms.table.location'
                  )}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t('services.publicTraining.availablePrograms.table.phone')}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {t('services.publicTraining.availablePrograms.table.email')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCourses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {course['Judul Pelatihan']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Topik']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Hari Pelatihan']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Jam Pelatihan Per Hari']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Tanggal Awal']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Tanggal Akhir']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Biaya Online']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Biaya Offline']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Lokasi Pelatihan']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    0{course['No Telepon/HP']}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {course['Alamat Email']}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
          <div className="hidden md:flex items-center space-x-2">
            <p>
              {t(
                'services.publicTraining.availablePrograms.pagination.rowsPerPage'
              )}
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{itemsPerPage}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {[10, 20, 50].map((count) => (
                  <DropdownMenuItem
                    key={count}
                    onClick={() => handleItemsPerPageChange(count)}
                  >
                    {count}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <span>
            {t('services.publicTraining.availablePrograms.pagination.pageOf')
              .replace('{0}', currentPage)
              .replace('{1}', totalPages)}
          </span>

          <div className="flex items-center space-x-2">
            <Button
              className="hidden md:flex"
              variant="outline"
              onClick={handleFirstPage}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              className="hidden md:flex"
              variant="outline"
              onClick={handleLastPage}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicTraining;
