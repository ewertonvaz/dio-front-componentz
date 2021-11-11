import './App.css';
import { Layout, Profile, Repository } from '../../components';
import { user, repos, starred } from '../../mock/data';

function App() {
  const handleUpdate = () => {
    alert(`Buscar usuario no GitHub`);
  }

  return (
    <Layout onUpdate={handleUpdate}>
      <Profile user={user} />
      <Repository repos={repos} starred={starred}/>
    </Layout>
  );
}

export default App;