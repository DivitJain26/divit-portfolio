import { NextResponse } from 'next/server';

export async function GET() {
	const username = process.env.GITHUB_USERNAME;
	const token = process.env.GITHUB_TOKEN;

	if (!username || !token) {
		return NextResponse.json({ repos: 0 });
	}

	try {
		const res = await fetch(
			`https://api.github.com/users/${username}/repos?type=owner&per_page=100`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: 'application/vnd.github+json',
				},
				next: { revalidate: 3600 },
			}
		);

		const repos = await res.json();

		// only repos you created, not forks
		const ownRepos = repos.filter(
			(repo: any) => !repo.fork && repo.owner.login === username
		);

		const roundedRepos = Math.floor(ownRepos.length / 1) * 1;

		return NextResponse.json({
			repos: roundedRepos,
		});
	} catch (error) {
		console.error('Repo fetch failed:', error);
		return NextResponse.json({ repos: null });
	}
}
