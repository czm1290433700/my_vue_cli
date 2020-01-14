<template>
    <div id="lazy">
        <ul>
            <li v-for="item in imageList" :key="item.id">
                <img :data-src="item" class="lazy-image">
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
                require("@/assets/images/pic7.jpg")
            ]
        }
    },
    methods: {
        /**
         * 初始化图片,
         */
        initImage: function(){
            if ("IntersectionObserver" in window) {        
                let lazyImageObserver = new IntersectionObserver((entries, observer) => { 
                    entries.forEach((entry, index) => {            
                        // 如果元素可见            
                        if (entry.isIntersecting) {              
                            let lazyImage = entry.target              
                            lazyImage.src = lazyImage.dataset.src              
                            lazyImage.classList.remove("lazy-image")              
                            lazyImageObserver.unobserve(lazyImage)              
                            // this.lazyImages.splice(index, 1)            
                        }          
                    })        
                })        
                this.lazyImages.forEach(function(lazyImage) {          
                    lazyImageObserver.observe(lazyImage);        
                })      
            }
        }
    }
}
</script>

<style scoped>
    @import "../style/mobileComponents/lazyLoading.css";
</style>