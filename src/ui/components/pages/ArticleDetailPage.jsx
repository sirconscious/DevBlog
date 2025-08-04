import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowLeft,
  Heart,
  Eye,
  MessageSquare,
  Share2,
  Bookmark,
  Clock,
  User,
  Building,
  Calendar,
  Tag,
  Star,
  Flame,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  Copy,
  Check,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  Mail,
  MoreHorizontal,
  Edit3,
  Trash2,
  Flag,
  BookOpen,
  Code,
  Zap,
  TrendingUp,
  Users,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const ArticleDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  // Mock article data - in real app this would come from API
  const mockArticle = {
    id: id || "1",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn how to create robust, scalable APIs using Node.js, Express, and best practices for production deployment.",
    content: `# Building Scalable APIs with Node.js and Express

## Introduction

In today's digital landscape, building scalable APIs is crucial for any application that needs to handle growing user demands. Node.js with Express provides an excellent foundation for creating robust, scalable APIs that can serve millions of requests efficiently.

## Why Node.js for APIs?

Node.js offers several advantages for API development:

- **Non-blocking I/O**: Handles multiple concurrent requests efficiently
- **Fast execution**: V8 engine provides excellent performance
- **Rich ecosystem**: NPM offers countless packages for any need
- **JavaScript everywhere**: Same language for frontend and backend

## Setting Up Your Project

### 1. Initialize the Project

\`\`\`bash
mkdir scalable-api
cd scalable-api
npm init -y
npm install express cors helmet morgan dotenv
npm install --save-dev nodemon
\`\`\`

### 2. Basic Express Server

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Architecture Best Practices

### 1. Route Organization

Organize your routes in separate files for better maintainability:

\`\`\`javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
\`\`\`

### 2. Middleware for Authentication

\`\`\`javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
\`\`\`

## Error Handling

Implement comprehensive error handling:

\`\`\`javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.message
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      error: 'Unauthorized'
    });
  }

  res.status(500).json({
    error: 'Internal Server Error'
  });
};

module.exports = errorHandler;
\`\`\`

## Performance Optimization

### 1. Caching

Implement Redis for caching:

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

const cacheMiddleware = (duration) => {
  return async (req, res, next) => {
    const key = \`cache:\${req.originalUrl}\`;
    
    try {
      const cached = await client.get(key);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
      
      res.originalJson = res.json;
      res.json = (body) => {
        client.setex(key, duration, JSON.stringify(body));
        res.originalJson(body);
      };
      next();
    } catch (error) {
      next();
    }
  };
};
\`\`\`

### 2. Rate Limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
\`\`\`

## Database Integration

### MongoDB with Mongoose

\`\`\`javascript
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
\`\`\`

## Testing Your API

### Unit Tests with Jest

\`\`\`javascript
// tests/user.test.js
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  test('GET /api/users should return users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });
});
\`\`\`

## Deployment Considerations

### 1. Environment Variables

\`\`\`bash
# .env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key
REDIS_URL=redis://localhost:6379
\`\`\`

### 2. PM2 for Process Management

\`\`\`bash
npm install -g pm2
pm2 start app.js --name "api-server"
pm2 startup
pm2 save
\`\`\`

## Monitoring and Logging

### Winston for Logging

\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
\`\`\`

## Conclusion

Building scalable APIs with Node.js and Express requires careful consideration of architecture, performance, security, and maintainability. By following these best practices, you can create APIs that scale efficiently and provide excellent user experiences.

Remember to:
- Always validate input data
- Implement proper error handling
- Use caching strategies
- Monitor your application performance
- Write comprehensive tests
- Document your API endpoints

Happy coding! 🚀

---

*This article was written by Sarah Chen, Senior Backend Engineer at Meta. Follow her on [Twitter](https://twitter.com/sarahchen) for more backend development tips.*`,
    author: {
      name: "Sarah Chen",
      avatar: "SC",
      company: "Meta",
      role: "Senior Backend Engineer",
      bio: "Passionate about building scalable systems and mentoring developers. 10+ years of experience in backend development.",
      twitter: "@sarahchen",
      github: "sarahchen",
      linkedin: "sarahchen"
    },
    category: "Backend",
    difficulty: "Intermediate",
    readTime: "12 min read",
    publishedAt: "2024-08-10",
    updatedAt: "2024-08-12",
    views: 15420,
    likes: 892,
    comments: 156,
    tags: ["Node.js", "Express", "API", "Backend", "JavaScript", "Performance"],
    featured: true,
    trending: true,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    relatedArticles: [
      {
        id: "2",
        title: "React Performance: The Complete Guide to Optimization",
        author: "Alex Kumar",
        readTime: "18 min read",
        views: 23100,
        coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
      },
      {
        id: "5",
        title: "Docker and Kubernetes: A Complete DevOps Guide",
        author: "Lisa Zhang",
        readTime: "25 min read",
        views: 12980,
        coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=200&fit=crop"
      }
    ]
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setArticle(mockArticle)
      setLoading(false)
    }, 1000)
  }, [id])

  const handleLike = () => {
    setLiked(!liked)
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  const handleShare = async (platform) => {
    const url = window.location.href
    const text = `${article.title} by ${article.author.name}`
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`
    }

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank')
    }
    setShowShareMenu(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  // Mock markdown parser (replace with your actual parser)
  const parseMarkdown = (markdown) => {
    return markdown
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="inline-code">$1</code>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-3 mt-6">$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-bold mb-2 mt-4">$1</h4>')
      .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 py-2 my-4 bg-muted/30 italic">$1</blockquote>')
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-muted/50 p-4 rounded-lg overflow-x-auto my-4"><code class="language-$1">$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-muted/50 px-1 py-0.5 rounded text-sm">$1</code>')
      .replace(/\n/g, '<br>')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted/50 rounded w-1/3" />
            <div className="h-64 bg-muted/50 rounded" />
            <div className="space-y-4">
              <div className="h-4 bg-muted/50 rounded" />
              <div className="h-4 bg-muted/50 rounded w-3/4" />
              <div className="h-4 bg-muted/50 rounded w-1/2" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="text-center p-8">
          <CardContent>
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Article not found</h2>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/articles')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))] dark:bg-grid-slate-700/10" />
      
      <div className="relative z-10">
        
        {/* Header */}
        <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => navigate('/articles')}
                className="hover:bg-accent hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Articles
              </Button>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLike}
                  className={`hover:bg-accent hover:scale-105 transition-all duration-300 ${
                    liked ? 'text-red-500' : ''
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleBookmark}
                  className={`hover:bg-accent hover:scale-105 transition-all duration-300 ${
                    bookmarked ? 'text-yellow-500' : ''
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                </Button>
                
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="hover:bg-accent hover:scale-105 transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  
                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-card/95 backdrop-blur border border-border/50 rounded-lg shadow-lg p-2 z-50">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => handleShare('twitter')}
                      >
                        <Twitter className="w-4 h-4 mr-2" />
                        Share on Twitter
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => handleShare('linkedin')}
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Share on LinkedIn
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => handleShare('facebook')}
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        Share on Facebook
                      </Button>
                      <Separator className="my-2" />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={copyToClipboard}
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 mr-2 text-green-500" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Link
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Article Header */}
            <div className="mb-8">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link to="/articles" className="hover:text-primary transition-colors">
                  Articles
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span>{article.category}</span>
              </div>
              
              {/* Title and Meta */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
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
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                    {article.title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
                
                {/* Author Info */}
                <Card className="bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {article.author.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg text-foreground">
                            {article.author.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {article.author.role}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          {article.author.company}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {article.author.bio}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(article.publishedAt)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {formatNumber(article.views)} views
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Article Content */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-8">
                    {/* Cover Image */}
                    <div className="mb-8">
                      <img 
                        src={article.coverImage} 
                        alt={article.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Markdown Content */}
                    <div 
                      className="prose prose-slate dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ 
                        __html: parseMarkdown(article.content) 
                      }}
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.7'
                      }}
                    />
                    
                    {/* Article Footer */}
                    <div className="mt-12 pt-8 border-t border-border/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <Button
                            variant="ghost"
                            onClick={handleLike}
                            className={`flex items-center gap-2 ${
                              liked ? 'text-red-500' : ''
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                            <span>{formatNumber(article.likes + (liked ? 1 : 0))}</span>
                          </Button>
                          
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-muted-foreground" />
                            <span className="text-muted-foreground">{formatNumber(article.comments)}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <ThumbsUp className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <ThumbsDown className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Tags */}
                <Card className="bg-card/50 backdrop-blur border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Author Social */}
                <Card className="bg-card/50 backdrop-blur border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Follow Author</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Twitter className="w-4 h-4 mr-2" />
                        @{article.author.twitter}
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Github className="w-4 h-4 mr-2" />
                        {article.author.github}
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Linkedin className="w-4 h-4 mr-2" />
                        {article.author.linkedin}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card className="bg-card/50 backdrop-blur border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {article.relatedArticles.map((related, index) => (
                        <Link 
                          key={index} 
                          to={`/article/${related.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={related.coverImage} 
                              alt={related.title}
                              className="w-16 h-12 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {related.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {related.author} • {related.readTime}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {formatNumber(related.views)} views
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest articles and insights delivered to your inbox.
                    </p>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Subscribe to Newsletter
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetailPage 