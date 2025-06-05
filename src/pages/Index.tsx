
import { useState } from 'react';
import { Heart, Calendar, Brain, Phone, BookOpen, Users } from 'lucide-react';
import Dashboard from '@/components/Dashboard';
import Recovery from '@/components/Recovery';
import Mood from '@/components/Mood';
import Therapy from '@/components/Therapy';
import Mindfulness from '@/components/Mindfulness';
import Emergency from '@/components/Emergency';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Heart },
    { id: 'recovery', label: 'Recovery', icon: Calendar },
    { id: 'mood', label: 'Mood', icon: Brain },
    { id: 'therapy', label: 'Therapy', icon: Users },
    { id: 'mindfulness', label: 'Mindfulness', icon: BookOpen },
    { id: 'emergency', label: 'Emergency', icon: Phone },
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'recovery':
        return <Recovery />;
      case 'mood':
        return <Mood />;
      case 'therapy':
        return <Therapy />;
      case 'mindfulness':
        return <Mindfulness />;
      case 'emergency':
        return <Emergency />;
      default:
        return <Dashboard />;
    }
  };

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
                Serenity
              </h1>
            </div>
            <div className="text-sm text-gray-600">
              Your path to wellness
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar Navigation */}
        <nav className="w-64 min-h-screen bg-white/60 backdrop-blur-sm border-r border-white/20 p-6">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-white/80 hover:text-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
