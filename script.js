// بنجيب زرار الدارك مود
const toggleBtn = document.querySelector("#toggleMode");

// بنجيب الاسم
const name = document.querySelector("#name");

/* لما تدوس على الاسم */
name.addEventListener("click", () => {

  // بنغير شكل الاسم
  const isActive = name.classList.toggle("active");

  // بنغير النص
  name.innerText = isActive
    ? "Front-End Dev"
    : "Front-End Developer";
});

/* لما تدوس على زرار الدارك */
toggleBtn.addEventListener("click", () => {

  // بنضيف أو نشيل كلاس dark
  document.body.classList.toggle("dark");

  // بنغير اسم الزرار حسب الوضع
  toggleBtn.innerText = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

/* رسالة بس في الكونسول للتجربة */
console.log("Portfolio Loaded");