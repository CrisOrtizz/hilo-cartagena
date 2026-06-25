export default function Hero() {
    return (
    <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900 text-white min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">

         {/* Main Heading*/}
         <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Aunthentic Caribbean Fashion 
         </h1>

         {/* Subheading */}
         <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200">
            Discover unique pieces that celebrate Caribbean heritage. Each garment tells a story of tradition, craftsmanship, and cultural pride.
         </p>   
         {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                 Shop Now  
                </button>
                <button className="border-2 border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                 Learn More  
                </button>
            </div>
         </div>
    </section>    
    );
}