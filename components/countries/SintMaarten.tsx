import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SintMaarten:React.FC = () => {

  const { sintMaartenColor } = useContext(ColorContext)
  const { SX } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'sintMaarten'} onMouseOver={() => setCountrySelect('sintMaarten')}>
  <style jsx>{`
  .sintMaarten {
  fill: ${sintMaartenColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sx" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#sx)" />
</defs>
{(SX == 1) ?
<circle fill="url(#sx)" r="2.5" cy="384" cx="630" stroke="black"/>
:
<circle r="2.5" cy="384" cx="630" stroke="black"/>
}
</g>
)
}

export default SintMaarten