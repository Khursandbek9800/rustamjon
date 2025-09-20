export default function Footer() {
  return (
    <footer className="mt-12 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-xs sm:text-sm">
            &copy; <strong>Rustamjonovich Technical Services 2025</strong>
          </div>
          <div className="text-center md:text-right text-xs sm:text-sm">
            Made with care •{' '}
            <a href="#contact" className="text-primary hover:underline">
              Request a quote
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
          <p>Professional technical services for all your repair and installation needs</p>
        </div>
      </div>
    </footer>
  );
}