<template>
	<div>
		<p> {{welcome}} </p>
		<p> {{content}} </p>
	</div>
</template>

<script>
	module.exports = {
		data: function(){
			return{
				welcome: 'Hey there, welcome to Diannes tutorial point. Today we are covering introduction t single file components. have fun!!!!!!',
				content: 'The files end with the .vue extension and are written like an snippet of HTML with (usually) three tags in them: one for the template inside a template tag, one for the JavaScript that controls the components inside a script tag, and finally there’s a style tag to put all of the component’s styles into.'
			}
		}
	}
</script>

<style scoped>
	div{
		font-style: italic;
		font-size: 13px;
		background-color: linen;
		padding: 10px;
	}
</style>