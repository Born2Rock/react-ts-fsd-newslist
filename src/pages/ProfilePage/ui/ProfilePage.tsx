import { useParams } from 'react-router-dom';
import { Page } from '@/shared/ui/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { VStack } from '@/shared/ui/Stack';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  // if (!id) {
  //   return <Text text={t('нет id')} />;
  // }

  return (
    <Page data-testid="ProfilePage">
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
