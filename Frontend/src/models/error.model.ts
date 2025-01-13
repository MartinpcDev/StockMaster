export interface ErrorResponse extends Error {
	error: string;
	message: string;
	details: string[];
}
