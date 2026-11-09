import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-16 flex-grow">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>By using VidRush you agree to these terms.</p>
          <h2 className="text-xl font-semibold text-gray-900">1. Service</h2>
          <p>
            VidRush provides free simple video hosting. Use is at your own risk.
            We do not guarantee uptime, storage duration, or availability of
            uploaded content.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">2. Acceptable use</h2>
          <p>
            Do not upload illegal, harmful, copyrighted, or infringing content.
            Violations may result in removal of content and restriction of
            access.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">3. Contact</h2>
          <p>legal@vidrush.com</p>
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
