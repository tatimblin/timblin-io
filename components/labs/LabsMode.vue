<template>
    <div class="labsmode">
        <div class="labsmode__item">
            <nuxt-link :to="articleUrl">
                Article
            </nuxt-link>
        </div>
        <div class="labsmode__item">
            <nuxt-link :to="labUrl">
                Lab
            </nuxt-link>
        </div>
        <div class="labsmode__item">
            <a :href="`https://github.com/tatimblin/labs/blob/master/pages${$route.path}.vue`" target="_blank">
                Github
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['labUrl', 'articleUrl'],
}
</script>


<style scoped lang="scss">
.labsmode {
    display: flex;
    justify-content: space-between;
}
</style>
