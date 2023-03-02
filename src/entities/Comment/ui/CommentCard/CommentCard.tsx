import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <VStack
          max
          className={classNames(cls.CommentCard, {}, [className, cls.loading])}
          data-testid="CommentCard.Loading"
        >
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton className={cls.username} height={16} width={100} />
          </div>
          <Skeleton className={cls.text} height={50} width={100} />
        </VStack>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <VStack
        gap="8"
        max
        className={classNames(cls.CommentCard, {}, [className])}
        data-testid="CommentCard.Content"
      >
        <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
          {comment.user.avatar ? (
            <Avatar src={comment.user.avatar} size={30} />
          ) : (
            ''
          )}
          <Text className={cls.username} text={comment.user.username} />
        </AppLink>
        <Text className={cls.text} text={comment.text} />
      </VStack>
    );
  },
);
