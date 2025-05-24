import "./App.css";
import FormField from "./components/FormField";
import FormRating from "./components/FormRating";
import FormTextArea from "./components/FormTextArea";

function App() {
  return (
    <>
      {/*Logotipo da aplicação*/}
      <img src="./assets/logo.png" alt="Logo Escuta Cidadã" className="logo" />

      {/*Container principal*/}
      <div className="container">
        <form id="feedback">
          {/*Campo: Nome*/}
          <FormField
            name="nome"
            message="Nome:"
            type="text"
            placeholder="Digite seu nome"
          />

          {/*Campo: E-mail*/}
          <FormField
            name="email"
            message="E-mail:"
            type="email"
            placeholder="Digite seu e-mail"
          />

          {/*Campo: Telefone*/}
          <FormField
            name="telefone"
            message="Telefone:"
            type="tel"
            placeholder="Digite seu telefone"
          />

          {/*Campo: Empresa de transporte*/}
          <FormField
            name="empresa"
            message="Qual empresa:"
            type="text"
            placeholder="Digite a empresa"
          />

          {/*Campo: Linha de transporte*/}
          <FormField
            name="linha"
            message="Qual linha:"
            type="number"
            placeholder="Digite a linha"
          />

          {/*Campo: Horário de uso do transporte*/}
          <FormField
            name="horario"
            message="Qual horário:"
            type="time"
            placeholder="Digite o horário"
          />

          {/*Campo: Data do uso do transporte*/}
          <FormField
            name="data"
            message="Qual a data:"
            type="date"
            placeholder="Digite a data"
          />

          {/*Campo: Avaliação do transporte (sistema de estrelas)*/}
          <FormRating
            name="nota-transporte"
            id="avtrasnport"
            rating={[
              "transporte5",
              "transporte4",
              "transporte3",
              "transporte2",
              "transporte1",
            ]}
            message="Avaliação do transporte (1 a 5 estrelas):"
          />

          {/*Campo: Comentários*/}
          <FormTextArea
            name="mensagem"
            message="Comentários / Reclamações:"
            placeholder="Escreva aqui..."
          />

          {/*Campo: Avaliação do site (repetição do campo de estrelas anterior, podendo confundir)*/}
          <FormRating
            name="avsite"
            id="avtrasnport"
            rating={["site5", "site4", "site3", "site2", "site1"]}
            message="Avalie nosso site (1 a 5 estrelas):"
          />

          {/*Botão de envio do formulário*/}
          <button type="submit">Enviar Feedback</button>
        </form>
      </div>
    </>
  );
}

export default App;
