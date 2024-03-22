// TypingSpan.js
import React, { useEffect, useState } from 'react';

function TypingSpan({ text }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typingForward) {
        setDisplayText(text.substring(0, currentIndex));
        setCurrentIndex(prevIndex => {
          if (prevIndex >= text.length) {
            setTypingForward(false);
            return prevIndex - 1;
          }
          return prevIndex + 1;
        });
      } else {
        setDisplayText(text.substring(0, currentIndex));
        setCurrentIndex(prevIndex => {
          if (prevIndex <= 0) {
            setTypingForward(true);
            return prevIndex + 1;
          }
          return prevIndex - 1;
        });
      }
    }, 200); 

    return () => clearInterval(typingInterval);
  }, [currentIndex, text, typingForward]);

  return <span className=' text-red-600'>{displayText}</span>;
}

export default TypingSpan;
