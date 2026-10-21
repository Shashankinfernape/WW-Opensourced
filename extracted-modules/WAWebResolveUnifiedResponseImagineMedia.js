__d("WAWebResolveUnifiedResponseImagineMedia", [
    "WAWebUnifiedResponseUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ descriptorByCdnUrl, imagineType, isForwardedMessage, mediaUrl }) {
        if (!isForwardedMessage) {
            return {
                descriptor: null,
                isUnsupported: false,
                mediaUrl
            };
        }
        if (o("WAWebUnifiedResponseUtils").isAnimateImagineType(imagineType)) {
            return {
                descriptor: null,
                isUnsupported: true,
                mediaUrl: null
            };
        }
        const i = mediaUrl != null ? descriptorByCdnUrl.get(mediaUrl) : null;
        return {
            descriptor: i ?? null,
            isUnsupported: false,
            mediaUrl: null
        };
    }
    l.resolveUnifiedResponseImagineMedia = e;
}, 98);