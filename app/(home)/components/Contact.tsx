"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { InstagramIcon, MailboxIcon} from "@/components/ui/linkicons";
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <footer className="bg-rose-300 text-rose-50 py-16 px-6 border-t border-rose-600" id="contact">
      <div className="max-w-6xl mx-auto">
        {showAlert && (
          <Alert 
            className="fixed top-4 left-1/2 transform -translate-x-1/2 text-rose-50 border border-rose-300 bg-rose-700 rounded-full z-50 p-4 max-w-xs text-center backdrop-blur-sm"
            onClick={() => setShowAlert(false)}
          >
            <p>Copied to clipboard!</p>
          </Alert>
        )}
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-rose-50">Join Our Movement</h2>
          <p className="text-rose-100 max-w-2xl mx-auto">
            We invite you to join our movement and support our mission to empower women and girls. Together, we can make a difference and create a more equitable world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Email */}
          <div 
            className="flex items-center justify-center space-x-3 p-4 bg-rose-700 rounded-xl cursor-pointer hover:bg-rose-600 transition-all duration-300 group"
            onClick={() => copyToClipboard('girlupfoj.lko@gmail.com')}
          >
            <MailboxIcon className="h-5 w-5 text-rose-200 group-hover:text-rose-100" />
            <div>
              <p className="text-rose-50 font-semibold">girlupfoj.lko@gmail.com</p>
            </div>
          </div>

          {/* Instagram */}
          <Link href="https://instagram.com/girlup.foj" target="_blank" className="block">
            <Button className="w-full bg-rose-600 hover:bg-rose-500 text-rose-50 font-semibold border-0 transition-all duration-300 h-auto py-4">
              <InstagramIcon className="w-5 h-5 mr-2" />
              @girlup.foj
            </Button>
          </Link>
        </div>

        <div className="border-t border-rose-600 pt-8 text-center text-rose-200 mt-12">
          <p>&copy; 2025 Girl Up: FOJ. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}