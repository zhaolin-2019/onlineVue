<template>
    <div id="box5">
        <div id="header5">
            <div id="d51">
                <img src="../assets/11.jpg" alt="">
                <p>管理收获地址</p>
            </div>
        </div>

        <div id="d52">
            <p>收货人：***</p>
            <p id="p51">139***39898</p>
            <p>陕西省渭南市富平县******</p>
            <div id="d53">
                 <input type="radio" name='CheckBox' id="check1" @click="change1">
                 <p id="p52">默认地址</p>
                 <img src="../assets/51.png" alt="">
                 <p>编辑</p>
                 <img src="../assets/52.png" alt="">
                 <p>删除</p>
            </div>
        </div>

         <div id="d54">
            <p>收货人：***</p>
            <p id="p51">139***39898</p>
            <p>陕西省渭南市富平县******</p>
            <div id="d53">
                 <input type="radio" name='CheckBox' id="check1">
                 <p id="p52">默认地址</p>
                 <img src="../assets/51.png" alt="">
                 <p>编辑</p>
                 <img src="../assets/52.png" alt="">
                 <p>删除</p>
            </div>
        </div>

        <div id="d55">
            <p>收货人：***</p>
            <p id="p51">139***39898</p>
            <p>陕西省渭南市富平县******</p>
            <div id="d53">
                 <input type="radio" name='CheckBox' id="check1">
                 <p id="p52">默认地址</p>
                 <img src="../assets/51.png" alt="">
                 <p>编辑</p>
                 <img src="../assets/52.png" alt="">
                 <p>删除</p>
            </div>
        </div>

        <div id="d56">添加新地址</div>
    </div>
</template>
<script>
export default {
    methods:{
    change1(){
          $(this).next('p').css("color","#fc1d4c");
          console.log(this);
        }
    }
}
</script>
<style scoped>
html{
    font-size:15px;
}
#box5{
    width:100%;
    height:100%;
    position:absolute;
    background-color:#f5f5f5;
    padding-top:20%;
}
#header5{
    width:100%;
    height:10%;
    background-color:#fc1d4c;
    box-sizing: border-box;
    position:relative;
    padding-left:10px;
    position:fixed;
    top:0;
}
#d51{
    width:100%;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
}
#d51 img{
    display:inline-block;
    width:10px;
    height:10px;
}
#d51 p{
    display:inline-block;
    font-size:15px;
    color:white;
    margin-left:30%;
}
#d52,#d54,#d55{
    width:100%;
    height:22.5%;
    background-color:rgba(255, 255, 255, 0.5);
    padding-top:10px;
    padding-left:10px;
    font-weight:bold;
}
#d54,#d55{
    margin-top:6px;
}
#d52 p{
    color:black;
    font-size:10px;
}
#d54 p{
    color:black;
    font-size:10px;
}
#d55 p{
    color:black;
    font-size:10px;
}
#d52 p:first-child{
    display:inline-block;
}
#d54 p:first-child{
    display:inline-block;
}
#d55 p:first-child{
    display:inline-block;
}
#p51{
    display:inline-block;
    margin-left:40%;
}
#d53{
    width:100%;
    height:30%;
    margin-top:30px;
    border-top:1px #c4c4c4 solid;
}
#d53 p{
    font-size:10px;
    color:black;
    font-weight:bold;
    display:inline-block;
}
#d53 img{
    width:15px;
    height:15px;
    display:inline-block;
}
#p52{
    margin-right:40%;
}
#d56{
    width:100%;
    height:10%;
    background-color:#fc1d4c;
    color:white;
    font-size:15px;
    font-weight: bold;
    text-align:center;
    line-height: 40px;
    position:fixed;
    bottom:0;
}
</style>
