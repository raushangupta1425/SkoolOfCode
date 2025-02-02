import type React from "react"
import { Award, Star, Zap, Code, Puzzle, Trophy, Target, Lightbulb } from "lucide-react"

interface Achievement {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  unlocked: boolean
  progress?: number
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Code Novice",
    description: "Complete your first coding lesson",
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    unlocked: true,
  },
  {
    id: 2,
    title: "Bug Squasher",
    description: "Fix 10 bugs in your code",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    unlocked: true,
  },
  {
    id: 3,
    title: "Python Master",
    description: "Complete all Python courses",
    icon: <Code className="w-8 h-8 text-green-500" />,
    unlocked: false,
    progress: 60,
  },
  {
    id: 4,
    title: "Scratch Wizard",
    description: "Create 5 Scratch projects",
    icon: <Puzzle className="w-8 h-8 text-orange-500" />,
    unlocked: false,
    progress: 40,
  },
  {
    id: 5,
    title: "Coding Marathon",
    description: "Code for 24 hours (not consecutively)",
    icon: <Trophy className="w-8 h-8 text-purple-500" />,
    unlocked: false,
    progress: 75,
  },
  {
    id: 6,
    title: "Community Helper",
    description: "Answer 20 questions in the community forum",
    icon: <Target className="w-8 h-8 text-red-500" />,
    unlocked: false,
    progress: 25,
  },
  {
    id: 7,
    title: "Innovation Guru",
    description: "Create an original project and share it with the community",
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    unlocked: false,
  },
  {
    id: 8,
    title: "Coding Streak",
    description: "Code for 7 consecutive days",
    icon: <Award className="w-8 h-8 text-indigo-500" />,
    unlocked: false,
  },
]

const AchievementsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Achievements</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center ${
              achievement.unlocked ? "border-2 border-green-500" : "opacity-75"
            }`}
          >
            <div className="mb-4">{achievement.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-center">{achievement.title}</h2>
            <p className="text-gray-600 text-center mb-4">{achievement.description}</p>
            {achievement.unlocked ? (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Unlocked</span>
            ) : achievement.progress !== undefined ? (
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${achievement.progress}%` }}></div>
              </div>
            ) : (
              <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">Locked</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Your Progress</h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">3</p>
            <p className="text-gray-600">Achievements Unlocked</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">37.5%</p>
            <p className="text-gray-600">Total Progress</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">5</p>
            <p className="text-gray-600">Achievements In Progress</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementsPage

