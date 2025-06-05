
import { useState } from 'react';
import { Calendar, Trophy, TrendingUp, Star, CheckCircle, Plus } from 'lucide-react';

const Recovery = () => {
  const [sobrietyDate] = useState(new Date('2024-01-20'));
  const [newGoal, setNewGoal] = useState('');
  const [showGoalInput, setShowGoalInput] = useState(false);

  const daysSober = Math.floor((new Date().getTime() - sobrietyDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const milestones = [
    { days: 30, title: '30 Days Strong', achieved: true, icon: Star },
    { days: 60, title: '2 Months Clean', achieved: true, icon: Trophy },
    { days: 90, title: '90 Day Warrior', achieved: true, icon: CheckCircle },
    { days: 180, title: '6 Month Champion', achieved: false, icon: Star },
    { days: 365, title: '1 Year Hero', achieved: false, icon: Trophy },
  ];

  const goals = [
    { id: 1, text: 'Attend weekly support group meetings', completed: true },
    { id: 2, text: 'Practice daily meditation', completed: true },
    { id: 3, text: 'Exercise 3 times per week', completed: false },
    { id: 4, text: 'Read recovery literature daily', completed: false },
    { id: 5, text: 'Connect with sponsor twice weekly', completed: true },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">{daysSober} Days</h2>
            <p className="text-xl text-green-100">of sobriety and counting</p>
            <p className="text-green-200 mt-2">Since {sobrietyDate.toLocaleDateString()}</p>
          </div>
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
            <Calendar className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
          Recovery Milestones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isNext = !milestone.achieved && milestones[index - 1]?.achieved !== false;
            
            return (
              <div
                key={milestone.days}
                className={`p-4 rounded-xl border-2 transition-all ${
                  milestone.achieved
                    ? 'bg-green-100 border-green-300 text-green-800'
                    : isNext
                    ? 'bg-yellow-50 border-yellow-300 text-yellow-800 ring-2 ring-yellow-400'
                    : 'bg-gray-100 border-gray-200 text-gray-500'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${
                  milestone.achieved ? 'text-green-600' : isNext ? 'text-yellow-600' : 'text-gray-400'
                }`} />
                <div className="text-center">
                  <div className="font-bold">{milestone.days} Days</div>
                  <div className="text-sm">{milestone.title}</div>
                </div>
                {milestone.achieved && (
                  <CheckCircle className="w-5 h-5 text-green-600 mx-auto mt-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Recovery Goals */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
            Recovery Goals
          </h3>
          <button
            onClick={() => setShowGoalInput(!showGoalInput)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Goal</span>
          </button>
        </div>

        {showGoalInput && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <input
              type="text"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="Enter a new recovery goal..."
              className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex space-x-2 mt-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Add Goal
              </button>
              <button
                onClick={() => setShowGoalInput(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`flex items-center space-x-3 p-4 rounded-lg transition-all ${
                goal.completed
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  goal.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                {goal.completed && <CheckCircle className="w-4 h-4 text-white" />}
              </div>
              <span
                className={`flex-1 ${
                  goal.completed ? 'text-green-800 line-through' : 'text-gray-800'
                }`}
              >
                {goal.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Support Resources */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Support Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">Crisis Support</h4>
            <p className="text-purple-600 text-sm mb-3">24/7 immediate help when you need it most</p>
            <button className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              Call Now: 988
            </button>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Recovery Community</h4>
            <p className="text-blue-600 text-sm mb-3">Connect with others on similar journeys</p>
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
