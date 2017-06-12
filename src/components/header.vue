<template>
<!-- Creating links to the vue single files -->
	<nav>
		<ul>
			<li><router-link to="/login">LOGIN</router-link></li>
			<li><router-link to="/hello">INTRODUCTION</router-link></li>
			<li><router-link to="/first">COMPONENTS</router-link></li>
			<li><router-link to="/second">VUEJS APP</router-link></li>
			<li><router-link to="/third">LAST ROUTER</router-link></li>
		</ul>
	</nav>
</template>

<script>
	export default{}
</script>

<style scoped>
	nav{
		padding: 20px;
		background: #444;
		border-radius: 10px;
	}
	ul{
		list-style-type: none;
		text-align: center;
		margin: 0;
	}
	li{
		display: inline-block;
		margin: 0 10px;
	}
	a{
		padding: 6px;
		border-radius: 10px;
		color: #fff;
		text-decoration: none;
	}
	
</style>