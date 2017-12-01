<template>
<div class="container">
  <div id="app">
    <img src="./assets/alogo.png" class="img">
    	<span>购物车</span>
    <router-view/>
  </div>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size:12px;
}
#app span{
	margin-left: 15px;
	font-size:16px;
}
#app .img{
	margin-bottom: 20px;
}
</style>
