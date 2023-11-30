import { Geometry } from "geojson"

export type MapViewState = {
    latitude: number,
    longitude: number,
    zoom: number,
    pitch: number,
    bearing: number
}

export type Population = {
    mesh1kmid: string,
    prefcode: string,
    citycode: string,
    year: string,
    month: string,
    dayflag: string,
    timezone: string,
    population: string
}

export type MeshGeoJson = {
    type: string,
    name: string,
    crs: object,
    features: [MeshFeature]
}

export type MeshProperties = {
    code: string
}

export type MeshFeature = {
    type: string,
    geometry: Geometry,
    properties: MeshProperties
}

export type MapProps = {
    data: TargetDataProps,
    legend: LegendProps
}

export type LegendProps = {
    items: Array<number>,
    colors: Array<string>
}

export type TargetDataProps = {
    year: number,
    month: number,
    dayflag: number,
    timezone: number
}
