interface ErrorMessageProps {
	message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	return (
		<>
			<p className='mt-2 text-sm text-red-500'>
				<span className='font-medium'>Oops!</span>
				{message}
			</p>
		</>
	);
};
