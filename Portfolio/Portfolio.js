window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function check() {
  if (
    document.frm.email.value !== "" &&
    document.frm.user.value !== "" &&
    document.frm.msg.value !== ""
  ) {
    new bootstrap.Modal(document.getElementById('exampleModal')).show();
  }
}
