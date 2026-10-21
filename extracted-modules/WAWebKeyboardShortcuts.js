__d("WAWebKeyboardShortcuts", [
    "$InternalEnum",
    "WAWebActions",
    "WAWebCallCollection",
    "WAWebEnvironment",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum").Mirrored([
        "Command",
        "Option",
        "Control"
    ]);
    const u = {
        mac: [
            s.Command,
            s.Control
        ],
        windows: [
            s.Control,
            s.Option
        ]
    };
    function c() {
        return {
            mac: o("WAWebUA").UA.browser === "firefox" ? [
                s.Command,
                s.Control
            ] : [
                s.Command
            ],
            windows: [
                s.Option
            ]
        };
    }
    const d = [
        "ArrowUp",
        "ArrowDown",
        "w",
        "f",
        "]",
        "[",
        "A",
        "a",
        "H",
        "h",
        "Backspace",
        "Tab",
        "{",
        "}",
        "Escape",
        "n",
        "N",
        "p",
        ",",
        "/",
        "F",
        "E",
        "M",
        "P",
        "U",
        ">",
        "<",
        "e",
        "g",
        "G",
        "s",
        "S",
        "k",
        "l",
        "b",
        "B",
        "Delete",
        "DELETE",
        "r",
        "y",
        "R",
        "d",
        "i",
        "X",
        "I",
        "K",
        "Shift+7",
        "Shift+8",
        "Shift+.",
        "Shift+L",
        "Shift+Tab",
        "Enter",
        " ",
        "7",
        "8",
        ".",
        "*",
        "&",
        "t",
        "+",
        "=",
        "-",
        "_",
        "0",
        "F4",
        "v",
        "m"
    ];
    function m(e) {
        if (d.includes(e)) {
            return e;
        }
        return null;
    }
    function p(e) {
        const isWindows = r("WAWebEnvironment").isWindows;
        switch(e){
            case o("WAWebActions").Action.OPEN_NTH_CHAT:
                return [];
            case o("WAWebActions").Action.CONTACT_US:
                return [
                    {
                        key: "H"
                    }
                ];
            case o("WAWebActions").Action.GO_TO_NEXT_CHAT:
                {
                    const n = [
                        {
                            key: "Tab",
                            hybridKey: "]",
                            hybridModifiers: [
                                s.Control
                            ],
                            webKeyWindows: "}"
                        },
                        {
                            key: "}"
                        }
                    ];
                    if (isWindows) {
                        n.push({
                            key: "}",
                            hybridModifiers: [
                                s.Control
                            ]
                        }, {
                            key: "Tab",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return n;
                }
            case o("WAWebActions").Action.GO_TO_PREV_CHAT:
                {
                    const a = [
                        {
                            key: "Shift+Tab",
                            hybridKey: "[",
                            hybridModifiers: [
                                s.Control
                            ],
                            webKeyWindows: "{"
                        },
                        {
                            key: "{"
                        }
                    ];
                    if (isWindows) {
                        a.push({
                            key: "{",
                            hybridModifiers: [
                                s.Control
                            ]
                        }, {
                            key: "Shift+Tab",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return a;
                }
            case o("WAWebActions").Action.CLOSE_CHAT:
                {
                    const i = [
                        {
                            key: "Escape",
                            webModifiers: {
                                mac: [],
                                windows: []
                            }
                        }
                    ];
                    if (isWindows) {
                        i.push({
                            key: "w",
                            hybridModifiers: [
                                s.Control
                            ]
                        }, {
                            key: "F4",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return i;
                }
            case o("WAWebActions").Action.LOGOUT:
                return [];
            case o("WAWebActions").Action.OPEN_NEW_CHAT:
                {
                    if (o("WAWebUA").UA.isSafari) {
                        return [
                            {
                                key: "N",
                                webModifiers: {
                                    mac: [
                                        s.Control
                                    ],
                                    windows: []
                                }
                            }
                        ];
                    }
                    const l = [
                        {
                            key: "n",
                            hybridModifiers: [
                                s.Control,
                                s.Option
                            ]
                        }
                    ];
                    if (isWindows) {
                        l.push({
                            key: "n",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return l;
                }
            case o("WAWebActions").Action.OPEN_NEW_GROUP:
                return [
                    {
                        key: "N",
                        hybridModifiers: [
                            s.Control
                        ]
                    }
                ];
            case o("WAWebActions").Action.OPEN_PROFILE:
                {
                    const u = [
                        {
                            key: "p",
                            hybridModifiers: [
                                s.Control,
                                s.Option
                            ]
                        }
                    ];
                    if (isWindows) {
                        u.push({
                            key: "p",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return u;
                }
            case o("WAWebActions").Action.OPEN_SETTINGS:
                return [
                    {
                        key: ",",
                        hybridKey: "s",
                        hybridModifiers: [
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.SEARCH:
                {
                    const d = [
                        {
                            webKey: "/"
                        }
                    ];
                    if (isWindows) {
                        d.push({
                            key: "f",
                            hybridKey: "f",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return d;
                }
            case o("WAWebActions").Action.SEARCH_IN_CHAT:
                return [
                    {
                        key: "F",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        },
                        hybridModifiers: [
                            s.Control
                        ]
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_ARCHIVE:
                return [
                    {
                        key: "E",
                        hybridKey: "A",
                        hybridModifiers: [
                            s.Control
                        ]
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_MUTE:
                return [
                    {
                        key: "M",
                        hybridModifiers: [
                            s.Control
                        ]
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_PIN:
                return [
                    {
                        key: "P"
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_UNREAD:
                return [
                    {
                        key: "U",
                        hybridModifiers: [
                            s.Control
                        ]
                    }
                ];
            case o("WAWebActions").Action.INCREASE_PTT_SPEED:
                return [
                    {
                        key: ">",
                        hybridKey: ">",
                        hybridModifiers: []
                    }
                ];
            case o("WAWebActions").Action.DECREASE_PTT_SPEED:
                return [
                    {
                        key: "<",
                        hybridKey: "<",
                        hybridModifiers: []
                    }
                ];
            case o("WAWebActions").Action.OPEN_EMOJI_PANEL:
                {
                    const m = [
                        {
                            key: "e",
                            hybridModifiers: [
                                s.Control,
                                s.Option
                            ]
                        }
                    ];
                    if (isWindows) {
                        m.push({
                            key: "E",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return m;
                }
            case o("WAWebActions").Action.OPEN_GIF_PANEL:
                {
                    const p = [
                        {
                            key: "g",
                            hybridModifiers: [
                                s.Control,
                                s.Option
                            ]
                        }
                    ];
                    if (isWindows) {
                        p.push({
                            key: "G",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return p;
                }
            case o("WAWebActions").Action.OPEN_STICKER_PANEL:
                {
                    const _ = [
                        {
                            key: "s",
                            hybridModifiers: [
                                s.Control,
                                s.Option
                            ]
                        }
                    ];
                    if (isWindows) {
                        _.push({
                            key: "S",
                            hybridModifiers: [
                                s.Control
                            ]
                        });
                    }
                    return _;
                }
            case o("WAWebActions").Action.TOGGLE_STICKER_MAKER:
                return [
                    {
                        key: "S"
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_COMMAND_PALETTE:
                return [
                    {
                        key: "k",
                        webModifiers: c(),
                        hybridModifiers: [
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.LABEL_CHAT:
                return [
                    {
                        key: "Shift+L",
                        hybridModifiers: [
                            s.Control,
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.LOCK_SCREEN:
                return [
                    {
                        key: "l",
                        hybridModifiers: [
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_BOLD:
                return [
                    {
                        key: "b",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_ITALIC:
                return [
                    {
                        key: "i",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_STRIKETHROUGH:
                return [
                    {
                        key: "X",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_INLINE_CODE:
                return [
                    {
                        key: "I",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_CODE:
                return [
                    {
                        key: "K",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_NUMBERED_LIST:
                return [
                    {
                        key: "Shift+7",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_BULLETED_LIST:
                return [
                    {
                        key: "Shift+8",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_QUOTE:
                return [
                    {
                        key: "Shift+.",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_THEME:
                return [
                    {
                        webKey: "t"
                    }
                ];
            case o("WAWebActions").Action.ZOOM_IN:
                return [
                    {
                        key: "+",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    },
                    {
                        key: "=",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.ZOOM_OUT:
                return [
                    {
                        key: "-",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    },
                    {
                        key: "_",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.ZOOM_RESET:
                return [
                    {
                        key: "0",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        }
                    }
                ];
            case o("WAWebActions").Action.OPEN_CHAT_INFO:
                return [
                    {
                        key: "i",
                        hybridKey: "i",
                        webModifiers: {
                            mac: [
                                s.Option
                            ],
                            windows: [
                                s.Option
                            ]
                        },
                        hybridModifiers: [
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.BLOCK_CHAT:
                return [
                    {
                        key: "B",
                        hybridKey: "B",
                        webModifiers: {
                            mac: [
                                s.Control
                            ],
                            windows: [
                                s.Control
                            ]
                        },
                        hybridModifiers: [
                            s.Control
                        ]
                    }
                ];
            case o("WAWebActions").Action.REPLY:
                return [
                    {
                        key: "r",
                        hybridKey: "r",
                        webModifiers: {
                            mac: [
                                s.Option
                            ],
                            windows: [
                                s.Option
                            ]
                        },
                        hybridModifiers: [
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.REPLY_PRIVATE:
                return [
                    {
                        key: "r",
                        hybridKey: "r",
                        webModifiers: {
                            mac: [
                                s.Control,
                                s.Option
                            ],
                            windows: [
                                s.Control,
                                s.Option
                            ]
                        },
                        hybridModifiers: [
                            s.Control,
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.FORWARD:
                return [
                    {
                        key: "d",
                        hybridKey: "d",
                        webModifiers: {
                            mac: [
                                s.Control,
                                s.Option
                            ],
                            windows: [
                                s.Control,
                                s.Option
                            ]
                        },
                        hybridModifiers: [
                            s.Control,
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.STAR_MESSAGE:
                return [
                    {
                        key: "8",
                        hybridKey: "8",
                        webModifiers: {
                            mac: [
                                s.Option
                            ],
                            windows: [
                                s.Option
                            ]
                        },
                        hybridModifiers: [
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.EDIT_LAST_MESSAGE:
                return [
                    {
                        key: "ArrowUp",
                        hybridKey: "ArrowUp",
                        webModifiers: {
                            mac: [
                                s.Command
                            ],
                            windows: [
                                s.Control
                            ]
                        },
                        hybridModifiers: [
                            s.Control
                        ]
                    }
                ];
            case o("WAWebActions").Action.OPEN:
                return [
                    {
                        key: "Enter",
                        hybridKey: "Enter",
                        hybridModifiers: [],
                        webModifiers: {
                            mac: [],
                            windows: []
                        }
                    }
                ];
            case o("WAWebActions").Action.OPEN_ATTACHMENT_DROPDOWN:
                return [
                    {
                        key: "a",
                        hybridKey: "a",
                        webModifiers: {
                            mac: [
                                s.Option
                            ],
                            windows: [
                                s.Option
                            ]
                        },
                        hybridModifiers: [
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.START_PTT_RECORDING:
                return [
                    {
                        key: "R",
                        hybridKey: "R",
                        webModifiers: {
                            mac: [
                                s.Control,
                                s.Option
                            ],
                            windows: [
                                s.Control,
                                s.Option
                            ]
                        },
                        hybridModifiers: [
                            s.Control,
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.PAUSE_PTT_RECORDING:
                return [
                    {
                        key: "p",
                        hybridKey: "p",
                        webModifiers: {
                            mac: [
                                s.Option
                            ],
                            windows: [
                                s.Option
                            ]
                        },
                        hybridModifiers: [
                            s.Option
                        ]
                    }
                ];
            case o("WAWebActions").Action.SEND_PTT:
                return [
                    {
                        key: "Enter",
                        hybridKey: "Enter",
                        webModifiers: {
                            mac: [
                                s.Control
                            ],
                            windows: [
                                s.Control
                            ]
                        },
                        hybridModifiers: [
                            s.Control
                        ]
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_PRIVACY_MODE:
                return [
                    {
                        key: "b"
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_CALL_CAMERA:
                return [
                    {
                        key: "v"
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_CALL_MUTE:
                return [
                    {
                        key: "m"
                    }
                ];
            case o("WAWebActions").Action.SHOW_CALL_REACTIONS:
                return [
                    {
                        key: "r"
                    }
                ];
            case o("WAWebActions").Action.TOGGLE_RAISE_HAND:
                return [
                    {
                        key: "h"
                    }
                ];
            case o("WAWebActions").Action.START_SCREEN_SHARE:
                return [
                    {
                        key: "s"
                    }
                ];
            case o("WAWebActions").Action.END_CALL:
                return [
                    {
                        key: "w"
                    }
                ];
        }
    }
    const _ = C(Array.from((e = o("WAWebActions")).Action.members()), p);
    const f = new Set([
        e.Action.TOGGLE_CALL_CAMERA,
        e.Action.TOGGLE_CALL_MUTE,
        e.Action.SHOW_CALL_REACTIONS,
        e.Action.TOGGLE_RAISE_HAND,
        e.Action.START_SCREEN_SHARE,
        e.Action.END_CALL
    ]);
    function g({ hybridModifiers, modifiers }) {
        const { mac, windows } = modifiers;
        let l = o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC ? mac : windows;
        const isWindows = r("WAWebEnvironment").isWindows;
        if (isWindows && hybridModifiers.length !== 0) {
            l = hybridModifiers;
        }
        return l;
    }
    function h({ altKey, ctrlKey, key, metaKey, shiftKey }, t = _) {
        if (!(key === "Control" || key === "Meta" || key === "Alt" || key === "Shift")) {
            const u = b(key, shiftKey);
            const c = m(u);
            if (c != null) {
                const d = t[c];
                if (d) {
                    const p = r("WAWebCallCollection").activeCall != null;
                    let h;
                    let y;
                    for (const C of d){
                        const v = C.action;
                        const S = g(C);
                        const R = [
                            S.includes(s.Command) === metaKey,
                            S.includes(s.Control) === ctrlKey,
                            S.includes(s.Option) === altKey
                        ].every(Boolean);
                        if (R) {
                            if (p && f.has(v)) {
                                y = v;
                            } else if (h == null) {
                                h = v;
                            }
                        }
                    }
                    return y ?? h;
                }
            }
        }
    }
    function y(e) {
        if (e.ctrlKey) {
            if (e.deltaY < 0) {
                return o("WAWebActions").Action.ZOOM_IN;
            }
            if (e.deltaY > 0) {
                return o("WAWebActions").Action.ZOOM_OUT;
            }
        }
    }
    function C(e, t) {
        const n = {};
        e.forEach((action)=>{
            t(action).forEach(({ key, webKey, webModifiers = u, hybridModifiers, hybridKey })=>{
                const d = r("WAWebEnvironment").isWindows && hybridKey ? hybridKey : webKey ?? key;
                if (d != null) {
                    if (!n[d]) {
                        n[d] = [];
                    }
                    n[d].push({
                        action,
                        modifiers: webModifiers,
                        hybridModifiers: hybridModifiers ?? []
                    });
                }
            });
        });
        Object.entries(n).forEach(([t, r])=>{
            n[t] = r.sort((e, t)=>g(t).length - g(e).length);
        });
        return n;
    }
    function b(key, shiftKey) {
        if (shiftKey) {
            if (key === "Tab" || key === "Enter" || key === "Backspace" || key === " " || key === "L") {
                return `Shift+${key}`;
            }
            if (key >= "a" && key <= "z") {
                return key.toUpperCase();
            }
            if (key === "Delete") {
                return "DELETE";
            }
            switch(key){
                case "7":
                case "&":
                    return "Shift+7";
                case "8":
                case "*":
                    return "Shift+8";
                case ".":
                case ">":
                    return "Shift+.";
            }
        }
        if (/^[A-Z]$/.test(key) && !shiftKey) {
            return key.toLowerCase();
        }
        return key;
    }
    function v(e) {
        const t = p(e);
        if (t.length) {
            const n = r("WAWebEnvironment").isWindows;
            const a = t[0];
            const { hybridKey, key, webKey, webKeyWindows } = a;
            if (n && hybridKey) {
                return hybridKey;
            }
            if (!n && o("WAWebUA").UA.os !== o("WAWebUA").OS_TYPE.MAC && webKeyWindows != null) {
                return webKeyWindows;
            }
            return webKey ?? key;
        }
    }
    function S(e) {
        const t = p(e);
        if (t.length) {
            const { webModifiers = u, hybridModifiers } = t[0];
            const c = o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC;
            const d = r("WAWebEnvironment").isWindows;
            let m = c ? webModifiers.mac : webModifiers.windows;
            if (d && hybridModifiers) {
                m = hybridModifiers;
            }
            return m.map((e)=>{
                switch(e){
                    case s.Command:
                        return "Cmd";
                    case s.Option:
                        if (c) {
                            return "Option";
                        }
                        return "Alt";
                    case s.Control:
                        return "Ctrl";
                }
            });
        }
    }
    function R(e) {
        const t = [];
        for (const n of e){
            switch(n){
                case "Cmd":
                    t.push("Super");
                    break;
                case "Ctrl":
                    t.push("Control");
                    break;
                case "Alt":
                case "Option":
                    t.push("Option");
                    break;
            }
        }
        return t;
    }
    const L = {
        " ": "Space",
        DELETE: "Backspace",
        ArrowUp: "ArrowUp",
        ArrowDown: "ArrowDown",
        Tab: "Tab",
        Enter: "Enter",
        Backspace: "Backspace",
        Escape: "Escape",
        "/": "/",
        ",": ",",
        ".": ".",
        ">": ">",
        "<": "<",
        "]": "]",
        "[": "[",
        "{": "{",
        "}": "}",
        "|": "|",
        "*": "*",
        "&": "&",
        "+": "+",
        "=": "=",
        "-": "-",
        _: "_",
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        A: "A",
        B: "B",
        C: "C",
        D: "D",
        E: "E",
        F: "F",
        G: "G",
        H: "H",
        I: "I",
        J: "J",
        K: "K",
        L: "L",
        M: "M",
        N: "N",
        O: "O",
        P: "P",
        Q: "Q",
        R: "R",
        S: "S",
        T: "T",
        U: "U",
        V: "V",
        W: "W",
        X: "X",
        Y: "Y",
        Z: "Z",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E",
        f: "F",
        g: "G",
        h: "H",
        i: "I",
        j: "J",
        k: "K",
        l: "L",
        m: "M",
        n: "N",
        o: "O",
        p: "P",
        q: "Q",
        r: "R",
        s: "S",
        t: "T",
        u: "U",
        v: "V",
        w: "W",
        x: "X",
        y: "Y",
        z: "Z"
    };
    function E(e) {
        if (e.startsWith("Shift+")) {
            const r = e.substring(6);
            return L[r] ?? null;
        }
        return L[e] ?? null;
    }
    function k(e) {
        const t = v(e);
        if (!t) {
            return null;
        }
        const n = E(t);
        if (!n) {
            return null;
        }
        const r = S(e);
        const o = r ? R(r) : [];
        const a = t.startsWith("Shift+") || t.length === 1 && t.toLowerCase() !== t;
        if (a && !o.includes("Shift")) {
            o.push("Shift");
        }
        return {
            modifiers: o.length > 0 ? o : undefined,
            shortcutKeys: [
                n
            ]
        };
    }
    l.Modifier = s;
    l.CALLING_ACTIONS = f;
    l.getAction = h;
    l.getActionFromMouseEvent = y;
    l.buildShortcutMap = C;
    l.getShortcutKey = v;
    l.getShortcutDisplayModifiers = S;
    l.getWDSShortcuts = k;
}, 98);