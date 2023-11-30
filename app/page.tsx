'use client'

import Legend from "@/components/Legend";
import MapLibre from "../components/MapLibre";
import Title from "@/components/Title";

export default function Home() {

  const legendItems: Array<number> = [0, 10000, 20000, 30000, 50000];
  const legendColors: Array<string> = ['#000000', '#0079FF', '#00DFA2', '#F6FA70', '#FF0060']

  const year: number = 2021
  const month: number = 10
  const dayflag = 0
  const timezone = 0

  return (
    <>
      <div className="absolute w-full h-full">
        <MapLibre data={{
          year: year,
          month: month,
          dayflag: dayflag,
          timezone: timezone
        }} legend={{
          items: legendItems,
          colors: legendColors
        }}          
        />
      </div>
      <div className="absolute">
        <div className="relative">
          <Title year={year} month={month} dayflag={dayflag} timezone={timezone} />
        </div>
        <div className="relative">
          <Legend items={legendItems} colors={legendColors} />
        </div>
      </div>
    </>
  )
}
