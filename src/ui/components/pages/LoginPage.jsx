import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Terminal, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Github, 
  Chrome,
  ArrowRight,
  Code,
  Users,
  Star,
  Zap
} from 'lucide-react'

const ThemeToggle = () => {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="absolute top-4 right-4 h-9 w-9 hover:bg-accent hover:scale-105 transition-all duration-300"
    >
      <div className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">☀️</div>
      <div className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">🌙</div>
    </Button>
  )
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  // Fixed: Better environment variable handling with fallback
  const googleAuthUrl = import.meta.env.VITE_AUTH_REDIRECT_URI || 'http://127.0.0.1:8000/auth/google/redirect'
  const githubAuthUrl = import.meta.env.VITE_GITHUB_AUTH_REDIRECT_URI 
  const handleLogin = () => {
    setIsLoading(true)
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  // Fixed: Handle Google OAuth redirect
  const handleGoogleLogin = () => {
    console.log('Redirecting to Google OAuth:', googleAuthUrl) // Debug log
    window.location.href = googleAuthUrl
  }
  const handleGithubLogin = () => {
    console.log('Redirecting to GitHub OAuth') // Debug log
    // Implement GitHub OAuth redirect logic here 
    window.location.href = githubAuthUrl
  }
  const communityStats = [
    { label: "Developers", value: "25K+", icon: Users },
    { label: "Articles", value: "12K+", icon: Code },
    { label: "Rating", value: "4.9★", icon: Star },
  ]

  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 opacity-20 text-muted-foreground font-mono text-sm rotate-12 hidden lg:block">
        {'// Welcome back, developer!'}
      </div>
      <div className="absolute top-40 right-20 opacity-20 text-muted-foreground font-mono text-sm -rotate-12 hidden lg:block">
        {'const user = await login()'}
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 text-muted-foreground font-mono text-sm rotate-6 hidden lg:block">
        npm start coding
      </div>

      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Branding & Info */}
        <div className="hidden lg:block space-y-8">
          
          {/* Logo & Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-primary/25">
                  <Terminal className="text-primary-foreground h-8 w-8" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="font-bold text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  DevStories
                </h1>
                <p className="text-muted-foreground font-mono text-sm">v2.0.1</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                <span className="text-foreground">Welcome Back to</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Your Dev Community
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Continue sharing knowledge, learning from peers, and building your developer career with our growing community.
              </p>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-3 gap-4">
            {communityStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background/50 backdrop-blur border border-border/50 mb-2 group-hover:border-primary/50 transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-bold text-xl">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">Write and publish articles</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">Connect with 25K+ developers</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">Access premium dev resources</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="bg-card/50 backdrop-blur-xl border-border/50 shadow-2xl shadow-primary/5 overflow-hidden">
            
            {/* Card Header */}
            <CardHeader className="space-y-4 pb-6">
              <div className="text-center">
                <Badge 
                  variant="secondary" 
                  className="px-3 py-1 text-xs bg-primary/10 text-primary border-primary/20 mb-4"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Developer Access
                </Badge>
                <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Sign in to your developer account
                </CardDescription>
              </div>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="space-y-6">
              
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="developer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-background/50 backdrop-blur border-border/50 focus:border-primary/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Password
                  </Label>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-xs text-primary hover:text-primary/80 p-0 h-auto"
                  >
                    Forgot password?
                  </Button>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-background/50 backdrop-blur border-border/50 focus:border-primary/50 transition-all duration-300 pr-12"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-12 w-12 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

            </CardContent>

            {/* Card Footer */}
            <CardFooter className="flex flex-col gap-4 pt-6">
              
              {/* Login Button */}
              <Button 
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              {/* Social Login - FIXED */}
              <div className="grid grid-cols-2 gap-3">
                <Button  
                onClick={handleGithubLogin}
                  variant="outline" 
                  className="h-12 hover:bg-accent hover:scale-105 transition-all duration-300 group"
                >
                  <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  GitHub
                </Button>
                
                {/* Fixed: Removed <a> tag wrapper and added onClick handler */}
                <Button 
                  variant="outline" 
                  onClick={handleGoogleLogin}
                  className="w-full h-12 hover:bg-accent hover:scale-105 transition-all duration-300 group"
                > 
                  <Chrome className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  Google
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Button 
                  variant="link" 
                  className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                >
                  Create one now
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Debug Info - Remove in production */}
          <div className="mt-4 p-3 bg-muted/50 rounded-lg text-xs font-mono text-muted-foreground">
            <strong>Debug:</strong> Google Auth URL: {googleAuthUrl}
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden text-center mt-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 flex items-center justify-center">
                <Terminal className="text-primary-foreground h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-xl">DevStories</h3>
                <p className="text-xs text-muted-foreground font-mono">v2.0.1</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Join 25K+ developers sharing knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage