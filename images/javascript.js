<script>
function openImage(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgFull");
    
    modal.style.display = "flex"; /* کادرێ ڕەش پیشان بدە */
    modalImg.src = imgElement.src; /* ناڤنیشانێ وێنەی کۆپی بکە بۆ کادرێ مەزن */
}

function closeImage() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; /* کادرێ ڕەش ڤەشێرە */
}
</script>