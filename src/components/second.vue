<template>
	<div>
		<p><center><strong> {{headline}} </strong></center></p>
		<!-- <p> {{content}} </p> -->
		<div v-html="msg"></div>
	</div>
</template>

<script>
	module.exports = {
		data: function(){
			return{
				headline: "On Data Mining",
				msg: `
				<p>Data mining is a very essential step/activity that can’t be assumed in today’s business world. It makes a lot of activities happen within a jiffy, activities that would otherwise take a long time to be completed. With the advent of data mining, the customer behavior and the market relation patterns can be well analyzed and predicted. The possession of data and making sense of it are two different things. With data mining tools employed in a company, the collected data can be transformed into more meaningful and descriptive form.</p>

				<p>Analytics is all about telling stories about the true underlying, unobservable processes and transactions that are driving the data and driving business success. Descriptive analytics, predictive analytics and prescriptive analytics when combined together, makes a wholesome package of analytics and data mining. With analytics, a company can be able to analyze its customer’s behavior and also predict its future performance in market. This proves to be very essential in that it can help a company to avoid the risks and threats that lurk ahead of the company.</p>

				<p>The use of data mining tools, and analytics can play a very great role in Cytonn Investments. Close analysis on the collected data and interpretation can make the company create descriptions about the users from the data, predict its performance in the market in the next few years and most importantly, get the most out of the data collected from its clients. This will improve the manner in which the company runs as there will be more to extract from the collected data as opposed to the traditional ways of data analysis.</p>`
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