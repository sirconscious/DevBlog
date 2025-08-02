import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // or any highlight.js theme

export default function MarkdownViewer({ markdownText }) {
  return (
    <ReactMarkdown
      children={markdownText}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
    />
  );
}
