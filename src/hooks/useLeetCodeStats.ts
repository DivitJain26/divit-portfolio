'use client';

import { useEffect, useState } from 'react';

export function useLeetCodeStats() {
	const [solved, setSolved] = useState<number | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchStats() {
			try {
				const res = await fetch('/api/leetcode');
				const data = await res.json();
				setSolved(data.solved);
			} catch (err) {
				setSolved(null);
			} finally {
				setLoading(false);
			}
		}

		fetchStats();
	}, []);

	return { solved, loading };
}
