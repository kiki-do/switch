import clsx from 'clsx';
import type { FC } from 'react';
import { useState, useCallback } from 'react';
import classes from './Switch.module.scss';

export const Switch: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onClickChecked = useCallback(
    () => {
      setIsChecked((previous) => !previous);
    },
    [setIsChecked],
  );

  

  return (
       <div className={clsx(classes.wrapper, {[classes.changeColor] : isChecked})} onClick={onClickChecked}>
          <span className={clsx(classes.complete, {[classes.circle] : !isChecked})} />
       </div>
  );
};

