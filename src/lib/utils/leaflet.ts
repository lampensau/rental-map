import L from 'leaflet';

// Fix for default marker icons in Leaflet when using bundlers
if (typeof window !== 'undefined') {
	// Cast to IconDefault to access _getIconUrl property
	type IconDefaultPrototype = {
		_getIconUrl?: unknown;
	};

	delete (L.Icon.Default.prototype as IconDefaultPrototype)._getIconUrl;

	L.Icon.Default.mergeOptions({
		iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
		iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
		shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
	});
}

export { L };
