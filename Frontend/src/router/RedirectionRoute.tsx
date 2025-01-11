import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const RedirectionRoute: React.FC = () => {
	const [, setLocation] = useLocation();

	useEffect(() => {
		setLocation('/');
	}, [setLocation]);

	return null;
};
