__d("WAWebPipVideoStreaming", [
    "Promise",
    "WABackoffUtils",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebManuallySetMedia",
    "WAWebMediaVideoStreaming",
    "WAWebMsgCollection",
    "WAWebNetworkStatus",
    "WAWebSWBusActions",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = `${o("WAWebBuildConstants").WEB_PUBLIC_PATH}stream/video`;
    class c {
        constructor(t){
            this.ranges = [];
            this.buffer = [];
            this.size = t;
            if (!t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "video buffer falsy size: ",
                    ""
                ])), t);
            }
        }
        push(t) {
            this.buffer.push(t);
            this.add(t.start, t.end);
        }
        add(t, n) {
            let e = t;
            for(var r = this.ranges, o = 0; o < r.length; o++){
                const a = r[o];
                let i = a[0];
                let l = a[1];
                if (!(e > l + 1)) {
                    if (n + 1 < i) {
                        return r.splice(o, 0, [
                            e,
                            n
                        ]);
                    }
                    while(o + 1 < r.length){
                        const s = r[o + 1];
                        const u = s[0];
                        const c = s[1];
                        if (n + 1 < u) {
                            break;
                        }
                        e = Math.min(e, i);
                        r.splice(o, 1);
                        i = u;
                        l = c;
                    }
                    r[o] = [
                        Math.min(e, i),
                        Math.max(n, l)
                    ];
                    return;
                }
            }
            return r.push([
                e,
                n
            ]);
        }
        isComplete() {
            const ranges = this.ranges;
            const size = this.size;
            if (size) {
                return ranges.length === 1 && ranges[0][0] === 0 && ranges[0][1] === size - 1;
            }
            return false;
        }
        serialize() {
            const e = new Uint8Array(this.size);
            for(let t = this.buffer, n = 0; n < t.length; n++){
                const r = t[n];
                const { buffer, start } = r;
                e.set(new Uint8Array(buffer), start);
            }
            return e;
        }
    }
    function d(key) {
        const t = o("WAWebMsgCollection").MsgCollection.get(key);
        if (t) {
            return o("WAWebMediaVideoStreaming").videoStreamingInfo(t);
        }
        return null;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebMsgCollection").MsgCollection.get(e.key);
            if (!t) {
                return null;
            }
            yield t.downloadMedia({
                downloadEvenIfExpensive: true,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.VIDEO_STREAMING,
                isUserInitiated: true
            });
            throw r("err")("downloaded media instead of streaming");
        });
        return p.apply(this, arguments);
    }
    const _ = {};
    function f({ action, message }) {
        switch(action){
            case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
                return d(message.key);
            case r("WAWebSWBusActions").EXP_BACKOFF:
                return o("WABackoffUtils").expDelaySec(message.generation, 60).then(()=>r("WAWebNetworkStatus").waitIfOffline());
            case r("WAWebSWBusActions").REQUEST_RMR:
                return m(message);
            case r("WAWebSWBusActions").SEND_STREAMING_CHUNK:
                {
                    const i = message.msgKey;
                    const l = o("WAWebMsgCollection").MsgCollection.get(i);
                    if (!l) {
                        delete _[i.toString()];
                        return;
                    }
                    let u;
                    if (Object.hasOwn(_, i)) {
                        u = _[i.toString()];
                    } else {
                        _[i.toString()] = u = new c(l.size);
                    }
                    u.push(message.data);
                    if (u.isComplete()) {
                        o("WAWebManuallySetMedia").manuallySetMedia({
                            msg: l,
                            media: u.serialize(),
                            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.VIDEO_STREAMING
                        });
                        delete _[i.toString()];
                    }
                    break;
                }
            default:
                return (s || (s = n("Promise"))).reject(r("err")("Invalid Video Streaming Action"));
        }
    }
    l.VIDEO_STREAM_URL = u;
    l.handleVideoStreamingRequest = f;
}, 98);