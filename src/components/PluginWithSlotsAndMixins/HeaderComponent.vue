<!-- dovršiti u vue3 vježbi, ne radi u vue2 -->
<!-- https://www.youtube.com/watch?v=ar1fJECxbyU 2:50-->

<template>
    <div>
        <h1 class="header-title">
            <slot name="title"/>
        </h1>
        <h2 class="title-author">
            <slot name="author"/>
        </h2>
    </div>
</template>