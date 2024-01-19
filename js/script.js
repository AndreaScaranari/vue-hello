console.log(Vue)

const {createApp} = Vue;
const app = createApp ({
    data() {
        return {
            h1Text: "Hello Vue!",
            h2Text: "Inserisco un h2 con Vue",
            pText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nobis rerum aliquam nam, illum eos, fugiat corrupti recusandae consequuntur velit eaque. At veniam id possimus perspiciatis incidunt aspernatur impedit sunt?",
            img2Add: "https://www.mindinventory.com/blog/wp-content/uploads/2023/05/vuejs-logo.webp"
        }
    }
});
app.mount("#app");