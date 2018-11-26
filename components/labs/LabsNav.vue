<template>
    <div class="labsnav">
        <div class="labsnav__nav">
            <div>
                <nuxt-link :to="nav.prev">
                    prev
                </nuxt-link>
            </div>
            <div>
                <nuxt-link :to="nav.next">
                    next
                </nuxt-link>
            </div>
        </div>
        <div class="labsnav__title">
            {{title}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'nav'],
}
</script>


<style scoped lang="scss">
.labsnav {
    display: flex;
}
</style>
