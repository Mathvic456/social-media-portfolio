"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  Camera,
  Video,
  Users,
  Star,
  Play,
  Globe,
  Home,
  Menu,
  X,
  Send,
  Loader2,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Sponsored Content",
    description: "Authentic brand partnerships and sponsored posts",
    icon: <Heart className="h-6 w-6" />,
    details:
      "Create engaging sponsored content that feels natural and authentic to your brand. I work closely with brands to ensure the content aligns with both their goals and my audience's interests.",
    pricing: "Starting from ₦50,000 per post",
    deliverables: ["1-3 Instagram posts", "Story highlights", "Detailed analytics report", "Usage rights for 6 months"],
  },
  {
    title: "Product Reviews",
    description: "Honest and relatable product reviews",
    icon: <Star className="h-6 w-6" />,
    details:
      "Comprehensive product reviews that provide genuine insights to help your audience make informed decisions. All reviews are honest and based on thorough testing.",
    pricing: "₦30,000 - ₦75,000 per review",
    deliverables: ["Detailed video review", "Written blog post", "Social media posts", "Product photography"],
  },
  {
    title: "Photography & Videography",
    description: "Product photography & videography for marketing purposes",
    icon: <Camera className="h-6 w-6" />,
    details:
      "Professional product photography and videography services for your marketing campaigns. High-quality visuals that showcase your products in the best light.",
    pricing: "₦40,000 - ₦100,000 per session",
    deliverables: ["10-20 edited photos", "2-3 short videos", "Raw files", "Commercial usage rights"],
  },
  {
    title: "Tutorials & Guides",
    description: "Skincare/hair care routines, styling locs, cooking recipes, wellness practices",
    icon: <Video className="h-6 w-6" />,
    details:
      "Step-by-step tutorials and guides covering beauty, wellness, and lifestyle topics. Educational content that provides real value to your audience.",
    pricing: "₦35,000 - ₦80,000 per tutorial",
    deliverables: ["15-30 minute tutorial video", "Written guide/blog post", "Social media snippets", "Resource list"],
  },
  {
    title: "Event Hosting/Promotion",
    description: "Professional event hosting and promotional services",
    icon: <Users className="h-6 w-6" />,
    details:
      "Professional event hosting and comprehensive promotional campaigns. From intimate brand launches to large-scale events, I bring energy and professionalism.",
    pricing: "₦100,000 - ₦300,000 per event",
    deliverables: ["Event hosting", "Pre-event promotion", "Live coverage", "Post-event content"],
  },
  {
    title: "Recipe Development & Marketing",
    description: "Brand recipe development and marketing campaigns",
    icon: <Globe className="h-6 w-6" />,
    details:
      "Custom recipe development featuring your products, complete with professional food photography and marketing content across multiple platforms.",
    pricing: "₦60,000 - ₦120,000 per recipe",
    deliverables: [
      "Original recipe creation",
      "Professional food photography",
      "Video cooking tutorial",
      "Marketing content package",
    ],
  },
  {
    title: "Travel Content",
    description: "Travel content featuring brands or products",
    icon: <MapPin className="h-6 w-6" />,
    details:
      "Destination-based content creation featuring your brand or products. Perfect for travel, lifestyle, and hospitality brands looking for authentic travel content.",
    pricing: "₦150,000 - ₦400,000 per trip",
    deliverables: ["Daily travel vlogs", "Destination photography", "Product integration", "Travel guide content"],
  },
]

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        }),
      })

      if (response.ok) {
        alert("Message sent successfully! I'll get back to you within 24 hours.")
        setContactForm({ name: "", email: "", message: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const navigateToPage = (page: string) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handleWorkWithMe = (brandName: string) => {
    const subject = `Collaboration Inquiry - ${brandName} Style Partnership`
    const body = `Hi Sarah,

I'm interested in collaborating with you for a project similar to your work with ${brandName}. 

Could we schedule a call to discuss the details?

Best regards,`

    const mailtoUrl = `mailto:hello@sarah.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl, "_blank")
  }

  const handleGetQuote = (serviceName: string) => {
    const subject = `Service Inquiry - ${serviceName}`
    const body = `Hi Sarah,

I'm interested in your ${serviceName} service. Could you please provide me with:

1. Detailed pricing information
2. Timeline for delivery
3. Available dates for the project

Looking forward to hearing from you!

Best regards,`

    const mailtoUrl = `mailto:hello@sarah.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl, "_blank")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-pink-600 mx-auto mb-4" />
          <p className="text-gray-700 text-lg">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  if (currentPage === "reviews") {
    return <ReviewsPage onBack={() => navigateToPage("home")} />
  }

  if (currentPage === "vlogs") {
    return <VlogsPage onBack={() => navigateToPage("home")} />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pink-600">Sarah's Portfolio</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("vlogs")}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Vlogs
              </button>
              <button
                onClick={() => scrollToSection("brands")}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Brands
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="block w-full text-left py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("vlogs")}
                className="block w-full text-left py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                Vlogs
              </button>
              <button
                onClick={() => scrollToSection("brands")}
                className="block w-full text-left py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                Brands
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Sarah - Social Media Manager"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg animate-fade-in-up"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Hey, I'm <span className="text-pink-600">Sarah</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up">
              Social Media Manager & Content Creator
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Creating authentic content around beauty, wellness, and lifestyle. Helping brands connect with their
              audience through genuine storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-pink-600">Let's Work Together</DialogTitle>
                    <DialogDescription>Send me a message and I'll get back to you within 24 hours.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-pink-600 hover:bg-pink-700">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50"
                onClick={() => scrollToSection("reviews")}
              >
                <Camera className="mr-2 h-4 w-4" />
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Sarah in her creative space"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6 animate-fade-in-right">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">An old soul (24 years old)</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2 text-pink-600" />
                    <span>Based in Uyo, Akwa Ibom State, Nigeria</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">What I Love Doing:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Content creation (vlogging, sharing life experiences)</li>
                    <li>• Hair care (locs, hair care rituals, styles, tips, and tricks)</li>
                    <li>• Exploring health and wellness practices (fitness, mindfulness)</li>
                    <li>• Cooking and sharing healthy recipes</li>
                    <li>• Food tasting (trying new recipes at restaurants)</li>
                    <li>• Traveling (mostly mid-year)</li>
                    <li>• A dog and cat lover 🐕🐱</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Languages:</h4>
                  <p className="text-gray-600">Fluent in English, Ibibio, introductory Korean</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">I'm Into:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Self-care",
                      "Wellness",
                      "Beauty",
                      "Natural hair",
                      "Exploring flavors",
                      "Community building",
                      "Self-love",
                      "Creativity",
                    ].map((interest) => (
                      <Badge key={interest} variant="secondary" className="bg-pink-100 text-pink-700">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">My Skills & Expertise</h2>
            <p className="text-center text-gray-600 mb-12">
              Specialized skills that help brands connect authentically with their audience
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sponsored Content",
                  description: "Creating authentic brand partnerships that feel natural and engaging",
                  icon: <Heart className="h-8 w-8" />,
                  color: "bg-pink-100 text-pink-600",
                  level: 95,
                },
                {
                  title: "Honest & Relatable Reviews",
                  description: "Providing genuine product insights that audiences trust and value",
                  icon: <Star className="h-8 w-8" />,
                  color: "bg-yellow-100 text-yellow-600",
                  level: 90,
                },
                {
                  title: "Product Photography & Videography",
                  description: "Professional visual content creation for marketing purposes",
                  icon: <Camera className="h-8 w-8" />,
                  color: "bg-purple-100 text-purple-600",
                  level: 88,
                },
                {
                  title: "Tutorials & Guides",
                  description: "Educational content on skincare, hair care, cooking, and wellness practices",
                  icon: <Video className="h-8 w-8" />,
                  color: "bg-blue-100 text-blue-600",
                  level: 92,
                },
                {
                  title: "Event Hosting & Promotion",
                  description: "Professional event management and promotional campaigns",
                  icon: <Users className="h-8 w-8" />,
                  color: "bg-green-100 text-green-600",
                  level: 85,
                },
                {
                  title: "Brand Recipe Development & Marketing",
                  description: "Custom recipe creation and comprehensive marketing strategies",
                  icon: <Globe className="h-8 w-8" />,
                  color: "bg-orange-100 text-orange-600",
                  level: 87,
                },
                {
                  title: "Travel Content",
                  description: "Destination-based content featuring brands and products authentically",
                  icon: <MapPin className="h-8 w-8" />,
                  color: "bg-indigo-100 text-indigo-600",
                  level: 89,
                },
              ].map((skill, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up border-0 bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${skill.color}`}>{skill.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-900 mb-2">{skill.title}</CardTitle>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed">
                          {skill.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Proficiency</span>
                        <span className="text-sm font-bold text-pink-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 200 + 500}ms`,
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Me?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">3+</div>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
                    <p className="text-gray-600">Successful Campaigns</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">My Services</h2>
            <p className="text-center text-gray-600 mb-12">RATE CARDS ARE AVAILABLE FOR ALL SERVICES</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card
                      className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-pink-100 rounded-lg text-pink-600">{service.icon}</div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">{service.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-pink-600 flex items-center">
                        <div className="p-2 bg-pink-100 rounded-lg text-pink-600 mr-3">{service.icon}</div>
                        {service.title}
                      </DialogTitle>
                      <DialogDescription>{service.details}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-pink-600 mb-2">Pricing</h4>
                        <p className="text-gray-700">{service.pricing}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-600 mb-2">What You Get</h4>
                        <ul className="space-y-1 text-gray-600">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        className="w-full bg-pink-600 hover:bg-pink-700"
                        onClick={() => handleGetQuote(service.title)}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Get Quote
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Product Reviews & Content</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Skincare Product Review", type: "Reviews" },
                { title: "Get Ready With Me - Evening Look", type: "GRWM" },
                { title: "Beauty Box Unboxing", type: "Unboxing" },
              ].map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-pink-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Play className="h-12 w-12 text-pink-600 bg-white/80 rounded-full p-2" />
                    </div>
                    <video
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg?height=200&width=300"
                      preload="none"
                    >
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 bg-pink-100 text-pink-700">
                      {video.type}
                    </Badge>
                    <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={() => navigateToPage("reviews")}
                className="bg-pink-600 hover:bg-pink-700 text-white"
                size="lg"
              >
                View More Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vlogs Section */}
      <section id="vlogs" className="py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">My Vlogs</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                "Daily Life Vlog",
                "Travel Adventures",
                "Wellness Journey",
                "Cooking Sessions",
                "Hair Care Routine",
                "Behind the Scenes",
              ].map((vlog, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-indigo-100">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Play className="h-12 w-12 text-purple-600 bg-white/80 rounded-full p-2" />
                    </div>
                    <video
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg?height=200&width=300"
                      preload="none"
                    >
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900">{vlog}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={() => navigateToPage("vlogs")}
                className="bg-purple-600 hover:bg-purple-700 text-white"
                size="lg"
              >
                View More Vlogs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-16 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Brands I Have Worked With</h2>

            <div className="space-y-12">
              {/* Home Brands */}
              <div className="animate-fade-in-up">
                <div className="flex items-center justify-center mb-8">
                  <Home className="h-6 w-6 mr-2 text-pink-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">HOME</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Hyperbeauty.cosmetics",
                      description:
                        "Premium beauty and cosmetics brand specializing in skincare and makeup products for the modern African woman.",
                      industry: "Beauty & Cosmetics",
                      collaboration: "Product Reviews & Sponsored Content",
                      contentTypes: [
                        "Product Review Videos",
                        "Sponsored Instagram Posts",
                        "Unboxing Content",
                        "Tutorial Videos",
                      ],
                      campaignResults: "150K+ reach, 12% engagement rate",
                      testimonial:
                        "Sarah's authentic approach to product reviews helped us connect with our target audience genuinely.",
                      contentUrl: "https://www.instagram.com/p/hyperbeauty-collab",
                    },
                    {
                      name: "Skeenlogic",
                      description:
                        "Innovative skincare brand focused on science-backed formulations for healthy, glowing skin.",
                      industry: "Skincare",
                      collaboration: "Brand Ambassador & Content Creator",
                      contentTypes: [
                        "Skincare Routine Videos",
                        "Before/After Content",
                        "Educational Posts",
                        "Live Demonstrations",
                      ],
                      campaignResults: "200K+ impressions, 8.5% conversion rate",
                      testimonial:
                        "Working with Sarah was amazing! Her detailed skincare content drove real results for our brand.",
                      contentUrl: "https://www.youtube.com/watch?v=skeenlogic-review",
                    },
                    {
                      name: "Kojiwhite",
                      description:
                        "Leading skin brightening and care brand offering safe, effective products for radiant skin.",
                      industry: "Skincare & Beauty",
                      collaboration: "Product Testing & Reviews",
                      contentTypes: [
                        "Product Testing Videos",
                        "Honest Reviews",
                        "Comparison Content",
                        "User Experience Posts",
                      ],
                      campaignResults: "95K+ views, 15% click-through rate",
                      testimonial:
                        "Sarah's honest reviews and detailed testing process built trust with our customers.",
                      contentUrl: "https://www.instagram.com/reel/kojiwhite-test",
                    },
                    {
                      name: "Universe",
                      description:
                        "Lifestyle and wellness brand promoting holistic health and natural beauty solutions.",
                      industry: "Wellness & Lifestyle",
                      collaboration: "Lifestyle Content & Brand Integration",
                      contentTypes: [
                        "Lifestyle Vlogs",
                        "Wellness Tips",
                        "Product Integration",
                        "Daily Routine Content",
                      ],
                      campaignResults: "180K+ reach, 11% engagement rate",
                      testimonial: "Sarah perfectly captured our brand's essence in her authentic lifestyle content.",
                      contentUrl: "https://www.youtube.com/watch?v=universe-lifestyle",
                    },
                  ].map((brand, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                          <Image
                            src="/placeholder.svg?height=80&width=120"
                            alt={brand.name}
                            width={120}
                            height={80}
                            className="mx-auto mb-3 opacity-70"
                          />
                          <p className="font-medium text-gray-900">{brand.name}</p>
                          <p className="text-sm text-pink-600 mt-1">View Details</p>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center space-x-4 mb-4">
                            <Image
                              src="/placeholder.svg?height=60&width=80"
                              alt={brand.name}
                              width={80}
                              height={60}
                              className="rounded-lg"
                            />
                            <div>
                              <DialogTitle className="text-pink-600 text-xl">{brand.name}</DialogTitle>
                              <Badge variant="outline" className="mt-1">
                                {brand.industry}
                              </Badge>
                            </div>
                          </div>
                          <DialogDescription className="text-gray-700 leading-relaxed">
                            {brand.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Users className="h-4 w-4 mr-2 text-pink-600" />
                              Collaboration Type
                            </h4>
                            <p className="text-gray-600">{brand.collaboration}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Video className="h-4 w-4 mr-2 text-pink-600" />
                              Content Created
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {brand.contentTypes.map((content, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="bg-pink-50 text-pink-700 justify-center"
                                >
                                  {content}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Star className="h-4 w-4 mr-2 text-pink-600" />
                              Campaign Results
                            </h4>
                            <p className="text-gray-600 bg-green-50 p-3 rounded-lg">{brand.campaignResults}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Heart className="h-4 w-4 mr-2 text-pink-600" />
                              Client Testimonial
                            </h4>
                            <blockquote className="text-gray-600 italic bg-gray-50 p-4 rounded-lg border-l-4 border-pink-600">
                              "{brand.testimonial}"
                            </blockquote>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button
                              className="flex-1 bg-pink-600 hover:bg-pink-700"
                              onClick={() => handleWorkWithMe(brand.name)}
                            >
                              <Mail className="mr-2 h-4 w-4" />
                              Work With Me
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 border-pink-600 text-pink-600 hover:bg-pink-50"
                              onClick={() => window.open(brand.contentUrl, "_blank")}
                            >
                              <Camera className="mr-2 h-4 w-4" />
                              View Content
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>

              <Separator />

              {/* International Brands */}
              <div className="animate-fade-in-up">
                <div className="flex items-center justify-center mb-8">
                  <Globe className="h-6 w-6 mr-2 text-pink-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">INTERNATIONAL</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Ksecret_Global",
                      description:
                        "Korean beauty brand bringing K-beauty innovations and skincare secrets to the global market.",
                      industry: "K-Beauty & Skincare",
                      collaboration: "International Brand Ambassador",
                      contentTypes: [
                        "K-Beauty Reviews",
                        "Skincare Routines",
                        "Cultural Content",
                        "Product Comparisons",
                      ],
                      campaignResults: "300K+ global reach, 18% engagement rate",
                      testimonial:
                        "Sarah's authentic approach to K-beauty content resonated perfectly with our international audience.",
                      contentUrl: "https://www.instagram.com/p/ksecret-kbeauty",
                    },
                    {
                      name: "Bubble",
                      description:
                        "Trendy skincare brand focused on fun, effective products for Gen Z and millennial consumers.",
                      industry: "Skincare & Beauty",
                      collaboration: "Content Creator & Influencer",
                      contentTypes: ["Fun Skincare Content", "Product Testing", "Trend Videos", "Educational Posts"],
                      campaignResults: "250K+ views, 22% engagement rate",
                      testimonial:
                        "Sarah brought such creativity and authenticity to our brand campaigns. Amazing results!",
                      contentUrl: "https://www.tiktok.com/@sarah/bubble-skincare",
                    },
                    {
                      name: "Benton Cosmetics",
                      description:
                        "Premium Korean cosmetics brand specializing in gentle, effective skincare solutions.",
                      industry: "Korean Cosmetics",
                      collaboration: "Product Review & Testing",
                      contentTypes: [
                        "Detailed Product Reviews",
                        "Ingredient Analysis",
                        "Routine Integration",
                        "Comparison Videos",
                      ],
                      campaignResults: "180K+ impressions, 14% conversion rate",
                      testimonial:
                        "Sarah's thorough product testing and honest reviews helped build trust with our customers.",
                      contentUrl: "https://www.youtube.com/watch?v=benton-review",
                    },
                    {
                      name: "Etude",
                      description:
                        "Playful Korean beauty brand offering colorful, innovative makeup and skincare products.",
                      industry: "K-Beauty & Makeup",
                      collaboration: "Creative Content Partnership",
                      contentTypes: ["Makeup Tutorials", "Creative Looks", "Product Showcases", "Trend Content"],
                      campaignResults: "400K+ reach, 25% engagement rate",
                      testimonial:
                        "Sarah's creative makeup content perfectly captured our brand's playful and innovative spirit.",
                      contentUrl: "https://www.instagram.com/reel/etude-makeup",
                    },
                  ].map((brand, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                          <Image
                            src="/placeholder.svg?height=80&width=120"
                            alt={brand.name}
                            width={120}
                            height={80}
                            className="mx-auto mb-3 opacity-70"
                          />
                          <p className="font-medium text-gray-900">{brand.name}</p>
                          <p className="text-sm text-pink-600 mt-1">View Details</p>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center space-x-4 mb-4">
                            <Image
                              src="/placeholder.svg?height=60&width=80"
                              alt={brand.name}
                              width={80}
                              height={60}
                              className="rounded-lg"
                            />
                            <div>
                              <DialogTitle className="text-pink-600 text-xl">{brand.name}</DialogTitle>
                              <Badge variant="outline" className="mt-1">
                                {brand.industry}
                              </Badge>
                            </div>
                          </div>
                          <DialogDescription className="text-gray-700 leading-relaxed">
                            {brand.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Users className="h-4 w-4 mr-2 text-pink-600" />
                              Collaboration Type
                            </h4>
                            <p className="text-gray-600">{brand.collaboration}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Video className="h-4 w-4 mr-2 text-pink-600" />
                              Content Created
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {brand.contentTypes.map((content, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="bg-pink-50 text-pink-700 justify-center"
                                >
                                  {content}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Star className="h-4 w-4 mr-2 text-pink-600" />
                              Campaign Results
                            </h4>
                            <p className="text-gray-600 bg-green-50 p-3 rounded-lg">{brand.campaignResults}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Heart className="h-4 w-4 mr-2 text-pink-600" />
                              Client Testimonial
                            </h4>
                            <blockquote className="text-gray-600 italic bg-gray-50 p-4 rounded-lg border-l-4 border-pink-600">
                              "{brand.testimonial}"
                            </blockquote>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button
                              className="flex-1 bg-pink-600 hover:bg-pink-700"
                              onClick={() => handleWorkWithMe(brand.name)}
                            >
                              <Mail className="mr-2 h-4 w-4" />
                              Work With Me
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 border-pink-600 text-pink-600 hover:bg-pink-50"
                              onClick={() => window.open(brand.contentUrl, "_blank")}
                            >
                              <Camera className="mr-2 h-4 w-4" />
                              View Content
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Let's Work Together</h2>
            <p className="text-lg text-gray-600 mb-12">
              Ready to create authentic content that resonates with your audience? Let's connect!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center animate-fade-in-up">
                <div className="p-4 bg-pink-100 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">hello@sarah.com</p>
              </div>
              <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <div className="p-4 bg-pink-100 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+234 xxx xxx xxxx</p>
              </div>
              <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="p-4 bg-pink-100 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Uyo, Akwa Ibom State</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6 animate-fade-in-up">
              {[
                { icon: <Instagram className="h-6 w-6" />, label: "Instagram", href: "#" },
                { icon: <Youtube className="h-6 w-6" />, label: "YouTube", href: "#" },
                { icon: <Twitter className="h-6 w-6" />, label: "Twitter", href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow text-pink-600 hover:text-pink-700"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sarah's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Reviews Page Component
function ReviewsPage({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const reviews = [
    { title: "Skincare Product Review", type: "Reviews", category: "Skincare", date: "2024-01-15", views: "12.5K" },
    { title: "Get Ready With Me - Evening Look", type: "GRWM", category: "Beauty", date: "2024-01-12", views: "8.2K" },
    { title: "Beauty Box Unboxing", type: "Unboxing", category: "Beauty", date: "2024-01-10", views: "15.3K" },
    { title: "Hair Care Routine Review", type: "Reviews", category: "Hair Care", date: "2024-01-08", views: "9.7K" },
    { title: "Morning GRWM - Natural Look", type: "GRWM", category: "Beauty", date: "2024-01-05", views: "11.1K" },
    { title: "Wellness Products Unboxing", type: "Unboxing", category: "Wellness", date: "2024-01-03", views: "6.8K" },
    { title: "Korean Skincare Review", type: "Reviews", category: "Skincare", date: "2024-01-01", views: "18.9K" },
    { title: "Holiday Makeup GRWM", type: "GRWM", category: "Beauty", date: "2023-12-28", views: "22.4K" },
    { title: "Fitness Equipment Unboxing", type: "Unboxing", category: "Wellness", date: "2023-12-25", views: "7.3K" },
  ]

  const categories = ["All", "Beauty", "Skincare", "Hair Care", "Wellness"]

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || review.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pink-600">Product Reviews & Content</h1>
            <Button onClick={onBack} variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              ← Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Product Reviews</h1>
          <p className="text-lg text-gray-600 mb-8">Honest reviews and authentic content you can trust</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-96">
                <Input
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={
                      selectedCategory === category
                        ? "bg-pink-600 hover:bg-pink-700"
                        : "border-pink-600 text-pink-600 hover:bg-pink-50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-pink-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Play className="h-12 w-12 text-pink-600 bg-white/80 rounded-full p-2" />
                    </div>
                    <video
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg?height=200&width=300"
                      preload="none"
                    >
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/90 text-gray-700">{review.views} views</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex gap-2 mb-2">
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                        {review.type}
                      </Badge>
                      <Badge variant="outline">{review.category}</Badge>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{review.title}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No reviews found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

// Vlogs Page Component
function VlogsPage({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const vlogs = [
    { title: "Daily Life Vlog", category: "Lifestyle", date: "2024-01-15", views: "25.3K", duration: "12:45" },
    { title: "Travel Adventures", category: "Travel", date: "2024-01-12", views: "18.7K", duration: "15:30" },
    { title: "Wellness Journey", category: "Wellness", date: "2024-01-10", views: "14.2K", duration: "10:20" },
    { title: "Cooking Sessions", category: "Food", date: "2024-01-08", views: "16.8K", duration: "18:15" },
    { title: "Hair Care Routine", category: "Beauty", date: "2024-01-05", views: "21.5K", duration: "8:30" },
    { title: "Behind the Scenes", category: "Lifestyle", date: "2024-01-03", views: "12.9K", duration: "14:10" },
    { title: "Weekend in Lagos", category: "Travel", date: "2024-01-01", views: "28.4K", duration: "20:45" },
    { title: "Healthy Recipe Testing", category: "Food", date: "2023-12-28", views: "19.6K", duration: "16:25" },
    { title: "Self-Care Sunday", category: "Wellness", date: "2023-12-25", views: "23.1K", duration: "11:50" },
  ]

  const categories = ["All", "Lifestyle", "Travel", "Wellness", "Food", "Beauty"]

  const filteredVlogs = vlogs.filter((vlog) => {
    const matchesSearch = vlog.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || vlog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-600">My Vlogs</h1>
            <Button onClick={onBack} variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              ← Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All My Vlogs</h1>
          <p className="text-lg text-gray-600 mb-8">
            Join me on my journey through life, travel, and everything in between
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-96">
                <Input
                  placeholder="Search vlogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={
                      selectedCategory === category
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "border-purple-600 text-purple-600 hover:bg-purple-50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vlogs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVlogs.map((vlog, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-indigo-100">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Play className="h-12 w-12 text-purple-600 bg-white/80 rounded-full p-2" />
                    </div>
                    <video
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg?height=200&width=300"
                      preload="none"
                    >
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/90 text-gray-700">{vlog.views} views</Badge>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-black/70 text-white">{vlog.duration}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline" className="border-purple-600 text-purple-600">
                        {vlog.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{vlog.title}</h3>
                    <p className="text-sm text-gray-500">{vlog.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredVlogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No vlogs found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
