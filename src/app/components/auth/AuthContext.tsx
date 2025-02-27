'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { User as SupabaseUser } from '@supabase/supabase-js'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  signIn: (user: User) => void
  signOut: () => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (email: string, password: string, firstName: string, lastName: string) => Promise<{ requiresEmailConfirmation: boolean }>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Function to extract user data from Supabase user
  const formatUser = (supabaseUser: SupabaseUser | null, userData?: any): User | null => {
    if (!supabaseUser) return null
    
    return {
      id: supabaseUser.id,
      email: supabaseUser.email || '',
      firstName: userData?.firstName || userData?.first_name || '',
      lastName: userData?.lastName || userData?.last_name || ''
    }
  }
  
  // Check for existing session on load
  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session?.user) {
          console.log("Session found, user:", session.user.id)
          
          // Get user profile data from your profiles table
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('first_name, last_name')
            .eq('id', session.user.id)
            .single()
          
          console.log("Profile fetch result:", profile, profileError)
          
          if (profileError && profileError.code === 'PGRST116') {
            // Profile doesn't exist for this user - create one from metadata
            const userData = session.user.user_metadata;
            const firstName = userData?.first_name || '';
            const lastName = userData?.last_name || '';
            
            try {
              const { error: insertError } = await supabase
                .from('profiles')
                .insert([
                  { 
                    id: session.user.id, 
                    email: session.user.email, 
                    first_name: firstName, 
                    last_name: lastName 
                  }
                ])
              console.log("Profile creation result:", insertError ? "Error" : "Success")
              
              if (insertError) {
                console.error('Error creating profile:', insertError)
              }
            } catch (insertError) {
              console.error('Error creating profile during session check:', insertError)
            }
            
            setUser({
              id: session.user.id,
              email: session.user.email || '',
              firstName,
              lastName
            })
          } else {
            // Profile exists
            setUser({
              id: session.user.id,
              email: session.user.email || '',
              firstName: profile?.first_name || '',
              lastName: profile?.last_name || ''
            })
          }
        } else {
          console.log("No session found")
        }
      } catch (error) {
        console.error("Error getting session:", error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event, session?.user?.id)
        
        if (session?.user) {
          // Get user profile data
          try {
            const { data: profile, error: profileError } = await supabase
              .from('profiles')
              .select('first_name, last_name')
              .eq('id', session.user.id)
              .single()
            
            console.log("Profile data from auth change:", profile, profileError)
            
            setUser(formatUser(session.user, {
              firstName: profile?.first_name,
              lastName: profile?.last_name
            }))
          } catch (error) {
            console.error("Error fetching profile on auth change:", error)
            setUser(formatUser(session.user))
          }
        } else {
          setUser(null)
        }
        setLoading(false)
      }
    )

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  const signIn = (userData: User) => {
    setUser(userData)
  }

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      if (data.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', data.user.id)
          .single()

        setUser({
          id: data.user.id,
          email: data.user.email || '',
          firstName: profile?.first_name || '',
          lastName: profile?.last_name || ''
        })
      }
    } catch (error: any) {
      console.error('Sign in error:', error)
      throw error
    }
  }

  const signUpWithEmail = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      // Check if user already exists
      const { data: existingUser } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .single()

      if (existingUser) {
        throw new Error('An account with this email already exists')
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName
          }
        }
      })

      if (error) throw error

      if (data.user) {
        // Create profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              email,
              first_name: firstName,
              last_name: lastName
            }
          ])

        if (profileError) {
          console.error('Error creating profile:', profileError)
        }
      }

      return { requiresEmailConfirmation: true }
    } catch (error: any) {
      console.error('Sign up error:', error)
      throw error
    }
  }
  
  const signOut = async () => {
    try {
      console.log("Signing out...")
      
      const { error } = await supabase.auth.signOut()
    
      if (error) {
        console.error('Error signing out from Supabase:', error)
        throw error
      }
      
      console.log("Supabase sign out successful, clearing user state")
      
      // Explicitly set user to null after successful signout
      setUser(null)
      
      console.log("Sign out complete")
      return Promise.resolve()
    } catch (error) {
      console.error('Failed to sign out:', error)
      return Promise.reject(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signOut,
        signInWithEmail,
        signUpWithEmail,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}