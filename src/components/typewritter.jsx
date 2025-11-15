import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Typewriter({ text, sxProp, typingSpeed = 100, deletingSpeed = 100, delay = 3000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText.length < text.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayedText.length === text.length) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText.length === 0) {
      // Restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return <Typography variant='h3'
                sx={sxProp}>{displayedText}</Typography>;
}

export default Typewriter;
