<!-- html 템플릿코드 -->
<template>
    <div class="mytemp">
        <span class="tit">{{  }}</span>
    </div>
</template>

<!-- 자바스크립트 코드 -->
<script>
export default(await import("vue").undefineComponent({
    name: "myTemp",
    data(){
        return {
            txt: "연습이예요!"
        }
    }
}))
</script>

<!-- 스타일시트 코드 -->
<!-- 이 파일에서만 적용되는 요소임을 명시하기 위해 scoped 키워드 필수 입력! -->
<style scoped>
    span.tit {color:red};
</style>

