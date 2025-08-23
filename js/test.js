const hamberBtn = document.querySelector("#hamber-menu"),
  navBar = document.querySelector("nav.menu"),
  navCloser = document.querySelector("#nav-closer");
if (
  (hamberBtn.addEventListener("click", () => {
    navBar.classList.remove("translate-x-[50000px]");
  }),
  navCloser.addEventListener("click", () => {
    navBar.classList.add("translate-x-[50000px]");
  }),
  document.querySelector(".first-swiper"))
)
  var swiper1 = new Swiper(".first-swiper", {
    slidesPerView: 4,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 30,
    grabCursor: !0,
    loop: !0,
    pagination: { el: ".swiper-pagination-first", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-first",
      prevEl: ".swiper-button-prev-first",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 20 },
    },
  });
if (document.querySelector(".first-swiper-mob"))
  var swiper = new Swiper(".first-swiper-mob", {
    direction: "vertical",
    slidesPerView: 4,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 3500, disableOnInteraction: !1 },
    loop: !0,
    pagination: { el: ".swiper-pagination-first-mob", clickable: !0 },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 1, spaceBetween: 10 },
      1024: { slidesPerView: 1, spaceBetween: 10 },
    },
  });
if (document.querySelector(".swiper-about-desktop"))
  var swiper3 = new Swiper(".swiper-about-desktop", {
    slidesPerView: 5,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 30,
    grabCursor: !0,
    autoplay: { delay: 3500, disableOnInteraction: !1 },
    loop: !1,
  });
if (document.querySelector(".swiper-about-mob"))
  var swiper4 = new Swiper(".swiper-about-mob", {
    slidesPerView: 1.2,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 3500, disableOnInteraction: !1 },
    loop: !1,
  });
const questionBox = document.querySelectorAll(
  ".common-questions .parent-box .box-container"
);
function soonFunc() {
  let e = document.querySelector(".soon-card2"),
    t = e.querySelector(".depId").innerText.trim(),
    r = e.querySelector(".desId").innerText.trim(),
    l = e.querySelector(".departureCity").innerText.trim(),
    i = e.querySelector(".destinationCity").innerText.trim(),
    s = e.querySelector(".flight-type").innerText.trim();
  localStorage.setItem(
    "flightData",
    JSON.stringify({
      depId3: t,
      desId3: r,
      departureCity2: l,
      destinationCity2: i,
      flightType2: s,
    })
  ),
    (window.location.href = "/");
}
function loadContentHomaPage() {
  loadSearchEngine("search-engine.bc", "search-box");
}
async function loadSearchEngine(e, t) {
  try {
    var r = new XMLHttpRequest();
    r.open("GET", e),
      r.send(),
      (r.onreadystatechange = function () {
        if (4 == this.readyState && 200 == this.status) {
          var e = document.getElementById(t);
          e.innerHTML = r.responseText;
          for (
            var l = e.getElementsByTagName("script"), i = 0;
            i < l.length;
            i++
          ) {
            var s = document.createElement("script");
            l[i].src
              ? ((s.src = l[i].src), (s.async = !1))
              : (s.text = l[i].textContent),
              document.head.appendChild(s).parentNode.removeChild(s);
          }
          let a = window.location.pathname;
          a &&
            ("/hotel" == a
              ? (sessionStorage.setItem("pageName", "hotel"),
                $(".date_info_selected").find(".type_date").text("تاریخ رفت :"),
                $(".date_info_selected").find(".day_of_date").text("---"),
                $(".date_info_selected").find(".month_of_date").text(" "),
                $(".hotel-btn").removeClass("inactive"),
                $(".selected").removeClass("active-module"),
                $(".hotel-btn").addClass("active-module"),
                $(".flight-btn").addClass("inactive"),
                $(".flighthotel-btn").addClass("inactive"),
                $(".tour-btn").addClass("inactive"),
                $(".r-hotel").show(),
                $(".r-flight").hide(),
                $(".r-tour").hide(),
                $(".r-flighthotel").hide())
              : "/flight" == a &&
                (sessionStorage.setItem("pageName", "flight"),
                $(".date_info_selected").find(".type_date").text("تاریخ رفت :"),
                $(".date_info_selected").find(".day_of_date").text("---"),
                $(".date_info_selected").find(".month_of_date").text(" "),
                $(".flight-btn").removeClass("inactive"),
                $(".selected").removeClass("active-module"),
                $(".flight-btn").addClass("active-module"),
                $(".hotel-btn").addClass("inactive"),
                $(".tour-btn").addClass("inactive"),
                $(".flighthotel-btn").addClass("inactive"),
                $(".r-flight").show(),
                $(".r-hotel").hide(),
                $(".r-tour").hide(),
                $(".r-flighthotel").hide()));
          let o = JSON.parse(localStorage.getItem("flightData"));
          if (o && "/" === window.location.pathname) {
            localStorage.removeItem("searchHistory_flight");
            let {
              depId3: n,
              desId3: c,
              departureCity2: d,
              destinationCity2: h,
              flightType2: u,
            } = o;
            (document.querySelector("#r-flight #flightSearch .FCD1").value = d),
              (document.querySelector("#r-flight #flightSearch .FCDid1").value =
                n),
              (document.querySelector("#r-flight #flightSearch .FCD2").value =
                h),
              (document.querySelector("#r-flight #flightSearch .FCDid2").value =
                c),
              u.includes("Economy") &&
                ((document.querySelector(
                  "#r-flight .FlightClass-text"
                ).innerText = "اکونومی"),
                (document.querySelector("#r-flight #FlightClass1").value =
                  "Economy")),
              u.includes("Business") &&
                ((document.querySelector(
                  "#r-flight .FlightClass-text"
                ).innerText = "بیزینس"),
                (document.querySelector("#r-flight #FlightClass1").value =
                  "BusinessClass")),
              u.includes("First") &&
                ((document.querySelector(
                  "#r-flight .FlightClass-text"
                ).innerText = "فرست"),
                (document.querySelector("#r-flight #FlightClass1").value =
                  "FirstClass")),
              document
                .querySelector("#multi-flight-form")
                .classList.add("hidden"),
              document.querySelector("#r-flight").classList.remove("hidden"),
              (document.querySelector("#flightSearch").style.display = "flex");
            let f = document.querySelector(".serch-box-container");
            f && window.scrollTo({ top: f.offsetTop, behavior: "smooth" });
          }
        }
      });
  } catch (l) {}
}
questionBox.forEach((e) => {
  e.addEventListener("click", () => {
    let t = e.querySelector("#answer");
    t.classList.contains("hidden")
      ? (t.classList.remove("hidden"),
        e.querySelector("span").classList.add("-rotate-180"))
      : (t.classList.add("hidden"),
        e.querySelector("span").classList.remove("-rotate-180"));
  });
}),
  document.body.addEventListener("click", (e) => {
    questionBox.forEach((t) => {
      if (!t.contains(e.target)) {
        let r = t.querySelector("#answer");
        r.classList.add("hidden"),
          t.querySelector("span").classList.remove("-rotate-180");
      }
    });
  });
