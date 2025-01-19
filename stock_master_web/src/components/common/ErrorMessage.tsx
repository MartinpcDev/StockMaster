interface ErrorMessageProps {
	message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	return (
		<>
			<span className='text-red-600'>{message}</span>
		</>
	);
};
