import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { Text } from '@/shared/ui/Text';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList } from '@/entities/Article';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(
  ({ className }: ArticleInfiniteListProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
      dispatch(initArticlesPage(searchParams));
    });

    if (error) {
      return (
        // eslint-disable-next-line i18next/no-literal-string
        <Text text="error here" /> // error here
      );
    }

    return (
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={className}
      />
    );
  },
);
