export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-2xl font-black text-brand-500">JD</span>
              <span className="text-white font-bold text-lg">Auto Detailing</span>
            </div>
            <p className="text-zinc-500 text-sm">Professional detailing. Guaranteed results.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#packages" className="hover:text-white transition-colors">Packages</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-600 text-sm">
          © {new Date().getFullYear()} JD Auto Detailing. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
