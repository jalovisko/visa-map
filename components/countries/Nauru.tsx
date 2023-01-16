import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Nauru:React.FC = () => {

  const { nauruColor } = useContext(ColorContext)
  const { nauruDiff } = useContext(DiffContext)

return (
<g className={'nauru'}>
  <style jsx>{`
  .nauru {
  fill: ${nauruColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nr" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(nauruDiff == 1) ?
<circle fill="url(#nr)" r="5" cy="505" cx="1933" stroke="black"/>
:
<circle r="5" cy="505" cx="1933" stroke="black"/>
}
</g>
)
}

export default Nauru