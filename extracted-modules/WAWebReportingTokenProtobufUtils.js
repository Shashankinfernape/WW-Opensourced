__d("WAWebReportingTokenProtobufUtils", [
    "WABinary",
    "WAProtoConst",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e & 7;
    }
    function s(e) {
        return e >>> 3;
    }
    function u(e) {
        const t = new (o("WABinary")).Binary;
        t.writeVarInt(e);
        return t.readByteArrayView();
    }
    function c(t, n, a) {
        const i = d(t, n, a);
        if (i.value >= 4294967296) {
            throw r("err")(`Invalid tag value, out of bound: ${i.value}`);
        }
        const wireType = e(i.value);
        let i_end = i.end;
        let c;
        if (wireType === o("WAProtoConst").ENC.VARINT) {
            c = m(t, i_end, a);
        } else if (wireType === o("WAProtoConst").ENC.BINARY) {
            const p = d(t, i_end, a);
            i_end = p.end;
            c = i_end + p.value;
        } else if (wireType === o("WAProtoConst").ENC.BIT64) {
            c = i_end + 8;
        } else if (wireType === o("WAProtoConst").ENC.BIT32) {
            c = i_end + 4;
        } else {
            throw r("err")(`Unsupported wire type ${wireType}`);
        }
        if (c > a) {
            throw r("err")("Protobuf field extends beyond the provided bytes");
        }
        return {
            bytes: t.subarray(n, c),
            end: c,
            fieldNumber: s(i.value),
            tagBytes: t.subarray(n, i.end),
            valueEnd: c,
            valueStart: i_end,
            wireType
        };
    }
    function d(e, t, n) {
        for(var end = m(e, t, n), a = 1, i = 0, l = t; l < end; l++){
            i += e[l] % 128 * a;
            if (!Number.isSafeInteger(i)) {
                throw r("err")("Protobuf varint exceeds the safe integer range");
            }
            a *= 128;
        }
        return {
            end,
            value: i
        };
    }
    function m(e, t, n) {
        for(let o = Math.min(t + 10, n), a = t; a < o; a++){
            if (a === t + 9 && e[a] > 1) {
                throw r("err")("Invalid protobuf varint");
            }
            if (e[a] < 128) {
                return a + 1;
            }
        }
        throw r("err")("Invalid protobuf varint");
    }
    l.getWireTypeFromTag = e;
    l.getFieldNumberFromTag = s;
    l.convertToVarInt = u;
    l.parseRawProtobufField = c;
}, 98);