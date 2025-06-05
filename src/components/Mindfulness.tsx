
import { useState } from 'react';
import { BookOpen, Play, Pause, Clock, Star, Headphones } from 'lucide-react';

const Mindfulness = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSession, setCurrentSession] = useState(null);

  const meditations = [
    {
      id: 1,
      title: 'Morning Recovery Affirmations',
      duration: '10 min',
      category: 'Recovery',
      description: 'Start your day with positive affirmations for your recovery journey',
      difficulty: 'Beginner',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Anxiety Relief Breathing',
      duration: '15 min',
      category: 'Breathing',
      description: 'Calm your mind with guided breathing exercises',
      difficulty: 'Beginner',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Craving Management',
      duration: '20 min',
      category: 'Recovery',
      description: 'Techniques to manage and overcome cravings',
      difficulty: 'Intermediate',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Body Scan for Sleep',
      duration: '25 min',
      category: 'Sleep',
      description: 'Progressive relaxation to help you fall asleep peacefully',
      difficulty: 'Beginner',
      rating: 4.6
    }
  ];

  const breathingExercises = [
    {
      name: '4-7-8 Breathing',
      description: 'Inhale for 4, hold for 7, exhale for 8',
      duration: '5 min',
      benefits: 'Reduces anxiety and promotes sleep'
    },
    {
      name: 'Box Breathing',
      description: 'Equal counts for inhale, hold, exhale, hold',
      duration: '10 min',
      benefits: 'Improves focus and reduces stress'
    },
    {
      name: 'Coherent Breathing',
      description: 'Slow, rhythmic breathing at 5 breaths per minute',
      duration: '15 min',
      benefits: 'Balances nervous system'
    }
  ];

  const recentSessions = [
    { title: 'Morning Recovery Affirmations', date: 'Today', duration: '10 min' },
    { title: 'Anxiety Relief Breathing', date: 'Yesterday', duration: '15 min' },
    { title: 'Craving Management', date: '2 days ago', duration: '20 min' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-8 h-8 text-green-500" />
          <h2 className="text-3xl font-bold text-gray-800">Mindfulness & Meditation</h2>
        </div>
        <p className="text-gray-600">
          Find peace and strength through guided meditation and breathing exercises designed for recovery.
        </p>
      </div>

      {/* Daily Practice */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Today's Practice</h3>
        <p className="mb-4">12 minutes of mindfulness • Streak: 7 days</p>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <span className="text-sm">Goal: 30 min</span>
        </div>
      </div>

      {/* Quick Breathing Exercises */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Headphones className="w-5 h-5 mr-2 text-blue-500" />
          Quick Breathing Exercises
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {breathingExercises.map((exercise, index) => (
            <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-blue-800 mb-2">{exercise.name}</h4>
              <p className="text-sm text-blue-600 mb-2">{exercise.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-blue-500 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {exercise.duration}
                </span>
              </div>
              <p className="text-xs text-blue-600 mb-3">{exercise.benefits}</p>
              <button
                onClick={() => {
                  setCurrentSession(exercise);
                  setIsPlaying(!isPlaying);
                }}
                className="w-full flex items-center justify-center space-x-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {isPlaying && currentSession?.name === exercise.name ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                <span>Start</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Meditation Library */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Meditation Library</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meditations.map((meditation) => (
            <div key={meditation.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{meditation.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {meditation.duration}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-500" />
                      {meditation.rating}
                    </span>
                  </div>
                  <div className="flex space-x-2 mb-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {meditation.category}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {meditation.difficulty}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setCurrentSession(meditation);
                    setIsPlaying(!isPlaying);
                  }}
                  className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  {isPlaying && currentSession?.id === meditation.id ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-1" />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-600">{meditation.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Sessions</h3>
        <div className="space-y-3">
          {recentSessions.map((session, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">{session.title}</h4>
                <p className="text-sm text-gray-600">{session.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">{session.duration}</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mindfulness Tips */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Mindfulness Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Morning Practice</h4>
            <p className="text-yellow-700 text-sm">
              Start each day with 5 minutes of deep breathing. It sets a peaceful tone for recovery.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Craving Response</h4>
            <p className="text-green-700 text-sm">
              When cravings arise, pause and take 10 deep breaths. This creates space between impulse and action.
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">Evening Wind-Down</h4>
            <p className="text-purple-700 text-sm">
              End your day with gratitude meditation. Reflect on three things you're grateful for in recovery.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Stress Management</h4>
            <p className="text-blue-700 text-sm">
              Use the 4-7-8 breathing technique during stressful moments to activate your body's relaxation response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mindfulness;
