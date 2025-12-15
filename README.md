# ⚡ Jogo da Memória Mágica - Hogwarts Edition

Este projeto é uma implementação do clássico **Jogo da Memória** (Memory Game) com uma temática envolvente do universo de Harry Potter. Ele foi desenvolvido como um desafio para consolidar habilidades avançadas de JavaScript, especialmente a lógica de estado de jogo e a manipulação dinâmica do DOM, combinadas com técnicas de animação CSS.



---

## ✨ Funcionalidades em Destaque

* **Lógica de Jogo Completa:** Implementação da regra de jogo: virar duas cartas, checar a coincidência de pares, travamento temporário do tabuleiro (`lockBoard`) e reset do estado.
* **Embaralhamento Eficiente:** Utilização do método `Array.prototype.sort()` com uma função aleatória para garantir que as cartas sejam posicionadas aleatoriamente a cada novo jogo.
* **Tema Dinâmico (Dia/Noite):** Alternância instantânea de todo o esquema de cores usando **Variáveis CSS** (`:root` e `.light-theme`), mantendo a usabilidade e o contraste.
* **Animação 3D:** Uso de `transform-style: preserve-3d` e `rotateY()` no CSS para criar um efeito de virada de carta realista.
* **UX Aprimorada:** Feedback visual com placar em tempo real (Tentativas e Pares Encontrados) e uma mensagem de vitória clara.

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Foco Principal | Habilidade Demonstrada |
| :--- | :--- | :--- |
| **HTML5** | Estrutura | Semântica e injeção dinâmica de conteúdo via JavaScript. |
| **CSS3** | Estilização Avançada | **CSS Grid** para o layout responsivo do tabuleiro, **Animações 3D** para as cartas e **Variáveis CSS** para o sistema de temas. |
| **JavaScript (ES6+)** | Lógica e Controle | Manipulação de Arrays (`sort()`), Controle de Fluxo complexo, uso de `setTimeout` para gerenciar o tempo de virada da carta e manipulação de classes dinâmicas. |

---

## ⚙️ Estrutura e Lógica Chave do JS

A lógica central do jogo reside em três funções principais:

1.  **`shuffleCards(array)`:** Usa `array.sort(() => Math.random() - 0.5)` para garantir um embaralhamento eficiente do array de 16 cartas.
2.  **`flipCard()`:** Adiciona a classe `.flip` e armazena a carta virada no array `flippedCards`.
3.  **`checkMatch()`:** Compara o `dataset.icon` das duas cartas viradas. Se forem diferentes, a função `handleMismatch()` usa `setTimeout` para desvirá-las após um breve *delay*, garantindo o travamento do tabuleiro (`lockBoard = true`) durante esse intervalo.

---


