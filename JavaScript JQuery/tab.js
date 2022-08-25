// $(".tab-button")
//   .eq(0)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(0).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(0).addClass("show");
//   });

// $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(1).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(1).addClass("show");
//   });

// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(2).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(2).addClass("show");
//   });

// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       $(".tab-button").removeClass("orange");
//       $(".tab-button").eq(i).addClass("orange");
//       $(".tab-content").removeClass("show");
//       $(".tab-content").eq(i).addClass("show");
//     });
// }

// 더 더 확장성 있는 코드
// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       openTab(i);
//     });
// }

function openTab(i) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(i).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(i).addClass("show");
}

// 탭기능 다르게 만들어보기 (이벤트리스너 1개만 써서!)
$(".list").click(function (e) {
  openTab(e.target.dataset.id);
});
