<template>
	<div class="container">
	  <div class="colums">
	  	<div class="colum is-5 is offset-4">
	  		<div class="notification is-danger">
	  			<slot name="body">
	  			 Algo Salio mal...
	  			</slot>
	  		</div>
	  	</div>
	  	
	  </div>
	</div>
</template>

<style lang="scss" scoped>
	.notification{
		margin: 10px;
	}
</style>