<script>
export default {
	data(){
		return {
            msg:"olá"
        }
	}
}
</script>
<template>
	<div id="app">
		<h1>Título</h1>
		<router-link to="\">Home</router-link>
		<router-link to="\sobre">Sobre</router-link>
	</div>
</template>
<style>
	h1
    {
		background-color: #FF0000;
		color: #00FF00;
	}
</style>