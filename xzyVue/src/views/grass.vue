<template>
    <div id="box7">

       <div class="box71">
           <video src="视频地址">服饰</video>
            <div class="box72">
               <img src="../assets/16.jpg" alt="" class="img71">
               <p>赵小琳</p>
               <img src="../assets/61.png" alt="" class="img72">
           </div>
       </div>

         <div class="box71">
           <video src="视频地址">服饰</video>
            <div class="box72">
               <img src="../assets/16.jpg" alt="" class="img71">
               <p>赵小琳</p>
               <img src="../assets/61.png" alt="" class="img72">
           </div>
       </div>

        <div class="box71">
           <video src="视频地址">服饰</video>
            <div class="box72">
               <img src="../assets/16.jpg" alt="" class="img71">
               <p>赵小琳</p>
               <img src="../assets/61.png" alt="" class="img72">
           </div>
       </div>

        <div class="box71">
           <video src="视频地址">服饰</video>
            <div class="box72">
               <img src="../assets/16.jpg" alt="" class="img71">
               <p>赵小琳</p>
               <img src="../assets/61.png" alt="" class="img72">
           </div>
       </div>

        <div class="box71">
           <video src="视频地址">服饰</video>
            <div class="box72">
               <img src="../assets/16.jpg" alt="" class="img71">
               <p>赵小琳</p>
               <img src="../assets/61.png" alt="" class="img72">
           </div>
       </div>

    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
#box7{
    width:100%;
    height:100%;
    position:absolute;
    background-color:#f5f5f5;
    display:flex;
    flex-wrap :wrap;
    align-content: flex-start;
    /* padding:10px; */
}
.box71{
    width:48%;
    background-color:rgba(255, 255, 255, 0.5);
    margin-bottom:3px;
    margin-right:3px;
    margin-left:3px;
}
.box72{
    width:100%;
    height:30px;
    display:flex;
    align-items:center;
    padding:none;
}
/* .img73{
    width:100%;
} */
video{
    width:100%;
}
.img71{
    width:20px;
    height:20px;
    border-radius: 50%;
}
.img72{
    width:15px;
    height:15px;
    border-radius: 50%;
    margin:0;
}
.box71 p{
    width:100%;
    font-size:15px;
    color:black;
}
.box72 p{
    font-size:15px;
    color:black;
}
</style>