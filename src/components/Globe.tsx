import { lazy, Suspense } from 'react';
import { globeArcs, globeConfig } from '../data/globeData';
import { ShimmerButton } from './buttons/ShimmerButton';
import { useNavigate } from 'react-router-dom';

const World = lazy(() =>
  import('../utils/globeConfig').then((module) => ({
    default: module.World,
  }))
);

export function GlobeComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start w-full bg-black relative pt-20 pb-20 min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative z-20 w-full text-center mb-8 mt-10">
          <div className="relative mx-auto inline-block w-max">
            <h1
              className="absolute inset-0 animate-gradient bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-[length:200%_auto] bg-clip-text text-transparent font-bold"
              style={{ marginTop: '1.2rem', fontSize: '3rem' }}
            >
              devspace
            </h1>
            <h1 className="invisible font-bold" style={{ marginTop: '1.2rem', fontSize: '3.5rem' }}>
              devspace
            </h1>
          </div>

          <div className="relative z-20 text-center px-4 mb-6">
            <h2
              className="font-bold bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
              style={{ marginTop: '-2.2rem', fontSize: '1.8rem' }}
            >
              bridging designers & developers across the globe
            </h2>
          </div>

          <div className="flex justify-center w-full mt-4">
            <ShimmerButton onClick={() => navigate('/welcome')}>
              <span className="font-bold bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-[length:200%_auto] bg-clip-text text-transparent">
                Get Started
              </span>
            </ShimmerButton>
          </div>
        </div>

        <div
          className="relative w-full"
          style={{
            height: '600px',
          }}
        >
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center text-white">
                Loading globe...
              </div>
            }
          >
            <World data={globeArcs} globeConfig={globeConfig} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
