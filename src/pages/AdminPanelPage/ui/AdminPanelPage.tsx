import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/shared/ui/Page';
import cls from './AdminPanel.module.scss';

interface AdminPanelProps {
  className?: string;
}

const AdminPanel = memo(({ className }: AdminPanelProps) => {
  const { t } = useTranslation();
  return (
    <Page
      data-testid="AdminPanel"
      className={classNames(cls.AdminPanel, {}, [className])}
    >
      {t('AdminPanel')}
    </Page>
  );
});

export default AdminPanel;
