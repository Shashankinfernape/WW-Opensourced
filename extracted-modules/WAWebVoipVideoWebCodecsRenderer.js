__d("WAWebVoipVideoWebCodecsRenderer", [
    "Promise",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRasterRenderer",
    "WAWebVoipVideoRendererLogging",
    "WAWebVoipWebCodecsEncoderState",
    "asyncToGeneratorRuntime",
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
    let f;
    let g;
    let h;
    let y;
    const C = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    let b = null;
    function v(e) {
        b = e;
    }
    const S = "voip: WAWebVoipVideoWebCodecsRenderer: ";
    const R = 5;
    const L = 500;
    const E = 30;
    const k = 5000;
    const I = 320;
    const T = 240;
    const D = ((t)=>{
        function a(e, n) {
            let r;
            r = t.call(this, e) || this;
            r.$WAWebVoipVideoWebCodecsRenderer$p_11 = new Map;
            r.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_12 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_15 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_7 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_8 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_9 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_16 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_1 = n ?? VideoDecoder;
            r.$WAWebVoipVideoWebCodecsRenderer$p_2 = 0;
            r.$WAWebVoipVideoWebCodecsRenderer$p_3 = r.$WAWebVoipVideoWebCodecsRenderer$p_4();
            return r;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.$WAWebVoipVideoWebCodecsRenderer$p_4 = function() {
            const t = this;
            const $WAWebVoipVideoWebCodecsRenderer$p_2 = this.$WAWebVoipVideoWebCodecsRenderer$p_2;
            var r = new this.$WAWebVoipVideoWebCodecsRenderer$p_1({
                output: function(r) {
                    try {
                        if ($WAWebVoipVideoWebCodecsRenderer$p_2 !== t.$WAWebVoipVideoWebCodecsRenderer$p_2) {
                            return;
                        }
                        t.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0;
                        t.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0;
                        t.$WAWebVoipVideoWebCodecsRenderer$p_7++;
                        t.$WAWebVoipVideoWebCodecsRenderer$p_8 = r.displayWidth;
                        t.$WAWebVoipVideoWebCodecsRenderer$p_9 = r.displayHeight;
                        t.applyPendingResize();
                        const e = t.$WAWebVoipVideoWebCodecsRenderer$p_10(r.timestamp);
                        const { mirror, orientation } = e;
                        t.renderVideoFrameToCanvas(r, r.displayWidth, r.displayHeight, orientation, mirror, true);
                    } finally{
                        r.close();
                    }
                },
                error: function(i) {
                    if ($WAWebVoipVideoWebCodecsRenderer$p_2 === t.$WAWebVoipVideoWebCodecsRenderer$p_2) {
                        if (t.$WAWebVoipVideoWebCodecsRenderer$p_3 === r) {
                            t.$WAWebVoipVideoWebCodecsRenderer$p_3 = null;
                        }
                        t.$WAWebVoipVideoWebCodecsRenderer$p_11.clear();
                        t.$WAWebVoipVideoWebCodecsRenderer$p_5++;
                        t.$WAWebVoipVideoWebCodecsRenderer$p_12 = Date.now();
                        if (b != null) {
                            b();
                        }
                        if (t.$WAWebVoipVideoWebCodecsRenderer$p_5 > R) {
                            o("WAWebVoipVideoRendererLogging").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                "H264 decoder fatal error, max recovery attempts (",
                                ") exceeded. ",
                                ""
                            ])), S, R, i);
                        } else {
                            o("WAWebVoipVideoRendererLogging").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                "H264 decoder fatal error, will attempt recovery (",
                                "/",
                                "). ",
                                ""
                            ])), S, t.$WAWebVoipVideoWebCodecsRenderer$p_5, R, i);
                        }
                    }
                }
            });
            r.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_13);
            return r;
        };
        a_prototype.$WAWebVoipVideoWebCodecsRenderer$p_14 = function() {
            this.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0;
            this.$WAWebVoipVideoWebCodecsRenderer$p_11.clear();
            this.$WAWebVoipVideoWebCodecsRenderer$p_3?.close();
            this.$WAWebVoipVideoWebCodecsRenderer$p_3 = this.$WAWebVoipVideoWebCodecsRenderer$p_4();
        };
        a_prototype.reset = function() {
            const $WAWebVoipVideoWebCodecsRenderer$p_3 = this.$WAWebVoipVideoWebCodecsRenderer$p_3;
            this.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0;
            this.$WAWebVoipVideoWebCodecsRenderer$p_12 = 0;
            this.$WAWebVoipVideoWebCodecsRenderer$p_15 = 0;
            this.$WAWebVoipVideoWebCodecsRenderer$p_7 = 0;
            this.$WAWebVoipVideoWebCodecsRenderer$p_8 = 0;
            this.$WAWebVoipVideoWebCodecsRenderer$p_9 = 0;
            this.$WAWebVoipVideoWebCodecsRenderer$p_16 = 0;
            t.prototype.reset.call(this);
            this.$WAWebVoipVideoWebCodecsRenderer$p_2++;
            this.$WAWebVoipVideoWebCodecsRenderer$p_3 = null;
            this.$WAWebVoipVideoWebCodecsRenderer$p_14();
            if ($WAWebVoipVideoWebCodecsRenderer$p_3 && $WAWebVoipVideoWebCodecsRenderer$p_3.state !== "closed") {
                $WAWebVoipVideoWebCodecsRenderer$p_3.flush().finally(()=>{
                    if ($WAWebVoipVideoWebCodecsRenderer$p_3.state !== "closed") {
                        $WAWebVoipVideoWebCodecsRenderer$p_3.close();
                    }
                });
            }
        };
        a_prototype.requireKeyframe = function() {
            const $WAWebVoipVideoWebCodecsRenderer$p_3 = this.$WAWebVoipVideoWebCodecsRenderer$p_3;
            if ($WAWebVoipVideoWebCodecsRenderer$p_3?.state === "configured") {
                const t = $WAWebVoipVideoWebCodecsRenderer$p_3.decodeQueueSize;
                $WAWebVoipVideoWebCodecsRenderer$p_3.reset();
                $WAWebVoipVideoWebCodecsRenderer$p_3.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_13);
                o("WAWebVoipVideoRendererLogging").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    "requireKeyframe: decoder reset and reconfigured, [[key chunk required]] = true, decodeQueueSizeBeforeReset=",
                    ""
                ])), S, t);
            }
        };
        a_prototype.cleanup = function() {
            this.$WAWebVoipVideoWebCodecsRenderer$p_2++;
            this.$WAWebVoipVideoWebCodecsRenderer$p_3?.close();
            this.$WAWebVoipVideoWebCodecsRenderer$p_3 = null;
            t.prototype.cleanup.call(this);
        };
        a.checkAvailability = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (a.$WAWebVoipVideoWebCodecsRenderer$p_17 == null) {
                    a.$WAWebVoipVideoWebCodecsRenderer$p_17 = a.$WAWebVoipVideoWebCodecsRenderer$p_18();
                }
                return a.$WAWebVoipVideoWebCodecsRenderer$p_17;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$WAWebVoipVideoWebCodecsRenderer$p_18 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = window.performance.now();
                if (typeof window === "undefined" || typeof window.VideoDecoder !== "function") {
                    return false;
                }
                const t = yield window.VideoDecoder.isConfigSupported(a.$WAWebVoipVideoWebCodecsRenderer$p_13);
                const t_supported = t.supported;
                if (t_supported == null || !t_supported) {
                    o("WAWebVoipVideoRendererLogging").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "H264 decoder not supported"
                    ])), S);
                    return false;
                }
                if (typeof window.VideoEncoder !== "function") {
                    o("WAWebVoipVideoRendererLogging").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "VideoEncoder not available, skipping decode probe"
                    ])), S);
                    return false;
                }
                let r = false;
                try {
                    r = yield a.$WAWebVoipVideoWebCodecsRenderer$p_19();
                } catch (e) {}
                const i = Math.round(window.performance.now() - e);
                if (r) {
                    o("WAWebVoipVideoRendererLogging").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ""
                    ])), `${S}H264 decoder supported and probe passed in ${i}ms`);
                    return true;
                }
                o("WAWebVoipVideoRendererLogging").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), `${S}H264 decoder probe failed in ${i}ms — falling back to WASM decode`);
                return false;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$WAWebVoipVideoWebCodecsRenderer$p_19 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = 2000;
                let t = null;
                let i = null;
                let l = null;
                try {
                    const s = yield new (y || (y = n("Promise")))(function(n) {
                        let c = false;
                        const d = (t)=>{
                            if (!c) {
                                c = true;
                                n(t);
                            }
                        };
                        const m = window.setTimeout(function() {
                            return d(false);
                        }, e);
                        i = new VideoDecoder({
                            output: function(t) {
                                t.close();
                                window.clearTimeout(m);
                                d(true);
                            },
                            error: function() {
                                window.clearTimeout(m);
                                d(false);
                            }
                        });
                        i.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_13);
                        let p = false;
                        t = new VideoEncoder({
                            output: function(t) {
                                if (!p) {
                                    p = true;
                                    if (i == null || i.state === "closed") {
                                        window.clearTimeout(m);
                                        d(false);
                                        return;
                                    }
                                    const e = i;
                                    try {
                                        e.decode(t);
                                    } catch (error) {
                                        o("WAWebVoipVideoRendererLogging").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                            "",
                                            "probe decode threw, treating decoder as unsupported: ",
                                            ""
                                        ])), S, String(error));
                                        window.clearTimeout(m);
                                        d(false);
                                        return;
                                    }
                                    e.flush().then(()=>{
                                        window.clearTimeout(m);
                                        d(false);
                                    }, ()=>{
                                        window.clearTimeout(m);
                                        d(false);
                                    });
                                }
                            },
                            error: function() {
                                window.clearTimeout(m);
                                d(false);
                            }
                        });
                        t.configure({
                            codec: o("WAWebVoipWebCodecsEncoderState").WEBCODECS_H264_CODEC,
                            width: I,
                            height: T,
                            avc: {
                                format: "annexb"
                            }
                        });
                        const f = r("WAWebVoipVideoFrameCtor")();
                        if (f == null) {
                            window.clearTimeout(m);
                            d(false);
                            return;
                        }
                        const g = new Uint8Array(I * T * 4);
                        l = new f(g, {
                            format: "RGBA",
                            codedWidth: I,
                            codedHeight: T,
                            timestamp: 0
                        });
                        t?.encode(l, {
                            keyFrame: true
                        });
                        t?.flush().catch(function() {
                            window.clearTimeout(m);
                            d(false);
                        });
                    });
                    return s;
                } catch (e) {
                    return false;
                } finally{
                    l?.close();
                    if (t != null && t.state !== "closed") {
                        t.close();
                    }
                    if (i != null && i.state !== "closed") {
                        i.close();
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.renderFrame = function({ format, frameBuffer, height, isKeyFrame, mirror, orientation, timestamp, width }) {
            if (format === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264) {
                if (!this.$WAWebVoipVideoWebCodecsRenderer$p_3) {
                    throw this.$WAWebVoipVideoWebCodecsRenderer$p_5 === 0 ? new C(r("err")(`${S}Decoder not available, awaiting reset`)) : this.$WAWebVoipVideoWebCodecsRenderer$p_5 > R ? r("err")(`${S}H264 Decoder closed due to fatal error`) : Date.now() - this.$WAWebVoipVideoWebCodecsRenderer$p_12 < L ? new C(r("err")(`${S}Decoder recovery cooldown`)) : (o("WAWebVoipVideoRendererLogging").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "Recreating H264 decoder after fatal error (attempt ",
                        "/",
                        ")"
                    ])), S, this.$WAWebVoipVideoWebCodecsRenderer$p_5, R), this.$WAWebVoipVideoWebCodecsRenderer$p_14(), new C(r("err")(`${S}Decoder recovered, requesting key frame`)));
                }
                const timestampMicros = timestamp * 1000 / 90;
                try {
                    this.$WAWebVoipVideoWebCodecsRenderer$p_20({
                        frameBuffer,
                        isKeyFrame,
                        timestampMicros
                    });
                    this.$WAWebVoipVideoWebCodecsRenderer$p_21(timestampMicros, {
                        orientation,
                        mirror
                    });
                    this.$WAWebVoipVideoWebCodecsRenderer$p_15++;
                    this.$WAWebVoipVideoWebCodecsRenderer$p_6++;
                    const p = Date.now();
                    if (p - this.$WAWebVoipVideoWebCodecsRenderer$p_16 >= k) {
                        o("WAWebVoipVideoRendererLogging").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            "[webcodec-decode] fed=",
                            " decoded=",
                            " last=",
                            "x",
                            " pending=",
                            ""
                        ])), S, this.$WAWebVoipVideoWebCodecsRenderer$p_15, this.$WAWebVoipVideoWebCodecsRenderer$p_7, this.$WAWebVoipVideoWebCodecsRenderer$p_8, this.$WAWebVoipVideoWebCodecsRenderer$p_9, this.$WAWebVoipVideoWebCodecsRenderer$p_6);
                        this.$WAWebVoipVideoWebCodecsRenderer$p_16 = p;
                    }
                    this.$WAWebVoipVideoWebCodecsRenderer$p_22();
                } catch (error) {
                    throw error instanceof Error && error.name === "DataError" ? new C(error) : error;
                }
                return;
            }
            t.prototype.renderFrame.call(this, {
                format,
                frameBuffer,
                height,
                isKeyFrame,
                mirror,
                orientation,
                timestamp,
                width
            });
        };
        a_prototype.$WAWebVoipVideoWebCodecsRenderer$p_21 = function(t, n) {
            let e = this.$WAWebVoipVideoWebCodecsRenderer$p_11.get(t);
            if (!e) {
                e = [];
                this.$WAWebVoipVideoWebCodecsRenderer$p_11.set(t, e);
            }
            e.push(n);
        };
        a_prototype.$WAWebVoipVideoWebCodecsRenderer$p_10 = function(t) {
            const n = this.$WAWebVoipVideoWebCodecsRenderer$p_11.get(t);
            const r = {
                orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
                mirror: false
            };
            if (!n) {
                return r;
            }
            const a = n.shift() ?? r;
            if (n.length === 0) {
                this.$WAWebVoipVideoWebCodecsRenderer$p_11.delete(t);
            }
            return a;
        };
        a_prototype.$WAWebVoipVideoWebCodecsRenderer$p_20 = function({ frameBuffer, isKeyFrame, timestampMicros }) {
            const a = {
                type: isKeyFrame ? "key" : "delta",
                timestamp: timestampMicros,
                data: frameBuffer,
                transfer: [
                    frameBuffer
                ]
            };
            const i = new EncodedVideoChunk(a);
            this.$WAWebVoipVideoWebCodecsRenderer$p_3?.decode(i);
        };
        a_prototype.$WAWebVoipVideoWebCodecsRenderer$p_22 = function() {
            if (this.$WAWebVoipVideoWebCodecsRenderer$p_6 >= E) {
                o("WAWebVoipVideoRendererLogging").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    "Watchdog: no output after ",
                    " frames, resetting decoder"
                ])), S, this.$WAWebVoipVideoWebCodecsRenderer$p_6);
                this.$WAWebVoipVideoWebCodecsRenderer$p_14();
                throw new C(r("err")(`${S}Decoder output stalled`));
            }
        };
        return a;
    })(o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer);
    D.$WAWebVoipVideoWebCodecsRenderer$p_13 = {
        codec: o("WAWebVoipWebCodecsEncoderState").WEBCODECS_H264_CODEC,
        optimizeForLatency: true
    };
    l.KeyFrameNeededError = C;
    l.setFatalErrorCallback = v;
    l.WAWebVoipVideoWebCodecsRenderer = D;
}, 98);