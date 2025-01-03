import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/form';
import { LoginRequest } from '@/models/user-model';
import { AlertCircle } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { login } from '@/services/api';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

export const LoginForm: React.FC = () => {
	const [error, setError] = useState<{ error: string; message: string }>();
	const form = useForm({
		defaultValues: {
			username: '',
			password: ''
		}
	});

	const onSubmit = (values: LoginRequest) => {
		login(values)
			.then(response => console.log(response))
			.catch(err => {
				if (err && err instanceof AxiosError) {
					setError(err.response?.data);
				}
			});
	};
	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input type='text' placeholder='Username' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type='password' placeholder='Password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{error && (
						<Alert variant='destructive'>
							<AlertCircle className='h-4 w-4' />
							<AlertTitle>{error.error}</AlertTitle>
							<AlertDescription>{error.message}</AlertDescription>
						</Alert>
					)}
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</>
	);
};
