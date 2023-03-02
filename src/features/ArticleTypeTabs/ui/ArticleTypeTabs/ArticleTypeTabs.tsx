import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
  ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const tabs = useMemo<TabItem[]>(
      () => [
        {
          value: ArticleType.ALL,
          content: t('Все'),
        },
        {
          value: ArticleType.SCIENCE,
          content: t('Наука'),
        },
        {
          value: ArticleType.ECONOMICS,
          content: t('Экономика'),
        },
        {
          value: ArticleType.IT,
          content: t('IT'),
        },
      ],
      [t],
    );

    const onTabClick = useCallback(
      (tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
      },
      [onChangeType],
    );

    return (
      <Tabs
        tabs={tabs}
        value={value}
        onTabClick={onTabClick}
        className={classNames('', {}, [className])}
      />
    );
  },
);
