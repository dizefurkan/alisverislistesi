import { useState } from "react";

type Props = {
  audioUrl: string;
  volume?: number; // default 1
};

export function useAudio(props: Props) {
  // const [isPlay, setPlay] = useState(false);

  const [audio] = useState(new Audio(props.audioUrl));

  // useEffect(() => {
  //   audio.addEventListener("ended", () => setPlay(false));

  //   return () => {
  //     audio.removeEventListener("ended", () => setPlay(false));
  //   };
  // }, []);

  // const togglePlay = () => {
  //   setPlay((prev) => {
  //     const _play = !prev;
  //     _play ? audio.play() : audio.pause();

  //     return _play;
  //   });
  // };

  return {
    play: () => {
      audio.volume = props.volume ?? 1;
      audio.currentTime = 0;
      audio.play();
    },
  };
}
