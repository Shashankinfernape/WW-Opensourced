__d("NavigationMetricsCore", [
    "mixInEventEmitter",
    "pageID"
], function(t, n, r, o, a, i, l) {
    const Events = {
        NAVIGATION_DONE: "NAVIGATION_DONE",
        EVENT_OCCURRED: "EVENT_OCCURRED"
    };
    const s = {
        tti: "tti",
        e2e: "e2e",
        all_pagelets_loaded: "all_pagelets_loaded",
        all_pagelets_displayed: "all_pagelets_displayed"
    };
    let u = 0;
    const c = {};
    class d {
        constructor(){
            this.eventTimings = {
                tti: null,
                e2e: null,
                all_pagelets_loaded: null,
                all_pagelets_displayed: null
            };
            this.lid = `${r("pageID")}:${u++}`;
            this.extras = {};
        }
        getLID() {
            return this.lid;
        }
        setRequestStart(t) {
            this.start = t;
            return this;
        }
        setTTI(t) {
            this.eventTimings.tti = t;
            this.$1(s.tti, t);
            return this;
        }
        setE2E(t) {
            this.eventTimings.e2e = t;
            this.$1(s.e2e, t);
            return this;
        }
        setExtra(t, n) {
            this.extras[t] = n;
            return this;
        }
        setDisplayDone(t) {
            this.eventTimings.all_pagelets_displayed = t;
            this.setExtra("all_pagelets_displayed", t);
            this.$1(s.all_pagelets_displayed, t);
            return this;
        }
        setAllPageletsLoaded(t) {
            this.eventTimings.all_pagelets_loaded = t;
            this.setExtra("all_pagelets_loaded", t);
            this.$1(s.all_pagelets_loaded, t);
            return this;
        }
        setServerLID(t) {
            this.serverLID = t;
            return this;
        }
        $1(event, timestamp) {
            let t = {};
            if (c != null && this.serverLID != null && c[this.serverLID] != null) {
                t = c[this.serverLID];
            }
            const o = babelHelpers.extends({}, t, {
                event,
                timestamp
            });
            m.emitAndHold(Events.EVENT_OCCURRED, this.serverLID, o);
            return this;
        }
        doneNavigation() {
            const t = babelHelpers.extends({
                start: this.start,
                extras: this.extras
            }, this.eventTimings);
            if (this.serverLID != null && c[this.serverLID] != null) {
                const n = this.serverLID;
                Object.assign(t, c[n]);
                delete c[n];
            }
            m.emitAndHold(Events.NAVIGATION_DONE, this.lid, t);
        }
    }
    var m = {
        Events,
        postPagelet: function(t, n, r) {},
        siteInit: function(t) {
            t(d);
        },
        setPage: function(t) {
            if (t.serverLID) {
                c[t.serverLID] = {
                    page: t.page,
                    pageType: t.page_type,
                    pageURI: t.page_uri,
                    serverLID: t.serverLID
                };
            }
        },
        getFullPageLoadLid: function() {
            const e = new Error("getFullPageLoadLid is not implemented on this site");
            e.stack;
            throw e;
        }
    };
    r("mixInEventEmitter")(m, Events);
    l.default = m;
}, 98);