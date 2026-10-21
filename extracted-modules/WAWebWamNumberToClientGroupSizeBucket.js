__d("WAWebWamNumberToClientGroupSizeBucket", [
    "WAWebWamEnumClientGroupSizeBucket"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e <= 33) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.SMALL;
        }
        if (e <= 65) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.MEDIUM;
        }
        if (e <= 129) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LARGE;
        }
        if (e <= 257) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.EXTRA_LARGE;
        }
        if (e <= 513) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.XX_LARGE;
        }
        if (e <= 1025) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT1024;
        }
        if (e <= 1501) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT1500;
        }
        if (e <= 2001) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT2000;
        }
        if (e <= 2501) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT2500;
        }
        if (e <= 3001) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT3000;
        }
        if (e <= 3501) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT3500;
        }
        if (e <= 4001) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT4000;
        }
        if (e <= 4501) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT4500;
        }
        if (e <= 5001) {
            return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LT5000;
        }
        return o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET.LARGEST_BUCKET;
    }
    l.default = e;
}, 98);