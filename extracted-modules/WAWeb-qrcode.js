__d("WAWeb-qrcode", [], function(t, n, r, o, a, i) {
    let e;
    (function() {
        function t(e) {
            this.mode = r.MODE_8BIT_BYTE;
            this.data = e;
            this.parsedData = [];
            if (e instanceof ArrayBuffer) {
                this.parsedData = new Int8Array(e);
                return;
            }
            for(let t = 0, n = this.data.length; t < n; t++){
                const o = [];
                const a = this.data.charCodeAt(t);
                if (a > 65536) {
                    o[0] = 240 | (a & 1835008) >>> 18;
                    o[1] = 128 | (a & 258048) >>> 12;
                    o[2] = 128 | (a & 4032) >>> 6;
                    o[3] = 128 | a & 63;
                } else if (a > 2048) {
                    o[0] = 224 | (a & 61440) >>> 12;
                    o[1] = 128 | (a & 4032) >>> 6;
                    o[2] = 128 | a & 63;
                } else if (a > 128) {
                    o[0] = 192 | (a & 1984) >>> 6;
                    o[1] = 128 | a & 63;
                } else {
                    o[0] = a;
                }
                this.parsedData.push(o);
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData);
            if (this.parsedData.length != this.data.length) {
                this.parsedData.unshift(191);
                this.parsedData.unshift(187);
                this.parsedData.unshift(239);
            }
        }
        t.prototype = {
            getLength: function(e) {
                return this.parsedData.length;
            },
            write: function(e) {
                for(let t = 0, n = this.parsedData.length; t < n; t++){
                    e.put(this.parsedData[t], 8);
                }
            }
        };
        function n(e, t) {
            this.typeNumber = e;
            this.errorCorrectLevel = t;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = [];
        }
        n.prototype = {
            addData: function(e) {
                const n = new t(e);
                this.dataList.push(n);
                this.dataCache = null;
            },
            isDark: function(e, t) {
                if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) {
                    throw new Error(`${e},${t}`);
                }
                return this.modules[e][t];
            },
            getModuleCount: function() {
                return this.moduleCount;
            },
            make: function() {
                this.makeImpl(false, this.getBestMaskPattern());
            },
            makeImpl: function(e, t) {
                this.moduleCount = this.typeNumber * 4 + 17;
                this.modules = new Array(this.moduleCount);
                for(let r = 0; r < this.moduleCount; r++){
                    this.modules[r] = new Array(this.moduleCount);
                    for(let o = 0; o < this.moduleCount; o++){
                        this.modules[r][o] = null;
                    }
                }
                this.setupPositionProbePattern(0, 0);
                this.setupPositionProbePattern(this.moduleCount - 7, 0);
                this.setupPositionProbePattern(0, this.moduleCount - 7);
                this.setupPositionAdjustPattern();
                this.setupTimingPattern();
                this.setupTypeInfo(e, t);
                if (this.typeNumber >= 7) {
                    this.setupTypeNumber(e);
                }
                if (this.dataCache == null) {
                    this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
                }
                this.mapData(this.dataCache, t);
            },
            setupPositionProbePattern: function(e, t) {
                for(let n = -1; n <= 7; n++){
                    if (!(e + n <= -1 || this.moduleCount <= e + n)) {
                        for(let r = -1; r <= 7; r++){
                            if (!(t + r <= -1 || this.moduleCount <= t + r)) {
                                if (n >= 0 && n <= 6 && (r == 0 || r == 6) || r >= 0 && r <= 6 && (n == 0 || n == 6) || n >= 2 && n <= 4 && r >= 2 && r <= 4) {
                                    this.modules[e + n][t + r] = true;
                                } else {
                                    this.modules[e + n][t + r] = false;
                                }
                            }
                        }
                    }
                }
            },
            getBestMaskPattern: function() {
                let e = 0;
                let t = 0;
                for(let n = 0; n < 8; n++){
                    this.makeImpl(true, n);
                    const r = i.getLostPoint(this);
                    if (n == 0 || e > r) {
                        e = r;
                        t = n;
                    }
                }
                return t;
            },
            createMovieClip: function(e, t, n) {
                const r = e.createEmptyMovieClip(t, n);
                const o = 1;
                this.make();
                for(let a = 0; a < this.modules.length; a++){
                    const i = a * o;
                    for(let l = 0; l < this.modules[a].length; l++){
                        const s = l * o;
                        const u = this.modules[a][l];
                        if (u) {
                            r.beginFill(0, 100);
                            r.moveTo(s, i);
                            r.lineTo(s + o, i);
                            r.lineTo(s + o, i + o);
                            r.lineTo(s, i + o);
                            r.endFill();
                        }
                    }
                }
                return r;
            },
            setupTimingPattern: function() {
                for(let e = 8; e < this.moduleCount - 8; e++){
                    if (this.modules[e][6] == null) {
                        this.modules[e][6] = e % 2 == 0;
                    }
                }
                for(let t = 8; t < this.moduleCount - 8; t++){
                    if (this.modules[6][t] == null) {
                        this.modules[6][t] = t % 2 == 0;
                    }
                }
            },
            setupPositionAdjustPattern: function() {
                for(let e = i.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++){
                    for(let n = 0; n < e.length; n++){
                        const r = e[t];
                        const o = e[n];
                        if (this.modules[r][o] == null) {
                            for(let a = -2; a <= 2; a++){
                                for(let l = -2; l <= 2; l++){
                                    if (a == -2 || a == 2 || l == -2 || l == 2 || a == 0 && l == 0) {
                                        this.modules[r + a][o + l] = true;
                                    } else {
                                        this.modules[r + a][o + l] = false;
                                    }
                                }
                            }
                        }
                    }
                }
            },
            setupTypeNumber: function(e) {
                const t = i.getBCHTypeNumber(this.typeNumber);
                for(var n = 0; n < 18; n++){
                    var r = !e && (t >> n & 1) == 1;
                    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r;
                }
                for(var n = 0; n < 18; n++){
                    var r = !e && (t >> n & 1) == 1;
                    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r;
                }
            },
            setupTypeInfo: function(e, t) {
                const n = this.errorCorrectLevel << 3 | t;
                const r = i.getBCHTypeInfo(n);
                for(var o = 0; o < 15; o++){
                    var a = !e && (r >> o & 1) == 1;
                    if (o < 6) {
                        this.modules[o][8] = a;
                    } else if (o < 8) {
                        this.modules[o + 1][8] = a;
                    } else {
                        this.modules[this.moduleCount - 15 + o][8] = a;
                    }
                }
                for(var o = 0; o < 15; o++){
                    var a = !e && (r >> o & 1) == 1;
                    if (o < 8) {
                        this.modules[8][this.moduleCount - o - 1] = a;
                    } else if (o < 9) {
                        this.modules[8][15 - o - 1 + 1] = a;
                    } else {
                        this.modules[8][15 - o - 1] = a;
                    }
                }
                this.modules[this.moduleCount - 8][8] = !e;
            },
            mapData: function(e, t) {
                let n = -1;
                let r = this.moduleCount - 1;
                let o = 7;
                let a = 0;
                for(let l = this.moduleCount - 1; l > 0; l -= 2){
                    for(l == 6 && l--;;){
                        for(let s = 0; s < 2; s++){
                            if (this.modules[r][l - s] == null) {
                                let u = false;
                                if (a < e.length) {
                                    u = (e[a] >>> o & 1) == 1;
                                }
                                const c = i.getMask(t, r, l - s);
                                if (c) {
                                    u = !u;
                                }
                                this.modules[r][l - s] = u;
                                o--;
                                if (o == -1) {
                                    a++;
                                    o = 7;
                                }
                            }
                        }
                        r += n;
                        if (r < 0 || this.moduleCount <= r) {
                            r -= n;
                            n = -n;
                            break;
                        }
                    }
                }
            }
        };
        n.PAD0 = 236;
        n.PAD1 = 17;
        n.createData = function(e, t, r) {
            const o = c.getRSBlocks(e, t);
            const a = new d;
            for(var l = 0; l < r.length; l++){
                const s = r[l];
                a.put(s.mode, 4);
                a.put(s.getLength(), i.getLengthInBits(s.mode, e));
                s.write(a);
            }
            let u = 0;
            for(var l = 0; l < o.length; l++){
                u += o[l].dataCount;
            }
            if (a.getLengthInBits() > u * 8) {
                throw new Error(`code length overflow. (${a.getLengthInBits()}>${u * 8})`);
            }
            for(a.getLengthInBits() + 4 <= u * 8 && a.put(0, 4); a.getLengthInBits() % 8 != 0;){
                a.putBit(false);
            }
            while(!(a.getLengthInBits() >= u * 8 || (a.put(n.PAD0, 8), a.getLengthInBits() >= u * 8))){
                a.put(n.PAD1, 8);
            }
            return n.createBytes(a, o);
        };
        n.createBytes = function(e, t) {
            let n = 0;
            let r = 0;
            let o = 0;
            const a = new Array(t.length);
            const l = new Array(t.length);
            for(var s = 0; s < t.length; s++){
                const c = t[s].dataCount;
                const d = t[s].totalCount - c;
                r = Math.max(r, c);
                o = Math.max(o, d);
                a[s] = new Array(c);
                for(var m = 0; m < a[s].length; m++){
                    a[s][m] = 255 & e.buffer[m + n];
                }
                n += c;
                const p = i.getErrorCorrectPolynomial(d);
                const _ = new u(a[s], p.getLength() - 1);
                const f = _.mod(p);
                l[s] = new Array(p.getLength() - 1);
                for(var m = 0; m < l[s].length; m++){
                    const g = m + f.getLength() - l[s].length;
                    l[s][m] = g >= 0 ? f.get(g) : 0;
                }
            }
            let h = 0;
            for(var m = 0; m < t.length; m++){
                h += t[m].totalCount;
            }
            const y = new Array(h);
            let C = 0;
            for(var m = 0; m < r; m++){
                for(var s = 0; s < t.length; s++){
                    if (m < a[s].length) {
                        y[C++] = a[s][m];
                    }
                }
            }
            for(var m = 0; m < o; m++){
                for(var s = 0; s < t.length; s++){
                    if (m < l[s].length) {
                        y[C++] = l[s][m];
                    }
                }
            }
            return y;
        };
        var r = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        };
        const o = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        };
        const a = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        var i = {
            PATTERN_POSITION_TABLE: [
                [],
                [
                    6,
                    18
                ],
                [
                    6,
                    22
                ],
                [
                    6,
                    26
                ],
                [
                    6,
                    30
                ],
                [
                    6,
                    34
                ],
                [
                    6,
                    22,
                    38
                ],
                [
                    6,
                    24,
                    42
                ],
                [
                    6,
                    26,
                    46
                ],
                [
                    6,
                    28,
                    50
                ],
                [
                    6,
                    30,
                    54
                ],
                [
                    6,
                    32,
                    58
                ],
                [
                    6,
                    34,
                    62
                ],
                [
                    6,
                    26,
                    46,
                    66
                ],
                [
                    6,
                    26,
                    48,
                    70
                ],
                [
                    6,
                    26,
                    50,
                    74
                ],
                [
                    6,
                    30,
                    54,
                    78
                ],
                [
                    6,
                    30,
                    56,
                    82
                ],
                [
                    6,
                    30,
                    58,
                    86
                ],
                [
                    6,
                    34,
                    62,
                    90
                ],
                [
                    6,
                    28,
                    50,
                    72,
                    94
                ],
                [
                    6,
                    26,
                    50,
                    74,
                    98
                ],
                [
                    6,
                    30,
                    54,
                    78,
                    102
                ],
                [
                    6,
                    28,
                    54,
                    80,
                    106
                ],
                [
                    6,
                    32,
                    58,
                    84,
                    110
                ],
                [
                    6,
                    30,
                    58,
                    86,
                    114
                ],
                [
                    6,
                    34,
                    62,
                    90,
                    118
                ],
                [
                    6,
                    26,
                    50,
                    74,
                    98,
                    122
                ],
                [
                    6,
                    30,
                    54,
                    78,
                    102,
                    126
                ],
                [
                    6,
                    26,
                    52,
                    78,
                    104,
                    130
                ],
                [
                    6,
                    30,
                    56,
                    82,
                    108,
                    134
                ],
                [
                    6,
                    34,
                    60,
                    86,
                    112,
                    138
                ],
                [
                    6,
                    30,
                    58,
                    86,
                    114,
                    142
                ],
                [
                    6,
                    34,
                    62,
                    90,
                    118,
                    146
                ],
                [
                    6,
                    30,
                    54,
                    78,
                    102,
                    126,
                    150
                ],
                [
                    6,
                    24,
                    50,
                    76,
                    102,
                    128,
                    154
                ],
                [
                    6,
                    28,
                    54,
                    80,
                    106,
                    132,
                    158
                ],
                [
                    6,
                    32,
                    58,
                    84,
                    110,
                    136,
                    162
                ],
                [
                    6,
                    26,
                    54,
                    82,
                    110,
                    138,
                    166
                ],
                [
                    6,
                    30,
                    58,
                    86,
                    114,
                    142,
                    170
                ]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(e) {
                for(var t = e << 10; i.getBCHDigit(t) - i.getBCHDigit(i.G15) >= 0;){
                    t ^= i.G15 << i.getBCHDigit(t) - i.getBCHDigit(i.G15);
                }
                return (e << 10 | t) ^ i.G15_MASK;
            },
            getBCHTypeNumber: function(e) {
                for(var t = e << 12; i.getBCHDigit(t) - i.getBCHDigit(i.G18) >= 0;){
                    t ^= i.G18 << i.getBCHDigit(t) - i.getBCHDigit(i.G18);
                }
                return e << 12 | t;
            },
            getBCHDigit: function(e) {
                let t = 0;
                while(e != 0){
                    t++;
                    e >>>= 1;
                }
                return t;
            },
            getPatternPosition: function(e) {
                return i.PATTERN_POSITION_TABLE[e - 1];
            },
            getMask: function(e, t, n) {
                switch(e){
                    case a.PATTERN000:
                        return (t + n) % 2 == 0;
                    case a.PATTERN001:
                        return t % 2 == 0;
                    case a.PATTERN010:
                        return n % 3 == 0;
                    case a.PATTERN011:
                        return (t + n) % 3 == 0;
                    case a.PATTERN100:
                        return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                    case a.PATTERN101:
                        return t * n % 2 + t * n % 3 == 0;
                    case a.PATTERN110:
                        return (t * n % 2 + t * n % 3) % 2 == 0;
                    case a.PATTERN111:
                        return (t * n % 3 + (t + n) % 2) % 2 == 0;
                    default:
                        throw new Error(`bad maskPattern:${e}`);
                }
            },
            getErrorCorrectPolynomial: function(e) {
                let t = new u([
                    1
                ], 0);
                for(let n = 0; n < e; n++){
                    t = t.multiply(new u([
                        1,
                        l.gexp(n)
                    ], 0));
                }
                return t;
            },
            getLengthInBits: function(e, t) {
                if (t >= 1 && t < 10) {
                    switch(e){
                        case r.MODE_NUMBER:
                            return 10;
                        case r.MODE_ALPHA_NUM:
                            return 9;
                        case r.MODE_8BIT_BYTE:
                            return 8;
                        case r.MODE_KANJI:
                            return 8;
                        default:
                            throw new Error(`mode:${e}`);
                    }
                } else if (t < 27) {
                    switch(e){
                        case r.MODE_NUMBER:
                            return 12;
                        case r.MODE_ALPHA_NUM:
                            return 11;
                        case r.MODE_8BIT_BYTE:
                            return 16;
                        case r.MODE_KANJI:
                            return 10;
                        default:
                            throw new Error(`mode:${e}`);
                    }
                } else if (t < 41) {
                    switch(e){
                        case r.MODE_NUMBER:
                            return 14;
                        case r.MODE_ALPHA_NUM:
                            return 13;
                        case r.MODE_8BIT_BYTE:
                            return 16;
                        case r.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error(`mode:${e}`);
                    }
                } else {
                    throw new Error(`type:${t}`);
                }
            },
            getLostPoint: function(e) {
                for(var t = e.getModuleCount(), n = 0, r = 0; r < t; r++){
                    for(var o = 0; o < t; o++){
                        let a = 0;
                        const i = e.isDark(r, o);
                        for(let l = -1; l <= 1; l++){
                            if (!(r + l < 0 || t <= r + l)) {
                                for(let s = -1; s <= 1; s++){
                                    if (!(o + s < 0 || t <= o + s || l == 0 && s == 0)) {
                                        if (i == e.isDark(r + l, o + s)) {
                                            a++;
                                        }
                                    }
                                }
                            }
                        }
                        if (a > 5) {
                            n += 3 + a - 5;
                        }
                    }
                }
                for(var r = 0; r < t - 1; r++){
                    for(var o = 0; o < t - 1; o++){
                        let u = 0;
                        if (e.isDark(r, o)) {
                            u++;
                        }
                        if (e.isDark(r + 1, o)) {
                            u++;
                        }
                        if (e.isDark(r, o + 1)) {
                            u++;
                        }
                        if (e.isDark(r + 1, o + 1)) {
                            u++;
                        }
                        if (u == 0 || u == 4) {
                            n += 3;
                        }
                    }
                }
                for(var r = 0; r < t; r++){
                    for(var o = 0; o < t - 6; o++){
                        if (e.isDark(r, o) && !e.isDark(r, o + 1) && e.isDark(r, o + 2) && e.isDark(r, o + 3) && e.isDark(r, o + 4) && !e.isDark(r, o + 5) && e.isDark(r, o + 6)) {
                            n += 40;
                        }
                    }
                }
                for(var o = 0; o < t; o++){
                    for(var r = 0; r < t - 6; r++){
                        if (e.isDark(r, o) && !e.isDark(r + 1, o) && e.isDark(r + 2, o) && e.isDark(r + 3, o) && e.isDark(r + 4, o) && !e.isDark(r + 5, o) && e.isDark(r + 6, o)) {
                            n += 40;
                        }
                    }
                }
                let c = 0;
                for(var o = 0; o < t; o++){
                    for(var r = 0; r < t; r++){
                        if (e.isDark(r, o)) {
                            c++;
                        }
                    }
                }
                const d = Math.abs(100 * c / t / t - 50) / 5;
                n += d * 10;
                return n;
            }
        };
        var l = {
            glog: function(e) {
                if (e < 1) {
                    throw new Error(`glog(${e})`);
                }
                return l.LOG_TABLE[e];
            },
            gexp: function(e) {
                while(e < 0){
                    e += 255;
                }
                while(e >= 256){
                    e -= 255;
                }
                return l.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        };
        for(var s = 0; s < 8; s++){
            l.EXP_TABLE[s] = 1 << s;
        }
        for(var s = 8; s < 256; s++){
            l.EXP_TABLE[s] = l.EXP_TABLE[s - 4] ^ l.EXP_TABLE[s - 5] ^ l.EXP_TABLE[s - 6] ^ l.EXP_TABLE[s - 8];
        }
        for(var s = 0; s < 255; s++){
            l.LOG_TABLE[l.EXP_TABLE[s]] = s;
        }
        function u(e, t) {
            if (e.length == null) {
                throw new Error(`${e.length}/${t}`);
            }
            for(var n = 0; n < e.length && e[n] == 0;){
                n++;
            }
            this.num = new Array(e.length - n + t);
            for(let r = 0; r < e.length - n; r++){
                this.num[r] = e[r + n];
            }
        }
        u.prototype = {
            get: function(e) {
                return this.num[e];
            },
            getLength: function() {
                return this.num.length;
            },
            multiply: function(e) {
                const t = new Array(this.getLength() + e.getLength() - 1);
                for(let n = 0; n < this.getLength(); n++){
                    for(let r = 0; r < e.getLength(); r++){
                        t[n + r] ^= l.gexp(l.glog(this.get(n)) + l.glog(e.get(r)));
                    }
                }
                return new u(t, 0);
            },
            mod: function(e) {
                if (this.getLength() - e.getLength() < 0) {
                    return this;
                }
                const t = l.glog(this.get(0)) - l.glog(e.get(0));
                const n = new Array(this.getLength());
                for(var r = 0; r < this.getLength(); r++){
                    n[r] = this.get(r);
                }
                for(var r = 0; r < e.getLength(); r++){
                    n[r] ^= l.gexp(l.glog(e.get(r)) + t);
                }
                return new u(n, 0).mod(e);
            }
        };
        function c(e, t) {
            this.totalCount = e;
            this.dataCount = t;
        }
        c.RS_BLOCK_TABLE = [
            [
                1,
                26,
                19
            ],
            [
                1,
                26,
                16
            ],
            [
                1,
                26,
                13
            ],
            [
                1,
                26,
                9
            ],
            [
                1,
                44,
                34
            ],
            [
                1,
                44,
                28
            ],
            [
                1,
                44,
                22
            ],
            [
                1,
                44,
                16
            ],
            [
                1,
                70,
                55
            ],
            [
                1,
                70,
                44
            ],
            [
                2,
                35,
                17
            ],
            [
                2,
                35,
                13
            ],
            [
                1,
                100,
                80
            ],
            [
                2,
                50,
                32
            ],
            [
                2,
                50,
                24
            ],
            [
                4,
                25,
                9
            ],
            [
                1,
                134,
                108
            ],
            [
                2,
                67,
                43
            ],
            [
                2,
                33,
                15,
                2,
                34,
                16
            ],
            [
                2,
                33,
                11,
                2,
                34,
                12
            ],
            [
                2,
                86,
                68
            ],
            [
                4,
                43,
                27
            ],
            [
                4,
                43,
                19
            ],
            [
                4,
                43,
                15
            ],
            [
                2,
                98,
                78
            ],
            [
                4,
                49,
                31
            ],
            [
                2,
                32,
                14,
                4,
                33,
                15
            ],
            [
                4,
                39,
                13,
                1,
                40,
                14
            ],
            [
                2,
                121,
                97
            ],
            [
                2,
                60,
                38,
                2,
                61,
                39
            ],
            [
                4,
                40,
                18,
                2,
                41,
                19
            ],
            [
                4,
                40,
                14,
                2,
                41,
                15
            ],
            [
                2,
                146,
                116
            ],
            [
                3,
                58,
                36,
                2,
                59,
                37
            ],
            [
                4,
                36,
                16,
                4,
                37,
                17
            ],
            [
                4,
                36,
                12,
                4,
                37,
                13
            ],
            [
                2,
                86,
                68,
                2,
                87,
                69
            ],
            [
                4,
                69,
                43,
                1,
                70,
                44
            ],
            [
                6,
                43,
                19,
                2,
                44,
                20
            ],
            [
                6,
                43,
                15,
                2,
                44,
                16
            ],
            [
                4,
                101,
                81
            ],
            [
                1,
                80,
                50,
                4,
                81,
                51
            ],
            [
                4,
                50,
                22,
                4,
                51,
                23
            ],
            [
                3,
                36,
                12,
                8,
                37,
                13
            ],
            [
                2,
                116,
                92,
                2,
                117,
                93
            ],
            [
                6,
                58,
                36,
                2,
                59,
                37
            ],
            [
                4,
                46,
                20,
                6,
                47,
                21
            ],
            [
                7,
                42,
                14,
                4,
                43,
                15
            ],
            [
                4,
                133,
                107
            ],
            [
                8,
                59,
                37,
                1,
                60,
                38
            ],
            [
                8,
                44,
                20,
                4,
                45,
                21
            ],
            [
                12,
                33,
                11,
                4,
                34,
                12
            ],
            [
                3,
                145,
                115,
                1,
                146,
                116
            ],
            [
                4,
                64,
                40,
                5,
                65,
                41
            ],
            [
                11,
                36,
                16,
                5,
                37,
                17
            ],
            [
                11,
                36,
                12,
                5,
                37,
                13
            ],
            [
                5,
                109,
                87,
                1,
                110,
                88
            ],
            [
                5,
                65,
                41,
                5,
                66,
                42
            ],
            [
                5,
                54,
                24,
                7,
                55,
                25
            ],
            [
                11,
                36,
                12
            ],
            [
                5,
                122,
                98,
                1,
                123,
                99
            ],
            [
                7,
                73,
                45,
                3,
                74,
                46
            ],
            [
                15,
                43,
                19,
                2,
                44,
                20
            ],
            [
                3,
                45,
                15,
                13,
                46,
                16
            ],
            [
                1,
                135,
                107,
                5,
                136,
                108
            ],
            [
                10,
                74,
                46,
                1,
                75,
                47
            ],
            [
                1,
                50,
                22,
                15,
                51,
                23
            ],
            [
                2,
                42,
                14,
                17,
                43,
                15
            ],
            [
                5,
                150,
                120,
                1,
                151,
                121
            ],
            [
                9,
                69,
                43,
                4,
                70,
                44
            ],
            [
                17,
                50,
                22,
                1,
                51,
                23
            ],
            [
                2,
                42,
                14,
                19,
                43,
                15
            ],
            [
                3,
                141,
                113,
                4,
                142,
                114
            ],
            [
                3,
                70,
                44,
                11,
                71,
                45
            ],
            [
                17,
                47,
                21,
                4,
                48,
                22
            ],
            [
                9,
                39,
                13,
                16,
                40,
                14
            ],
            [
                3,
                135,
                107,
                5,
                136,
                108
            ],
            [
                3,
                67,
                41,
                13,
                68,
                42
            ],
            [
                15,
                54,
                24,
                5,
                55,
                25
            ],
            [
                15,
                43,
                15,
                10,
                44,
                16
            ],
            [
                4,
                144,
                116,
                4,
                145,
                117
            ],
            [
                17,
                68,
                42
            ],
            [
                17,
                50,
                22,
                6,
                51,
                23
            ],
            [
                19,
                46,
                16,
                6,
                47,
                17
            ],
            [
                2,
                139,
                111,
                7,
                140,
                112
            ],
            [
                17,
                74,
                46
            ],
            [
                7,
                54,
                24,
                16,
                55,
                25
            ],
            [
                34,
                37,
                13
            ],
            [
                4,
                151,
                121,
                5,
                152,
                122
            ],
            [
                4,
                75,
                47,
                14,
                76,
                48
            ],
            [
                11,
                54,
                24,
                14,
                55,
                25
            ],
            [
                16,
                45,
                15,
                14,
                46,
                16
            ],
            [
                6,
                147,
                117,
                4,
                148,
                118
            ],
            [
                6,
                73,
                45,
                14,
                74,
                46
            ],
            [
                11,
                54,
                24,
                16,
                55,
                25
            ],
            [
                30,
                46,
                16,
                2,
                47,
                17
            ],
            [
                8,
                132,
                106,
                4,
                133,
                107
            ],
            [
                8,
                75,
                47,
                13,
                76,
                48
            ],
            [
                7,
                54,
                24,
                22,
                55,
                25
            ],
            [
                22,
                45,
                15,
                13,
                46,
                16
            ],
            [
                10,
                142,
                114,
                2,
                143,
                115
            ],
            [
                19,
                74,
                46,
                4,
                75,
                47
            ],
            [
                28,
                50,
                22,
                6,
                51,
                23
            ],
            [
                33,
                46,
                16,
                4,
                47,
                17
            ],
            [
                8,
                152,
                122,
                4,
                153,
                123
            ],
            [
                22,
                73,
                45,
                3,
                74,
                46
            ],
            [
                8,
                53,
                23,
                26,
                54,
                24
            ],
            [
                12,
                45,
                15,
                28,
                46,
                16
            ],
            [
                3,
                147,
                117,
                10,
                148,
                118
            ],
            [
                3,
                73,
                45,
                23,
                74,
                46
            ],
            [
                4,
                54,
                24,
                31,
                55,
                25
            ],
            [
                11,
                45,
                15,
                31,
                46,
                16
            ],
            [
                7,
                146,
                116,
                7,
                147,
                117
            ],
            [
                21,
                73,
                45,
                7,
                74,
                46
            ],
            [
                1,
                53,
                23,
                37,
                54,
                24
            ],
            [
                19,
                45,
                15,
                26,
                46,
                16
            ],
            [
                5,
                145,
                115,
                10,
                146,
                116
            ],
            [
                19,
                75,
                47,
                10,
                76,
                48
            ],
            [
                15,
                54,
                24,
                25,
                55,
                25
            ],
            [
                23,
                45,
                15,
                25,
                46,
                16
            ],
            [
                13,
                145,
                115,
                3,
                146,
                116
            ],
            [
                2,
                74,
                46,
                29,
                75,
                47
            ],
            [
                42,
                54,
                24,
                1,
                55,
                25
            ],
            [
                23,
                45,
                15,
                28,
                46,
                16
            ],
            [
                17,
                145,
                115
            ],
            [
                10,
                74,
                46,
                23,
                75,
                47
            ],
            [
                10,
                54,
                24,
                35,
                55,
                25
            ],
            [
                19,
                45,
                15,
                35,
                46,
                16
            ],
            [
                17,
                145,
                115,
                1,
                146,
                116
            ],
            [
                14,
                74,
                46,
                21,
                75,
                47
            ],
            [
                29,
                54,
                24,
                19,
                55,
                25
            ],
            [
                11,
                45,
                15,
                46,
                46,
                16
            ],
            [
                13,
                145,
                115,
                6,
                146,
                116
            ],
            [
                14,
                74,
                46,
                23,
                75,
                47
            ],
            [
                44,
                54,
                24,
                7,
                55,
                25
            ],
            [
                59,
                46,
                16,
                1,
                47,
                17
            ],
            [
                12,
                151,
                121,
                7,
                152,
                122
            ],
            [
                12,
                75,
                47,
                26,
                76,
                48
            ],
            [
                39,
                54,
                24,
                14,
                55,
                25
            ],
            [
                22,
                45,
                15,
                41,
                46,
                16
            ],
            [
                6,
                151,
                121,
                14,
                152,
                122
            ],
            [
                6,
                75,
                47,
                34,
                76,
                48
            ],
            [
                46,
                54,
                24,
                10,
                55,
                25
            ],
            [
                2,
                45,
                15,
                64,
                46,
                16
            ],
            [
                17,
                152,
                122,
                4,
                153,
                123
            ],
            [
                29,
                74,
                46,
                14,
                75,
                47
            ],
            [
                49,
                54,
                24,
                10,
                55,
                25
            ],
            [
                24,
                45,
                15,
                46,
                46,
                16
            ],
            [
                4,
                152,
                122,
                18,
                153,
                123
            ],
            [
                13,
                74,
                46,
                32,
                75,
                47
            ],
            [
                48,
                54,
                24,
                14,
                55,
                25
            ],
            [
                42,
                45,
                15,
                32,
                46,
                16
            ],
            [
                20,
                147,
                117,
                4,
                148,
                118
            ],
            [
                40,
                75,
                47,
                7,
                76,
                48
            ],
            [
                43,
                54,
                24,
                22,
                55,
                25
            ],
            [
                10,
                45,
                15,
                67,
                46,
                16
            ],
            [
                19,
                148,
                118,
                6,
                149,
                119
            ],
            [
                18,
                75,
                47,
                31,
                76,
                48
            ],
            [
                34,
                54,
                24,
                34,
                55,
                25
            ],
            [
                20,
                45,
                15,
                61,
                46,
                16
            ]
        ];
        c.getRSBlocks = function(e, t) {
            const n = c.getRsBlockTable(e, t);
            if (n == null) {
                throw new Error(`bad rs block @ typeNumber:${e}/errorCorrectLevel:${t}`);
            }
            for(var r = n.length / 3, o = [], a = 0; a < r; a++){
                for(let i = n[a * 3 + 0], l = n[a * 3 + 1], s = n[a * 3 + 2], u = 0; u < i; u++){
                    o.push(new c(l, s));
                }
            }
            return o;
        };
        c.getRsBlockTable = function(e, t) {
            switch(t){
                case o.L:
                    return c.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
                case o.M:
                    return c.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
                case o.Q:
                    return c.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
                case o.H:
                    return c.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
                default:
                    return;
            }
        };
        function d() {
            this.buffer = [];
            this.length = 0;
        }
        d.prototype = {
            get: function(e) {
                const t = Math.floor(e / 8);
                return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
            },
            put: function(e, t) {
                for(let n = 0; n < t; n++){
                    this.putBit((e >>> t - n - 1 & 1) == 1);
                }
            },
            getLengthInBits: function() {
                return this.length;
            },
            putBit: function(e) {
                const t = Math.floor(this.length / 8);
                if (this.buffer.length <= t) {
                    this.buffer.push(0);
                }
                if (e) {
                    this.buffer[t] |= 128 >>> this.length % 8;
                }
                this.length++;
            }
        };
        const m = [
            [
                17,
                14,
                11,
                7
            ],
            [
                32,
                26,
                20,
                14
            ],
            [
                53,
                42,
                32,
                24
            ],
            [
                78,
                62,
                46,
                34
            ],
            [
                106,
                84,
                60,
                44
            ],
            [
                134,
                106,
                74,
                58
            ],
            [
                154,
                122,
                86,
                64
            ],
            [
                192,
                152,
                108,
                84
            ],
            [
                230,
                180,
                130,
                98
            ],
            [
                271,
                213,
                151,
                119
            ],
            [
                321,
                251,
                177,
                137
            ],
            [
                367,
                287,
                203,
                155
            ],
            [
                425,
                331,
                241,
                177
            ],
            [
                458,
                362,
                258,
                194
            ],
            [
                520,
                412,
                292,
                220
            ],
            [
                586,
                450,
                322,
                250
            ],
            [
                644,
                504,
                364,
                280
            ],
            [
                718,
                560,
                394,
                310
            ],
            [
                792,
                624,
                442,
                338
            ],
            [
                858,
                666,
                482,
                382
            ],
            [
                929,
                711,
                509,
                403
            ],
            [
                1003,
                779,
                565,
                439
            ],
            [
                1091,
                857,
                611,
                461
            ],
            [
                1171,
                911,
                661,
                511
            ],
            [
                1273,
                997,
                715,
                535
            ],
            [
                1367,
                1059,
                751,
                593
            ],
            [
                1465,
                1125,
                805,
                625
            ],
            [
                1528,
                1190,
                868,
                658
            ],
            [
                1628,
                1264,
                908,
                698
            ],
            [
                1732,
                1370,
                982,
                742
            ],
            [
                1840,
                1452,
                1030,
                790
            ],
            [
                1952,
                1538,
                1112,
                842
            ],
            [
                2068,
                1628,
                1168,
                898
            ],
            [
                2188,
                1722,
                1228,
                958
            ],
            [
                2303,
                1809,
                1283,
                983
            ],
            [
                2431,
                1911,
                1351,
                1051
            ],
            [
                2563,
                1989,
                1423,
                1093
            ],
            [
                2699,
                2099,
                1499,
                1139
            ],
            [
                2809,
                2213,
                1579,
                1219
            ],
            [
                2953,
                2331,
                1663,
                1273
            ]
        ];
        class p {
            constructor(e, t){
                this._bIsPainted = false;
                this._htOption = t;
                this._elCanvas = document.createElement("canvas");
                this._elCanvas.width = t.width;
                this._elCanvas.height = t.height;
                this.updateAriaLabel(t.ariaLabel);
                this._elCanvas.setAttribute("role", "img");
                e.appendChild(this._elCanvas);
                this._el = e;
                this._oContext = this._elCanvas.getContext("2d");
                this._bIsPainted = false;
                this._bSupportDataURI = null;
            }
            updateAriaLabel(e) {
                this._elCanvas.setAttribute("aria-label", e ?? "Scan this QR code to link a device!");
            }
            draw(e) {
                const _oContext = this._oContext;
                const _htOption = this._htOption;
                const r = e.getModuleCount();
                const o = _htOption.width / r;
                const a = _htOption.height / r;
                const i = Math.round(o);
                const l = Math.round(a);
                this.clear();
                for(let s = 0; s < r; s++){
                    for(let u = 0; u < r; u++){
                        const c = e.isDark(s, u);
                        const d = u * o;
                        const m = s * a;
                        _oContext.strokeStyle = c ? _htOption.colorDark : _htOption.colorLight;
                        _oContext.lineWidth = 1;
                        _oContext.fillStyle = c ? _htOption.colorDark : _htOption.colorLight;
                        _oContext.fillRect(d, m, o, a);
                        _oContext.strokeRect(Math.floor(d) + 0.5, Math.floor(m) + 0.5, i, l);
                        _oContext.strokeRect(Math.ceil(d) - 0.5, Math.ceil(m) - 0.5, i, l);
                    }
                }
                this._bIsPainted = true;
            }
            isPainted() {
                return this._bIsPainted;
            }
            clear() {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
                this._bIsPainted = false;
            }
            round(e) {
                return e && Math.floor(e * 1000) / 1000;
            }
        }
        function _(e, correctLevel) {
            let n = 1;
            const r = e instanceof ArrayBuffer ? e.byteLength : f(e);
            for(let a = 0, i = m.length; a <= i; a++){
                let l = 0;
                switch(correctLevel){
                    case o.L:
                        l = m[a][0];
                        break;
                    case o.M:
                        l = m[a][1];
                        break;
                    case o.Q:
                        l = m[a][2];
                        break;
                    case o.H:
                        l = m[a][3];
                        break;
                }
                if (r <= l) {
                    break;
                }
                n++;
            }
            if (n > m.length) {
                throw new Error("Too long data");
            }
            return n;
        }
        function f(e) {
            const t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
            return t.length + (t.length != e.length ? 3 : 0);
        }
        e = function(e, t) {
            this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: o.H
            };
            if (typeof t === "string") {
                t = {
                    text: t
                };
            }
            if (t) {
                for(const n in t){
                    this._htOption[n] = t[n];
                }
            }
            if (typeof e === "string") {
                e = document.getElementById(e);
            }
            this._el = e;
            this._oQRCode = null;
            this._oDrawing = new p(this._el, this._htOption);
            if (this._htOption.text) {
                this.makeCode(this._htOption.text);
            }
        };
        e.prototype.makeCode = function(e) {
            this._oQRCode = new n(_(e, this._htOption.correctLevel), this._htOption.correctLevel);
            this._oQRCode.addData(e);
            this._oQRCode.make();
            this._el.title = e;
            this._oDrawing.draw(this._oQRCode);
        };
        e.prototype.updateAriaLabel = function(e) {
            this._oDrawing.updateAriaLabel(e);
        };
        e.prototype.clear = function() {
            this._oDrawing.clear();
        };
        e.CorrectLevel = o;
    })();
    a.exports = e;
}, null);