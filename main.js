document.onreadystatechange = () => {
  switch (document.readyState) {
    case "interactive":
      var collections = document.getElementsByClassName("imageCollection");
      for (i = -1; i++, i < collections.length; ) {
        var collection = collections[i];
        var images = [];
        var children = collection.children;
        for (i = -1; i++, i < children.length; ) {
          images.push(children[i].src);
        }
        collection.innerHTML = "";

        var imgElements = [];
        for (i = -1; i++, i < 2; ) {
          var div = document.createElement("div");
          div.className = "imageCollectionChild";
          collection.appendChild(div);

          var img = document.createElement("img");
          div.appendChild(img);
          img.src = images[i];

          imgElements[i] = div;
        }

        var m = 0;
        function t() {
          m = (m + 1 < images.length && m + 1) || 0;
          imgElements[1].style["animation-name"] = "animate";

          setTimeout(() => {
            var img1 = imgElements[0].children[0],
              img2 = imgElements[1].children[0];
            imgElements[1].style["animation-name"] = "";
            img1.src = images[m];
            img2.src = images[(m + 1 < images.length && m + 1) || 0];
          }, 1000);
        }
        imgElements[1].style.width = "0%";
        setInterval(t, 2000);
      }
      break;
  }
};
