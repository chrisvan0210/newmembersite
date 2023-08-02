import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import xlsx from 'xlsx';

export async function GET(req: Request) {
	// Fetch the Excel file from the public folder or a CDN URL
	// Adjust the URL based on the location of your Excel file

	//! for public folder
	// const filePath = path.join(process.cwd(), 'public', 'winners-test.xlsx');
	// const workbook = xlsx.readFile(filePath);
	// const sheetName = workbook.SheetNames[0];
	// const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

	//! for CDN URL
	const ress = await fetch('https://cdn.hanwei1234.com/Content/winners-aug.xlsx', {
		method: 'GET',
	})
		.then(response => response.arrayBuffer())
		.then(response => {
			const data = new Uint8Array(response);
			const workbook = xlsx.read(data, { type: 'array' });
			const myHeader = ['title', 'winners', 'amount', 'bonus'];

			const sheetName = workbook.SheetNames[0];
			const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: myHeader });
			return sheetData;
		});

	return NextResponse.json(ress);
}
