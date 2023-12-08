import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import GalleryBanner from './GalleryBanner';
import { Helmet } from 'react-helmet-async';

const getArticles = async ({ pageParam = 0 }) => {
  const res = await fetch(`https://fitness-tracker-server-tan.vercel.app/api/articles?limit=12&offset=${pageParam}`);
  const data = await res.json();

  return { ...data, prevOffset: pageParam };
};

const Gallery = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 12 > lastPage.articlesCount) {
        return false;
      }
      return lastPage.prevOffset + 12;
    },
  });

  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles];
  }, []);

  return (
    <div>
      <Helmet>
                <title>FitNezz | Gallery</title>
            </Helmet>
      <div>
        <GalleryBanner></GalleryBanner>
      </div>
      <div>
        <InfiniteScroll
          dataLength={articles ? articles.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<span className="loading loading-bars loading-lg"></span>} // Loading animation when loading more data
        >
          <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
            {articles &&
              articles.map((article, idx) => {
                return (
                  <div className="-2 p-2 rounded" key={idx}>
                    <img src={article.author.image} alt="" />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>

        {isLoading && <span className="loading loading-bars loading-lg"></span>} {/* Loading animation when initial data is being loaded */}
      </div>
    </div>
  );
};

export default Gallery;
