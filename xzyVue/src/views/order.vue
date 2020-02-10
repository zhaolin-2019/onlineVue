<template>
   <div id="box1">
     <div id="header1">
        <a href=""><img src="../assets/11.jpg" alt="" id="img11"></a>
        <p id="p12">我的订单</p>
     </div>
     <ul id="middle11">
        <li><a href=""><div ><img src="../assets/16.jpg" alt=""></div><p>全部</p></a></li>
        <li><a href=""><div ><img src="../assets/12.jpg" alt=""></div><p>待付款</p></a></li>
        <li><a href=""><div ><img src="../assets/13.jpg" alt=""></div><p>已付款</p></a></li>
        <li><a href=""><div ><img src="../assets/14.jpg" alt=""></div><p>配货中</p></a></li>
        <li><a href=""><div ><img src="../assets/15.jpg" alt=""></div><p>评论</p></a></li>
     </ul>
     <div id="middle12">
        <div>
            <div id="d11">
            <p>订单号：</p>
            <p>567890-67890</p>
            <button>物流信息</button>
           </div>

           <div id="top12">
             <div id="top13">
              <div id="img12">
                 <img src="../assets/17.jpg" alt="">
              </div>
              <div id="d12">
                 <p>新太阳镜时尚墨镜</p>
                 <p>规格：</p>
                 <p>墨绿色</p>
              </div>
               <div id="d13">x1</div>
               <div id="d14">￥229.00</div>
           </div>
            <div id="top13">
              <div id="img12">
                 <img src="../assets/17.jpg" alt="">
              </div>
              <div id="d12">
                 <p>新太阳镜时尚墨镜</p>
                 <p>规格：</p>
                 <p>墨绿色</p>
              </div>
               <div id="d13">x1</div>
               <div id="d14">￥229.00</div>
           </div>
        </div>
    </div>

        <ul id="ul11" @click="hid1">
           <li></li>
           <li></li>
           <li></li>
        </ul>

        <p id="p13">共2件商品</p>
        <div id="d15">
            <div id="d16">
             <p>合计:</p>
             <p>￥480.00</p>
            </div>
           <button>确认收货</button>
        </div>
     </div>

     <div id="middle13">
         <div>
            <div id="d11">
            <p>订单号：</p>
            <p>567890-67890</p>
            <button>物流信息</button>
           </div>

           <div id="top14">
            <div id="top13">
              <div id="img12">
                 <img src="../assets/17.jpg" alt="">
              </div>
              <div id="d12">
                 <p>新太阳镜时尚墨镜</p>
                 <p>规格：</p>
                 <p>墨绿色</p>
              </div>
               <div id="d13">x1</div>
               <div id="d14">￥229.00</div>
           </div>

            <div>
              <div id="img12">
                 <img src="../assets/17.jpg" alt="">
              </div>
              <div id="d12">
                 <p>新太阳镜时尚墨镜</p>
                 <p>规格：</p>
                 <p>墨绿色</p>
              </div>
               <div id="d13">x1</div>
               <div id="d14">￥229.00</div>
           </div>
            <div id="top13">
              <div id="img12">
                 <img src="../assets/17.jpg" alt="">
              </div>
              <div id="d12">
                 <p>新太阳镜时尚墨镜</p>
                 <p>规格：</p>
                 <p>墨绿色</p>
              </div>
               <div id="d13">x1</div>
               <div id="d14">￥229.00</div>
           </div>
         </div>
        </div>

        <ul id="ul12" @click="hid2">
           <li></li>
           <li></li>
           <li></li>
        </ul>

        <p id="p13">共2件商品</p>
        <div id="d15">
            <div id="d16">
             <p>合计:</p>
             <p>￥480.00</p>
            </div>
           <button>确认收货</button>
        </div>
     </div>
   </div>
