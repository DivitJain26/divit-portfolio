import { u } from 'framer-motion/m';
import { NextResponse } from 'next/server';
import { da } from 'zod/v4/locales';

export async function GET() {
	try {
		const username = process.env.LEETCODE_USERNAME;

		if (!username) {
			return NextResponse.json({ solved: 0 });
		}

		const res = await fetch(
			`https://alfa-leetcode-api.onrender.com/${username}/solved`,
			{
				next: { revalidate: 3600 },
			}
		);

		if (!res.ok) {
			throw new Error('Failed to fetch LeetCode stats');
		}

		const data = await res.json();
		const solvedRaw = data.solvedProblem ?? data.totalSolved ?? null;
		const roundedSolved = Math.floor(solvedRaw / 1) * 1;

		return NextResponse.json({
			solved: roundedSolved,
		});
	} catch (error) {
		return NextResponse.json(
			{ solved: null },
			{ status: 500 }
		);
	}
}
