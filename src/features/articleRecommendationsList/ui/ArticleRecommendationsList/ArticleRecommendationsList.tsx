import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles } = useArticleRecommendationsList(3);

    if (!articles) {
      return null;
    }

    return (
      <VStack
        gap="8"
        className={classNames('cls.ArticleRecommendationsList', {}, [
          className,
        ])}
        data-testid="ArticleRecommendationsList"
      >
        <Text size={TextSize.L} title={t('Рекоммендации')} />
        <ArticleList
          articles={articles}
          target="_blank"
          // virtualized={false}
        />
      </VStack>
    );
  },
);