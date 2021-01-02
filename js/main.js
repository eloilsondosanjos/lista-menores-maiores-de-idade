import * as Components from './components/'
import { agrupaPorMenoresMaioresIdade } from './modules/utils'
import pessoasMock from './mock/pessoas'

const { maiores, menores } = agrupaPorMenoresMaioresIdade(pessoasMock);

const html = `
  ${Components.HelloWorld('Estudo Avançado de JavaScript')}

  <h3>Maiores</h3>
    ${Components.List(maiores)}
  <h3>Menores</h3>
    ${Components.List(menores)}
`;

document.querySelector('#app').innerHTML = html;