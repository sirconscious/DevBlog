import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Terminal,
  Code,
  Coffee,
  MapPin,
  Calendar,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  Star,
  Users,
  BookOpen,
  Award,
  Zap,
  Rocket,
  Target,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Download,
  ExternalLink,
  Globe,
  Lightbulb,
  Building
} from 'lucide-react'

const AboutPage = () => {
  const [currentSkill, setCurrentSkill] = useState(0)
  const [yearsExp, setYearsExp] = useState(0)

  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python', 'Next.js', 
    'GraphQL', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'
  ]

  const stats = [
    { label: "Years of Experience", value: "5+", icon: Calendar, color: "text-blue-500" },
    { label: "Projects Completed", value: "50+", icon: Code, color: "text-green-500" },
    { label: "Articles Written", value: "25+", icon: BookOpen, color: "text-purple-500" },
    { label: "Cups of Coffee", value: "1000+", icon: Coffee, color: "text-orange-500" }
  ]

  const timeline = [
    {
      year: "2024",
      title: "Founded DevStories",
      company: "DevStories Platform",
      description: "Launched a platform to help developers share knowledge and grow their careers.",
      type: "founder",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      year: "2022-2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Co.",
      description: "Led development of scalable web applications serving 100K+ users.",
      type: "work",
      technologies: ["React", "TypeScript", "GraphQL", "Docker"]
    },
    {
      year: "2020-2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Built modern web applications and APIs for various client projects.",
      type: "work",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"]
    },
    {
      year: "2019",
      title: "Started Developer Journey",
      company: "Self-taught",
      description: "Began learning web development and fell in love with creating digital solutions.",
      type: "learning",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ]

  const achievements = [
    {
      title: "AWS Certified Solutions Architect",
      year: "2023",
      icon: Award,
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
    },
    {
      title: "Top 1% Developer on Stack Overflow",
      year: "2023",
      icon: Star,
      color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
    },
    {
      title: "Open Source Contributor",
      year: "Ongoing",
      icon: Github,
      color: "bg-gray-500/10 text-gray-600 border-gray-500/20"
    },
    {
      title: "Tech Conference Speaker",
      year: "2022",
      icon: MessageSquare,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    }
  ]

  const values = [
    {
      title: "Knowledge Sharing",
      description: "I believe in the power of sharing knowledge to elevate the entire developer community.",
      icon: Lightbulb,
      color: "text-yellow-500"
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying current with the latest trends.",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "Quality Code",
      description: "Writing clean, maintainable, and scalable code is not just a practice, it's a passion.",
      icon: Code,
      color: "text-blue-500"
    },
    {
      title: "Community First",
      description: "Building tools and platforms that genuinely help developers grow and succeed.",
      icon: Users,
      color: "text-purple-500"
    }
  ]

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 2000)

    const expAnimation = setInterval(() => {
      setYearsExp((prev) => {
        if (prev < 5) return prev + 1
        clearInterval(expAnimation)
        return prev
      })
    }, 300)

    return () => {
      clearInterval(skillInterval)
      clearInterval(expAnimation)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 opacity-20 text-muted-foreground font-mono text-sm rotate-12 hidden lg:block">
        {'// Hello, I\'m Mehdi!'}
      </div>
      <div className="absolute top-40 right-20 opacity-20 text-muted-foreground font-mono text-sm -rotate-12 hidden lg:block">
        {'const passion = "building things";'}
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 text-muted-foreground font-mono text-sm rotate-6 hidden lg:block">
        npm run create-impact
      </div>

      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20">
              <div className="absolute inset-0 bg-grid-white/5" />
              
              <CardContent className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left Side - Text Content */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <Badge 
                        variant="secondary" 
                        className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20"
                      >
                        <Terminal className="w-4 h-4 mr-2" />
                        Full Stack Developer & Founder
                      </Badge>
                      
                      <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                          <span className="text-foreground">Hi, I'm</span>
                          <br />
                          <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Mehdi
                          </span>
                        </h1>
                        
                        <div className="flex items-center gap-2 text-xl md:text-2xl text-muted-foreground font-mono">
                          <span>I build with</span>
                          <span className="text-primary font-bold min-w-[120px] text-left">
                            {skills[currentSkill]}
                          </span>
                          <span className="animate-pulse">|</span>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm a passionate full-stack developer and the founder of DevStories. 
                        I love building digital solutions that make a difference and sharing 
                        knowledge with the developer community.
                      </p>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Marrakesh, Morocco</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-500" />
                        <span className="text-muted-foreground">Available for projects</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
                      >
                        <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        Get In Touch
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="h-12 px-8 hover:bg-accent hover:scale-105 transition-all duration-300 group"
                      >
                        <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        Download CV
                      </Button>
                    </div>
                  </div>
                  
                  {/* Right Side - Avatar & Stats */}
                  <div className="space-y-8">
                    <div className="relative mx-auto lg:mx-0 w-fit">
                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-64 h-64 rounded-3xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 p-1">
                          <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                            <div className="w-32 h-32 rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 flex items-center justify-center">
                              <Terminal className="text-primary-foreground h-16 w-16" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                      
                      {/* Floating Experience Counter */}
                      <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur border border-border/50 rounded-2xl p-4 shadow-lg">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">{yearsExp}+</div>
                          <div className="text-xs text-muted-foreground">Years Exp</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start gap-3">
                      {[
                        { icon: Github, href: "#", color: "hover:text-gray-600" },
                        { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                        { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                        { icon: Mail, href: "#", color: "hover:text-red-500" }
                      ].map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className={`h-12 w-12 hover:scale-110 transition-all duration-300 ${social.color}`}
                        >
                          <social.icon className="h-5 w-5" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
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
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                My Developer Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                From curious beginner to platform founder
              </p>
            </div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''} group`}
                >
                  <div className="flex-1">
                    <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge 
                            variant="secondary" 
                            className={`px-3 py-1 text-xs ${
                              item.type === 'founder' ? 'bg-purple-500/10 text-purple-600 border-purple-500/20' :
                              item.type === 'work' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                              'bg-green-500/10 text-green-600 border-green-500/20'
                            }`}
                          >
                            {item.year}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {item.type === 'founder' && <Rocket className="w-4 h-4 text-purple-500" />}
                            {item.type === 'work' && <Building className="w-4 h-4 text-blue-500" />}
                            {item.type === 'learning' && <BookOpen className="w-4 h-4 text-green-500" />}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-primary font-medium mb-3">{item.company}</p>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline" 
                              className="text-xs hover:bg-accent hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-blue-500 mb-2" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-32 bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Philosophy */}
        <section className="bg-muted/30 backdrop-blur py-16 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What Drives Me
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide my work and life
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card 
                    key={index} 
                    className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 group"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-background/50 backdrop-blur border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                          <value.icon className={`w-6 h-6 ${value.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Achievements & Recognition
              </h2>
              <p className="text-lg text-muted-foreground">
                Milestones along the journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 group cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-background/50 backdrop-blur border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                        <achievement.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${achievement.color}`}
                        >
                          {achievement.year}
                        </Badge>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20">
              <div className="absolute inset-0 bg-grid-white/5" />
              
              <CardContent className="relative p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur border border-primary/30 mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you have a project in mind, want to collaborate, or just want to chat about tech, 
                  I'm always excited to connect with fellow developers and innovators.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
                  >
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Start a Conversation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    View My Work
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Currently available for freelance projects and collaboration opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  )
}

export default AboutPage