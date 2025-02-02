import { Link, useLocation } from "react-router-dom"
import { Code } from "lucide-react"

const Navbar = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
      ? "border-indigo-500 text-gray-900"
      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Code className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-indigo-600">CodeKids</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`${isActive("/")} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className={`${isActive("/courses")} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Courses
              </Link>
              <Link
                to="/community"
                className={`${isActive("/community")} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Community
              </Link>
              <Link
                to="/achievements"
                className={`${isActive("/achievements")} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Achievements
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium mr-2">
              Login
            </Link>
            <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

