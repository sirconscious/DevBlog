import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Search,
  Filter,
  BookOpen,
  Heart,
  Eye,
  MessageSquare,
  Clock,
  User,
  Building,
  Tag,
  TrendingUp,
  Star,
  Bookmark,
  Share2,
  ArrowRight,
  Calendar,
  Code,
  Zap,
  Flame,
  Crown,
  Book,
  FileText,
  Video,
  Mic,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Grid3X3,
  List,
  SortAsc,
  SortDesc
} from 'lucide-react'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedTimeRange, setSelectedTimeRange] = useState('all')
  const [sortBy, setSortBy] = useState('latest')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(false)

  // Fake articles data
  const fakeArticles = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to create robust, scalable APIs using Node.js, Express, and best practices for production deployment.",
      author: {
        name: "Sarah Chen",
        avatar: "SC",
        company: "Meta",
        role: "Senior Backend Engineer"
      },
      category: "Backend",
      difficulty: "Intermediate",
      readTime: "12 min read",
      publishedAt: "2024-08-10",
      views: 15420,
      likes: 892,
      comments: 156,
      tags: ["Node.js", "Express", "API", "Backend"],
      featured: true,
      trending: true,
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "React Performance: The Complete Guide to Optimization",
      excerpt: "Master React performance optimization techniques including memoization, code splitting, and bundle optimization.",
      author: {
        name: "Alex Kumar",
        avatar: "AK",
        company: "Vercel",
        role: "Frontend Architect"
      },
      category: "Frontend",
      difficulty: "Advanced",
      readTime: "18 min read",
      publishedAt: "2024-08-09",
      views: 23100,
      likes: 1400,
      comments: 234,
      tags: ["React", "Performance", "JavaScript", "Frontend"],
      featured: true,
      trending: true,
      coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "From Junior to Senior: My 5-Year Developer Journey",
      excerpt: "A personal account of growth, challenges, and lessons learned while advancing from junior to senior developer.",
      author: {
        name: "Maya Rodriguez",
        avatar: "MR",
        company: "Stripe",
        role: "Senior Full Stack Developer"
      },
      category: "Career",
      difficulty: "Beginner",
      readTime: "8 min read",
      publishedAt: "2024-08-08",
      views: 31800,
      likes: 2100,
      comments: 445,
      tags: ["Career", "Growth", "Tips", "Experience"],
      featured: false,
      trending: true,
      coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt: "Essential TypeScript patterns and practices for building maintainable, scalable applications.",
      author: {
        name: "David Park",
        avatar: "DP",
        company: "Microsoft",
        role: "TypeScript Developer Advocate"
      },
      category: "TypeScript",
      difficulty: "Intermediate",
      readTime: "15 min read",
      publishedAt: "2024-08-07",
      views: 18750,
      likes: 1100,
      comments: 189,
      tags: ["TypeScript", "Best Practices", "Large Scale"],
      featured: false,
      trending: false,
      coverImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Docker and Kubernetes: A Complete DevOps Guide",
      excerpt: "Comprehensive guide to containerization and orchestration for modern application deployment.",
      author: {
        name: "Lisa Zhang",
        avatar: "LZ",
        company: "Google",
        role: "DevOps Engineer"
      },
      category: "DevOps",
      difficulty: "Advanced",
      readTime: "25 min read",
      publishedAt: "2024-08-06",
      views: 12980,
      likes: 756,
      comments: 123,
      tags: ["Docker", "Kubernetes", "DevOps", "Containers"],
      featured: true,
      trending: false,
      coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Building Real-time Chat Applications with WebSockets",
      excerpt: "Step-by-step guide to creating real-time chat applications using WebSockets and Node.js.",
      author: {
        name: "Michael Brown",
        avatar: "MB",
        company: "Netflix",
        role: "Senior Software Engineer"
      },
      category: "Real-time",
      difficulty: "Intermediate",
      readTime: "14 min read",
      publishedAt: "2024-08-05",
      views: 16200,
      likes: 945,
      comments: 167,
      tags: ["WebSockets", "Real-time", "Chat", "Node.js"],
      featured: false,
      trending: true,
      coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop"
    },
    {
      id: 7,
      title: "Machine Learning for Web Developers",
      excerpt: "Introduction to ML concepts and how to integrate them into web applications.",
      author: {
        name: "Jennifer Wu",
        avatar: "JW",
        company: "OpenAI",
        role: "ML Engineer"
      },
      category: "AI/ML",
      difficulty: "Advanced",
      readTime: "20 min read",
      publishedAt: "2024-08-04",
      views: 9800,
      likes: 623,
      comments: 89,
      tags: ["Machine Learning", "AI", "Web Development"],
      featured: false,
      trending: false,
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
    },
    {
      id: 8,
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt: "Comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases.",
      author: {
        name: "Robert Taylor",
        avatar: "RT",
        company: "Adobe",
        role: "Frontend Developer"
      },
      category: "CSS",
      difficulty: "Beginner",
      readTime: "10 min read",
      publishedAt: "2024-08-03",
      views: 22100,
      likes: 1200,
      comments: 234,
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      featured: false,
      trending: true,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
    },
    {
      id: 9,
      title: "Database Design Patterns for Scalable Applications",
      excerpt: "Essential database design patterns and strategies for building scalable applications.",
      author: {
        name: "Nina Patel",
        avatar: "NP",
        company: "Amazon",
        role: "Database Architect"
      },
      category: "Database",
      difficulty: "Advanced",
      readTime: "22 min read",
      publishedAt: "2024-08-02",
      views: 11500,
      likes: 678,
      comments: 145,
      tags: ["Database", "Design Patterns", "Scalability"],
      featured: true,
      trending: false,
      coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop"
    },
    {
      id: 10,
      title: "Getting Started with Next.js 14",
      excerpt: "Complete beginner's guide to building modern web applications with Next.js 14.",
      author: {
        name: "Carlos Rodriguez",
        avatar: "CR",
        company: "Vercel",
        role: "Next.js Developer Advocate"
      },
      category: "Next.js",
      difficulty: "Beginner",
      readTime: "12 min read",
      publishedAt: "2024-08-01",
      views: 28900,
      likes: 1800,
      comments: 312,
      tags: ["Next.js", "React", "Full Stack", "Beginner"],
      featured: true,
      trending: true,
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'devops', label: 'DevOps' },
    { value: 'ai/ml', label: 'AI/ML' },
    { value: 'career', label: 'Career' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'css', label: 'CSS' },
    { value: 'database', label: 'Database' },
    { value: 'next.js', label: 'Next.js' },
    { value: 'real-time', label: 'Real-time' }
  ]

  const difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ]

  const timeRanges = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' }
  ]

  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' },
    { value: 'views', label: 'Most Views' },
    { value: 'likes', label: 'Most Liked' }
  ]

  useEffect(() => {
    setArticles(fakeArticles)
    setFilteredArticles(fakeArticles)
  }, [])

  useEffect(() => {
    filterArticles()
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTimeRange, sortBy, articles])

  const filterArticles = () => {
    let filtered = [...articles]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article =>
        article.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(article =>
        article.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
      )
    }

    // Time range filter
    if (selectedTimeRange !== 'all') {
      const now = new Date()
      const articleDate = new Date()
      
      filtered = filtered.filter(article => {
        const publishedDate = new Date(article.publishedAt)
        
        switch (selectedTimeRange) {
          case 'today':
            return publishedDate.toDateString() === now.toDateString()
          case 'week':
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
            return publishedDate >= weekAgo
          case 'month':
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
            return publishedDate >= monthAgo
          case 'year':
            const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)
            return publishedDate >= yearAgo
          default:
            return true
        }
      })
    }

    // Sort articles
    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        break
      case 'popular':
        filtered.sort((a, b) => b.views - a.views)
        break
      case 'trending':
        filtered.sort((a, b) => {
          if (a.trending && !b.trending) return -1
          if (!a.trending && b.trending) return 1
          return b.views - a.views
        })
        break
      case 'views':
        filtered.sort((a, b) => b.views - a.views)
        break
      case 'likes':
        filtered.sort((a, b) => b.likes - a.likes)
        break
      default:
        break
    }

    setFilteredArticles(filtered)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  const ArticleCard = ({ article }) => (
    <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.coverImage} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {article.featured && (
              <Badge variant="secondary" className="bg-yellow-500/90 text-white border-0 text-xs">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
            {article.trending && (
              <Badge variant="secondary" className="bg-red-500/90 text-white border-0 text-xs">
                <Flame className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            )}
          </div>
          
          {/* Difficulty Badge */}
          <div className="absolute top-3 right-3">
            <Badge 
              variant="secondary" 
              className={`text-xs ${
                article.difficulty === 'Beginner' ? 'bg-green-500/90 text-white border-0' :
                article.difficulty === 'Intermediate' ? 'bg-yellow-500/90 text-white border-0' :
                'bg-red-500/90 text-white border-0'
              }`}
            >
              {article.difficulty}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          {/* Category */}
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs">
              {article.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </div>
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {article.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
            {article.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{article.tags.length - 3} more
              </Badge>
            )}
          </div>
          
          {/* Author */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold text-sm">
              {article.author.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-foreground truncate">
                {article.author.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {article.author.role} at {article.author.company}
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {formatNumber(article.views)}
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {formatNumber(article.likes)}
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {formatNumber(article.comments)}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:scale-105 transition-all duration-300">
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:scale-105 transition-all duration-300">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Published Date */}
          <div className="mt-3 pt-3 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              Published {formatDate(article.publishedAt)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const ArticleListItem = ({ article }) => (
    <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 cursor-pointer">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Cover Image */}
          <div className="flex-shrink-0">
            <img 
              src={article.coverImage} 
              alt={article.title}
              className="w-32 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      article.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
                      article.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' :
                      'bg-red-500/10 text-red-600 border-red-500/20'
                    }`}
                  >
                    {article.difficulty}
                  </Badge>
                  {article.featured && (
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20 text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {article.trending && (
                    <Badge variant="secondary" className="bg-red-500/10 text-red-600 border-red-500/20 text-xs">
                      <Flame className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold text-xs">
                    {article.author.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">
                      {article.author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {article.author.role} at {article.author.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {formatNumber(article.views)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {formatNumber(article.likes)}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {formatNumber(article.comments)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:scale-105 transition-all duration-300">
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:scale-105 transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:scale-105 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 opacity-20 text-muted-foreground font-mono text-sm rotate-12 hidden lg:block">
        {'// Discover amazing articles'}
      </div>
      <div className="absolute top-40 right-20 opacity-20 text-muted-foreground font-mono text-sm -rotate-12 hidden lg:block">
        {'const knowledge = "power";'}
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 text-muted-foreground font-mono text-sm rotate-6 hidden lg:block">
        npm install wisdom
      </div>

      <div className="relative z-10">
        
        {/* Header Section */}
        <section className="container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20">
              <div className="absolute inset-0 bg-grid-white/5" />
              
              <CardContent className="relative p-8 md:p-12">
                <div className="text-center space-y-8">
                  
                  {/* Badge */}
                  <div className="flex justify-center">
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      {filteredArticles.length} articles available
                    </Badge>
                  </div>
                  
                  {/* Main Headlines */}
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      <span className="text-foreground">Discover</span>
                      <br />
                      <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Amazing Articles
                      </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      Explore thousands of articles written by developers, for developers. 
                      Learn new skills, discover best practices, and stay updated with the latest trends.
                    </p>
                  </div>
                  
                  {/* Search Bar */}
                  <div className="max-w-2xl mx-auto">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Search articles, authors, or topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-14 pl-12 pr-4 text-lg bg-background/50 backdrop-blur border-border/50 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="container mx-auto px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  
                  {/* Left Side - Filters */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4">
                      
                      {/* Category Filter */}
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      {/* Difficulty Filter */}
                      <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          {difficulties.map((difficulty) => (
                            <SelectItem key={difficulty.value} value={difficulty.value}>
                              {difficulty.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      {/* Time Range Filter */}
                      <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Time Range" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeRanges.map((timeRange) => (
                            <SelectItem key={timeRange.value} value={timeRange.value}>
                              {timeRange.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      {/* Advanced Filters Toggle */}
                      <Button
                        variant="outline"
                        onClick={() => setShowFilters(!showFilters)}
                        className="hover:bg-accent hover:scale-105 transition-all duration-300"
                      >
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                        {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Right Side - Sort and View */}
                  <div className="flex items-center gap-4">
                    
                    {/* Sort */}
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {/* View Mode */}
                    <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-lg backdrop-blur border border-border/50">
                      <Button
                        variant={viewMode === 'grid' ? "default" : "ghost"}
                        size="icon"
                        onClick={() => setViewMode('grid')}
                        className={`h-8 w-8 transition-all duration-300 ${
                          viewMode === 'grid' 
                            ? 'bg-primary text-primary-foreground shadow-sm' 
                            : 'hover:bg-accent hover:scale-105'
                        }`}
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? "default" : "ghost"}
                        size="icon"
                        onClick={() => setViewMode('list')}
                        className={`h-8 w-8 transition-all duration-300 ${
                          viewMode === 'list' 
                            ? 'bg-primary text-primary-foreground shadow-sm' 
                            : 'hover:bg-accent hover:scale-105'
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Advanced Filters */}
                {showFilters && (
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Featured Only</label>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Star className="w-4 h-4 mr-2" />
                          Featured Articles
                        </Button>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Trending</label>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Trending Only
                        </Button>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Read Time</label>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Clock className="w-4 h-4 mr-2" />
                          Quick Reads
                        </Button>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Content Type</label>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <FileText className="w-4 h-4 mr-2" />
                          All Types
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Articles Grid/List */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {filteredArticles.length} Articles Found
                </h2>
                <p className="text-muted-foreground">
                  {searchQuery && `Searching for "${searchQuery}"`}
                  {selectedCategory !== 'all' && ` • Category: ${categories.find(c => c.value === selectedCategory)?.label}`}
                  {selectedDifficulty !== 'all' && ` • Difficulty: ${difficulties.find(d => d.value === selectedDifficulty)?.label}`}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span>Showing {filteredArticles.length} of {articles.length} articles</span>
              </div>
            </div>
            
            {/* Articles Display */}
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-48 bg-muted/50" />
                    <CardContent className="p-6">
                      <div className="h-4 bg-muted/50 rounded mb-2" />
                      <div className="h-4 bg-muted/50 rounded mb-4 w-3/4" />
                      <div className="h-3 bg-muted/50 rounded mb-2" />
                      <div className="h-3 bg-muted/50 rounded w-2/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredArticles.length > 0 ? (
              viewMode === 'grid' ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredArticles.map((article) => (
                    <ArticleListItem key={article.id} article={article} />
                  ))}
                </div>
              )
            ) : (
              <Card className="text-center py-16">
                <CardContent>
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('all')
                      setSelectedDifficulty('all')
                      setSelectedTimeRange('all')
                    }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
            
            {/* Load More */}
            {filteredArticles.length > 0 && (
              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:bg-accent hover:scale-105 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ArticlesPage 