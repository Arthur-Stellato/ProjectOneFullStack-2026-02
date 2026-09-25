// src/components/Diferenciais.jsx
function Diferenciais() {
    const itens = [
      'Frajola Bombardeiro',
      'Preto Fighter',
      'Laranja Stealth',
      'Brancao Suport',
    ];
  
    return (
      <ul className="lista-diferenciais">
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default Diferenciais;