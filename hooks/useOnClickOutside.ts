import {useEffect} from 'react';

interface IProps {
  ref: any;
  handler: any;
}

export const useOnClickOutside = ({ref, handler}: IProps) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref?.current || ref?.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
