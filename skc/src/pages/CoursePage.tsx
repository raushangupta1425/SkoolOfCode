import type React from "react"
import { Book, Code, Puzzle, BotIcon as Robot } from "lucide-react"

interface Course {
  id: number
  title: string
  description: string
  level: string
  icon: React.ReactNode
}

const courses: Course[] = [
  {
    id: 1,
    title: "Scratch for Beginners",
    description:
      "Learn the basics of programming with Scratch, a visual programming language perfect for young learners.",
    level: "Beginner",
    icon: <Puzzle className="w-8 h-8 text-yellow-500" />,
  },
  {
    id: 2,
    title: "Python Adventures",
    description:
      "Dive into Python programming with fun projects and games. Great for kids who want to learn a text-based language.",
    level: "Intermediate",
    icon: <Code className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 3,
    title: "Web Design Basics",
    description: "Create your own websites using HTML and CSS. Learn the fundamentals of web design and structure.",
    level: "Beginner",
    icon: <Book className="w-8 h-8 text-green-500" />,
  },
  {
    id: 4,
    title: "Robotics with Arduino",
    description:
      "Combine coding and hardware! Learn to program Arduino boards and create your own electronic projects.",
    level: "Advanced",
    icon: <Robot className="w-8 h-8 text-red-500" />,
  },
]

const CoursePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Coding Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                {course.icon}
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-indigo-600">{course.level}</span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursePage

