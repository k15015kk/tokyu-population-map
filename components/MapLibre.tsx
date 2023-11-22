'use client'

import Map, { NavigationControl, FullscreenControl, useControl, Source, FillLayer, Layer } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css';
import useSWR from 'swr';
import { JSONLoader } from '@loaders.gl/json';
import { load } from '@loaders.gl/core';
import { MapViewState } from '../app/types';
import { Feature, FeatureCollection } from 'geojson';

// Properties
const INITIAL_VIEW_STATE: MapViewState = {
	longitude: 139.701111,
	latitude: 35.658611,
	zoom: 11,
	pitch: 0,
	bearing: 0
};

async function jsonLoeader(key: string) {
	return await fetch(key).then((res) => res.json()).then((json) => json.geojson); 
}

export default function MapLibre() {

	const { data } = useSWR('/api/test', jsonLoeader)

	const testLayer: FillLayer = {
		id: "test_layer",
		type: 'fill',
		paint: {
			'fill-color': [
				'interpolate',
				['linear'],
				['get', 'population'],
				0,
				'#0079FF',
				5000,
				'#00DFA2',
				10000,
				'#F6FA70',
				50000,
				'#FF0060'
			],
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