import { useEffect, useState } from "react";

interface Props {
  isFront: boolean;
  infoTrigger: number;
}

export const useShakeCard = ({ isFront, infoTrigger }: Props) => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (!infoTrigger) return;

    setShake(true);

    const t = setTimeout(() => {
      setShake(false);
    }, 300);

    return () => clearTimeout(t);
  }, [infoTrigger]);

  const animate = isFront && shake ? { x: [-10, 10, -6, 6, 0] } : { x: 0 };

  const transition = {
    duration: 0.3,
  };

  return {
    animate,
    transition,
    isShaking: shake,
  };
};
