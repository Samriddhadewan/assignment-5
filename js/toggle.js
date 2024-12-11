document.getElementById('transition-section-btn').addEventListener('click', function(){
    showSectionByIdName('transition-section');
    document.getElementById('donation-section-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('transition-section-btn').classList.add('bg-[#B4F461]')
    document.getElementById('transition-section-btn').classList.add('font-semibold');
    document.getElementById('transition-section-btn').classList.add('text-[#111]');
    document.getElementById('donation-section-btn').classList.add('font-normal')
    document.getElementById('donation-section-btn').classList.add('#111111B2');
    document.getElementById('donation-section-btn').classList.add('border');
    document.getElementById('transition-section-btn').classList.remove('font-normal');
    
})
document.getElementById('donation-section-btn').addEventListener('click', function(){
    showSectionByIdName('donation-section');
    document.getElementById('donation-section-btn').classList.add('bg-[#B4F461]')
    document.getElementById('transition-section-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('transition-section-btn').classList.remove('font-bolder');

})

