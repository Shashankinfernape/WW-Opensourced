__d("WAWamStorage", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWamChannelManager",
    "WAWamEntrypoint",
    "WAWamUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f = null;
    let g = null;
    function h(e) {
        if (g) {
            return g;
        }
        throw r("err")(`WamStorage::${e} called before startWamStorage`);
    }
    function y(t) {
        if (g == null) {
            g = t;
        } else {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[wam] startWamStorage: called again"
            ]))).sendLogs("startWamStorage");
        }
    }
    function C() {
        o("WAWamEntrypoint").deinitializeWAM();
        o("WAWamChannelManager").closeChannelManager();
        g = null;
        f = null;
    }
    function b(e, t, a, i) {
        const l = h("initializeWAMSink");
        const m = o("WAWamChannelManager").getChannelManager();
        if (m.getChannelInitialized(t)) {
            return (_ || (_ = n("Promise"))).resolve();
        }
        m.setChannelInitialized(t);
        const p = l.getStreamId(e);
        const g = {
            putBuffer: function(r, i, d, f) {
                if (m.isSinkBusy(t)) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WamStorage: Sink flush did not happen within timeout, buffer is not saved"
                    ])));
                    return (_ || (_ = n("Promise"))).resolve();
                }
                m.setSinkBusy(t, true);
                const e = o("WAWamUtils").asBufferEntry(r, t, p, i, d);
                const { bufferKey: g, bufferRow: h, meta: y } = e;
                return l.saveBuffer(y, h, f).then(()=>{
                    const e = [
                        r.streamId,
                        r.sequenceNumber
                    ];
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "WamStorage: Successfully put buffer ",
                        " to sink"
                    ])), e);
                    if (d) {
                        a();
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "WamStorage: Buffer ",
                            " is scheduled for send"
                        ])), g);
                    }
                }).finally(()=>{
                    m.setSinkBusy(t, false);
                });
            }
        };
        if (f == null) {
            f = l.finishBuffer(p);
        }
        return f.then(()=>{
            if (l.getStartingSequenceNumbers) {
                l.getStartingSequenceRow;
                return l.getStartingSequenceNumbers(t, p);
            }
            l.getStartingSequenceRow;
            if (i != null && i.multipleSequences) {
                throw r("err")("getStartingSequenceRow must not used when enabling support for multiple sequences");
            }
            return l.getStartingSequenceRow(p).then((e)=>{
                const t = o("WAWamUtils").getSequenceNumber(e);
                const n = new Map;
                n.set("regular", t);
                return n;
            });
        }).then((e)=>{
            o("WAWamEntrypoint").initializeWAM(p, e, t, g, i);
            if (t === "private" && l.updatePrivateStatsIds) {
                l.updatePrivateStatsIds().then(o("WAWamEntrypoint").updatePrivateStatsIds).catch((e)=>{
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "WamStorage: Failed to update private stats IDs: ",
                        ""
                    ])), e);
                });
            }
        });
    }
    function v(e) {
        return h("getFinishedStreamBuffers").getBuffers().then((t)=>o("WAWamUtils").getFinishedBuffers(e, t));
    }
    const S = 64;
    const R = function(t, n) {
        const e = n?.maxRedeemCount != null && n.maxRedeemCount !== 0 ? n.maxRedeemCount : S;
        const r = n?.maxExpirySeconds != null && n.maxExpirySeconds !== 0 ? n.maxExpirySeconds : o("WATimeUtils").DAY_SECONDS;
        const a = {
            maxRedeemCount: e,
            maxExpirySeconds: r
        };
        if (o("WATimeUtils").happenedWithin(t.creationTs, a.maxExpirySeconds)) {
            if (t.redeemCount >= a.maxRedeemCount) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "The private stats token was redeemed maximum number of time. The client shall re-issue a new one"
                ])));
                return false;
            }
            return true;
        }
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "The private stats token expired. The client shall re-issue a new one"
        ])));
        return false;
    };
    function L() {
        const e = h("getPrivateStatsToken");
        if (!e.redeemPrivateStatsToken) {
            throw r("err")("redeemPrivateStatsToken not implemented for WAM DB");
        }
        return e.redeemPrivateStatsToken(R);
    }
    function E(e) {
        const t = h("savePrivateStatsToken");
        if (!t.savePrivateStatsToken) {
            throw r("err")("savePrivateStatsToken not implemented for WAM DB");
        }
        return t.savePrivateStatsToken(e);
    }
    function k() {
        const e = h("privateStatsKillSwitchGetBlockedToken");
        if (!e.privateStatsKillSwitchGetBlockedToken) {
            throw r("err")("privateStatsKillSwitchGetBlockedToken not implemented for WAM DB");
        }
        return e.privateStatsKillSwitchGetBlockedToken();
    }
    function I(e) {
        const t = h("privateStatsKillSwitchSet");
        if (!t.privateStatsKillSwitchSet) {
            throw r("err")("privateStatsKillSwitchSet not implemented for WAM DB");
        }
        return t.privateStatsKillSwitchSet(e);
    }
    function T(e) {
        return h("removeBufferByKey").removeBufferByKey(e);
    }
    function D() {
        return h("nukeMetrics").nukeMetrics();
    }
    l.startWamStorage = y;
    l.closeWamStorage = C;
    l.initializeWAMSink = b;
    l.getFinishedStreamBuffers = v;
    l.redeemPrivateStatsToken = L;
    l.savePrivateStatsToken = E;
    l.privateStatsKillSwitchGetBlockedToken = k;
    l.privateStatsKillSwitchSet = I;
    l.removeBufferByKey = T;
    l.nukeMetrics = D;
}, 98);