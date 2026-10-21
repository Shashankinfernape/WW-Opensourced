__d("WAXplatTrim", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set([
        "\0",
        "	",
        "\n",
        "\v",
        "\f",
        "\r",
        " ",
        "\x85",
        "\xA0",
        "\u1680",
        "\u2000",
        "\u2001",
        "\u2002",
        "\u2003",
        "\u2004",
        "\u2005",
        "\u2006",
        "\u2007",
        "\u2008",
        "\u2009",
        "\u200A",
        "\u200B",
        "\u2028",
        "\u2029",
        "\u202F",
        "\u205F",
        "\u3000"
    ]);
    const l = function(t) {
        return c(t, true, true);
    };
    const s = function(t) {
        return c(t, true, false);
    };
    const u = function(t) {
        return c(t, false, true);
    };
    function c(t, n, r) {
        let o = 0;
        let t_length = t.length;
        if (n) {
            while(o < t_length && e.has(t.charAt(o))){
                o++;
            }
        }
        if (r) {
            for(const i = n ? o : -1; t_length - 1 > i && e.has(t.charAt(t_length - 1));){
                t_length--;
            }
        }
        if (o === t_length) {
            return "";
        }
        if (o === 0 && t_length === t.length) {
            return t;
        }
        return t.slice(o, t_length);
    }
    i.trim = l;
    i.trimStart = s;
    i.trimEnd = u;
}, 66);