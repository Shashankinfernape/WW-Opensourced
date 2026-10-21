__d("WAWebFtsMsgsCollectionBase", [
    "WAAbortError",
    "WAPromiseRaceAbort",
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebChatMessageSearch",
    "WAWebFrontendMsgGetters",
    "WAWebMsgModel",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.hasMoreMsgs = true;
            n.resultPage = 0;
            n.searchPromise = null;
            n.searchAbortController = null;
            n.searchTerm = null;
            n.searchLabel = null;
            n.updateFtsAfterMsgLabelUpdate = function() {
                const n_currentLabelSearch = n.currentLabelSearch;
                if (!r("isStringNullOrEmpty")(n_currentLabelSearch)) {
                    const t = n.filter((t)=>!t.labels || !t.labels.includes(n_currentLabelSearch));
                    n.remove(t, {
                        silent: true
                    });
                }
            };
            n.listenTo(t, "remove_msgs", function(e) {
                const t = n.remove(e, {
                    silent: true
                }).filter((e)=>!!e);
                if (t.length) {
                    n.trigger("bulk_remove");
                }
            });
            n.listenTo(o("WAWebChatCollection").ChatCollection, "remove", function(e) {
                const t = [];
                n.forEach((n)=>{
                    if (n.id.remote.equals(e.id)) {
                        t.push(n);
                    }
                });
                const r = n.remove(t, {
                    silent: true
                }).filter((e)=>!!e);
                if (r.length) {
                    n.trigger("bulk_remove");
                }
            });
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.searchImpl = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, count, direction, filter, page = 1, searchTerm }) {
                throw r("err")("searchImpl must be implemented");
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.onSeachPromiseComplete = function(t) {};
        t_prototype.delete = function(n) {
            if (n) {
                this.stopListening();
            }
            e.prototype.delete.call(this);
        };
        t_prototype.resetSearch = function() {
            this.hasMoreMsgs = true;
            this.resultPage = 0;
            this.searchTerm = null;
            this.searchAbortController?.abort();
        };
        t_prototype.search = function(t) {
            const e = this;
            const { chat, count, filter } = t;
            const filter_1 = filter === undefined ? {} : filter;
            const { searchTerm, direction } = t;
            const c = filter_1.kind ?? "";
            const d = `${searchTerm}__${filter_1.label != null && filter_1.label !== "" ? filter_1.label : c}`;
            this.currentLabelSearch = filter_1.label;
            let m = false;
            const p = searchTerm !== this.searchTerm;
            if (this.searchTerm !== d) {
                if (this.searchTerm != null && this.searchTerm !== "" && searchTerm.indexOf(this.searchTerm) === 0) {
                    m = true;
                } else {
                    this.searchTerm = d;
                    this.delete();
                }
                if (p) {
                    this.resultPage = 0;
                    this.hasMoreMsgs = true;
                }
            } else {
                m = true;
            }
            if (this.searchPromise) {
                if (this.searchTerm === d) {
                    return this.searchPromise;
                }
                this.searchAbortController?.abort();
            }
            this.searchAbortController = new AbortController;
            const signal = this.searchAbortController.signal;
            const g = this.searchImpl({
                chat,
                count,
                direction,
                filter: filter_1,
                page: ++this.resultPage,
                searchTerm
            });
            this.searchPromise = r("WAPromiseRaceAbort")(g, signal).then((t)=>{
                if (t.eof) {
                    e.hasMoreMsgs = false;
                }
                if (e.searchTerm !== d && p) {
                    e.delete();
                }
                e.searchTerm = d;
                if (t.messages) {
                    if (filter_1.kind || filter_1.label != null) {
                        t.messages = t.messages.filter((e)=>o("WAWebFrontendMsgGetters").getChat(e) && o("WAWebChatMessageSearch").matchFilter(o("WAWebFrontendMsgGetters").getChat(e), filter_1));
                    }
                    e.add(t.messages.filter((e)=>!o("WAWebFrontendMsgGetters").getAsRevoked(e) && o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.SEARCH, e.viewMode)));
                }
                e.onSeachPromiseComplete(m);
                return t;
            }).catch(o("WAAbortError").catchAbort(function() {
                e.resultPage -= 1;
            })).finally(()=>{
                e.searchPromise = null;
                e.searchAbortController = null;
                e.trigger("searchPromise_update");
            });
            this.trigger("searchPromise_update");
            return this.searchPromise;
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebMsgModel").Msg;
    l.default = e;
}, 98);