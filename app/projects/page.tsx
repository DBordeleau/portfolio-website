"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// For ordering filters
const tagPriority: Record<string, number> = {
    "TypeScript": 1,
    "React": 2,
    "Next.js": 3,
    "PostgreSQL": 4,
    "SQL": 5,
    "Python": 6,
    "PyTorch": 7,
    "Framer": 8,
    "Tailwind": 9,
};

export default function ProjectsDirectory() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const router = useRouter();

    // Extract unique tags from all projects and sort by specified priority
    const allTags = Array.from(
        new Set(
            projectsData.flatMap(project => [...project.tags])
        )
    ).sort((a, b) => {
        const priorityA = tagPriority[a] || 100;
        const priorityB = tagPriority[b] || 100;

        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        return a.localeCompare(b);
    });

    // Filter projects based on active filter
    const filteredProjects = projectsData.filter(project => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter =
            !activeFilter ||
            project.tags.some(tag => tag === activeFilter);

        return matchesSearch && matchesFilter;
    });

    const handleProjectClick = (slug: string) => {
        router.push(`/projects/${slug}`);
    };

    return (
        <div className="min-h-screen pb-16 dark:text-white/90">
            <div className="container mx-auto px-4 pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-wrap items-center justify-between mb-8">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 md:mb-0 transition-colors"
                        >
                            <FaArrowLeft className="mr-2" /> Back to Home Page
                        </Link>
                    </div>

                    <h1 className="text-3xl text-center font-bold mb-[1rem]">All Projects</h1>
                    <div className="mb-[2rem] bg-white/80 dark:bg-gray-800/50 rounded-xl p-6 shadow-md mx-auto">
                        <h2 className='mb-[1rem] text-center'>Filter by tag: </h2>
                        <div className="flex flex-col items-center justify-center mb-6">
                            <div className="flex flex-wrap justify-center gap-2">
                                <button
                                    className={`px-3 py-1 rounded-full text-sm ${activeFilter === null
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                                        } transition-colors`}
                                    onClick={() => setActiveFilter(null)}
                                >
                                    All
                                </button>
                                {allTags.map((tag) => (
                                    <button
                                        key={tag}
                                        className={`px-3 py-1 rounded-full text-sm ${activeFilter === tag
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                                            } transition-colors`}
                                        onClick={() => setActiveFilter(tag)}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-white text-center">
                            Showing {filteredProjects.length} of {projectsData.length} projects
                            {activeFilter && <span> filtered by <strong>{activeFilter}</strong></span>}
                        </p>
                    </div>

                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.slug}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center top'
                                            }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 3).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 text-xs rounded-full cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveFilter(tag);
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                                                    +{project.tags.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-4 items-center flex">
                                            <button
                                                onClick={() => handleProjectClick(project.slug)}
                                                className="w-fit bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
                                            >
                                                View Full Details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16">
                            <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
                                No projects found matching your criteria
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setActiveFilter(null);
                                }}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}