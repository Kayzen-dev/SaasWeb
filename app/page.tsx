"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Sparkles,
  Copy,
  Heart,
  Save,
  Check,
  Globe,
  Palette,
  Zap,
  Users,
  ShoppingBag,
  Smartphone,
  Lightbulb,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
}

function AnimatedSection({
  children,
  className = "",
  animation = fadeInUp,
}: {
  children: React.ReactNode
  className?: string
  animation?: any
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={isInView ? animation.animate : animation.initial}
      transition={animation.transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})

  const placeholders = [
    "Try: AI Fitness App",
    "Try: Sustainable Fashion Brand",
    "Try: Food Delivery Service",
    "Try: Remote Work Tool",
    "Try: Educational Platform",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedStates((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [id]: false }))
    }, 2000)
  }

  const generatedNames = [
    { name: "NexaFlow", tagline: "Where Innovation Flows", id: "1" },
    { name: "VelocityLab", tagline: "Speed Meets Precision", id: "2" },
    { name: "ZenithCore", tagline: "Peak Performance Platform", id: "3" },
    { name: "PulseForge", tagline: "Crafting Digital Heartbeats", id: "4" },
    { name: "QuantumLeap", tagline: "Beyond Tomorrow's Edge", id: "5" },
    { name: "EchoSphere", tagline: "Amplify Your Vision", id: "6" },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: ["50 name generations/month", "Basic domain checking", "Email support", "Export to PDF"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited name generations",
        "Advanced domain & social checking",
        "Logo generation",
        "Priority support",
        "Team collaboration",
        "Custom branding",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Pro",
        "White-label solution",
        "API access",
        "Custom AI training",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      popular: false,
    },
  ]

  const useCases = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Startups",
      description: "Launch with a memorable brand name that captures your vision",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Creators",
      description: "Stand out with unique names for your content and projects",
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "eCommerce",
      description: "Create compelling product and store names that convert",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Get app store-ready names that users will remember",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
            NameForge
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-[#0AB6BC] transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-[#0AB6BC] transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-[#0AB6BC] transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-[#0AB6BC] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0 shadow-lg hover:shadow-[#0AB6BC]/25 transition-all duration-300">
              Try Now
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="hover:text-[#0AB6BC] transition-colors">
                Home
              </a>
              <a href="#features" className="hover:text-[#0AB6BC] transition-colors">
                Features
              </a>
              <a href="#pricing" className="hover:text-[#0AB6BC] transition-colors">
                Pricing
              </a>
              <a href="#contact" className="hover:text-[#0AB6BC] transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0">
                Try Now
              </Button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* 3D Spline Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://my.spline.design/retrofuturisticcircuitloop-T4ISvyqzbucydkMhu7lZ27AA/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full object-cover"
            style={{ border: "none" }}
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation={fadeIn}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F6F6F6] via-[#0AB6BC] to-[#F6F6F6] bg-clip-text text-transparent drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Name Your Startup in Seconds with AI
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection animation={{ ...fadeInUp, transition: { duration: 0.6, delay: 0.4 } }}>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto drop-shadow-lg">
              Generate catchy, brandable names + taglines instantly.
            </p>
          </AnimatedSection>

          <AnimatedSection animation={{ ...scaleIn, transition: { duration: 0.6, delay: 0.6 } }}>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 p-2 bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-800/50 shadow-2xl">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={placeholders[placeholderIndex]}
                  className="flex-1 bg-transparent border-0 text-lg placeholder:text-gray-400 focus:ring-0 focus:outline-none text-white"
                />
                <Button className="bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-[#0AB6BC]/25 transition-all duration-300">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Name
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Generated Names Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#045C43]/5 via-transparent to-transparent opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
              AI-Generated Names
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedNames.map((item, index) => (
              <AnimatedSection
                key={item.id}
                animation={{
                  ...scaleIn,
                  transition: { duration: 0.6, delay: index * 0.1 },
                }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0AB6BC]/10 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0AB6BC] mb-2">{item.name}</h3>
                        <p className="text-gray-400">{item.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopy(item.name, item.id)}
                        className="border-gray-700 hover:border-[#0AB6BC] hover:bg-[#0AB6BC]/10 transition-all duration-300"
                      >
                        {copiedStates[item.id] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-700 hover:border-[#0AB6BC] hover:bg-[#0AB6BC]/10 transition-all duration-300 bg-transparent"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-700 hover:border-[#0AB6BC] hover:bg-[#0AB6BC]/10 transition-all duration-300 bg-transparent"
                      >
                        <Save className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Tools Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#021B23]/20 via-transparent to-transparent opacity-60" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
              Complete Brand Tools
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation={{ ...fadeInUp, transition: { duration: 0.6, delay: 0.1 } }}>
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 text-center p-8">
                <Globe className="w-12 h-12 text-[#0AB6BC] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Domain Availability</h3>
                <p className="text-gray-400 mb-4">Check domain and social media availability instantly</p>
                <div className="h-px bg-gradient-to-r from-transparent via-[#0AB6BC]/30 to-transparent" />
              </Card>
            </AnimatedSection>

            <AnimatedSection animation={{ ...fadeInUp, transition: { duration: 0.6, delay: 0.2 } }}>
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 text-center p-8">
                <Palette className="w-12 h-12 text-[#0AB6BC] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Logo Generation</h3>
                <p className="text-gray-400 mb-4">Create professional logos with AI assistance</p>
                <Button className="bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0">
                  Generate Logo
                </Button>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation={{ ...fadeInUp, transition: { duration: 0.6, delay: 0.3 } }}>
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 text-center p-8">
                <Zap className="w-12 h-12 text-[#0AB6BC] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Guidelines</h3>
                <p className="text-gray-400 mb-4">Get complete brand identity recommendations</p>
                <div className="h-px bg-gradient-to-r from-transparent via-[#0AB6BC]/30 to-transparent" />
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#0AB6BC]/5 via-transparent to-transparent opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
              How It Works
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Describe", description: "Tell us about your startup or product idea" },
              { step: "2", title: "Generate", description: "Our AI creates dozens of unique name options" },
              { step: "3", title: "Save", description: "Pick your favorites and check availability" },
            ].map((item, index) => (
              <AnimatedSection
                key={item.step}
                animation={{ ...scaleIn, transition: { duration: 0.6, delay: index * 0.2 } }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 text-center p-8 hover:border-[#0AB6BC]/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Cards Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#045C43]/5 via-transparent to-transparent opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
              Perfect For Every Industry
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <AnimatedSection
                key={useCase.title}
                animation={{ ...fadeInUp, transition: { duration: 0.6, delay: index * 0.1 } }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0AB6BC]/10 group hover:-translate-y-2 text-center p-6">
                  <div className="text-[#0AB6BC] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#021B23]/20 via-transparent to-transparent opacity-60" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <AnimatedSection
                key={tier.name}
                animation={{ ...scaleIn, transition: { duration: 0.6, delay: index * 0.1 } }}
              >
                <Card
                  className={`relative bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 p-8 ${
                    tier.popular ? "ring-2 ring-[#0AB6BC]/50 shadow-lg shadow-[#0AB6BC]/20 scale-105" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#0AB6BC] to-[#045C43] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[#0AB6BC]">{tier.price}</span>
                      <span className="text-gray-400">{tier.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-[#0AB6BC] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        tier.popular
                          ? "bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0 shadow-lg hover:shadow-[#0AB6BC]/25"
                          : "bg-transparent border-[#0AB6BC] text-[#0AB6BC] hover:bg-[#0AB6BC] hover:text-white"
                      } transition-all duration-300`}
                    >
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#0AB6BC]/10 via-transparent to-transparent opacity-50" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
              Want even more creative names?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Get 20+ extra name ideas in your inbox.</p>
          </AnimatedSection>

          <AnimatedSection animation={scaleIn}>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-0 text-lg placeholder:text-gray-500 focus:ring-0 focus:outline-none"
                />
                <Button className="bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0 px-6 py-3 font-semibold shadow-lg hover:shadow-[#0AB6BC]/25 transition-all duration-300">
                  Get Names
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 relative border-t border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-radial from-[#045C43]/5 via-transparent to-transparent opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent mb-4">
                NameForge
              </div>
              <p className="text-gray-400">AI-powered naming for the next generation of brands.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-8 text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#0AB6BC]/30 to-transparent mb-8" />
            <p className="text-gray-400">
              Built with ❤️ by <span className="text-[#0AB6BC]">Kayzen</span> © 2024 NameForge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
