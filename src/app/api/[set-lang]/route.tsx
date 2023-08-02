import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const langCookie = request.url.slice(-2);

	cookies().set({
		name: 'i18next',
		value: langCookie,
		httpOnly: true,
		path: '/',
	});

	return NextResponse.json({ lang: langCookie });
}
