"use client";

import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import * as nodeEmoji from 'node-emoji';

type MarkdownRendererProps = {
    markdown: string;
    className?: string;
};

// Replace common emoji codes manually in case the automatic replacement isn't working
const manualEmojiReplacements: Record<string, string> = {
    ':trophy:': '🏆',
    ':sparkles:': '✨',
    ':rocket:': '🚀',
    ':star:': '⭐',
    ':wrench:': '🔧',
    ':gear:': '⚙️',
    ':hammer:': '🔨',
    ':tada:': '🎉',
    ':bulb:': '💡',
    ':chart_with_upwards_trend:': '📈',
    ':information_source:': 'ℹ️',
    ':warning:': '⚠️',
    ':clipboard:': '📋',
    ':memo:': '📝',
    ':question:': '❓',
    ':exclamation:': '❗',
    ':ice_hockey': '🏒',
};

const replaceEmojis = (text: string): string => {
    let result = nodeEmoji.emojify(text);

    Object.entries(manualEmojiReplacements).forEach(([code, emoji]) => {
        result = result.replace(new RegExp(code, 'g'), emoji);
    });

    return result;
};

export default function MarkdownRenderer({ markdown, className = "" }: MarkdownRendererProps) {
    // Process emojis only once with useMemo for performance
    const processedMarkdown = useMemo(() => {
        return replaceEmojis(markdown || '');
    }, [markdown]);

    return (
        <div className={`markdown-body ${className} prose dark:prose-invert max-w-none`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');

                        return match ? (
                            <SyntaxHighlighter
                                // @ts-ignore - TypeScript has issues with the style prop type
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-md"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={`${className} bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`} {...props}>
                                {children}
                            </code>
                        );
                    },
                    a({ node, className, children, ...props }) {
                        return (
                            <a
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                                {...props}
                            >
                                {children}
                            </a>
                        );
                    },
                    img({ node, className, ...props }) {
                        return (
                            <img
                                className="rounded-lg max-w-full my-4"
                                {...props}
                            />
                        );
                    },
                    ul({ node, className, children, ...props }) {
                        return (
                            <ul className="list-disc pl-6 my-4 space-y-2" {...props}>
                                {children}
                            </ul>
                        );
                    },
                    ol({ node, className, children, ...props }) {
                        return (
                            <ol className="list-decimal pl-6 my-4 space-y-2" {...props}>
                                {children}
                            </ol>
                        );
                    },
                    li({ node, className, children, ...props }) {
                        return (
                            <li className="ml-2" {...props}>
                                {children}
                            </li>
                        );
                    }
                }}
            >
                {processedMarkdown}
            </ReactMarkdown>
        </div>
    );
}