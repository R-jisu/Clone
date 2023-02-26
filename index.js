const images = [
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__480.jpg",
  "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189__480.jpg",
  "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404__480.jpg",
];

function imageSlider(parent, images) {
  let currentImg = 0;
  const slider = {
    parent: parent,
    images: parent.querySelector(".images"),
    thumbnails: parent.querySelector(".thumbnails"),
    backBtn: parent.querySelector(".back-btn"),
    nextBtn: parent.querySelector(".next-btn"),
  };

  slider.images.innerHTML = images.map((el) => `<img src=${el} />`).join("");

  let imageNodes = slider.images.querySelectorAll("img"); //img 태그 모두 가져오기
  imageNodes[currentImg].classList.add("active");

  slider.thumbnails.innerHTML = slider.images.innerHTML;

  let thumbnailNodes = slider.thumbnails.querySelectorAll("img");
  thumbnailNodes[currentImg].classList.add("active");

  for (let i = 0; i < thumbnailNodes.length; i++) {
    thumbnailNodes[i].addEventListener("click", () => {
      slider.thumbnails.querySelector("img.active").classList.remove("active");
      slider.images.querySelector("img.active").classList.remove("active");
      currentImg = i;
      thumbnailNodes[currentImg].classList.add("active");
      imageNodes[currentImg].classList.add("active");
    });
  }

  slider.backBtn.addEventListener("click", () => {
    imageNodes[currentImg].classList.remove("active");
    thumbnailNodes[currentImg].classList.remove("active");
    currentImg =
      currentImg - 1 < 0 ? thumbnailNodes.length - 1 : currentImg - 1;
    imageNodes[currentImg].classList.add("active");
    thumbnailNodes[currentImg].classList.add("active");
  });

  slider.nextBtn.addEventListener("click", () => {
    imageNodes[currentImg].classList.remove("active");
    thumbnailNodes[currentImg].classList.remove("active");
    currentImg = (currentImg + 1) % thumbnailNodes.length;
    imageNodes[currentImg].classList.add("active");
    thumbnailNodes[currentImg].classList.add("active");
  });
}

imageSlider(document.querySelector(".image-slider"), images);
