import 'ol/ol.css'
import Map from 'ol/Map.js'
import OSM from 'ol/source/OSM.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import { onMounted } from 'vue'

export function useInit(id: string) {
  let map: Map | null = null
  onMounted(() => {
    map = new Map({
      target: id,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    })
    addOSM(map)
  })
  return map
}

function addOSM(map: Map) {
  const tileLayer = new TileLayer({
    source: new OSM(),
  })
  map.getLayers().push(tileLayer)
}
