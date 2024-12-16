import { useEffect, useState } from 'react';
import { Linking } from 'react-native';

export const useInitialDeepLink = () => {
  const [initialDeepLink, setInitialDeepLink] = useState<string | null>(null);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      const initialURL = await Linking.getInitialURL();

      if (initialURL) {
        const parsedURL = initialURL.replace('itxiapp://', '');
        setInitialDeepLink(parsedURL);
      }
      setIsAppReady(true);
    };

    initializeApp();
  }, []);

  return { isAppReady, initialDeepLink };
};
