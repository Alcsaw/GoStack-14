import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explore" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <img src="https://avatars0.githubusercontent.com/u/20111371?s=460&u=11f9cd15c1dd06cc423fc8ecb831dced3c3c30c2&v=4" alt="Alcsaw" />
        <div>
          <strong>Alcsaw/nlw-3</strong>
          <p>Next Level Week 3</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="test">
        <img src="https://avatars0.githubusercontent.com/u/20111371?s=460&u=11f9cd15c1dd06cc423fc8ecb831dced3c3c30c2&v=4" alt="Alcsaw" />
        <div>
          <strong>Alcsaw/nlw-3</strong>
          <p>Next Level Week 3</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="test">
        <img src="https://avatars0.githubusercontent.com/u/20111371?s=460&u=11f9cd15c1dd06cc423fc8ecb831dced3c3c30c2&v=4" alt="Alcsaw" />
        <div>
          <strong>Alcsaw/nlw-3</strong>
          <p>Next Level Week 3</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
