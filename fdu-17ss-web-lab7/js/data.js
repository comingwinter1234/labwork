const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];
(function () {
    for (let k = 0; k < 4; k++) {
        let div = document.createElement("div");
        div.className = "item";

        let p = document.createElement("p");

        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode(countries[k].name);
        h2.appendChild(h2Text);
        p.appendChild(h2);

        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(countries[k].continent);
        h3.appendChild(h3Text);
        p.appendChild(h3);

        let ul1 = document.createElement("ul");
        ul1.className = "inner-box";
        let fragment = document.createDocumentFragment();
        let li = null;
        let text;
        for (let i = 0; i < 3; i++) {
            li = document.createElement("li");
            text = document.createTextNode(countries[k].cities[i]);
            li.appendChild(text);
            fragment.appendChild(li);
        }
        ul1.appendChild(fragment);
        p.appendChild(ul1);

        let ul2 = document.createElement("ul");
        ul2.className = "inner-box";
        let img = null;
        for (let i = 0; i < countries[k].photos.length; i++) {
            li = document.createElement("li");
            img = document.createElement("img");
            img.src = countries[k].photos[i];
            img.className = "photo";
            li.appendChild(img);
            fragment.appendChild(li);
        }
        ul2.appendChild(fragment);
        p.appendChild(ul2);

        button = document.createElement("button");
        botton.value = "visit";
        p.appendChild(button);

        div.appendChild(p);


        var p2 = document.createElement("p");
        var text2 = document.createTextNode("1234");
        p2.appendChild(text2);
        document.getElementsByTagName("header").appendChild(p2);
        document.getElementsByClassName("flex-container")[0].appendChild(div);
    }
})();