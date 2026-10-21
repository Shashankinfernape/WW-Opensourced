__d("WAWebReportingTokenContent", [
    "WABinary",
    "WAProtoConst",
    "WAWebReportingTokenConfig",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenProtobufUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = new Map([
        [
            2,
            null
        ],
        [
            15,
            null
        ],
        [
            35,
            new Set([
                1,
                2,
                3,
                4,
                6,
                7,
                18
            ])
        ]
    ]);
    const s = new Map([
        [
            o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3,
            e
        ]
    ]);
    const u = Math.max(...Array.from(s.keys()));
    const c = function(t) {
        this.value = t;
        const e = o("WAWebReportingTokenProtobufUtils").convertToVarInt(t);
        this.size = e.length;
    };
    class d {
        constructor(e, t){
            this.valLengthSize = 0;
            var n = new (o("WABinary")).Binary(e);
            n.advance(t);
            var a = n.readVarInt(o("WABinary").parseInt64OrThrow);
            if (a < 0 || a >= 4294967296) {
                throw r("err")(`Invalid tag value, out of bound: ${a}`);
            }
            var i = o("WAWebReportingTokenProtobufUtils").getWireTypeFromTag(a);
            this.tag = new c(a);
            var l = 0;
            var s = new (o("WABinary")).Binary;
            s.writeVarInt(a);
            switch(i){
                case o("WAProtoConst").ENC.VARINT:
                    {
                        var u = n.readVarInt(o("WABinary").parseUint64OrThrow);
                        s.writeVarInt(u);
                        break;
                    }
                case o("WAProtoConst").ENC.BINARY:
                    {
                        var d = n.readVarInt(o("WABinary").parseUint64OrThrow);
                        var m = n.readByteArrayView(d);
                        l += o("WAWebReportingTokenProtobufUtils").convertToVarInt(d).length;
                        s.writeVarInt(d);
                        s.writeByteArray(m);
                        this.valLengthSize = l;
                        break;
                    }
                case o("WAProtoConst").ENC.BIT64:
                    {
                        var p = n.readByteArrayView(8);
                        s.writeByteArray(p);
                        break;
                    }
                case o("WAProtoConst").ENC.BIT32:
                    {
                        var _ = n.readByteArrayView(4);
                        s.writeByteArray(_);
                        break;
                    }
                default:
                    throw r("err")(`Unsupported wire type ${i}`);
            }
            this.bytes = s.readByteArrayView();
            this.start = t;
            this.end = t + this.bytes.length;
        }
        getFieldNumber() {
            return o("WAWebReportingTokenProtobufUtils").getFieldNumberFromTag(this.tag.value);
        }
        getWireType() {
            return o("WAWebReportingTokenProtobufUtils").getWireTypeFromTag(this.tag.value);
        }
        getTotalSize() {
            return this.bytes.length;
        }
        getValueStartIdx() {
            return this.start + this.tag.size + this.valLengthSize;
        }
        getValueEndIdx() {
            return this.end;
        }
        getBytes() {
            return this.bytes;
        }
    }
    class m {
        constructor(e, t, n){
            this.tag = e;
            this.partsLength = t;
            this.parts = n;
            this.partsLengthInBytes = o("WAWebReportingTokenProtobufUtils").convertToVarInt(this.partsLength);
        }
        getFieldNumber() {
            return o("WAWebReportingTokenProtobufUtils").getFieldNumberFromTag(this.tag.value);
        }
        getTotalSize() {
            return this.tag.size + this.partsLengthInBytes.length + this.parts.getTotalSize();
        }
        getBytes() {
            const e = new (o("WABinary")).Binary;
            e.writeVarInt(this.tag.value);
            e.writeVarInt(this.partsLength);
            for (const t of this.parts.fields){
                e.writeByteArray(t.getBytes());
            }
            return e.readByteArrayView();
        }
    }
    class p {
        constructor(){
            this.fields = [];
            this.totalSize = 0;
        }
        add(t) {
            this.fields.push(t);
            this.totalSize += t.getTotalSize();
        }
        getTotalSize() {
            return this.totalSize;
        }
    }
    class _ {
        constructor(e, t){
            this.protobufMessage = e;
            this.messageConfig = t;
        }
        extractProtobufParts({ config, end, pos, protobufMessage }) {
            const i = new p;
            if (config == null) {
                return i;
            }
            for(let l = pos; l < end;){
                const s = new d(protobufMessage, l);
                const u = config.getConfigForField(s.getFieldNumber());
                l += s.getTotalSize();
                if (u != null) {
                    if (u.isMessage === true || !u.isExtractWholeField()) {
                        if (s.getWireType() === o("WAProtoConst").ENC.BINARY) {
                            const c = this.extractProtobufParts({
                                config: u.isMessage === true ? this.messageConfig : u.subfields,
                                end: s.getValueEndIdx(),
                                pos: s.getValueStartIdx(),
                                protobufMessage
                            });
                            if (c.fields.length > 0) {
                                i.add(new m(s.tag, c.getTotalSize(), c));
                            }
                        }
                    } else {
                        i.add(s);
                    }
                }
            }
            i.fields.sort((e, t)=>e.getFieldNumber() - t.getFieldNumber());
            return i;
        }
        getReportingTokenContent() {
            const e = this.extractProtobufParts({
                config: this.messageConfig,
                end: this.protobufMessage.length,
                pos: 0,
                protobufMessage: this.protobufMessage
            });
            const e_fields = e.fields;
            const n = new (o("WABinary")).Binary;
            for (const r of e_fields){
                n.writeByteArray(r.getBytes());
            }
            return n.readByteArrayView();
        }
        getReportingTokenContentByExclusion(t) {
            const e = [];
            for(let n = 0, r = this.protobufMessage.length; n < r;){
                const a = o("WAWebReportingTokenProtobufUtils").parseRawProtobufField(this.protobufMessage, n, r);
                n = a.end;
                if (!t.has(a.fieldNumber)) {
                    e.push(a.bytes);
                    continue;
                }
                const i = t.get(a.fieldNumber);
                if (i != null) {
                    if (a.wireType !== o("WAProtoConst").ENC.BINARY) {
                        e.push(a.bytes);
                        continue;
                    }
                    const l = [];
                    let s = 0;
                    let u = false;
                    for(let c = a.valueStart; c < a.valueEnd;){
                        const d = o("WAWebReportingTokenProtobufUtils").parseRawProtobufField(this.protobufMessage, c, a.valueEnd);
                        c = d.end;
                        if (i.has(d.fieldNumber)) {
                            u = true;
                        } else {
                            l.push(d.bytes);
                            s += d.bytes.length;
                        }
                    }
                    if (!u) {
                        e.push(a.bytes);
                        continue;
                    }
                    const m = new (o("WABinary")).Binary;
                    m.writeByteArray(a.tagBytes);
                    m.writeVarInt(s);
                    for (const p of l){
                        m.writeByteArray(p);
                    }
                    e.push(m.readByteArrayView());
                }
            }
            const _ = new (o("WABinary")).Binary;
            for (const f of e){
                _.writeByteArray(f);
            }
            return _.readByteArrayView();
        }
    }
    function f(e, t) {
        const n = new _(e, o("WAWebReportingTokenConfig").getReportingTokenConfig(t));
        const r = h(t);
        if (r != null) {
            return n.getReportingTokenContentByExclusion(r);
        }
        return n.getReportingTokenContent();
    }
    function g() {
        return u;
    }
    function h(e) {
        let t = null;
        let n = null;
        for (const [o, a] of s){
            if (o <= e && (t == null || o > t)) {
                t = o;
                n = a;
            }
        }
        return n;
    }
    l.ReportingTokenContentCalculator = _;
    l.calculateReportingTokenContent = f;
    l.getLatestReportingTokenExclusionVersion = g;
}, 98);