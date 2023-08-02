import { isBoolean, isNumber } from 'lodash-es';

/**
 * 1 argument passed: accepts a number and returns
 * a formatted string
 *
 * 2 argument passed: accepts a number and number or boolean and returns
 * a formatted string
 *
 * 3 argument passed: accepts two numbers and boolean and returns
 * a formatted string
 *
 * eg:
 * amountFormat(100000) => 100,000
 * amountFormat(100000, 2) => 100,000.00
 * amountFormat(100000, false) => 100.000
 * amountFormat(100000, 2, false) => 100.000.00
 *
 * @param {number} value - a currency amount
 * @param {number | boolean} decimalOrComma - number of decimals to return or comma boolean
 * @param {boolean} comma - boolean of comma
 */
function amountFormat(value: number, decimalOrComma?: number | boolean, comma?: boolean): string {
	let decimal = 0;
	let commaSeparation = true;
	if (isNumber(decimalOrComma)) {
		decimal = decimalOrComma;
		if (comma) {
			commaSeparation = comma;
		}
	}
	if (isBoolean(decimalOrComma)) {
		commaSeparation = decimalOrComma;
	}

	return value
		.toFixed(decimal)
		.toString()
		.replace(/(?<!\..*)\B(?=(\d{3})+(?!\d))/g, commaSeparation ? ',' : '.');
}

export default amountFormat;
