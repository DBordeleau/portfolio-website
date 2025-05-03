"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaHome } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import MarkdownRenderer from '@/components/markdownrenderer';
import { fetchReadme } from '@/lib/utils';

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();
    const [project, setProject] = useState<typeof projectsData[number] | null>(null);
    const [loading, setLoading] = useState(true);
    const [readme, setReadme] = useState<string>('');
    const [readmeLoading, setReadmeLoading] = useState(false);
    const [readmeError, setReadmeError] = useState<string | null>(null);

    // Fetches readme from GitHub
    useEffect(() => {
        const slug = params.slug as string;
        const foundProject = projectsData.find(p => p.slug === slug);

        if (foundProject) {
            setProject(foundProject);
            setLoading(false);

            if (foundProject.githubLink) {
                setReadmeLoading(true);
                const urlParts = foundProject.githubLink.split('/');
                if (urlParts.length >= 4) {
                    const owner = urlParts[3];
                    const repo = urlParts[4];

                    fetchReadme(owner, repo)
                        .then(content => {
                            setReadme(content);
                            setReadmeLoading(false);
                        })
                        .catch(error => {
                            console.error("Error fetching README:", error);
                            setReadmeError("Failed to load README from GitHub.");
                            setReadmeLoading(false);
                        });
                }
            }
        } else {
            router.push('/#projects');
        }
    }, [params.slug, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!project) return null;

    return (
        <div className="min-h-screen rounded-lg dark:bg-gray-950/20 dark:text-white">
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center mb-8 gap-4">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                            <FaHome className="mr-2" /> Home
                        </Link>

                        <span className="text-gray-400 dark:text-gray-600">|</span>

                        <Link
                            href="/projects"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                            <BsFillGrid3X3GapFill className="mr-2" /> All Projects
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-2">
                            <motion.h1
                                className="text-4xl font-bold mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                {project.title}
                            </motion.h1>

                            <motion.div
                                className="prose dark:prose-invert max-w-none mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p>{project.description}</p>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-2 mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 text-sm rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                                    </a>
                                )}

                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded transition-colors"
                                    >
                                        <FaGithub className="mr-2" /> View Repo
                                    </a>
                                )}
                            </motion.div>
                        </div>

                        <motion.div
                            className="lg:col-span-1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                className="rounded-lg shadow-xl w-full"
                                width={500}
                                height={300}
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                        {project.features && project.features.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="mb-8"
                            >
                                <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">Features</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {project.learningOutcomes && project.learningOutcomes.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="mb-8"
                            >
                                <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">Learning Outcomes</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    {project.learningOutcomes.map((outcome, index) => (
                                        <li key={index}>{outcome}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>

                    {project.githubLink && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="mt-16"
                        >
                            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                                README (from GitHub repo)
                            </h2>

                            {readmeLoading ? (
                                <div className="flex items-center justify-center py-12">
                                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                                </div>
                            ) : readmeError ? (
                                <div className="text-red-500 py-4">
                                    {readmeError}
                                </div>
                            ) : readme ? (
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                                    <MarkdownRenderer markdown={readme} />
                                </div>
                            ) : (
                                <div className="text-gray-500 dark:text-gray-400 py-4">
                                    No README found for this project.
                                </div>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}