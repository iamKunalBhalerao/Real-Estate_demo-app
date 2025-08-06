declare module 'react-outside-click-handler' {
  import { ReactNode } from 'react';

  interface OutsideClickHandlerProps {
    onOutsideClick: () => void;
    children: ReactNode;
    disabled?: boolean;
    useCapture?: boolean;
  }

  const OutsideClickHandler: React.FC<OutsideClickHandlerProps>;
  export default OutsideClickHandler;
}
