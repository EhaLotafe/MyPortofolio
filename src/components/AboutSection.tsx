import MotionWrapper from './MotionWrapper'

export default function AboutSection() {
  return (
    <MotionWrapper>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-title mb-4">Qui je suis</h2>
          <p className="mb-4">
            Je suis <strong>Manasse Lotafe</strong>, développeur full-stack et chercheur en IA appliquée. Je conçois des solutions pragmatiques, accessibles et scalables pour l'Afrique.
          </p>
          <p>
            Ma méthode : analyse scientifique, modélisation, rigueur logicielle. Je développe des produits qui résolvent des problèmes concrets.
          </p>
        </div>
        <div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p>Construire des solutions accessibles et intelligentes qui favorisent l'innovation locale.</p>
            <hr className="my-4" />
            <h3 className="font-semibold mb-2">Vision</h3>
            <p>L'Afrique comme pôle d'innovation — formation, productivité, industrialisation.</p>
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}
