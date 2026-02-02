export function Textarea({ label, ...props }: any) {
	return (
		<div>
			<label className="text-white font-medium mb-2 block">{label}</label>
			<textarea
				{...props}
				rows={5}
				required
				className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
			/>
		</div>
	);
}