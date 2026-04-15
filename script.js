// تغيير لون اسمك لما تضغط عليه
const title = document.querySelector("header h1 span");

title.addEventListener("click", () => {
  title.style.color = "tomato";
  title.innerText = "Front-End Dev 🚀";
});


// رسالة ترحيب أول ما الصفحة تفتح
window.onload = () => {
  alert("Welcome to my Portfolio!");
};


// تأثير بسيط على البوكسات
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("mouseover", () => {
    box.style.transform = "scale(1.1)";
    box.style.transition = "0.3s";
    box.style.backgroundColor = "#ddd";
  });

  box.addEventListener("mouseout", () => {
    box.style.transform = "scale(1)";
    box.style.backgroundColor = "white";
  });
});

    
