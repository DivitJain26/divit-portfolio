import { NextResponse } from 'next/server';

export async function GET() {
	const username = process.env.GITHUB_USERNAME;
	const token = process.env.GITHUB_TOKEN;

	if (!username || !token) {
		return NextResponse.json({ prs: 0 });
	}

	try {
		const res = await fetch(
			`https://api.github.com/search/issues?q=is:pr+is:merged+author:${username}+-user:${username}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: 'application/vnd.github+json',
				},
				next: { revalidate: 3600 },
			}
		);

		const data = await res.json();

		const rawPRs = data.total_count ?? null;
		const roundedPRs = Math.floor(rawPRs / 1) * 1;

		return NextResponse.json({
			prs: roundedPRs,
		});
	} catch (error) {
		console.error('GitHub PR fetch failed:', error);
		return NextResponse.json({ prs: null });
	}
}
