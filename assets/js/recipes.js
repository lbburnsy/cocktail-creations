// Initialize foundation
$(document).foundation();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let drinkId = urlParams.get("id");
let alcohol = urlParams.get("alcohol");

// Query the DOM
const drinkName = $("#jumbotron-text");
const ingredientList = $("#ingredient-list");
const directionsList = $("#directions-list");
const thumbnail = $("#thumbnail");
const soundcloudContainer = $("#soundcloud-container");

// Waits for the document to load before fetching
$(document).ready(() => {
  let link = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      let drink = data.drinks[0];
      writeName(drink);
      writeIngredients(drink);
      writeDirections(drink);
      writeThumbnail(drink);
      populateSoundcloud();
    });
});

// Write the drink name
function writeName(drink) {
  drinkName.text(drink.strDrink);
}

// Writes out the ingredients and measurements
function writeIngredients(drink) {
  for (let i = 1; i < 16; i++) {
    let measure = "strMeasure" + i.toString();
    let ingredient = "strIngredient" + i.toString();
    let output = $("<p>");
    if (drink[ingredient] !== null && drink[measure] !== null) {
      output.text(`${drink[measure]} ${drink[ingredient]}`);
      ingredientList.append(output);
    } else {
      output.text(`${drink[ingredient]}`);
    }
  }
}

// Writes out the directions
function writeDirections(drink) {
  let output = $("<p>");
  output.text(drink.strInstructions);
  directionsList.append(output);
}

// Displays the thumbnail image
function writeThumbnail(drink) {
  let output = $("<img>");
  output.attr("src", drink.strDrinkThumb);
  thumbnail.append(output);
}

// Populates the soundcloud container
function populateSoundcloud() {
  let playlist;

  if (alcohol == "vodka") {
    html =
      '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1221239080&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nvrthernlights" title="Nvrthernlights" target="_blank" style="color: #cccccc; text-decoration: none;">Nvrthernlights</a> · <a href="https://soundcloud.com/nvrthernlights/sets/dance-party-1" title="Dance Party" target="_blank" style="color: #cccccc; text-decoration: none;">Dance Party</a></div>';
  } else if (alcohol == "rum") {
    html =
      '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/515330922&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/rhythm0904" title="Rhythm" target="_blank" style="color: #cccccc; text-decoration: none;">Rhythm</a> · <a href="https://soundcloud.com/rhythm0904/sets/greastest-tropical-house" title="Tropical House" target="_blank" style="color: #cccccc; text-decoration: none;">Tropical House</a></div>';
  } else if (alcohol == "tequila") {
    html = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/128029519&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/jafeel" title="Ja feel" target="_blank" style="color: #cccccc; text-decoration: none;">Ja feel</a> · <a href="https://soundcloud.com/jafeel/sets/tomorrowland" title="Ja feel Tomorrowland Weekender" target="_blank" style="color: #cccccc; text-decoration: none;">Ja feel Tomorrowland Weekender</a></div>`;
  } else if (alcohol == "scotch") {
    html =
      '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/484511529&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-437423312" title="Lisa" target="_blank" style="color: #cccccc; text-decoration: none;">Lisa</a> · <a href="https://soundcloud.com/user-437423312/sets/country" title="country" target="_blank" style="color: #cccccc; text-decoration: none;">country</a></div>';
  } else if (alcohol == "bourbon") {
    html =
      '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/301080731&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/abel-salinas" title="Abel Salinas" target="_blank" style="color: #cccccc; text-decoration: none;">Abel Salinas</a> · <a href="https://soundcloud.com/abel-salinas/sets/classic-rock" title="Classic Rock" target="_blank" style="color: #cccccc; text-decoration: none;">Classic Rock</a></div>';
  }

  soundcloudContainer.append(html);
}

