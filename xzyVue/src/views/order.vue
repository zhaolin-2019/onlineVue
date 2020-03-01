<template>
   <div id="box1">
     <div id="header1">
        <a href=""><img src="../assets/11.jpg" alt="" id="img11"></a>
        <p id="p12">我的订单</p>
     </div>
     <ul id="middle11">
        <li><a href=""><div ><img src="../assets/16.jpg" alt=""></div><p>全部</p></a></li><!--
        --><li><a href=""><div ><img src="../assets/12.jpg" alt=""></div><p>待付款</p></a></li><!--
         --><li><a href=""><div ><img src="../assets/13.jpg" alt=""></div><p>已付款</p></a></li><!--
         --><li><a href=""><div ><img src="../assets/14.jpg" alt=""></div><p>配货中</p></a></li><!--
         --><li><a href=""><div ><img src="../assets/15.jpg" alt=""></div><p>评论</p></a></li>
     </ul>

     <div id="middle12">
          <div id="d11" v-for="order1 in orders1" :key="order1.id">
            <p>订单号：</p>
            <p>{{order1.id}}</p>
            <button>物流信息</button>
           </div>

           <div id="top12" v-for="good1 in goods1" :key="good1.name">

             <!-- <div id="top13"> -->
              <div id="img12">
                 <img src="../assets/17.jpg" alt="">
              </div>
              <div id="d12">
                 <p>{{good1.name}}</p>
                 <p>规格：</p>
                 <p>{{good1.style}}</p>
              </div>
               <div id="d13">{{good1.number}}</div>
               <div id="d14">￥{{good1.price}}</div>
              </div>
        <!-- </div> -->
        </div>

        <ul id="ul11" @click="hid1">
           <li></li>
           <li></li>
           <li></li>
        </ul>

        <!-- <div v-for="allprice1 in allprice1" :key="allprice1.name"> -->
        <p id="p13" v-for="allprice1 in allprice1" :key="allprice1.allnumber">共{{allprice1.allnumber}}件商品</p>
        <div id="d15"><!--
            --><div id="d16">
             <p>合计:</p>
             <p v-for="allprice1 in allprice1" :key="allprice1.allnumber">{{allprice1.Allprice}}</p>
            </div>
           <button>确认收货</button>
 </div>

     <div id="middle13">
          <div id="d11" v-for="order2 in orders2" :key="order2.id">
            <p>订单号：</p>
            <p>{{order2.id}}</p>
            <button>物流信息</button>
           </div>

           <div id="top12" v-for="good2 in goods2" :key="good2.name">

             <!-- <div id="top13"> -->
              <div id="img12">
                 <img src="../assets/17.jpg" alt="">
              </div>
              <div id="d12">
                 <p>{{good2.name}}</p>
                 <p>规格：</p>
                 <p>{{good2.style}}</p>
              </div>
               <div id="d13">{{good2.number}}</div>
               <div id="d14">￥{{good2.price}}</div>
              </div>
        <!-- </div> -->
        </div>

        <ul id="ul12" @click="hid1">
           <li></li>
           <li></li>
           <li></li>
        </ul>
        <p id="p13" v-for="allprice2 in allprice2" :key="allprice2.Allprice">共{{allprice2.allnumber}}件商品</p>
        <div id="d15"><!--
            --><div id="d16">
             <p>合计:</p>
             <p v-for="allprice2 in allprice2" :key="allprice2.Allprice">{{allprice2.Allprice}}</p>
            </div>
           <button>确认收货</button>
 </div>  
 </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
      return{
        goods1:[],
        orders1:[],
        goods2:[],
        orders2:[],
        allprice1:[],
        allprice2:[]
      }
  },
  methods: {
    hid1 () {
      let a = document.getElementById('top12')
      a.style.overflow = 'auto'
    },
    hid2 () {
      let a = document.getElementById('top14')
      a.style.overflow = 'auto'
    }
  },
     created(){
           axios.get('http://localhost:3000/goods1')
            .then((res)=>{//res是response
                this.goods1=res.data
            }),
              axios.get('http://localhost:3000/orders1')
            .then((res)=>{//res是response
                this.orders1=res.data
            }),
            axios.get('http://localhost:3000/goods2')
            .then((res)=>{//res是response
                this.goods2=res.data
            }),
              axios.get('http://localhost:3000/orders2')
            .then((res)=>{//res是response
                this.orders2=res.data
            }),
            axios.get('http://localhost:3000/allprice1')
            .then((res)=>{//res是response
                this.allprice1=res.data
            }),
              axios.get('http://localhost:3000/allprice2')
            .then((res)=>{//res是response
                this.allprice2=res.data
            })
  }
}
</script>
<style scoped>
#box1{
   width:100%;
   height:100%;
   padding:0;
   margin:0;
   background-color:#f5f5f5;
   padding-top:18%;
   box-sizing:border-box;
   position:absolute;
}
#header1{
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
#img11{
    width:3.7%;
}
#p12{
   font-size:.16rem;
   color:white;
   display:inline-block;
   margin-left:38%;
}
#middle11{
   width:100%;
   height:20%;
   background-color:rgba(255, 255, 255, 0.5);
   box-sizing: border-box;
}
#middle11 li{
   width:20%;
   height:50%;
   display:inline-block;
   text-align: center;
   position:relative;
   margin-top:8%;
}
#middle11 li:last-child{
    margin-right:none;
}
#middle11 div{
   width:50px;
   height:50px;
   background-color:white;
   border-radius: 50%;
   text-align:center;
   display:inline-block;
}
#middle11 img{
   width:50px;
   height:50px;
   border-radius: 50%;
   position:absolute;
   left:50%;
   transform: translateX(-50%);
}
#middle11 a{
   list-style:none;
   text-decoration: none;
   color:#848484;
   font-size:10px;
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
   width:100%;
   height:28%;
   /* background-color:rgba(255, 255, 255, 0.5); */
   margin-top:5px;
   margin-bottom:5px;
   padding-left:20px;
   /* padding-top:10px; */
   box-sizing:border-box;
}
#d11{
   width:100%;
   margin-bottom:10px;
   font-size: 0;
}
#d11 p{
   font-size:10px;
   color:#848484;
   display:inline-block;
   padding:0;
   margin:0;
}
#d11 button{
   margin:0;
   padding:0;
   box-sizing: border-box;
   display:inline-block;
   border:1px #848484 solid;
   border-radius:15%;
   width:40px;
   height:20px;
   margin-left:120px;
   font-size:6px;
}
#top12,#top14{
   height:40%;
   margin-bottom:5px;
   overflow: hidden;
}
/* #top13{
   height:20%;
} */
#img12{
   width:50px;
   height:50px;
   display:inline-block;
   margin-right:5px;
   box-sizing:border-box;
}
#img12 img{
   width:50px;
   height:50px;
}
#d12{
   display:inline-block;
   height:20px;
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
   height:20px;
   color:black;
   font-size:8px;
   display:inline-block;
   vertical-align: top;
   margin-left:30px;
   padding-top:3px;
}
#ul11,#ul12{
   width:100%;
   height:10px;
   margin:0;
   padding:0;
   padding-left:45%;
   box-sizing: border-box;
   list-style: none;
   font-size:0;

}
#ul11 li{
   width:3px;
   height:3px;
   background-color:#848484;
   border-radius: 50%;
   float: left;
   margin-right:10px;
}
#ul12 li{
   width:3px;
   height:3px;
   background-color:#848484;
   border-radius: 50%;
   float: left;
   margin-left:10px;
}
#ul11:hover li{
  background-color:#fc1d4c;
}
#ul12:hover li{
  background-color:#fc1d4c;
}
#p13{
   font-size:6px;
   color:#848484;
   height:6px;
   margin-bottom:5px;
   margin-top:5px;
   padding-left:20px;

}
#d15{
   padding:0;
   font-size: 0;
   margin-top:10px;
   padding-left:20px;

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
