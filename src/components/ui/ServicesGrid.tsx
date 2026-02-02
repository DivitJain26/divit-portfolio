'use client';

import { services } from '@/src/lib/data/services';
import { ServiceCard } from '@/src/components/ui/ServiceCard';

export function ServicesGrid() {
  return (
    <>
      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide px-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="min-w-[70%] snap-center pt-2"
            >
              <ServiceCard service={service} index={index} compact />
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
