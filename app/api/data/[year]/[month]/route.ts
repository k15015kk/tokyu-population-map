import { MeshFeature, MeshGeoJson, Population } from "@/app/types"
import { _GeoJSONWriterOptions } from "@loaders.gl/json"
import { Feature, FeatureCollection, GeoJsonObject } from "geojson"
import { useRouter } from "next/router"

export async function GET(
    request: Request,
    { params }: { params: { year: string, month: string } }
  ) {

    const year: string = String(params.year)
    const month: string = String( ('00' + params.month).slice(-2))

    const {searchParams} = new URL(request.url)
    const dayflag = String(searchParams.get("dayflag"))
    const timezone = String(searchParams.get("timezone"))


    const populationRes = await fetch(`https://raw.githubusercontent.com/k15015kk/tokyu-geodata-storage/main/population_tokyo_json/${year}/${month}/monthly_mdp_mesh1km.json`, {
        cache: "no-store"
    })
    const populationData: Array<Population> = await populationRes.json()
    const filteringPopulationData: Array<Population> = populationData.filter((data) => data.dayflag === dayflag && data.timezone === timezone)

    const meshGeoJsonRes = await fetch('https://raw.githubusercontent.com/k15015kk/tokyu-geodata-storage/main/13tokyo1km_epsg6668.geojson', {
        cache: "no-store"
    })
    
    const meshGeoJsonData: MeshGeoJson = await meshGeoJsonRes.json()
    const features: Array<MeshFeature> = meshGeoJsonData.features

    const featuresWithPopulation: Array<Feature> = features.map((feature) => {
        const populationData = filteringPopulationData.find((data) => data.mesh1kmid === feature.properties.code)

        return {
            type: "Feature",
            geometry: feature.geometry,
            properties: {
                ...feature.properties,
                population: Number(populationData?.population)
            }
        } as Feature
    }).filter((data) => !Number.isNaN(data.properties.population))

    const geojson = {
        type: "FeatureCollection",
        features: featuresWithPopulation
    }

    return Response.json({geojson})
}