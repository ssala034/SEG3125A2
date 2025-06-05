// import { useEffect, useRef } from 'react';
// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
//
// function ContactMap() {
//
//
//     const mapRef = useRef();
//     const initialized = useRef(false);
//
//     useEffect(() => {
//         if (initialized.current) return;
//         initialized.current = true;
//         new Map({
//             target: mapRef.current,
//             layers: [
//                 new TileLayer({
//                     source: new OSM(),
//                 }),
//             ],
//             view: new View({
//                 center: [ -8430000, 5620000 ], // transformed coords (Web Mercator)
//                 zoom: 16,
//             }),
//         });
//     }, []);
//
//     return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
// }
//
// export default ContactMap;
//
//
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

function ContactMap() {
    const mapRef = useRef();

    useEffect(() => {
        const uOttawaCoord = fromLonLat([-75.6831, 45.4236]); // Lon, Lat

        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: uOttawaCoord,
                zoom: 17,
            }),
        });

        return () => map.setTarget(null); // Clean up on unmount
    }, []);

    return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
}

export default ContactMap;
