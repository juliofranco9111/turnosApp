  
export const toggleTheme = () => {
    console.log('llego hasta aqui');
  
    const html = document.getElementById('toggle-theme');
  
    html.classList.toggle('dark')
}