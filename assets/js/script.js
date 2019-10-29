document.querySelector('button').addEventListener('click', function changForm(){
  let password=document.getElementById('password');
  let confimPassword=document.getElementById('confirmPassword');
  if (password.value == confirmPassword.value)
{
  password.style.border='1px solid green';
  confirmPassword.style.border='1px solid green';
}else
{
  confirmPassword.style.border='1px solid red';
  password.style.border='1px solid red';
}
});

// addEvenListener j'ajoute un clic au boutton et une fonction qui devra respecter la suite.
// Ne pas oublier value ( représente ce que l'on écrit dans le champs sinon cela ne marche pas!!!!!!)
