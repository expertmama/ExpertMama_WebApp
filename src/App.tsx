import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <h1 className="text-4xl font-bold text-orange-500">
          Expert Mama
        </h1>
        <p className="mt-4 text-lg">
          সমস্যা আপনার, সমাধান মামার।
        </p>
      </div>
    </div>
  );
}

export default App;
