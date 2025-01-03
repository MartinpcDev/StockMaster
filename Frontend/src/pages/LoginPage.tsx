import { LoginForm } from '@/components/login/LoginForm';

export const LoginPage: React.FC = () => {
	// const [token, setToken] = useState<string>();
	// useEffect(() => {
	// 	const fetchLogin = async () => {
	// 		try {
	// 			const response = await login({
	// 				username: 'martinpc',
	// 				password: '76199405'
	// 			});
	// 			localStorage.setItem('token', response);
	// 			setToken(response);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};

	// 	fetchLogin();
	// }, []);
	return (
		<>
			<div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
				<div className='w-full max-w-sm'>
					<LoginForm />
				</div>
			</div>
		</>
	);
};
