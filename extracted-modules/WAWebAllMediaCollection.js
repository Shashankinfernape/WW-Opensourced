__d("WAWebAllMediaCollection", [
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebDBMessageFindLocal",
    "WAWebFrontendMsgGetters",
    "WAWebFtsMsgsChatlessCollection",
    "WAWebMsgGetters",
    "WAWebMsgQueryUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e.filter((e)=>o("WAWebFrontendMsgGetters").getAsVisualMedia(e) != null && o("WAWebMsgGetters").getIsViewOnce(e) === false && o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.SEARCH, e.viewMode));
    }
    const s = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getNextMsgs = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ count, direction, msgKeyAnchor }) {
                return o("WAWebMsgQueryUtils").queryMedia(undefined, Math.min(o("WAWebAllMsgTypeCollectionUtils").HARD_LIMIT_MAX_COUNT, count), direction, msgKeyAnchor, "allMedia");
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.filterMsgs = function(n, r) {
            const t = o("WAWebDBMessageFindLocal").getMediaAvailableMsgBoundary();
            const a = e(n.filter((e)=>e.t > t));
            return o("WAWebAllMsgTypeCollectionUtils").filterOnlyMsgsFromChatAndGroup(a);
        };
        r_prototype.getMsgsAround = function(t, n) {
            const e = this.indexOf(t);
            const r = Math.floor(Math.floor(n / 2));
            let o = Math.max(e - r, 0);
            const a = Math.min(this.length, o + n);
            if (a - o < n) {
                o = Math.max(a - n, 0);
            }
            return this.slice(o, a);
        };
        r_prototype.getAfter = function(t) {
            const e = this.indexOf(t);
            if (e < 0 || e === this.length - 1) {
                return null;
            }
            return this.at(e + 1);
        };
        r_prototype.getBefore = function(t) {
            const e = this.indexOf(t);
            if (e <= 0) {
                return null;
            }
            return this.at(e - 1);
        };
        return r;
    })(r("WAWebFtsMsgsChatlessCollection"));
    const u = new s;
    l.WAWebAllMediaCollection = s;
    l.AllMediaCollection = u;
}, 98);