import { NextResponse } from 'next/server';
import xlsx from 'xlsx';

export async function GET(req: Request, { params }: { params: { fileName: string } }) {
	const { fileName } = params;
	// Fetch the Excel file from the public folder or a CDN URL
	// Adjust the URL based on the location of your Excel file

	//! for public folder
	// const filePath = path.join(process.cwd(), 'public', 'winners-test.xlsx');
	// const workbook = xlsx.readFile(filePath);
	// const sheetName = workbook.SheetNames[0];
	// const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

	//! for CDN URL
	const res = await fetch(`https://cdn.hanwei1234.com/Content/excel/${fileName}`)
		.then(response => response.arrayBuffer())
		.then(response => {
			const data = new Uint8Array(response);
			const workbook = xlsx.read(data, { type: 'array' });
			const tableHeader = ['title', 'winners', 'amount', 'bonus'];

			const sheetName = workbook.SheetNames[0];
			const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: tableHeader });
			return sheetData;
		});

	return NextResponse.json(res);
}
