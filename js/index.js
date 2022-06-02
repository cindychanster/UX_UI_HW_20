$("#toggle").on("click", function(){
  $("#dropDown").slideToggle();
});
$('#logo').on('mouseover', function(){
  $(this).attr('src','images/Logo2.png')
});
$('#logo').on('mouseout', ()=>{
  $('#logo').attr('src','images/Logo.png')
});
$('#download').on('click', ()=>{
  window.open('https://docs.google.com/document/d/1JKr2M_B_MdFMmxm_MfvdrMhCl4TxC7NkYxTTeC7W1oY/edit?usp=sharing','Download');
})
$('.linkto').on('click', function(){
  const url = $(this).data('url');
  location.href = url;
})