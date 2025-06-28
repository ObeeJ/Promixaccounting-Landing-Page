"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Phone,
  Mail,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  Play,
  Menu,
  X,
  ChevronDown,
  Zap,
  BarChart3,
  Globe,
  Lock,
  Sparkles,
  Target,
  FileText,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function ProMixAccounting() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const workflowSteps = [
    {
      step: "01",
      title: "Quick Setup",
      description: "Connect your bank accounts and import existing data in minutes, not hours",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      step: "02",
      title: "Smart Automation",
      description: "AI-powered categorization and reconciliation handles 90% of your bookkeeping automatically",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500",
    },
    {
      step: "03",
      title: "Real-time Insights",
      description: "Get instant financial reports and analytics to make informed business decisions",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-400 to-violet-500",
    },
    {
      step: "04",
      title: "Scale & Grow",
      description: "Seamlessly handle increased transaction volume as your business expands",
      icon: <Target className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "₦0",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: ["1 User", "Basic Reporting", "Bank Sync", "Mobile App", "Email Support"],
      popular: false,
      buttonText: "Start Free",
      highlight: "30-day trial",
    },
    {
      name: "Professional",
      price: "₦50,000",
      period: "/year",
      description: "Ideal for growing businesses and small teams",
      features: [
        "5 Users",
        "Advanced Reports",
        "Multi-currency",
        "API Access",
        "Priority Support",
        "Custom Integrations",
        "Automated Workflows",
      ],
      popular: true,
      buttonText: "Choose Pro",
      highlight: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "₦120,000",
      period: "/year",
      description: "For established businesses with complex needs",
      features: [
        "Unlimited Users",
        "White-label Options",
        "Advanced Security",
        "Dedicated Manager",
        "Custom Training",
        "SLA Guarantee",
      ],
      popular: false,
      buttonText: "Contact Sales",
      highlight: "Custom Solutions",
    },
  ]

  const faqs = [
    {
      question: "How quickly can I get started with Promix?",
      answer:
        "Most businesses are up and running within 15 minutes. Our smart onboarding connects your bank accounts and imports historical data automatically.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Absolutely. We use bank-level 256-bit encryption, SOC 2 Type II compliance, and never store your banking credentials. Your data is safer with us than on your computer.",
    },
    {
      question: "Can I migrate from my current accounting software?",
      answer:
        "Yes! We support seamless migration from QuickBooks, Xero, Sage, and 50+ other platforms. Our migration specialists handle the entire process for free.",
    },
    {
      question: "What if I need help or have questions?",
      answer:
        "Our expert support team is available 24/7 via chat, email, and phone. Plus, every plan includes free onboarding and training sessions.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Enhanced Navigation - Always Sticky */}
      <header className="fixed w-full z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-2xl border-b border-white/10"></div>
        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo with Original Promix Branding */}
            <div className="flex items-center space-x-3 group">
              <img
                src="/images/promix-logo.png"
                alt="Promix Accounting"
                className="h-8 w-auto transform group-hover:scale-105 transition-all duration-300"
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              {["Product", "Pricing", "Resources", "Enterprise", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-300 relative group rounded-lg hover:bg-white/5"
                >
                  {item}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:flex text-gray-300 hover:text-white hover:bg-white/5">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Start Free Trial
              </Button>
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-2xl border-t border-white/10"></div>
          <nav className="container mx-auto px-4 py-6 relative z-10 space-y-4">
            {["Product", "Pricing", "Resources", "Enterprise", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Glassmorphism Light Reflections */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-violet-500/5 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-6 py-3 mb-8 shadow-2xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Trusted by 10,000+ businesses worldwide</span>
              <Sparkles className="w-4 h-4 text-green-400" />
            </div>

            {/* Hero Headline with Perfect Typography Hierarchy */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.2] mb-12 tracking-tight">
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Seamless Accounting Software
              </span>
              <span className="block text-4xl lg:text-5xl font-normal text-gray-300 mt-6">For SMEs</span>
            </h1>

            {/* Compelling Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
              Automate your accounting management system today. Our software solutions will help streamline account
              management within Nigeria.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group px-10 py-4 text-lg font-semibold"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:scale-105 group px-10 py-4 text-lg border-2"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { metric: "10k+", label: "Active Businesses" },
                { metric: "₦50B+", label: "Processed Monthly" },
                { metric: "99.9%", label: "Uptime SLA" },
                { metric: "40hrs", label: "Saved Per Month" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-green-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400/50 rounded-full animate-ping animation-delay-700"></div>
      </section>

      {/* Product Showcase Section (Phone Mockup Moved Here) */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-6 backdrop-blur-xl">
                Product Showcase
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Your entire financial
                <span className="block text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
                  ecosystem in one place
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access powerful accounting tools from anywhere. Our mobile-first design ensures you stay connected to
                your business finances whether you're in the office or on the go.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Real-time Sync",
                    desc: "Instant updates across all devices",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Bank-level Security",
                    desc: "256-bit encryption & SOC 2 compliance",
                  },
                  { icon: <Globe className="w-5 h-5" />, title: "Global Access", desc: "Work from anywhere, anytime" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-300 hover:scale-105 group px-8 py-3">
                Explore Features
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Phone Mockup with Enhanced Glassmorphism */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Glassmorphism Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl transform rotate-3 scale-105"></div>

                <img
                  src="/images/phone-mockup.png"
                  alt="Promix Mobile App"
                  className="relative w-80 h-auto hover:scale-105 transition-all duration-500 drop-shadow-2xl z-10"
                />

                {/* Floating UI Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-xl animate-float backdrop-blur-xl border border-white/20">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse backdrop-blur-xl border border-white/20">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce backdrop-blur-xl border border-white/20">
                  <Lock className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completely Redesigned Benefits Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>

        {/* Advanced Glassmorphism Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/8 to-cyan-500/4 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/5 to-violet-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-6 backdrop-blur-xl">
              Why Choose Promix
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Built for the modern
              <span className="block text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
                finance team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of accounting software designed for speed, accuracy, and growth.
            </p>
          </div>

          {/* Benefits Grid with Advanced Glassmorphism */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: "AI-Powered Automation",
                description:
                  "Reduce manual work by 90% with intelligent transaction categorization, automated reconciliation, and smart expense tracking that learns from your business patterns.",
                icon: <Sparkles className="w-8 h-8" />,
                metric: "90%",
                metricLabel: "Less Manual Work",
                gradient: "from-green-400 to-emerald-500",
                features: ["Smart categorization", "Auto-reconciliation", "Expense tracking", "Pattern learning"],
              },
              {
                title: "Real-Time Financial Intelligence",
                description:
                  "Get instant insights with live dashboards, predictive analytics, and customizable reports that help you make data-driven decisions faster than ever.",
                icon: <BarChart3 className="w-8 h-8" />,
                metric: "Real-time",
                metricLabel: "Financial Insights",
                gradient: "from-blue-400 to-cyan-500",
                features: ["Live dashboards", "Predictive analytics", "Custom reports", "Data visualization"],
              },
              {
                title: "Enterprise-Grade Security",
                description:
                  "Your data is protected with bank-level encryption, SOC 2 Type II compliance, and advanced threat detection that exceeds industry standards.",
                icon: <Shield className="w-8 h-8" />,
                metric: "SOC 2",
                metricLabel: "Type II Certified",
                gradient: "from-purple-400 to-violet-500",
                features: ["256-bit encryption", "SOC 2 compliance", "Threat detection", "Audit trails"],
              },
              {
                title: "Seamless Integrations",
                description:
                  "Connect with 500+ business tools including banks, payment processors, CRM systems, and e-commerce platforms in just one click.",
                icon: <Globe className="w-8 h-8" />,
                metric: "500+",
                metricLabel: "Integrations",
                gradient: "from-orange-400 to-red-500",
                features: ["Bank connections", "Payment processors", "CRM integration", "E-commerce sync"],
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                {/* Glassmorphism Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Light Reflection Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-xl`}
                    >
                      {benefit.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                        {benefit.metric}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">{benefit.metricLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Feature List */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="text-green-400 hover:text-green-300 hover:bg-green-500/10 p-0 h-auto font-semibold group/btn"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Proof with Glassmorphism */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Light Reflection */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  "Promix transformed our entire finance operation in just 30 days"
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "We reduced our month-end close from 15 days to just 3 days. The AI-powered reconciliation saves us
                  40+ hours monthly, and the real-time insights have completely changed how we make financial
                  decisions."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AO</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Adebayo Ogundimu</div>
                    <div className="text-gray-400">CFO, TechCorp Nigeria</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "15→3", label: "Days to close" },
                  { metric: "40hrs", label: "Saved monthly" },
                  { metric: "₦8M", label: "Annual savings" },
                  { metric: "100%", label: "Accuracy rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                  >
                    <div className="text-2xl font-bold text-green-400 mb-1">{stat.metric}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Accounting Solutions Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 backdrop-blur-2xl border border-green-500/20 rounded-full px-6 py-3 mb-8">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">Trusted by 500+ Businesses</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Comprehensive Accounting
              <span className="block text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From bookkeeping to strategic financial planning, we provide end-to-end accounting services tailored to
              your business needs.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 text-lg">
                <CheckCircle className="w-5 h-5 mr-3" />
                Bookkeeping & Accounting
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                <FileText className="w-5 h-5 mr-3" />
                Tax Preparation & Planning
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                Financial Analysis & Reporting
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                <TrendingUp className="w-5 h-5 mr-3" />
                Business Advisory
              </Button>
            </div>

            {/* Active Tab Content */}
            <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Bookkeeping & Accounting</h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    Comprehensive bookkeeping services to keep your financial records accurate and up-to-date.
                  </p>
                  <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    "Daily transaction recording",
                    "Bank reconciliation",
                    "Financial statements",
                    "Accounts payable/receivable",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-white text-lg">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-6 backdrop-blur-xl">
              How It Works
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Get started in
              <span className="block text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
                under 15 minutes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our intelligent onboarding process gets you up and running faster than any other accounting platform.
            </p>
          </div>

          {/* Enhanced Workflow Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {workflowSteps.map((step, index) => (
              <Card
                key={index}
                className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                {/* Glassmorphism Effects */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-xl`}
                    >
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-white/20">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {/* Connection Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
                )}
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  Ready to revolutionize your accounting?
                </h3>
                <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of businesses already saving time and money. Start your free trial today.
                </p>

                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-xl px-12 py-6 text-xl font-semibold mb-12"
                >
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-green-50">
                  <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                    <CheckCircle className="w-8 h-8 mb-4" />
                    <span className="text-lg font-semibold mb-2">30-day free trial</span>
                    <span className="text-green-100 text-center text-sm">No commitment required</span>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                    <CheckCircle className="w-8 h-8 mb-4" />
                    <span className="text-lg font-semibold mb-2">No credit card required</span>
                    <span className="text-green-100 text-center text-sm">Start immediately</span>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                    <CheckCircle className="w-8 h-8 mb-4" />
                    <span className="text-lg font-semibold mb-2">Setup in 15 minutes</span>
                    <span className="text-green-100 text-center text-sm">Quick onboarding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-6 backdrop-blur-xl">Pricing</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Simple, transparent
              <span className="block text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
                pricing for everyone
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your business size and needs. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group bg-white/5 backdrop-blur-2xl border transition-all duration-500 hover:scale-105 overflow-hidden ${
                  plan.popular
                    ? "border-green-500/30 bg-green-500/5 hover:bg-green-500/10 scale-105"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 text-sm font-semibold">
                      {plan.highlight}
                    </Badge>
                  </div>
                )}

                {/* Glassmorphism Effects */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 text-lg">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-xl"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQs Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-6 backdrop-blur-xl">FAQs</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Questions?
              <span className="block text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
                We have answers
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  >
                    <span className="text-white font-semibold text-lg pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-green-400 transition-transform duration-300 flex-shrink-0 ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-8 pt-0 text-gray-300 leading-relaxed text-lg border-t border-white/10">
                      {faq.answer}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Advanced Glassmorphism Background */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to transform your
              <span className="block">financial operations?</span>
            </h2>
            <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses already saving time and money with Promix. Start your journey today.
            </p>

            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-12 py-4 text-xl font-semibold"
            >
              Start Free Trial
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "30-Day Free Trial",
                  desc: "No credit card required",
                },
                { icon: <Shield className="w-8 h-8" />, title: "Enterprise Security", desc: "Bank-level protection" },
                { icon: <Users className="w-8 h-8" />, title: "Expert Support", desc: "24/7 assistance" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-green-100 text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-20 border-t border-gray-800/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <img src="/images/promix-logo.png" alt="Promix Accounting" className="h-10 w-auto" />
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                The future of accounting intelligence. Transform your financial operations with AI-powered automation
                and real-time insights.
              </p>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Mail className="w-5 h-5 group-hover:text-green-400 transition-colors duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">hello@promix.com</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Phone className="w-5 h-5 group-hover:text-green-400 transition-colors duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">+234 816 124 1827</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
              <ul className="space-y-4 text-gray-400">
                {["Features", "Integrations", "API", "Security", "Mobile App"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-4 text-gray-400">
                {["About", "Careers", "Press", "Partners", "Contact"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
              <ul className="space-y-4 text-gray-400">
                {["Documentation", "Help Center", "Blog", "Webinars", "Community"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Promix. All rights reserved.</p>
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-green-400 transition-colors duration-300">
                Privacy
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors duration-300">
                Terms
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
