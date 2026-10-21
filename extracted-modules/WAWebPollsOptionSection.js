__d("WAWebPollsOptionSection", [
    "fbt",
    "WAWebButton.react",
    "WAWebDrawerSection.react",
    "WAWebFlatList.react",
    "WAWebPollsOptionMetadataRow",
    "WAWebPollsVoterRow",
    "WAWebPollsVoterSectionHeader",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingInline6: {
            paddingInlineStart: "x25sj25",
            paddingInlineEnd: "x1icxu4v",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const m = {
        viewAllContainer: {
            display: "x78zum5",
            marginInlineStart: "xdln39a",
            minHeight: "x1wiwyrm",
            $$css: true
        }
    };
    const p = 5;
    const defaultItemHeight = 68;
    function f(t) {
        const n = o("react-compiler-runtime").c(30);
        const { addOptionMsg, associatedMsg, flatListController, hideVoterNames, isCorrectOption, isPollFromMe, links, messageHasSpoiler, onOpenContactInfo, onViewAllVotes, option, result, spoilerRevealContext, testid, trusted, withSectioning } = t;
        const D = hideVoterNames === undefined ? false : hideVoterNames;
        const { count, isCurrentLeader, votes } = result;
        const N = trusted === undefined ? false : trusted;
        const M = withSectioning === undefined ? false : withSectioning;
        const w = count - p;
        let votes_length = votes.length;
        if (onViewAllVotes) {
            votes_length = w === 1 ? votes.length : p;
        }
        let F;
        if (n[0] !== votes_length || n[1] !== t.result || n[2] !== M) {
            F = h(t.result, M, votes_length);
            n[0] = votes_length;
            n[1] = t.result;
            n[2] = M;
            n[3] = F;
        } else {
            F = n[3];
        }
        const O = F;
        let B;
        if (n[4] !== addOptionMsg || n[5] !== associatedMsg || n[6] !== isCorrectOption || n[7] !== isCurrentLeader || n[8] !== isPollFromMe || n[9] !== links || n[10] !== messageHasSpoiler || n[11] !== option.name || n[12] !== spoilerRevealContext || n[13] !== N || n[14] !== count) {
            B = c.jsx(r("WAWebPollsOptionMetadataRow"), {
                addOptionMsg,
                associatedMsg,
                name: option.name,
                isCurrentLeader,
                voteCount: count,
                isPollFromMe,
                messageHasSpoiler,
                spoilerRevealContext,
                links,
                trusted: N,
                isCorrectOption
            });
            n[4] = addOptionMsg;
            n[5] = associatedMsg;
            n[6] = isCorrectOption;
            n[7] = isCurrentLeader;
            n[8] = isPollFromMe;
            n[9] = links;
            n[10] = messageHasSpoiler;
            n[11] = option.name;
            n[12] = spoilerRevealContext;
            n[13] = N;
            n[14] = count;
            n[15] = B;
        } else {
            B = n[15];
        }
        let W;
        if (n[16] !== flatListController || n[17] !== D || n[18] !== votes_length || n[19] !== onOpenContactInfo || n[20] !== onViewAllVotes || n[21] !== t.mode || n[22] !== w || n[23] !== count || n[24] !== O) {
            const Component = o("WAWebButton.react").WAWebButtonSimplified;
            W = !D && O.length > 0 && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                    c.jsx(o("WAWebFlatList.react").FlatList, {
                        flatListController,
                        direction: "vertical",
                        data: O,
                        renderItem: function(t) {
                            return y(t, onOpenContactInfo);
                        },
                        defaultItemHeight,
                        reorderAnimationsEnabled: false
                    }),
                    count > p && onViewAllVotes != null && votes_length < count && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.viewAllContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop8, o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, d.paddingInline6), {
                        children: <Component onClick={function(t) {
                            onViewAllVotes();
                        }} shadowOnHover={false}>{t.mode === "e2ee" ? s._("_j{\"*\":\"See all ({leftover_votes_details_view} more)\",\"_1\":\"See all (1 more)\"}", [
                            s._plural(w, "leftover_votes_details_view")
                        ]) : s._("See more")}</Component>
                    })}/>
                ]
            })}/>;
            n[16] = flatListController;
            n[17] = D;
            n[18] = votes_length;
            n[19] = onOpenContactInfo;
            n[20] = onViewAllVotes;
            n[21] = t.mode;
            n[22] = w;
            n[23] = count;
            n[24] = O;
            n[25] = W;
        } else {
            W = n[25];
        }
        let q;
        if (n[26] !== B || n[27] !== W || n[28] !== testid) {
            const Component = r("WAWebDrawerSection.react");
            q = <Component theme="no-padding" testid={testid}>{B}{W}</Component>;
            n[26] = B;
            n[27] = W;
            n[28] = testid;
            n[29] = q;
        } else {
            q = n[29];
        }
        return q;
    }
    function g(vote) {
        return {
            itemKey: vote.id.toString(),
            vote,
            kind: "vote"
        };
    }
    function h(result, t, votes_length) {
        if (t && result.mode === "newsletter") {
            const { contactVoters, otherVoters } = result;
            const i = contactVoters.map(g);
            let l = 0;
            if (i.length > 0 && otherVoters.length > 0) {
                i.unshift(o("WAWebPollsVoterSectionHeader").ContactSection);
                i.push(o("WAWebPollsVoterSectionHeader").OthersSection);
                l = 2;
            }
            i.push(...otherVoters.map(g));
            return i.slice(0, votes_length + l);
        }
        return result.votes.slice(0, votes_length).map(g);
    }
    function y(e, onOpenContactInfo) {
        const Component = r("WAWebPollsVoterRow");
        switch(e.kind){
            case "vote":
                return <Component vote={e.vote} onOpenContactInfo={onOpenContactInfo}/>;
            case "section":
                return c.jsx(o("WAWebPollsVoterSectionHeader").PollsVoterSectionHeader, {
                    sectionType: e.section
                });
        }
    }
    l.default = f;
}, 226);