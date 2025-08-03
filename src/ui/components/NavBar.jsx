import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge" 
import {Link } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { 
  Menu, 
  Sun, 
  Moon, 
  Monitor, 
  Terminal, 
  Code, 
  BookOpen, 
  Users, 
  MessageSquare,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  Edit3,
  TrendingUp
} from 'lucide-react'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 hover:bg-accent hover:scale-105 transition-all duration-300"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border-border/50">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { title: "Articles", href: "#articles", icon: BookOpen },
    { title: "Topics", href: "#topics", icon: Code },
    { title: "Community", href: "#community", icon: Users },
    { title: "About", href: "#about", icon: MessageSquare },
  ]

  const userMenuItems = [
    { title: "Profile", icon: User, href: "/login" },
    { title: "My Articles", icon: Edit3, href: "#my-articles" },
    { title: "Settings", icon: Settings, href: "#settings" },
    { title: "Sign Out", icon: LogOut, href: "#signout" },
  ]

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-border/50 shadow-lg shadow-primary/5' 
        : 'bg-background/95 backdrop-blur-sm border-border/30'
    }`}>
      
      {/* Code pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate-100/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))] dark:bg-grid-slate-700/10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/25">
                  <Terminal className="text-primary-foreground font-bold text-sm h-5 w-5" />
                </div>
                {/* Floating code indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <Link to="/" className="flex items-center space-x-1">
                <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  DevStories
                </span>
                </Link>
                <span className="text-xs text-muted-foreground font-mono">
                  v2.0.1
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-accent hover:text-primary hover:scale-105 group"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                {item.title}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            
            {/* Trending Badge - Desktop only */}
            <div className="hidden md:flex">
              <Badge 
                variant="secondary" 
                className="px-3 py-1 text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                25K+ devs
              </Badge>
            </div>

            {/* Search Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 hover:bg-accent hover:scale-105 transition-all duration-300 hidden md:flex"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 hover:bg-accent hover:scale-105 transition-all duration-300 relative hidden md:flex"
            >
              <Bell className="h-4 w-4" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
            </Button>

            {/* Write Button */} 
            <Link to="/mde">
            <Button 
              size="sm" 
              className="hidden md:flex h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
              >
              <Edit3 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              Write
            </Button>
              </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 hover:bg-accent hover:scale-105 transition-all duration-300 hidden md:flex"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-blue-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-sm border-border/50">
                {userMenuItems.map((item, index) => (
                  <DropdownMenuItem key={index} className="cursor-pointer"> 
                  <Link to={item.href} className="flex items-center gap-2">
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden h-9 w-9 hover:bg-accent hover:scale-105 transition-all duration-300"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-background/95 backdrop-blur-xl border-border/50"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  
                  {/* Mobile User Section */}
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 border border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500" />
                    <div>
                      <p className="font-medium">Developer</p>
                      <p className="text-sm text-muted-foreground">@devuser</p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg hover:bg-accent hover:text-primary group"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        {item.title}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Actions */}
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                    >
                      <Edit3 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Write Article
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Search className="mr-2 h-4 w-4" />
                        Search
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Stats */}
                  <div className="pt-4 border-t border-border/50">
                    <Badge 
                      variant="secondary" 
                      className="w-full justify-center py-2 bg-primary/10 text-primary border-primary/20"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      25K+ Active Developers
                    </Badge>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar