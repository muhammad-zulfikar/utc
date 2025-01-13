'use client';

import React from 'react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ChevronFirst,
  ChevronLast,
} from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const GallerySection = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const images = [
    {
      src: '/images/gallery/ASPEK%20KONTAK%20KERJA.jpeg',
      alt: 'Gallery Image 1',
      title: 'ASPEK KONTAK KERJA',
    },
    {
      src: '/images/gallery/ASPEK%20KONTRAK%20KERJ,.jpeg',
      alt: 'Gallery Image 2',
      title: 'ASPEK KONTRAK KERJ,',
    },
    {
      src: '/images/gallery/ASPEK%20KONTRAK%20KERJA...jpeg',
      alt: 'Gallery Image 3',
      title: 'ASPEK KONTRAK KERJA...',
    },
    {
      src: '/images/gallery/ASPEK%20KONTRAK%20KERJA.jpeg',
      alt: 'Gallery Image 4',
      title: 'ASPEK KONTRAK KERJA',
    },
    {
      src: '/images/gallery/ASPEK%20KONTRAK%20KERJA%20..jpeg',
      alt: 'Gallery Image 5',
      title: 'ASPEK KONTRAK KERJA ..',
    },
    {
      src: '/images/gallery/BUDGETING%20&%20COST%20CONTROL.jpeg',
      alt: 'Gallery Image 6',
      title: 'BUDGETING & COST CONTROL',
    },
    {
      src: '/images/gallery/BUDGETING%20&%20COST%20CONTROL%20..jpeg',
      alt: 'Gallery Image 7',
      title: 'BUDGETING & COST CONTROL ..',
    },
    {
      src: '/images/gallery/BUDGETING%20&%20COST%20CONTROL,,.jpeg',
      alt: 'Gallery Image 8',
      title: 'BUDGETING & COST CONTROL,,',
    },
    {
      src: '/images/gallery/DATA%20ANALISIS%20FUNDAMENTAL%20USING%20EXCEL.jpeg',
      alt: 'Gallery Image 9',
      title: 'DATA ANALISIS FUNDAMENTAL USING EXCEL',
    },
    {
      src: '/images/gallery/DATA%20ANALYSIS%20FUNDAMENTAL.jpeg',
      alt: 'Gallery Image 10',
      title: 'DATA ANALYSIS FUNDAMENTAL',
    },
    {
      src: '/images/gallery/DATA%20ANALYSIS%20FUNDAMENTAL%20U%20EXCEL.jpeg',
      alt: 'Gallery Image 11',
      title: 'DATA ANALYSIS FUNDAMENTAL U EXCEL',
    },
    {
      src: '/images/gallery/DATA%20ANALYSIS%20FUNDAMENTAL%20USING%20EXCEL.jpeg',
      alt: 'Gallery Image 12',
      title: 'DATA ANALYSIS FUNDAMENTAL USING EXCEL',
    },
    {
      src: '/images/gallery/MAINTEANCE%20M%204.jpeg',
      alt: 'Gallery Image 13',
      title: 'MAINTEANCE M 4',
    },
    {
      src: '/images/gallery/MAINTENANCE%20M....jpeg',
      alt: 'Gallery Image 14',
      title: 'MAINTENANCE M...',
    },
    {
      src: '/images/gallery/MAINTENANCE%20M.jpeg',
      alt: 'Gallery Image 15',
      title: 'MAINTENANCE M',
    },
    {
      src: '/images/gallery/MAINTENANCE%20M2.jpeg',
      alt: 'Gallery Image 16',
      title: 'MAINTENANCE M2',
    },
    {
      src: '/images/gallery/MAINTENANCE%20M3.jpeg',
      alt: 'Gallery Image 17',
      title: 'MAINTENANCE M3',
    },
    {
      src: '/images/gallery/MAINTENANCE%20M%201.jpeg',
      alt: 'Gallery Image 18',
      title: 'MAINTENANCE M 1',
    },
    {
      src: '/images/gallery/MAINTENANCE%20M%20,,.jpeg',
      alt: 'Gallery Image 19',
      title: 'MAINTENANCE M ,,',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-23%20at%2009.03.08.jpeg',
      alt: 'Gallery Image 20',
      title: 'WhatsApp Image 2024-04-23 at 09.03.08',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-23%20at%2009.03.09.jpeg',
      alt: 'Gallery Image 21',
      title: 'WhatsApp Image 2024-04-23 at 09.03.09',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-24%20at%2009.21.28.jpeg',
      alt: 'Gallery Image 22',
      title: 'WhatsApp Image 2024-04-24 at 09.21.28',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-24%20at%2009.21.29.jpeg',
      alt: 'Gallery Image 23',
      title: 'WhatsApp Image 2024-04-24 at 09.21.29',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-25%20at%2011.36.14.jpeg',
      alt: 'Gallery Image 24',
      title: 'WhatsApp Image 2024-04-25 at 11.36.14',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-25%20at%2011.36.15.jpeg',
      alt: 'Gallery Image 25',
      title: 'WhatsApp Image 2024-04-25 at 11.36.15',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-25%20at%2014.56.07.jpeg',
      alt: 'Gallery Image 26',
      title: 'WhatsApp Image 2024-04-25 at 14.56.07',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-30%20at%2008.56.15.jpeg',
      alt: 'Gallery Image 27',
      title: 'WhatsApp Image 2024-04-30 at 08.56.15',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-04-30%20at%2008.56.15%20(1).jpeg',
      alt: 'Gallery Image 28',
      title: 'WhatsApp Image 2024-04-30 at 08.56.15 (1)',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-05-01%20at%2009.24.03.jpeg',
      alt: 'Gallery Image 29',
      title: 'WhatsApp Image 2024-05-01 at 09.24.03',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-05-01%20at%2009.24.03%20(1).jpeg',
      alt: 'Gallery Image 30',
      title: 'WhatsApp Image 2024-05-01 at 09.24.03 (1)',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-05-01%20at%2009.24.03%20(2).jpeg',
      alt: 'Gallery Image 31',
      title: 'WhatsApp Image 2024-05-01 at 09.24.03 (2)',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-04%20at%2008.55.28.jpeg',
      alt: 'Gallery Image 32',
      title: 'WhatsApp Image 2024-06-04 at 08.55.28',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-04%20at%2008.55.29.jpeg',
      alt: 'Gallery Image 33',
      title: 'WhatsApp Image 2024-06-04 at 08.55.29',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-04%20at%2008.55.29%20(1).jpeg',
      alt: 'Gallery Image 34',
      title: 'WhatsApp Image 2024-06-04 at 08.55.29 (1)',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-04%20at%2008.56.06.jpeg',
      alt: 'Gallery Image 35',
      title: 'WhatsApp Image 2024-06-04 at 08.56.06',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-04%20at%2008.56.06%20(1).jpeg',
      alt: 'Gallery Image 36',
      title: 'WhatsApp Image 2024-06-04 at 08.56.06 (1)',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-05%20at%2008.45.48.jpeg',
      alt: 'Gallery Image 37',
      title: 'WhatsApp Image 2024-06-05 at 08.45.48',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-05%20at%2009.01.36.jpeg',
      alt: 'Gallery Image 38',
      title: 'WhatsApp Image 2024-06-05 at 09.01.36',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-05%20at%2009.11.18.jpeg',
      alt: 'Gallery Image 39',
      title: 'WhatsApp Image 2024-06-05 at 09.11.18',
    },
    {
      src: '/images/gallery/WhatsApp%20Image%202024-06-05%20at%2016.42.28.jpeg',
      alt: 'Gallery Image 40',
      title: 'WhatsApp Image 2024-06-05 at 16.42.28',
    },
  ];

  const ITEMS_PER_PAGE = 12;
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  // Get current page's images
  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return images.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate pagination items
  const getPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        items.push(
          <PaginationItem key={i}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    return items;
  };

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Infinite Grid Background */}
      <div className="absolute inset-0 z-[-1] bg-transparent">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] animate-scroll-grid"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our <span className="text-[#FFC000]">Gallery</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our collection of memorable moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {getCurrentPageImages().map((image, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
              onClick={() => {
                setCurrentImageIndex(
                  (currentPage - 1) * ITEMS_PER_PAGE + index
                );
                setIsViewerOpen(true);
              }}
            >
              <CardContent className="p-0 relative">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${image.src})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Pagination className="justify-center">
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                className={`mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'}`}
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <ChevronFirst className="h-4 w-4" />
              </Button>
            </PaginationItem>

            <PaginationItem>
              <Button
                variant="outline"
                className={`${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </PaginationItem>

            {getPaginationItems()}

            <PaginationItem>
              <Button
                variant="outline"
                className={`${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PaginationItem>

            <PaginationItem>
              <Button
                variant="outline"
                className={`ml-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'}`}
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronLast className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Dialog
          open={isViewerOpen}
          onOpenChange={setIsViewerOpen}
          className="relative"
        >
          <DialogContent
            className="max-w-4xl bg-black/95 border-none p-0"
            closeButton={false}
          >
            <DialogTitle className="sr-only">
              Image Viewer - Image {currentImageIndex + 1} of {images.length}
            </DialogTitle>

            <Button
              variant="ghost"
              className="absolute right-2 top-2 text-white bg-black z-50"
              onClick={() => setIsViewerOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="relative h-[80vh] flex items-center justify-center">
              <Button
                variant="ghost"
                className="absolute left-2 text-white bg-white/20"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <div
                className="w-full h-full bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(${images[currentImageIndex].src})`,
                }}
              />

              <Button
                variant="ghost"
                className="absolute right-2 text-white bg-white/20"
                onClick={handleNextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-sm font-medium">
                Image {currentImageIndex + 1} of {images.length}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GallerySection;
