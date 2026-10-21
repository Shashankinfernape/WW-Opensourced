__d("WAWebGetMediaDownloadByterange", [
    "WAAlignChunkLengthsToMultipleOfAesBlockSize",
    "WAWebCryptoDecryptPartialMedia",
    "WAWebIdentityFunction",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    function e({ partialVideoOpts, progressiveJpegOpts, scanCount }) {
        if (progressiveJpegOpts && scanCount != null) {
            const i = o("WAAlignChunkLengthsToMultipleOfAesBlockSize").alignChunkLengthsToMultipleOfAesBlockSize(progressiveJpegOpts.scanLengths).slice(0, scanCount);
            const l = r("sumBy")(i, o("WAWebIdentityFunction").identityFunction);
            if (l === 0) {
                return null;
            }
            return {
                start: 0,
                end: l - 1
            };
        }
        if (partialVideoOpts) {
            const { secondsToDownload, video } = partialVideoOpts;
            const { duration, size } = video;
            const m = size * secondsToDownload / duration;
            const p = 128 * 1024;
            const _ = Math.max(m, p);
            const f = Math.ceil(_ / o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE);
            return {
                start: 0,
                end: f * o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE - 1
            };
        }
        return null;
    }
    l.default = e;
}, 98);