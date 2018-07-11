<template>
  <div class="system">
   <scroller :on-infinite="infinite" ref="myscroller" v-if="showscroller">
  <div style="height:1rem;"></div>
	 <table>
                 <thead>
                   <td>出借人</td>
                   <td>出借时间</td>
                   <td>出借金额</td>
                 </thead>
                 <tbody>
                    <tr v-for="planone in moveList">
                      <td>{{planone.realname}}</td>
                      <td>{{planone.payTime}}</td>
                      <td>{{planone.inmoney.toFixed(2)}}元</td>
                    </tr>
                 </tbody>
                 <tfoot v-if="showno" style="text-align:center;font-size:1rem;color:#a0a0a0"> 没有更多数据</tfoot>
               </table>
</scroller>
  <!-- <div style='position:relative;top:6rem;font-size: 1.5rem;
color: #888888;text-align:center' v-if="showscroller==false">
    您还没有收到系统公告
  </div> -->
  </div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
  name: "record",
  props: {
    productId: {
      type: String
    }
  },
  data: function() {
    return {
      offset: 0,
      noData: false,
      moveList: [],
      showscroller: true,
      showno:false,
    };
  },
  created() {},
  methods: {
    //   时间转换**************************
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    getDate(shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return (
        y +
        "-" +
        this.add0(m) +
        "-" +
        this.add0(d) +
        "  " +
        this.add0(h) +
        ":" +
        this.add0(mm)
      );
    },
    infinite(done) {
      if (this.noData) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2);
        });
        return;
      }
      let self = this; //this指向问题
      let start = this.moveList.length;
      setTimeout(() => {
        self.$refs.myscroller.resize();
        done();
      }, 1000);

      this.offset++;
      this.loadData();
    },
    loadData() {
      var _this = this;
      _this.$http
        .post("/Product/user/loadInvestorsByProductId", {
          parameters:
            '{"currentPage":"' +
            _this.offset +
            '","pageSize":"' +
            10 +
            '","productId":"' +
            // _this.productId +
            '402881e063d817390163d8223bf50002'+
            '"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.moveList = _this.moveList.concat(res.data.data.list);
            _this.end = res.data.end;
            console.log(_this.moveList);
          }
        //   没有数据的情况
          // if (res.data.message == "没有更多数据了！" && _this.offset == 1) {
          //   _this.showscroller = false;
         
          // } else if (res.data.message == "没有更多数据了！") {
          //   _this.noData = true;
          //     _this.showno=true;
          // }
          if(res.data.message == "没有更多数据了！"){
              _this.noData = true;
              console.log(1)
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
   
  }
};
</script>

<style scoped>
@import url("../../../assets/css/wechat/reset_rem.css");

table {
  width: 100%;
  margin: 0 auto;
  margin-top: 5rem;
}
thead td {
  font-size: 1.2rem;
  color: #a0a0a0;
  text-align: center;
  width: 33%;
  height: 4.8rem;
  line-height: 4.8rem;
}
tbody tr td {
  height: 4.8rem;
  text-align: center;
  line-height: 4.8rem;
  font-size: 1.4rem;
  color: #606060;
}
tbody tr td:nth-of-type(1) {
  width: 20%;
}
tbody tr td:nth-of-type(2) {
  width: 40%;
}
tbody tr td:nth-of-type(3) {
  width: 20%;
}
tbody tr:nth-child(odd) {
  background: #fff;
}

.clear {
  clear: both;
}
</style>
