import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "./ThemeTogle"; // Assuming you have a ThemeToggle component
import { 
  Eye, 
  Edit3, 
  Code, 
  Bold, 
  Italic, 
  Link2, 
  List, 
  ListOrdered, 
  Quote, 
  Image, 
  Terminal,
  Save,
  Download,
  Upload,
  Maximize2,
  Minimize2,
  Copy,
  Check
} from 'lucide-react';

// Mock markdown parser (replace with your actual parser)
const parseMarkdown = (markdown) => {
  return markdown
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="inline-code">$1</code>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\n/g, '<br>');
};

const MarkdownViewer = ({ markdownText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="h-full bg-card/50 backdrop-blur border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-primary" />
            <CardTitle className="text-lg">Preview</CardTitle>
            <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
              Live
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-8 w-8 hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div 
          className="prose prose-slate dark:prose-invert max-w-none min-h-[400px] p-4 rounded-lg bg-background/30 border border-border/30"
          dangerouslySetInnerHTML={{ 
            __html: parseMarkdown(markdownText) || '<p class="text-muted-foreground">Start writing to see preview...</p>' 
          }}
          style={{
            fontSize: '14px',
            lineHeight: '1.6'
          }}
        />
      </CardContent>
    </Card>
  );
};

const MarkdownEditor = () => {
  const [value, setValue] = useState(`# Welcome to DevStories Editor

Start writing your **developer story** here! 

## Features
- Live preview
- Syntax highlighting
- Developer-focused design
- Code block support

\`\`\`javascript
const article = {
  title: "My Developer Journey",
  author: "You",
  awesome: true
};
\`\`\`

> Share your knowledge with the community!

Happy coding! 🚀`);
  
  const [selectedTab, setSelectedTab] = useState("write");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const insertText = (before, after = '', placeholder = '') => {
    const textarea = document.getElementById('markdown-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end) || placeholder;
    const newText = textarea.value.substring(0, start) + before + selectedText + after + textarea.value.substring(end);
    setValue(newText);
    
    // Focus and set cursor position
    setTimeout(() => {
      textarea.focus();
      const newPos = start + before.length + selectedText.length + after.length;
      textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const toolbarActions = [
    { icon: Bold, action: () => insertText('**', '**', 'bold text'), tooltip: 'Bold' },
    { icon: Italic, action: () => insertText('*', '*', 'italic text'), tooltip: 'Italic' },
    { icon: Code, action: () => insertText('`', '`', 'code'), tooltip: 'Inline Code' },
    { icon: Link2, action: () => insertText('[', '](url)', 'link text'), tooltip: 'Link' },
    { icon: List, action: () => insertText('- ', '', 'list item'), tooltip: 'Bullet List' },
    { icon: ListOrdered, action: () => insertText('1. ', '', 'list item'), tooltip: 'Numbered List' },
    { icon: Quote, action: () => insertText('> ', '', 'quote'), tooltip: 'Quote' },
    { icon: Image, action: () => insertText('![', '](image-url)', 'alt text'), tooltip: 'Image' },
  ];

  return (
    <div className={`relative bg-background ${isFullscreen ? 'fixed inset-0 z-50 p-4' : ''}`}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))] dark:bg-grid-slate-700/10" />
      
      <div className="relative z-10 container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 flex items-center justify-center">
                <Edit3 className="text-primary-foreground h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Markdown Editor</h1>
                <p className="text-sm text-muted-foreground font-mono">Write • Preview • Publish</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hover:bg-accent hover:scale-105 transition-all duration-300"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-accent hover:scale-105 transition-all duration-300"
              >
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-accent hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
                <ThemeToggle className="ml-2" />
              <Button
                onClick={handleSave}
                size="sm"
                className={`transition-all duration-300 hover:scale-105 ${
                  saved ? 'bg-green-500 hover:bg-green-600' : 'bg-primary hover:bg-primary/90'
                }`}
              >
                {saved ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-lg backdrop-blur border border-border/50">
            <Button
              variant={selectedTab === "write" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedTab("write")}
              className={`flex-1 transition-all duration-300 ${
                selectedTab === "write" 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'hover:bg-accent'
              }`}
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Write
            </Button>
            <Button
              variant={selectedTab === "preview" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedTab("preview")}
              className={`flex-1 transition-all duration-300 ${
                selectedTab === "preview" 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'hover:bg-accent'
              }`}
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              variant={selectedTab === "split" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedTab("split")}
              className={`flex-1 transition-all duration-300 ${
                selectedTab === "split" 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'hover:bg-accent'
              }`}
            >
              <Terminal className="w-4 h-4 mr-2" />
              Split
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          {selectedTab === "write" && (
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-primary" />
                    <CardTitle className="text-lg">Editor</CardTitle>
                    <Badge variant="secondary" className="text-xs bg-blue-500/10 text-blue-600 border-blue-500/20">
                      Markdown
                    </Badge>
                  </div>
                  
                  {/* Toolbar */}
                  <div className="flex items-center gap-1">
                    {toolbarActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        onClick={action.action}
                        className="h-8 w-8 hover:bg-accent hover:scale-105 transition-all duration-300"
                        title={action.tooltip}
                      >
                        <action.icon className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Textarea
                  id="markdown-editor"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Start writing your markdown here..."
                  className="min-h-[500px] font-mono text-sm bg-background/30 border-border/30 focus:border-primary/50 resize-none transition-all duration-300"
                />
              </CardContent>
            </Card>
          )}

          {selectedTab === "preview" && (
            <MarkdownViewer markdownText={value} />
          )}

          {selectedTab === "split" && (
            <div className="grid lg:grid-cols-2 gap-6 h-full">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-primary" />
                    <CardTitle className="text-lg">Editor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Start writing your markdown here..."
                    className="min-h-[500px] font-mono text-sm bg-background/30 border-border/30 focus:border-primary/50 resize-none transition-all duration-300"
                  />
                </CardContent>
              </Card>
              
              <MarkdownViewer markdownText={value} />
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground bg-muted/30 backdrop-blur rounded-lg px-4 py-2 border border-border/30">
          <div className="flex items-center gap-4">
            <span>Words: {value.split(/\s+/).filter(word => word.length > 0).length}</span>
            <span>Characters: {value.length}</span>
            <span>Lines: {value.split('\n').length}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Auto-save enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;