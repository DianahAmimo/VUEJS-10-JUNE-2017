<template>
	<div>
		<p><center><strong> {{headline}} </strong></center></p>
		<div v-html="content"></div>
	</div>
</template>

<script>
	module.exports = {
		data: function(){
			return{
				headline: 'Acid is instrumental in the move to SaaS',
				content: `<p>Intel and the US Defense Advanced Research Projects Agency (DARPA) have announced their collaboration with the aim of creating a new powerful data handling and computing platform which makes use of machine learning and artificial intelligence technologies. The collaboration research program will take an estimation of four and a half years with an estimated cost of $100 million. This is quite a lot of investment into the project. </p>

				<p>By employing machine learning and artificial intelligence, the machine will be used to analyze and detect patterns of consumer behavior and also it will help researchers make intense sense of the data they collect. This will make the business processes swift and it will smoothen the workflow. The desired program is anticipated to improve graphics analysis in relation to big data. The completion of that project will mark a very significant step in the field of technology, specifically big data.</p>

				<p>In order for a company to grow, its innovation level has to be at per with the frequent changes in market. Seeing an opportunity and seizing it positions a company in a better rank, making it the most recognized in terms of their brand and the services they offer. Some projects appear to be complex from afar and some ideas appear to be unrealistic and hard to implement when a company is on its own. This therefore necessitates collaboration with other companies and parties, just like Intel and DARPA did. </p>

				<p>This is a good example which can be emulated by Cytonn Investments. For instance, if there is an idea or a new technology that the company desires to implement and it seems complicated, or it falls without the scope of work that the company deals with, the company can team up with another company that operates within that scope of work.</p>`
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