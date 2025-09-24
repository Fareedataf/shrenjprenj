// ===== 1. فتح/إغلاق قائمة التنقل في الجوال =====
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// ===== 2. التحقق من النماذج =====
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    let valid = true;
    // مسح رسائل الخطأ القديمة
    form.querySelectorAll(".error").forEach(err => err.textContent = "");

    // تحقق البريد الإلكتروني
    const email = form.querySelector("input[type='email']");
    if (email) {
      const emailErr = form.querySelector(".error[data-for='email']");
      if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
         if (emailErr)
         emailErr.textContent = "الرجاء إدخال بريد إلكتروني صحيح";
        valid = false;
      }
    }

    // تحقق كلمة المرور
    const password = form.querySelector("input[type='password']");
    if (password) {
      const passErr = form.querySelector(".error[data-for='password']");
      if (password.value.length < 6) {
        if (passErr) passErr.textContent = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
        valid = false;
      }
    }

    // تحقق تأكيد كلمة المرور (لو موجود)
    const confirm = form.querySelector("#confirmPassword");
    if (confirm && password) {
      const confirmErr = form.querySelector(".error[data-for='confirmPassword']");
      if (confirm.value !== password.value) {
        if (confirmErr) confirmErr.textContent = "كلمتا المرور غير متطابقتين";
        valid = false;
      }
    }

    if (!valid) {
      e.preventDefault(); // منع الإرسال
    }
    else{alert("you login successfuly")}
  });
});

// ===== 3. نافذة منبثقة (Modal) =====
const modal = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelectorAll(".modal-close");

if (modal) {
  openModalBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.add("active");
    });
  });
  closeModalBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  });
}

document.querySelectorAll("a").forEach(link=>{link.setAttribute("target","_blank");})

// ===== 4. تفاعل بسيط عند الضغط =====
// document.querySelectorAll(".btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     console.log("تم الضغط على الزر:", btn.textContent);
//     // جملة بسيطة تظهر على الشاشة
//     alert("لقد ضغطت على: " + btn.textContent);
//   });
// });

