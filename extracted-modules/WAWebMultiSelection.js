__d("WAWebMultiSelection", [
    "$InternalEnum",
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebEventEmitter",
    "WAWebMuteGetters",
    "isEmptyIterable",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "Boolean",
        "Number"
    ]);
    const s = ((t)=>{
        function n(n, r, o = e.Boolean) {
            let a;
            a = t.call(this) || this;
            a.list = n;
            a.selected = n.reduce((acc, item, index)=>{
                acc[index] = o === e.Number ? 0 : false;
                return acc;
            }, {});
            a.getter = r;
            a.selectedDataType = o;
            return a;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.init = function(t = []) {
            const e = this;
            if (!r("isEmptyObject")(this.selected)) {
                if (r("isEmptyIterable")(t)) {
                    this.unsetAll();
                    return;
                }
                this.selected = t.reduce((acc, item, index)=>{
                    const o = e.list.indexOf(item);
                    acc[index] = o > -1 && e.selected[o];
                    return acc;
                }, {});
                this.list = t;
            }
        };
        n_prototype.unsetAll = function() {
            const t = this;
            Object.keys(this.selected).forEach((n)=>{
                const r = Number(n);
                if (t.selected[r]) {
                    t.set(r, t.selectedDataType === e.Number ? 0 : false);
                }
            });
        };
        n_prototype.reset = function(t = true) {
            const e = this;
            Object.keys(this.selected).forEach((n)=>{
                const r = Number(n);
                if (e.selected[r]) {
                    e.trigger(e.getter(e.list[r]), true, true, t);
                    e.trigger("all", true, true, t);
                }
            });
        };
        n_prototype.set = function(t, n = true, r = true) {
            if (this.list.length) {
                const e = Math.min(Math.max(t, -1), this.list.length - 1);
                const o = e > -1 ? this.list[e] : undefined;
                if (!(o == null || !o)) {
                    if (this.selected[e] !== n) {
                        this.selected[e] = n;
                        this.trigger(this.getter(o), n, r);
                    }
                    if (this.isUnreadChat(o)) {
                        this.trigger("unread_chat", n ? 1 : -1);
                    }
                    if (!this.isMutedChat(o)) {
                        this.trigger("unmuted_chat", n ? 1 : -1);
                    }
                    this.trigger("all", n, r);
                }
            }
        };
        n_prototype.setVal = function(t, n = true, r = true) {
            let e = this.list.indexOf(t);
            if (e === -1) {
                e = this.list.length;
                this.list.push(t);
                this.selected[e] = typeof n === "number" ? 0 : false;
            }
            this.set(e, n, r);
        };
        n_prototype.getVal = function(t) {
            return this.selected[this.list.indexOf(t)];
        };
        n_prototype.setFirst = function(n = true) {
            if (!r("isEmptyIterable")(this.list)) {
                this.set(0, this.selectedDataType === e.Number ? 1 : true, n);
            }
        };
        n_prototype.setLast = function(n = true) {
            if (!r("isEmptyIterable")(this.list)) {
                this.set(this.list.length - 1, this.selectedDataType === e.Number ? 1 : true, n);
            }
        };
        n_prototype.getSelected = function() {
            const e = this;
            return this.list.reduce((acc, item, index)=>{
                if (e.selected[index]) {
                    acc.push(item);
                }
                return acc;
            }, []);
        };
        n_prototype.isSelected = function(t) {
            return !!this.getVal(t);
        };
        n_prototype.isUnreadChat = function(t) {
            if (t instanceof o("WAWebChatModel").Chat) {
                return o("WAWebChatGetters").getHasUnread(t);
            }
            return false;
        };
        n_prototype.isMutedChat = function(t) {
            if (t instanceof o("WAWebChatModel").Chat) {
                return o("WAWebMuteGetters").getIsMuted(t.mute);
            }
            return false;
        };
        n_prototype.isInList = function(t) {
            return this.list.includes(t);
        };
        return n;
    })(r("WAWebEventEmitter"));
    l.default = s;
}, 98);