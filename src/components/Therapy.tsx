
import { useState } from 'react';
import { Calendar, Clock, Users, Video, Heart, Star, Crown, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Therapy = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [isFamilyPlan, setIsFamilyPlan] = useState(false);

  const handleUpgrade = (plan: 'premium' | 'family') => {
    console.log('Initiating RevenueCat purchase flow...');
    // RevenueCat integration would go here
    if (plan === 'premium') {
      setIsPremium(true);
    } else if (plan === 'family') {
      setIsPremium(true);
      setIsFamilyPlan(true);
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Addiction Recovery Support Group',
      type: 'Group Therapy',
      time: 'Today, 3:00 PM',
      duration: '60 minutes',
      participants: 8,
      maxParticipants: 12,
      facilitator: 'Dr. Sarah Johnson',
      description: 'A safe space to share experiences and support each other in recovery.',
      isPremium: true
    },
    {
      id: 2,
      title: 'Family Healing Workshop',
      type: 'Family Therapy',
      time: 'Tomorrow, 10:00 AM',
      duration: '90 minutes',
      participants: 6,
      maxParticipants: 8,
      facilitator: 'Dr. Michael Chen',
      description: 'Learn healthy communication patterns and rebuild family relationships.',
      isPremium: true,
      isFamilyOnly: true
    },
    {
      id: 3,
      title: 'Mindful Recovery Meditation',
      type: 'Wellness',
      time: 'Friday, 6:00 PM',
      duration: '45 minutes',
      participants: 15,
      maxParticipants: 20,
      facilitator: 'Lisa Rodriguez',
      description: 'Guided meditation focused on recovery and inner peace.',
      isPremium: false
    }
  ];

  const therapists = [
    {
      id: 1,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Addiction Recovery',
      experience: '12 years',
      rating: 4.9,
      image: '/placeholder.svg',
      availability: 'Available today',
      sessionTypes: ['Individual', 'Family'],
      isPremium: true
    },
    {
      id: 2,
      name: 'Dr. James Thompson',
      specialty: 'Family Therapy',
      experience: '8 years',
      rating: 4.8,
      image: '/placeholder.svg',
      availability: 'Available tomorrow',
      sessionTypes: ['Family', 'Couples'],
      isPremium: true,
      isFamilySpecialist: true
    },
    {
      id: 3,
      name: 'Dr. Maria Santos',
      specialty: 'Trauma & PTSD',
      experience: '15 years',
      rating: 4.9,
      image: '/placeholder.svg',
      availability: 'Available this week',
      sessionTypes: ['Individual', 'Group'],
      isPremium: true
    }
  ];

  const familyResources = [
    {
      id: 1,
      title: 'Understanding Addiction: A Family Guide',
      type: 'Educational Guide',
      duration: '15 min read',
      description: 'Learn how addiction affects the entire family and how to provide support.',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Family Communication Workshop',
      type: 'Interactive Course',
      duration: '2 hours',
      description: 'Master healthy communication techniques for family recovery.',
      icon: Users
    },
    {
      id: 3,
      title: 'Setting Healthy Boundaries',
      type: 'Video Series',
      duration: '45 min',
      description: 'Learn to set and maintain healthy boundaries within your family.',
      icon: Heart
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Professional Therapy & Support</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with licensed therapists, join support groups, and access family therapy sessions
        </p>
      </div>

      {/* Plan Status */}
      {isFamilyPlan && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl">
          <div className="flex items-center justify-center space-x-2">
            <Crown className="w-5 h-5" />
            <span className="font-semibold">Family Premium Plan Active</span>
          </div>
        </div>
      )}

      {/* Family Progress Tracking (Family Plan Only) */}
      {isFamilyPlan && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-purple-500" />
              Family Progress Dashboard
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Active Family Members</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Family Sessions Completed</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">Family Engagement Score</div>
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Events */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events & Groups</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    {event.isPremium && (
                      <Crown className="w-4 h-4 text-yellow-500" />
                    )}
                    {event.isFamilyOnly && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        Family Plan
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {event.participants}/{event.maxParticipants}
                    </span>
                    <span>{event.facilitator}</span>
                  </div>
                </div>
                <div className="ml-4">
                  {event.isFamilyOnly && !isFamilyPlan ? (
                    <Button 
                      onClick={() => handleUpgrade('family')}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Upgrade to Family Plan
                    </Button>
                  ) : event.isPremium && !isPremium ? (
                    <Button 
                      onClick={() => handleUpgrade('premium')}
                      className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                    >
                      Upgrade to Join
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => console.log('Joining event', event.id)}
                      variant="outline"
                    >
                      Join Event
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Find a Therapist */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Therapist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapists.map((therapist) => (
            <div key={therapist.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src={therapist.image} 
                  alt={therapist.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    {therapist.name}
                    {therapist.isFamilySpecialist && (
                      <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        Family Specialist
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {therapist.rating} • {therapist.experience}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{therapist.specialty}</p>
              <p className="text-sm text-green-600 mb-3">{therapist.availability}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {therapist.sessionTypes.map((type) => (
                  <span key={type} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {type}
                  </span>
                ))}
              </div>
              {therapist.isFamilySpecialist && !isFamilyPlan ? (
                <Button 
                  onClick={() => handleUpgrade('family')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Upgrade for Family Sessions
                </Button>
              ) : therapist.isPremium && !isPremium ? (
                <Button 
                  onClick={() => handleUpgrade('premium')}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  Upgrade to Book
                </Button>
              ) : (
                <Button 
                  onClick={() => console.log('Book session with', therapist.name)}
                  className="w-full" 
                  variant="outline"
                >
                  Book Session
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Family Educational Resources (Family Plan Only) */}
      {isFamilyPlan && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-purple-500" />
            Family Educational Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {familyResources.map((resource) => (
              <div key={resource.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <resource.icon className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">{resource.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <Button variant="outline" className="w-full">
                  Access Resource
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Crisis Support */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center">
          <Heart className="w-5 h-5 mr-2" />
          Crisis Support
        </h2>
        <p className="text-red-700 mb-4">
          If you're experiencing a mental health crisis, immediate help is available 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-red-600 hover:bg-red-700">
            Crisis Hotline: 988
          </Button>
          <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
            Emergency Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Therapy;
