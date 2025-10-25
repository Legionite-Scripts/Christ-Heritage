import { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Ministries } from './pages/Ministries';
import { Events } from './pages/Events';
import { Sermons } from './pages/Sermons';
import { Gallery } from './pages/Gallery';
import { Give } from './pages/Give';
import { Contact } from './pages/Contact';

function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const routes: Record<string, JSX.Element> = {
    '/': <Home />,
    '/about': <About />,
    '/ministries': <Ministries />,
    '/events': <Events />,
    '/sermons': <Sermons />,
    '/gallery': <Gallery />,  
    '/give': <Give />,
    '/contact': <Contact />,
  };

  return routes[currentPath] || <Home />;
}

export default function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}
