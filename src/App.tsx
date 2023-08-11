import './App.css'
import Card from './components/Card'
import hero1 from '../public/1674378753_3-29.jpg';
import hero2 from '../public/62-621471_super-man-png-image-jim-lee-superman-statue.png';
import hero3 from '../public/supermen-kartinki-supergeroya-16.jpg';

function App() {
  return (
    <div className="app">
      <Card link={hero1} count={1} />
      <Card link={hero2} count={4} />
      <Card link={hero3} count={6} />
    </div>
  )
}

export default App