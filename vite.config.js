import { defineConfig } from "vite";
export default  defineConfig({
    base:"./", //Helps to find assets
    build: {
        minify: 'terser' //Reducing the size of the code
    },
});