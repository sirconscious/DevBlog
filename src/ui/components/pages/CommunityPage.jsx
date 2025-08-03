import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Terminal,
  Users,
  MessageSquare,
  Heart,
  Code,
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  Coffee,
  Rocket,
  Award,
  Globe,
  Github,
  Twitter,
  Linkedin,
  BookOpen,
  Zap,
  Target,
  ArrowRight,
  Search,
  Filter,
  Plus,
  Eye,
  ThumbsUp,
  Share2,
  Clock,
  Trophy,
  Flame,
  Crown,
  Gift,
  Bell,
  Settings,
  ExternalLink,
  ChevronRight,
  Lightbulb,
  Building
} from 'lucide-react'

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [onlineCount, setOnlineCount] = useState(1247)

  const communityStats = [
    { label: "Active Members", value: "25,847", icon: Users, color: "text-blue-500", trend: "+12% this month" },
    { label: "Articles Published", value: "12,453", icon: BookOpen, color: "text-green-500", trend: "+8% this month" },
    { label: "Code Snippets", value: "45,239", icon: Code, color: "text-purple-500", trend: "+15% this month" },
    { label: "Daily Discussions", value: "1,892", icon: MessageSquare, color: "text-orange-500", trend: "+5% this month" }
  ]

  const topContributors = [
    {
      name: "Sarah Chen",
      role: "Senior Backend Engineer",
      company: "Meta",
      articles: 127,
      likes: 15420,
      followers: 2847,
      avatar: "SC",
      specialties: ["Node.js", "GraphQL", "Microservices"],
      badge: "Top Contributor",
      badgeColor: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
    },
    {
      name: "Alex Kumar",
      role: "Frontend Architect", 
      company: "Vercel",
      articles: 89,
      likes: 12308,
      followers: 1932,
      avatar: "AK",
      specialties: ["React", "Next.js", "TypeScript"],
      badge: "React Expert",
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      name: "Maya Rodriguez",
      role: "Full Stack Developer",
      company: "Stripe",
      articles: 76,
      likes: 9876,
      followers: 1654,
      avatar: "MR",
      specialties: ["Python", "Django", "PostgreSQL"],
      badge: "Python Guru",
      badgeColor: "bg-green-500/10 text-green-600 border-green-500/20"
    },
    {
      name: "David Park",
      role: "DevOps Engineer",
      company: "AWS",
      articles: 65,
      likes: 8754,
      followers: 1423,
      avatar: "DP",
      specialties: ["Docker", "Kubernetes", "AWS"],
      badge: "DevOps Master",
      badgeColor: "bg-orange-500/10 text-orange-600 border-orange-500/20"
    }
  ]

  const trendingTopics = [
    { name: "React Server Components", posts: 342, trend: "+25%", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
    { name: "AI/ML Integration", posts: 289, trend: "+40%", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
    { name: "TypeScript Best Practices", posts: 256, trend: "+15%", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" },
    { name: "Web3 Development", posts: 234, trend: "+30%", color: "bg-green-500/10 text-green-600 border-green-500/20" },
    { name: "Performance Optimization", posts: 198, trend: "+12%", color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" },
    { name: "Mobile Development", posts: 187, trend: "+8%", color: "bg-pink-500/10 text-pink-600 border-pink-500/20" }
  ]

  const recentDiscussions = [
    {
      title: "Best practices for handling async operations in React",
      author: "Jennifer Wu",
      avatar: "JW",
      company: "Google",
      timeAgo: "2 hours ago",
      replies: 23,
      likes: 45,
      tags: ["React", "Async", "JavaScript"],
      category: "Discussion"
    },
    {
      title: "How to implement real-time features with WebSockets",
      author: "Michael Brown",
      avatar: "MB", 
      company: "Microsoft",
      timeAgo: "4 hours ago",
      replies: 31,
      likes: 67,
      tags: ["WebSockets", "Real-time", "Node.js"],
      category: "Tutorial"
    },
    {
      title: "Debugging memory leaks in large Node.js applications",
      author: "Lisa Zhang",
      avatar: "LZ",
      company: "Netflix",
      timeAgo: "6 hours ago",
      replies: 18,
      likes: 52,
      tags: ["Node.js", "Debugging", "Performance"],
      category: "Help"
    },
    {
      title: "Building scalable microservices with Docker and Kubernetes",
      author: "Robert Taylor",
      avatar: "RT",
      company: "Uber",
      timeAgo: "8 hours ago",
      replies: 41,
      likes: 89,
      tags: ["Docker", "Kubernetes", "Microservices"],
      category: "Guide"
    }
  ]

  const upcomingEvents = [
    {
      title: "React Performance Deep Dive",
      type: "Workshop",
      date: "Aug 15, 2024",
      time: "2:00 PM PST",
      attendees: 147,
      host: "Sarah Chen",
      description: "Learn advanced techniques for optimizing React applications"
    },
    {
      title: "Open Source Contribution Session",
      type: "Meetup",
      date: "Aug 18, 2024", 
      time: "10:00 AM PST",
      attendees: 89,
      host: "DevStories Team",
      description: "Collaborate on community projects and learn Git workflows"
    },
    {
      title: "AI in Web Development Panel",
      type: "Panel Discussion",
      date: "Aug 22, 2024",
      time: "4:00 PM PST", 
      attendees: 203,
      host: "Maya Rodriguez",
      description: "Experts discuss the future of AI tools in development"
    }
  ]

  const challengesAndBounties = [
    {
      title: "Build a Real-time Chat Application",
      difficulty: "Intermediate",
      bounty: "$500",
      participants: 45,
      timeLeft: "5 days",
      technologies: ["React", "Socket.io", "Node.js"],
      type: "Challenge"
    },
    {
      title: "Optimize Database Query Performance",
      difficulty: "Advanced",
      bounty: "$750",
      participants: 23,
      timeLeft: "12 days",
      technologies: ["PostgreSQL", "MongoDB", "Redis"],
      type: "Bounty"
    },
    {
      title: "Create a Mobile-First Component Library",
      difficulty: "Beginner",
      bounty: "$300",
      participants: 67,
      timeLeft: "8 days",
      technologies: ["React Native", "Styled Components"],
      type: "Challenge"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 3) - 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <Button
      variant={isActive ? "default" : "ghost"}
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 transition-all duration-300 ${
        isActive 
          ? 'bg-primary text-primary-foreground shadow-sm' 
          : 'hover:bg-accent hover:scale-105'
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </Button>
  )

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 opacity-20 text-muted-foreground font-mono text-sm rotate-12 hidden lg:block">
        {'// Join the community!'}
      </div>
      <div className="absolute top-40 right-20 opacity-20 text-muted-foreground font-mono text-sm -rotate-12 hidden lg:block">
        {'const community = "stronger together";'}
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 text-muted-foreground font-mono text-sm rotate-6 hidden lg:block">
        npm install collaboration
      </div>

      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20">
              <div className="absolute inset-0 bg-grid-white/5" />
              
              <CardContent className="relative p-8 md:p-12">
                <div className="text-center space-y-8">
                  
                  {/* Community Badge */}
                  <div className="flex justify-center">
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 animate-pulse"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      {onlineCount.toLocaleString()} developers online now
                    </Badge>
                  </div>
                  
                  {/* Main Headlines */}
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      <span className="text-foreground">Join Our</span>
                      <br />
                      <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Developer Community
                      </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      Connect with 25K+ developers, share knowledge, collaborate on projects, 
                      and grow your career together.
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
                    >
                      <Plus className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Join Community
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="h-14 px-8 hover:bg-accent hover:scale-105 transition-all duration-300 group"
                    >
                      <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Explore Content
                    </Button>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>Free to join</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span>Active daily</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-500" />
                      <span>Worldwide</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Stats */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 group cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background/50 backdrop-blur border border-border/50 mb-4 group-hover:border-primary/50 transition-all duration-300">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {stat.label}
                    </p>
                    <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                      {stat.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 p-2 bg-muted/50 rounded-lg backdrop-blur border border-border/50 mb-8">
              <TabButton id="overview" label="Overview" icon={Globe} isActive={activeTab === 'overview'} onClick={setActiveTab} />
              <TabButton id="contributors" label="Top Contributors" icon={Crown} isActive={activeTab === 'contributors'} onClick={setActiveTab} />
              <TabButton id="discussions" label="Discussions" icon={MessageSquare} isActive={activeTab === 'discussions'} onClick={setActiveTab} />
              <TabButton id="events" label="Events" icon={Calendar} isActive={activeTab === 'events'} onClick={setActiveTab} />
              <TabButton id="challenges" label="Challenges" icon={Trophy} isActive={activeTab === 'challenges'} onClick={setActiveTab} />
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                
                {/* Trending Topics */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Trending Topics</h2>
                    <Button variant="outline" size="sm" className="hover:bg-accent hover:scale-105 transition-all duration-300">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      View All
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trendingTopics.map((topic, index) => (
                      <Card 
                        key={index} 
                        className="p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 cursor-pointer group"
                      >
                        <CardContent className="p-0">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className={`text-xs ${topic.color}`}>
                              <Flame className="w-3 h-3 mr-1" />
                              Hot
                            </Badge>
                            <span className="text-xs text-green-500 font-medium">{topic.trend}</span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {topic.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {topic.posts} recent posts
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Recent Activity</h2>
                    <div className="flex gap-2">
                      <div className="relative">
                        <Input
                          placeholder="Search discussions..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 pr-4 h-10 bg-background/50 border-border/50"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                      <Button variant="outline" size="icon" className="h-10 w-10">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {recentDiscussions.map((discussion, index) => (
                      <Card 
                        key={index} 
                        className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 cursor-pointer group"
                      >
                        <CardContent className="p-0">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold">
                                {discussion.avatar}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                                    {discussion.title}
                                  </h3>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <span className="font-medium">{discussion.author}</span>
                                    <span>•</span>
                                    <span>{discussion.company}</span>
                                    <span>•</span>
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {discussion.timeAgo}
                                    </div>
                                  </div>
                                </div>
                                <Badge 
                                  variant="secondary" 
                                  className={`text-xs ml-4 ${
                                    discussion.category === 'Tutorial' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                                    discussion.category === 'Help' ? 'bg-orange-500/10 text-orange-600 border-orange-500/20' :
                                    discussion.category === 'Guide' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
                                    'bg-purple-500/10 text-purple-600 border-purple-500/20'
                                  }`}
                                >
                                  {discussion.category}
                                </Badge>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                  {discussion.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="outline" className="text-xs hover:bg-accent hover:scale-105 transition-all duration-300 cursor-pointer">
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>
                                
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    {discussion.replies}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <ThumbsUp className="w-4 h-4" />
                                    {discussion.likes}
                                  </div>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:scale-105 transition-all duration-300">
                                    <Share2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Top Contributors Tab */}
            {activeTab === 'contributors' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Community Champions</h2>
                  <p className="text-lg text-muted-foreground">
                    Meet the developers making our community amazing
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {topContributors.map((contributor, index) => (
                    <Card 
                      key={index} 
                      className="p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 group cursor-pointer"
                    >
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold text-lg">
                              {contributor.avatar}
                            </div>
                            {index === 0 && (
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                <Crown className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                                  {contributor.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {contributor.role} at {contributor.company}
                                </p>
                              </div>
                              <Badge variant="outline" className={`text-xs ${contributor.badgeColor}`}>
                                {contributor.badge}
                              </Badge>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {contributor.specialties.map((specialty, specIndex) => (
                                <Badge key={specIndex} variant="secondary" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <div className="font-bold text-lg text-primary">{contributor.articles}</div>
                                <div className="text-xs text-muted-foreground">Articles</div>
                              </div>
                              <div>
                                <div className="font-bold text-lg text-primary">{contributor.likes.toLocaleString()}</div>
                                <div className="text-xs text-muted-foreground">Likes</div>
                              </div>
                              <div>
                                <div className="font-bold text-lg text-primary">{contributor.followers.toLocaleString()}</div>
                                <div className="text-xs text-muted-foreground">Followers</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
                  <p className="text-lg text-muted-foreground">
                    Join workshops, meetups, and learning sessions
                  </p>
                </div>
                
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <Card 
                      key={index} 
                      className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 group cursor-pointer"
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <Badge 
                                  variant="secondary" 
                                  className={`text-xs mb-2 ${
                                    event.type === 'Workshop' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                                    event.type === 'Meetup' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
                                    'bg-purple-500/10 text-purple-600 border-purple-500/20'
                                  }`}
                                >
                                  {event.type}
                                </Badge>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                                  {event.title}
                                </h3>
                                <p className="text-muted-foreground mb-3">
                                  {event.description}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Hosted by <span className="font-medium text-primary">{event.host}</span>
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                {event.attendees} attending
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col justify-center gap-3">
                            <Button 
                              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              Join Event
                            </Button>
                            <Button 
                              variant="outline" 
                              className="hover:bg-accent hover:scale-105 transition-all duration-300"
                            >
                              <Bell className="mr-2 h-4 w-4" />
                              Remind Me
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges Tab */}
            {activeTab === 'challenges' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Coding Challenges & Bounties</h2>
                  <p className="text-lg text-muted-foreground">
                    Test your skills and earn rewards
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {challengesAndBounties.map((challenge, index) => (
                    <Card 
                      key={index} 
                      className="p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 group cursor-pointer"
                    >
                      <CardContent className="p-0">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                challenge.type === 'Challenge' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                                'bg-green-500/10 text-green-600 border-green-500/20'
                              }`}
                            >
                              <Trophy className="w-3 h-3 mr-1" />
                              {challenge.type}
                            </Badge>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">{challenge.bounty}</div>
                              <div className="text-xs text-muted-foreground">Reward</div>
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                            {challenge.title}
                          </h3>
                          
                          <div className="flex items-center justify-between text-sm">
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                challenge.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
                                challenge.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' :
                                'bg-red-500/10 text-red-600 border-red-500/20'
                              }`}
                            >
                              {challenge.difficulty}
                            </Badge>
                            <div className="text-muted-foreground">
                              {challenge.timeLeft} left
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {challenge.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-border/30">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="w-4 h-4" />
                              {challenge.participants} participants
                            </div>
                            <Button 
                              size="sm" 
                              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                            >
                              <Rocket className="mr-2 h-4 w-4" />
                              Join Challenge
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Discussions Tab */}
            {activeTab === 'discussions' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Community Discussions</h2>
                    <p className="text-lg text-muted-foreground">
                      Join conversations and share your expertise
                    </p>
                  </div>
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Start Discussion
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {recentDiscussions.map((discussion, index) => (
                    <Card 
                      key={index} 
                      className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 cursor-pointer group"
                    >
                      <CardContent className="p-0">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold">
                              {discussion.avatar}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                  {discussion.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                  <span className="font-medium">{discussion.author}</span>
                                  <span>•</span>
                                  <span>{discussion.company}</span>
                                  <span>•</span>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {discussion.timeAgo}
                                  </div>
                                </div>
                              </div>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs ml-4 ${
                                  discussion.category === 'Tutorial' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                                  discussion.category === 'Help' ? 'bg-orange-500/10 text-orange-600 border-orange-500/20' :
                                  discussion.category === 'Guide' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
                                  'bg-purple-500/10 text-purple-600 border-purple-500/20'
                                }`}
                              >
                                {discussion.category}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {discussion.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="outline" className="text-xs hover:bg-accent hover:scale-105 transition-all duration-300 cursor-pointer">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MessageSquare className="w-4 h-4" />
                                  {discussion.replies}
                                </div>
                                <div className="flex items-center gap-1">
                                  <ThumbsUp className="w-4 h-4" />
                                  {discussion.likes}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20">
              <div className="absolute inset-0 bg-grid-white/5" />
              
              <CardContent className="relative p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur border border-primary/30 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Join Our Community?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Connect with developers worldwide, share your knowledge, learn new skills, 
                  and advance your career in a supportive environment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
                  >
                    <Plus className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Join DevStories Community
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Browse Articles
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Free to join • No spam • Connect with 25K+ developers worldwide
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  )
}

export default CommunityPage