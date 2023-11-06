import Link from '@docusaurus/Link';
import HeroImageUrl from '@site/static/img/hero.png';
import YellowLogo from '@site/static/img/logo-yellow.svg';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  return (
    <div className="flex flex-row items-center px-20 py-10 lg:px-[25%] bg-green-200 gap-8 lg:gap-32">
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex flex-row item-center gap-3">
            <div className="flex flex-col gap-3">
            <p className="text-4xl font-black">All of your texts at your fingertip </p> 
          <p className="text-gray-500 text-md">Easily find document links, shell commands and much more</p>
            </div>
          
            <YellowLogo className="w-28"/>
          </div>
          
          <div className="flex flex-row items-center justify-center gap-2">
            <Link
              className="px-4 py-2 rounded-lg bg-green-500 text-white"
              to="/docs/Installation/From%20Binary">
              Deep Dive 🚀
            </Link>
            
          </div>
        </div>
        
        <img src={HeroImageUrl} className="w-72"></img>
        
      </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
