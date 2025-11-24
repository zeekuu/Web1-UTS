function lightMode() {
    document.body.classList.remove("dark")
}

function darkMode(){
    document.body.classList.add("dark")
}

function validasiForm() {
  let nt = document.getElementById("namaTugas").value;
  let mk = document.getElementById("mataKuliah").value;
  let dead = document.getElementById("deadline").value;

  if (nt === ""){
    alert("Nama Tugas Harus Di isi");
    return false;
  }
  if (mk === ""){
    alert("Mata Kuliah Harus Di isi");
    return false;
  }
  if (dead === ""){
    alert("Deadline Harus Di isi");
    return false;
  }
  alert("Tugas Berhasil Dicatat");
  return true;
}