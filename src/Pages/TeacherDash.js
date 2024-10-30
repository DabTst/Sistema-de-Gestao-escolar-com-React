import React from "react";

const TeacherDash = () => {
  return (
    <div className="dashboard teacher-dashboard">
      <h1>Bem vindo ao seu painel de controle, Caro Professor</h1>

      <div className="section">
        <h2>Gerenciar Notas</h2>
        <button>Adicionar Notas</button>
      </div>

      <div className="section">
        <h2>Frequência</h2>
        <button>Registrar frequência</button>
      </div>

      <div className="section">
        <h2>Desempenho de Alunos</h2>
        <table>
          <thead>
            <tr key="00">
              <th>Nome do aluno</th>
              <th>Disciplina</th>
              <th>Nota</th>
              <th>Frequência</th>
            </tr>
          </thead>
          <tbody>
            <tr key="001">
              <td>Maria Silva</td>
              <td>Matematica</td>
              <td>85</td>
              <td>95%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherDash;
