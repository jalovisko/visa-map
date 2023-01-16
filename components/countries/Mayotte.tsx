import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Mayotte:React.FC = () => {

  const { mayotteColor } = useContext(ColorContext)
  const { mayotteDiff } = useContext(DiffContext)

return (
<g className={'mayotte'}>
  <style jsx>{`
  .mayotte {
  fill: ${mayotteColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="yt" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(mayotteDiff == 1) ?
<circle fill="url(#yt)" r="4" cy="585" cx="1242" stroke="black"/>
:
<circle r="4" cy="585" cx="1242" stroke="black"/>
}
</g>
)
}

export default Mayotte