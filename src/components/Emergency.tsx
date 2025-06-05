
import { Phone, MessageCircle, MapPin, Heart, Clock, AlertTriangle } from 'lucide-react';

const Emergency = () => {
  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 free and confidential support',
      type: 'Crisis'
    },
    {
      name: 'SAMHSA National Helpline',
      number: '1-800-662-4357',
      description: 'Substance abuse treatment referral',
      type: 'Addiction'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free 24/7 crisis support via text',
      type: 'Text'
    }
  ];

  const copingStrategies = [
    {
      title: 'Deep Breathing',
      description: 'Take slow, deep breaths for 2-3 minutes',
      icon: Heart,
      color: 'bg-blue-500'
    },
    {
      title: 'Grounding Exercise',
      description: '5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste',
      icon: MapPin,
      color: 'bg-green-500'
    },
    {
      title: 'Call Support Person',
      description: 'Reach out to your sponsor or trusted friend',
      icon: Phone,
      color: 'bg-purple-500'
    },
    {
      title: 'Safe Space',
      description: 'Go to your designated safe place immediately',
      icon: Heart,
      color: 'bg-orange-500'
    }
  ];

  const quickActions = [
    {
      title: 'I\'m having thoughts of using',
      action: 'Get immediate support',
      color: 'bg-red-500',
      urgent: true
    },
    {
      title: 'I\'m feeling overwhelmed',
      action: 'Start breathing exercise',
      color: 'bg-yellow-500',
      urgent: false
    },
    {
      title: 'I need someone to talk to',
      action: 'Connect with crisis chat',
      color: 'bg-blue-500',
      urgent: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Emergency Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="w-8 h-8" />
          <h2 className="text-3xl font-bold">Emergency Support</h2>
        </div>
        <p className="text-lg">
          You're not alone. Help is available 24/7. Choose the support that feels right for you.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">How are you feeling right now?</h3>
        <div className="space-y-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`w-full p-4 ${action.color} text-white rounded-lg text-left hover:opacity-90 transition-opacity ${
                action.urgent ? 'ring-4 ring-red-300 animate-pulse' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{action.title}</span>
                <span className="text-sm opacity-90">{action.action}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Phone className="w-5 h-5 mr-2 text-red-500" />
          Emergency Contacts
        </h3>
        <div className="space-y-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-red-800 mb-1">{contact.name}</h4>
                  <p className="text-red-600 text-sm mb-2">{contact.description}</p>
                  <span className="inline-block px-2 py-1 bg-red-200 text-red-800 text-xs rounded-full">
                    {contact.type}
                  </span>
                </div>
                <div className="text-right">
                  <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg">
                    {contact.number}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immediate Coping Strategies */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Immediate Coping Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {copingStrategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 ${strategy.color} rounded-full flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800">{strategy.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{strategy.description}</p>
                <button className="mt-3 w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  Start Now
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Crisis Chat */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-blue-500" />
          Crisis Chat Support
        </h3>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 mb-4">
            Sometimes it's easier to type than talk. Connect with a trained crisis counselor through our secure chat.
          </p>
          <div className="flex space-x-3">
            <button className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              Start Crisis Chat
            </button>
            <button className="px-6 py-3 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              <Clock className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-blue-600 mt-2">Average wait time: Less than 2 minutes</p>
        </div>
      </div>

      {/* Safety Plan */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Safety Plan</h3>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Warning Signs I Notice:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Feeling isolated or disconnected</li>
              <li>• Increased anxiety or depression</li>
              <li>• Thoughts about using substances</li>
              <li>• Sleep problems or changes in appetite</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">People I Can Call:</h4>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Sponsor: (555) 123-4567</li>
              <li>• Best Friend: (555) 987-6543</li>
              <li>• Family Member: (555) 456-7890</li>
            </ul>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">Safe Places I Can Go:</h4>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• Local community center</li>
              <li>• Library</li>
              <li>• Friend's house</li>
              <li>• Support group meeting location</li>
            </ul>
          </div>
        </div>
        <button className="w-full mt-4 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
          Edit My Safety Plan
        </button>
      </div>
    </div>
  );
};

export default Emergency;
