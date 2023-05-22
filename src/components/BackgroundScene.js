
import Spline from '@splinetool/react-spline';

export default function BackgroundScene() {
  const onStart = () => {
    console.log('Spline scene started');
    // Perform any additional actions or logic here
  };

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/RqQvQKIwWNlohumT/scene.splinecode"
        onStart={onStart} className='test'
      />
    </div>
  );
}
