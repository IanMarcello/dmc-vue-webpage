<template>
  <div>
    <a href="#">
      <button class="btn-gradient relative btn from-left hover:tracking-wider text-xl px-8 py-2 z-10">PRE-ORDER</button>
    </a>
  </div>
</template>

<style>
.btn-gradient {
  background: #449CA2;

  background: linear-gradient(315deg, #449CA2 20%, #E63F33 70%);

  background: -moz-linear-gradient(315deg, #449CA2 20%, #E63F33 70%);

  background: -webkit-linear-gradient(315deg, #449CA2 20%, #E63F33 70%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#449BA2", endColorstr="#E63D32", GradientType=1 );
}

.btn {		
	transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
}

.btn:before, .btn:after {
	content: '';
	position: absolute;	
	transition: inherit;
	z-index: -1;
}

.btn:hover:after {
	background: #449CA2;
	transition-delay: .35s;
}

.from-left:before,
.from-left:after {
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
}

.from-left:hover:before,
.from-left:hover:after {
  width: 100%;
}
</style>
