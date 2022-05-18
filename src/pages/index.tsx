import type { NextPage } from 'next';
import { Feed, MainLayout } from '$containers';
import { POSTS } from '$mocks';

const Dashboard: NextPage = () => (
  <MainLayout>
    <Feed items={POSTS} />
  </MainLayout>
);

export default Dashboard;
