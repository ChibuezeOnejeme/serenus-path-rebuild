
import { Calendar, TrendingUp, Heart, Brain, BookOpen, Award } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back, Alex
            </h2>
            <p className="text-gray-600">
              You're doing great on your wellness journey. Here's your progress today.
            </p>
          </div>
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-green-600">127</span>
          </div>
          <h3 className="font-semibold text-gray-800">Days Sober</h3>
          <p className="text-sm text-gray-600">Keep going strong!</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <Brain className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold text-blue-600">7.2</span>
          </div>
          <h3 className="font-semibold text-gray-800">Mood Average</h3>
          <p className="text-sm text-gray-600">This week</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-purple-600">12</span>
          </div>
          <h3 className="font-semibold text-gray-800">Meditation</h3>
          <p className="text-sm text-gray-600">Minutes today</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold text-orange-600">3</span>
          </div>
          <h3 className="font-semibold text-gray-800">Milestones</h3>
          <p className="text-sm text-gray-600">This month</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Mood Entries</h3>
          <div className="space-y-3">
            {[
              { date: 'Today', mood: 8, note: 'Feeling optimistic about the future' },
              { date: 'Yesterday', mood: 7, note: 'Good therapy session' },
              { date: '2 days ago', mood: 6, note: 'Challenging day but stayed strong' },
            ].map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50/50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">{entry.date}</div>
                  <div className="text-sm text-gray-600">{entry.note}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${
                    entry.mood >= 8 ? 'bg-green-500' : entry.mood >= 6 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}>
                    {entry.mood}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Meditation Goals</span>
                <span>4/7 days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{ width: '57%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Journal Entries</span>
                <span>6/7 days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Therapy Sessions</span>
                <span>2/2 sessions</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
