<template>
    <div id="box2">
      <div id="header2">
        <a href=""><img src="../assets/11.jpg" alt="" id="img21"></a>
        <p id="p21">确认订单</p>
     </div>

     <div id="middle21">
        <div id="d21">
          <p>赵小琳</p>
          <p>185*********</p>
          <p>地址是什么什么***********</p>
        </div>
         <a href="" id="p22">></a>
     </div>

     <div id="middle22">
         <div><img src="../assets/17.jpg" alt=""></div>
         <div id="d22">
                 <p>新太阳镜时尚墨镜</p>
                 <p>规格：</p>
                 <p>墨绿色</p>
              </div>
         <div id="d23">
             <p>￥480</p>
             <p>x1</p>
         </div>
     </div>

      <div id="d24">
         <p>支付方式：</p>
         <p>货到付款</p>
         <a href="">></a>
     </div>
     <div id="d24">
         <p>积分：</p>
         <p>无</p>
         <a href="">></a>
     </div>
      <div id="d24">
         <p>优惠卷：</p>
         <p>无</p>
         <a href="">></a>
     </div>

     <div id="d25">
         <p>共一件商品</p>
         <p>总额：</p>
         <p>￥480</p>
     </div>

     <div id="d26">
         <p>总额：（不含运费）</p>
         <p>￥480</p>
         <button>提交订单</button>
     </div>
    </div>
</template>
<script>
</script>
<style scoped>
#box2{
   width:100%;
   height:100%;
   padding:0;
   margin:0;
   background-color:#f5f5f5;
   padding-top:18%;
   box-sizing:border-box;
   position:absolute;
}
#header2{
    width:100%;
   height:10%;
   padding-left:3.7%;
   padding-top:.133333rem;
   font-weight: bold;
   background-color:#fc1d4c;
   box-sizing:border-box;
   position:fixed;
   top:0;
   z-index: 1;
}
#img21{
   width:3.7%;
}
#p21{
  font-size:.16rem;
   color:white;
   display:inline-block;
   margin-left:38%;
}
#middle21{
    width:100%;
    height:20%;
    box-sizing: border-box;
    background-color:rgba(255, 255, 255, 0.5);
    padding-left:10px;
    padding-top:10px;
    /* border:1px black solid; */
}
#d21{
    display:inline-block;
    width:250px;
}
#d21 p{
    font-size:10px;
    color:black;
    font-weight:bold;
}
#d21 p:first-child{
    display:inline-block;
}
#d21 p:nth-child(2){
    display:inline-block;
    margin-left:15px;
}
#d21 p:nth-child(3){
    margin-top:10px;
}
#p22{
    vertical-align: top;
    margin-top:30px;
    float:right;
    margin-right:20px;
    font-size:10px;
    color:#848484;
    text-decoration: none;
}
#middle22{
    width:100%;
    height:15%;
    padding-left:10px;
    padding-top:10px;
    margin-top:2px;
    background-color:rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
}
#middle22 div:nth-child(1){
    display:inline-block;
}
#middle22 div:nth-child(1) img{
   width:65px;
   height:50px;
}
#d22{
   display:inline-block;
   height:35px;
   vertical-align: top;
   padding-left:10px;
   padding-top:10px;
   box-sizing:border-box;
}
#d23{
   float:right;
   height:35px;
   vertical-align: top;
   padding-left:10px;
   padding-top:10px;
   box-sizing:border-box;
   margin-right:10px;
}
#d23 p:first-child{
   font-size:10px;
   color:#fc1d4c;
   font-weight:bold;
}
#d23 p:nth-child(2){
    float:right;
    font-size:10px;
}
#d22 p:first-child{
   font-size:10px;
   color:black;
   font-weight:bold;
   margin-right:10px;
}
#d22 p{
   font-size:6px;
   color:#848484;
   }
#d22 p:nth-child(2){
   display:inline-block;
}
#d22 p:nth-child(3){
   display:inline-block;
}
#d24{
    height:5%;
    width:100%;
    padding-left:10px;
    padding-top:10px;
    background-color:rgba(255, 255, 255, 0.5);
    margin-bottom:1px;
    margin-top:1px;
    box-sizing:border-box;
    font-size:0;
}
#d24 p:first-child{
    font-size:10px;
    color:black;
    display:inline-block;
    font-weight:bold;
}
#d24 p:nth-child(2){
    font-size:10px;
    color:black;
    display:inline-block;
    font-weight:bold;
}
#d24 a{
    float:right;
    font-size:10px;
    color:#848484;
    text-decoration: none;
    margin-right:10px;
}
#d25{
    height:10%;
    width:100%;
    padding-left:10px;
    padding-top:10px;
    background-color:rgba(255, 255, 255, 0.5);
    margin-top:10px;
    box-sizing:border-box;
}
#d25 p{
    font-size:10px;
    font-weight: bold;
}
#d25 p:first-child{
    display:inline-block;
    color:black;
    margin-left:180px;
}
#d25 p:nth-child(2){
    margin-left:10px;
    display:inline;
}
#d25 p:nth-child(3){
    display:inline-block;
    color:#fc1d4c;
}
#d26{
    height:10%;
    width:100%;
    padding-left:10px;
    padding-top:20px;
    background-color:rgba(255, 255, 255, 0.5);
    margin-top:10px;
    box-sizing:border-box;
    font-size:0;
}
#d26 button{
   background-color: #fc1d4c;
   height:20px;
   width:50px;
   color:white;
   font-size:10px;
   text-align:center;
   border-radius: 8px;
   float:right;
   margin-right:10px;
}
#d26 p{
    font-size:10px;
    display:inline-block;
    font-weight: bold;
}
#d26 p:nth-child(1){
   color:black;
}
#d26 p:nth-child(2){
   color:#fc1d4c;
}
</style>
