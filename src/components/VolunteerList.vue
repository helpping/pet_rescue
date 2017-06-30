<template>
    <div>
        <div class="vol-detail" v-for="vol in volList">
            <div class="vol-content">
                <a href="#"><h6>{{vol.vol_title}}</h6></a>
                <p>{{vol.vol_content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props : ['volList']
    }
</script>

<style>

</style>