const flightCard = document.querySelectorAll(".flight-card");
flightCard.forEach((e) => {
  e.addEventListener("click", () => {
    let t = e.querySelector(".departureCity").innerText,
      r = e.querySelector(".destinationCity").innerText,
      l = e.querySelector(".depId").innerText,
      i = e.querySelector(".desId").innerText;
    (document.querySelector("#r-flight #flightSearch .FCD1").value = t),
      (document.querySelector("#r-flight #flightSearch .FCDid1").value = l),
      (document.querySelector("#r-flight #flightSearch .FCD2").value = r),
      (document.querySelector("#r-flight #flightSearch .FCDid2").value = i);
    let s = e.querySelector(".flight-type").innerText;
    s.includes("Economy") &&
      ((document.querySelector("#r-flight .FlightClass-text").innerText =
        "اکونومی"),
      (document.querySelector("#r-flight #FlightClass1").value = "Economy")),
      s.includes("Business") &&
        ((document.querySelector("#r-flight .FlightClass-text").innerText =
          "بیزینس"),
        (document.querySelector("#r-flight #FlightClass1").value =
          "BusinessClass")),
      s.includes("ّFirst") &&
        ((document.querySelector("#r-flight .FlightClass-text").innerText =
          "فرست"),
        (document.querySelector("#r-flight #FlightClass1").value =
          "FirstClass")),
      document.querySelector("#multi-flight-form").classList.add("hidden"),
      document.querySelector("#r-flight").classList.remove("hidden"),
      (document.querySelector("#flightSearch").style.display = "flex");
    var a = document.querySelector(".serch-box-container");
    a && window.scrollTo({ top: a.offsetTop, behavior: "smooth" });
  });
});
const soonCard = document.querySelector(".soon-card");
soonCard &&
  soonCard.addEventListener("click", () => {
    let e = soonCard.querySelector(".depId").innerText,
      t = soonCard.querySelector(".desId").innerText,
      r = soonCard.querySelector(".departureCity").innerText,
      l = soonCard.querySelector(".destinationCity").innerText;
    (document.querySelector("#r-flight #flightSearch .FCD1").value = r),
      (document.querySelector("#r-flight #flightSearch .FCDid1").value = e),
      (document.querySelector("#r-flight #flightSearch .FCD2").value = l),
      (document.querySelector("#r-flight #flightSearch .FCDid2").value = t);
    let i = soonCard.querySelector(".flight-type").innerText;
    i.includes("Economy") &&
      ((document.querySelector("#r-flight .FlightClass-text").innerText =
        "اکونومی"),
      (document.querySelector("#r-flight #FlightClass1").value = "Economy")),
      i.includes("Business") &&
        ((document.querySelector("#r-flight .FlightClass-text").innerText =
          "بیزینس"),
        (document.querySelector("#r-flight #FlightClass1").value =
          "BusinessClass")),
      i.includes("ّFirst") &&
        ((document.querySelector("#r-flight .FlightClass-text").innerText =
          "فرست"),
        (document.querySelector("#r-flight #FlightClass1").value =
          "FirstClass")),
      document.querySelector("#multi-flight-form").classList.add("hidden"),
      document.querySelector("#r-flight").classList.remove("hidden"),
      (document.querySelector("#flightSearch").style.display = "flex");
    var s = document.querySelector(".serch-box-container");
    s && window.scrollTo({ top: s.offsetTop, behavior: "smooth" });
  });
function checkChildren() {
  const searchBox = document.getElementById("search-box");
  const gapCondition = document.querySelector(".gap-condition");

  if (!searchBox || !gapCondition) return; // اگر searchBox یا gapCondition وجود نداشت، از تابع خارج شو

  if (searchBox.children.length === 0) {
    gapCondition.style.setProperty("margin-top", "20rem", "important");
  } else {
    gapCondition.style.removeProperty("margin-top");
  }
}

// نظارت دائمی بر تغییرات داخل #search-box در صورت وجود
const searchBox = document.getElementById("search-box");

if (searchBox) {
  const observer = new MutationObserver(checkChildren);
  observer.observe(searchBox, { childList: true });

  // اجرای اولیه چک
  checkChildren();
}
