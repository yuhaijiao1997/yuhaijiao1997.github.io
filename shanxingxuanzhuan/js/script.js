/**
 * Created by lenovo on 17/10/10 010.
 */
window.onload = function () {
    var li = document.querySelectorAll("#nav li");
    var on = true;
    li[li.length - 1].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            var n = i - li.length / 2;
            if (on) {
                n = n * 15;
            } else {
                n = 360;
            }
            li[i].style.transform = "rotateZ(" + n + "deg)";
        }
        on = !on;
    };
    for (var i = 0; i < li.length - 1; i++) {
        li[i].index = i;//通过自定义属性赋值下标值
        //点击当前对象，旋转到0度
        li[i].onclick = function () {
            this.style.transform = "rotateZ(0deg)";
            //当前点击的导航的左边的导航，依次旋转
            var leftDeg = 0;//当前点击的左边旋转的度数
            for (var i = this.index - 1; i >= 0; i--) {
                leftDeg -= 15;//也可写为leftDeg=leftDeg-15;
                li[i].style.transform = "rotate(" + leftDeg + "deg)";
            }


            //当前点击的导航的右边的导航，依次旋转
            var rightDeg = 15;//当前点击的右边旋转的度数
            for (var i = this.index + 1; i < li.length; i++) {
                rightDeg += 15;
                li[i].style.transform = "rotateZ(" + rightDeg + "deg)";
            }
        }
    }
};
