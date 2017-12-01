const app=new Vue({
    el:"#app",
    data:{
        message:"",
        lists:["学习 Javascript","学习 Vue.js","学习某一个项目"]
    },
    //页面刷新时执行的内容
    created:function(){
        if(localStorage.getItem(1)!= null){
            //让当前的data里面的lists数组等于浏览器缓存的字符串转成数组的值
            this.lists=localStorage.getItem(1).split(",");
        }

    },
    methods:{
        btn:function(){
            this.lists.push(this.message);
            this.message="";
            localStorage.setItem(1,this.lists); //设置浏览器缓存
        },
        del:function(index){
            this.lists.splice(index,1);
            localStorage.setItem(1,this.lists)
        }
    }
});
