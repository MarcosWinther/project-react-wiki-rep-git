
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="logo GitHub" />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