// Soundclouds provided script
var SC = "object" == typeof SC ? SC : {};
SC.Widget = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = {
      i: r,
      l: !1,
      exports: {},
    });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: r,
        });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0))
  );
})([
  function (e, t, n) {
    var r,
      o,
      i,
      u = n(1),
      a = n(2),
      c = n(3),
      s = u.api,
      l = u.bridge,
      d = [],
      f = [],
      p = /^http(?:s?)/;
    function E(e) {
      var t, n;
      for (t = 0, n = f.length; t < n && !1 !== e(f[t]); t++);
    }
    function v(e) {
      return e.contentWindow
        ? e.contentWindow
        : e.contentDocument && "parentWindow" in e.contentDocument
        ? e.contentDocument.parentWindow
        : null;
    }
    function _(e) {
      var t,
        n = [];
      for (t in e) e.hasOwnProperty(t) && n.push(e[t]);
      return n;
    }
    function S(e, t, n) {
      (n.callbacks[e] = n.callbacks[e] || []), n.callbacks[e].push(t);
    }
    function h(e, t) {
      var n = !0;
      return (
        (t.callbacks[e] = []),
        E(function (t) {
          if ((t.callbacks[e] || []).length) return (n = !1), !1;
        }),
        n
      );
    }
    function y(e, t, n) {
      var r,
        o,
        i = v(n);
      if (!i.postMessage) return !1;
      (r = n.getAttribute("src").split("?")[0]),
        (o = JSON.stringify({
          method: e,
          value: t,
        })),
        "//" === r.substr(0, 2) && (r = window.location.protocol + r),
        (r = r.replace(
          /http:\/\/(w|wt).soundcloud.com/,
          "https://$1.soundcloud.com"
        )),
        i.postMessage(o, r);
    }
    function b(e) {
      var t;
      return (
        E(function (n) {
          if (n.instance === e) return (t = n), !1;
        }),
        t
      );
    }
    function g(e) {
      var t;
      return (
        E(function (n) {
          if (v(n.element) === e) return (t = n), !1;
        }),
        t
      );
    }
    function m(e, t) {
      return function (n) {
        var r,
          o = !!((r = n) && r.constructor && r.call && r.apply),
          i = b(this),
          u = !o && t ? n : null,
          a = o && !t ? n : null;
        return a && S(e, a, i), y(e, u, i.element), this;
      };
    }
    function R(e, t, n) {
      var r, o, i;
      for (r = 0, o = t.length; r < o; r++) e[(i = t[r])] = m(i, n);
    }
    function O(e, t, n) {
      return (
        e +
        "?url=" +
        t +
        "&" +
        (function (e) {
          var t,
            n,
            r = [];
          for (t in e)
            e.hasOwnProperty(t) &&
              ((n = e[t]),
              r.push(
                t +
                  "=" +
                  ("start_track" === t ? parseInt(n, 10) : n ? "true" : "false")
              ));
          return r.join("&");
        })(n)
      );
    }
    function w(e, t, n) {
      var r,
        o,
        i = e.callbacks[t] || [];
      for (r = 0, o = i.length; r < o; r++) i[r].apply(e.instance, n);
      ((function (e) {
        var t,
          n = !1;
        for (t in a)
          if (a.hasOwnProperty(t) && a[t] === e) {
            n = !0;
            break;
          }
        return n;
      })(t) ||
        t === s.READY) &&
        (e.callbacks[t] = []);
    }
    function A(e) {
      var t, n, r, o, i;
      try {
        n = JSON.parse(e.data);
      } catch (e) {
        return !1;
      }
      return (
        (t = g(e.source)),
        (r = n.method),
        (o = n.value),
        (!t || P(e.origin) === P(t.domain)) &&
          (t
            ? (r === s.READY &&
                ((t.isReady = !0),
                w(t, "__LATE_BINDING__"),
                h("__LATE_BINDING__", t)),
              r !== s.PLAY || t.playEventFired || (t.playEventFired = !0),
              r !== s.PLAY_PROGRESS ||
                t.playEventFired ||
                ((t.playEventFired = !0), w(t, s.PLAY, [o])),
              (i = []),
              void 0 !== o && i.push(o),
              void w(t, r, i))
            : (r === s.READY && d.push(e.source), !1))
      );
    }
    function P(e) {
      return e.replace(p, "");
    }
    window.addEventListener
      ? window.addEventListener("message", A, !1)
      : window.attachEvent("onmessage", A),
      (e.exports = i = function (e, t, n) {
        var i;
        if (
          (("" === (i = e) || (i && i.charCodeAt && i.substr)) &&
            (e = document.getElementById(e)),
          !(function (e) {
            return !(
              !e ||
              1 !== e.nodeType ||
              "IFRAME" !== e.nodeName.toUpperCase()
            );
          })(e))
        )
          throw new Error(
            "SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element."
          );
        t &&
          ((n = n || {}), (e.src = O("http://wt.soundcloud.test:9200/", t, n)));
        var u,
          a,
          c = g(v(e));
        return c && c.instance
          ? c.instance
          : ((u = d.indexOf(v(e)) > -1),
            (a = new r(e)),
            f.push(new o(a, e, u)),
            a);
      }),
      (i.Events = s),
      (window.SC = window.SC || {}),
      (window.SC.Widget = i),
      (o = function (e, t, n) {
        (this.instance = e),
          (this.element = t),
          (this.domain = (function (e) {
            var t,
              n,
              r,
              o = "";
            "//" === e.substr(0, 2) && (e = window.location.protocol + e);
            for (r = e.split("/"), t = 0, n = r.length; t < n && t < 3; t++)
              (o += r[t]), t < 2 && (o += "/");
            return o;
          })(t.getAttribute("src"))),
          (this.isReady = !!n),
          (this.callbacks = {});
      }),
      ((r = function () {}).prototype = {
        constructor: r,
        load: function (e, t) {
          if (e) {
            t = t || {};
            var n = this,
              r = b(this),
              o = r.element,
              i = o.src,
              u = i.substr(0, i.indexOf("?"));
            (r.isReady = !1),
              (r.playEventFired = !1),
              (o.onload = function () {
                n.bind(s.READY, function () {
                  var e,
                    n = r.callbacks;
                  for (e in n)
                    n.hasOwnProperty(e) &&
                      e !== s.READY &&
                      y(l.ADD_LISTENER, e, r.element);
                  t.callback && t.callback();
                });
              }),
              (o.src = O(u, e, t));
          }
        },
        bind: function (e, t) {
          var n = this,
            r = b(this);
          return (
            r &&
              r.element &&
              (e === s.READY && r.isReady
                ? setTimeout(t, 1)
                : r.isReady
                ? (S(e, t, r), y(l.ADD_LISTENER, e, r.element))
                : S(
                    "__LATE_BINDING__",
                    function () {
                      n.bind(e, t);
                    },
                    r
                  )),
            this
          );
        },
        unbind: function (e) {
          var t,
            n = b(this);
          n &&
            n.element &&
            ((t = h(e, n)),
            e !== s.READY && t && y(l.REMOVE_LISTENER, e, n.element));
        },
      }),
      R(r.prototype, _(a)),
      R(r.prototype, _(c), !0);
  },
  function (e, t) {
    (t.api = {
      LOAD_PROGRESS: "loadProgress",
      PLAY_PROGRESS: "playProgress",
      PLAY: "play",
      PAUSE: "pause",
      FINISH: "finish",
      SEEK: "seek",
      READY: "ready",
      OPEN_SHARE_PANEL: "sharePanelOpened",
      CLICK_DOWNLOAD: "downloadClicked",
      CLICK_BUY: "buyClicked",
      ERROR: "error",
    }),
      (t.bridge = {
        REMOVE_LISTENER: "removeEventListener",
        ADD_LISTENER: "addEventListener",
      });
  },
  function (e, t) {
    e.exports = {
      GET_VOLUME: "getVolume",
      GET_DURATION: "getDuration",
      GET_POSITION: "getPosition",
      GET_SOUNDS: "getSounds",
      GET_CURRENT_SOUND: "getCurrentSound",
      GET_CURRENT_SOUND_INDEX: "getCurrentSoundIndex",
      IS_PAUSED: "isPaused",
    };
  },
  function (e, t) {
    e.exports = {
      PLAY: "play",
      PAUSE: "pause",
      TOGGLE: "toggle",
      SEEK_TO: "seekTo",
      SET_VOLUME: "setVolume",
      NEXT: "next",
      PREV: "prev",
      SKIP: "skip",
    };
  },
]);
//# sourceMappingURL=http://ent/web-sourcemaps/api.js-27d0ec1de3c5.map
