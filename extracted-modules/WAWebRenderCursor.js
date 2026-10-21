__d("WAWebRenderCursor", [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebMessageListAlbums",
    "WAWebMsgGetters",
    "WAWebRenderCursorGetWindowHeight",
    "WAWebRenderCursorGuessMessageHeight",
    "WAWebUserPrefsMeUser",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        RECENT_AT_TOP: "recent_at_top",
        RECENT_AT_BOTTOM: "recent_at_bottom",
        CONVERSATION: "conversation",
        GROUP_CONVERSATION: "group_conversation",
        STARRED_DRAWER: "starred_drawer"
    };
    const u = {
        BEFORE: "before",
        AFTER: "after"
    };
    const c = 2;
    const d = 12;
    const m = 19;
    const p = 65;
    const _ = 2;
    function f(t, n, r) {
        let a = n;
        const i = t.toArray();
        const l = r === u.BEFORE ? -1 : 1;
        return {
            hasNext: function() {
                return a >= 0 && a < i.length;
            },
            next: function() {
                const t = i[a];
                if (!t) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Invalid cursor at ",
                        ", array.length = ",
                        ", element = ",
                        ""
                    ])), a, i.length, t);
                }
                a += l;
                return t;
            }
        };
    }
    function g({ direction, factor = 1, first, maxPageSize, msgCollection }) {
        const u = r("WAWebRenderCursorGetWindowHeight")() * factor;
        let g;
        for(var m = f(msgCollection, first, direction), p = 0, _ = 0; m.hasNext();){
            const h = m.next();
            const y = r("WAWebRenderCursorGuessMessageHeight")(h);
            const C = 2 * (o("WAWebMsgGetters").getIsNotification(h) ? 1 : 0) + (o("WAWebMsgGetters").getIsSentByMe(h) ? 1 : 0);
            const b = !C || C !== g ? d : c;
            p += y + b;
            _++;
            if (p > u || _ >= maxPageSize) {
                break;
            }
            const v = o("WAWebFrontendMsgGetters").getAsGroupedSticker(h);
            const S = o("WAWebFrontendMsgGetters").getAsAlbumAsset(h) != null;
            if (v || S) {
                const R = [];
                let L = false;
                let E = 1;
                if (v) {
                    let k;
                    if (m.hasNext()) {
                        k = m.next();
                        R.push(k);
                        _++;
                        if (_ >= maxPageSize) {
                            break;
                        }
                        if (o("WAWebMessageListAlbums").canBeGroupedAsAlbum(h.safe(), k.safe()) && o("WAWebFrontendMsgGetters").getAsGroupedSticker(k)) {
                            L = true;
                        }
                    }
                }
                if (S) {
                    let I = h;
                    for(let T; m.hasNext() && E < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE && (T = m.next(), R.push(T), _++, !(_ >= maxPageSize));){
                        if (o("WAWebMessageListAlbums").canBeGroupedAsAlbum(I.safe(), T.safe()) && o("WAWebFrontendMsgGetters").getAsAlbumAsset(T)) {
                            E++;
                            I = T;
                        } else {
                            break;
                        }
                    }
                }
                if (v && !L || S && E < o("WAWebMessageListAlbums").ALBUM_MIN_SIZE) {
                    const D = r("sumBy")(R, function(e) {
                        return r("WAWebRenderCursorGuessMessageHeight")(e);
                    });
                    p += D;
                    if (p > u) {
                        break;
                    }
                }
            }
            g = C;
        }
        return _;
    }
    function h({ direction, factor = 1, first, maxPageSize, msgCollection }) {
        const u = r("WAWebRenderCursorGetWindowHeight")() * factor;
        let h;
        for(var p = f(msgCollection, first, direction), _ = 0, g = 0; p.hasNext();){
            const y = p.next();
            const C = r("WAWebRenderCursorGuessMessageHeight")(y);
            const b = y.author || (o("WAWebMsgGetters").getIsSentByMe(y) ? o("WAWebUserPrefsMeUser").getMaybeMePnUser() : undefined);
            const v = b && !o("WAWebMsgGetters").getIsSentByMe(y) && b !== h ? m : 0;
            const S = !b || b !== h ? d : c;
            _ += C + v + S;
            g++;
            if (_ > u || g >= maxPageSize) {
                break;
            }
            const R = o("WAWebFrontendMsgGetters").getAsGroupedSticker(y);
            const L = o("WAWebFrontendMsgGetters").getAsAlbumAsset(y) != null;
            if (R || L) {
                const E = [];
                let k = false;
                let I = 1;
                if (R) {
                    let T;
                    if (p.hasNext()) {
                        T = p.next();
                        E.push(T);
                        g++;
                        if (g >= maxPageSize) {
                            break;
                        }
                        if (o("WAWebMessageListAlbums").canBeGroupedAsAlbum(y.safe(), T.safe()) && o("WAWebFrontendMsgGetters").getAsGroupedSticker(T)) {
                            k = true;
                        }
                    }
                }
                if (L) {
                    let D = y;
                    for(let x; p.hasNext() && I < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE && (x = p.next(), E.push(x), g++, !(g >= maxPageSize));){
                        if (o("WAWebMessageListAlbums").canBeGroupedAsAlbum(D.safe(), x.safe()) && o("WAWebFrontendMsgGetters").getAsAlbumAsset(x) != null) {
                            I++;
                            D = x;
                        } else {
                            break;
                        }
                    }
                }
                if (R && !k || L && I < o("WAWebMessageListAlbums").ALBUM_MIN_SIZE) {
                    const $ = r("sumBy")(E, function(e) {
                        return r("WAWebRenderCursorGuessMessageHeight")(e);
                    });
                    _ += $;
                    if (_ > u) {
                        break;
                    }
                }
            }
            h = b;
        }
        return g;
    }
    function y({ direction, factor = 1, first, maxPageSize, msgCollection }) {
        const s = r("WAWebRenderCursorGetWindowHeight")() * factor;
        for(var u = f(msgCollection, first, direction), c = 0, d = 0; u.hasNext();){
            const m = u.next();
            const _ = r("WAWebRenderCursorGuessMessageHeight")(m);
            c += _ + p;
            d++;
            if (c > s || d >= maxPageSize) {
                break;
            }
        }
        return d;
    }
    function C(e) {
        switch(e){
            case s.CONVERSATION:
            case s.GROUP_CONVERSATION:
                return s.RECENT_AT_BOTTOM;
            case s.STARRED_DRAWER:
                return s.RECENT_AT_TOP;
            default:
                return s.RECENT_AT_BOTTOM;
        }
    }
    function b(e) {
        switch(e){
            case s.CONVERSATION:
                return g;
            case s.GROUP_CONVERSATION:
                return h;
            case s.STARRED_DRAWER:
                return y;
            default:
                return g;
        }
    }
    function v(e, t, n = u.AFTER) {
        const a = r("WAWebRenderCursorGetWindowHeight")() * _;
        for(var i = f(e, t, n), l = 0, s = true, m = null; i.hasNext();){
            const p = i.next();
            const g = r("WAWebRenderCursorGuessMessageHeight")(p);
            const h = 2 * (o("WAWebMsgGetters").getIsNotification(p) ? 1 : 0) + (o("WAWebMsgGetters").getIsSentByMe(p) ? 1 : 0);
            const y = !h || h !== m ? d : c;
            l += g + y;
            if (l > a) {
                s = false;
                break;
            }
            m = h;
        }
        return s;
    }
    const S = (()=>{
        function e({ after, before, focusedMsgKey, prevFocusedMsgKey, type }) {
            this.$3 = type;
            this.$1 = focusedMsgKey;
            this.$2 = prevFocusedMsgKey;
            this.before = before || 0;
            this.after = after || 0;
        }
        e.create = function({ msgCollection, focusedMsgKey, type, maxInitialCount = Number.MAX_SAFE_INTEGER }) {
            return new e({
                type
            }).init(focusedMsgKey, msgCollection, maxInitialCount);
        };
        const e_prototype = e.prototype;
        e_prototype.$4 = function(n) {
            return new e(babelHelpers.extends({
                type: this.$3,
                before: this.before,
                after: this.after,
                focusedMsgKey: this.$1,
                prevFocusedMsgKey: this.$2
            }, n));
        };
        e_prototype.$5 = function({ direction, factor, fromIndex, maxCount, msgCollection }) {
            const i = b(this.$3);
            return i({
                direction,
                factor,
                first: fromIndex,
                maxPageSize: maxCount,
                msgCollection
            });
        };
        e_prototype.getStart = function(t) {
            return Math.max(R(this.$1, t, this.$3) - this.before, 0);
        };
        e_prototype.getEnd = function(t) {
            return Math.min(R(this.$1, t, this.$3) + this.after + 1, t.length);
        };
        e_prototype.hasBefore = function(t) {
            return R(this.$1, t, this.$3) - this.before > 0;
        };
        e_prototype.hasAfter = function(t) {
            return R(this.$1, t, this.$3) + this.after < t.length - 1;
        };
        e_prototype.init = function(n, r, o = Number.MAX_SAFE_INTEGER) {
            return new e({
                type: this.$3,
                before: 0,
                after: 0,
                focusedMsgKey: n
            }).loadBefore(r, {
                factor: 1,
                maxCount: o
            }).loadAfter(r, {
                factor: 1,
                maxCount: o
            });
        };
        e_prototype.setFocusedMsgKey = function(t, n) {
            const e = R(this.$1, t, this.$3);
            const r = R(n, t, this.$3);
            let before;
            let after;
            if (n) {
                after = this.after - (r - e);
                before = this.before + (r - e);
            } else {
                before = this.before + this.after;
                after = 0;
            }
            return this.$4({
                focusedMsgKey: n,
                before,
                after
            }).$6(t);
        };
        e_prototype.ensureValidFocus = function(t) {
            const e = this.$2 != null && t.get(this.$2) == null;
            const n = this.$1 != null && t.get(this.$1) == null;
            let r = this;
            if (e) {
                r = r.$6(t);
            }
            if (n) {
                r = r.focusBefore(t);
            }
            return r;
        };
        e_prototype.$6 = function(t) {
            const n = R(this.$1, t, this.$3);
            return this.$4({
                prevFocusedMsgKey: n > 0 ? t.at(n - 1)?.id : undefined
            });
        };
        e_prototype.focusBefore = function(t) {
            return this.$4({
                focusedMsgKey: this.$2
            }).$6(t);
        };
        e_prototype.loadBefore = function(t, n) {
            const { count, maxCount = Number.MAX_SAFE_INTEGER, factor = 2 } = n || {};
            const s = count != null && count !== 0 ? count : this.$5({
                direction: u.BEFORE,
                factor,
                fromIndex: Math.max(0, this.getStart(t) - 1),
                maxCount,
                msgCollection: t
            });
            return this.$4({
                before: this.before + s
            });
        };
        e_prototype.loadAfter = function(t, n) {
            const { count, maxCount = Number.MAX_SAFE_INTEGER, factor = 2 } = n || {};
            const s = count != null && count !== 0 ? count : this.$5({
                direction: u.AFTER,
                factor,
                fromIndex: this.getEnd(t),
                maxCount,
                msgCollection: t
            });
            return this.$4({
                after: this.after + s
            });
        };
        e_prototype.loadBeforeCapped = function(t, n) {
            const { count, factor = 2 } = n || {};
            if (v(t, this.getStart(t), u.AFTER)) {
                return this.loadBefore(t, {
                    count,
                    factor
                });
            }
            return this;
        };
        e_prototype.resetBeforeCursor = function(t, n = Number.MAX_SAFE_INTEGER) {
            if (!v(t, this.getStart(t), u.AFTER)) {
                const fromIndex = Math.max(0, this.getEnd(t) - 1);
                const r = this.$5({
                    direction: u.BEFORE,
                    factor: 2,
                    fromIndex,
                    maxCount: n,
                    msgCollection: t
                });
                return this.$4({
                    before: Math.min(this.before, r)
                });
            }
            return this;
        };
        return e;
    })();
    function R(e, t, n) {
        if (e) {
            const r = t.get(e);
            const o = t.indexOf(r);
            if (o !== -1) {
                return o;
            }
        }
        if (C(n) === s.RECENT_AT_TOP) {
            return 0;
        }
        return t.length - 1;
    }
    l.RENDER_CURSOR = s;
    l.RenderCursor = S;
}, 98);