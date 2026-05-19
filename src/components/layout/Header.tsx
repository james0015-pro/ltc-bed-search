import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-text-primary hover:text-primary transition-colors">
          <span className="text-primary text-xl">🏥</span>
          <span className="hidden sm:inline">台灣長照床位查詢</span>
          <span className="sm:hidden">長照查詢</span>
        </Link>
        <div className="flex items-center gap-3 text-text-muted text-sm">
          <Search size={16} />
          <span>全台 250+ 機構</span>
        </div>
      </div>
    </header>
  );
}
