export default function About() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Boomer</h1>
        
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Boomer is dedicated to creating meaningful connections and fostering community engagement. 
              We believe in the power of shared experiences and the importance of building strong relationships.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, Boomer started as a simple idea to bring people together. 
              Today, we've grown into a platform that connects thousands of users worldwide, 
              helping them share their stories and build lasting relationships.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Building strong, supportive communities where everyone belongs.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly evolving to provide the best user experience.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">Maintaining trust through transparency and ethical practices.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 