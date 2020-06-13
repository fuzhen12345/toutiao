<template>
    <header>
      <ul class="header-left">
        <li>下载APP</li>
        <li>注册头条号</li>
        <li class="weather">
          <span>{{city}}</span> 
          <span>{{type}}</span>
          <span>{{low}}/{{high}}</span>
          <span @click="inputShow">
            <i :class="['el-icon-arrow-right',{'iRotate':inputChecked}]"></i>
          </span>
          <input  type="text" 
                  :class="{'inputShow':inputChecked}" 
                  v-model="whereCity"
                  @keyup.enter="searchCity"
          >
        </li>
      </ul>
      <div class="header-right">侵权投诉</div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            city:"",
            high:"",
            low:"",
            type:"",
            inputChecked:false,
            whereCity:''
        }
    },
    methods:{
        inputShow(){
            this.inputChecked = !this.inputChecked
        },
<<<<<<< HEAD:src/components/header.vue
        searchCity(){
            this.$axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.whereCity}`).then(res => {
            this.city = res.data.data.city;
            let high = res.data.data.forecast[0].high;
            let low = res.data.data.forecast[0].low;
            this.type = res.data.data.forecast[0].type;
            this.high = high.slice(3);
            this.low = low.slice(3);
            this.whereCity = "";
            this.inputChecked = false;
            }).catch(()=>{
              this.$message({type:"error",message:"这不是一个城市,请输入城市"})
              this.whereCity = ""
            })
=======
        searchCity:function(){
              this.$axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.whereCity}`).then(res => {
              this.city = res.data.city;
              let high = res.data.forecast[0].high;
              let low = res.data.forecast[0].low;
              this.type = res.data.forecast[0].type;
              this.high = high.slice(3)
              this.low = low.slice(3)
              this.whereCity = ""
              }).catch(error =>{
                this.$message({type:'error',message:'没有该城市'})
                this.whereCity=''
              })
        
>>>>>>> 1dd5354fec64a4f6abcff3b32165614a44ef2319:src/components/modules/header.vue
        }
        
    },
    mounted(){
        this.$axios.get('http://wthrcdn.etouch.cn/weather_mini?city=北京市').then(res => {
        this.city = res.data.city;
        let high = res.data.forecast[0].high;
        let low = res.data.forecast[0].low;
        this.type = res.data.forecast[0].type;
        this.high = high.slice(3)
        this.low = low.slice(3)
      })
    }
}
</script>

<style lang="less" scoped>
    header{
      width: 100%;
      min-width: 1100px;
      height: 30px;
      background-color: #222222;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      font-size: 13px;
      .header-left{
        display: flex;
        li{
          margin-left: 30px;
          input{
            outline: none;
            width: 60px;
            display: none;
          }
          .inputShow{
            display: inline-block;
          }
        }
        .weather{
          span{
            margin-right: 5px;
            i{
              font-weight: bold;
              cursor: pointer;
              transform:rotate(90deg);
              transition: all 0.3s;
            }
            .iRotate{
              transform:rotate(0);
            }
          }
        }
      }
      .header-right{
        margin-right: 30px;
      }
    }
</style>