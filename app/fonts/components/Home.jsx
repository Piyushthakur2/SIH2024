import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
    <div>
      {/* Hero Image */}
      <section className="relative w-full h-[400px]">
        <img 
          src="https://www.indiapost.gov.in/Philately/PublishingImages/Stamps_Banner/StampsBanner.jpg" 
          alt="Hero Image" 
          className="object-cover w-full h-full"
        />
      </section>
  
      {/* Collection Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Explore Our Philatelic Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Stamps */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Stamps</h3>
            <img 
              src="https://media.gettyimages.com/id/154918914/photo/vintage-stamps-of-india.jpg?s=2048x2048&w=gi&k=20&c=P9aG2I_NSSdk7a6-4GGy6MTyyZxYP8VjYHE1hRw-lX4=" 
              alt="Stamp" 
              className="w-full h-32 object-cover rounded-md mb-4" 
            />
            <p className="text-gray-700 mb-4">Explore our collection of unique stamps from across the world.</p>
            <Link href="/buy-stamps">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Buy 
              </button>
            </Link>
          </div>
  
          {/* Envelopes */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Envelopes</h3>
            <img 
              src="https://png.pngtree.com/png-vector/20231102/ourmid/pngtree-vintage-letter-sticker-png-image_10374999.png" 
              alt="Envelope" 
              className="w-full h-32 object-contain rounded-md mb-4" 
            />
            <p className="text-gray-700 mb-4">Discover a variety of envelopes to complement your collection.</p>
            <Link href="/buy-envelopes">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Buy 
              </button>
            </Link>
          </div>
  
          {/* Letters */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Letters</h3>
            <img 
              src="https://previews.123rf.com/images/guita22/guita221409/guita22140900001/32091589-romantic-letter-with-flowers-in-vintage-paper.jpg" 
              alt="Letter" 
              className="w-full h-32 object-contain rounded-md mb-4" 
            />
            <p className="text-gray-700 mb-4">Browse our collection of historical and collectible letters.</p>
            <Link href="/buy-letters">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Buy 
              </button>
            </Link>
          </div>
  
        </div>
      </section>
    </div>
  </div>
  
  )
}

export default Home
