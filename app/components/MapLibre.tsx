'use client'

import Map, { NavigationControl, FullscreenControl, useControl, Source, FillLayer, Layer } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css';
import useSWR from 'swr';
import { CSVLoader } from '@loaders.gl/csv';
import { JSONLoader } from '@loaders.gl/json';
import { load } from '@loaders.gl/core';
import { MapViewState } from '../types';

// Properties
const INITIAL_VIEW_STATE: MapViewState = {
	longitude: 136.881637,
	latitude: 35.170694,
	zoom: 11,
	pitch: 60,
	bearing: 0
};

async function jsonLoeader(key: string) {
	return await load(key, JSONLoader)
}

export default function MapLibre() {

	const {data, error } = useSWR('https://raw.githubusercontent.com/k15015kk/tokyu-geodata-storage/main/13tokyo1km.geojson', jsonLoeader)

	const testLayer: FillLayer = {
		id: "test_layer",
		type: 'fill',
		paint: {
			'fill-color': '#4E3FC8',
			'fill-opacity': 0.5,
			'fill-outline-color': '#FFFFFF'
		},
		source: 'test_data'
	}

	return (
		<>
			<div className='relative w-full h-full'>
				<Map
					mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
					initialViewState={INITIAL_VIEW_STATE}
					maplibreLogo
				>
					<Source id="test_data" type='geojson' data={data}>
						<Layer {...testLayer}></Layer>
					</Source>
				</Map>
			</div>
		</>
	)
}