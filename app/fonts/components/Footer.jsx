import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/* About Us */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-300">
            Philatelist Hub is a global platform for stamp enthusiasts. We aim to bring 
            philatelists together by offering a diverse range of stamps, envelopes, and 
            letters from around the world. Whether you're a seasoned collector or a beginner, 
            we have something for everyone.
          </p>
        </div>

        {/* Contact Us */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-300">
            <li>Email: support@philatelisthub.com</li>
            <li>Phone: +1-800-555-1234</li>
            <li>Address: 123 Philatelist Lane, Stamp City, USA</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Philatelist Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
