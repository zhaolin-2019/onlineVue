<template>
    <div id="box3">
       <div id="header3">
        <a href=""><img src="../assets/11.jpg" alt="" id="img31"></a>
        <p id="p31">订单完成</p>
     </div>
     <div id="d31">
      <p>订单编号：</p>
      <p>订单金额：</p>
      <p>付款金额：</p>
     </div>
    </div>
</template>
<script >
</script>
<style scoped>
#box3{
   width:275px;
   height:100%;
   padding:0;
   margin:0;
   background-color:#f5f5f5;
   padding-bottom:10px;
}
#header3{
   width:275px;
   height:30px;
   padding:0;
   font-weight: bold;
   background-color:#fc1d4c;
   position:relative;
}
#img31{
   width:10px;
   height:10px;
   margin-left:10px;
   margin-top:10px;
}
#p31{
   font-size:8px;
   color:white;
   position:absolute;
   left:50%;
   top:50%;
   transform:translateX(-50%) translateY(-50%);
}
#d31{
    width:275px;
    padding-left:10px;
    padding-top:10px;
    background-color:rgba(255, 255, 255, 0.5);
}
#d31 p{
    font-size:10px;
    color:black;
}
</style>
