"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["644"],
  {
    88241: function (e, t, a) {
      a.d(t, {
        A: function () {
          return p
        },
      })
      var l = a(3144),
        r = a.p + "static/image/gold-coin-large.0d775625.webp",
        s = a.p + "static/image/gold-coin-small.9180d233.webp",
        n = a.p + "static/image/silver-coin-large.b78bedd8.webp",
        o = a.p + "static/image/silver-coin-small.fbd4492a.webp"
      let i = ["src", "alt"]
      var u = (0, l.pM)({
          __name: "Coin",
          props: { size: {}, variant: {} },
          setup(e) {
            let t = (0, l.EW)(() =>
              "gold" === e.variant ? ("large" === e.size ? r : s) : "large" === e.size ? n : o,
            )
            return (a, r) => (
              (0, l.uX)(),
              (0, l.CE)(
                "img",
                {
                  src: t.value,
                  alt: `${e.variant} coin`,
                  loading: "lazy",
                  class: (0, l.C4)("small" === e.size ? a.$style.small : a.$style.large),
                },
                null,
                10,
                i,
              )
            )
          },
        }),
        c = a(97939)
      let d = {}
      d.$style = { small: "opArh", large: "kJcYg" }
      var p = (0, c.default)(u, [["__cssModules", d]])
    },
    13974: function (e, t, a) {
      a.d(t, {
        A: function () {
          return c
        },
      })
      var l = a(3144),
        r = a(84603),
        s = a(81236)
      let n = ["src", "alt"]
      var o = (0, l.pM)({
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
            function a(e) {
              ;(e.preventDefault(), t("closeModal"))
            }
            function o(e) {
              e.target === e.currentTarget && a(e)
            }
            let i = (e) => {
                ;(e?.showModal(), e?.focus())
              },
              u = (0, l.KR)(0)
            function c() {
              ;((u.value = document.documentElement.scrollTop),
                requestAnimationFrame(() => {
                  ;((document.body.scrollTop = u.value), (document.documentElement.scrollTop = 1))
                }))
            }
            function d() {
              ;((document.body.scrollTop = 0), (document.documentElement.scrollTop = u.value))
            }
            return (t, u) => (
              (0, l.uX)(),
              (0, l.Wv)(
                l.eB,
                {
                  enterActiveClass: t.$style.transition_enter_active,
                  enterFromClass: t.$style.transition_enter_from,
                  leaveActiveClass: t.$style.transition_leave_active,
                  leaveToClass: t.$style.transition_leave_to,
                  appear: "",
                  onBeforeEnter: c,
                  onAfterLeave: d,
                },
                {
                  default: (0, l.k6)(() => [
                    e.isOpened
                      ? ((0, l.uX)(),
                        (0, l.CE)(
                          "dialog",
                          {
                            key: 0,
                            ref: i,
                            class: (0, l.C4)([
                              t.$style.dialog,
                              {
                                [t.$style.full_width]: "full-width" === e.sizeMode,
                                [t.$style.wide]: "wide" === e.sizeMode,
                              },
                            ]),
                            onClick: o,
                            onCancel: a,
                          },
                          [
                            (0, l.bF)(
                              r.A,
                              {
                                icon: "close",
                                color: "white-60",
                                interfaceTarget: "close",
                                class: (0, l.C4)(t.$style.close_override),
                                onClick: a,
                              },
                              null,
                              8,
                              ["class"],
                            ),
                            (0, l.Lk)(
                              "div",
                              { class: (0, l.C4)([t.$style.dialog_wrap, e.wrapperClass]) },
                              [
                                (0, l.Lk)(
                                  "div",
                                  { class: (0, l.C4)(t.$style.dialog_content) },
                                  [
                                    e.image && !t.$slots.image
                                      ? ((0, l.uX)(),
                                        (0, l.CE)(
                                          "img",
                                          {
                                            key: 0,
                                            class: (0, l.C4)(t.$style.dialog_image),
                                            src: e.image,
                                            alt: e.alt,
                                          },
                                          null,
                                          10,
                                          n,
                                        ))
                                      : (0, l.Q3)("", !0),
                                    (0, l.RG)(t.$slots, "image", {
                                      className: t.$style.dialog_image,
                                    }),
                                    e.title
                                      ? ((0, l.uX)(),
                                        (0, l.Wv)(
                                          s.A,
                                          {
                                            key: 1,
                                            type: "header",
                                            class: (0, l.C4)(t.$style.dialog_title),
                                            size: "s",
                                            responsive: !1,
                                          },
                                          {
                                            default: (0, l.k6)(() => [
                                              (0, l.eW)((0, l.v_)(e.title), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ))
                                      : (0, l.Q3)("", !0),
                                    e.description
                                      ? ((0, l.uX)(),
                                        (0, l.Wv)(
                                          s.A,
                                          {
                                            key: 2,
                                            is: "p",
                                            class: (0, l.C4)(t.$style.dialog_description),
                                            size: "s",
                                            responsive: !1,
                                          },
                                          {
                                            default: (0, l.k6)(() => [
                                              (0, l.eW)((0, l.v_)(e.description), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ))
                                      : (0, l.Q3)("", !0),
                                  ],
                                  2,
                                ),
                                (0, l.RG)(t.$slots, "custom-content"),
                                t.$slots.actions
                                  ? ((0, l.uX)(),
                                    (0, l.CE)(
                                      "div",
                                      { key: 0, class: (0, l.C4)(t.$style.dialog_actions) },
                                      [(0, l.RG)(t.$slots, "actions")],
                                      2,
                                    ))
                                  : (0, l.Q3)("", !0),
                              ],
                              2,
                            ),
                          ],
                          34,
                        ))
                      : (0, l.Q3)("", !0),
                  ]),
                  _: 3,
                },
                8,
                ["enterActiveClass", "enterFromClass", "leaveActiveClass", "leaveToClass"],
              )
            )
          },
        }),
        i = a(97939)
      let u = {}
      u.$style = {
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
      var c = (0, i.default)(o, [["__cssModules", u]])
    },
    5052: function (e, t, a) {
      ;(a.r(t),
        a.d(t, {
          default: function () {
            return eh
          },
        }))
      var l,
        r = a(3144),
        s = a(83827),
        n = a(20211),
        o = a(76915),
        i = a(10906),
        u = a(97178),
        c = a(17637),
        d = a(86037),
        p = a(87743),
        v = a(59103),
        m = a(79316),
        y = a(92730),
        f = a(47006),
        b = a(13974),
        _ = a(88241),
        g = a(81236),
        h = (0, r.pM)({
          __name: "BalanceBlock",
          props: { balance: {}, bottom: { type: Boolean } },
          setup: (e) => (t, a) => (
            (0, r.uX)(),
            (0, r.CE)(
              "div",
              { class: (0, r.C4)([t.$style.wrapper, { [t.$style.bottom]: e.bottom }]) },
              [
                (0, r.bF)(
                  g.A,
                  {
                    is: "div",
                    type: "caption",
                    size: "all-caps",
                    class: (0, r.C4)(t.$style.balance),
                    responsive: !1,
                  },
                  {
                    default: (0, r.k6)(() => [
                      (0, r.eW)((0, r.v_)(t.$tr("paymentModal.balanceLabel")), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"],
                ),
                (0, r.bF)(
                  g.A,
                  { is: "div", type: "label", size: "m", accent: "", responsive: !1 },
                  {
                    default: (0, r.k6)(() => [
                      (0, r.bF)(
                        _.A,
                        {
                          variant: "gold",
                          size: "small",
                          class: (0, r.C4)(t.$style.coin_override),
                        },
                        null,
                        8,
                        ["class"],
                      ),
                      (0, r.eW)(" " + (0, r.v_)(`${e.balance} Gam`), 1),
                    ]),
                    _: 1,
                  },
                ),
              ],
              2,
            )
          ),
        }),
        k = a(97939)
      let w = {}
      w.$style = {
        wrapper: "WpIYW",
        balance: "g_J7N",
        coin_override: "zAAAO",
        coinOverride: "zAAAO",
        "#": "YPpOY",
        bottom: "Ey38c",
      }
      let C = (0, k.default)(h, [["__cssModules", w]])
      var $ = a(35584),
        E = a.p + "static/image/no-ads.50560c3b.webp",
        S = (0, r.pM)({
          __name: "PurchaseInfo",
          props: { title: {}, subtitle: {} },
          setup: (e) => (e, t) => (
            (0, r.uX)(),
            (0, r.CE)(
              "div",
              { class: (0, r.C4)(e.$style.purchase) },
              [
                e.subtitle
                  ? ((0, r.uX)(),
                    (0, r.CE)(
                      "div",
                      { key: 0, class: (0, r.C4)(e.$style.with_subtitle) },
                      [
                        (0, r.bF)(
                          g.A,
                          { type: "label", size: "m", responsive: !1 },
                          { default: (0, r.k6)(() => [(0, r.eW)((0, r.v_)(e.title), 1)]), _: 1 },
                        ),
                        (0, r.bF)(
                          g.A,
                          {
                            class: (0, r.C4)(e.$style.subtitle),
                            type: "label",
                            size: "xs",
                            responsive: !1,
                          },
                          { default: (0, r.k6)(() => [(0, r.eW)((0, r.v_)(e.subtitle), 1)]), _: 1 },
                          8,
                          ["class"],
                        ),
                      ],
                      2,
                    ))
                  : ((0, r.uX)(),
                    (0, r.Wv)(
                      g.A,
                      { key: 1, type: "label", size: "m" },
                      { default: (0, r.k6)(() => [(0, r.eW)((0, r.v_)(e.title), 1)]), _: 1 },
                    )),
              ],
              2,
            )
          ),
        })
      let M = {}
      M.$style = {
        purchase: "UI4Sk",
        with_subtitle: "FXp2b",
        withSubtitle: "FXp2b",
        subtitle: "uNIVg",
      }
      let A = (0, k.default)(S, [["__cssModules", M]]),
        L = ["src"],
        W = ["innerHTML"]
      var T = (0, r.pM)({
        __name: "DisableAdOrderBlock",
        props: { order: {}, balance: {}, showPayment: { type: Boolean } },
        setup(e) {
          let t = (0, $.q)(),
            a = (0, d.a)(),
            l = (0, r.EW)(() => a.pricesConfig.basic[e.order.durationInDays]),
            s = (0, r.EW)(() =>
              e.order.isTopUp ? t("disabledAd.subtitleExtend") : t("disabledAd.subtitle"),
            )
          return (e, t) => (
            (0, r.uX)(),
            (0, r.CE)(
              "div",
              { class: (0, r.C4)(e.$style.wrapper) },
              [
                (0, r.Lk)("div", null, [
                  (0, r.Lk)(
                    "img",
                    { src: (0, r.R1)(E), class: (0, r.C4)(e.$style.order_icon) },
                    null,
                    10,
                    L,
                  ),
                  (0, r.bF)(
                    g.A,
                    { is: "div", type: "header", size: "s" },
                    {
                      default: (0, r.k6)(() => [
                        (0, r.eW)((0, r.v_)(e.$tr("disabledAd.title")), 1),
                      ]),
                      _: 1,
                    },
                  ),
                  (0, r.bF)(
                    g.A,
                    {
                      is: "div",
                      type: "paragraph",
                      size: "xs",
                      class: (0, r.C4)(e.$style.subtitle),
                    },
                    {
                      default: (0, r.k6)(() => [
                        (0, r.Lk)("span", { innerHTML: s.value }, null, 8, W),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"],
                  ),
                ]),
                (0, r.bF)(
                  A,
                  {
                    title: e.$tr("disabledAd.duration", e.order.durationInDays),
                    subtitle: e.$tr("disabledAd.priceInGam", { price: l.value.toString() }),
                  },
                  null,
                  8,
                  ["title", "subtitle"],
                ),
                e.balance > 0 && e.showPayment
                  ? ((0, r.uX)(),
                    (0, r.Wv)(
                      g.A,
                      {
                        key: 0,
                        is: "div",
                        type: "paragraph",
                        size: "xs",
                        class: (0, r.C4)(e.$style.subtitle),
                      },
                      {
                        default: (0, r.k6)(() => [
                          (0, r.eW)(
                            (0, r.v_)(
                              e.$tr("paymentModal.paymentExplanation", {
                                balance: e.balance.toString(),
                              }),
                            ),
                            1,
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["class"],
                    ))
                  : (0, r.Q3)("", !0),
              ],
              2,
            )
          )
        },
      })
      let X = {}
      X.$style = { order_icon: "SIbFp", orderIcon: "SIbFp", subtitle: "JXNUB", wrapper: "bFBUk" }
      let P = (0, k.default)(T, [["__cssModules", X]]),
        x = ["src"]
      var F = (0, r.pM)({
        __name: "OrderBlock",
        props: { order: {}, amount: {}, balance: {}, showPayment: { type: Boolean } },
        setup: (e) => (e, t) => (
          (0, r.uX)(),
          (0, r.CE)("div", null, [
            (0, r.Lk)("div", null, [
              e.order.photoUrl
                ? ((0, r.uX)(),
                  (0, r.CE)(
                    "img",
                    { key: 0, src: e.order.photoUrl, class: (0, r.C4)(e.$style.order_icon) },
                    null,
                    10,
                    x,
                  ))
                : (0, r.Q3)("", !0),
              (0, r.bF)(
                g.A,
                { is: "div", type: "header", size: "s" },
                {
                  default: (0, r.k6)(() => [
                    (0, r.eW)(
                      (0, r.v_)(
                        e.order.description
                          ? e.$tr("paymentModal.orderHeaderDescription", {
                              description: e.order.description,
                              amount: e.order.amount.toString(),
                            })
                          : e.$tr("paymentModal.orderHeader", {
                              game: e.order.gameTitle,
                              amount: e.order.amount.toString(),
                            }),
                      ),
                      1,
                    ),
                  ]),
                  _: 1,
                },
              ),
              e.order.subtitle
                ? ((0, r.uX)(),
                  (0, r.Wv)(
                    g.A,
                    {
                      key: 1,
                      is: "div",
                      type: "paragraph",
                      size: "xs",
                      class: (0, r.C4)(e.$style.subtitle),
                    },
                    { default: (0, r.k6)(() => [(0, r.eW)((0, r.v_)(e.order.subtitle), 1)]), _: 1 },
                    8,
                    ["class"],
                  ))
                : (0, r.Q3)("", !0),
            ]),
            e.showPayment
              ? ((0, r.uX)(),
                (0, r.Wv)(
                  A,
                  { key: 0, title: e.$tr("paymentModal.buyGam", { amount: e.amount.toString() }) },
                  null,
                  8,
                  ["title"],
                ))
              : (0, r.Q3)("", !0),
            e.balance > 0 && e.showPayment
              ? ((0, r.uX)(),
                (0, r.Wv)(
                  g.A,
                  {
                    key: 1,
                    is: "div",
                    type: "paragraph",
                    size: "xs",
                    class: (0, r.C4)(e.$style.subtitle),
                  },
                  {
                    default: (0, r.k6)(() => [
                      (0, r.eW)(
                        (0, r.v_)(
                          e.$tr("paymentModal.paymentExplanation", {
                            balance: e.balance.toString(),
                          }),
                        ),
                        1,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"],
                ))
              : (0, r.Q3)("", !0),
          ])
        ),
      })
      let R = {}
      R.$style = { order_icon: "_S0ua", orderIcon: "_S0ua", subtitle: "FE0BN" }
      let O = (0, k.default)(F, [["__cssModules", R]])
      function z(e) {
        return (z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      var Q = "clover",
        U = "https://js.stripe.com",
        j = "".concat(U, "/").concat(Q, "/stripe.js"),
        B = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        I = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
        D =
          "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        N = function () {
          for (
            var e = document.querySelectorAll('script[src^="'.concat(U, '"]')), t = 0;
            t < e.length;
            t++
          ) {
            var a,
              l = e[t]
            if (((a = l.src), B.test(a) || I.test(a))) return l
          }
          return null
        },
        V = function (e) {
          var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            a = document.createElement("script")
          a.src = "".concat(j).concat(t)
          var l = document.head || document.body
          if (!l)
            throw Error(
              "Expected document.body not to be null. Stripe.js requires a <body> element.",
            )
          return (l.appendChild(a), a)
        },
        q = function (e, t) {
          e &&
            e._registerWrapper &&
            e._registerWrapper({ name: "stripe-js", version: "8.5.2", startTime: t })
        },
        K = null,
        G = null,
        H = null,
        J = function (e, t, a) {
          if (null === e) return null
          var l,
            r = t[0].match(/^pk_test/),
            s = 3 === (l = e.version) ? "v3" : l
          r &&
            s !== Q &&
            console.warn(
              "Stripe.js@"
                .concat(s, " was loaded on the page, but @stripe/stripe-js@")
                .concat("8.5.2", " expected Stripe.js@")
                .concat(
                  Q,
                  ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning",
                ),
            )
          var n = e.apply(void 0, t)
          return (q(n, a), n)
        },
        Y = function (e) {
          var t =
            "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
              JSON.stringify(e),
              "\n",
            )
          if (null === e || "object" !== z(e)) throw Error(t)
          if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e
          throw Error(t)
        },
        Z = !1,
        ee = function () {
          for (var e, t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r]
          Z = !0
          var s = Date.now()
          return ((e = l),
          null !== K
            ? K
            : (K = new Promise(function (t, a) {
                if ("u" < typeof window || "u" < typeof document) return void t(null)
                if ((window.Stripe && e && console.warn(D), window.Stripe))
                  return void t(window.Stripe)
                try {
                  var l,
                    r = N()
                  ;(r && e
                    ? console.warn(D)
                    : r
                      ? r &&
                        null !== H &&
                        null !== G &&
                        (r.removeEventListener("load", H),
                        r.removeEventListener("error", G),
                        null == (l = r.parentNode) || l.removeChild(r),
                        (r = V(e)))
                      : (r = V(e)),
                    (H = function () {
                      window.Stripe ? t(window.Stripe) : a(Error("Stripe.js not available"))
                    }),
                    (G = function (e) {
                      a(Error("Failed to load Stripe.js", { cause: e }))
                    }),
                    r.addEventListener("load", H),
                    r.addEventListener("error", G))
                } catch (e) {
                  a(e)
                  return
                }
              })).catch(function (e) {
                return ((K = null), Promise.reject(e))
              })).then(function (e) {
            return J(e, a, s)
          })
        }
      ee.setLoadParameters = function (e) {
        if (
          !(
            Z &&
            l &&
            Object.keys(Y(e)).reduce(function (t, a) {
              var r
              return t && e[a] === (null == (r = l) ? void 0 : r[a])
            }, !0)
          )
        ) {
          if (Z) throw Error("You cannot change load parameters after calling loadStripe")
          l = Y(e)
        }
      }
      var et = a.p + "static/svg/stripe-white.ce71c1fa.svg"
      let ea = ["src"]
      var el = (0, r.pM)({
        __name: "StripeForm",
        props: { amount: {}, buttonLabel: {}, processingLabel: {} },
        emits: ["paymentSuccess", "paymentFailed"],
        setup(e, { emit: t }) {
          let { VUE_APP_STRIPE_PUBLISHABLE_KEY: a } = (0, u.U)(),
            l = {
              gamAmount: 0,
              subtotal: 0,
              total: 0,
              currency: void 0,
              country: void 0,
              tax: void 0,
              taxDescription: void 0,
            },
            n = (0, f.M1)(),
            o = (0, $.q)(),
            c = (0, r.KR)(),
            d = (0, r.KR)(),
            p = (0, r.KR)(null),
            v = (0, r.KR)(null),
            m = (0, r.KR)(null),
            b = (0, r.KR)(l),
            _ = (0, r.KR)(!1),
            g = (0, r.KR)(""),
            h = (0, r.KR)(""),
            { getUser: k } = (0, y.k)(),
            w = (0, r.EW)(() => !!(p.value && v.value)),
            C = (0, r.EW)(() => e.amount && w.value && !_.value && !X.value),
            E = (0, r.EW)(() => {
              let t = e.processingLabel ?? String(o("paymentModal.processing")),
                a = e.buttonLabel ?? String(o("paymentModal.payNow"))
              return _.value ? t : a
            }),
            S = (0, r.EW)(() => {
              try {
                return new Intl.NumberFormat(void 0, {
                  style: "currency",
                  currency: (b.value.currency || "USD").toUpperCase(),
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              } catch (e) {
                return (console.error("Failed to create currency formatter", e), null)
              }
            }),
            M = (e) => {
              if (void 0 === e || Number.isNaN(e)) return "—"
              let t = S.value
              if (t) return t.format(e / 100)
              let a = (b.value.currency || "usd").toUpperCase()
              return `${e.toFixed(2)} ${a}`
            },
            A = (0, r.EW)(() => M(b.value.subtotal)),
            L = (0, r.EW)(() => M(b.value.tax)),
            W = (0, r.EW)(() => M(b.value.total)),
            T = (0, r.EW)(() => (e.amount ? `${e.amount} Gam` : "")),
            X = (0, r.EW)(() => e.amount !== b.value.gamAmount),
            P = (0, r.EW)(() => !X.value && "number" == typeof b.value.tax),
            x = (0, r.EW)(() => b.value.taxDescription || o("paymentModal.checkoutTax")),
            F = async () => (p.value || (p.value = await ee(a || "")), p.value),
            R = async () => {
              let e = await F(),
                a = e?.elements() ?? null
              if (e && a && c.value && d.value) {
                ;(v.value?.unmount(),
                  m.value?.unmount(),
                  (v.value = a.create("card", {
                    style: {
                      base: {
                        color: "#ffffff",
                        fontSize: "16px",
                        "::placeholder": { color: "#A0A0B2" },
                      },
                      invalid: { color: "#ff6b6b" },
                    },
                  })),
                  v.value.mount(c.value))
                let l = e.paymentRequest({
                  country: b.value.country || "US",
                  currency: b.value.currency || "usd",
                  total: { label: "Gam", amount: b.value.total },
                  requestPayerName: !0,
                })
                if (
                  ((m.value = a.create("paymentRequestButton", { paymentRequest: l })),
                  !(await l.canMakePayment()))
                )
                  return
                ;(m.value.mount(d.value),
                  l.on("paymentmethod", async (a) => {
                    let l = await z(b.value.gamAmount),
                      { paymentIntent: r, error: s } = await e.confirmCardPayment(
                        l,
                        { payment_method: a.paymentMethod.id },
                        { handleActions: !1 },
                      )
                    if (s) a.complete("fail")
                    else {
                      if ((a.complete("success"), "requires_action" === r.status)) {
                        let { error: t } = await e.confirmCardPayment(l)
                        if (t) {
                          g.value = String(t.message || t)
                          return
                        }
                      }
                      t("paymentSuccess")
                    }
                  }))
              }
            },
            O = (0, s.Q0)(async (e) => {
              try {
                let t = await n.request(`/api/v1/in-game-payments/gamPrice?amount=${e}`)
                if (t.data) {
                  ;((b.value = t.data), R())
                  return
                }
                b.value = l
              } catch (e) {
                ;((b.value = l), console.error("Failed to fetch Gam price", e))
              }
            }, 200)
          async function z(e) {
            try {
              g.value = ""
              let t = await n.request("/api/v1/in-game-payments/createStripeToken", {
                method: "POST",
                body: JSON.stringify({ amount: e }),
              })
              if (t.errors.length > 0 || !t.data)
                throw t.errors.length
                  ? Error(t.errors.join(", "))
                  : Error(String(o("paymentModal.clientSecretMissing")))
              return t.data
            } catch (e) {
              throw ((g.value = e?.message ?? String(e)), e)
            }
          }
          async function Q() {
            let e = await F(),
              a = await k()
            if (e && v.value)
              try {
                ;((_.value = !0), (g.value = ""), (h.value = ""))
                let l = await z(b.value.gamAmount),
                  r = await e.confirmCardPayment(l, {
                    payment_method: { card: v.value, billing_details: { email: a?.email } },
                  })
                if (r.error) throw r.error
                ;((h.value = String(o("paymentModal.paymentSuccessful"))), t("paymentSuccess"))
              } catch (e) {
                ;((g.value = e?.message ?? String(e)), t("paymentFailed", e))
              } finally {
                _.value = !1
              }
          }
          return (
            (0, r.wB)(
              () => e.amount,
              (e) => {
                if (!e) {
                  b.value = l
                  return
                }
                O(e)
              },
            ),
            (0, r.xo)(() => {
              ;(v.value?.unmount(), m.value?.unmount())
            }),
            (e, t) => (
              (0, r.uX)(),
              (0, r.CE)(
                "form",
                { class: (0, r.C4)(e.$style.form), onSubmit: (0, r.D$)(Q, ["prevent"]) },
                [
                  (0, r.Lk)(
                    "div",
                    { class: (0, r.C4)(e.$style.inputGroup) },
                    [
                      (0, r.Lk)(
                        "div",
                        { class: (0, r.C4)(e.$style.checkoutInfo) },
                        [
                          X.value
                            ? ((0, r.uX)(),
                              (0, r.CE)(
                                "div",
                                { key: 1, class: (0, r.C4)(e.$style.checkoutLoader) },
                                [
                                  (0, r.Lk)(
                                    "span",
                                    { class: (0, r.C4)(e.$style.spinner) },
                                    null,
                                    2,
                                  ),
                                ],
                                2,
                              ))
                            : ((0, r.uX)(),
                              (0, r.CE)(
                                r.FK,
                                { key: 0 },
                                [
                                  (0, r.Lk)(
                                    "div",
                                    { class: (0, r.C4)(e.$style.checkoutRow) },
                                    [
                                      (0, r.Lk)("div", null, [
                                        (0, r.Lk)(
                                          "span",
                                          { class: (0, r.C4)(e.$style.checkoutLabel) },
                                          (0, r.v_)((0, r.R1)(o)("paymentModal.checkoutSubtotal")),
                                          3,
                                        ),
                                        T.value
                                          ? ((0, r.uX)(),
                                            (0, r.CE)(
                                              "span",
                                              {
                                                key: 0,
                                                class: (0, r.C4)(e.$style.checkoutLabelNote),
                                              },
                                              " • " + (0, r.v_)(T.value),
                                              3,
                                            ))
                                          : (0, r.Q3)("", !0),
                                      ]),
                                      (0, r.Lk)(
                                        "span",
                                        { class: (0, r.C4)(e.$style.checkoutValue) },
                                        (0, r.v_)(A.value),
                                        3,
                                      ),
                                    ],
                                    2,
                                  ),
                                  P.value
                                    ? ((0, r.uX)(),
                                      (0, r.CE)(
                                        "div",
                                        { key: 0, class: (0, r.C4)(e.$style.checkoutRow) },
                                        [
                                          (0, r.Lk)(
                                            "span",
                                            { class: (0, r.C4)(e.$style.checkoutLabel) },
                                            (0, r.v_)(x.value),
                                            3,
                                          ),
                                          (0, r.Lk)(
                                            "span",
                                            { class: (0, r.C4)(e.$style.checkoutValue) },
                                            (0, r.v_)(L.value),
                                            3,
                                          ),
                                        ],
                                        2,
                                      ))
                                    : (0, r.Q3)("", !0),
                                  (0, r.Lk)(
                                    "div",
                                    {
                                      class: (0, r.C4)([
                                        e.$style.checkoutRow,
                                        e.$style.checkoutTotalRow,
                                      ]),
                                    },
                                    [
                                      (0, r.Lk)(
                                        "span",
                                        { class: (0, r.C4)(e.$style.checkoutLabel) },
                                        (0, r.v_)((0, r.R1)(o)("paymentModal.checkoutTotal")),
                                        3,
                                      ),
                                      (0, r.Lk)(
                                        "span",
                                        {
                                          class: (0, r.C4)([
                                            e.$style.checkoutValue,
                                            e.$style.checkoutTotalValue,
                                          ]),
                                        },
                                        (0, r.v_)(W.value),
                                        3,
                                      ),
                                    ],
                                    2,
                                  ),
                                ],
                                64,
                              )),
                        ],
                        2,
                      ),
                      (0, r.Lk)(
                        "div",
                        {
                          ref_key: "buttonElementRef",
                          ref: d,
                          class: (0, r.C4)(e.$style.paymentButton),
                        },
                        null,
                        2,
                      ),
                      (0, r.Lk)(
                        "div",
                        { class: (0, r.C4)(e.$style.cardDetailsRow) },
                        [
                          (0, r.Lk)(
                            "label",
                            { class: (0, r.C4)(e.$style.label) },
                            (0, r.v_)((0, r.R1)(o)("paymentModal.cardDetails")),
                            3,
                          ),
                          (0, r.Lk)(
                            "img",
                            {
                              src: (0, r.R1)(et),
                              alt: "Powered by Stripe",
                              loading: "lazy",
                              class: (0, r.C4)(e.$style.stripeLogo),
                            },
                            null,
                            10,
                            ea,
                          ),
                        ],
                        2,
                      ),
                      (0, r.Lk)(
                        "div",
                        {
                          ref_key: "cardElementRef",
                          ref: c,
                          class: (0, r.C4)([
                            e.$style.cardElement,
                            { [e.$style.cardElementDisabled]: !w.value },
                          ]),
                        },
                        null,
                        2,
                      ),
                      w.value
                        ? (0, r.Q3)("", !0)
                        : ((0, r.uX)(),
                          (0, r.CE)(
                            "div",
                            { key: 0, class: (0, r.C4)(e.$style.helper) },
                            (0, r.v_)((0, r.R1)(o)("paymentModal.stripeUnavailable")),
                            3,
                          )),
                    ],
                    2,
                  ),
                  g.value
                    ? ((0, r.uX)(),
                      (0, r.CE)(
                        "div",
                        { key: 0, class: (0, r.C4)(e.$style.error) },
                        (0, r.v_)(g.value),
                        3,
                      ))
                    : (0, r.Q3)("", !0),
                  h.value
                    ? ((0, r.uX)(),
                      (0, r.CE)(
                        "div",
                        { key: 1, class: (0, r.C4)(e.$style.success) },
                        (0, r.v_)(h.value),
                        3,
                      ))
                    : (0, r.Q3)("", !0),
                  (0, r.bF)(
                    i.A,
                    {
                      width: "full",
                      size: "l",
                      color: "golden",
                      type: "submit",
                      disabled: !C.value,
                      label: E.value,
                      interfaceTarget: "stripe-payment-submit",
                    },
                    null,
                    8,
                    ["disabled", "label"],
                  ),
                ],
                34,
              )
            )
          )
        },
      })
      let er = {}
      er.$style = {
        form: "NOtow",
        inputGroup: "vjely",
        checkoutInfo: "rTihc",
        checkoutRow: "fW9W8",
        checkoutLabel: "dwmIQ",
        checkoutLabelNote: "ZMoF1",
        checkoutValue: "KXbjZ",
        checkoutTotalRow: "M3fDi",
        checkoutTotalValue: "_TxH2",
        checkoutLoader: "vzkPm",
        spinner: "JKf8H",
        stripeFormSpinner: "ILZ5q",
        cardDetailsRow: "RpC0c",
        label: "Lsvva",
        cardElement: "DHhFZ",
        cardElementDisabled: "Hxzo9",
        helper: "CqLMa",
        error: "u1Gld",
        success: "XZfEU",
        paymentButton: "p9BlM",
        stripeLogo: "bvRL7",
      }
      let es = (0, k.default)(el, [["__cssModules", er]])
      var en = a(92798),
        eo = (0, r.pM)({
          __name: "TopUpBlock",
          props: { amount: {}, minPurchase: {} },
          emits: ["update:amount"],
          setup: (e) => (e, t) => (
            (0, r.uX)(),
            (0, r.CE)(
              "div",
              { class: (0, r.C4)(e.$style.wrapper) },
              [
                (0, r.bF)(
                  g.A,
                  { type: "header", size: "xs", responsive: !1 },
                  {
                    default: (0, r.k6)(() => [
                      (0, r.eW)((0, r.v_)(e.$tr("paymentModal.title")), 1),
                    ]),
                    _: 1,
                  },
                ),
                (0, r.bF)(
                  en.A,
                  {
                    id: "gold-amount",
                    name: "gold-amount",
                    type: "number",
                    value: e.amount,
                    class: (0, r.C4)(e.$style.margin_top),
                    "onUpdate:modelValue": t[0] || (t[0] = (t) => e.$emit("update:amount", t)),
                  },
                  null,
                  8,
                  ["value", "class"],
                ),
                (0, r.bF)(
                  g.A,
                  { is: "p", size: "s", responsive: !1, class: (0, r.C4)(e.$style.margin_top) },
                  {
                    default: (0, r.k6)(() => [
                      (0, r.eW)(
                        (0, r.v_)(
                          e.$tr("paymentModal.description", { amount: e.minPurchase.toString() }),
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
            )
          ),
        })
      let ei = {}
      ei.$style = { wrapper: "q983p", margin_top: "I2czP", marginTop: "I2czP" }
      let eu = (0, k.default)(eo, [["__cssModules", ei]])
      a(33384)
      var ec = a(98289),
        ed = (0, r.pM)({
          __name: "Loader",
          setup: (e) => (e, t) => (
            (0, r.uX)(),
            (0, r.Wv)(ec.A, { name: "loader", class: (0, r.C4)(e.$style.loader) }, null, 8, [
              "class",
            ])
          ),
        })
      let ep = {}
      ep.$style = { loader: "VUNC6", "loader-spin": "weRaQ", loaderSpin: "weRaQ" }
      let ev = (0, k.default)(ed, [["__cssModules", ep]]),
        em = ["src", "width", "height"]
      var ey = (0, r.pM)({
        __name: "XsollaIframe",
        props: {
          amount: {},
          width: { default: "100%" },
          height: { default: 600 },
          iframeUrl: { default: void 0 },
          tokenEndpoint: { default: "/api/v1/in-game-payments/createXsollaToken" },
        },
        emits: ["paymentSuccess"],
        setup(e, { emit: t }) {
          let a = (0, f.M1)(),
            { VUE_APP_XSOLLA_IFRAME_URL: l } = (0, u.U)(),
            s = (0, r.EW)(() => e.iframeUrl ?? l),
            n = (0, r.KR)(""),
            o = (0, r.KR)(),
            i = (0, r.EW)(() => !!n.value),
            c = (0, r.EW)(() => (i.value ? `${s.value}/?token=${n.value}` : ""))
          function d(e = "Token reset") {
            ;(o.value && (o.value.abort(e), (o.value = void 0)), n.value && (n.value = ""))
          }
          async function p(t) {
            if (!t) return void d("Component inactive")
            o.value?.abort("Superseded token request")
            let l = new AbortController()
            o.value = l
            try {
              let r = await a.request(e.tokenEndpoint, {
                method: "POST",
                body: JSON.stringify({ amount: t }),
                signal: l.signal,
              })
              0 === r.errors.length && r.data && (n.value = r.data)
            } catch (e) {
              e?.name !== "AbortError" && console.error("Token request error", e)
            } finally {
              o.value === l && (o.value = void 0)
            }
          }
          function v(e) {
            let a
            if (s.value.includes(e.origin))
              try {
                ;((a = JSON.parse(e.data)),
                  "open-status-success" === a.command && t("paymentSuccess"))
              } catch (e) {
                console.error("iframe event parsing error", e)
              }
          }
          return (
            (0, r.wB)(
              () => [e.amount],
              ([e]) => {
                e ? p(e) : d("Component inactive or amount below minimum")
              },
              { immediate: !0 },
            ),
            (0, r.sV)(() => {
              window.addEventListener("message", v)
            }),
            (0, r.hi)(() => {
              ;(d("Component unmounted"), window.removeEventListener("message", v))
            }),
            (e, t) => (
              (0, r.uX)(),
              (0, r.CE)(
                "div",
                { class: (0, r.C4)(e.$style.wrapper) },
                [
                  i.value
                    ? ((0, r.uX)(),
                      (0, r.CE)(
                        "iframe",
                        {
                          key: 0,
                          src: c.value,
                          width: e.width,
                          height: e.height,
                          allow: "clipboard-read; clipboard-write; payment",
                        },
                        null,
                        8,
                        em,
                      ))
                    : ((0, r.uX)(),
                      (0, r.Wv)(
                        ev,
                        { key: 1, class: (0, r.C4)(e.$style.loader_override) },
                        null,
                        8,
                        ["class"],
                      )),
                ],
                2,
              )
            )
          )
        },
      })
      let ef = {}
      ef.$style = {
        wrapper: "FRqpd",
        loader_override: "iDBEC",
        loaderOverride: "iDBEC",
        "#": "Se4RR",
      }
      let eb = (0, k.default)(ey, [["__cssModules", ef]])
      var e_ = (0, r.pM)({
        __name: "ModalPayment",
        setup(e) {
          let { VUE_APP_PAYMENT_PROVIDER: t } = (0, u.U)(),
            a = (0, v.l)(),
            l = (0, y.k)(),
            _ = (0, m.G)(),
            g = (0, p.C)(),
            h = (0, d.a)(),
            k = (0, f.M1)(),
            w = [c.GV.direct, c.GV.directTest, c.P.pwa],
            $ = () => {
              let { clid: e } = g
              return e && w.includes(e)
            },
            { isPaymentModalOpen: E, paymentModalOrder: S } = (0, n.bP)(a),
            { user: M } = (0, n.bP)(l),
            A = (0, r.EW)(() => M.value?.goldFenecBalance || 0),
            L = (0, r.EW)(
              () => S.value.order?.type === "topup" || (S.value.order?.amount || 0) > A.value,
            ),
            W = (0, r.EW)(() => S.value.order),
            { VUE_APP_MINIMUM_PURCHASE: T } = (0, u.U)(),
            X = { topup: parseInt(T) },
            x = (0, r.EW)(() => (W.value?.type ? (X[W.value.type] ?? 0) : 0)),
            F = (0, r.KR)(S.value.order?.amount || 0),
            R = (0, s.Q0)((e) => {
              ;((F.value = e),
                setTimeout(() => {
                  F.value < x.value && (F.value = x.value)
                }, 0))
            }, 200),
            z = (e) => {
              R(e)
            }
          ;(0, r.wB)(W, (e) => {
            if (!e) {
              F.value = 0
              return
            }
            z("topup" === e.type ? x.value : e.amount - A.value)
          })
          let Q = (0, r.KR)(!1)
          function U() {
            ;(j("purchase_fail"),
              a.paymentModalOrder.reject?.(Error("User didn't complete payment")),
              a.setPaymentModalOrder(null))
          }
          function j(e) {
            _.logEvent({
              event: "custom_event",
              eventName: e,
              action: W.value?.type,
              amountInGameCurrency: W.value?.amount,
              adPlacement: W.value?.type === "disable-ad-order" ? W.value?.adPlacement : void 0,
              dimension1: W.value?.type,
              dimension2: W.value?.amount?.toString(),
              dimension3: W.value?.type === "order" ? W.value?.description : void 0,
            })
          }
          async function B() {
            try {
              if (
                ((Q.value = !0), W.value?.type !== "order" && W.value?.type !== "disable-ad-order")
              )
                throw Error("Invalid order type for purchase")
              let e = h.isAdFreeActive,
                { adPlacement: t, ...r } = W.value,
                s = await ((e, t) => {
                  let a
                  if ("order" === e.type) {
                    let { gameHru: t, attributes: l, ...r } = e
                    a = JSON.stringify({
                      order: r,
                      gameHru: t,
                      attributes: $() ? { ...l, context: "portal" } : l,
                    })
                  } else {
                    let {
                      amount: t,
                      durationInDays: l,
                      externalId: r,
                      attributes: s,
                      subscription: n,
                    } = e
                    a = JSON.stringify({
                      order: {
                        amount: t,
                        durationInDays: l,
                        externalId: r,
                        attributes: s,
                        subscription: n,
                      },
                    })
                  }
                  return t
                    ? k.request(t, { method: "POST", body: a })
                    : k.signedRequest("/api/v1/in-game-payments/purchase/signed", {
                        method: "POST",
                        body: a,
                      })
                })(r, "disable-ad-order" === r.type ? "/api/v1/user/disable-ad" : void 0)
              if (s.errors.length > 0) throw Error(s.errors.join(", "))
              ;(j("purchase_successful"),
                await l.fetchUserInfo(),
                !e &&
                  h.isAdFreeActive &&
                  $() &&
                  "order" === W.value.type &&
                  _.logEvent({
                    event: "custom_event",
                    eventName: "new_subscription_after_in_game_purchase",
                    dimension1: W.value?.type,
                    dimension2: W.value?.amount?.toString(),
                  }),
                a.paymentModalOrder.resolve?.(s))
            } catch (e) {
              ;(j("purchase_fail"), a.paymentModalOrder.reject?.(e))
            } finally {
              ;((Q.value = !1), a.setPaymentModalOrder(null))
            }
          }
          async function I() {
            try {
              let e = await l.fetchUserInfo()
              ;(W.value?.type === "topup" &&
                (j("purchase_successful"),
                a.paymentModalOrder.resolve?.(e),
                await l.fetchUserInfo(),
                a.setPaymentModalOrder(null)),
                (W.value?.type === "order" || W.value?.type === "disable-ad-order") && B())
            } catch (e) {
              ;(j("purchase_fail"), a.paymentModalOrder.reject?.(e))
            }
          }
          async function D() {
            await I()
          }
          function N(e) {
            ;(j("purchase_fail"),
              a.paymentModalOrder.reject?.(e instanceof Error ? e : Error("Stripe payment failed")))
          }
          let V = (0, o.lq)()
          return (
            (0, r.wB)(
              () => V.fullPath,
              () => {
                ;(a.paymentModalOrder.order && j("purchase_fail"),
                  a.paymentModalOrder.reject?.(Error("User left game page")),
                  (Q.value = !1),
                  a.setPaymentModalOrder(null))
              },
            ),
            (0, r.wB)(
              () => [E.value, S.value.order],
              ([e, t]) => {
                e && t && j("payment_modal_opened")
              },
            ),
            (e, a) => (
              (0, r.uX)(),
              (0, r.Wv)(
                b.A,
                {
                  sizeMode: L.value && "xsolla" === (0, r.R1)(t) ? "wide" : "normal",
                  isOpened: (0, r.R1)(E),
                  onCloseModal: U,
                },
                {
                  "custom-content": (0, r.k6)(() => [
                    (0, r.Lk)(
                      "div",
                      { class: (0, r.C4)(e.$style.row) },
                      [
                        (0, r.Lk)(
                          "div",
                          { class: (0, r.C4)([e.$style.column, e.$style.info]) },
                          [
                            W.value?.type === "topup"
                              ? ((0, r.uX)(),
                                (0, r.Wv)(
                                  eu,
                                  {
                                    key: 0,
                                    amount: F.value,
                                    minPurchase: x.value,
                                    "onUpdate:amount": z,
                                  },
                                  null,
                                  8,
                                  ["amount", "minPurchase"],
                                ))
                              : (0, r.Q3)("", !0),
                            W.value?.type === "order"
                              ? ((0, r.uX)(),
                                (0, r.Wv)(
                                  O,
                                  {
                                    key: 1,
                                    order: W.value,
                                    amount: F.value,
                                    balance: A.value,
                                    showPayment: L.value,
                                  },
                                  null,
                                  8,
                                  ["order", "amount", "balance", "showPayment"],
                                ))
                              : (0, r.Q3)("", !0),
                            W.value?.type === "disable-ad-order"
                              ? ((0, r.uX)(),
                                (0, r.Wv)(
                                  P,
                                  {
                                    key: 2,
                                    order: W.value,
                                    balance: A.value,
                                    showPayment: L.value,
                                  },
                                  null,
                                  8,
                                  ["order", "balance", "showPayment"],
                                ))
                              : (0, r.Q3)("", !0),
                            L.value
                              ? (0, r.Q3)("", !0)
                              : ((0, r.uX)(),
                                (0, r.Wv)(C, { key: 3, balance: A.value }, null, 8, ["balance"])),
                            L.value
                              ? (0, r.Q3)("", !0)
                              : ((0, r.uX)(),
                                (0, r.Wv)(
                                  i.A,
                                  {
                                    key: 4,
                                    disabled: Q.value,
                                    width: "full",
                                    size: "l",
                                    color: "golden",
                                    label: e.$tr("paymentModal.purchaseButton"),
                                    interfaceTarget: "buy-golden-coins-button",
                                    onClick: B,
                                  },
                                  null,
                                  8,
                                  ["disabled", "label"],
                                )),
                            L.value && "stripe" === (0, r.R1)(t)
                              ? ((0, r.uX)(),
                                (0, r.Wv)(
                                  es,
                                  {
                                    key: 5,
                                    class: (0, r.C4)(e.$style.stripe_override),
                                    amount: F.value,
                                    buttonLabel: e.$tr("paymentModal.purchaseButton"),
                                    onPaymentSuccess: D,
                                    onPaymentFailed: N,
                                  },
                                  null,
                                  8,
                                  ["class", "amount", "buttonLabel"],
                                ))
                              : (0, r.Q3)("", !0),
                            L.value
                              ? ((0, r.uX)(),
                                (0, r.Wv)(C, { key: 6, bottom: "", balance: A.value }, null, 8, [
                                  "balance",
                                ]))
                              : (0, r.Q3)("", !0),
                          ],
                          2,
                        ),
                        L.value && "xsolla" === (0, r.R1)(t)
                          ? ((0, r.uX)(),
                            (0, r.CE)(
                              "div",
                              { key: 0, class: (0, r.C4)([e.$style.column, e.$style.iframe]) },
                              [
                                (0, r.bF)(eb, { amount: F.value, onPaymentSuccess: I }, null, 8, [
                                  "amount",
                                ]),
                              ],
                              2,
                            ))
                          : (0, r.Q3)("", !0),
                      ],
                      2,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["sizeMode", "isOpened"],
              )
            )
          )
        },
      })
      let eg = {}
      eg.$style = {
        row: "sGeAM",
        column: "oNUe4",
        iframe: "UZzi1",
        info: "U3ctT",
        stripe_override: "ECza3",
        stripeOverride: "ECza3",
        "#": "QwjFQ",
      }
      var eh = (0, k.default)(e_, [["__cssModules", eg]])
    },
    92798: function (e, t, a) {
      a.d(t, {
        A: function () {
          return u
        },
      })
      var l = a(3144),
        r = a(98289)
      let s = ["for"]
      var n = (0, l.pM)({
          __name: "TextInput",
          props: {
            is: { default: "input" },
            id: {},
            labelText: {},
            modelValue: {},
            disabled: { type: Boolean },
            withHiddenLabel: { type: Boolean },
            value: {},
            prefixIcon: {},
            size: { default: "m" },
            type: {},
          },
          emits: ["input", "update:modelValue"],
          setup(e, { emit: t }) {
            let a = (0, l.EW)(() => !e.labelText || e.withHiddenLabel),
              n = (0, l.KR)(!1),
              o = (0, l.EW)(() => e.modelValue ?? e.value),
              i = (0, l.EW)(() => "number" === e.type || "number" == typeof o.value)
            return (u, c) => (
              (0, l.uX)(),
              (0, l.CE)(
                "label",
                {
                  class: (0, l.C4)([
                    u.$attrs.class,
                    u.$style.rootLabel,
                    u.$style[u.size],
                    {
                      [u.$style.disabled]: u.disabled,
                      [u.$style.invalid]: n.value,
                      [u.$style.filled]: !!o.value,
                      [u.$style.withVisibleLabel]: !a.value,
                    },
                  ]),
                  for: u.id,
                },
                [
                  u.labelText
                    ? ((0, l.uX)(),
                      (0, l.CE)(
                        l.FK,
                        { key: 0 },
                        [
                          a.value
                            ? (0, l.Q3)("", !0)
                            : ((0, l.uX)(),
                              (0, l.CE)(
                                "span",
                                {
                                  key: 0,
                                  class: (0, l.C4)(u.$style.labelText),
                                  "aria-hidden": "true",
                                },
                                (0, l.v_)(u.labelText),
                                3,
                              )),
                          (0, l.Lk)(
                            "span",
                            {
                              class: (0, l.C4)([
                                u.$style.labelText,
                                u.$style.animatedLabelText,
                                { [u.$style.invisible]: a.value },
                              ]),
                            },
                            (0, l.v_)(u.labelText),
                            3,
                          ),
                        ],
                        64,
                      ))
                    : (0, l.Q3)("", !0),
                  u.prefixIcon
                    ? ((0, l.uX)(),
                      (0, l.Wv)(
                        r.A,
                        { key: 1, name: u.prefixIcon, class: (0, l.C4)(u.$style.prefix_icon) },
                        null,
                        8,
                        ["name", "class"],
                      ))
                    : (0, l.Q3)("", !0),
                  ((0, l.uX)(),
                  (0, l.Wv)(
                    (0, l.$y)(u.is),
                    (0, l.v6)(
                      { ...u.$attrs, class: void 0 },
                      {
                        id: u.id,
                        class: u.$style.input,
                        disabled: u.disabled,
                        type: e.type,
                        value: o.value,
                        onInput:
                          c[0] ||
                          (c[0] = (e) => {
                            let a
                            return (
                              (n.value = !e.target.validity.valid),
                              void (t(
                                "update:modelValue",
                                i.value
                                  ? Number.isFinite(+(a = e.target.value))
                                    ? +a
                                    : 0
                                  : e.target.value,
                              ),
                              t("input", e))
                            )
                          }),
                      },
                    ),
                    null,
                    16,
                    ["id", "class", "disabled", "type", "value"],
                  )),
                ],
                10,
                s,
              )
            )
          },
        }),
        o = a(97939)
      let i = {}
      i.$style = {
        rootLabel: "HYjLc",
        withVisibleLabel: "_ltEM",
        m: "JxVeS",
        l: "RnMta",
        labelText: "G8_H_",
        animatedLabelText: "hKAqk",
        invisible: "Bm8V8",
        input: "whKuC",
        disabled: "C9FDu",
        animateBorder: "qnbCr",
        filled: "WddOa",
        invalid: "IG2xb",
        prefix_icon: "UmXfk",
        prefixIcon: "UmXfk",
      }
      var u = (0, o.default)(n, [["__cssModules", i]])
    },
  },
])
//# sourceMappingURL=644.fd088d9e.js.map
