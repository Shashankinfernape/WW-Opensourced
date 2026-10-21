__d("WAWebBaseMirror", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = {};
        let n = 0;
        const r = function(r) {
            t[`change:${r}`] = n++;
        };
        if (e.props) {
            Object.keys(e.props).forEach(r);
        }
        if (e.session) {
            Object.keys(e.session).forEach(r);
        }
        if (e.derived) {
            Object.keys(e.derived).forEach(r);
        }
        return t;
    }
    const l = "change";
    const s = 32;
    function u(e, t) {
        const n = [];
        for(let r = 0; r < t.length; r++){
            const o = e[`change:${t[r]}`];
            const a = Math.floor(o / s);
            const i = o % s;
            m(n, a + 1);
            n[a] |= 1 << i;
        }
        return n;
    }
    class c {
        constructor(e){
            this.state = e;
        }
        destructor() {
            this.state.off("all", this.onGatherEvent, this);
        }
        initListener() {
            this.state.on("all", this.onGatherEvent, this);
            this.masks = [];
            this.listeners = [];
            this.changeEvents = [];
        }
        onGatherEvent(t) {
            if (t === l) {
                const e = this.changeEvents;
                if (!e.some(Boolean)) {
                    return;
                }
                this.onChange();
                this.changeEvents = [];
            } else {
                const n = this.state.mirrorMask[t];
                if (n === undefined) {
                    return;
                }
                const r = n / s | 0;
                const o = n % s | 0;
                m(this.changeEvents, r + 1);
                this.changeEvents[r] |= 1 << o;
            }
        }
        onChange() {
            const listeners = this.listeners;
            if (listeners != null) {
                const t = this.state;
                const n = this.changeEvents;
                const r = this.masks;
                r.map((t, n)=>[
                        t,
                        listeners[n]
                    ]).forEach(([r, o])=>{
                    for(let a = Math.min(n.length, r.length), i = 0; i < a; i++){
                        if (n[i] & r[i]) {
                            const l = o[0];
                            const s = o[1];
                            if (l != null && s != null) {
                                l(s, t);
                            }
                            break;
                        }
                    }
                });
            }
        }
        addListener(t, n, r) {
            if (!this.listeners) {
                this.initListener();
            }
            this.masks.push(n);
            this.listeners?.push([
                t,
                r
            ]);
        }
        removeListener(t) {
            const listeners = this.listeners;
            if (listeners != null) {
                for(let n = 0; n < listeners.length; n++){
                    if (listeners[n][0] === t) {
                        listeners[n][0] = null;
                        listeners[n][1] = null;
                        d(this.masks, n);
                        d(listeners, n);
                    }
                }
            }
        }
    }
    function d(e, t) {
        e[t] = e[e.length - 1];
        e.pop();
    }
    function m(e, t) {
        if (!(t <= e.length)) {
            for(let n = t - e.length, r = 0; r < n; r++){
                e.push(0);
            }
        }
    }
    i.genMirrorMask = e;
    i.genBitMask = u;
    i.BaseMirror = c;
}, 66);