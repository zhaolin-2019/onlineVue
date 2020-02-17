<template>
    <div id="box6">
        <div id="box7">
        <p>收件人</p>
        <input type="text" placeholder="请输入收件人姓名">
        </div>
         <div id="box8">
        <p>收货地区</p>
        <input type="text" placeholder="请选择收获地区">
        </div>
           <div id="box9">
        <p>详细地址</p>
        <input type="text" placeholder="请输入详细地址">
        </div>
           <div id="box10">
        <p>手机号码</p>
        <input type="text" placeholder="请输入手机号码">
        </div>
           <div id="box11">
        <p id="p62">设为默认地址</p>
        <mt-switch v-model="value"></mt-switch>
        </div>

        <button>保存并使用</button>
    </div>
</template>
<script>
import { Switch } from 'mint-ui';
export default {
    components:{
        Switch
    }
}
</script>
<style scoped>
#box6{
    width:100%;
    height:100%;
    position:absolute;
    background-color:#f5f5f5;
}
#box7{
    display:flex;
    margin-top:15px;
    height:7%;
    width:100%;
    align-items:center;
    background-color:rgba(255, 255, 255, 0.5);
    padding-left:10px;
    box-sizing:border-box;
}
#box8,#box9,#box10,#box11{
    display:flex;
    margin-top:3px;
    height:7%;
    width:100%;
    align-items:center;
    background-color:rgba(255, 255, 255, 0.5);
    padding-left:10px;
    box-sizing:border-box;
}
p{
    font-size:15px;
    color:black;
    font-weight:bold;
    width:30%;
}
#p61{
    color:#afaeae;
    font-weight:normal;
    font-size:10px;
}
#p62{
    margin-right:50%;
}
input{
    border:none;
    height:100%;
    background-color:rgba(255, 255, 255, 0.5);
    margin-left:30px;
}
input::-webkit-input-placeholder { 
    font-size:15px;
} 
hr{
    background:#f5f5f5;
    border: none;        
    height: 1px;  
}
button{
    width:100%;
    height:7%;
    background-color:#fc1d4c;
    padding:none;
    margin:none;
    color:white;
    font-size:15px;
    text-align:center;
    border:none;
}
</style>