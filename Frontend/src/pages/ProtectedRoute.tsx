/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route } from 'wouter';

interface ProtectedRouteProps {
	path: string;
	component: React.ComponentType<any>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	path,
	component: Component
}) => {
	const token = localStorage.getItem('token');

	if (!token) {
		console.log('nno hay token');
	}

	return <Route path={path} component={Component} />;
};
