{
    let imgs = document.querySelectorAll(".imgbox li");
    let pagers = document.querySelectorAll(".pagers li");
    let banner = document.querySelector("#banner");
    let banner_lbtn = document.querySelector(".banner_lbtn");
    let banner_rbtn = document.querySelector(".banner_rbtn");
    pagers.forEach(function (ele, index) {

        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active2");
            }
            imgs[index].classList.add("active");
            this.classList.add("active2");
            n = index;
        }
    })

    let t = setInterval(move, 3000);
    let n = 0;

    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active2");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active2");
    }

    banner.onmouseenter = function () {
        // alert(1);
        clearInterval(t);
    }
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
    }
    let flag = true;
    banner_rbtn.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }

    }
    banner_lbtn.onclick = function () {
        if (flag) {
            flag = false;
            n -= 2;
            move();
        }

    }
    imgs.forEach(function (ele, index) {
        ele.addEventListener("transitionend", function () {
            flag = true;
        })
    })


}
//闪购效果
{
    const prev = document.querySelector(".star_btn_x");
    const next = document.querySelector(".star_btn_d");
    const inner = document.querySelector(".buy_inner");
    // console.log(next);
    let n = 0;
    next.onclick = function () {
        n++;
        prev.classList.remove("disable");
        if (n === 2) {
            this.classList.add("disable");
        }
        if (n === 3) {
            n = 2;
            return;
        }
        inner.style.marginLeft = -992 * n + "px";
    }
    prev.onclick = function () {
        n--;
        next.classList.remove("disable");
        if (n === 0) {
            this.classList.add("disable");
        }
        if (n === -1) {
            n = 0;
            return;
        }
        inner.style.marginLeft = -992 * n + "px";
    }
}
//content
{
    function content(parent) {


        const types = parent.querySelectorAll(".dapei span");
        const goods = parent.querySelectorAll(".goodlist");
        // console.log(goods);
        // console.log(types);
        types.forEach(function (ele, index) {
            ele.onmouseenter = function () {
                for (let i = 0; i < types.length; i++) {
                    types[i].classList.remove("active");
                    goods[i].classList.remove("active1");
                }
                this.classList.add("active");
                goods[index].classList.add("active1");
            }
        })
    }

    contentList = document.querySelectorAll(".dapei");
    contentList.forEach(function (ele) {
        content(ele);
    });
}
//内容部分
{
    function wheel(parent) {
        const prev = parent.querySelector(".reping_bottom_1_left");
        const next = parent.querySelector(".reping_bottom_1_right");
        const inner = parent.querySelector(".neirongbig")
        var pagers = parent.querySelectorAll(".reping_bottom_1_dianbig_1");
        let contents=parent.querySelectorAll(".neirongbao");
        let n = 0;
        next.onclick = function () {

            n++;
            if(n===contents.length){
                n=contents.length-1;
                return;
            }
            inner.style.marginLeft = -296 * n + "px";
            pagers[n].classList.add("reping_bottom_1_dianbig_1_bian");
            pagers[n - 1].classList.remove("reping_bottom_1_dianbig_1_bian");
            obj = pagers[n];
        }
        prev.onclick = function () {
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft = -296 * n + "px";
            pagers[n].classList.add("reping_bottom_1_dianbig_1_bian");
            pagers[n + 1].classList.remove("reping_bottom_1_dianbig_1_bian");
            obj = pagers[n];
        }
        let obj = pagers[0];
        pagers.forEach(function (ele, index) {
                ele.onclick = function () {
                    obj.classList.remove("reping_bottom_1_dianbig_1_bian");
                    this.classList.add("reping_bottom_1_dianbig_1_bian");
                    obj = this;
                    inner.style.marginLeft = index * -296 + "px";
                    n=index;
                }
            }
        )
    }
    contentList = document.querySelectorAll(".reping_bottom_top_1 ");
    contentList.forEach(function (ele) {
        wheel(ele);
    });

}
{
    let labels=document.querySelectorAll(".banner_nav li");
    let menus=document.querySelectorAll(".banner_nav_tan");
    let obj=menus[0];
    labels.forEach(function (ele,index) {
        ele.onmouseenter=function () {

            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function () {
            menus[index].style.display="none";
        }
    })

}
{
    let labels=document.querySelectorAll(".nav_wenzi li");
    let menus=document.querySelectorAll(".nav_wenzi_bottom");
    let obj=menus[0];
    labels.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            menus[index].style.borderTop="1px solid #afafaf";
            menus[index].style.height="230px";
            obj=menus[index];
        }
        ele.onmouseleave=function () {


            menus[index].style.height="0px";
            menus[index].style.borderTop="";

        }
    })


}