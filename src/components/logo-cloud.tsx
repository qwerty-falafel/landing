import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const logos = [
    { src: "/logo-cloud/ap.svg", alt: "Associated Press" },
    { src: "/logo-cloud/bbc.svg", alt: "BBC" },
    { src: "/logo-cloud/deutsche.svg", alt: "Deutsche Welle" },
    { src: "/logo-cloud/getty.svg", alt: "Getty" },
    { src: "/logo-cloud/times.svg", alt: "The Times" },
    { src: "/logo-cloud/guardian.svg", alt: "Guardian" },
    { src: "/logo-cloud/nyt.svg", alt: "New York Times" },
    { src: "/logo-cloud/spiegel.svg", alt: "Spiegel" },
    { src: "/logo-cloud/afp.svg", alt: "AFP" },
    { src: "/logo-cloud/anadolu.svg", alt: "Anadolu" },
    { src: "/logo-cloud/telegraph.svg", alt: "Daily Telegraph" },
  ];

  return (
    <div className={clsx(className, 'overflow-hidden relative')}>
      <div className="flex flex-nowrap w-[200%] animate-scroll">
        {/* Repeat logos twice for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            alt={logo.alt}
            src={logo.src}
            className="h-9 mx-6 sm:h-8 lg:h-12"
          />
        ))}
      </div>
    </div>
  );
}
