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
         <p>配送日期：</p>
         <p>预计2020-2-5</p>
         <a href="">></a>
     </div>
     <div id="d24">
         <p>支付方式：</p>
         <p>货到付款</p>
         <a href="">></a>
     </div>
     <div id="d24">
         <p>发票信息:</p>
         <p>个人</p>
         <a href="">></a>
     </div>
    </div>
</template>
<script>
</script>
<style scoped>
#box2{
   width:275px;
   padding:0;
   margin:0;
   background-color:#f5f5f5;
   padding-bottom:5px;
}
#header2{
   width:275px;
   height:30px;
   padding:0;
   font-weight: bold;
   background-color:#fc1d4c;
   position:relative;
}
#img21{
   width:10px;
   height:10px;
   margin-left:10px;
   margin-top:10px;
}
#p21{
   font-size:8px;
   color:white;
   position:absolute;
   left:50%;
   top:50%;
   transform:translateX(-50%) translateY(-50%);
}
#middle21{
    width:275px;
    height:85px;
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
    display:inline-block;
    font-size:10px;
    color:#848484;
    text-decoration: none;
}
#middle22{
    width:275px;
    height:65px;
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
    height:35px;
    width:275px;
    padding-left:10px;
    padding-top:10px;
    background-color:rgba(255, 255, 255, 0.5);
    margin-top:1px;
    box-sizing:border-box;
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
</style>
