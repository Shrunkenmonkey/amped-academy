export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 