import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || '',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
)

export interface Order {
  id: string
  customer_info: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  shipping_info: {
    address: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  payment_info: {
    cardNumber: string
    expiryDate: string
    cvv: string
  }
  status: 'pending' | 'processing' | 'completed' | 'failed'
  created_at: string
  updated_at: string
}

export async function createOrder(orderData: Omit<Order, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateOrderStatus(orderId: string, status: Order['status']) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', orderId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getOrder(orderId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single()

  if (error) throw error
  return data as Order
}

// Add error handling wrapper
export const handleSupabaseError = (error: any) => {
  if (error.message === 'Invalid login credentials') {
    return new Error('Invalid email or password')
  }
  if (error.message?.includes('duplicate key')) {
    return new Error('An account with this email already exists')
  }
  return error
}
