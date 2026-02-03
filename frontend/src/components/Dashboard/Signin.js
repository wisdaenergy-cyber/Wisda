'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/signin`, {
        email,
        password,
      });
      setLoading(false);
      localStorage.setItem("token",res.data.token)
      toast.success('Signed in successfully');
      router.push('/dashboard/main');
    } catch (error) {
      setLoading(false);
      const message =
        error?.response?.data?.message || 'Something went wrong';
      toast.error(message);
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 bg-[#e9e2d3]">
        <h2 className="text-4xl font-bold mb-2 ml-26">Sign in</h2>
        <p className="text-gray-600 mb-6 ml-26">
          Please login to continue to your account.
        </p>

        <form className="space-y-4 w-[400px] ml-26" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#278188] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="admin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-[#278188] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800 transition flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <LoaderCircle className="animate-spin" size={18} />
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="https://res.cloudinary.com/dimfwawfk/image/upload/v1761805953/b7d668ae638a4d6a09b69e2b8de3c45612554522_1_v9n3tv.png"
          alt="Solar Workers"
          layout="fill"
          objectFit="cover"
          className="brightness-95"
        />
        <div className="absolute bottom-8 left-8 text-white text-lg font-medium drop-shadow-lg">
          The easiest way to manage your work
        </div>
      </div>
    </div>
  );
}
