__d("WAWebMediaEntry", [
    "Promise",
    "WABase64Equal",
    "WAIsMediaKeyReusable",
    "WALogger",
    "WATimeUtils",
    "WAWebMediaHosts",
    "WAWebMmsClientFormatDownloadUrl",
    "WAWebMmsMediaTypes",
    "WAWebMmsOperationsConst",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        "dashManifestUrl",
        "fbid",
        "filehash",
        "handle",
        "metadataUrl",
        "thumbnailDirectPath",
        "thumbnailSha256"
    ];
    const c = [
        "encFilehash",
        "mediaKey",
        "mediaKeyTimestamp"
    ];
    let d;
    const m = {
        PROBABLY_ON_SERVER: "PROBABLY_ON_SERVER",
        PROBABLY_OFF_SERVER: "PROBABLY_OFF_SERVER",
        UNKNOWN: "UNKNOWN"
    };
    const p = (()=>{
        function e(t) {
            this.useBackupUrl = false;
            if (this.constructor === e) {
                throw r("err")("AbstractMediaEntry is an abstract class");
            }
            this.deprecatedMms3Url = t.deprecatedMms3Url;
            this.serverStatus = m.UNKNOWN;
            this.sidecar = t.sidecar;
            this.directPath = t.directPath;
            this.firstFrameSidecar = t.firstFrameSidecar;
            this.type = t.type;
            this.scansSidecar = t.scansSidecar;
            this.scanLengths = t.scanLengths;
            this.staticUrl = t.staticUrl;
        }
        const e_prototype = e.prototype;
        e_prototype.markWhetherOnServer = function(t) {
            this.serverStatus = t ? m.PROBABLY_ON_SERVER : m.PROBABLY_OFF_SERVER;
        };
        e_prototype.getMediaKey = function() {
            return null;
        };
        e_prototype.getMediaKeyTimestamp = function() {
            return null;
        };
        e_prototype.getEncfilehash = function() {
            return null;
        };
        e_prototype.getFilehash = function() {
            return null;
        };
        e_prototype.getThumbnailDirectPath = function() {
            return null;
        };
        e_prototype.getThumbnailSha256 = function() {
            return null;
        };
        e_prototype.validateForDownloads = function() {
            return this.serverStatus !== m.PROBABLY_OFF_SERVER;
        };
        return e;
    })();
    const _ = ((e)=>{
        function t(t) {
            let n;
            const { dashManifestUrl, fbid, filehash, handle, metadataUrl, thumbnailDirectPath, thumbnailSha256 } = t;
            const d = babelHelpers.objectWithoutPropertiesLoose(t, u);
            n = e.call(this, d) || this;
            n.filehash = filehash;
            n.handle = handle;
            n.metadataUrl = metadataUrl;
            n.dashManifestUrl = dashManifestUrl;
            n.fbid = fbid;
            n.thumbnailDirectPath = thumbnailDirectPath;
            n.thumbnailSha256 = thumbnailSha256;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getFilehash = function() {
            return this.filehash;
        };
        t_prototype.getThumbnailDirectPath = function() {
            return this.thumbnailDirectPath;
        };
        t_prototype.getThumbnailSha256 = function() {
            return this.thumbnailSha256;
        };
        return t;
    })(p);
    const f = ((e)=>{
        function t(t) {
            let n;
            const { encFilehash, mediaKey, mediaKeyTimestamp } = t;
            const i = babelHelpers.objectWithoutPropertiesLoose(t, c);
            n = e.call(this, i) || this;
            n.mediaKey = mediaKey;
            n.mediaKeyTimestamp = mediaKeyTimestamp;
            n.encFilehash = encFilehash;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.canReuseMediaKey = function() {
            if (this.directPath == null) {
                return false;
            }
            const e = o("WATimeUtils").castToUnixTime(this.mediaKeyTimestamp);
            return o("WAIsMediaKeyReusable").isMediaKeyReusable(e);
        };
        t_prototype.getMediaKey = function() {
            return this.mediaKey;
        };
        t_prototype.getMediaKeyTimestamp = function() {
            return this.mediaKeyTimestamp;
        };
        t_prototype.getEncfilehash = function() {
            return this.encFilehash;
        };
        t_prototype.url = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e || {};
                const { forceHashUrl, useFallback } = t;
                const encFilehash = this.encFilehash;
                if (encFilehash == null || encFilehash === "") {
                    return (d || (d = n("Promise"))).reject(r("err")("media_entry: encFilehash does not exist"));
                }
                const s = yield o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                    operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                    encFilehash,
                    type: this.type
                });
                const { fallbackHost, selectedHost } = s;
                const m = useFallback && fallbackHost ? fallbackHost : selectedHost;
                return r("WAWebMmsClientFormatDownloadUrl")({
                    directPath: forceHashUrl ? null : this.directPath,
                    encFilehash,
                    hostname: m.hostname,
                    type: this.type
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(p);
    class g {
        constructor(){
            this.entries = [];
        }
        $1({ deprecatedMms3Url, directPath, encFilehash, firstFrameSidecar, foundEntry, mediaKey, mediaKeyTimestamp, scanLengths, scansSidecar, sidecar, staticUrl }) {
            if (foundEntry instanceof f && mediaKey != null && mediaKey !== "" && !o("WABase64Equal").b64Equal(foundEntry.mediaKey, mediaKey)) {
                const _ = foundEntry.mediaKey.replace("=", "").split("\n")[0];
                const g = mediaKey.replace("=", "").split("\n")[0];
                const h = _ === g;
                const y = JSON.stringify({
                    before: {
                        hasDirectPath: !!foundEntry.directPath,
                        hasEncFilehash: !!foundEntry.encFilehash,
                        hasMediaKey: !!foundEntry.mediaKey,
                        hasDeprecatedMms3Url: !!foundEntry.deprecatedMms3Url
                    },
                    after: {
                        hasDirectPath: !!directPath,
                        hasEncFilehash: !!encFilehash,
                        hasDeprecatedMms3Url: !!deprecatedMms3Url
                    }
                }, null, 2);
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-fault] mediaKey changed for same MMS3 url type=",
                    " eq=",
                    " ",
                    ""
                ])), foundEntry.type, h, y).sendLogs("media-key-mismatch-same-mms3-url");
                return null;
            }
            if (foundEntry instanceof f && mediaKeyTimestamp != null) {
                foundEntry.mediaKeyTimestamp = mediaKeyTimestamp;
            }
            if (sidecar) {
                foundEntry.sidecar = sidecar;
            }
            if (firstFrameSidecar) {
                foundEntry.firstFrameSidecar = firstFrameSidecar;
            }
            if (scansSidecar) {
                foundEntry.scansSidecar = scansSidecar;
            }
            if (scanLengths != null && scanLengths.length) {
                foundEntry.scanLengths = scanLengths;
            }
            if (staticUrl) {
                foundEntry.staticUrl = staticUrl;
            }
            foundEntry.directPath = directPath;
            return foundEntry;
        }
        updateEntry({ deprecatedMms3Url, directPath, encFilehash, firstFrameSidecar, mediaKey, mediaKeyTimestamp, scanLengths, scansSidecar, sidecar, staticUrl, type }) {
            const m = this.getEntryByEncFilehash({
                encFilehash,
                deprecatedMms3Url
            });
            if (m) {
                return this.$1({
                    foundEntry: m,
                    mediaKey,
                    mediaKeyTimestamp,
                    encFilehash,
                    sidecar,
                    directPath,
                    firstFrameSidecar,
                    scansSidecar,
                    scanLengths,
                    deprecatedMms3Url,
                    staticUrl
                });
            }
        }
        addUnencryptedEntry(t) {
            const e = this.updateUnencryptedEntry({
                filehash: t.filehash,
                directPath: t.directPath
            });
            if (e) {
                e.handle = t.handle;
                e.metadataUrl = t.metadataUrl;
                e.dashManifestUrl = t.dashManifestUrl;
                e.fbid = t.fbid;
                return e;
            }
            const n = new _({
                deprecatedMms3Url: t.directPath,
                filehash: t.filehash,
                type: t.type,
                directPath: t.directPath,
                handle: t.handle,
                metadataUrl: t.metadataUrl,
                dashManifestUrl: t.dashManifestUrl,
                thumbnailDirectPath: t.thumbnailDirectPath,
                thumbnailSha256: t.thumbnailSha256,
                fbid: t.fbid
            });
            this.entries.push(n);
            return n;
        }
        updateUnencryptedEntry(t) {
            const e = t.directPath != null ? this.getUnencryptedEntry(t.filehash, t.directPath) : null;
            if (!e || !(e instanceof _)) {
                return null;
            }
            if (t.directPath != null) {
                e.directPath = t.directPath;
            }
            return e;
        }
        addEntry({ debugHint, deprecatedMms3Url, directPath, encFilehash, firstFrameSidecar, mediaKey, mediaKeyTimestamp, scanLengths, scansSidecar, sidecar, staticUrl, type }) {
            if (encFilehash == null && type !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Media type ",
                    " from ",
                    " is missing encFilehash"
                ])), type, debugHint).sendLogs(`media-entry-missing-upload-hash-${type}-${debugHint}`);
            }
            const entries = this.entries;
            const h = this.getEntryByEncFilehash({
                encFilehash,
                deprecatedMms3Url
            });
            const y = h ? this.$1({
                foundEntry: h,
                mediaKey,
                mediaKeyTimestamp,
                encFilehash,
                sidecar,
                directPath,
                firstFrameSidecar,
                scansSidecar,
                scanLengths,
                deprecatedMms3Url,
                staticUrl
            }) : null;
            if (y instanceof f) {
                return y;
            }
            if (!mediaKey) {
                return null;
            }
            const C = new f({
                deprecatedMms3Url,
                mediaKey,
                mediaKeyTimestamp,
                encFilehash,
                type,
                sidecar,
                directPath,
                firstFrameSidecar,
                scansSidecar,
                scanLengths,
                staticUrl
            });
            entries.push(C);
            return C;
        }
        $2({ deprecatedMms3Url, encFilehash }) {
            return encFilehash ?? `mms3:${deprecatedMms3Url}`;
        }
        has(t) {
            return this.getEntryByEncFilehash(t) instanceof f;
        }
        hasUnencryptedEntry(t) {
            if (t.filehash == null || t.directPath == null) {
                return false;
            }
            return this.getUnencryptedEntry(t.filehash, t.directPath) instanceof _;
        }
        getEntryByEncFilehash(t) {
            const e = this;
            const n = this.$2(t);
            return this.entries.find((t)=>t instanceof f && e.$2({
                    encFilehash: t.encFilehash,
                    deprecatedMms3Url: t.deprecatedMms3Url
                }) === n);
        }
        getUnencryptedEntry(t, n) {
            return this.entries.find((e)=>e instanceof _ && e.filehash === t && e.directPath === n);
        }
        $3(t) {
            return this.entries.filter((e)=>{
                if (t) {
                    return e instanceof f;
                }
                return e instanceof _;
            });
        }
        getUploadEntry(t) {
            h(this);
            return this.$3(t)[0];
        }
        getUploadEntryMatching(t, n) {
            h(this);
            return this.$3(t).find(n);
        }
        getDownloadEntry(t) {
            h(this);
            return this.$3(t).find((e)=>e.validateForDownloads());
        }
        clearEntries() {
            this.entries = [];
        }
    }
    function h(e) {
        e.entries.sort((e, t)=>{
            const n = y(t) - y(e);
            if (n !== 0) {
                return n;
            }
            const r = e.getMediaKeyTimestamp();
            const o = t.getMediaKeyTimestamp();
            if (r == null || o == null) {
                return n;
            }
            return o - r;
        });
    }
    function y(e) {
        let t = 0;
        e: {
            if (e.serverStatus === m.PROBABLY_ON_SERVER) {
                t += 200;
                break e;
            }
            if (e.serverStatus === m.PROBABLY_OFF_SERVER) {
                break e;
            }
            if (e.serverStatus === m.UNKNOWN) {
                t += 100;
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.serverStatus}`);
        }
        if (e.getEncfilehash() != null) {
            t += 20;
        }
        return t;
    }
    l.AbstractMediaEntry = p;
    l.UnencryptedMediaEntry = _;
    l.EncryptedMediaEntry = f;
    l.MediaEntryList = g;
}, 98);