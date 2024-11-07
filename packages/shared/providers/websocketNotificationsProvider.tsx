import { CookieValueTypes } from 'cookies-next';
import { createContext, useContext, useMemo, useEffect, ReactNode } from 'react';

type WSProviderProps = { children: ReactNode; url: string; token: CookieValueTypes };

const WSStateContext = createContext<WebSocket | null>(null);

function WSProvider({ children, url, token }: WSProviderProps): JSX.Element {
	const tokenSplit = token ? token.toString().split(' ')[1] : null;
	const wsInstance = useMemo(
		() =>
			typeof window != 'undefined' && token && tokenSplit != null
				? new WebSocket(`${process.env.NEXT_PUBLIC_SOCKET_URL}/${url}`, ['actioncable-v1-json', tokenSplit as string])
				: null,
		[!!token],
	);

	useEffect(() => {
		return () => {
			wsInstance?.close();
		};
	}, []);

	useEffect(() => {
		if (!token) {
			wsInstance?.close();
		}
	}, [token]);

	return <WSStateContext.Provider value={wsInstance}>{children}</WSStateContext.Provider>;
}

function useWS(): WebSocket {
	const context = useContext(WSStateContext);
	// @ts-ignore
	return context;

	// if (context == undefined) {
	// 	throw new Error('useWS must be used within a WSProvider');
	// }
}

export { WSProvider, useWS };
