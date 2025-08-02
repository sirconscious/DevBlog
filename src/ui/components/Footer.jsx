import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Terminal,
  Code,
  BookOpen,
  Users,
  MessageSquare,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Heart,
  Coffee,
  Zap,
  Globe,
  Shield,
  HelpCircle,
  FileText,
  Rss,
  Star,
  TrendingUp,
  Lightbulb,
  Send,
  ExternalLink,
  ChevronRight , 
  Share2
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Browse Articles", href: "#articles", icon: BookOpen },
        { name: "Write & Publish", href: "#write", icon: Code },
        { name: "Community", href: "#community", icon: Users },
        { name: "Topics", href: "#topics", icon: Lightbulb },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Developer Guide", href: "#guide", icon: FileText },
        { name: "API Documentation", href: "#api", icon: Terminal },
        { name: "Code Examples", href: "#examples", icon: Code },
        { name: "Help Center", href: "#help", icon: HelpCircle },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about", icon: MessageSquare },
        { name: "Careers", href: "#careers", icon: Star },
        { name: "Privacy Policy", href: "#privacy", icon: Shield },
        { name: "Terms of Service", href: "#terms", icon: FileText },
      ]
    }
  ]

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#github", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "Twitter", icon: Twitter, href: "#twitter", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#linkedin", color: "hover:text-blue-600" },
    { name: "RSS Feed", icon: Rss, href: "#rss", color: "hover:text-orange-500" },
  ]

  const popularTags = [
    "JavaScript", "React", "Node.js", "Python", "TypeScript", "Vue.js", 
    "DevOps", "AI/ML", "Web3", "Mobile", "Backend", "Frontend"
  ]

  const stats = [
    { label: "Articles Published", value: "12K+", icon: BookOpen },
    { label: "Active Developers", value: "25K+", icon: Users },
    { label: "Code Snippets", value: "45K+", icon: Code },
    { label: "Community Rating", value: "4.9★", icon: Star },
  ]

  return (
    <footer className="relative bg-background border-t border-border/50 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))] dark:bg-grid-slate-700/10" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-10 left-10 opacity-10 text-muted-foreground font-mono text-xs rotate-12 hidden lg:block">
        {'/* Built with ❤️ by developers */'}
      </div>
      <div className="absolute top-20 right-20 opacity-10 text-muted-foreground font-mono text-xs -rotate-12 hidden lg:block">
        npm run build-community
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-10 text-muted-foreground font-mono text-xs rotate-6 hidden lg:block">
        {'const knowledge = shared ? infinite : limited'}
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-b border-border/20">

       
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20">
              <div className="absolute inset-0 bg-grid-white/5" />
              
              <CardContent className="relative p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur border border-primary/30 mb-6">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Share Your Knowledge?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're a junior developer with fresh insights or a senior engineer with years of experience, 
                  your perspective matters. Help fellow developers learn and grow.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
                  >
                    <Lightbulb className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Write Your First Article
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Join Community
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  No experience required • Markdown support • Code syntax highlighting
                </p>
              </CardContent>
            </Card>
          </div>
        </section>



        {/* Newsletter Section */}
        <section className="border-b border-border/30">
          <div className="container mx-auto px-4 py-12">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5" />
              <CardContent className="relative p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur border border-primary/30 mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Stay Updated with Dev Stories
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Get the latest developer insights, tutorials, and community highlights delivered to your inbox weekly.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-background/50 backdrop-blur border-border/50 focus:border-primary/50"
                    />
                  </div>
                  <Button 
                    onClick={handleSubscribe}
                    size="lg"
                    className={`h-12 px-6 transition-all duration-300 ${
                      subscribed 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-primary hover:bg-primary/90 hover:scale-105'
                    } group`}
                    disabled={subscribed}
                  >
                    {subscribed ? (
                      <>
                        <Heart className="mr-2 h-4 w-4 text-red-500 animate-pulse" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Join 15K+ developers • No spam • Unsubscribe anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
         </div>
        {/* Main Footer Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-4">
                <div className="space-y-6">
                  {/* Logo */}
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-primary/25">
                        <Terminal className="text-primary-foreground h-6 w-6" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                        DevStories
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">v2.0.1</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    The ultimate platform where developers share knowledge, tutorials, and insights. 
                    Built by developers, for developers, to accelerate learning and career growth.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-3 rounded-lg bg-accent/50 hover:bg-accent transition-all duration-300 group cursor-pointer">
                        <stat.icon className="w-5 h-5 text-primary mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" />
                        <p className="font-bold text-lg">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Links Sections */}
              <div className="lg:col-span-6">
                <div className="grid md:grid-cols-3 gap-8">
                  {footerSections.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-primary to-blue-500 rounded-full" />
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group text-sm"
                            >
                              <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              {link.name}
                              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="lg:col-span-2">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                  Popular Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-accent/50 hover:bg-accent hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Quick Actions */}
                <div className="mt-6 space-y-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                  >
                    <TrendingUp className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    View Trending
                    <ExternalLink className="ml-auto h-3 w-3 opacity-50" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                  >
                    <Rss className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    RSS Feed
                    <ExternalLink className="ml-auto h-3 w-3 opacity-50" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <section className="border-t border-border/50 bg-muted/30 backdrop-blur">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-4 text-sm">
                <p className="text-muted-foreground">
                  © 2024 DevStories. Made with{' '}
                  <Heart className="inline w-4 h-4 text-red-500 animate-pulse" />{' '}
                  by developers.
                </p>
                <Badge variant="secondary" className="px-2 py-1 text-xs bg-green-500/10 text-green-600 border-green-500/20">
                  <Zap className="w-3 h-3 mr-1" />
                  Online
                </Badge>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-1">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`h-9 w-9 text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer