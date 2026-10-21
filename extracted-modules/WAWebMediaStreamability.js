__d("WAWebMediaStreamability", [
    "WAWebMediaTypes"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s(e) && t && e.isViewOnce !== true;
    }
    function s({ fullHeight, fullWidth, isGif, mediaStage, sidecar, type }) {
        return type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO && isGif !== true && (mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT || mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING || mediaStage === o("WAWebMediaTypes").MediaDataStage.DECRYPTING || mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED) && fullWidth != null && fullHeight != null && !!(sidecar && sidecar.byteLength > 0);
    }
    l.isStreamableMedia = e;
}, 98);