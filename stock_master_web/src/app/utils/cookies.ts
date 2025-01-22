'use server';
import { cookies } from 'next/headers';

export async function setCustomCookies(name: string, data: string) {
	const cookiesStore = await cookies();

	cookiesStore.set(name, data, {
		httpOnly: true,
		maxAge: 3000,
		path: '/',
		secure: false
	});
}

export async function deleteCustomCookie(name: string) {
	const cookiesStore = await cookies();
	cookiesStore.delete(name);
}

export async function extractCustomCookie(name: string) {
	const cookiesStore = await cookies();
	const token = cookiesStore.get(name);
	return !token ? false : token.value;
}
