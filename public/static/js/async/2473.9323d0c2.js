"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["2473"],
  {
    13974: function (e, t, l) {
      l.d(t, {
        A: function () {
          return d
        },
      })
      var s = l(3144),
        a = l(84603),
        o = l(81236)
      let n = ["src", "alt"]
      var i = (0, s.pM)({
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
          setup(e, { emit: t }) {
            function l(e) {
              ;(e.preventDefault(), t("closeModal"))
            }
            function i(e) {
              e.target === e.currentTarget && l(e)
            }
            let r = (e) => {
                ;(e?.showModal(), e?.focus())
              },
              c = (0, s.KR)(0)
            function d() {
              ;((c.value = document.documentElement.scrollTop),
                requestAnimationFrame(() => {
                  ;((document.body.scrollTop = c.value), (document.documentElement.scrollTop = 1))
                }))
            }
            function u() {
              ;((document.body.scrollTop = 0), (document.documentElement.scrollTop = c.value))
            }
            return (t, c) => (
              (0, s.uX)(),
              (0, s.Wv)(
                s.eB,
                {
                  enterActiveClass: t.$style.transition_enter_active,
                  enterFromClass: t.$style.transition_enter_from,
                  leaveActiveClass: t.$style.transition_leave_active,
                  leaveToClass: t.$style.transition_leave_to,
                  appear: "",
                  onBeforeEnter: d,
                  onAfterLeave: u,
                },
                {
                  default: (0, s.k6)(() => [
                    e.isOpened
                      ? ((0, s.uX)(),
                        (0, s.CE)(
                          "dialog",
                          {
                            key: 0,
                            ref: r,
                            class: (0, s.C4)([
                              t.$style.dialog,
                              {
                                [t.$style.full_width]: "full-width" === e.sizeMode,
                                [t.$style.wide]: "wide" === e.sizeMode,
                              },
                            ]),
                            onClick: i,
                            onCancel: l,
                          },
                          [
                            (0, s.bF)(
                              a.A,
                              {
                                icon: "close",
                                color: "white-60",
                                interfaceTarget: "close",
                                class: (0, s.C4)(t.$style.close_override),
                                onClick: l,
                              },
                              null,
                              8,
                              ["class"],
                            ),
                            (0, s.Lk)(
                              "div",
                              { class: (0, s.C4)([t.$style.dialog_wrap, e.wrapperClass]) },
                              [
                                (0, s.Lk)(
                                  "div",
                                  { class: (0, s.C4)(t.$style.dialog_content) },
                                  [
                                    e.image && !t.$slots.image
                                      ? ((0, s.uX)(),
                                        (0, s.CE)(
                                          "img",
                                          {
                                            key: 0,
                                            class: (0, s.C4)(t.$style.dialog_image),
                                            src: e.image,
                                            alt: e.alt,
                                          },
                                          null,
                                          10,
                                          n,
                                        ))
                                      : (0, s.Q3)("", !0),
                                    (0, s.RG)(t.$slots, "image", {
                                      className: t.$style.dialog_image,
                                    }),
                                    e.title
                                      ? ((0, s.uX)(),
                                        (0, s.Wv)(
                                          o.A,
                                          {
                                            key: 1,
                                            type: "header",
                                            class: (0, s.C4)(t.$style.dialog_title),
                                            size: "s",
                                            responsive: !1,
                                          },
                                          {
                                            default: (0, s.k6)(() => [
                                              (0, s.eW)((0, s.v_)(e.title), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ))
                                      : (0, s.Q3)("", !0),
                                    e.description
                                      ? ((0, s.uX)(),
                                        (0, s.Wv)(
                                          o.A,
                                          {
                                            key: 2,
                                            is: "p",
                                            class: (0, s.C4)(t.$style.dialog_description),
                                            size: "s",
                                            responsive: !1,
                                          },
                                          {
                                            default: (0, s.k6)(() => [
                                              (0, s.eW)((0, s.v_)(e.description), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ))
                                      : (0, s.Q3)("", !0),
                                  ],
                                  2,
                                ),
                                (0, s.RG)(t.$slots, "custom-content"),
                                t.$slots.actions
                                  ? ((0, s.uX)(),
                                    (0, s.CE)(
                                      "div",
                                      { key: 0, class: (0, s.C4)(t.$style.dialog_actions) },
                                      [(0, s.RG)(t.$slots, "actions")],
                                      2,
                                    ))
                                  : (0, s.Q3)("", !0),
                              ],
                              2,
                            ),
                          ],
                          34,
                        ))
                      : (0, s.Q3)("", !0),
                  ]),
                  _: 3,
                },
                8,
                ["enterActiveClass", "enterFromClass", "leaveActiveClass", "leaveToClass"],
              )
            )
          },
        }),
        r = l(97939)
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
      var d = (0, r.default)(i, [["__cssModules", c]])
    },
    25251: function (e, t, l) {
      ;(l.r(t),
        l.d(t, {
          default: function () {
            return $
          },
        }))
      var s = l(3144),
        a = l(20211),
        o = l(10906),
        n = l(94212),
        i = l(81236),
        r = l(35584),
        c = l(87743),
        d = l(59103),
        u = l(79316),
        p = l(22843),
        v = l(59176),
        g = l(13974),
        _ = l.p + "static/image/sign-in.a919c13d.webp"
      let m = ["src", "alt"]
      var f = (0, s.pM)({
          __name: "ModalSignIn",
          setup(e) {
            let t = (0, d.l)(),
              l = (0, c.C)(),
              f = (0, u.G)(),
              { signInModalOpened: C, signInModalOpenedSource: y } = (0, a.bP)(t),
              { isPortalEnv: $ } = (0, a.bP)(l),
              w = (0, r.q)(),
              k = (0, s.KR)(!1),
              A = (0, s.KR)(!1),
              S = (0, s.EW)(() => A.value && C.value)
            function h(e) {
              f.logEvent({ event: "custom_event", eventName: e, dimension1: y.value })
            }
            function T() {
              t.closeSignInModal()
            }
            function W() {
              ;(t.closeSignInModal(), h("auth_popup_closed"))
            }
            ;(0, s.wB)(S, () => {
              S.value && h("auth_popup_opened")
            })
            let M = (0, s.EW)(() =>
                $.value ? w("modalSignIn.title") : k.value ? void 0 : w("modalSignIn.partnerTitle"),
              ),
              b = (0, s.EW)(() =>
                $.value
                  ? w("modalSignIn.description")
                  : k.value
                    ? w("modalSignIn.storagePromptDescription")
                    : w("modalSignIn.partnerDescription"),
              )
            async function I() {
              if ((0, p.nr)() && document.requestStorageAccess)
                try {
                  ;(await document.requestStorageAccess(), (k.value = !1))
                } catch (e) {
                  ;(console.error("User denied storage access:", e),
                    (k.value = !1),
                    t.closeSignInModal())
                }
            }
            return (
              (0, s.sV)(async () => {
                ;((0, v.d4)() && (0, p.nr)() && (k.value = !(await document.hasStorageAccess())),
                  (A.value = !0))
              }),
              (e, t) => (
                (0, s.uX)(),
                (0, s.Wv)(
                  g.A,
                  { isOpened: S.value, wrapperClass: e.$style.wrapper_override, onCloseModal: W },
                  {
                    "custom-content": (0, s.k6)(() => [
                      (0, s.Lk)(
                        "div",
                        { class: (0, s.C4)(e.$style.content) },
                        [
                          (0, s.R1)($)
                            ? ((0, s.uX)(),
                              (0, s.CE)(
                                "img",
                                {
                                  key: 0,
                                  src: (0, s.R1)(_),
                                  alt: M.value,
                                  class: (0, s.C4)(e.$style.sign_in_image),
                                },
                                null,
                                10,
                                m,
                              ))
                            : (0, s.Q3)("", !0),
                          (0, s.bF)(
                            i.A,
                            { type: "header", size: "s", responsive: !1 },
                            { default: (0, s.k6)(() => [(0, s.eW)((0, s.v_)(M.value), 1)]), _: 1 },
                          ),
                          (0, s.bF)(
                            i.A,
                            {
                              is: "p",
                              size: "s",
                              class: (0, s.C4)(e.$style.description),
                              responsive: !1,
                            },
                            { default: (0, s.k6)(() => [(0, s.eW)((0, s.v_)(b.value), 1)]), _: 1 },
                            8,
                            ["class"],
                          ),
                        ],
                        2,
                      ),
                    ]),
                    actions: (0, s.k6)(() => [
                      k.value
                        ? ((0, s.uX)(),
                          (0, s.Wv)(
                            o.A,
                            {
                              key: 0,
                              color: "white-20",
                              interfaceTarget: "safari-iframe-storage-prompt",
                              class: (0, s.C4)(e.$style.storage_prompt_button_override),
                              label: e.$tr("modalSignIn.storagePromptButton"),
                              onClick: I,
                            },
                            null,
                            8,
                            ["class", "label"],
                          ))
                        : ((0, s.uX)(),
                          (0, s.Wv)(
                            n.A,
                            { key: 1, type: "full", loginSource: (0, s.R1)(y), onFinish: T },
                            null,
                            8,
                            ["loginSource"],
                          )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["isOpened", "wrapperClass"],
                )
              )
            )
          },
        }),
        C = l(97939)
      let y = {}
      y.$style = {
        wrapper_override: "edIul",
        wrapperOverride: "edIul",
        "#": "KI0qk",
        content: "g29iE",
        sign_in_image: "c1Fjo",
        signInImage: "c1Fjo",
        description: "NnSn9",
        storage_prompt_button_override: "sXBnw",
        storagePromptButtonOverride: "sXBnw",
      }
      var $ = (0, C.default)(f, [["__cssModules", y]])
    },
  },
])
//# sourceMappingURL=2473.9323d0c2.js.map
