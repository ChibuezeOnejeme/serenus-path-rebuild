
import { useState } from 'react';
import { Heart, Shield, Users, Brain, Calendar, Star, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LandingPageProps {
  onShowAuth: (type: 'signin' | 'signup') => void;
}

const LandingPage = ({ onShowAuth }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                zapAid
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onShowAuth('signin')}>
                Sign In
              </Button>
              <Button onClick={() => onShowAuth('signup')} className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Your Path to
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Recovery</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive mental health and addiction recovery support combining therapy, mindfulness, 
            mood tracking, and community support - all in one beautiful, calming platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onShowAuth('signup')}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-lg px-8 py-3"
            >
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need for Recovery</h3>
            <p className="text-lg text-gray-600">Comprehensive tools designed to support your mental health journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Professional Therapy',
                description: 'Connect with licensed therapists specialized in addiction recovery and mental health.',
                premium: true
              },
              {
                icon: Brain,
                title: 'Mood Tracking',
                description: 'Track your emotional well-being with intelligent insights and personalized recommendations.'
              },
              {
                icon: Heart,
                title: 'Recovery Programs',
                description: 'Structured programs with milestones, progress tracking, and community support.'
              },
              {
                icon: Calendar,
                title: 'Mindfulness & Meditation',
                description: 'Guided meditation sessions, breathing exercises, and mindfulness practices.'
              },
              {
                icon: Shield,
                title: 'Crisis Support',
                description: '24/7 emergency support and immediate access to crisis intervention resources.'
              },
              {
                icon: Star,
                title: 'Community Events',
                description: 'Join group sessions, workshops, and support meetings with others on similar journeys.',
                premium: true
              }
            ].map((feature, index) => (
              <div key={index} className="relative p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 hover:shadow-lg transition-shadow">
                {feature.premium && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    Premium
                  </div>
                )}
                <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h3>
            <p className="text-lg text-gray-600">Start your recovery journey with the plan that's right for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: 'Free',
                description: 'Essential tools for your recovery journey',
                features: [
                  'Mood tracking',
                  'Basic meditation content',
                  'Recovery milestones',
                  'Crisis support access',
                  'Community forums'
                ]
              },
              {
                name: 'Premium',
                price: '$29/month',
                description: 'Complete recovery support with professional guidance',
                features: [
                  'Everything in Basic',
                  'Unlimited therapy sessions',
                  'Group therapy events',
                  'Personalized recovery plans',
                  'Advanced analytics',
                  'Priority support'
                ],
                popular: true
              },
              {
                name: 'Family',
                price: '$49/month',
                description: 'Support for you and your loved ones',
                features: [
                  'Everything in Premium',
                  'Family therapy sessions',
                  'Multiple user accounts',
                  'Family progress tracking',
                  'Educational resources',
                  'Dedicated family support'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-xl border ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-500 to-green-500 text-white border-transparent' 
                  : 'bg-white/80 backdrop-blur-sm border-white/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h4>
                  <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </div>
                  <p className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-white text-blue-600 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white'
                  }`}
                  onClick={() => onShowAuth('signup')}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">zapAid</span>
              </div>
              <p className="text-gray-400">
                Supporting your journey to mental wellness and recovery.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Features</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Therapy Sessions</li>
                <li>Mood Tracking</li>
                <li>Recovery Programs</li>
                <li>Mindfulness</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Crisis Resources</li>
                <li>Contact Us</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 zapAid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
