'use client';

import { useEffect, useState } from 'react';

let cachedRepos: number | null = null;

export function useGitHubRepos() {
	const [repos, setRepos] = useState<number | null>(cachedRepos);
	const [loading, setLoading] = useState(cachedRepos === null);

	useEffect(() => {
		if (cachedRepos !== null) return;

		async function fetchRepos() {
			try {
				const res = await fetch('/api/github/repos');
				const data = await res.json();

				cachedRepos = data.repos;
				setRepos(data.repos);
			} finally {
				setLoading(false);
			}
		}

		fetchRepos();
	}, []);

	return { repos, loading };
}
