import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';
import { Header } from './Header';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const userPromise = getUser();
  const teamPromise = getTeamForUser();

  return (
    <SWRConfig
      value={{
        fallback: {
          '/api/user': await userPromise,
          '/api/team': await teamPromise
        }
      }}
    >
      <section className="flex flex-col min-h-screen">
        <Header />
        {children}
      </section>
    </SWRConfig>
  );
}
