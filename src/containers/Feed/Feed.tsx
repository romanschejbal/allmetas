import { FC } from 'react';
import { Post } from '$components';
import { IPost } from '$models';

interface IProps {
  items: IPost[];
}

const Feed: FC<IProps> = ({ items }) => (
  <div className="grid auto-cols-min grid-flow-col gap-4 overflow-x-scroll">
    {items.map(({ id, title, description }) => (
      <Post key={id} title={title} description={description} />
    ))}
  </div>
);

export default Feed;
