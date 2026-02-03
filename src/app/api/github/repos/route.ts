import { NextResponse } from 'next/server';

export async function GET() {
	const username = process.env.GITHUB_USERNAME;
	const token = process.env.GITHUB_TOKEN;

	if (!username || !token) {
		console.error('GitHub username or token not set in environment variables.');
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

		const data = await res.json();

		if (!Array.isArray(data)) {
			console.error('GitHub repos API error:', data);
			return NextResponse.json({ repos: null });
		}

		// only repos you created, not forks
		const ownRepos = data.filter(
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
