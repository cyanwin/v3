<template>
    <header class="header d-flex align-center justify-space-between">
        <div class="header-left" v-ripple>
            <slot v-if="$slots.left" name="left" />
            <i v-else class="header-back iconfont iconfanhui" />
        </div>

        <div class="header-center flex-1 text-ellipsis center-box">
            {{ title }}
        </div>

        <div class="header-right">
            <slot name="right" />
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
	@import "~@/assets/style/public.scss";

	.header {
		height: 40px;
		background: #fff;
	}

	.header-left,
	.header-right {
		height: 100%;
		width: 10%;

		@extend .center-box;
	}

	.header-back {
		font-size: 26px;
	}

    .header-center {
        height: 100%;
        font-size: 18px;
        font-weight: bold;
    }
</style>
