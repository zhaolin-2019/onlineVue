<template>
    <div id="bottom1">
      <ul id="bul">
       <li><img src="../assets/41.png" alt=""><p>首页</p></li>
       <li><img src="../assets/42.jpg" alt=""><p>分类</p></li>
       <li><img src="../assets/43.png" alt=""><p>消息</p></li>
       <li><img src="../assets/44.png" alt=""><p>购物车</p></li>
       <li><img src="../assets/45.jpg" alt=""><p>我的</p></li>
      </ul>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
#bottom1{
    width:100%;
    height:7.3%;
    background-color:#f5f5f5;
    position:fixed;
    bottom: 10px;
}
#bul{
     margin:0;
    padding:0;
    height:100%;
    width:100%;
    /* padding-top:.066667rem; */
    box-sizing:border-box;
}
#bul li{
    margin:0;
    padding:0;
    display:inline-block;
    height:100%;
    width:8%;
}
#bul li:first-child{
    margin-left:6.5%;
}
#bul li{
    margin-left:13%;
}
#bul li p{
    width:87%;
    font-size:.106667rem;
    font-weight:bold;
    color:#848484;
    text-align:center;
}
#bul img{
    width:70%;
    height:50%;
}
</style>
