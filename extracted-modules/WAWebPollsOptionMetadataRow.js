__d("WAWebPollsOptionMetadataRow", [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfigurationConversation",
    "WAWebPollAddedByLabel",
    "WAWebPollOptionImage.react",
    "WAWebTag.react",
    "WAWebTextSizeUtils",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginInlineEnd6: {
            marginInlineEnd: "xbelrpt",
            $$css: true
        }
    };
    const m = {
        option: {
            fontWeight: "xo1l8bm",
            fontSize: "x1jchvi3",
            lineHeight: "xwn7fz2",
            wordBreak: "x13faqbe",
            $$css: true
        },
        voteCount: {
            minWidth: "x1pshirs",
            $$css: true
        }
    };
    function p({ addOptionMsg, associatedMsg, isCorrectOption, isCurrentLeader, isPollFromMe, links, messageHasSpoiler, name, spoilerRevealContext, trusted, voteCount }) {
        const b = o("WAWebTextSizeUtils").getWAWebTextSizeStyles();
        const b_pollDetailsOptionTextSize = b.pollDetailsOptionTextSize;
        const S = o("WAWebFormatConfigurationConversation").Conversation({
            links: links ?? [],
            phoneNumbers: [],
            selectable: true,
            trusted: trusted === true,
            fromMe: isPollFromMe,
            messageHasSpoiler,
            spoilerRevealContext
        });
        const Component = o("WAWebFlex.react").FlexColumn;
        const Component_1 = o("WAWebEmojiText.react").EmojiText;
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = o("WAWebFlex.react").FlexRow;
        return <Component_3 align="center" paddingTop={16} paddingBottom={16} paddingEnd={32} paddingStart={32} columnGap={12}>{associatedMsg && <Component alignSelf="start" shrink={0}>{c.jsx(r("WAWebPollOptionImage.react"), {
            msgKey: associatedMsg.id,
            size: "small"
        })}</Component>}<Component_2 xstyle={d.marginInlineEnd6}><Component_1 text={name} selectable formatters={S} className={(e || (e = r("stylex")))(m.option, b_pollDetailsOptionTextSize)}/>{addOptionMsg != null && c.jsx(r("WAWebPollAddedByLabel"), {
            addOptionMsg
        })}</Component_2><span {...babelHelpers.extends({}, e.props(m.voteCount, o("WDSMargins.stylex").wdsMargins.marginStartAuto), {
            children: isCorrectOption == null ? <_ count={voteCount} isCurrentLeader={isCurrentLeader}/> : <F10 count={voteCount} isCorrectOption={isCorrectOption}/>
        })}/></Component_3>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const { count, isCurrentLeader } = e;
        let a;
        if (t[0] !== isCurrentLeader) {
            a = isCurrentLeader ? [
                o("WAWebTag.react").TagTheme.Primary,
                o("WAWebTag.react").TagIconName.STAR
            ] : [
                o("WAWebTag.react").TagTheme.Secondary,
                null
            ];
            t[0] = isCurrentLeader;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        const l = i[0];
        const u = i[1];
        let d;
        if (t[2] !== count) {
            d = s._("_j{\"*\":\"{vote} votes\",\"_1\":\"1 vote\"}", [
                s._plural(count, "vote")
            ]);
            t[2] = count;
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] !== u || t[5] !== d || t[6] !== l) {
            const Component = o("WAWebTag.react").Tag;
            m = <Component theme={l} icon={u}>{d}</Component>;
            t[4] = u;
            t[5] = d;
            t[6] = l;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    function F10(e) {
        const t = o("react-compiler-runtime").c(6);
        const { count, isCorrectOption } = e;
        let a;
        if (t[0] !== isCorrectOption) {
            a = isCorrectOption ? [
                o("WAWebTag.react").TagTheme.Primary,
                o("WAWebTag.react").TagIconName.CHECK
            ] : [
                o("WAWebTag.react").TagTheme.Secondary,
                o("WAWebTag.react").TagIconName.CLOSE
            ];
            t[0] = isCorrectOption;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        const l = i[0];
        const s = i[1];
        let u;
        if (t[2] !== count || t[3] !== s || t[4] !== l) {
            const Component = o("WAWebTag.react").Tag;
            u = <Component theme={l} icon={s}>{count}</Component>;
            t[2] = count;
            t[3] = s;
            t[4] = l;
            t[5] = u;
        } else {
            u = t[5];
        }
        return u;
    }
    l.default = p;
}, 226);