import Button from "@/app/_components/Button";
import Player from "@/app/_components/Player";
import Skeleton from "@/app/_components/Skeleton";
import { cn } from "@/app/_utils/cn";
import {
  AudioWaveform,
  Copy,
  Fish,
  Funnel,
  Info,
  Loader2,
  Maximize,
  MessageCircle,
  Mic,
  NotebookText,
  Rocket,
  Star,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Progress from "./Progress";

// type Score = {
//   id: string;
//   label: string;
//   value: number;
//   total: number;
//   notes?: [
//     {
//       label: string;
//       timestamp?: string;
//     }
//   ];
// };

// const MOCK_PROGRESS_PROCESSING = {
//   id: "123",
//   status: "PROCESSING",
// };

const MOCK_PROGRESS_COMPLETED = {
  id: "123",
  status: "COMPLETED",
  scores: {
    overall: {
      label: "Overall",
      value: 41,
      displayValue: "41%",
      total: 100,
    },
    filler: {
      label: "Filler",
      value: 4,
      displayValue: "62.5%",
      total: 10,
    },
    pace: {
      label: "Pace",
      displayValue: "65 WPM",
      value: 2,
      total: 10,
    },
    vocal_variety: {
      label: "Variety",
      value: 7,
      displayValue: "92%",
      total: 10,
    },
    clarity: {
      label: "Clarity",
      displayValue: "80.2%",
      value: 7,
      total: 10,
    },
  },
  details: {
    filler: {
      total_words: 8,
      filler_count: 5,
      filler_rate: 0.625,
      filler_words_found: [
        {
          word: "so",
          start: 0.723,
          end: 1.227,
        },
        {
          word: "uh",
          start: 2.034,
          end: 2.095,
        },
        {
          word: "uh",
          start: 3.548,
          end: 4.113,
        },
        {
          word: "uh",
          start: 6.937,
          end: 7.058,
        },
        {
          word: "uh",
          start: 7.765,
          end: 8.067,
        },
      ],
    },
    pace: {
      wpm: 65.359477124183,
      total_words: 8,
      total_duration: 7.344,
    },
    vocal_variety: {
      pitch_variation: 98.68079376220703,
      energy_variation: "4.838563",
      spectral_variation: "56190700000.0",
      pitch_score: 9.868079376220702,
      energy_score: 0.9677125930786132,
      spectral_score: 10,
    },
    clarity: {
      avg_confidence: 0.802625,
      confidence_component: 8.026250000000001,
      acoustic_component: 5.608959589004517,
      num_words_scored: 8,
    },
  },
  transcription: {
    segments: [
      {
        start: 0.723,
        end: 8.067,
        text: " So, uh, this, uh, it's weird, uh, uh,",
        words: [
          {
            word: "So,",
            start: 0.723,
            end: 1.227,
            score: 0.928,
            speaker: "SPEAKER_00",
          },
          {
            word: "uh,",
            start: 2.034,
            end: 2.095,
            score: 0.608,
            speaker: "SPEAKER_00",
          },
          {
            word: "this,",
            start: 2.377,
            end: 2.66,
            score: 0.838,
            speaker: "SPEAKER_00",
          },
          {
            word: "uh,",
            start: 3.548,
            end: 4.113,
            score: 0.647,
            speaker: "SPEAKER_00",
          },
          {
            word: "it's",
            start: 4.133,
            end: 4.314,
            score: 0.775,
            speaker: "SPEAKER_00",
          },
          {
            word: "weird,",
            start: 4.496,
            end: 5.969,
            score: 0.924,
            speaker: "SPEAKER_00",
          },
          {
            word: "uh,",
            start: 6.937,
            end: 7.058,
            score: 0.86,
            speaker: "SPEAKER_01",
          },
          {
            word: "uh,",
            start: 7.765,
            end: 8.067,
            score: 0.841,
            speaker: "SPEAKER_00",
          },
        ],
        speaker: "SPEAKER_00",
      },
    ],
    word_segments: [
      {
        word: "So,",
        start: 0.723,
        end: 1.227,
        score: 0.928,
        speaker: "SPEAKER_00",
      },
      {
        word: "uh,",
        start: 2.034,
        end: 2.095,
        score: 0.608,
        speaker: "SPEAKER_00",
      },
      {
        word: "this,",
        start: 2.377,
        end: 2.66,
        score: 0.838,
        speaker: "SPEAKER_00",
      },
      {
        word: "uh,",
        start: 3.548,
        end: 4.113,
        score: 0.647,
        speaker: "SPEAKER_00",
      },
      {
        word: "it's",
        start: 4.133,
        end: 4.314,
        score: 0.775,
        speaker: "SPEAKER_00",
      },
      {
        word: "weird,",
        start: 4.496,
        end: 5.969,
        score: 0.924,
        speaker: "SPEAKER_00",
      },
      {
        word: "uh,",
        start: 6.937,
        end: 7.058,
        score: 0.86,
        speaker: "SPEAKER_01",
      },
      {
        word: "uh,",
        start: 7.765,
        end: 8.067,
        score: 0.841,
        speaker: "SPEAKER_00",
      },
    ],
  },
};

const STATUSES = [
  {
    key: "overall",
    className: "md:col-span-2 bg-blue-400 hover:bg-blue-500 text-white",
    icon: <Star className="text-yellow-200 h-full w-auto p-3 mr-2" />,
  },
  {
    key: "filler",
    className: "bg-purple-400 hover:bg-purple-500 text-white",
    icon: <Funnel className="text-red-200 h-full w-auto p-3 mr-2" />,
  },
  {
    key: "pace",
    className: "bg-red-400 hover:bg-red-500 text-white",
    icon: <Rocket className="text-lime-200 h-full w-auto p-3 mr-2" />,
  },
  {
    key: "vocal_variety",
    className: "bg-green-400 hover:bg-green-500 text-white",
    icon: <AudioWaveform className="text-amber-300 h-full w-auto p-3 mr-2" />,
  },
  {
    key: "clarity",
    className: "bg-orange-400 hover:bg-orange-500 text-white",
    icon: <Fish className="text-purple-400 h-full w-auto p-3 mr-2" />,
  },
];

const ProgressPage = () => {
  const progress = MOCK_PROGRESS_COMPLETED;

  if (progress.status === "PROCESSING")
    return (
      <div className="max-w-2xl mx-auto w-full p-3 flex flex-col items-center h-full min-h-[calc(100dvh_-_1rem)]">
        <span className="flex gap-2 items-center mt-12">
          <Image
            className="-mt-12 -ml-4"
            alt="action"
            src="/main-photo.png"
            width={150}
            height={320}
          />
          <div>
            <h1 className="text-4xl font-black">
              <Loader2 className="animate-spin size-8 inline mb-1.5 scale-75 mr-2" />
              Processing...
            </h1>
            <p className="text-lg leading-loose mb-2">
              It might take a few minutes
            </p>
          </div>
        </span>
        <div className="grid grid-cols-2 gap-2 w-full max-w-2xl">
          {STATUSES.map((status, i) => (
            <div
              key={i}
              className={cn(
                "border-blue-800/10 border rounded-3xl w-full h-full p-4 py-4 flex gap-2 items-center",
                status.className
              )}
            >
              {status.icon}
              <div className="flex gap-1 flex-col my-1">
                <Skeleton className="w-36 h-6" />

                <Skeleton className="w-28 h-4 translate-x-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="max-w-xl mx-auto w-full p-3 flex flex-col items-center h-full md:pb-3 pb-20 gap-2 min-h-[calc(100dvh_-_1rem)]">
      <span className="flex gap-2 items-center md:mt-4">
        <Image
          className="-mt-10 -ml-4"
          alt="action"
          src="/main-photo.png"
          width={150}
          height={320}
        />
        <div>
          <h1 className="text-4xl font-black">Amazing Job!</h1>
          <p className="text-lg mb-2">
            Your Speech is top-notch!
          </p>
        </div>
      </span>
      <span className="flex gap-1 w-full items-center">
        <MessageCircle />
      <p className="text-2xl font-black">Doru Doros</p>
        </span>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-0.5 w-full max-w-xl">
        {STATUSES.map((status, i) => {
          const crtProgress =
            progress.scores?.[status.key as keyof typeof progress.scores];
          return (
            <div
              key={i}
              className={cn(
                "group/card border-blue-800/10 border border-b-6 rounded-3xl w-full h-full p-4 py-4 flex items-center transition-colors duration-500",
                status.className
              )}
            >
              {status.icon}
              <div className="flex flex-1 whitespace-nowrap gap-1 flex-col my-1 mb-0.5">
                <span className="text-2xl font-black leading-none">
                  {crtProgress?.displayValue}{" "}
                </span>
                <p className="text-lg font-bold opacity-75 leading-none">
                  {
                    crtProgress?.label
                  }
                  <Info className="h-3 mb-0.5 ml-0.5 inline" />
                </p>
              </div>
              <Progress value={crtProgress?.value} total={crtProgress?.total} label={crtProgress?.label} />
            </div>
          );
        })}
      </div>
      <div className="player-wrapper w-full rounded-3xl overflow-hidden">
        <Player />
      </div>
      <div className="w-full sticky md:bottom-2 bottom-16 md:pb-0 pb-2 top-0">
        <Button
          variant="black"
          className="relative w-full mt-2 text-xl font-bold shadow-lg"
        >
          <Mic />
          Record Again
        </Button>
      </div>
      <span className="text-2xl font-black w-full flex items-center mt-2">
        <NotebookText className="inline mr-1" />
        Transcription

        <Button variant="general" className="inline ml-auto"><Copy /></Button>
        <Button variant="general" className="inline"><Maximize /></Button>
      </span>
      <div className="flex w-full flex-col">
        {progress.transcription.segments.map((segment, i) => (
          <div key={i}>
            <p className="text-sm font-bold opacity-50 ml-1">
              {segment.speaker.toLocaleLowerCase()}
            </p>
            {segment.words.map((word, i) => (
              <Button
                key={i}
                variant="general"
                className="first:-ml-0.5 py-0.5 inline px-1"
              >
                {word.word}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressPage;
