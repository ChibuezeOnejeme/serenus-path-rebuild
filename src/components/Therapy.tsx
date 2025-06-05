
import { useState } from 'react';
import { Users, Calendar, MessageCircle, Video, Clock, Star } from 'lucide-react';

const Therapy = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  const therapists = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialty: 'Addiction Recovery & Trauma',
      rating: 4.9,
      experience: '12 years',
      image: '👩‍⚕️',
      available: true,
      nextSlot: 'Tomorrow 2:00 PM'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Cognitive Behavioral Therapy',
      rating: 4.8,
      experience: '8 years',
      image: '👨‍⚕️',
      available: true,
      nextSlot: 'Friday 10:00 AM'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Mindfulness & Recovery',
      rating: 4.9,
      experience: '10 years',
      image: '👩‍⚕️',
      available: false,
      nextSlot: 'Next week'
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

  const recentSessions = [
    {
      therapist: 'Dr. Sarah Mitchell',
      date: 'Last Tuesday',
      duration: '60 minutes',
      notes: 'Discussed triggers and developed new coping strategies. Made great progress.',
      rating: 5
    },
    {
      therapist: 'Dr. Sarah Mitchell',
      date: 'Last Friday',
      duration: '60 minutes',
      notes: 'Focused on mindfulness techniques and stress management.',
      rating: 5
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="w-8 h-8 text-blue-500" />
          <h2 className="text-3xl font-bold text-gray-800">Therapy Sessions</h2>
        </div>
        <p className="text-gray-600">
          Connect with licensed therapists specialized in addiction recovery and mental health.
        </p>
      </div>

      {/* Upcoming Sessions */}
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
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Join Call
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Reschedule
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-700">{session.notes}</p>
            </div>
          ))}
        </div>
      </div>

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
                  <h4 className="font-semibold text-gray-800">{therapist.name}</h4>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{therapist.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{therapist.specialty}</p>
              <p className="text-xs text-gray-500 mb-3">{therapist.experience} experience</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  therapist.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {therapist.available ? 'Available' : 'Busy'}
                </span>
                <span className="text-xs text-gray-500">{therapist.nextSlot}</span>
              </div>
              <button className="w-full mt-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-purple-500" />
          Recent Sessions
        </h3>
        <div className="space-y-4">
          {recentSessions.map((session, index) => (
            <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-800">{session.therapist}</h4>
                  <p className="text-sm text-gray-600">{session.date} • {session.duration}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < session.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">{session.notes}</p>
              <button className="mt-2 text-sm text-purple-600 hover:text-purple-800">
                View Session Notes
              </button>
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
          <button className="px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Crisis Chat Now
          </button>
          <button className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors">
            Call 988
          </button>
        </div>
      </div>
    </div>
  );
};

export default Therapy;
