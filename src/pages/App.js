
import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id) {

      const isExist = repos.find(repo => repo.id === data.id)
      
      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }
    }
  }
  
  const handleRemoveRepo = (id) => {
    
    setRepos((current) => current.filter((repo) => repo.id !== id));
  }

  return (
    <Container>
      <section>
        <img src={gitLogo} width={72} height={72} alt="logo GitHub" />
        <h1>Wiki Repository GitHub</h1>
      </section>
      <p className='guide'>
        Pesquise pelo repositório com username e nome do projeto. 
        <br/>Ex.: usergithub/name-project
      </p>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
