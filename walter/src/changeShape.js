export default function changeShape(Timer) {
    if ( Timer > 20 )
      return 'blue'
    if ( Timer > 12 && Timer <= 20 )
      return 'orange'
    if ( Timer >= 0 && Timer <= 12 )
      return 'red'
    return 'hidden'
}