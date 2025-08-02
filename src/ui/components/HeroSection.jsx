import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input" 
import Footer from './Footer'
import { 
  ArrowRight, 
  Code, 
  Users, 
  Star, 
  Terminal,
  GitBranch,
  Coffee,
  Zap,
  BookOpen,
  MessageSquare,
  Heart,
  Eye,
  Calendar,
  Rocket,
  Lightbulb,
  Share2
} from 'lucide-react'

const HeroSection = () => {
  const [email, setEmail] = useState('')
  const [currentTech, setCurrentTech] = useState(0)
  
  const techStack = ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Vue.js', 'Go', 'Rust']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const featuredArticles = [
    {
      title: "Building Scalable APIs with Node.js",
      author: "Sarah Chen",
      role: "Senior Backend Engineer",
      company: "Meta",
      readTime: "8 min read",
      views: "15.2k",
      likes: "892",
      tags: ["Node.js", "API", "Backend"],
      publishedAt: "2 days ago"
    },
    {
      title: "React Performance: The Complete Guide",
      author: "Alex Kumar", 
      role: "Frontend Architect",
      company: "Vercel",
      readTime: "12 min read",
      views: "23.1k", 
      likes: "1.4k",
      tags: ["React", "Performance", "JavaScript"],
      publishedAt: "1 week ago"
    },
    {
      title: "From Junior to Senior: My 5-Year Journey",
      author: "Maya Rodriguez",
      role: "Senior Full Stack Developer", 
      company: "Stripe",
      readTime: "6 min read",
      views: "31.8k",
      likes: "2.1k", 
      tags: ["Career", "Growth", "Tips"],
      publishedAt: "3 days ago"
    }
  ]

  const communityStats = [
    { label: "Active Developers", value: "25K+", icon: Users, color: "text-blue-500" },
    { label: "Articles Published", value: "12K+", icon: BookOpen, color: "text-green-500" },
    { label: "Code Snippets Shared", value: "45K+", icon: Code, color: "text-purple-500" },
    { label: "Developer Hours Saved", value: "100K+", icon: Coffee, color: "text-orange-500" }
  ]

  const popularTopics = [
    { name: "JavaScript", count: "2.4k articles", color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" },
    { name: "React", count: "1.8k articles", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
    { name: "Python", count: "1.5k articles", color: "bg-green-500/10 text-green-600 border-green-500/20" },
    { name: "DevOps", count: "987 articles", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
    { name: "AI/ML", count: "756 articles", color: "bg-pink-500/10 text-pink-600 border-pink-500/20" },
    { name: "Web3", count: "654 articles", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" }
  ]

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      
      {/* Code-style background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 opacity-20 text-muted-foreground font-mono text-sm rotate-12">
        {/* {"const dev = { learning: true }"} */}
      </div>
      <div className="absolute top-40 right-20 opacity-20 text-muted-foreground font-mono text-sm -rotate-12">
        {'// TODO: Share knowledge'}
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 text-muted-foreground font-mono text-sm rotate-6">
        npm install inspiration
      </div>

      <div className="relative z-10">
        
        {/* Main Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            
            {/* Developer Badge */}
            <div className="flex justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300">
                <Terminal className="w-4 h-4 mr-2" />
                Built by developers, for developers
              </Badge>
            </div>
            
            {/* Main Headlines */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-foreground">Share Your</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Code Stories
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed space-y-2">
                <p>The ultimate platform where developers share knowledge, tutorials, and insights.</p>
                <div className="flex items-center justify-center gap-2 font-mono text-lg">
                  <span>Write about</span>
                  <span className="text-primary font-bold min-w-[120px] text-left">
                    {techStack[currentTech]}
                  </span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col items-center space-y-6">
              
              {/* Main Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 group transition-all duration-300 hover:scale-105 text-lg"
                >
                  <Rocket className="mr-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
                  Start Writing
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 border-border bg-background/50 backdrop-blur hover:bg-accent hover:scale-105 transition-all duration-300 group text-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Browse Articles
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-blue-500 border border-background" />
                    ))}
                  </div>
                  <span>25K+ developers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>4.9/5 community rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground mb-6">Popular topics our community writes about:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularTopics.map((topic, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className={`px-4 py-2 text-sm cursor-pointer hover:scale-105 transition-all duration-300 ${topic.color}`}
                >
                  {topic.name}
                  <span className="ml-2 text-xs opacity-70">{topic.count}</span>
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trending in Dev Community
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover the latest insights from fellow developers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 cursor-pointer overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.publishedAt}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-500" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{article.author}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {article.role} at {article.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Coffee className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {article.likes}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="bg-muted/30 backdrop-blur py-16 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Powering Developer Growth
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join thousands of developers sharing knowledge and building careers
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {communityStats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background/50 backdrop-blur border border-border/50 mb-4 group-hover:border-primary/50 transition-all duration-300">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Developer CTA */}

      </div>
        {/* Footer */} 
        <Footer />
    </div>
  )
}

export default HeroSection