import { Star, MapPin, Phone, Mail, Building2 } from 'lucide-react'
import Image from 'next/image'

interface Review {
  id: string
  userName: string
  rating: number
  comment: string
  date: string
  productName: string
}

interface VendorData {
  id: string
  name: string
  logo: string
  rating: number
  totalReviews: number
  location: string
  phone: string
  email: string
  description: string
  yearEstablished: number
  specialties: string[]
  recentReviews: Review[]
}

interface VendorProfileProps {
  vendor: VendorData
}

const VendorProfile = ({ vendor }: VendorProfileProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
        <div className="relative w-32 h-32 rounded-lg overflow-hidden">
          <Image
            src={vendor.logo}
            alt={vendor.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{vendor.name}</h1>
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold">{vendor.rating.toFixed(1)}</span>
            <span className="text-gray-500">({vendor.totalReviews} reviews)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>{vendor.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-5 h-5" />
              <span>{vendor.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>{vendor.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Building2 className="w-5 h-5" />
              <span>Est. {vendor.yearEstablished}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">{vendor.description}</p>
        <div>
          <h3 className="font-semibold mb-2">Specialties:</h3>
          <div className="flex flex-wrap gap-2">
            {vendor.specialties.map((specialty, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
        <div className="space-y-6">
          {vendor.recentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">{review.userName}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{review.rating.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <p className="text-sm text-gray-500">
                Product: {review.productName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VendorProfile
