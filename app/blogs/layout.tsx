export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-[#030102]">
      {children}
    </div>
  );
}