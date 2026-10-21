__d("WAWebEmojiPickerOption.react", [
    "WAWebBoolFunc",
    "WAWebConnModel",
    "WAWebDropdownItem.react",
    "WAWebEmoji",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebMobilePlatforms",
    "bx",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("bx").getURL(r("bx")("9551"));
    const c = r("bx").getURL(r("bx")("9552"));
    const d = r("bx").getURL(r("bx")("9553"));
    const m = r("bx").getURL(r("bx")("9554"));
    const p = new Set([
        o("WAWebEmoji").KISS_WOMAN_MAN,
        o("WAWebEmoji").KISS_WOMAN_WOMAN,
        o("WAWebEmoji").KISS_MAN_MAN,
        o("WAWebEmoji").KISS,
        o("WAWebEmoji").COUPLE_WITH_HEART_WOMAN_MAN,
        o("WAWebEmoji").COUPLE_WITH_HEART_WOMAN_WOMAN,
        o("WAWebEmoji").COUPLE_WITH_HEART_MAN_MAN,
        o("WAWebEmoji").COUPLE_WITH_HEART
    ]);
    const _ = new Set([
        o("WAWebEmoji").PEOPLE_HOLDING_HANDS,
        o("WAWebEmoji").WOMEN_HOLDING_HANDS,
        o("WAWebEmoji").MEN_HOLDING_HANDS,
        o("WAWebEmoji").WOMAN_AND_MAN_HOLDING_HANDS
    ]);
    function FComponent({ action = o("WAWebBoolFunc").returnFalse, emoji, base, leftEmojiVariation = false, rightEmojiVariation = false, showBaseEmoji = false, selected = false, testid }) {
        const S = p.has(base);
        const R = o("WAWebEmoji").HANDSHAKE === base;
        const L = _.has(base);
        const E = (o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.ANDROID || o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.SMBA) && (base === o("WAWebEmoji").KISS_WOMAN_WOMAN || base === o("WAWebEmoji").COUPLE_WITH_HEART_WOMAN_WOMAN);
        const k = o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.ANDROID || o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.SMBA ? m : u;
        const I = base === emoji;
        const T = I || !leftEmojiVariation && !rightEmojiVariation;
        let D;
        if (T) {
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            D = <Component action={action} type="emoji-preview"><div className="x1n2onr6 x90ne7k"><div {...babelHelpers.extends({}, {
                0: {
                    className: "x90ne7k"
                },
                1: {
                    className: "x90ne7k x1fw281u"
                }
            }[!!(I && !showBaseEmoji) << 0], {
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: emoji,
                    formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
                    tabIndex: "-1"
                })
            })}/>{I && !showBaseEmoji && S && <img src={k} alt="Heart" className="x10w6t97 x1td3qas x1n2onr6 xepu288"/>}</div></Component>;
        } else if (L || S) {
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            D = <Component action={action} type="emoji-preview"><div {...babelHelpers.extends({}, {
                0: {
                    className: "x1n2onr6 x90ne7k"
                },
                1: {
                    className: "x1n2onr6 x90ne7k x53faa5 x1fqc64z xs83zq4 xt6ovg4 x1ru8ea5"
                }
            }[!!selected << 0], {
                children: [
                    <div {...babelHelpers.extends({}, {
                        0: {
                            className: "x1n2onr6 x1ys8fmf"
                        },
                        4: {
                            className: "x1n2onr6 xee18i3"
                        },
                        2: {
                            className: "x1n2onr6 x1fveu2v"
                        },
                        6: {
                            className: "x1n2onr6 x1fveu2v"
                        },
                        1: {
                            className: "x1n2onr6 x1ys8fmf x1fw281u"
                        },
                        5: {
                            className: "x1n2onr6 xee18i3 x1fw281u"
                        },
                        3: {
                            className: "x1n2onr6 x1fveu2v x1fw281u"
                        },
                        7: {
                            className: "x1n2onr6 x1fveu2v x1fw281u"
                        }
                    }[!!S << 2 | !!E << 1 | !!leftEmojiVariation << 0], {
                        children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: emoji,
                            formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
                            tabIndex: "-1"
                        })
                    })}/>,
                    <div {...babelHelpers.extends({}, {
                        0: {
                            className: "x10l6tqk x13vifvy x1o0tod x1k33vu5"
                        },
                        4: {
                            className: "x10l6tqk x13vifvy x1o0tod x1h21ihg"
                        },
                        2: {
                            className: "x10l6tqk x13vifvy x1o0tod x1avug1o"
                        },
                        6: {
                            className: "x10l6tqk x13vifvy x1o0tod x1avug1o"
                        },
                        1: {
                            className: "x10l6tqk x13vifvy x1o0tod x1k33vu5 x1fw281u"
                        },
                        5: {
                            className: "x10l6tqk x13vifvy x1o0tod x1h21ihg x1fw281u"
                        },
                        3: {
                            className: "x10l6tqk x13vifvy x1o0tod x1avug1o x1fw281u"
                        },
                        7: {
                            className: "x10l6tqk x13vifvy x1o0tod x1avug1o x1fw281u"
                        }
                    }[!!S << 2 | !!E << 1 | !!rightEmojiVariation << 0], {
                        children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: emoji,
                            formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
                            tabIndex: "-1"
                        })
                    })}/>,
                    S && <img src={k} alt="Heart" className="x10w6t97 x1td3qas x1n2onr6 xepu288"/>
                ]
            })}/></Component>;
        } else if (R) {
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            D = <Component action={action} type="emoji-preview"><div {...babelHelpers.extends({}, {
                0: {
                    className: "x1n2onr6 x90ne7k"
                },
                1: {
                    className: "x1n2onr6 x90ne7k x53faa5 x1fqc64z xs83zq4 xt6ovg4 x1ru8ea5"
                }
            }[!!selected << 0], {
                children: [
                    <div className="x1n2onr6">{s.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: emoji,
                        formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
                        tabIndex: "-1"
                    })}</div>,
                    <img {...babelHelpers.extends({
                        src: leftEmojiVariation ? d : c,
                        alt: `${leftEmojiVariation ? "Right" : "Left"} shake hand silhouette`
                    }, {
                        0: {
                            className: "xojvqvm x1npj6m0 x1n2onr6 xepu288 x10b2gpd xc3n6vs x1fw281u"
                        },
                        1: {
                            className: "xojvqvm x1npj6m0 x1n2onr6 xepu288 x10b2gpd x1fw281u"
                        }
                    }[!!leftEmojiVariation << 0])}/>
                ]
            })}/></Component>;
        }
        return <div className="x1ua1l7f" data-testid={testid}>{D}</div>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.default = FComponent;
}, 98);