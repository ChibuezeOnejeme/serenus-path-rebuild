
import { useState } from 'react';
import { Brain, Plus, Calendar, TrendingUp, MessageCircle } from 'lucide-react';

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [journalEntry, setJournalEntry] = useState('');
  const [showJournalForm, setShowJournalForm] = useState(false);

  const moodOptions = [
    { value: 1, emoji: '😢', label: 'Very Sad', color: 'bg-red-500' },
    { value: 2, emoji: '😔', label: 'Sad', color: 'bg-red-400' },
    { value: 3, emoji: '😐', label: 'Okay', color: 'bg-yellow-400' },
    { value: 4, emoji: '😊', label: 'Good', color: 'bg-green-400' },
    { value: 5, emoji: '😄', label: 'Great', color: 'bg-green-500' },
  ];

  const recentEntries = [
    { date: 'Today', mood: 4, entry: 'Had a productive therapy session. Feeling more hopeful about the future and my recovery journey.' },
    { date: 'Yesterday', mood: 3, entry: 'Challenging day with some cravings, but I used my coping strategies and reached out to my support network.' },
    { date: '2 days ago', mood: 5, entry: 'Celebrated my 120-day milestone! Feeling grateful for how far I\'ve come and excited for what\'s ahead.' },
  ];

  const weeklyMoods = [7, 6, 8, 5, 7, 8, 6]; // Example data for the week

  return (
    <div className="space-y-6">
      {/* Mood Tracker Header */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold text-gray-800">Mood Tracker</h2>
          </div>
          <button
            onClick={() => setShowJournalForm(!showJournalForm)}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Entry</span>
          </button>
        </div>

        {/* Mood Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">How are you feeling today?</h3>
          <div className="flex space-x-4 justify-center">
            {moodOptions.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood)}
                className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                  selectedMood?.value === mood.value
                    ? 'border-purple-400 bg-purple-50 ring-2 ring-purple-300'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <div className="text-sm font-medium text-gray-700">{mood.label}</div>
                <div className={`w-8 h-2 rounded-full mt-2 ${mood.color}`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Journal Form */}
        {showJournalForm && (
          <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">Journal Entry</h4>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="What's on your mind today? How are you feeling about your recovery journey?"
              className="w-full p-3 border border-purple-200 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex space-x-2 mt-3">
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Save Entry
              </button>
              <button
                onClick={() => setShowJournalForm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Weekly Mood Chart */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
          Weekly Mood Trend
        </h3>
        <div className="flex items-end justify-between h-32 bg-gray-50 rounded-lg p-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="flex flex-col items-center">
              <div
                className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t w-8 mb-2"
                style={{ height: `${(weeklyMoods[index] / 10) * 100}px` }}
              ></div>
              <span className="text-xs text-gray-600">{day}</span>
              <span className="text-xs font-semibold text-gray-800">{weeklyMoods[index]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Average mood this week: <span className="font-semibold text-purple-600">6.7/10</span>
          </span>
        </div>
      </div>

      {/* Recent Journal Entries */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-green-500" />
          Recent Journal Entries
        </h3>
        <div className="space-y-4">
          {recentEntries.map((entry, index) => {
            const moodData = moodOptions.find(m => m.value === entry.mood);
            return (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-800">{entry.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{moodData?.emoji}</span>
                    <span className="text-sm text-gray-600">{moodData?.label}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{entry.entry}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mood Insights */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Insights & Patterns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Positive Trends</h4>
            <ul className="text-blue-600 text-sm space-y-1">
              <li>• Your mood improved 20% this week</li>
              <li>• 5 consecutive days of journaling</li>
              <li>• Morning entries tend to be more positive</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Suggestions</h4>
            <ul className="text-green-600 text-sm space-y-1">
              <li>• Continue therapy sessions (linked to better moods)</li>
              <li>• Try mindfulness when mood dips below 5</li>
              <li>• Celebrate small wins more often</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mood;
