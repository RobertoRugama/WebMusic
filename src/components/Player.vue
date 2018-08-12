<template>
    <div class="content" v-if="track && track.album">
        <p>
            <img :src="track.album.images[0].url" alt="">
        </p>
        <div class="tr">
            <p>
                <strong>{{ track.name }}</strong>
                <small>Duracion: {{ track.duration_ms }} segundos</small>
            </p>
        </div>
        <p>        
            <audio controls preload="auto" autoplay :src="track.preview_url"></audio>
        </p>
            
    </div>
</template>

<script>
export default {
    data (){
        return {
            track: {}
        }
    },
    created(){
        this.$bus.$on('set-track', (track)=>{
            this.track=track
        })
    }
}
</script>

<style lang="scss" scoped>
    img{
        width:124px;
        border-radius: 50%;
    }
    .tr{
        margin-bottom: 50px;
    }
</style>


