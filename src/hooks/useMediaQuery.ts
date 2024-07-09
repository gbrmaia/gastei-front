import { useEffect, useState } from 'react';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Add the listener to update matches on document change
    mediaQueryList.addListener(documentChangeHandler);

    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
