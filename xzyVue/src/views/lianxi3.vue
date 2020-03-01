<template>
    <div>
        <div v-for="book in books" :key="book.id">
            <p>编号：{{book.id}}</p>
            <p>书名：{{book.name}}</p>
            <p>作者：{{book.author}}</p>
            <hr/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
//   name:"booklist",
  data(){
      return{
        books:[]
      }
  },
 created(){
           axios.get('http://localhost:3000/books')
            .then((res)=>{//res是response
                this.books=res.data
            })
  }
}
</script>
<style scoped>
</style>
