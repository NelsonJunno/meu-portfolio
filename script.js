// Nota: Esse arquivo controla a navegação entre as 'telas' da página.
// Quando o usuário clica no menu, a seção correspondente ganha a classe 'ativo'.
document.addEventListener('DOMContentLoaded', () => {
  // Pega os links do menu e as seções da página
  const links = document.querySelectorAll('.nav-menu a');
  const secoes = document.querySelectorAll('.conteudo-secao');

  // Para cada link do menu, adiciona o comportamento de trocar seção
  links.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();

          // Id da seção sem o '#'
          const idDaSecao = link.getAttribute('href').substring(1);

          // Esconde todas as seções (remove a classe 'ativo')
          secoes.forEach(secao => {
              secao.classList.remove('ativo');
          });

          // Mostra a seção que foi pedida
          const secaoAtiva = document.getElementById(idDaSecao);
          if (secaoAtiva) {
              secaoAtiva.classList.add('ativo');
          }

          // Atualiza o estilo do link ativo (só visual)
          links.forEach(l => l.classList.remove('active-link'));
          link.classList.add('active-link');
      });
  });
});