import type { ReactNode } from 'react';
import { Header } from './Header';

interface Props {
  children: ReactNode;
}

export function AppShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-canvas flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
      <footer className="border-t border-border py-4 text-center text-text-muted text-sm">
        台灣長照床位查詢系統 · 資料來源：衛福部及各縣市衛生局開放資料 · 僅供參考
      </footer>
    </div>
  );
}
