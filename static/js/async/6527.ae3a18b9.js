"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["6527"],
  {
    14482: function (e, l, t) {
      ;(t.r(l),
        t.d(l, {
          default: function () {
            return C
          },
        }))
      var a = t(3144),
        s = t(20211),
        o = t(10906),
        n = t(84603),
        i = t(98289),
        r = t(81236),
        c = t(97178),
        _ = t(35584),
        v = t(59103),
        d = t(79316),
        p = t(43719),
        u = t(43088),
        y = (0, a.pM)({
          __name: "ModalInstallGooglePlay",
          setup(e) {
            let l = (0, v.l)(),
              t = (0, d.G)(),
              y = (0, p.L)(),
              { VUE_APP_ANDROID_APP_URL: g } = (0, c.U)(),
              { installGooglePlayModalOpened: b } = (0, s.bP)(l),
              C = (0, _.q)(),
              m = (0, u.a)(),
              k = (0, a.EW)(() => m.value && b.value)
            function f() {
              y.remove("install-google-play-modal")
            }
            function $() {
              ;(t.logEvent({ event: "custom_event", eventName: "google_play_install_clicked" }),
                window.open(g, "_blank"),
                y.remove("install-google-play-modal"))
            }
            return (e, l) => (
              (0, a.uX)(),
              (0, a.Wv)(
                a.eB,
                {
                  enterActiveClass: e.$style.transition_enter_active,
                  enterFromClass: e.$style.transition_enter_from,
                  leaveActiveClass: e.$style.transition_leave_active,
                  leaveToClass: e.$style.transition_leave_to,
                  appear: "",
                },
                {
                  default: (0, a.k6)(() => [
                    k.value
                      ? ((0, a.uX)(),
                        (0, a.CE)(
                          "div",
                          { key: 0, class: (0, a.C4)(e.$style.dialog) },
                          [
                            (0, a.Lk)(
                              "div",
                              { class: (0, a.C4)(e.$style.dialog_wrap) },
                              [
                                (0, a.Lk)(
                                  "div",
                                  { class: (0, a.C4)(e.$style.row) },
                                  [
                                    (0, a.bF)(
                                      n.A,
                                      {
                                        class: (0, a.C4)(e.$style.close_btn_override),
                                        icon: "close",
                                        color: "lavander-300",
                                        interfaceTarget: "close",
                                        onClick: f,
                                      },
                                      null,
                                      8,
                                      ["class"],
                                    ),
                                    (0, a.Lk)(
                                      "div",
                                      { class: (0, a.C4)(e.$style.icon_container) },
                                      [
                                        (0, a.bF)(
                                          i.A,
                                          {
                                            name: "playgama-app",
                                            class: (0, a.C4)(e.$style.google_play_icon),
                                          },
                                          null,
                                          8,
                                          ["class"],
                                        ),
                                      ],
                                      2,
                                    ),
                                    (0, a.Lk)(
                                      "div",
                                      { class: (0, a.C4)(e.$style.column) },
                                      [
                                        (0, a.bF)(
                                          r.A,
                                          {
                                            type: "label",
                                            size: "s",
                                            class: (0, a.C4)(e.$style.title),
                                            responsive: !0,
                                            semibold: "",
                                          },
                                          {
                                            default: (0, a.k6)(() => [
                                              (0, a.eW)(
                                                (0, a.v_)(
                                                  (0, a.R1)(C)("modalInstallGooglePlay.title"),
                                                ),
                                                1,
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ),
                                        (0, a.bF)(
                                          r.A,
                                          {
                                            type: "label",
                                            size: "xs",
                                            class: (0, a.C4)(e.$style.description),
                                            responsive: !0,
                                          },
                                          {
                                            default: (0, a.k6)(() => [
                                              (0, a.eW)(
                                                (0, a.v_)(
                                                  (0, a.R1)(C)(
                                                    "modalInstallGooglePlay.description",
                                                  ),
                                                ),
                                                1,
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ),
                                      ],
                                      2,
                                    ),
                                    (0, a.bF)(
                                      o.A,
                                      {
                                        class: (0, a.C4)(e.$style.action_btn_override),
                                        color: "purple-400",
                                        label: (0, a.R1)(C)("modalInstallGooglePlay.installButton"),
                                        interfaceTarget: "google-play-install-button",
                                        onClick: $,
                                      },
                                      null,
                                      8,
                                      ["class", "label"],
                                    ),
                                  ],
                                  2,
                                ),
                              ],
                              2,
                            ),
                          ],
                          2,
                        ))
                      : (0, a.Q3)("", !0),
                  ]),
                  _: 1,
                },
                8,
                ["enterActiveClass", "enterFromClass", "leaveActiveClass", "leaveToClass"],
              )
            )
          },
        }),
        g = t(97939)
      let b = {}
      b.$style = {
        transition_enter_active: "a5p5M",
        transitionEnterActive: "a5p5M",
        transition_leave_active: "O9QtR",
        transitionLeaveActive: "O9QtR",
        dialog: "xVGnZ",
        dialog_wrap: "BvMg_",
        dialogWrap: "BvMg_",
        row: "LGMcY",
        column: "Cl1KO",
        close_btn_override: "HkV_s",
        closeBtnOverride: "HkV_s",
        "#": "ZvJML",
        icon_container: "bVGDT",
        iconContainer: "bVGDT",
        google_play_icon: "eUi3b",
        googlePlayIcon: "eUi3b",
        title: "JQYKU",
        description: "PI_hU",
        action_btn_override: "Nt0XO",
        actionBtnOverride: "Nt0XO",
        transition_enter_from: "USXbX",
        transitionEnterFrom: "USXbX",
        transition_leave_to: "PaiqG",
        transitionLeaveTo: "PaiqG",
      }
      var C = (0, g.default)(y, [["__cssModules", b]])
    },
  },
])
//# sourceMappingURL=6527.ae3a18b9.js.map
