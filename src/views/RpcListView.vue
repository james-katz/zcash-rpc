<template>
  <div class="container-fluid">
    <div class="filter">
      <span class="filter-category">
        Filter by category: 
        <select class="custom-select" v-model="filterCategory">
          <option selected>All</option>
          <option v-for="rpc in rpcList" v-bind:key="rpc.category">{{rpc.category}}</option>          
        </select>
      </span>
      <span class="filter-command">
        or by Command
        <input type="text" class="form-control-sm" v-model="filterCmd">
      </span>
    </div>
  </div>
  <div class="container">
      <ul class="row">           
        <li class="rpc-item col-lg-4 col-sm-12" v-for="rpc in rpcItems" v-bind:key="rpc.name">
          <a v-bind:href="'rpc/'+rpc.name"> 
            <span class="cmd">{{rpc.name}}</span>
            <span class="args">&nbsp;<code>{{rpc.args}}</code></span>
            <!-- <p class="deprecated" v-if="rpc.deprecated">DEPRECATED</p> -->
            <span class="summary">
              <p>{{rpc.summary}}</p>
            </span>
          </a>            
        </li>          
      </ul>
  </div>
</template>
<script>
const rpclist = require('@/rpc/rpclist');

export default {
  data() {
    return {
      rpcList: rpclist,
      filterCategory: 'All',
      filterCmd: ''
    }
  },
  created() {
    console.log(this.rpcList)
  },
  computed: {
    rpcItems() {      
      let items = this.getRpcList();

      if(this.filterCmd) {                
        items = this.getRpcList(true);
        items = items.flat().filter(el => el.name.match(this.filterCmd));
      }     
      
      return items.flat();
    }
  },
  methods: {
    getRpcList(filter) {
      let categories = this.filterCategory === 'All' ? this.rpcList : this.rpcList.filter(el => el.category === this.filterCategory);            
      let items = [];

      if(filter) {
        categories = this.rpcList;
        this.filterCategory = 'All';
      }

      categories.forEach(el => {        
        items.push(el.calls.flat());
      });

      return items;
    }
  }  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  background-color: #f0f0f0;
  padding: 8px;
}
.container {
  padding: 32px;   
}
.filter {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #333
} 
.filter span {
  padding-left: 24px
}
.custom-select {
  height: 32px;
  background-color: #f0f0f0;  
}

ul {
  padding: 0;  
}

.rpc-item{
 list-style-type: none;
 display: inline-block;
 /* height: 200px; */
 /* min-height: 200px; */
 overflow: hidden;
 /* margin-top: 16px; */
}
.rpc-item a {  
 text-decoration: none;
 display: inline-block;       
 padding: 16px; 
 height: 150px;
 width: 100%;
 border-radius: 5px;
 margin-top: 16px;
 background-color: #f0f0f0; 
 overflow: hidden;
}

.rpc-item a:hover {
  background-color: #e4f2f8; 
}
.rpc-item .cmd {
  font-weight: bold;
  font-size: 1.4rem;
  letter-spacing: .06rem;
}
.rpc-item .args {    
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 128px;
    display: inline-block;
    overflow: hidden  
}
.rpc-item .deprecated {
  display: block;
  width: 40%;
  border-radius: 5px;
  padding: 2px;
  text-align: center;
  background-color: #333;
  color: #efefef;
  font-weight: medium;
  font-size: 0.7rem
}
.rpc-item .summary {
  color: #333;    
}
</style>
