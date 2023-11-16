import MapLibre from "./components/MapLibre";

export default async function Home() {

  return (
    <>
      <div className="absolute w-full h-full">
        <MapLibre />
      </div>
    </>
  )
}
