export { openSidebar};
function openSidebar(){
// adicionando as funcionalidades de abrir e fechar a sidebar
    //Variáveis para abrir e fechar e abrir a sidebar
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.main-container');
    const closeModalBtn = document.getElementById('close-modal');7
    // Adicionando Event Listeners aos botões 
    menuBtn.addEventListener('click', () => {
        sidebar.style.animationName = 'abrir';
        sidebar.style.animationDuration = '0.7s';
        sidebar.style.animationFillMode = 'forwards';
        sidebar.style.animationTimingFunction = 'ease';
    })
    closeModalBtn.addEventListener('click', () => {
        sidebar.style.animationName = 'fechar';
        sidebar.style.animationDuration = '0.3s';
        sidebar.style.animationFillMode = 'forwards';
        sidebar.style.animationTimingFunction = 'ease';
    })
}
openSidebar();
