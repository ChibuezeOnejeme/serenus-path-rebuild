
import { useState } from 'react';
import { Users, Calendar, MessageCircle, Video, Clock, Star, Crown, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Therapy = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isPremium, setIsPremium] = useState(false); // This would come from RevenueCat

  const therapists = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialty: 'Addiction Recovery & Trauma',
      rating: 4.9,
      experience: '12 years',
      image: '👩‍⚕️',
      available: true,
      nextSlot: 'Tomorrow 2:00 PM',
      premium: true
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Cognitive Behavioral Therapy',
      rating: 4.8,
      experience: '8 years',
      image: '👨‍⚕️',
      available: true,
      nextSlot: 'Friday 10:00 AM',
      premium: true
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Mindfulness & Recovery',
      rating: 4.9,
      experience: '10 years',
      image: '👩‍⚕️',
      available: false,
      nextSlot: 'Next week',
      premium: true
    }
  ];

  const groupEvents = [
    {
      id: 1,
      title: 'Daily Recovery Check-in',
      type: 'Support Group',
      time: 'Today 9:00 AM',
      duration: '30 minutes',
      participants: 12,
      maxParticipants: 15,
      facilitator: 'Dr. Sarah Mitchell',
      description: 'Start your day with a supportive group check-in',
      premium: false
    },
    {
      id: 2,
      title: 'CBT Workshop: Managing Triggers',
      type: 'Workshop',
      time: 'Tomorrow 3:00 PM',
      duration: '90 minutes',
      participants: 8,
      maxParticipants: 10,
      facilitator: 'Dr. Michael Chen',
      description: 'Learn practical techniques for identifying and managing triggers',
      premium: true
    },
    {
      id: 3,
      title: 'Mindful Recovery Session',
      type: 'Meditation',
      time: 'Friday 7:00 PM',
      duration: '45 minutes',
      participants: 20,
      maxParticipants: 25,
      facilitator: 'Dr. Emily Rodriguez',
      description: 'Guided meditation session focused on recovery and healing',
      premium: true
    },
    {
      id: 4,
      title: 'Family Support Circle',
      type: 'Family Session',
      time: 'Saturday 11:00 AM',
      duration: '60 minutes',
      participants: 6,
      maxParticipants: 8,
      facilitator: 'Dr. Sarah Mitchell',
      description: 'Support session for family members of those in recovery',
      premium: true
    }
  ];

  const upcomingSessions = [
    {
      therapist: 'Dr. Sarah Mitchell',
      date: 'Tomorrow',
      time: '2:00 PM - 3:00 PM',
      type: 'Video Call',
      notes: 'Continue working on coping strategies'
    },
    {
      therapist: 'Dr. Sarah Mitchell',
      date: 'Friday',
      time: '2:00 PM - 3:00 PM',
      type: 'Video Call',
      notes: 'Review progress and goals'
    }
  ];

  const handleUpgradeToPremium = () => {
    // This would integrate with RevenueCat
    console.log('Initiating RevenueCat purchase flow...');
    // For demo purposes, we'll just toggle the premium state
    setIsPremium(true);
  };

  const handleJoinEvent = (eventId: number) => {
    const event = groupEvents.find(e => e.id === eventId);
    if (event?.premium && !isPremium) {
      handleUpgradeToPremium();
      return;
    }
    // Join event logic
    console.log(`Joining event ${eventId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-blue-500" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Therapy Sessions</h2>
              <p className="text-gray-600">Connect with licensed therapists and join support groups</p>
            </div>
          </div>
          {!isPremium && (
            <Button 
              onClick={handleUpgradeToPremium}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
            >
              <Crown className="w-4 h-4 mr-2" />
              Upgrade to Premium
            </Button>
          )}
        </div>
      </div>

      {/* Premium Features Banner */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Crown className="w-5 h-5 mr-2" />
                Unlock Premium Therapy Features
              </h3>
              <p className="mb-4">
                Get unlimited access to licensed therapists, group events, and personalized recovery plans.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Unlimited 1-on-1 therapy sessions</li>
                <li>• Access to group therapy events</li>
                <li>• Priority booking and support</li>
                <li>• Personalized recovery programs</li>
              </ul>
            </div>
            <Button 
              onClick={handleUpgradeToPremium}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      )}

      {/* Group Events */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-green-500" />
          Upcoming Group Events
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groupEvents.map((event) => (
            <div
              key={event.id}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    {event.title}
                    {event.premium && (
                      <Crown className="w-4 h-4 ml-2 text-yellow-500" />
                    )}
                  </h4>
                  <p className="text-sm text-gray-600">{event.type}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {event.participants}/{event.maxParticipants}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time} • {event.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  Facilitated by {event.facilitator}
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">{event.description}</p>
              
              <Button
                onClick={() => handleJoinEvent(event.id)}
                disabled={event.participants >= event.maxParticipants}
                className={`w-full ${
                  event.premium && !isPremium
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {event.premium && !isPremium ? (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Upgrade to Join
                  </>
                ) : event.participants >= event.maxParticipants ? (
                  'Event Full'
                ) : (
                  'Join Event'
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      {isPremium && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            Upcoming Sessions
          </h3>
          <div className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{session.therapist}</h4>
                      <p className="text-sm text-gray-600">{session.date} • {session.time}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="bg-green-500 text-white hover:bg-green-600">
                      Join Call
                    </Button>
                    <Button variant="outline">
                      Reschedule
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{session.notes}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Find a Therapist */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Find a Therapist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedTherapist(therapist)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-3xl">{therapist.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    {therapist.name}
                    <Crown className="w-4 h-4 ml-2 text-yellow-500" />
                  </h4>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{therapist.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{therapist.specialty}</p>
              <p className="text-xs text-gray-500 mb-3">{therapist.experience} experience</p>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  therapist.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {therapist.available ? 'Available' : 'Busy'}
                </span>
                <span className="text-xs text-gray-500">{therapist.nextSlot}</span>
              </div>
              <Button 
                className={`w-full ${
                  !isPremium 
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isPremium) {
                    handleUpgradeToPremium();
                  } else {
                    console.log('Book session with', therapist.name);
                  }
                }}
              >
                {!isPremium ? (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Upgrade to Book
                  </>
                ) : (
                  'Book Session'
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Crisis Support */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MessageCircle className="w-5 h-5 mr-2" />
          Need Immediate Support?
        </h3>
        <p className="mb-4">
          If you're experiencing a crisis or need immediate help, don't wait for your next session.
        </p>
        <div className="flex space-x-3">
          <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
            Crisis Chat Now
          </Button>
          <Button className="bg-red-700 text-white hover:bg-red-800">
            Call 988
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Therapy;
