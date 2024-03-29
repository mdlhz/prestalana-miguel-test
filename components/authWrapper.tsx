import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getValidAuthTokens } from '@/lib/cookies';
import { useGetAuthDataQuery } from '@/slices/authApiSlice';
import { RootState } from '@/store';
import { useEffect } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { userEmail } = useSelector((state: RootState) => state.auth);

  const { token } = getValidAuthTokens();

  // this query will only execute if the token is valid and the user email is not already in the redux store
  const { error, isLoading } = useGetAuthDataQuery(
    { token: token || '' },
    {
      // The useGetAuthDataQuery hook will not execute the query at all if these values are falsy
      skip: !!userEmail || !token,
    }
  );

  // if the user doesnt have a valid token, redirect to login page
  useEffect(() => {
    if (!token) {
      push('/login');
      // will explain this in a moment
      dispatch(logout());
    }
  }, [token, push]);

  // optional: show a loading indicator while the query is loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return children;
}

function logout(): any {
    throw new Error('Function not implemented.');
}
