import type { NextPage } from 'next';
import { POSTS, ROWS } from '$mocks';
import { Home } from '$containers';

const Dashboard: NextPage = () => <Home posts={POSTS} rows={ROWS} />;

export default Dashboard;
