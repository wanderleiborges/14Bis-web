import React from "react";
// styles
import { Parabens } from "./styles";
// layouts
import PaginaInterna from "../../layouts/Pagina-Interna";
// components
import BottomButton from "../../components/BottomButton";
import TextList from "../../components/TextList";
import { Row } from "../../styles/objects/row";

const Consultorias = () => {
  return (
    <>
      <PaginaInterna title="Bem vindo(a), Consultor(a)!">
        <Row>
          <Parabens>
            Parabéns pela iniciativa de ajudar outros a alcançarem seu sucesso!
          </Parabens>
        </Row>

        <Row>
          <article>
            <h2>&gt; Objetivos do consultor</h2>
            <TextList
              options={[
                {
                  content:
                    "Diagnosticar problemas ou aspectos que podem ser otimizados;",
                },
                {
                  content:
                    "Definir as soluções e melhorias que devem ser feitas;",
                },
                {
                  content: "Estabelecer metas para os proprietários;",
                },
                {
                  content:
                    "Traçar caminhos para alcançar os resultados desejos e guiá-los conforme eles passarem pelo processo descrito.",
                },
              ]}
            />

            <BottomButton
              label="Torme-se consultor"
              to="/agendar-consultoria"
            />
          </article>

          <article>
            <h2>Por que ser um consultor?</h2>

            <TextList
              options={[
                {
                  content:
                    "Ter acesso a conhecimentos e contatos novos, aprendendo com o processo de ajudar o mentorado;",
                },
                {
                  content:
                    "Ajudar empreendedores iniciantes no momento em que eles mais precisam, tendo uma oportunidade de “give back” pela ajuda que já receberam;",
                },
                {
                  content:
                    "Desenvolver habilidades de liderança, como comunicação, planejamento estratégico, visão sistêmica de negócios e flexibilidade.",
                },
              ]}
            />
          </article>
        </Row>
      </PaginaInterna>
    </>
  );
};

export default Consultorias;
