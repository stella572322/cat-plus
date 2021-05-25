import { useState, useEffect } from 'react';

const useMedia = () => {
  const phoneMedia = window.matchMedia('(max-width: 960px)');
  const desktopMedia = window.matchMedia('(min-width: 961px)');
  let defaultMedia = 'desktop';

  if (phoneMedia.matches) {
    defaultMedia = 'phone';
  }

  const [media, setMedia] = useState(defaultMedia);

  const handleMediaChange = (mediaName) => (mediaHandler) => {
    if (mediaHandler.matches && mediaName !== media) {
      setMedia(mediaName);
    }
  };

  useEffect(() => {
    const phoneHandler = handleMediaChange('phone');
    const desktopHandler = handleMediaChange('desktop');
    phoneMedia.addListener(phoneHandler);
    desktopMedia.addListener(desktopHandler);
    return () => {
      phoneMedia.removeListener(phoneHandler);
      desktopMedia.removeListener(desktopHandler);
    };
  }, [media]);

  return media;
};

export default useMedia;
