import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Martinique:React.FC = () => {

  const { martiniqueColor } = useContext(ColorContext)
  const { MQ } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'martinique'} onMouseOver={() => setCountrySelect('martinique')}>
  <style jsx>{`
  .martinique {
  fill: ${martiniqueColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mq" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#mq)" />
</defs>
{(MQ == 1) ?
<circle fill="url(#mq)" r="2.5" cy="413" cx="648" stroke="black"/>
:
<circle r="2.5" cy="413" cx="648" stroke="black"/>
}
</g>
)
}

export default Martinique