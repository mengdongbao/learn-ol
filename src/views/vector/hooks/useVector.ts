import { onMounted } from 'vue'
import VectorSource from 'ol/source/Vector'
import { GeoJSON } from 'ol/format'
import axios from 'axios'
import { Map } from 'ol'

import VectorLayer from 'ol/layer/Vector'
import { isNullMap } from '@/components/map/nullMap.ts'


export function useVector(mapGetter: () =>  Map | null) {
  onMounted(() => {
    axios.get('/data/china.json').then(res => {
      const vectorSource = new VectorSource({
        features: new GeoJSON().readFeatures(res.data),
      })
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      })
      const map = mapGetter()
      if (isNullMap(map)) {
        return
      }
      map.getLayers().push(vectorLayer)
    })
  })
}
