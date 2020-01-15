<template>
    <div id="lazy">
        <ul>
            <li v-for="item in imageList" :key="item.id">
                <img :data-src="item" class="lazy-image" ref="lazyImages">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'lazyLoading',
    data() {
        return {
            imageList: [
                require("@/assets/images/pic1.jpg"),
                require("@/assets/images/pic2.jpg"),
                require("@/assets/images/pic3.jpg"),
                require("@/assets/images/pic4.jpg"),
                require("@/assets/images/pic5.jpg"),
                require("@/assets/images/pic6.jpg"),
                require("@/assets/images/pic7.jpg"),
                require("@/assets/images/pic8.jpg"),
                require("@/assets/images/pic9.jpg"),
                require("@/assets/images/pic10.jpg"),
                require("@/assets/images/pic11.jpg"),
                require("@/assets/images/pic12.jpg")
            ]
        }
    },
    mounted: function(){
        this.initImage();
    },
    methods: {
        /**
         * 初始化图片,
         */
        initImage: function(){
            let lazyImageObserver = new IntersectionObserver((entries, observer) => { 
                entries.forEach((entry, index) => {            
                    // 如果元素可见            
                    if (entry.isIntersecting) { 
                        //做一个加载的特效
                        setTimeout(function(){
                            let lazyImage = entry.target;              
                            lazyImage.src = lazyImage.dataset.src;              
                            lazyImage.classList.remove("lazy-image");             
                            lazyImageObserver.unobserve(lazyImage);    
                        },300)                                 
                    }          
                })        
            })        
            this.$refs.lazyImages.forEach(function(lazyImage) {          
                lazyImageObserver.observe(lazyImage);        
            })      
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/lazyLoading.css";
</style>