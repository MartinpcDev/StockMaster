export function dateFormat(date: Date) {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	};

	return new Intl.DateTimeFormat('es-ES', options).format(date);
}
