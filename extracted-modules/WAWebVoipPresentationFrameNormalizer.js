__d("WAWebVoipPresentationFrameNormalizer", [
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoFrameCtor"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 3;
    let s = null;
    let u = null;
    let c = null;
    let d = 0;
    function m({ frame, frameMetadata, isScreenShare, normalizationEnabled, requestedHeight, requestedWidth }) {
        if (!normalizationEnabled || frameMetadata == null) {
            return S(frame, "disabled", null, 0, null);
        }
        const fallbackOrientation = o("WAWebVoipMediaEnums").Orientation.cast(frameMetadata.fallbackOrientation) ?? o("WAWebVoipMediaEnums").Orientation.Normal;
        const m = g({
            fallbackOrientation,
            frameHeight: frame.displayHeight,
            frameRotation: frameMetadata.frameRotation,
            frameWidth: frame.displayWidth,
            isScreenShare,
            requestedHeight,
            requestedWidth,
            screenType: frameMetadata.screenType,
            sensorOffsetInitialized: frameMetadata.sensorOffsetInitialized
        });
        const { reason, transform } = m;
        if (transform == null) {
            return S(frame, "ineligible", null, 0, reason);
        }
        if (c != null) {
            return S(frame, "failed", transform, 0, c);
        }
        const f = globalThis.performance.now();
        try {
            const h = R(frame, transform);
            const y = globalThis.performance.now() - f;
            if (h == null) {
                const C = "presentation frame canvas unavailable";
                k(C);
                return S(frame, "failed", transform, y, C);
            }
            if (!I(h)) {
                const v = `unsupported presentation frame format: ${h.format ?? "null"}`;
                h.close();
                k(v);
                return S(frame, "failed", transform, y, v);
            }
            d = 0;
            return S(h, "applied", transform, y, null);
        } catch (error) {
            const L = String(error);
            E(L);
            return S(frame, "failed", transform, globalThis.performance.now() - f, L);
        }
    }
    function p() {
        s = null;
        u = null;
        c = null;
        d = 0;
    }
    function _(e, t, { error, frame, status, transform, transformDurationMs }) {
        const signature = [
            status,
            t.fallbackOrientation,
            t.frameRotation,
            t.screenAngle,
            t.screenType,
            t.sensorOffsetInitialized,
            e.displayWidth,
            e.displayHeight,
            transform?.counterRotationDegrees,
            frame.displayWidth,
            frame.displayHeight,
            frame.format
        ].join("|");
        const f = `voip: [orient_transform_v1] status=${status} frameRot=${String(t.frameRotation ?? "na")} fallback=${t.fallbackOrientation} screenAngle=${String(t.screenAngle ?? "na")} screenType=${t.screenType ?? "na"} sensorReady=${t.sensorOffsetInitialized ? 1 : 0} source=${e.displayWidth}x${e.displayHeight}/${e.format ?? "na"} counterRotation=${String(transform?.counterRotationDegrees ?? "na")} output=${frame.displayWidth}x${frame.displayHeight}/${frame.format ?? "na"} durationMs=${transformDurationMs.toFixed(2)} error=${error == null ? "na" : String(error)}`;
        return {
            message: f,
            signature
        };
    }
    function f(e) {
        return g(e).transform;
    }
    function g({ fallbackOrientation, frameHeight, frameRotation, frameWidth, isScreenShare, requestedHeight, requestedWidth, screenType, sensorOffsetInitialized }) {
        if (isScreenShare) {
            return {
                reason: "screen-share",
                transform: null
            };
        }
        if (!sensorOffsetInitialized) {
            return {
                reason: "sensor-not-ready",
                transform: null
            };
        }
        if (!y(frameWidth, frameHeight)) {
            return {
                reason: "frame-dims-nonpositive",
                transform: null
            };
        }
        if (!y(requestedWidth, requestedHeight)) {
            return {
                reason: "requested-dims-nonpositive",
                transform: null
            };
        }
        if (frameRotation != null && frameRotation !== 0) {
            return {
                reason: "frame-rotation-nonzero",
                transform: null
            };
        }
        if (!C(frameWidth, frameHeight, screenType)) {
            return {
                reason: "frame-screen-orientation-mismatch",
                transform: null
            };
        }
        const counterRotationDegrees = b(fallbackOrientation);
        if (counterRotationDegrees == null) {
            return {
                reason: "fallback-not-rotated",
                transform: null
            };
        }
        const d = counterRotationDegrees !== 180;
        const outputWidth = d ? frameHeight : frameWidth;
        const outputHeight = d ? frameWidth : frameHeight;
        if (v(outputWidth, outputHeight, requestedWidth, requestedHeight)) {
            return {
                reason: "eligible",
                transform: {
                    counterRotationDegrees,
                    outputHeight,
                    outputWidth
                }
            };
        }
        return {
            reason: "output-requested-orientation-mismatch",
            transform: null
        };
    }
    function h({ context, frame, transform }) {
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, transform.outputWidth, transform.outputHeight);
        e: {
            if (transform.counterRotationDegrees === 90) {
                context.translate(transform.outputWidth, 0);
                context.rotate(Math.PI / 2);
                break e;
            }
            if (transform.counterRotationDegrees === 180) {
                context.translate(transform.outputWidth, transform.outputHeight);
                context.rotate(Math.PI);
                break e;
            }
            if (transform.counterRotationDegrees === 270) {
                context.translate(0, transform.outputHeight);
                context.rotate(-Math.PI / 2);
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${transform.counterRotationDegrees}`);
        }
        context.drawImage(frame, 0, 0, frame.displayWidth, frame.displayHeight);
        context.setTransform(1, 0, 0, 1, 0, 0);
    }
    function y(e, t) {
        return e > 0 && t > 0;
    }
    function C(frameWidth, frameHeight, screenType) {
        if (screenType?.startsWith("portrait") === true) {
            return frameHeight > frameWidth;
        }
        if (screenType?.startsWith("landscape") === true) {
            return frameWidth > frameHeight;
        }
        return false;
    }
    function b(fallbackOrientation) {
        if (fallbackOrientation === o("WAWebVoipMediaEnums").Orientation.Rotate90) {
            return 270;
        }
        if (fallbackOrientation === o("WAWebVoipMediaEnums").Orientation.Rotate180) {
            return 180;
        }
        if (fallbackOrientation === o("WAWebVoipMediaEnums").Orientation.Rotate270) {
            return 90;
        }
        return null;
    }
    function v(outputWidth, outputHeight, requestedWidth, requestedHeight) {
        return outputWidth > outputHeight && requestedWidth > requestedHeight || outputHeight > outputWidth && requestedHeight > requestedWidth;
    }
    function S(frame, t, transform, transformDurationMs, error) {
        return {
            error,
            frame,
            status: t,
            transform,
            transformDurationMs
        };
    }
    function R(frame, transform) {
        if (!L(transform.outputWidth, transform.outputHeight)) {
            return null;
        }
        const o = s;
        const a = u;
        const i = r("WAWebVoipVideoFrameCtor")();
        if (o == null || a == null || i == null) {
            return null;
        }
        h({
            context: a,
            frame,
            transform
        });
        return new i(o, {
            timestamp: frame.timestamp,
            duration: frame.duration ?? undefined
        });
    }
    function L(outputWidth, outputHeight) {
        if (s != null && u != null && s.width === outputWidth && s.height === outputHeight) {
            return true;
        }
        const self_OffscreenCanvas = self.OffscreenCanvas;
        if (typeof self_OffscreenCanvas !== "function") {
            return false;
        }
        const r = new self_OffscreenCanvas(outputWidth, outputHeight);
        s = r;
        u = r.getContext("2d");
        return u != null;
    }
    function E(t) {
        s = null;
        u = null;
        d++;
        if (d >= e) {
            c = t;
        }
    }
    function k(e) {
        s = null;
        u = null;
        c = e;
        d = 0;
    }
    function I(e) {
        return o("WAWebVoipMediaEnums").formatEnumFromVideoFrameFormat(e.format) !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN || e.format === "BGRA";
    }
    l.preparePresentationFrame = m;
    l.resetPresentationFrameNormalizer = p;
    l.getPresentationFrameTransformDiagnostics = _;
    l.resolvePresentationFrameTransform = f;
    l.evaluatePresentationFrameTransform = g;
    l.drawPresentationFrameTransform = h;
}, 98);