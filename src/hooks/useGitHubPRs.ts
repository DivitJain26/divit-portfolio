'use client';

import { useEffect, useState } from 'react';

let cachedPRs: number | null = null;

export function useGitHubPRs() {
	const [prs, setPRs] = useState<number | null>(cachedPRs);
	const [loading, setLoading] = useState(cachedPRs === null);

	useEffect(() => {
		if (cachedPRs !== null) return;

		async function fetchPRs() {
			try {
				const res = await fetch('/api/github/prs');
				const data = await res.json();

				cachedPRs = data.prs;
				setPRs(data.prs);
			} finally {
				setLoading(false);
			}
		}

		fetchPRs();
	}, []);

	return { prs, loading };
}
