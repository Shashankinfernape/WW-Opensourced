__d("WAWebMediaHubSession", [
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumEntryPointType",
    "WAWebWamEnumSurfaceCode"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(){
            this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
            this.$2 = 0;
            this.$3 = o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE.MAIN_SCREEN;
            this.$4 = o("WAWebWamEnumSurfaceCode").SURFACE_CODE.MEDIA;
            this.$5 = false;
            this.initSessionId();
        }
        initSessionId() {
            this.$1 = this.newSessionId();
            this.$5 = false;
        }
        newSessionId() {
            this.$1 = r("WAWebPonyfillsCryptoRandomUUID")();
            this.$2 = 0;
            this.$3 = o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE.MAIN_SCREEN;
            this.$4 = o("WAWebWamEnumSurfaceCode").SURFACE_CODE.MEDIA;
            this.$5 = false;
            return this.$1;
        }
        getSessionId() {
            return this.$1;
        }
        getFromSearchResults() {
            return this.$5;
        }
        setFromSearchResults(t) {
            this.$5 = t;
        }
        getSequence() {
            return ++this.$2;
        }
        setEntryPoint(t = o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE.MAIN_SCREEN) {
            this.$3 = t;
        }
        getEntryPoint() {
            return this.$3;
        }
        getSurface() {
            return this.$4;
        }
        setSurface(t) {
            this.$4 = t;
        }
    }
    const s = new e;
    l.default = s;
}, 98);