</template>
<script>
export default {
  methods: {
    hid1 () {
      let a = document.getElementById('top12')
      a.style.overflow = 'auto'
    },
    hid2 () {
      let a = document.getElementById('top14')
      a.style.overflow = 'auto'
    }
  }
}
</script>
<style scoped>
#box1{
   width:275px;
   height:100%;
   padding:0;
   margin:0;
   background-color:#f5f5f5;
   padding-bottom:5px;
}
#header1{
   width:275px;
   height:30px;
   padding:0;
   font-weight: bold;
   background-color:#fc1d4c;
   position:relative;
}
#img11{
   width:10px;
   height:10px;
   margin-left:10px;
   margin-top:10px;
}
#p12{
   font-size:8px;
   color:white;
   position:absolute;
   left:50%;
   top:50%;
   transform:translateX(-50%) translateY(-50%);
}
#middle11{
   width:275px;
   height:70px;
   background-color:rgba(255, 255, 255, 0.5);
   padding-left:13px;
   padding-top:15px;
   box-sizing: border-box;
}
#middle11 li{
   width:30px;
   height:40px;
   display:inline-block;
   margin-right:25px;
}
#middle11 li:last-child{
    margin-right:10px;
}
#middle11 div{
   width:30px;
   height:30px;
   background-color:white;
}
#middle11 img{
   width:30px;
   height:30px;
   border-radius: 50%;
}
#middle11 a{
   list-style:none;
   text-decoration: none;
   color:#848484;
   font-size:8px;
   text-align:center;
}
#middle11 p:hover{
   color:#fc1d4c;
}
#middle11 img:first-child{
   margin: 0 auto;
}
#middle11 img:nth-child(2){
   margin: 0 auto;
   margin-top:5px;
}
#middle11 img:nth-child(3){
   margin: 0 auto;
   margin-top:5px;
}
#middle11 img:nth-child(4){
   margin: 0 auto;
   margin-top:5px;
}#middle11 img:nth-child(5){
   margin: 0 auto;
   margin-top:5px;
}

#middle12,#middle13{
   width:255px;
   height:180px;
   background-color:rgba(255, 255, 255, 0.5);
   margin-left:10px;
}
#middle12,#middle13{
   margin-top:5px;
   margin-bottom:10px;
   padding-left:10px;
   padding-top:10px;
   box-sizing:border-box;
}
#d11{
   height:10px;
   width:255px;
   margin-bottom:15px;
}
#d11 p{
   font-size:6px;
   color:#848484;
   display:inline-block;
}
#d11 button{
   margin:0;
   padding:0;
   box-sizing: border-box;
   display:inline-block;
   border:1px #848484 solid;
   border-radius:15%;
   width:40px;
   height:10px;
   margin-left:120px;
   font-size:6px;
}
#top12,#top14{
   height:80px;
   margin-bottom:10px;
   overflow: hidden;
}
#top13{
   height:35px;
   margin-bottom:10px;
}
#img12{
   width:35px;
   height:35px;
   display:inline-block;
   margin-right:5px;
   box-sizing:border-box;
}
#img12 img{
   width:35px;
   height:35px;
}
#d12{
   display:inline-block;
   height:35px;
   vertical-align: top;
}
#d12 p:first-child{
   font-size:10px;
   color:black;
   font-weight:bold;
}
#d12 p{
   font-size:6px;
   color:#848484;
   }
#d12 p:nth-child(2){
   display:inline-block;
}
#d12 p:nth-child(3){
   display:inline-block;
}
#d13,#d14{
   height:35px;
   color:black;
   font-size:8px;
   display:inline-block;
   vertical-align: top;
   margin-left:30px;
   padding-top:3px;
}
#ul11,#ul12{
   margin-left:100px;
}
#ul11 li{
   width:3px;
   height:3px;
   background-color:#848484;
   border-radius: 50%;
   display:inline-block;
   margin-left:5px;
}
#ul12 li{
   width:3px;
   height:3px;
   background-color:#848484;
   border-radius: 50%;
   display:inline-block;
   margin-left:5px;
}
#ul11:hover li{
  background-color:#fc1d4c;
}
#ul11:hover li{
  background-color:#fc1d4c;
}
#p13{
   font-size:6px;
   color:#848484;
   height:6px;
   margin-bottom:5px;
   margin-top:5px;
}
#d16{
   height:20px;
   font-size:10px;
   font-weight: bold;
   display: inline-block;
}
#d16 p{
   display:inline-block;
}
#d15 button{
   background-color: #fc1d4c;
   height:20px;
   width:50px;
   color:white;
   font-size:10px;
   text-align:center;
   border-radius: 8px;
   margin-left:120px;
}
</style>
