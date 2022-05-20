import Head from 'next/head';
import {
  fetchHydra as baseFetchHydra,
  hydraDataProvider as baseHydraDataProvider,
  HydraAdmin,
} from '@api-platform/admin';
import { parseHydraDocumentation } from '@api-platform/api-doc-parser';
import { getToken } from '../../fetchGraphQL';

const getHeaders = () =>
  getToken()
    ? {
        Authorization: `Bearer ${getToken()}`,
      }
    : {};

const fetchHydra = (url: URL, options = {}) =>
  baseFetchHydra(url, {
    ...options,
    headers: getHeaders as any,
  });

const apiDocumentationParser = async () => {
  try {
    return await parseHydraDocumentation(
      process.env.NEXT_PUBLIC_ADMIN_ENTRYPOINT!,
      { headers: getHeaders as any, mode: 'cors' }
    );
  } catch (result) {
    const { api, response, status } = result as any;

    window.location.href = '/signin';

    return {
      api,
      response,
      status,
    };
  }
};
const dataProvider = baseHydraDataProvider({
  entrypoint: process.env.NEXT_PUBLIC_ADMIN_ENTRYPOINT!,
  httpClient: fetchHydra,
  apiDocumentationParser,
  useEmbedded: true,
});

const AdminLoader = () => {
  return (
    <HydraAdmin
      entrypoint={process.env.NEXT_PUBLIC_ADMIN_ENTRYPOINT!}
      dataProvider={dataProvider}
    />
  );
};

const Admin = () => (
  <>
    <Head>
      <title>API Platform Admin</title>
    </Head>
    <AdminLoader />
  </>
);

export default Admin;
