import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title> AluraQuiz - Unicorn </title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1> Matemática - Fundamental 1 </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Escreva seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Content>
            <h1> Quizes da Galera </h1>

            <p>Mais parágrafo</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vaugustineli" />
    </QuizBackground>
  );
}
