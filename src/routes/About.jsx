import './About.css'

import devBase from "../assets/devBase.png"

const About = () => {
  return (
    <div className='about'>
      <img src={devBase} alt="" />
      <div className="text">
        <div>
          <h2>  A <span>DevBase</span> nasceu de uma verdade incômoda no mundo da tecnologia: o mercado está cheio de pessoas que sabem "copiar e colar", mas carente de profissionais que realmente entendem a arquitetura por trás do código.</h2>
          <h2>  Nós somos uma comunidade focada em quem quer ser monstro na programação. Nosso objetivo não é ensinar o caminho mais fácil, mas o caminho mais sólido.</h2>
        </div>

        <div>
          <h1>📚 Nossos "Cursos" e Trilhas</h1>
          <h2>Na DevBase, a gente não acredita em fórmulas mágicas. Nossas trilhas de estudo são desenhadas para cobrir desde a fundação até o topo da pirâmide tecnológica:</h2>
          <h2>Fundamentos Reais: Mergulhamos na Lógica de Programação, HTML5 semântico e CSS moderno.</h2>
          <h2>Engenharia de Software: Dominamos o JavaScript para criar interfaces dinâmicas e inteligentes.</h2>
        </div>

        <div>
          <h1>🤝 Nossa Comunidade</h1>
          <h2> A DevBase é mais que um repositório de links. É um ecossistema de colaboração.</h2>
          <h2>Code Review: Aqui, um ajuda o outro a limpar o código. Analisamos cada tag e cada função, porque o detalhe é o que diferencia o amador do profissional.</h2>
          <h2>Mentalidade de Arquiteto: Incentivamos cada membro a pensar na estrutura antes de colocar a mão na massa.</h2>
          <h2>Foco no Mercado: Tudo o que estudamos tem um porquê. Queremos que nossos membros sejam capazes de entregar freelas profissionais e ocupar as cadeiras de sênior nas maiores tech companies.</h2>
        </div>

        <div>
          <h1>🏗️ Nossa Filosofia</h1>
          <h1>"Se a base é forte, o topo é infinito."</h1>
          <h2>Não estamos aqui apenas para centralizar divs. Estamos aqui para entender a engenharia que move o mundo digital. Se você busca profundidade, rigor técnico e uma comunidade que te desafia a ser melhor a cada commit, você é <span>DevBase</span>.</h2>
        </div>

      </div>
    </div>
  )
}

export default About