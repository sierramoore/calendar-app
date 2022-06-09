import { FC, useState } from 'react';

// Here we specify the order of the types  that are returned by the modal
// This helps the type definition for  when we import it and use it.
type ModalHook = () => [
    boolean,
    () => void
];

export const useModal:ModalHook = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return [
    isShowing,
    toggle
  ]
};