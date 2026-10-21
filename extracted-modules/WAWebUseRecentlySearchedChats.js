__d("WAWebUseRecentlySearchedChats", [
    "WALogger",
    "WAWebBlocklistCollection",
    "WAWebChatCollection",
    "WAWebGroupSafetyCheckUtils",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const { useCallback, useSyncExternalStore } = c;
    const p = 8;
    const _ = 50;
    class f {
        constructor(){
            var e = this;
            this.$1 = null;
            this.$2 = [];
            this.$3 = false;
            this.subscribe = function(t) {
                e.$10();
                e.$2.push(t);
                return function() {
                    const n = e.$2.indexOf(t);
                    if (n !== -1) {
                        e.$2.splice(n, 1);
                    }
                };
            };
            this.getSnapshot = function() {
                e.$10();
                if (e.$1 == null) {
                    e.$1 = e.$8();
                }
                return e.$1;
            };
        }
        resetForTesting() {
            this.$1 = null;
            this.$2 = [];
            this.$3 = false;
        }
        $4() {
            try {
                const t = r("WAWebLocalStorage") == null ? undefined : r("WAWebLocalStorage").getItem(o("WAWebUserPrefsKeys").UserPrefs.RecentSearches);
                if (t != null) {
                    return JSON.parse(t);
                }
            } catch (error) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "RecentChatsStore: Failed to parse recent search entry with ",
                    ""
                ])), error);
            }
            return [];
        }
        $5(t) {
            try {
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").setItem(o("WAWebUserPrefsKeys").UserPrefs.RecentSearches, JSON.stringify(t));
                }
            } catch (error) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "RecentChatsStore: Failed to store recent search entry with ",
                    ""
                ])), error);
            }
        }
        $6() {
            this.$2.forEach((e)=>e());
        }
        $7() {
            this.$1 = null;
            this.$6();
        }
        $8() {
            const e = this.$4();
            const t = [];
            for (const n of e){
                if (t.length >= p) {
                    break;
                }
                const r = o("WAWebChatCollection").ChatCollection.get(n.chatId);
                if (r != null && r.isLocked !== true && r.archive !== true) {
                    if (r.contact?.isContactBlocked !== true && !r.isSuspendedOrTerminated() && !o("WAWebGroupSafetyCheckUtils").shouldShowGroupSafetyCheckUI(r)) {
                        t.push(r);
                    }
                }
            }
            return t;
        }
        $9(t) {
            const e = this.$1;
            if (e != null) {
                const n = e.findIndex((e)=>e.id.toString() === t);
                if (n !== -1) {
                    this.$7();
                }
            }
        }
        $10() {
            const e = this;
            if (!this.$3) {
                this.$3 = true;
                o("WAWebChatCollection").ChatCollection.on("remove", function(t) {
                    e.$9(t.id.toString());
                });
                const t = function(n) {
                    e.$7();
                };
                o("WAWebChatCollection").ChatCollection.on("change:isLocked", t);
                o("WAWebChatCollection").ChatCollection.on("change:archive", t);
                o("WAWebChatCollection").ChatCollection.on("change:groupSafetyChecked", t);
                const n = function() {
                    e.$7();
                };
                o("WAWebBlocklistCollection").BlocklistCollection.on("add", n);
                o("WAWebBlocklistCollection").BlocklistCollection.on("remove", n);
                o("WAWebBlocklistCollection").BlocklistCollection.on("reset", n);
                o("WAWebChatCollection").ChatCollection.on("change:name", function(t) {
                    let n;
                    if ((n = e.$1) != null && n.some((e)=>e.id.toString() === t.id.toString())) {
                        e.$6();
                    }
                });
            }
        }
        addEntry(t) {
            const e = this.$4();
            const n = e.filter((e)=>e.chatId !== t);
            const r = {
                chatId: t,
                timestamp: Date.now()
            };
            const o = [
                r
            ].concat(n).slice(0, _);
            this.$5(o);
            this.$7();
        }
        removeEntry(t) {
            const e = this.$4();
            const n = e.filter((e)=>e.chatId !== t);
            this.$5(n);
            this.$7();
        }
        clearAll() {
            this.$5([]);
            this.$7();
        }
    }
    const g = new f;
    function h(e) {
        g.addEntry(e);
    }
    function y() {
        g.resetForTesting();
    }
    function C() {
        const e = o("react-compiler-runtime").c(2);
        const recentChats = useSyncExternalStore(g.subscribe, g.getSnapshot);
        const addRecentSearch = S;
        const removeRecentSearch = v;
        const clearAllRecentSearches = b;
        let i;
        if (e[0] !== recentChats) {
            i = {
                recentChats,
                addRecentSearch,
                removeRecentSearch,
                clearAllRecentSearches
            };
            e[0] = recentChats;
            e[1] = i;
        } else {
            i = e[1];
        }
        return i;
    }
    function b() {
        g.clearAll();
    }
    function v(e) {
        g.removeEntry(e);
    }
    function S(e) {
        g.addEntry(e);
    }
    l.addChatToRecentSearches = h;
    l.resetStoreForTesting = y;
    l.useRecentlySearchedChats = C;
}, 98);