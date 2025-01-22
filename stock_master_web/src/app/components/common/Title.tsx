interface TitleProps {
	title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
	return (
		<>
			<h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl'>
				{title}
			</h1>
		</>
	);
};
