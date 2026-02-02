export function calculateMonthsOfExperience(startDate: string): number {
	const start = new Date(startDate);
	const now = new Date();

	const yearsDiff = now.getFullYear() - start.getFullYear();
	const monthsDiff = now.getMonth() - start.getMonth();

	return yearsDiff * 12 + monthsDiff;
}
