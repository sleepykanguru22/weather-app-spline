import Spline from '@splinetool/react-spline';

export default function BgScreen() {
    const onStart = () => {
    console.log('scene started');
    // Perform any additional actions or logic here
  };

  return (
    <Spline scene="https://prod.spline.design/RqQvQKIwWNlohumT/scene.splinecode" onStart={onStart} className='bg-scene' />
  );
}
