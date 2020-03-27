//这个配置文件，主要描述webpack都在项目中做哪些工作
const webpack=require('webpack');
module.exports={
    //入口文件 html要直接引入的文件
    entry:{
        "useperson":"./u.js"
    },
    output:{
        path:__dirname+'/dist',//__dirname是nodejs下的东西，表示当前目录,然后下的dist文件
        filename:"[name].bundle.js"//打包后的文件名为entry的键值+bundle.js
    },
    module:{
        rules:[
            //图片文件用url-loader来处理，小于8kb的直接转为base64
            {
             test:/\.(png|jpg)$/,
             loader:'url-loader?limit=8192'
            }
        ]
    }
    

}