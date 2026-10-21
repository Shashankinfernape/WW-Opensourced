__d("WAWebReportingTokenConfig", [
    "WAWebProtobufsReporting.pb",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = atob(e);
        for(var n = t.length, r = new Uint8Array(new ArrayBuffer(n)), o = 0; o < n; o++){
            r[o] = t.charCodeAt(o);
        }
        return r;
    }
    const s = "CgQIARIACjQIAxIwKgQIAhIAKgQIAxIAKgQICBIAKgQICxIAKhAIERIMKgQIFRIAKgQIFhIAKgQIGRIACioIBBImCAIqBggBEgIIAioGCBASAggCKhIIERIOCAIqBAgVEgAqBAgWEgAKOggFEjYIAioGCAMSAggCKgYIBBICCAIqBggFEgIIAioGCBASAggCKhIIERIOCAIqBAgVEgAqBAgWEgAKIggGEh4qBAgBEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgeEgAKLggHEioqBAgCEgAqBAgHEgAqBAgKEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgUEgAKLggIEioqBAgCEgAqBAgHEgAqBAgJEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgVEgAKNAgJEjAqBAgCEgAqBAgGEgAqBAgHEgAqBAgNEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgUEgAKKAgMEiQIAioGCAESAggCKgYIAhICCAIqCAgOEgQIAiABKgYIDxICCAIKKggSEiYIAioGCAYSAggCKgYIEBICCAIqEggREg4IAioECBUSACoECBYSAApgCBoSXCoECAQSACoECAUSACoECAgSACoECA0SACoQCBESDCoECBUSACoECBYSACowCBoSLAgCKgQIAhIAKgQIBxIAKgQICRIAKhAIERIMKgQIFRIAKgQIFhIAKgQIFRIACkIIHBI+CAIqBggBEgIIAioGCAISAggCKgYIBBICCAIqBggFEgIIAioGCAYSAggCKhIIBxIOCAIqBAgVEgAqBAgWEgAKDAglEggqBggBEgIgAQpSCDESTggCKgYIAhICCAIqFggDEhIIAioGCAESAggCKgYIAhICCAIqEggFEg4IAioECBUSACoECBYSACoWCAgSEggCKgYIARICCAIqBggCEgIIAgoMCDUSCCoGCAESAiABCg4INxIKCAIqBggBEgIgAQoOCDoSCggCKgYIARICIAEKDgg7EgoIAioGCAESAiABClIIPBJOCAIqBggCEgIIAioWCAMSEggCKgYIARICCAIqBggCEgIIAioSCAUSDggCKgQIFRIAKgQIFhIAKhYICBISCAIqBggBEgIIAioGCAISAggCClIIQBJOCAIqBggCEgIIAioWCAMSEggCKgYIARICCAIqBggCEgIIAioSCAUSDggCKgQIFRIAKgQIFhIAKhYICBISCAIqBggBEgIIAioGCAISAggCCjYIQhIyCAIqBAgCEgAqBAgGEgAqBAgHEgAqBAgNEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgUEgAKDghKEgoIAioGCAESAiABCg4IVxIKCAIqBggBEgIgAQoyCFgSLggCKgYIARICCAIqDggCEgoIAioGCAESAggCKhIIAxIOCAIqBAgVEgAqBAgWEgAKDghcEgoIAioGCAESAiABCg4IXRIKCAIqBggBEgIgAQoOCGcSCggCKgYIARICIAEKUghvEk4IAioGCAISAggCKhYIAxISCAIqBggBEgIIAioGCAISAggCKhIIBRIOCAIqBAgVEgAqBAgWEgAqFggIEhIIAioGCAESAggCKgYIAhICCAIKMghzEi4IAioGCAESAggCKg4IAhIKCAIqBggBEgIIAioSCAMSDggCKgQIFRIAKgQIFhIAClIIdxJOCAIqBggCEgIIAioWCAMSEggCKgYIARICCAIqBggCEgIIAioSCAUSDggCKgQIFRIAKgQIFhIAKhYICBISCAIqBggBEgIIAioGCAISAggCCh4IeRIaCAIqFggCEhIIAioGCAESAggCKgYIAhICCAIKBgh6EgIIAgoXCIEBEhIqEAgFEgwqBAgVEgAqBAgWEgAKDwiGARIKCAIqBggBEgIgAQ==";
    class u {
        constructor({ fieldNumber, isMessage = false, subfields }){
            this.fieldNumber = fieldNumber;
            this.isMessage = isMessage;
            this.subfields = subfields;
        }
        isExtractWholeField() {
            return this.subfields == null || this.subfields.fieldsToFrank.size === 0;
        }
    }
    class c {
        constructor(e){
            var t = this;
            this.fieldsToFrank = new Map;
            e?.forEach(function(e) {
                t.fieldsToFrank.set(e.fieldNumber, e);
            });
        }
        getConfigForField(t) {
            return this.fieldsToFrank.get(t) || null;
        }
    }
    function d(e, fieldNumber, { minVersion, maxVersion = Infinity, subfield, isMessage }) {
        if (e < minVersion || e > maxVersion) {
            return null;
        }
        if (subfield == null) {
            return new u({
                fieldNumber,
                isMessage
            });
        }
        const s = [];
        subfield.forEach((t, n)=>{
            const r = d(e, n, t);
            if (r != null) {
                s.push(r);
            }
        });
        return new u({
            fieldNumber,
            isMessage,
            subfields: new c(s)
        });
    }
    const m = new Map;
    function p(t) {
        const r = m.get(t);
        if (r != null) {
            return r;
        }
        const a = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsReporting.pb").ConfigSpec, e(s));
        const i = [];
        a.field?.forEach(function(e, n) {
            const r = d(t, n, e);
            if (r != null) {
                i.push(r);
            }
        });
        const l = new c(i);
        m.set(t, l);
        return l;
    }
    l.getBytesFromBase64 = e;
    l.REPORTING_TOKEN_CONFIG_BASE64 = s;
    l.FieldToExtract = u;
    l.ReportingTokenConfig = c;
    l.getReportingTokenConfig = p;
}, 98);