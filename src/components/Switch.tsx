import { useMemo } from 'react';
import clsx from 'clsx';
import { FC } from 'react';
import { useState, useCallback } from 'react';
import classes from './Switch.module.scss';

export const Switch: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onClick = useCallback(
    () => {
      setIsChecked((previous) => !previous);
    },
    [],
  );

  const wrapperClassName = useMemo(
    () =>
      clsx(classes.wrapper, {
        [classes.isChecked]: isChecked,
      }),
    [isChecked],
  );

  return (
       <div className={wrapperClassName} onClick={onClick} aria-hidden />
  );
};

