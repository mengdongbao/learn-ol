import { Map } from 'ol'

export function isNullMap(map: Map | null): map is null {
  if (map == null) {
    alert('null map')
  }
  return map == null
}
