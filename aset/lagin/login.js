document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;

    // اعتبارسنجی
    if (!name || !email || !phone || !password || !confirm) {
        alert('لطفاً تمام فیلدها را پر کنید');
        return;
    }

    if (password.length < 8) {
        alert('رمز عبور باید حداقل ۸ کاراکتر باشد');
        return;
    }

    if (password !== confirm) {
        alert('رمز عبور و تکرار آن مطابقت ندارند');
        return;
    }

    if (!/^09\d{9}$/.test(phone)) {
        alert('شماره موبایل معتبر نیست (مثال: 09123456789)');
        return;
    }

    // اینجا میتونی اطلاعات رو به سرور بفرستی
    console.log('اطلاعات ثبت نام:', { name, email, phone, password });
    alert('ثبت نام با موفقیت انجام شد ✅');
    
    // اگه خواستی صفحه رو پاک کنی:
    // this.reset();
});