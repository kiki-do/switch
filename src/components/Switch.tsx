import clsx from 'clsx';
import type { FC } from 'react';
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


  return (
       <div className={clsx(classes.wrapper, {[classes.isChecked] : isChecked})} onClick={onClick} />
  );
};

