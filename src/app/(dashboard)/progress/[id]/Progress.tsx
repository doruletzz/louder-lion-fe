"use client";

import React, { useMemo } from "react";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const data = ({label = '', value = 10, total = 100}) => ({
  labels: ["Overall", null],
  datasets: [
    {
      label,
      data: [value, (total - value)],
      backgroundColor: ["rgba(255, 255, 255, 0.825)", "rgba(0, 0, 0, .2)"],
      borderColor: ["rgba(255, 255, 255, 0.625)", "rgba(0, 0, 0, 0.2)"],
      spacing: 0,
      borderRadius: 12,
      //   borderWidth: 1,
    },
  ],
});

type Props = {
    label: string;
    total: number;
    value: number;
}

const Progress = ({total, value, label}: Props) => {
    const _data = useMemo(() => data({label, total, value}), [total, value, label]) 
  return (
    <div className="relative ml-auto h-auto flex-0 -mx-5 group-hover/card:opacity-100 transition-[opacity,_mix-blend-mode] duration-300 opacity-75 group-hover/card:mix-blend-normal mix-blend-overlay">
      <Doughnut
        key={`${_data}`}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
        }}
        className="w-auto flex-0 ml-auto h-auto max-h-12"
        data={_data}
      />
    </div>
  );
};

export default Progress;
