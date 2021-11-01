<template>
    <div class="container">
        {{name}}
        {{lastName}}
        {{course}}
    </div>
</template>

<script>
export default {
    name: "UpdateCard",
    data() {
        return{

        }
    },
    props: {
        name: String,
        lastName: String,
        course: String,
    }

}
</script>

<style lang="scss" scoped>
.container{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    border-radius: 3px;

    height: 50px;
    width: 200px;
    background-color: rgb(112, 107, 107);
    z-index: 1000;
    color: #ffff
}

</style>