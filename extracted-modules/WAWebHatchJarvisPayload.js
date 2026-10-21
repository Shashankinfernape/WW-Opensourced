__d("WAWebHatchJarvisPayload", [
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureMediaDecoder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "XMSGGenAIJarvisPayload";
    const s = "1";
    const u = "delta.presentation";
    const c = "citation";
    function d(e) {
        return ((e)=>(typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "XMSGGenAIJarvisPayload")(e?.passthrough_payload);
    }
    function m({ passthrough_payload }) {
        if (passthrough_payload == null || passthrough_payload.__typename !== e || passthrough_payload.envelope_schema_version !== s) {
            return null;
        }
        return f(passthrough_payload.jarvis_envelope);
    }
    const p = new WeakMap;
    function _(e) {
        if (p.has(e)) {
            return p.get(e);
        }
        const t = m(e);
        p.set(e, t);
        return t;
    }
    function f(jarvis_envelope) {
        let r;
        try {
            r = JSON.parse(jarvis_envelope);
        } catch (e) {
            return null;
        }
        const a = o("WAWebHatchJsonReaders").readObject(r, "stream_event_row");
        if (a == null) {
            return null;
        }
        const i = o("WAWebHatchJsonReaders").readString(a, "event_name") === u ? o("WAWebHatchJsonReaders").readObject(a, "payload") : null;
        const presentation = g(i);
        const displayText = [
            o("WAWebHatchJsonReaders").readString(i, "fallback_text"),
            o("WAWebHatchJsonReaders").readString(a, "display_text"),
            o("WAWebHatchJsonReaders").readString(i, "display_text")
        ].find((e)=>e != null && e !== "") ?? "";
        if (displayText === "" && presentation == null) {
            return null;
        }
        const displayTextReady = o("WAWebHatchJsonReaders").readBool(a, "display_text_ready") ?? true;
        return {
            citations: y(o("WAWebHatchJsonReaders").readArray(a, "resources")),
            displayText,
            displayTextReady,
            fileMetadata: C(o("WAWebHatchJsonReaders").readObject(r, "file_metadata")),
            inlineWidgets: presentation == null && displayTextReady ? h(o("WAWebHatchJsonReaders").readArray(r, "inline_widgets")) : [],
            messageId: o("WAWebHatchJsonReaders").readString(a, "message_id"),
            presentation
        };
    }
    function g(e) {
        const n = o("WAWebHatchJsonReaders").readNonEmptyString(e, "kind");
        if (n == null) {
            return null;
        }
        return {
            data: o("WAWebHatchJsonReaders").readObject(e, "data") ?? {},
            id: o("WAWebHatchJsonReaders").readNonEmptyString(e, "id"),
            kind: n
        };
    }
    function h(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        for (const n of e){
            const r = o("WAWebHatchJsonReaders").isObject(n) ? g(n) : null;
            if (r != null) {
                t.push(r);
            }
        }
        return t;
    }
    function y(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        for (const n of e){
            const r = o("WAWebHatchJsonReaders").readString(n, "label");
            const uri = o("WAWebHatchJsonReaders").readString(n, "uri");
            if (!(o("WAWebHatchJsonReaders").readString(n, "kind") !== c || r == null || uri == null)) {
                const i = v(o("WAWebHatchJsonReaders").readString(n, "metadata"));
                t.push({
                    domain: o("WAWebHatchJsonReaders").readString(i, "domain"),
                    faviconUrl: o("WAWebHatchJsonReaders").readString(i, "favicon_url"),
                    label: r,
                    uri
                });
            }
        }
        return t;
    }
    function C(e) {
        const t = new Map;
        if (e == null || typeof e !== "object") {
            return t;
        }
        for (const n of Object.keys(e)){
            const r = o("WAWebHatchJsonReaders").readObject(e, n);
            const a = o("WAWebHatchJsonReaders").readNonEmptyString(r, "url");
            if (a != null) {
                t.set(n, {
                    encryptedMedia: b(o("WAWebHatchJsonReaders").readObject(r, "encrypted_media")),
                    filename: o("WAWebHatchJsonReaders").readNonEmptyString(r, "filename"),
                    mimeType: o("WAWebHatchJsonReaders").readNonEmptyString(r, "mime_type"),
                    sizeBytes: o("WAWebHatchJsonReaders").readInteger(r, "size_bytes"),
                    thumbnailJpegB64: o("WAWebHatchJsonReaders").readNonEmptyString(r, "thumbnail_jpeg_b64"),
                    url: a
                });
            }
        }
        return t;
    }
    function b(e) {
        const t = o("WAWebHatchSecureMediaDecoder").hasMmgTransport(e) ? o("WAWebHatchSecureMediaDecoder").decodeMmgMediaKeys(e) : null;
        const mimeType = o("WAWebHatchJsonReaders").readNonEmptyString(e, "mime_type");
        const r = o("WAWebHatchJsonReaders").readNonEmptyString(e, "media_type");
        const fileLength = o("WAWebHatchJsonReaders").readInteger(e, "file_length");
        const mediaKeyTimestampMs = o("WAWebHatchJsonReaders").readInteger(e, "media_key_timestamp_ms");
        if (t == null || mimeType == null || r == null || fileLength == null || mediaKeyTimestampMs == null) {
            return null;
        }
        return babelHelpers.extends({}, t, {
            fileLength,
            height: o("WAWebHatchJsonReaders").readInteger(e, "height"),
            mediaKeyTimestampMs,
            mediaType: r,
            mimeType,
            seconds: o("WAWebHatchJsonReaders").readInteger(e, "seconds"),
            width: o("WAWebHatchJsonReaders").readInteger(e, "width")
        });
    }
    function v(e) {
        if (e == null) {
            return null;
        }
        try {
            const t = JSON.parse(e);
            if (o("WAWebHatchJsonReaders").isObject(t)) {
                return t;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    l.hasHatchJarvisPayload = d;
    l.parseHatchJarvisPayload = m;
    l.getHatchJarvisPayload = _;
}, 98);