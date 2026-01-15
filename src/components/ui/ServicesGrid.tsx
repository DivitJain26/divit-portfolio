'use client';

import { services } from '@/src/lib/portfolio-data';
import { ServiceCard } from '@/src/components/ui/ServiceCard';

export function ServicesGrid() {
  return (
    <>
      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden">
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="min-w-[85%] sm:min-w-[70%] snap-center pt-3"
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
