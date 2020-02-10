<template>
    <div id="box4">

       <div id="header4">
        <a href=""><img src="../assets/11.jpg" alt="" id="img41"></a>
        <p id="p41">订单完成</p>
       </div>
      <!-- <div id="410"> -->
       <div id="d42">
         <input type="checkbox" name="checkbox" id="check1" @click="checkbox">
        <div id="d43"><img src="../assets/17.jpg" alt=""></div>
       <div id="d44">
        <p>新款太阳镜</p>
        <p>规格：</p>
        <div id="d45">
           <p>￥480</p>
           <div id="d46">
              <button>-</button>
              <p>1</p>
              <button>+</button>
           </div>
        </div>
       </div>
        </div>

        <div id="d47">
         <input type="checkbox" name="checkbox" id="check2" @click="checkbox">
        <div id="d43"><img src="../assets/17.jpg" alt=""></div>
       <div id="d44">
        <p>新款太阳镜</p>
        <p>规格：</p>
        <div id="d45">
           <p>￥480</p>
           <div id="d48">
              <button>-</button>
              <p>1</p>
              <button>+</button>
           </div>
        </div>
       </div>
      </div>
      <!-- </div> -->
      <div id="d413"></div>
      <div id="d49">
         <p>已选2条</p>
         <div id="d411">
            <p>合计：</p>
            <p>￥480</p>
         </div>

         <div id="d412">
            <input type="checkbox" name="AllCheckBox" id="checkAll" @click="checkAll">
            <p>全选</p>
              <button>去结算</button>
         </div>
      </div>

    <myfooter />

    </div>
</template>
<script>
import myfooter from '../components/myfooter'
export default {
   methods:{
    //判断全选 或者 全不选
checkAll(){
     if($('input[name="AllCheckBox"]').prop("checked")==false){
　　　　$('input[name="checkbox"]').each(function(){
　　　　　　$("input[name='checkbox']").prop("checked",false);
　　　　});
　　}
     else　if($("input[name='AllCheckBox']:checked")){//is() 方法用于查看选择的元素是否匹配选择器。
　　　　$('input[name="checkbox"]').each(function(){//each给每个匹配元素运行
　　　　　　//此处如果用attr，会出现第三次失效的情况
　　　　  //prop() 方法设置或返回被选元素的属性和值。
         $('input[name="checkbox"]').prop("checked",true);
　　　　});
    }
},

//判断当全选时 若有一个不选 全选按钮为不选状态
checkbox(){
　　var checkedLength = $("input[name='checkbox']:checked").length;
　　var checkLength = $("input[name='checkbox']").length;
　　if(checkLength == checkedLength){
　　　　　　$("input[name='AllCheckBox']").prop("checked",true);
　　　　　　return true;
　　　　}else{
　　　　　　$("input[name='AllCheckBox']").prop("checked",false);
　　　　　　return true; 
　　　　}
}
  },
  components: {
    myfooter
  }
}
</script>
<style scoped>
body,html{
   height:100%;
   width:100%;
}
#box4{
   width:100%;
   height:100%;
   padding:0;
   margin:0;
   background-color:#f5f5f5;
   padding-bottom:7.3%;
   position:absolute;
   margin-top:18%;
}
#header4{
   width:100%;
   height:10%;
   padding-left:3.7%;
   /* padding-top:13px; */
   font-weight: bold;
   background-color:#fc1d4c;
   box-sizing:border-box;
   position:fixed;
   top:0;
}
#img41{
   width:3.7%;
   /* height:100%; */
}
#p41{
   font-size:.16rem;
   color:white;
   display:inline-block;
   margin-left:38%;
   /* height:60%; */
}
#d42,#d47{
    width:100%;
    height:18%;
    padding-left:10px;
    padding-top:10px;
    background-color:rgba(255, 255, 255, 0.5);
    box-sizing:border-box;
}
#check1,#check2{
   list-style:none;
   color:#fc1d4c;
   border-radius: 50%;
}
#d43{
   width:20%;
   height:80%;
   border:1px #848484 solid;
   border-radius: 15%;
   display:inline-block;
}
#d43 img{
   width:100%;
   height:100%;
   border-radius: 15%;
}
#d44{
   width:60%;
   height:100%;
   margin-left:3.7%;
   display:inline-block;
   vertical-align: top;
}
#d44 p:nth-child(1){
   font-size:10px;
   font-weight:bold;
   color:black;
   margin-bottom:5px;
}
#d44 p:nth-child(2){
   font-size:8px;
   color:#848484;
}
#d45{
   width:100%;
   /* height:50px; */
   /* margin-top:20px; */
   /* padding-top:20px; */
   box-sizing:border-box;
}
#d45 p:nth-child(1){
   font-size:10px;
   font-weight:bold;
   color:#fc1d4c;
   display:inline-block;
   vertical-align: top;
}
#d46,#d48{
   display:inline-block;
   margin-left:50%;
}
#d46 button{
   list-style:none;
   padding:0;
   margin:0;
   font-size:10px;
   display:inline-block;
   width:16px;
   height:16px;
   border:1px #848484 solid;
   vertical-align: top;
}
#d48 button{
   list-style:none;
   padding:0;
   margin:0;
   font-size:10px;
   display:inline-block;
   width:16px;
   height:16px;
   border:1px #848484 solid;
   vertical-align: top;
}
#d46 p{
   display:inline-block;
   width:16px;
   height:16px;
   border:1px #848484 solid;
   box-sizing:border-box;
   vertical-align: top;
   text-align:center;
}
#d48 p{
   display:inline-block;
   width:16px;
   height:16px;
   border:1px #848484 solid;
   box-sizing:border-box;
   vertical-align: top;
   text-align:center;
}
#d47{
   margin-top:2px;
}
/* #d410{
   overflow: hidden;
} */
#d413{
   width:100%;
   height:35%;
}
#d49{
   width:100%;
   margin-left:10px;
}
#d49 p{
   font-size:8px;
   color:#848484;
   display:inline-block;
   font-weight:bold;
}
#d411{
   font-size:10px;
   font-weight: bold;
   display:inline-block;
   margin-left:45%;
}
#d411 p:nth-child(1){
   color:black;
   display:inline-block;
}
#d411 p:nth-child(2){
   color:#fc1d4c;
   display:inline-block;
}
#d412{
   width:100%;
   height:7.5%;
   background-color:rgba(255, 255, 255, 0.5);
   padding-right:10px;
   padding-left:10px;
   box-sizing: border-box;

}
#checkAll{
    display:inline-block;
}
#d412 p{
    color:black;
    font-size:10px;
    font-weight:bold;
    display:inline-block;
    margin-top:30px;
}
#d412 button{
   margin:0;
   padding:0;
   list-style:none;
   background-color: #fc1d4c;
   width:25%;
   height:100%;
   border:none;
   color:white;
   float:right;
   font-size:10px;
}
</style>
