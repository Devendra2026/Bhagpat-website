
'use client';

import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import { LayoutDashboard, LogIn, Search, Shield, UserPlus, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function Header() {
  const { isSignedIn } = useUser();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const closeModal = () => {
    setActiveModal(null);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching municipal portal for: "${searchQuery}"`);
    closeModal();
  };

  return (
    <>
      <header className="bg-white py-4 px-4 md:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Side: Logo, Brand names, Taglines */}
          <div className="flex items-center text-center lg:text-left flex-col sm:flex-row gap-4">
            
            {/* Official Circular Government Logo Image */}
            <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 shrink-0">
              <div className="w-20 h-20 rounded-full border-2 stroke-[#0A2540] border-slate-200 shadow-sm overflow-hidden bg-white flex items-center justify-center p-1">
                <img 
                  src="https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2018/02/2018021632.png" 
                  alt="Uttar Pradesh Government Emblem" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xs bg-gov-saffron/10 text-gov-saffron px-2 py-0.5 rounded-full font-bold border border-gov-saffron/20 uppercase tracking-wider">
                  Uttar Pradesh Government
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-extrabold text-gov-blue-dark tracking-tight leading-tight mt-1 font-serif">
                नगर पंचायत, अमीनगर सराय , बागपत
              </h1>
              <p className="text-sm font-semibold text-gov-blue-medium uppercase tracking-wider font-sans">
                Town Panchayat, Aminagar Sarai , Baghpat
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mt-0.5 text-xs text-slate-500 font-medium">
                <span>Baghpat, Uttar Pradesh, India</span>
                <span className="text-slate-300">•</span>
                <span className="text-gov-saffron font-semibold italic">"स्वच्छ अमीनगर सराय, सुंदर अमीनगर सराय।"</span>
              </div>
            </div>
          </div>
          
          {/* Quick Actions Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <Button
              suppressHydrationWarning
              onClick={() => setActiveModal('search')}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg border border-slate-200 transition-all cursor-pointer hidden sm:block"
              aria-label="Search site"
            >
              <Search className="w-4 h-4" />
            </Button>

            {isSignedIn ? (
              <div className="flex items-center justify-end gap-3">
                <Link
                  href="/auth/role-check"
                  className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <UserButton />
              </div>
            ) : (
              <div className="flex items-center justify-end gap-2">
                <SignInButton
                  mode="modal"
                  forceRedirectUrl="/auth/role-check"
                  fallbackRedirectUrl="/auth/role-check"
                  signUpForceRedirectUrl="/"
                  signUpFallbackRedirectUrl="/"
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </button>
                </SignInButton>
                <SignUpButton
                  mode="modal"
                  forceRedirectUrl="/"
                  fallbackRedirectUrl="/"
                  signInForceRedirectUrl="/auth/role-check"
                  signInFallbackRedirectUrl="/auth/role-check"
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* INTERACTIVE MOCK MODALS                           */}
      {/* ================================================= */}

      {activeModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-999 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-md w-full overflow-hidden transform scale-95 animate-scale-up">
            {/* Modal Header */}
            <div className="gov-gradient-blue text-white px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gov-saffron" />
                <h3 className="font-extrabold text-sm uppercase tracking-wide">
                  {activeModal === 'login' && 'Citizen Portal Login'}
                  {activeModal === 'complaint' && 'Public Grievance System'}
                  {activeModal === 'paytax' && 'Tax Payment Gateway'}
                  {activeModal === 'search' && 'Municipal Search Service'}
                </h3>
              </div>
              <Button onClick={closeModal} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </Button>
            </div>
            {/* Modal Content */}
            <div className="p-6">
              {/* Search Modals */}
              {activeModal === 'search' && (
                <form onSubmit={handleSearchSubmit} className="space-y-4">
                  <div>
                    <Label className="block text-xs font-bold text-slate-600 mb-1">Search Keywords</Label>
                    <div className="flex gap-2">
                      <Input
                        required
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search circulars, tenders, birth cert..."
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-gov-blue-medium"
                      />
                      <Button
                        type="submit"
                        className="p-2.5 bg-gov-blue-medium text-white hover:bg-gov-blue-dark rounded-lg transition-colors cursor-pointer"
                      >
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

