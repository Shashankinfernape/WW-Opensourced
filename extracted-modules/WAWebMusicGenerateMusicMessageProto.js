__d("WAWebMusicGenerateMusicMessageProto", [], function(t, n, r, o, a, i) {
    function e({ contextInfo, json }) {
        const json_musicData = json.musicData;
        if (json_musicData == null) {
            return null;
        }
        const r_style = json_musicData.style;
        return {
            musicMessage: {
                embeddedMusic: {
                    musicContentMediaId: json_musicData.musicContentMediaId,
                    songId: json_musicData.songId,
                    author: json_musicData.author,
                    title: json_musicData.title,
                    artistAttribution: json_musicData.artistAttribution,
                    artworkDirectPath: json_musicData.artworkDirectPath,
                    artworkSha256: json_musicData.artworkSha256,
                    artworkEncSha256: json_musicData.artworkEncSha256,
                    artworkMediaKey: json_musicData.artworkMediaKey,
                    countryBlocklist: json_musicData.countryBlocklist,
                    isExplicit: json_musicData.isExplicit,
                    musicSongStartTimeInMs: json_musicData.songStartTimeMs,
                    overlapDurationInMs: json_musicData.clipDurationMs
                },
                songUri: json_musicData.songUri,
                artworkUri: json_musicData.artworkUri,
                style: r_style ?? undefined,
                contextInfo
            }
        };
    }
    i.default = e;
}, 66);