// // جستجو
// const searchInput = document.querySelector('.search input');
// searchInput.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         const query = this.value.trim();
//         if (query) {
//             alert(`جستجو برای: ${query}`);
//             // اینجا میتونی ریدایرکت کنی به صفحه نتایج
//             // window.location.href = `/search?q=${encodeURIComponent(query)}`;
//         }
//     }
// });

// // دکمه ورود/ثبت نام
// const loginBtn = document.querySelector('.btn1');
// loginBtn.addEventListener('click', function() {
  
// });

// // سبد خرید
// const cartBtn = document.querySelector('.sabad');
// cartBtn.addEventListener('click', function() {
//     alert('رفتن به سبد خرید');
//     // window.location.href = '/cart';
// });

// // (اختیاری) آیکون جستجو اگه اضافه کنی
// // const searchIcon = document.querySelector('.search img');
// // searchIcon?.addEventListener('click', function() {
// //     searchInput.focus();
// // });

// توی فایل جاوااسکریپت یا تگ script بذار
document.querySelector('.search input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
            // اگه صفحه نتایج داری:
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
            
            // یا اگه میخوای توی همون صفحه فیلتر کنی:
            // filterProducts(query);
        }
    }
});

