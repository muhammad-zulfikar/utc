'use client';

// import Image from "next/image";
import { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Footer from '../components/Footer';

export default function About() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Four decades of excellence in technology and banking
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              United Training Consulting
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Founded in 2010, United Training Consulting brings decades of
              expertise in technology, banking, and information security to
              provide tailored consulting services for our clients.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
              <p className="text-blue-900 dark:text-blue-200">
                "Our mission is to deliver personalized solutions that leverage
                our extensive industry experience to meet each client's unique
                needs."
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Company Highlights
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Founded in 2010
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Client-focused approach
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Customized solutions
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-24 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Meet Our Founder
              </h2>
              <h3 className="text-xl text-blue-600 dark:text-blue-400">
                Craig Rapier
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With over 40 years in technology and 30 years in banking, Craig
                Rapier brings unparalleled expertise to The Rapier Company LLC.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Professional Experience:
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>
                      First Bank - Security Systems & Technology Management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>
                      Peoples National Bank - Technology Implementation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>US Bank - Management & Security Systems</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Technology
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    40+ years experience in systems implementation and
                    management
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Banking
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    30+ years in banking systems and operations
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Security
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Extensive experience in banking security systems
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Management
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Proven leadership in technology and banking sectors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Approach
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
              The Rapier Company brings Craig's professional values and
              expertise to each client, providing customized solutions that
              address specific needs and challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Client-Focused
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We tailor our services to meet each client's unique
                  requirements and objectives.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Experience-Driven
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Leveraging decades of industry experience to deliver proven
                  solutions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Results-Oriented
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Focused on delivering measurable outcomes and lasting value
                  for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
