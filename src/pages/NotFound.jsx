import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-8">Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 text-sm"
          >
            Go home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
