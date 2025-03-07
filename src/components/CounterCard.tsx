"use client"
import { useEffect, useState } from 'react';

interface CounterCardProps {
  target: number;
  label: string;
}

const CounterCard = ({ target, label }: CounterCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const speed = 1000;
    const increment = Math.ceil(target / speed);
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="counter-card text-black cursor-pointer p-8">
      <div className="text-4xl font-bold">{count}+</div>
      <div className="mt-4 text-lg text-gray-100 font-semibold">{label}</div>
    </div>
  );
};

export default CounterCard;