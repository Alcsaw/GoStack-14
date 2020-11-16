import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}


const repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const repository = {
    full_name: '3w4534',
    owner: {
      avatar_url: '325434',
      login: 'alcsaw'
    },
    description: '234235'
  }

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/20111371?s=460&u=11f9cd15c1dd06cc423fc8ecb831dced3c3c30c2&v=4" alt="Alcsaw" />
          <div>
            <strong>
              rocket/unform
            </strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>234</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link key={repository.full_name} to={`/repository/${repository.full_name}`} >
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>

    </>
  )
};

export default repository;
