import { LegendProps } from "@/app/types";

export default function Legend(props: LegendProps) {

  return (
    <>
      <div className="bg-black bg-opacity-50 p-2 ml-2 mt-2 w-32">

        <div className="px-2 mb-2">
          <h2>人口</h2>
        </div>

        {
          props.items.map((value, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex-intial w-4 h-4 mx-2 border bg-[${props.colors[index]}]`}/>
              <p className="flex-intital px-2">{value}</p>
            </div>
          ))
        }
      </div>
    </>
  )

}