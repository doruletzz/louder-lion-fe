import Button from "@/app/_components/Button";
import Player from "@/app/_components/Player";
import Skeleton from "@/app/_components/Skeleton";
import { cn } from "@/app/_utils/cn";
import {
  AudioWaveform,
  Book,
  Fish,
  Funnel,
  Loader2,
  MessageSquare,
  Mic,
  NotebookText,
  Rocket,
  ScrollText,
  Star,
  Swords,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

type Score = {
  id: string;
  label: string;
  value: number;
  total: number;
  notes?: [
    {
      label: string;
      timestamp?: string;
    }
  ];
};

const MOCK_PROGRESS_PROCESSING = {
  id: "123",
  status: "PROCESSING",
};

const MOCK_PROGRESS_COMPLETED = {
  id: "123",
  status: "COMPLETED",
  scores: {
    overall: {
      label: "Overall",
      value: 82,
      total: 100,
    },
    filler: {
      label: "Filler",
      value: 9,
      total: 10,
      notes: [{ label: "Good, but slightly fast" }],
    },
    pace: {
      label: "Pace",
      value: 7,
      total: 10,
      notes: [{ label: "Good, but slightly fast", timestamp: "0:45" }],
    },
    variety: {
      label: "Vocal Variety",
      value: 8,
      total: 10,
      notes: [{ label: "Strong, Clear delivery" }],
    },
    clarity: {
      label: "Clarity",
      value: 7,
      total: 10,
      notes: [{ label: "Slight Mumbled Word", timestamp: "0:45" }],
    },
  },
  transcription: {
    segments: [
      {
        text: "Hello.",
        start: 0.5,
        end: 1.2,
        speaker: "SPEAKER_0",
        words: [{ word: "Hello.", start: 0.5, end: 1.2 }],
      },
      {
        text: "World.",
        start: 1.8,
        end: 2.5,
        speaker: "SPEAKER_1",
        words: [{ word: "World.", start: 1.8, end: 2.5 }],
      },
      {
        text: "How are you?",
        start: 3.0,
        end: 4.1,
        speaker: "SPEAKER_0",
        words: [
          { word: "How", start: 3.0, end: 3.3 },
          { word: "are", start: 3.4, end: 3.6 },
          { word: "you?", start: 3.7, end: 4.1 },
        ],
      },
    ],
    language: "en",
  },
};

const STATUSES = [
  {
    key: "overall",
    className: "col-span-2 bg-blue-400 text-white",
    icon: <Star className="text-yellow-200 h-full w-auto p-3 mr-2" />,
  },
  {
    key: "filler",
    className: "bg-purple-400 text-white",
    icon: <Funnel className="text-red-200 h-full w-auto p-3 mr-2" />,
  },
  {
    key: "pace",
    className: "bg-red-400 text-white",
    icon: <Rocket className="text-lime-200 h-full w-auto p-3 mr-2" />,
  },
  {
    key: "variety",
    className: "bg-green-400 text-white",
    icon: <AudioWaveform className="text-amber-300 h-full w-auto p-3 mr-2" />,
  },
  {
    key: "clarity",
    className: "bg-orange-400 text-white",
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
        <div className="grid grid-cols-2 gap-2 w-full max-w-xl">
          {STATUSES.map((status) => (
            <div
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
      <span className="flex gap-2 items-center mt-4">
        <Image
          className="-mt-10 -ml-4"
          alt="action"
          src="/main-photo.png"
          width={150}
          height={320}
        />
        <div>
          <h1 className="text-4xl font-black">Amazing Job!</h1>
          <p className="text-lg leading-loose mb-2">
            Your Speech is top-notch!
          </p>
        </div>
      </span>
      <div className="grid grid-cols-2 gap-2 mt-0.5 w-full max-w-xl">
        {STATUSES.map((status) => (
          <div
            className={cn(
              "border-blue-800/10 border border-b-6 rounded-3xl w-full h-full p-4 py-4 flex gap-2 items-center",
              status.className
            )}
          >
            {status.icon}
            <div className="flex gap-1 flex-col my-1 mb-0.5">
              <span className="text-2xl font-black leading-none">
                {
                  progress.scores?.[status.key as keyof typeof progress.scores]
                    .value
                }{" "}
                /{" "}
                {
                  progress.scores?.[status.key as keyof typeof progress.scores]
                    .total
                }
              </span>
              <p className="text-lg font-bold opacity-75 leading-none">
                {
                  progress.scores?.[status.key as keyof typeof progress.scores]
                    .label
                }
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-2xl font-black mr-auto mt-2">
        <ScrollText className="inline mb-1.5 mr-1" />
        Feedback
      </p>
      <div className="grid grid-cols-2 gap-1 w-full">
        {STATUSES.map((status) => {
          const notes =
            progress?.scores?.[status.key as keyof typeof progress.scores]
              ?.notes;
          const label =
            progress?.scores?.[status.key as keyof typeof progress.scores]
              ?.label;
          return (
            <>
              {notes?.length &&
                notes.map((note) => (
                  <p key={note?.label} id={note?.label}>
                    <strong>{label}</strong> -{" "}
                    {note?.timestamp && (
                      <Button
                        variant="secondary"
                        className="inline py-0.5 px-2"
                      >
                        {note?.timestamp}
                      </Button>
                    )}{" "}
                    {note?.label}
                  </p>
                ))}
            </>
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
      <p className="text-2xl font-black mr-auto mt-2">
        <NotebookText className="inline mb-1.5 mr-1" />
        Transcription
      </p>
      <div className="flex w-full flex-col">

      {progress.transcription.segments.map((segment, i) => (
        <div key={i}>
          <p className="text-sm font-bold opacity-50 ml-1">{segment.speaker.toLocaleLowerCase()}</p>
          {segment.words.map((word, i) => (
            <Button key={i} variant="general" className="first:-ml-0.5 py-0.5 inline px-1">
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
