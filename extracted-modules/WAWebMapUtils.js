__d("WAWebMapUtils", [
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebL10N",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    const z = 17;
    const s = 15;
    const numPoints = 36;
    const c = 6378137;
    const d = "0x4285F433";
    const m = "0x4285F488";
    const p = 1;
    const _ = "maps.googleapis.com";
    const f = `https://${_}/maps/api/staticmap`;
    const g = "https://maps.google.com/maps/search";
    const h = "https://maps.google.com/maps";
    const y = "style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d";
    const C = 50;
    function b(e) {
        const { lat, lng } = e;
        for(var r = e.numPoints, o = e.radiusMeters, a = [], i = lat * Math.PI / 180, l = 0; l <= r; l++){
            const s = 2 * Math.PI * l / r;
            const u = o * Math.cos(s) / c;
            const d = o * Math.sin(s) / (c * Math.cos(i));
            a.push([
                lat + u * 180 / Math.PI,
                lng + d * 180 / Math.PI
            ]);
        }
        return a;
    }
    function v(e) {
        let t = "";
        let n = 0;
        let r = 0;
        for (const [a, i] of e){
            const l = Math.round(a * 100000);
            const s = Math.round(i * 100000);
            t += S(l - n);
            t += S(s - r);
            n = l;
            r = s;
        }
        return t;
    }
    function S(e) {
        for(var t = e < 0 ? -e * 2 - 1 : e * 2, n = ""; t >= 32;){
            n += String.fromCharCode(t % 32 + 32 + 63);
            t = Math.floor(t / 32);
        }
        n += String.fromCharCode(t + 63);
        return n;
    }
    function R({ lat, mapHeight, mapWidth, radiusMeters }) {
        const a = 2 * Math.PI * c / 256;
        const i = Math.cos(lat * Math.PI / 180);
        const l = Math.min(mapWidth, mapHeight);
        const u = Math.floor(Math.log2(l * a * i / (2.5 * radiusMeters)));
        return Math.max(1, Math.min(u, s));
    }
    function L({ lat, lng, name }) {
        const hl = r("WAWebL10N").getNormalizedLocale();
        if (name != null && name !== "") {
            return `${g}/${encodeURIComponent(name)}/@${lat},${lng},${z}z?hl=${hl}`;
        }
        return r("WAWebURLUtils").build(h, {
            q: `${lat},${lng}`,
            z,
            hl
        });
    }
    function E({ height, isDarkTheme, lat, lng, radiusMeters, showMarker, width, zoom }) {
        const mapHeight = height + C;
        const g = r("WAWebAssetLoaderDpiChangeDispatch").currentRes === r("WAWebAssetLoaderDpiChangeDispatch").RES.HIGH ? 2 : 1;
        const language = r("WAWebL10N").getNormalizedLocale();
        const y = `${lat}, ${lng}`;
        const S = `color:red|${y}`;
        const L = `${width}x${mapHeight}`;
        let E;
        if (zoom != null) {
            E = zoom;
        } else if (radiusMeters != null && radiusMeters > 0) {
            E = R({
                lat,
                mapHeight,
                mapWidth: width,
                radiusMeters
            });
        } else {
            E = s;
        }
        const I = {
            zoom: E.toString(),
            size: L,
            scale: g.toString(),
            language
        };
        I.key = r("WAWebURLUtils").GSM_API_KEY;
        if (showMarker) {
            I.markers = S;
        } else {
            I.center = y;
        }
        let T = k(I, isDarkTheme);
        if (radiusMeters != null && radiusMeters > 0) {
            const D = b({
                lat,
                lng,
                numPoints,
                radiusMeters
            });
            const x = v(D);
            const $ = `fillcolor:${d}|color:${m}${`|weight:${p}|enc:${x}`}`;
            T += `&path=${encodeURIComponent($)}`;
        }
        return T;
    }
    function k(e, isDarkTheme) {
        const n = r("WAWebURLUtils").build(f, e);
        if (isDarkTheme) {
            return `${n}&${y}`;
        }
        return n;
    }
    l.getMapUrl = L;
    l.getMapImgSrcUrl = E;
}, 98);