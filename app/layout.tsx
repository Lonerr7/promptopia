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
          {/* //? Тут нужно передать сессию, но насколько я понял, сессия получается
          через хук useSession, который используется в клиентских компонентах.
          Значит ли это, что если нам она тут понадобится, то нам придется
          сделать RootLayout клиентским и все вложенные в него компоненты также
          станут клиентскими???? */}
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
