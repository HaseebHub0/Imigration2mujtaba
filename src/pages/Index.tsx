import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import permResidence from '/perm residence.webp';
import statusResidence from '/status residence.jpeg';
import rcicMentorship from '/rcic.jpeg';
import {
  Star,
  MapPin,
  Phone,
  Video,
  Users,
  Award,
  CheckCircle,
  Clock,
  FileText,
  Plane,
  GraduationCap,
  Heart,
  Eye,
  Search,
  MessageCircle,
  Trophy,
  Shield,
  Globe,
  ArrowRight,
  Calendar,
  CheckCircle2,
  TrendingUp,
  UserCheck,
  BookOpen,
  Headphones,
  Zap,
  Camera
} from 'lucide-react';
import mujtabaHeadshot from '@/assets/Mujtaba.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Mujtaba Sarwar</h1>
                <p className="text-sm text-muted-foreground">RCIC #R712505</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button className="btn-primary">
                <Phone className="mr-2 h-4 w-4" />
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dedicated Hero Section */}
      <section className="bg-gradient-hero relative overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="https://player.vimeo.com/external/4262794.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6a&profile_id=174" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"></div>
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Your Canadian Dream <br></br> Starts Here
                
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Expert immigration guidance with transparent assessment.
                <span className="font-semibold text-white"><br></br>Free 30-minute consultations</span> for qualified cases.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="btn-accent group h-16 text-xl px-12">
                <Plane className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" className="border-white text-primary hover:bg-white hover:text-primary h-16 text-xl px-12">
                <Calendar className="mr-3 h-6 w-6" />
                Book Free Call
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
              <div className="text-center trust-signal stagger-1">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">8+</div>
                <div className="text-white/80 font-medium">Years Experience</div>
              </div>
              <div className="text-center trust-signal stagger-2">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">80%+</div>
                <div className="text-white/80 font-medium">Success Rate</div>
              </div>
              <div className="text-center trust-signal stagger-3">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 font-medium">Cases Won</div>
              </div>
              <div className="text-center trust-signal stagger-4">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">4.9★</div>
                <div className="text-white/80 font-medium">Client Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float-delay"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg pulse-glow"></div>
      </section>

      {/* About Section with Headshot */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Headshot */}
            <div className="flex justify-center lg:justify-start fade-in">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 group-hover:opacity-30 transition-all duration-500 blur-xl"></div>
                <img
                  src={mujtabaHeadshot}
                  alt="Mujtaba Sarwar - Canadian Immigration Consultant"
                  className="relative w-100 h-100 object-cover rounded-2xl shadow-card-hover transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-accent badge-float">
                  <div className="text-sm font-semibold">RCIC Licensed</div>
                  <div className="text-xs">#R712505</div>
                </div>
                <div className="absolute top-4 left-4 bg-primary/10 backdrop-blur-sm border border-primary/20 px-3 py-1 rounded-full">
                  <div className="text-xs text-primary font-medium flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 pulse-glow"></div>
                    Available Now
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enhanced Content */}
            <div className="space-y-8 fade-in fade-in-delay-1">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Meet Mujtaba Sarwar
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Licensed Canadian Immigration Consultant with over 8 years of experience helping families
                  achieve their Canadian dreams. Transparent, professional, and results-driven approach.
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold interactive-hover">
                    <Shield className="mr-2 h-4 w-4" />
                    RCIC License #R712505
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm font-semibold border-accent text-accent interactive-hover">
                    <Award className="mr-2 h-4 w-4" />
                    CICC Member
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary group h-14 text-lg">
                    <MessageCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Get Free Assessment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button className="btn-accent group h-14 text-lg">
                    <Phone className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Call Now
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Response within 24 hours • No hidden fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Globe className="mr-2 h-4 w-4" />
              Professional Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Immigration Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive immigration services with transparent pricing and proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Permanent Residency Services */}
            <Card className="card-hover fade-in fade-in-delay-1 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
              {/* Banner Image */}
              <div className="h-32 bg-cover bg-center relative" style={{backgroundImage: `url("https://sbnri.com/blog/wp-content/uploads/2022/05/PR-card.jpeg")`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 backdrop-blur-sm p-3 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors">
                    <Plane className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Permanent Residency</h3>
                    <p className="text-muted-foreground">Your path to Canadian citizenship</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center group/item">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-base">Express Entry</span>
                  </div>
                  <div className="flex items-center group/item">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-base">Provincial Nominee Program (PNP)</span>
                  </div>
                  <div className="flex items-center group/item">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-base">Category-Based Draws</span>
                  </div>
                </div>

                <div className="bg-gradient-subtle p-4 rounded-xl mb-6 border border-primary/10">
                  <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">$4,500</div>
                  <div className="text-muted-foreground font-medium text-sm">Complete service in 3 phases</div>
                  <div className="text-xs text-muted-foreground mt-1">✓ No hidden fees ✓ Success guarantee</div>
                </div>

                <Button className="btn-primary w-full group">
                  <span>Get Started</span>
                  <Trophy className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>

            {/* Status Services */}
            <Card className="card-hover fade-in fade-in-delay-2 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
              {/* Banner Image */}
              <div className="h-32 bg-cover bg-center relative" style={{backgroundImage: `url('https://www.twomads.com/uploads/1/4/6/2/146288433/filling-canadian-visa-application_orig.png')`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/10 backdrop-blur-sm p-3 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Status Services</h3>
                    <p className="text-muted-foreground">Maintain your legal status</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-colors duration-200 group/item">
                    <span className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm">PGWP</span>
                    </span>
                    <Badge variant="secondary" className="font-semibold text-xs">$1,500</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-colors duration-200 group/item">
                    <span className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm">Study Permits</span>
                    </span>
                    <Badge variant="secondary" className="font-semibold text-xs">$2,000</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-colors duration-200 group/item">
                    <span className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm">LMIA</span>
                    </span>
                    <Badge variant="secondary" className="font-semibold text-xs">$5,000</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-colors duration-200 group/item">
                    <span className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm">Spousal Sponsorship</span>
                    </span>
                    <Badge variant="secondary" className="font-semibold text-xs">$3,500</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-colors duration-200 group/item">
                    <span className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm">Visitor Records</span>
                    </span>
                    <Badge variant="secondary" className="font-semibold text-xs">$800</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/5 transition-colors duration-200 group/item">
                    <span className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm">Application Reviews</span>
                    </span>
                    <Badge variant="secondary" className="font-semibold text-xs">$500</Badge>
                  </div>
                </div>

                <Button className="btn-primary w-full group">
                  <span>View All Services</span>
                  <Eye className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>

            {/* RCIC Mentorship Program */}
            <Card className="card-hover fade-in fade-in-delay-3 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
              {/* Banner Image */}
              <div className="h-32 bg-cover bg-center relative" style={{backgroundImage: `url(${rcicMentorship})`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/10 backdrop-blur-sm p-3 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <GraduationCap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">RCIC Mentorship</h3>
                    <p className="text-muted-foreground">Guidance for new consultants</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center group/item">
                    <CheckCircle2 className="h-5 w-5 text-[#63a67b] mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-base">Case Strategy</span>
                  </div>
                  <div className="flex items-center group/item">
                    <CheckCircle2 className="h-5 w-5 text-[#63a67b] mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-base">Business Setup</span>
                  </div>
                  <div className="flex items-center group/item">
                    <CheckCircle2 className="h-5 w-5 text-[#63a67b] mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-base">Professional Development</span>
                  </div>
                </div>

                <div className="bg-gradient-subtle p-4 rounded-xl mb-6 border border-yellow-500/10">
                  <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">$2,500</div>
                  <div className="text-muted-foreground font-medium text-sm">3-month comprehensive program</div>
                  <div className="text-xs text-muted-foreground mt-1">✓ One-on-one mentoring ✓ Business guidance</div>
                </div>

                <Button className="btn-primary w-full group">
                  <span>Learn More</span>
                  <GraduationCap className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Section */}
      <section id="about" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Mujtaba</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Licensed professional with proven track record and transparent approach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="fade-in fade-in-delay-1">
              <div className="aspect-video rounded-xl shadow-card relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/TTShPU3Bm7A"
                  title="Why Choose Mujtaba - Introduction Video"
                  className="w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Enhanced Credentials and Bio */}
            <div className="space-y-8 fade-in fade-in-delay-2">
              <div>
                <h3 className="text-2xl font-bold mb-6">Licensed & Certified</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-border/50">
                    <Badge className="bg-primary text-primary-foreground mr-4">RCIC</Badge>
                    <div>
                      <div className="font-semibold">Regulated Canadian Immigration Consultant</div>
                      <div className="text-sm text-muted-foreground">License #R712505</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-border/50">
                    <Badge className="bg-accent text-accent-foreground mr-4">CICC</Badge>
                    <div>
                      <div className="font-semibold">College of Immigration and Citizenship Consultants</div>
                      <div className="text-sm text-muted-foreground">Professional Member</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">About Mujtaba</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 8 years of experience in Canadian immigration law, Mujtaba Sarwar has successfully guided hundreds of clients through their immigration journey. Based in Mississauga, Ontario, he provides personalized service with a commitment to transparency and results.
                </p>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Mississauga, Ontario, Canada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step process to achieve your Canadian immigration goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in fade-in-delay-1 group">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Search className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 1: Assessment</h3>
              <p className="text-muted-foreground mb-6">
                Take our comprehensive eligibility quiz to understand your options
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                Take the Quiz
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="text-center fade-in fade-in-delay-2 group">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 2: Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Free 30-minute consultation to discuss your personalized strategy
              </p>
              <Button className="btn-primary group">
                Book Free Call
                <Calendar className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </div>

            <div className="text-center fade-in fade-in-delay-3 group">
              <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 3: Success</h3>
              <p className="text-muted-foreground mb-6">
                Professional application filing with ongoing support until approval
              </p>
              <Button className="btn-accent group">
                Get Started
                <Zap className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Success Stories</h2>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.9 out of 5</span>
            </div>
            <p className="text-muted-foreground flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Based on 120+ Google Reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Sarah Chen",
                rating: 5,
                comment: "Mujtaba made my PR application seamless. His expertise and guidance were invaluable throughout the entire process.",
                service: "Permanent Residency"
              },
              {
                name: "Ahmed Hassan",
                rating: 5,
                comment: "Professional, knowledgeable, and always responsive. Got my PGWP extension approved within weeks!",
                service: "PGWP Extension"
              },
              {
                name: "Maria Rodriguez",
                rating: 5,
                comment: "Transparent pricing and excellent results. Highly recommend for anyone serious about Canadian immigration.",
                service: "Express Entry"
              }
            ].map((review, index) => (
              <Card key={index} className="card-hover fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="font-semibold text-primary">{review.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.service}</div>
                      <div className="flex mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center fade-in fade-in-delay-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Eye className="mr-2 h-4 w-4" />
              View All Reviews on Google
            </Button>
          </div>
        </div>
      </section>

      {/* Blogs & News Updates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Blogs & News</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest immigration news, policy changes, and expert insights.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Blog Post 1 */}
            <Card className="card-hover fade-in fade-in-delay-1 group relative overflow-hidden">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://i0.wp.com/www.canadafornewbies.com/wp-content/uploads/2020/12/Express-Entry-Draw-feature.png?w=940&ssl=1')`}}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="text-xs">News</Badge>
                  <span className="text-xs text-muted-foreground ml-2">Dec 15, 2024</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  New Express Entry Draw Results - December 2024
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Latest CRS scores and invitation numbers for all Express Entry categories...
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="card-hover fade-in fade-in-delay-2 group relative overflow-hidden">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://ekannimmigration.com/wp-content/uploads/2022/04/Post-Graduation-Work-Permit.jpg')`}}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="text-xs">Guide</Badge>
                  <span className="text-xs text-muted-foreground ml-2">Dec 12, 2024</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Complete Guide to PGWP Extension 2024
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Everything you need to know about extending your Post-Graduation Work Permit...
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="card-hover fade-in fade-in-delay-3 group relative overflow-hidden">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://www.canadavisa.com/storage/images/canada-pnp.jpg')`}}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="text-xs">Policy</Badge>
                  <span className="text-xs text-muted-foreground ml-2">Dec 10, 2024</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  PNP Updates: Ontario Invites 1,200 Candidates
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Ontario Provincial Nominee Program latest draw results and requirements...
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 4 */}
            <Card className="card-hover fade-in fade-in-delay-4 group relative overflow-hidden">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://www.immigrations.com.sg/wp-content/uploads/2017/10/Why-Is-Your-PR-Application-Rejected.jpg')`}}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="text-xs">Tips</Badge>
                  <span className="text-xs text-muted-foreground ml-2">Dec 8, 2024</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  5 Common PR Application Mistakes to Avoid
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn from our experience: avoid these costly mistakes in your PR application...
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post 6 */}
            <Card className="card-hover fade-in fade-in-delay-6 group relative overflow-hidden">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url('https://www.cicnews.com/wp-content/uploads/2018/08/permanent-residence-application-canada-ircc.jpg')`}}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="text-xs">Update</Badge>
                  <span className="text-xs text-muted-foreground ml-2">Dec 3, 2024</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  IRCC Processing Times Update - December 2024
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Latest processing times for all immigration applications and what to expect...
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action for Blogs */}
          <div className="text-center fade-in fade-in-delay-7">
            <p className="text-muted-foreground mb-6">
              Stay informed with the latest immigration updates. Subscribe to our newsletter for expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button className="btn-primary group">
                <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                View All Blogs
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="mr-2 h-5 w-5" />
                Subscribe Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final Call to Action */}
      <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Canadian Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Limited weekly slots available. Get expert guidance for your Canadian immigration journey.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Phone className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-2">Phone Consultation</h3>
                <p className="text-primary-foreground/80 text-sm">Direct call with immediate response</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Video className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-2">Video Call</h3>
                <p className="text-primary-foreground/80 text-sm">Face-to-face consultation online</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-2">In-Person</h3>
                <p className="text-primary-foreground/80 text-sm">Visit our Mississauga office</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-8">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-lg">
                <Search className="mr-2 h-5 w-5" />
                Take the Eligibility Quiz
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary w-full sm:w-auto text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>

            <div className="flex justify-center space-x-8 text-primary-foreground/80">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>24/7 Response</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Licensed RCIC</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Success Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;