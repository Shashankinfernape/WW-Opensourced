__d("WAWebCallRingtone", [
    "WAWebAuraRingtonePlayback",
    "WAWebCallCollection",
    "WAWebNoop",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipWaCallEnums"
], function(t, n, r, o, a, i, l) {
    let e = 0;
    let s = -1;
    let u = null;
    let c = null;
    function d() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall == null) {
            return false;
        }
        const t = activeCall.getState();
        return t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall || t === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer;
    }
    function m(e) {
        try {
            e.pause();
            e.src = "";
            e.load();
        } catch (e) {}
    }
    function p() {
        if (d()) {
            if (u != null) {
                m(u);
                u = null;
            }
            if (c != null) {
                c.abort();
                c = null;
            }
            e++;
            const t = e;
            s = t;
            const n = r("WAWebCallCollection").activeCall;
            const a = n?.peerJid;
            const i = o("WAWebAuraRingtonePlayback").getRingtoneURL(a);
            if (i != null) {
                const l = new window.Audio(i);
                l.loop = true;
                u = l;
                const p = new AbortController;
                c = p;
                const _ = {
                    signal: p.signal
                };
                l.addEventListener("play", function() {
                    if (s !== t) {
                        m(l);
                    }
                }, _);
                l.addEventListener("playing", function() {
                    if (s !== t) {
                        m(l);
                    }
                }, _);
                l.play().then(()=>{
                    if (s !== t) {
                        m(l);
                        return;
                    }
                    o("WAWebVoipCalleeOfferToRingStore").recordCalleeRing(n?.id);
                }).catch(r("WAWebNoop"));
            }
        }
    }
    function _() {
        s = -1;
        if (c != null) {
            c.abort();
            c = null;
        }
        if (u != null) {
            m(u);
            u = null;
        }
    }
    l.playCallRingtone = p;
    l.stopCallRingtone = _;
}, 98);