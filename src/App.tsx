import Navigation from './components/Navigation';

export default function App() {
  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hilo Cartagena</h1>
        <p className="text-lg text-gray-600">Authentic Caribbean clothing from Cartagena, Colombia</p>
      </main>
    </div>
  );
}