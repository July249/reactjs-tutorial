import { useRef, useCallback } from 'react';
import Post from './Post';
import { useInfiniteQuery } from 'react-query';
import { getPostsPage } from './api/axios';

const Example2 = () => {
  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    '/posts',
    ({ pageParam = 1 }) => getPostsPage(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    }
  );

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log('We are near the last post!');
          fetchNextPage();
        }
      });
      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === 'error') return <p className='center'>Error: {error.message}</p>;

  const content = data?.pages.map((page) => {
    return page.map((post, idx) => {
      if (page.length === idx + 1) {
        return <Post key={post.id} post={post} ref={lastPostRef} />;
      }
      return <Post key={post.id} post={post} />;
    });
  });

  return (
    <>
      <h1 id='top'>
        &infin; Infinite Query &amp; Scroll
        <br />
        &infin; Ex. 2 - React Query
      </h1>
      {content}
      {isFetchingNextPage && <p className='center'>Loading More Posts...</p>}
      <p className='center'>
        <a href='#top'>Back to Top</a>
      </p>
    </>
  );
};

export default Example2;
