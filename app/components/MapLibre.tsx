'use client'

import { useEffect, useState, useMemo } from 'react';
import Map, { NavigationControl, FullscreenControl, useControl } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css';


import { MapViewState } from '../types';

// Properties
const INITIAL_VIEW_STATE: MapViewState = {
	longitude: 136.881637,
	latitude: 35.170694,
	zoom: 11,
	pitch: 60,
	bearing: 0
};

export default function MapLibre() {
	return (
		<>
			<div className='relative w-full h-full'>
				<Map
					mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
					initialViewState={INITIAL_VIEW_STATE}
					maplibreLogo
				>
				</Map>
			</div>
		</>
	)
}