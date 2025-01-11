interface CustomButtonProps {
	text: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
	return (
		<button
			type='submit'
			className='bg-secondary bg-opacity-85 border-0 py-2 px-8 focus:outline-none hover:bg-opacity-100 rounded text-lg transition-colors'>
			{text}
		</button>
	);
};
