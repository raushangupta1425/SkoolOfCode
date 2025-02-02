import type React from "react"
import { Users, Calendar, MessageSquare, Code } from "lucide-react"

interface ForumPost {
  id: number
  title: string
  author: string
  replies: number
  views: number
}

interface Event {
  id: number
  title: string
  date: string
  attendees: number
}

interface Project {
  id: number
  title: string
  author: string
  likes: number
  language: string
}

const forumPosts: ForumPost[] = [
  { id: 1, title: "Help with Python loops", author: "CuriousCoder", replies: 5, views: 42 },
  { id: 2, title: "Show off your Scratch projects!", author: "CreativeCat", replies: 12, views: 89 },
  { id: 3, title: "JavaScript vs Python for beginners?", author: "NewbieProgrammer", replies: 8, views: 76 },
]

const events: Event[] = [
  { id: 1, title: "Virtual Coding Workshop", date: "2023-06-15", attendees: 50 },
  { id: 2, title: "Kids Coding Competition", date: "2023-07-01", attendees: 100 },
  { id: 3, title: "Parent-Child Pair Programming", date: "2023-06-22", attendees: 30 },
]

const projects: Project[] = [
  { id: 1, title: "Space Invaders Clone", author: "GameDevKid", likes: 24, language: "Python" },
  { id: 2, title: "Weather App", author: "WebWizard", likes: 18, language: "JavaScript" },
  { id: 3, title: "Interactive Story Game", author: "StoryTeller", likes: 32, language: "Scratch" },
]

const CommunityPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">CodeKids Community</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Forum Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <MessageSquare className="mr-2 text-indigo-600" />
            Forum Discussions
          </h2>
          <ul className="space-y-4">
            {forumPosts.map((post) => (
              <li key={post.id} className="border-b pb-2">
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  by {post.author} | {post.replies} replies | {post.views} views
                </p>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
            View All Discussions
          </button>
        </div>

        {/* Events Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Calendar className="mr-2 text-indigo-600" />
            Upcoming Events
          </h2>
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="border-b pb-2">
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  Date: {event.date} | {event.attendees} attendees
                </p>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
            View All Events
          </button>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="mr-2 text-indigo-600" />
            Featured Projects
          </h2>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id} className="border-b pb-2">
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-gray-600">
                  by {project.author} | {project.likes} likes | {project.language}
                </p>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
            Explore More Projects
          </button>
        </div>
      </div>

      {/* Community Stats */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Community Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <Users className="mx-auto text-indigo-600 mb-2" size={32} />
            <p className="text-2xl font-bold">5,000+</p>
            <p className="text-gray-600">Active Members</p>
          </div>
          <div>
            <MessageSquare className="mx-auto text-indigo-600 mb-2" size={32} />
            <p className="text-2xl font-bold">10,000+</p>
            <p className="text-gray-600">Forum Posts</p>
          </div>
          <div>
            <Code className="mx-auto text-indigo-600 mb-2" size={32} />
            <p className="text-2xl font-bold">2,500+</p>
            <p className="text-gray-600">Shared Projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage

