import React, { useState, useCallback } from "react";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => {
      setCount(count + 1);
    }, [count]);
  
    return <ChildComponent onClick={handleClick} />;
  };
  
  interface ChildComponentProps {
    onClick: () => void;
  }

  const ChildComponent = React.memo(({ onClick }: ChildComponentProps) => {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Click me</button>;
  });
  