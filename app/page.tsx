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
  Users,
  ShoppingBag,
  Smartphone,
  Menu,
  X,
  Star,
  ArrowRight,
  Brain,
  Rocket,
  Target,
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

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
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
  const [likedStates, setLikedStates] = useState<{ [key: string]: boolean }>({})

  const placeholders = [
    "Try: AI-powered fitness tracker",
    "Try: Sustainable fashion marketplace",
    "Try: Remote team collaboration tool",
    "Try: Educational gaming platform",
    "Try: Smart home automation system",
    "Try: Digital wellness companion",
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

  const handleLike = (id: string) => {
    setLikedStates((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const generatedNames = [
    { name: "NexaFlow", tagline: "Where Innovation Flows Seamlessly", id: "1", rating: 4.8 },
    { name: "VelocityCore", tagline: "Speed Meets Precision", id: "2", rating: 4.9 },
    { name: "ZenithLab", tagline: "Peak Performance Platform", id: "3", rating: 4.7 },
    { name: "PulseForge", tagline: "Crafting Digital Heartbeats", id: "4", rating: 4.6 },
    { name: "QuantumLeap", tagline: "Beyond Tomorrow's Edge", id: "5", rating: 4.8 },
    { name: "EchoSphere", tagline: "Amplify Your Vision", id: "6", rating: 4.5 },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for solo entrepreneurs",
      features: [
        "50 name generations/month",
        "Basic domain checking",
        "Email support",
        "Export to PDF",
        "Basic analytics",
      ],
      popular: false,
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited name generations",
        "Advanced domain & social checking",
        "AI logo generation",
        "Priority support",
        "Team collaboration (5 members)",
        "Custom branding",
        "Advanced analytics",
        "API access",
      ],
      popular: true,
      color: "from-[#0AB6BC] to-[#045C43]",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Unlimited team members",
        "Custom AI training",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom integrations",
        "Advanced security",
      ],
      popular: false,
      color: "from-purple-600 to-purple-700",
    },
  ]

  const useCases = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startups",
      description: "Launch with a memorable brand name that captures your vision and resonates with investors",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Creators",
      description: "Stand out with unique names for your content, courses, and creative projects",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "eCommerce",
      description: "Create compelling product and store names that convert browsers into buyers",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Get app store-ready names that users will remember and recommend",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Generation",
      description:
        "Advanced machine learning algorithms analyze millions of successful brand names to generate unique, catchy options tailored to your industry.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Domain & Social Check",
      description:
        "Instantly verify domain availability across all major TLDs and check social media handle availability across 15+ platforms.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Industry Optimization",
      description:
        "Names are optimized for your specific industry with relevant keywords, trends, and market positioning strategies.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            NameForge AI
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Features", "Pricing", "About"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#0AB6BC] transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0 shadow-lg hover:shadow-[#0AB6BC]/25 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
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
              {["Home", "Features", "Pricing", "About"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#0AB6BC] transition-colors">
                  {item}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0">
                <Sparkles className="w-4 h-4 mr-2" />
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

        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-[1px]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation={fadeIn}>
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-[#0AB6BC] mr-2" />
              <span className="text-sm text-gray-300">Powered by Advanced AI Technology</span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection animation={fadeIn}>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[#F6F6F6] via-[#0AB6BC] to-[#F6F6F6] bg-clip-text text-transparent drop-shadow-2xl leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Name Your Startup
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">in Seconds with AI</span>
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection animation={{ ...fadeInUp, transition: { duration: 0.6, delay: 0.4 } }}>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
              Generate catchy, brandable names + taglines instantly. Our AI analyzes millions of successful brands to
              create the perfect name for your business.
            </p>
          </AnimatedSection>

          <AnimatedSection animation={{ ...scaleIn, transition: { duration: 0.6, delay: 0.6 } }}>
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 p-3 bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-800/50 shadow-2xl">
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholders[placeholderIndex]}
                    className="bg-transparent border-0 text-lg placeholder:text-gray-400 focus:ring-0 focus:outline-none text-white h-14 pl-4"
                  />
                  <motion.div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Brain className="w-5 h-5 text-[#0AB6BC]/50" />
                  </motion.div>
                </div>
                <Button className="bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-[#0AB6BC]/25 transition-all duration-300 hover:scale-105 h-14">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Names
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation={{ ...fadeInUp, transition: { duration: 0.6, delay: 0.8 } }}>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[#0AB6BC] mr-2" />
                10,000+ Names Generated
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[#0AB6BC] mr-2" />
                Domain Availability Check
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-[#0AB6BC] mr-2" />
                Instant Results
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#0AB6BC]/5 via-transparent to-transparent opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
                Powered by Advanced AI
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our cutting-edge technology combines machine learning, linguistic analysis, and market research to
                create names that resonate with your audience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                animation={{ ...fadeInUp, transition: { duration: 0.6, delay: index * 0.2 } }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 text-center p-8 group hover:scale-105">
                  <div className="text-[#0AB6BC] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Generated Names Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#045C43]/5 via-transparent to-transparent opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
                AI-Generated Names
              </h2>
              <p className="text-xl text-gray-400">See what our AI can create for your business</p>
            </div>
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
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0AB6BC]/10 group hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#0AB6BC] mb-2">{item.name}</h3>
                        <p className="text-gray-400 mb-3">{item.tagline}</p>
                        <div className="flex items-center mb-4">
                          <div className="flex items-center mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopy(item.name, item.id)}
                        className="border-gray-700 hover:border-[#0AB6BC] hover:bg-[#0AB6BC]/10 transition-all duration-300 flex-1"
                      >
                        {copiedStates[item.id] ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleLike(item.id)}
                        className={`border-gray-700 hover:border-[#0AB6BC] hover:bg-[#0AB6BC]/10 transition-all duration-300 ${
                          likedStates[item.id] ? "bg-[#0AB6BC]/20 border-[#0AB6BC]" : ""
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedStates[item.id] ? "fill-current text-red-500" : ""}`} />
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

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#021B23]/20 via-transparent to-transparent opacity-60" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
                Perfect For Every Industry
              </h2>
              <p className="text-xl text-gray-400">Tailored solutions for different business types and industries</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <AnimatedSection
                key={useCase.title}
                animation={{ ...fadeInUp, transition: { duration: 0.6, delay: index * 0.1 } }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0AB6BC]/10 group hover:-translate-y-2 text-center p-6 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <div className="text-[#0AB6BC] mb-4 group-hover:scale-110 transition-transform duration-300">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#0AB6BC]/5 via-transparent to-transparent opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400">Start free, scale as you grow</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <AnimatedSection
                key={tier.name}
                animation={{ ...scaleIn, transition: { duration: 0.6, delay: index * 0.1 } }}
              >
                <Card
                  className={`relative bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-[#0AB6BC]/50 transition-all duration-300 p-8 group ${
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
                    <p className="text-gray-400 text-sm mt-2">{tier.description}</p>
                    <div className="mt-6">
                      <span className="text-5xl font-bold text-[#0AB6BC]">{tier.price}</span>
                      <span className="text-gray-400 text-lg">{tier.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-[#0AB6BC] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full h-12 text-lg font-semibold ${
                        tier.popular
                          ? "bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0 shadow-lg hover:shadow-[#0AB6BC]/25"
                          : "bg-transparent border-[#0AB6BC] text-[#0AB6BC] hover:bg-[#0AB6BC] hover:text-white"
                      } transition-all duration-300 hover:scale-105`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
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
        <div className="absolute inset-0 bg-gradient-radial from-[#045C43]/10 via-transparent to-transparent opacity-50" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent">
                Want even more creative names?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get 20+ extra name ideas delivered to your inbox, plus exclusive naming tips and industry insights.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation={scaleIn}>
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-3 bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-2xl">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent border-0 text-lg placeholder:text-gray-500 focus:ring-0 focus:outline-none h-12"
                />
                <Button className="bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:from-[#0AB6BC]/80 hover:to-[#045C43]/80 text-white border-0 px-8 py-3 font-semibold shadow-lg hover:shadow-[#0AB6BC]/25 transition-all duration-300 hover:scale-105 h-12">
                  Get Names
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe anytime. Join 10,000+ entrepreneurs.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-16 relative border-t border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-radial from-[#021B23]/10 via-transparent to-transparent opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#0AB6BC] to-[#045C43] bg-clip-text text-transparent mb-4">
                NameForge AI
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                AI-powered naming for the next generation of brands. Create memorable, brandable names that resonate
                with your audience and drive business growth.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-700 hover:border-[#0AB6BC] bg-transparent">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="border-gray-700 hover:border-[#0AB6BC] bg-transparent">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-gray-700 hover:border-[#0AB6BC] bg-transparent">
                  GitHub
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#0AB6BC]">Product</h4>
              <ul className="space-y-3 text-gray-400">
                {["Features", "Pricing", "API", "Integrations", "Changelog"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#0AB6BC]">Company</h4>
              <ul className="space-y-3 text-gray-400">
                {["About", "Blog", "Careers", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#0AB6BC]/30 to-transparent mb-8" />
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                Built with ❤️ by <span className="text-[#0AB6BC] font-semibold">Kayzen</span> © 2024 NameForge AI. All
                rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-[#0AB6BC] transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
