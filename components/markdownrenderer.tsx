"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

type MarkdownRendererProps = {
    markdown: string;
    className?: string;
};

export default function MarkdownRenderer({ markdown, className = "" }: MarkdownRendererProps) {
    return (
        <div className={`markdown-body ${className} prose dark:prose-invert max-w-none`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');

                        return match ? (
                            <SyntaxHighlighter
                                // @ts-ignore Type issues with react-syntax-highlighter styles
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    );
}