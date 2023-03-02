import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/shared/ui/Page';
import cls from './NotFoundPage.module.scss';
import { TestProps } from '@/shared/types/tests';

interface NotFoundPageProps extends TestProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t('Страница не найдена')}
    </Page>
  );
};
