'use client';

import { motion } from 'framer-motion';

interface SocialIconProps {
	url: string;
	name: string;
	icon: string;
}

export function SocialIcon({ url, name, icon }: SocialIconProps) {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={name}
			className="w-12 h-12 bg-neutral-900 rounded-lg border border-neutral-700 flex items-center justify-center hover:border-brand-primary transition-colors group "
			variants={{
        hidden: { opacity: 0, y: 8, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
			whileHover={{ y: -3, scale: 1.08 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: 'spring', stiffness: 150, damping: 30 }}
		>
			<i
				className={`${icon} text-xl text-neutral-400 group-hover:!text-brand-primary`}
			/>
		</motion.a>
	);
}
