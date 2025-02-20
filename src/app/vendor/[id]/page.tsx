import { Metadata } from 'next'
import VendorProfile from '@/app/components/vendor/VendorProfile'

export const metadata: Metadata = {
  title: 'Vendor Profile | DentistDesign',
  description: 'View vendor information, ratings, and reviews',
}

interface VendorPageProps {
  params: {
    id: string
  }
}

export default function VendorPage({ params }: VendorPageProps) {
  // This would eventually come from Supabase
  const vendorData = {
    id: params.id,
    name: 'DentalTech Solutions',
    logo: '/images/marketplace/dental-chair-1.jpg',
    rating: 4.8,
    totalReviews: 156,
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    email: 'contact@dentaltech.com',
    description: 'Leading provider of advanced dental equipment with over 15 years of experience serving dental professionals.',
    yearEstablished: 2008,
    specialties: ['Dental Chairs', 'Imaging Equipment', 'Sterilization Systems'],
    recentReviews: [
      {
        id: '1',
        userName: 'Dr. Sarah Johnson',
        rating: 5,
        comment: 'Excellent product quality and customer service. Very satisfied with my purchase.',
        date: '2025-02-15',
        productName: 'Dental Chair XR-500'
      },
      {
        id: '2',
        userName: 'Dr. Michael Chen',
        rating: 4.5,
        comment: 'Great equipment, delivery was on time. Minor installation issues but quickly resolved.',
        date: '2025-02-10',
        productName: 'Digital Scanner Pro X3'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <VendorProfile vendor={vendorData} />
    </div>
  )
}
