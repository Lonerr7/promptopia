import Nav from '@/components/Nav/Nav';
import '../styles/globals.css';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
