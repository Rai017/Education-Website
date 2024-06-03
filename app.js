burger=document.querySelector('.burger')
navBar=document.querySelector('.navbar')
navList=document.querySelector('.navlist')
rightNav=document.querySelector('.rightnav')



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('vclass');
    navList.classList.toggle('vclass');
    navBar.classList.toggle('hclass');
})



