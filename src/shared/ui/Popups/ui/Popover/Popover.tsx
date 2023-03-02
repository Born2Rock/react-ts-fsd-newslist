import { Popover as HPopover } from '@headlessui/react';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../consts/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const { className, direction = 'bottom left', trigger, children } = props;

  const menuClasses = [mapDirectionClass[direction]];

  // as={Fragment}

  return (
    <HPopover
      className={classNames(cls.Dropdown, {}, [className, popupCls.Popup])}
    >
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
