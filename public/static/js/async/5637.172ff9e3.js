"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["5637"],
  {
    20052: function (e, l, t) {
      ;(t.r(l),
        t.d(l, {
          default: function () {
            return m
          },
        }),
        t(17932),
        t(96466))
      var a = t(3144),
        s = t(20211),
        n = t(10879),
        i = t(26903),
        o = t(81236),
        r = t(13974)
      let c = { key: 0 }
      var u = (0, a.pM)({
          __name: "DebugDialog",
          setup(e) {
            let l = (0, n.G)(),
              { isOpen: t, debugData: u } = (0, s.bP)(l),
              d = (0, a.EW)(() => (u.value?.data ? JSON.stringify(u.value.data, null, 2) : "")),
              v = (0, a.EW)(() => {
                let e = u.value?.data?.DEBUG?.game_info
                return e
                  ? {
                      source: e.source,
                      categories: e.categories,
                      platforms: e.platforms,
                      createdAtFormatted: new Date(e.created_at).toLocaleDateString(),
                    }
                  : null
              }),
              m = (0, a.EW)(() => {
                let e = u.value?.data?.DEBUG?.ranking_metrics
                return Array.isArray(e)
                  ? e.map((e) => ({
                      listName: e.coef_name,
                      users: e.users,
                      games: e.games,
                      adshowPerGame: (0, i.F)(e["adshow per game"], { decimals: 2 }),
                      playtimePerGame: (0, i.F)(e["playtime per game"], { decimals: 2 }),
                      crPlaygame5Min: e["CR playgame_5min"],
                      rankingSort: (0, i.F)(e.ranking_sort, { decimals: 4 }),
                      position: e.position,
                    }))
                  : []
              })
            return (e, s) => (
              (0, a.uX)(),
              (0, a.Wv)(
                r.A,
                {
                  isOpened: (0, a.R1)(t),
                  title: (0, a.R1)(u)?.title,
                  sizeMode: "full-width",
                  "data-interface-section": "debug-dialog",
                  onCloseModal: (0, a.R1)(l).closeDebugDialog,
                },
                {
                  "custom-content": (0, a.k6)(() => [
                    (0, a.bF)(
                      o.A,
                      { is: "div", size: "s", class: (0, a.C4)(e.$style.wrapper) },
                      {
                        default: (0, a.k6)(() => [
                          v.value
                            ? ((0, a.uX)(),
                              (0, a.CE)(
                                "div",
                                { key: 0, class: (0, a.C4)(e.$style.gameInfo) },
                                [
                                  (0, a.Lk)("div", null, [
                                    (0, a.Lk)(
                                      "span",
                                      { class: (0, a.C4)(e.$style.accent) },
                                      "hru – ",
                                      2,
                                    ),
                                    (0, a.eW)((0, a.v_)((0, a.R1)(u)?.hru), 1),
                                  ]),
                                  (0, a.Lk)("div", null, [
                                    (0, a.Lk)(
                                      "span",
                                      { class: (0, a.C4)(e.$style.accent) },
                                      "source – ",
                                      2,
                                    ),
                                    (0, a.eW)((0, a.v_)(v.value.source), 1),
                                  ]),
                                  (0, a.Lk)("div", null, [
                                    (0, a.Lk)(
                                      "span",
                                      { class: (0, a.C4)(e.$style.accent) },
                                      "categories – ",
                                      2,
                                    ),
                                    (0, a.eW)((0, a.v_)(v.value.categories?.join(", ")), 1),
                                  ]),
                                  (0, a.Lk)("div", null, [
                                    (0, a.Lk)(
                                      "span",
                                      { class: (0, a.C4)(e.$style.accent) },
                                      "platforms – ",
                                      2,
                                    ),
                                    (0, a.eW)((0, a.v_)(v.value.platforms?.join(", ")), 1),
                                  ]),
                                  (0, a.Lk)("div", null, [
                                    (0, a.Lk)(
                                      "span",
                                      { class: (0, a.C4)(e.$style.accent) },
                                      "created_at – ",
                                      2,
                                    ),
                                    (0, a.eW)((0, a.v_)(v.value.createdAtFormatted), 1),
                                  ]),
                                ],
                                2,
                              ))
                            : (0, a.Q3)("", !0),
                          (0, a.Lk)(
                            "div",
                            { class: (0, a.C4)(e.$style.tableWrapper) },
                            [
                              (0, a.Lk)(
                                "table",
                                { class: (0, a.C4)(e.$style.table) },
                                [
                                  s[0] ||
                                    (s[0] = (0, a.Lk)(
                                      "thead",
                                      null,
                                      [
                                        (0, a.Lk)("tr", null, [
                                          (0, a.Lk)("th", null, "Ranking List name"),
                                          (0, a.Lk)("th", null, "users"),
                                          (0, a.Lk)("th", null, "games"),
                                          (0, a.Lk)("th", null, "ad_show per game"),
                                          (0, a.Lk)("th", null, "playtime per game"),
                                          (0, a.Lk)("th", null, "CR-5min"),
                                          (0, a.Lk)("th", null, "Ranking Metric"),
                                          (0, a.Lk)("th", null, "Position"),
                                        ]),
                                      ],
                                      -1,
                                    )),
                                  (0, a.Lk)("tbody", null, [
                                    ((0, a.uX)(!0),
                                    (0, a.CE)(
                                      a.FK,
                                      null,
                                      (0, a.pI)(
                                        m.value,
                                        (e, l) => (
                                          (0, a.uX)(),
                                          (0, a.CE)("tr", { key: l }, [
                                            (0, a.Lk)("td", null, (0, a.v_)(e.listName), 1),
                                            (0, a.Lk)("td", null, (0, a.v_)(e.users), 1),
                                            (0, a.Lk)("td", null, (0, a.v_)(e.games), 1),
                                            (0, a.Lk)("td", null, (0, a.v_)(e.adshowPerGame), 1),
                                            (0, a.Lk)("td", null, (0, a.v_)(e.playtimePerGame), 1),
                                            (0, a.Lk)("td", null, (0, a.v_)(e.crPlaygame5Min), 1),
                                            (0, a.Lk)("td", null, (0, a.v_)(e.rankingSort), 1),
                                            (0, a.Lk)("td", null, (0, a.v_)(e.position), 1),
                                          ])
                                        ),
                                      ),
                                      128,
                                    )),
                                    0 === m.value.length
                                      ? ((0, a.uX)(),
                                        (0, a.CE)("tr", c, [
                                          (0, a.Lk)(
                                            "td",
                                            { colspan: 8, class: (0, a.C4)(e.$style.empty) },
                                            " No ranking data available ",
                                            2,
                                          ),
                                        ]))
                                      : (0, a.Q3)("", !0),
                                  ]),
                                ],
                                2,
                              ),
                            ],
                            2,
                          ),
                          (0, a.Lk)(
                            "details",
                            { class: (0, a.C4)(e.$style.rawBlock) },
                            [
                              s[1] || (s[1] = (0, a.Lk)("summary", null, "Raw JSON data", -1)),
                              (0, a.Lk)(
                                "pre",
                                { class: (0, a.C4)(e.$style.rawBlockBody) },
                                (0, a.v_)(d.value),
                                3,
                              ),
                            ],
                            2,
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["class"],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["isOpened", "title", "onCloseModal"],
              )
            )
          },
        }),
        d = t(97939)
      let v = {}
      v.$style = {
        wrapper: "VcOVC",
        gameInfo: "loCjo",
        gameTitle: "y_wFn",
        accent: "s2ruM",
        tableWrapper: "NPSaw",
        table: "TofRc",
        empty: "Ks_Ex",
        rawBlock: "p2hvu",
        rawBlockBody: "wPJl5",
      }
      var m = (0, d.default)(u, [["__cssModules", v]])
    },
    13974: function (e, l, t) {
      t.d(l, {
        A: function () {
          return u
        },
      })
      var a = t(3144),
        s = t(84603),
        n = t(81236)
      let i = ["src", "alt"]
      var o = (0, a.pM)({
          __name: "ModalContainer",
          props: {
            title: {},
            description: {},
            image: {},
            alt: {},
            sizeMode: { default: "normal" },
            isOpened: { type: Boolean },
            wrapperClass: {},
          },
          emits: ["closeModal"],
          setup(e, { emit: l }) {
            function t(e) {
              ;(e.preventDefault(), l("closeModal"))
            }
            function o(e) {
              e.target === e.currentTarget && t(e)
            }
            let r = (e) => {
                ;(e?.showModal(), e?.focus())
              },
              c = (0, a.KR)(0)
            function u() {
              ;((c.value = document.documentElement.scrollTop),
                requestAnimationFrame(() => {
                  ;((document.body.scrollTop = c.value), (document.documentElement.scrollTop = 1))
                }))
            }
            function d() {
              ;((document.body.scrollTop = 0), (document.documentElement.scrollTop = c.value))
            }
            return (l, c) => (
              (0, a.uX)(),
              (0, a.Wv)(
                a.eB,
                {
                  enterActiveClass: l.$style.transition_enter_active,
                  enterFromClass: l.$style.transition_enter_from,
                  leaveActiveClass: l.$style.transition_leave_active,
                  leaveToClass: l.$style.transition_leave_to,
                  appear: "",
                  onBeforeEnter: u,
                  onAfterLeave: d,
                },
                {
                  default: (0, a.k6)(() => [
                    e.isOpened
                      ? ((0, a.uX)(),
                        (0, a.CE)(
                          "dialog",
                          {
                            key: 0,
                            ref: r,
                            class: (0, a.C4)([
                              l.$style.dialog,
                              {
                                [l.$style.full_width]: "full-width" === e.sizeMode,
                                [l.$style.wide]: "wide" === e.sizeMode,
                              },
                            ]),
                            onClick: o,
                            onCancel: t,
                          },
                          [
                            (0, a.bF)(
                              s.A,
                              {
                                icon: "close",
                                color: "white-60",
                                interfaceTarget: "close",
                                class: (0, a.C4)(l.$style.close_override),
                                onClick: t,
                              },
                              null,
                              8,
                              ["class"],
                            ),
                            (0, a.Lk)(
                              "div",
                              { class: (0, a.C4)([l.$style.dialog_wrap, e.wrapperClass]) },
                              [
                                (0, a.Lk)(
                                  "div",
                                  { class: (0, a.C4)(l.$style.dialog_content) },
                                  [
                                    e.image && !l.$slots.image
                                      ? ((0, a.uX)(),
                                        (0, a.CE)(
                                          "img",
                                          {
                                            key: 0,
                                            class: (0, a.C4)(l.$style.dialog_image),
                                            src: e.image,
                                            alt: e.alt,
                                          },
                                          null,
                                          10,
                                          i,
                                        ))
                                      : (0, a.Q3)("", !0),
                                    (0, a.RG)(l.$slots, "image", {
                                      className: l.$style.dialog_image,
                                    }),
                                    e.title
                                      ? ((0, a.uX)(),
                                        (0, a.Wv)(
                                          n.A,
                                          {
                                            key: 1,
                                            type: "header",
                                            class: (0, a.C4)(l.$style.dialog_title),
                                            size: "s",
                                            responsive: !1,
                                          },
                                          {
                                            default: (0, a.k6)(() => [
                                              (0, a.eW)((0, a.v_)(e.title), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ))
                                      : (0, a.Q3)("", !0),
                                    e.description
                                      ? ((0, a.uX)(),
                                        (0, a.Wv)(
                                          n.A,
                                          {
                                            key: 2,
                                            is: "p",
                                            class: (0, a.C4)(l.$style.dialog_description),
                                            size: "s",
                                            responsive: !1,
                                          },
                                          {
                                            default: (0, a.k6)(() => [
                                              (0, a.eW)((0, a.v_)(e.description), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ))
                                      : (0, a.Q3)("", !0),
                                  ],
                                  2,
                                ),
                                (0, a.RG)(l.$slots, "custom-content"),
                                l.$slots.actions
                                  ? ((0, a.uX)(),
                                    (0, a.CE)(
                                      "div",
                                      { key: 0, class: (0, a.C4)(l.$style.dialog_actions) },
                                      [(0, a.RG)(l.$slots, "actions")],
                                      2,
                                    ))
                                  : (0, a.Q3)("", !0),
                              ],
                              2,
                            ),
                          ],
                          34,
                        ))
                      : (0, a.Q3)("", !0),
                  ]),
                  _: 3,
                },
                8,
                ["enterActiveClass", "enterFromClass", "leaveActiveClass", "leaveToClass"],
              )
            )
          },
        }),
        r = t(97939)
      let c = {}
      c.$style = {
        transition_enter_active: "AdUYT",
        transitionEnterActive: "AdUYT",
        transition_leave_active: "rgSlZ",
        transitionLeaveActive: "rgSlZ",
        dialog: "xSLjb",
        transition_enter_from: "syOVj",
        transitionEnterFrom: "syOVj",
        transition_leave_to: "DCjUe",
        transitionLeaveTo: "DCjUe",
        dialog_wrap: "hCWac",
        dialogWrap: "hCWac",
        dialog_image: "SPYOa",
        dialogImage: "SPYOa",
        dialog_content: "DgTXM",
        dialogContent: "DgTXM",
        dialog_title: "x0DlQ",
        dialogTitle: "x0DlQ",
        dialog_description: "K226r",
        dialogDescription: "K226r",
        dialog_actions: "VfGQf",
        dialogActions: "VfGQf",
        close_override: "dSDZe",
        closeOverride: "dSDZe",
        "#": "OrPfB",
        wide: "wiarz",
        full_width: "AbOWT",
        fullWidth: "AbOWT",
      }
      var u = (0, r.default)(o, [["__cssModules", c]])
    },
    10879: function (e, l, t) {
      t.d(l, {
        G: function () {
          return n
        },
      })
      var a = t(20211),
        s = t(3144)
      let n = (0, a.nY)("debug", () => {
        let e = (0, s.KR)(!1),
          l = (0, s.KR)(null)
        return {
          isOpen: e,
          debugData: l,
          setDebugData: function (t) {
            ;((l.value = t), (e.value = !0))
          },
          closeDebugDialog: function () {
            ;((e.value = !1), (l.value = null))
          },
        }
      })
    },
  },
])
//# sourceMappingURL=5637.172ff9e3.js.map
