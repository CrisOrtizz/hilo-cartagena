export default function About() {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=500&fit=crop"
              alt="Hilo Cartagena Shop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-cream">
              Our Story
              
            </h2>
            
            <p className="text-lg text-cream">
              Hilo Cartagena was born from a passion for Caribbean culture and authentic craftsmanship. 
              In the heart of historic Cartagena, Colombia, we create clothing that celebrates the vibrant 
              colors, patterns, and heritage of our region.
            </p>

            <p className="text-lg text-cream">
              Each piece is carefully handcrafted by local artisans who have been perfecting their 
              techniques for generations. We believe that fashion should tell a story—your story, our story, 
              and the story of the Caribbean.
            </p>

            <p className="text-lg text-cream">
              When you wear Hilo Cartagena, you're not just wearing clothing. You're wearing tradition, 
              culture, and pride. You're supporting local artisans and keeping Caribbean heritage alive.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-coral">5+</p>
                <p className="text-cream">Years Crafting</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-coral ">100%</p>
                <p className="text-cream">Handmade</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-coral">1000+</p>
                <p className="text-cream">text-cream</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}