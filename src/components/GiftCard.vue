<template>
    <div class="card border-warning border elevation-2 m-2">

        <img class="img-fluid" :src="gift.url" alt="img">

        <div>
            <h3>{{ gift.tag }}</h3>


        </div>
        <button>open Gift?</button>
    </div>
</template>

<script>
import { Gift } from '../models/Gift.js'

export default {
    props: { gift: { type: Gift, required: true } },
    setup(props) {

        return {

        }
    }
}
</script>

<style lang="scss" scoped></style>


