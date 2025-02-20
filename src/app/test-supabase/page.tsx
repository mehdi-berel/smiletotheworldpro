'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestSupabase() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    async function testConnection() {
      try {
        setStatus('loading');
        // Test connection by getting Postgres version
        const { data, error } = await supabase
          .rpc('get_postgres_version');

        if (error) {
          throw error;
        }

        setVersion(data);
        setStatus('connected');
        setError(null);
      } catch (err) {
        console.error('Supabase connection error:', err);
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Failed to connect to Supabase');
      }
    }

    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Supabase Connection Test
            </h1>
            
            {status === 'loading' && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}

            {status === 'connected' && (
              <div className="text-center">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Connected Successfully
                  </span>
                </div>
                {version && (
                  <p className="text-sm text-gray-600">
                    PostgreSQL Version: {version}
                  </p>
                )}
              </div>
            )}

            {status === 'error' && (
              <div className="text-center">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    Connection Failed
                  </span>
                </div>
                {error && (
                  <p className="text-sm text-red-600">
                    Error: {error}
                  </p>
                )}
              </div>
            )}

            <div className="mt-6">
              <p className="text-xs text-gray-500">
                Environment Variables Status:
              </p>
              <ul className="mt-2 text-xs text-left space-y-2">
                <li className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-2 ${process.env.NEXT_PUBLIC_SUPABASE_URL ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not Set'}
                </li>
                <li className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-2 ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not Set'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
