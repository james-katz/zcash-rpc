<template>
    <div class="container">
        <span>
            <h2>
                {{ rpc.name }}
                <code>{{ rpc.args }}</code>
            </h2>
            <blockquote>Category: <b>{{ rpcCategory }}</b></blockquote>
        </span>
        <div class="rpc">
            <h3>> zcash-cli help {{ rpc.name }}</h3>
            <pre>
                {{ rpc.help }}
            </pre>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
const rpclist = require('@/rpc/rpclist');

export default {
  name: 'RpcView',
  data() {
    return {
        rpcList: rpclist,
        rpcCmd: this.$route.params.name,
        rpcCategory: '',
        rpc: []
    }
  },
  mounted() {
    this.rpcList.forEach(el => {
        const item = el.calls.filter(f => f.name === this.rpcCmd);
        if(item.length > 0) {
            this.rpcCategory = el.category;
            this.rpc = item[0];            
        }
        
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 32px;   
}
h2 {
    font-weight: bold;
}

h2 code {
    font-size: 0.5em;
    margin-left: 12PX;
    font-weight: normal;
}
blockquote {
    padding: 16px;
    background-color: #f0f0f0;
    display: inline-block;
    /* width: 500px; */
    font-weight: medium;
    border-left: solid 3px #b99700;
}
.rpc {
    margin: 32px;
}

pre {
    background-color: #efefef;
    margin-top: 16px;
    padding: 32px;
    font-size: 1.1em;
}
</style>