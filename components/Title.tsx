import { TargetDataProps } from "@/app/types";

export default function Title(props: TargetDataProps) {

  const dayflg = {
    get toString(): string {
      switch (props.dayflag) {
        case 0:
          return "平日"
          break;
        case 1:
          return "休日"
          break;
        case 2:
          return "全日"
        default:
          return ""
          break;
      }
    }
  }

  const timezone = {
    get toString(): string {
      switch (props.timezone) {
        case 0:
          return "昼間"
          break;
        case 1:
          return "夜間"
          break;
        case 2:
          return "全時間帯"
        default:
          return ""
          break;
      }
    }
  }

  return (
    <>
      <div className="bg-black bg-opacity-50 px-4 py-2 ml-2 mt-2">
        <h1 className="text-xl font-bold">{`${props.year}年${props.month}月 ${dayflg.toString} ${timezone.toString} 1km人口メッシュ`}</h1>
      </div>
    </>
  )

}