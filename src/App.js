import './App.css';
import AnimationControls from './components/AnimationControls';
import BasicOfMotion from './components/BasicOfMotion';
import Gestures from './components/Gestures';
import ScrollAnimations from './components/ScrollAnimations';
import ViewBasedAnimations from './components/ViewBasedAnimations';

function App() {
  return (
    <div>
      <BasicOfMotion />
      <Gestures />
      <AnimationControls />
      <ViewBasedAnimations />
      <ScrollAnimations />
    </div>
  )
}

export default App;
