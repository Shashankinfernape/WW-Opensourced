__d("WAWebAlbumsGenerateAlbumMessageProto", [], function(t, n, r, o, a, i) {
    function e({ contextInfo, json }) {
        return {
            albumMessage: {
                contextInfo: contextInfo ?? undefined,
                expectedImageCount: json?.expectedImageCount ?? undefined,
                expectedVideoCount: json?.expectedVideoCount ?? undefined
            }
        };
    }
    i.default = e;
}, 66);