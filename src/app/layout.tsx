import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A Next.js portfolio with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-teal-700 p-8


">
        <header className="bg-purple text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">Creative Web Studio</h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Me</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/contact" className="hover:underline">Contact Me</a></li>
             
            </ul>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-green text-white text-center p-4">
          © 2024 Designed By Aamna Ansari
        </footer>
      </body>
    </html>
  );
}
