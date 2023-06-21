import React, { RefObject, useEffect, useRef, useState } from "react";

const Typewriter = () => {
  const typewriterRef = useRef<HTMLPreElement>(null);
  const object = `const person = {
  name: 'Callum Thomas',
  location: 'Melbourne, Australia',
  properties: [
    'react.js',
    'javascript',
    'HTML',
    'CSS',
    ...techStack
  ]
};`;
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const setupTypewriter = (element: HTMLPreElement) => {
      const HTML = element.innerHTML;
      element.innerHTML = "";

      let cursorPosition = 0;
      let tag = "";
      let writingTag = false;
      let tagOpen = false;
      let typeSpeed = 100;
      let tempTypeSpeed = 0;

      const type = () => {
        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = "";
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }

        if (!writingTag && tagOpen) {
          element.innerHTML += HTML[cursorPosition];
        }

        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = Math.random() * typeSpeed + 50;
          }
          element.innerHTML += HTML[cursorPosition];
        }

        if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = Math.random() * typeSpeed + 50;
          writingTag = false;
          if (tagOpen) {
            const newSpan = document.createElement("span");
            element.appendChild(newSpan);
            newSpan.innerHTML = tag;
            if (newSpan.firstChild) {
              tag = newSpan.firstChild.textContent || "";
            }
          }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
        }

        if (cursorPosition === HTML.length - 1) {
          setIsTypingComplete(true);
          setTimeout(() => {
            setIsTypingComplete(false);
            element.innerHTML = "";
            cursorPosition = 0;
            tag = "";
            writingTag = false;
            tagOpen = false;
            typeSpeed = 100;
            tempTypeSpeed = 0;
            type(); // Start typing again
          }, 10000); // Reset after 5 seconds
        }
      };

      return {
        type: type,
      };
    };

    const typewriterElement = typewriterRef.current;
    const typewriter = typewriterElement
      ? setupTypewriter(typewriterElement)
      : null;
    typewriter?.type();
  }, []);

  return (
    <pre ref={typewriterRef} id="typewriter" className="var-highlight">
      {object}
    </pre>
  );
};

export default Typewriter;
