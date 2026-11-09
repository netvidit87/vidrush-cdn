import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-16 flex-grow">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We collect limited technical data to operate the service, such as IP
            address, device information, and basic usage statistics.
          </p>
          <p>
            We use Google Analytics to understand how the site is used. This may
            include cookies and similar technologies.
          </p>
          <p>
            Uploaded videos are stored on third-party infrastructure. Do not
            upload personal or sensitive content you do not want publicly
            accessible.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>privacy@vidrush.com</p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-gray-900 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
