!(function (e) {
  function t(t) {
    for (
      var n, r, c = t[0], i = t[1], l = t[2], u = 0, j = [];
      u < c.length;
      u++
    )
      (r = c[u]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && j.push(o[r][0]),
        (o[r] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (d && d(t); j.length; ) j.shift()();
    return a.push.apply(a, l || []), s();
  }
  function s() {
    for (var e, t = 0; t < a.length; t++) {
      for (var s = a[t], n = !0, c = 1; c < s.length; c++) {
        var i = s[c];
        0 !== o[i] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = r((r.s = s[0]))));
    }
    return e;
  }
  var n = {},
    o = { 1: 0 },
    a = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var s = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function (e, t, s) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            s,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return s;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var d = i;
  a.push([217, 2]), s();
})({
  217: function (e, t, s) {
    s(271), (e.exports = s(270));
  },
  218: function (e, t) {
    !(function () {
      const e =
          getComputedStyle(document.documentElement).getPropertyValue(
            "--theme-breakpoint-xl"
          ) || "1140px",
        t = window.matchMedia(`(max-width: ${e})`),
        s = document.querySelector(".menu-toggle"),
        n = document.querySelector(".menu-overlay-bg"),
        o = document.querySelector(".close-menu");
      function a() {
        const t = parseInt(e) || 1140;
        return window.innerWidth > t;
      }
      function r() {
        a()
          ? document.body.classList.remove("menu-hidden")
          : (document.body.classList.add("menu-hidden"),
            document.body.classList.remove("menu-overlay"),
            document.body.classList.remove("has-transition"));
      }
      function c() {
        document.body.classList.add("has-transition"),
          setTimeout(() => {
            document.body.classList.remove("has-transition");
          }, 750);
      }
      function i() {
        c(), document.body.classList.remove("menu-overlay");
      }
      t.addListener(r),
        s &&
          s.addEventListener("click", function () {
            c(),
              a()
                ? document.body.classList.toggle("menu-hidden")
                : document.body.classList.toggle("menu-overlay");
          }),
        n &&
          n.addEventListener("click", () => {
            i();
          }),
        o &&
          o.addEventListener("click", () => {
            i();
          }),
        document.addEventListener("DOMContentLoaded", function () {
          r();
        });
    })();
  },
  220: function (e, t, s) {
    var n = {
      "./af": 42,
      "./af.js": 42,
      "./ar": 43,
      "./ar-dz": 44,
      "./ar-dz.js": 44,
      "./ar-kw": 45,
      "./ar-kw.js": 45,
      "./ar-ly": 46,
      "./ar-ly.js": 46,
      "./ar-ma": 47,
      "./ar-ma.js": 47,
      "./ar-sa": 48,
      "./ar-sa.js": 48,
      "./ar-tn": 49,
      "./ar-tn.js": 49,
      "./ar.js": 43,
      "./az": 50,
      "./az.js": 50,
      "./be": 51,
      "./be.js": 51,
      "./bg": 52,
      "./bg.js": 52,
      "./bm": 53,
      "./bm.js": 53,
      "./bn": 54,
      "./bn-bd": 55,
      "./bn-bd.js": 55,
      "./bn.js": 54,
      "./bo": 56,
      "./bo.js": 56,
      "./br": 57,
      "./br.js": 57,
      "./bs": 58,
      "./bs.js": 58,
      "./ca": 59,
      "./ca.js": 59,
      "./cs": 60,
      "./cs.js": 60,
      "./cv": 61,
      "./cv.js": 61,
      "./cy": 62,
      "./cy.js": 62,
      "./da": 63,
      "./da.js": 63,
      "./de": 64,
      "./de-at": 65,
      "./de-at.js": 65,
      "./de-ch": 66,
      "./de-ch.js": 66,
      "./de.js": 64,
      "./dv": 67,
      "./dv.js": 67,
      "./el": 68,
      "./el.js": 68,
      "./en-au": 69,
      "./en-au.js": 69,
      "./en-ca": 70,
      "./en-ca.js": 70,
      "./en-gb": 71,
      "./en-gb.js": 71,
      "./en-ie": 72,
      "./en-ie.js": 72,
      "./en-il": 73,
      "./en-il.js": 73,
      "./en-in": 74,
      "./en-in.js": 74,
      "./en-nz": 75,
      "./en-nz.js": 75,
      "./en-sg": 76,
      "./en-sg.js": 76,
      "./eo": 77,
      "./eo.js": 77,
      "./es": 78,
      "./es-do": 79,
      "./es-do.js": 79,
      "./es-mx": 80,
      "./es-mx.js": 80,
      "./es-us": 81,
      "./es-us.js": 81,
      "./es.js": 78,
      "./et": 82,
      "./et.js": 82,
      "./eu": 83,
      "./eu.js": 83,
      "./fa": 84,
      "./fa.js": 84,
      "./fi": 85,
      "./fi.js": 85,
      "./fil": 86,
      "./fil.js": 86,
      "./fo": 87,
      "./fo.js": 87,
      "./fr": 88,
      "./fr-ca": 89,
      "./fr-ca.js": 89,
      "./fr-ch": 90,
      "./fr-ch.js": 90,
      "./fr.js": 88,
      "./fy": 91,
      "./fy.js": 91,
      "./ga": 92,
      "./ga.js": 92,
      "./gd": 93,
      "./gd.js": 93,
      "./gl": 94,
      "./gl.js": 94,
      "./gom-deva": 95,
      "./gom-deva.js": 95,
      "./gom-latn": 96,
      "./gom-latn.js": 96,
      "./gu": 97,
      "./gu.js": 97,
      "./he": 98,
      "./he.js": 98,
      "./hi": 99,
      "./hi.js": 99,
      "./hr": 100,
      "./hr.js": 100,
      "./hu": 101,
      "./hu.js": 101,
      "./hy-am": 102,
      "./hy-am.js": 102,
      "./id": 103,
      "./id.js": 103,
      "./is": 104,
      "./is.js": 104,
      "./it": 105,
      "./it-ch": 106,
      "./it-ch.js": 106,
      "./it.js": 105,
      "./ja": 107,
      "./ja.js": 107,
      "./jv": 108,
      "./jv.js": 108,
      "./ka": 109,
      "./ka.js": 109,
      "./kk": 110,
      "./kk.js": 110,
      "./km": 111,
      "./km.js": 111,
      "./kn": 112,
      "./kn.js": 112,
      "./ko": 113,
      "./ko.js": 113,
      "./ku": 114,
      "./ku.js": 114,
      "./ky": 115,
      "./ky.js": 115,
      "./lb": 116,
      "./lb.js": 116,
      "./lo": 117,
      "./lo.js": 117,
      "./lt": 118,
      "./lt.js": 118,
      "./lv": 119,
      "./lv.js": 119,
      "./me": 120,
      "./me.js": 120,
      "./mi": 121,
      "./mi.js": 121,
      "./mk": 122,
      "./mk.js": 122,
      "./ml": 123,
      "./ml.js": 123,
      "./mn": 124,
      "./mn.js": 124,
      "./mr": 125,
      "./mr.js": 125,
      "./ms": 126,
      "./ms-my": 127,
      "./ms-my.js": 127,
      "./ms.js": 126,
      "./mt": 128,
      "./mt.js": 128,
      "./my": 129,
      "./my.js": 129,
      "./nb": 130,
      "./nb.js": 130,
      "./ne": 131,
      "./ne.js": 131,
      "./nl": 132,
      "./nl-be": 133,
      "./nl-be.js": 133,
      "./nl.js": 132,
      "./nn": 134,
      "./nn.js": 134,
      "./oc-lnc": 135,
      "./oc-lnc.js": 135,
      "./pa-in": 136,
      "./pa-in.js": 136,
      "./pl": 137,
      "./pl.js": 137,
      "./pt": 138,
      "./pt-br": 139,
      "./pt-br.js": 139,
      "./pt.js": 138,
      "./ro": 140,
      "./ro.js": 140,
      "./ru": 141,
      "./ru.js": 141,
      "./sd": 142,
      "./sd.js": 142,
      "./se": 143,
      "./se.js": 143,
      "./si": 144,
      "./si.js": 144,
      "./sk": 145,
      "./sk.js": 145,
      "./sl": 146,
      "./sl.js": 146,
      "./sq": 147,
      "./sq.js": 147,
      "./sr": 148,
      "./sr-cyrl": 149,
      "./sr-cyrl.js": 149,
      "./sr.js": 148,
      "./ss": 150,
      "./ss.js": 150,
      "./sv": 151,
      "./sv.js": 151,
      "./sw": 152,
      "./sw.js": 152,
      "./ta": 153,
      "./ta.js": 153,
      "./te": 154,
      "./te.js": 154,
      "./tet": 155,
      "./tet.js": 155,
      "./tg": 156,
      "./tg.js": 156,
      "./th": 157,
      "./th.js": 157,
      "./tk": 158,
      "./tk.js": 158,
      "./tl-ph": 159,
      "./tl-ph.js": 159,
      "./tlh": 160,
      "./tlh.js": 160,
      "./tr": 161,
      "./tr.js": 161,
      "./tzl": 162,
      "./tzl.js": 162,
      "./tzm": 163,
      "./tzm-latn": 164,
      "./tzm-latn.js": 164,
      "./tzm.js": 163,
      "./ug-cn": 165,
      "./ug-cn.js": 165,
      "./uk": 166,
      "./uk.js": 166,
      "./ur": 167,
      "./ur.js": 167,
      "./uz": 168,
      "./uz-latn": 169,
      "./uz-latn.js": 169,
      "./uz.js": 168,
      "./vi": 170,
      "./vi.js": 170,
      "./x-pseudo": 171,
      "./x-pseudo.js": 171,
      "./yo": 172,
      "./yo.js": 172,
      "./zh-cn": 173,
      "./zh-cn.js": 173,
      "./zh-hk": 174,
      "./zh-hk.js": 174,
      "./zh-mo": 175,
      "./zh-mo.js": 175,
      "./zh-tw": 176,
      "./zh-tw.js": 176,
    };
    function o(e) {
      var t = a(e);
      return s(t);
    }
    function a(e) {
      if (!s.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (o.keys = function () {
      return Object.keys(n);
    }),
      (o.resolve = a),
      (e.exports = o),
      (o.id = 220);
  },
  221: function (e, t) {
    !(function () {
      const e = document.querySelector(".menu-toggle"),
        t =
          getComputedStyle(document.documentElement).getPropertyValue(
            "--theme-breakpoint-xl"
          ) || "1140px",
        s = window.matchMedia(`(max-width: ${t})`),
        n = a(window.location.href);
      function o() {
        (document.querySelectorAll(".aside .collapse.show") || []).forEach(
          (e) => {
            const t = e
              .closest(".menu-item")
              .querySelector("a[data-bs-toggle]");
            e.classList.remove("show"),
              t &&
                (t.setAttribute("aria-expaned", !1),
                t.classList.add("collapsed"));
          }
        );
      }
      function a(e) {
        return e
          .substr(e.lastIndexOf("/") + 1)
          .replace(" ", "")
          .replace(/%20/g, "")
          .trim()
          .toLowerCase();
      }
      function r() {
        document.querySelectorAll(".aside ul a").forEach((e) => {
          a(e.href) === n &&
            (function ({ activeMenu: e }) {
              const t = e.closest(".menu-item");
              if ((e.classList.add("active"), t)) {
                const e = t.querySelector(".collapse"),
                  s = t.querySelector("a[data-bs-toggle]");
                e && e.classList.add("show"),
                  s &&
                    (s.classList.remove("collapsed"),
                    s.setAttribute("aria-expanded", !0));
              }
            })({ activeMenu: e });
        });
      }
      e &&
        e.addEventListener("click", () => {
          o();
        }),
        s.addListener(o),
        s.addListener(r),
        document.addEventListener("DOMContentLoaded", () => {
          r();
        });
    })();
  },
  269: function (e, t) {
    !(function () {
      const e = document.querySelector(".btn-search"),
        t = document.querySelector(".navbar-search"),
        s = document.querySelector(".navbar-search input"),
        n = document.querySelector(".close-search");
      function o() {
        document.body.classList.contains("search-active")
          ? document.body.classList.remove("search-active")
          : (t.classList.remove("d-none"),
            setTimeout(() => {
              document.body.classList.add("search-active"), s && s.focus();
            }, 150));
      }
      e &&
        e.addEventListener("click", function () {
          o();
        }),
        n &&
          n.addEventListener("click", function () {
            o();
          });
    })();
  },
  270: function (e, t, s) {},
  271: function (e, t, s) {
    "use strict";
    s.r(t);
    var n = s(19),
      o = (s(218), s(39)),
      a = s.n(o);
    !(function () {
      const e = document.querySelector("#chartYearlyIncome");
      e &&
        new a.a(e, {
          type: "line",
          data: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
            ],
            datasets: [
              {
                data: [45, 55, 60, 65, 48, 41, 60, 50, 52],
                fill: !1,
                borderColor: "#ff5a5a",
                pointRadius: 0,
              },
              {
                data: [23, 43, 48, 40, 66, 39, 70, 50, 40],
                fill: !1,
                borderColor: "#c9c9ce",
                pointRadius: 0,
              },
            ],
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            tooltips: { enabled: !1 },
            hover: { mode: null },
            legend: { display: !1 },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    color: "#363a4a",
                    drawBorder: !1,
                    zeroLineColor: "#363a4a",
                  },
                  ticks: {
                    beginAtZero: !0,
                    stepSize: 10,
                    fontSize: 12,
                    fontColor: "#64748b",
                    fontFamily: "Overpass, sans-serif",
                    padding: 10,
                    callback: function (e, t, s) {
                      return e + "%";
                    },
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: { display: !1, drawBorder: !1 },
                  ticks: {
                    fontSize: 12,
                    fontColor: "#64748b",
                    fontFamily: "Overpass, sans-serif",
                    padding: 5,
                  },
                },
              ],
            },
          },
        });
      const t = document.querySelector("#chartSalesRegion");
      t &&
        new a.a(t, {
          type: "doughnut",
          data: {
            labels: ["USD", "USD", "USD"],
            datasets: [
              {
                data: [45, 25, 30],
                backgroundColor: ["#ffed03", "#19b8a2", "#0dcaf0"],
                borderWidth: 10,
                borderColor: "#24293b",
              },
            ],
          },
          options: {
            responsive: !0,
            cutoutPercentage: 70,
            maintainAspectRatio: !1,
            tooltips: { enabled: !1 },
            hover: { mode: null },
            legend: { display: !1 },
            scales: { yAxes: [{ display: !1 }], xAxes: [{ display: !1 }] },
          },
        });
    })();
    s(221);
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      .map(function (e) {
        const t = {
          container: "body",
          trigger: "focus",
          ...(e.dataset.bsOptions ? JSON.parse(e.dataset.bsOptions) : {}),
        };
        return new n.a(e, t);
      });
    var r = s(212);
    document.querySelectorAll("[data-pixr-simplebar]").forEach((e) => {
      new r.a(e, { autoHide: !1 });
    });
    s(269);
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map(function (e) {
        const t = {
          boundary: "window",
          fallbackPlacements: ["top"],
          ...(e.dataset.bsOptions ? JSON.parse(e.dataset.bsOptions) : {}),
        };
        return new n.b(e, t);
      });
  },
});
