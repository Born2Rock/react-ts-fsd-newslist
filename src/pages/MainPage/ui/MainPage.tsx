import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input';
import { Page } from '@/shared/ui/Page';

const MainPage = () => {
  const { t } = useTranslation();

  const [value, setValue] = useState('');
  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <Page data-testid="MainPage">
      {t('Главная страница')}
      <Input value={value} onChange={onChange} placeholder="Z" />
    </Page>
  );
};

export default MainPage;
