import Particles from "react-tsparticles";
import options from "./../../../config/ParticlesConfig.json"
import { loadFull } from "tsparticles";
const ParticlesWrapper = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Particles id="tsparticles" init={particlesInit} options={options}></Particles>
  );
};

export default ParticlesWrapper