import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet's default marker icon paths broken by Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const DISTRICT_PINS = [
  {
    name: 'Oklahoma City Public Schools',
    lat: 35.4676, lng: -97.5164,
    note: 'Largest district in OKC',
    url: 'https://www.applitrack.com/okcps/onlineapp/',
  },
  {
    name: 'Putnam City Schools',
    lat: 35.5340, lng: -97.6190,
    note: 'NW OKC — large district',
    url: 'https://www.applitrack.com/putnamcity/onlineapp/',
  },
  {
    name: 'Edmond Public Schools',
    lat: 35.6528, lng: -97.4781,
    note: 'North metro',
    url: 'https://www.edmondschools.net/departments/human-resources/employment/',
  },
  {
    name: 'Moore Public Schools',
    lat: 35.3395, lng: -97.4867,
    note: 'South metro',
    url: 'https://www.mooreschools.com/cms/one.aspx?portalId=93220&pageId=96590',
  },
  {
    name: 'Midwest City–Del City Schools',
    lat: 35.4619, lng: -97.3967,
    note: 'East metro',
    url: 'https://www.mid-del.net/domain/24',
  },
  {
    name: 'Mustang Public Schools',
    lat: 35.3843, lng: -97.7246,
    note: 'SW metro',
    url: 'https://www.mustangps.org/departments/human_resources/employment_opportunities',
  },
  {
    name: 'Yukon Public Schools',
    lat: 35.5067, lng: -97.7648,
    note: 'West OKC',
    url: 'https://www.yukonps.com/page/human-resources',
  },
  {
    name: 'Deer Creek Schools',
    lat: 35.7054, lng: -97.5703,
    note: 'North metro — growing district',
    url: 'https://www.dcsok.org/page/employment',
  },
  {
    name: 'Western Heights Public Schools',
    lat: 35.4398, lng: -97.6020,
    note: 'West OKC',
    url: 'https://www.westernheights.k12.ok.us/page/employment',
  },
  {
    name: 'Choctaw-Nicoma Park Schools',
    lat: 35.4964, lng: -97.2702,
    note: 'East metro',
    url: 'https://www.cnpschools.org/page/human-resources',
  },
  {
    name: 'Crooked Oak Public Schools',
    lat: 35.4012, lng: -97.4760,
    note: 'South OKC',
    url: 'https://www.crookedoak.k12.ok.us/',
  },
  {
    name: 'Luther Public Schools',
    lat: 35.6598, lng: -97.1968,
    note: 'NE metro',
    url: 'https://www.lutherps.org/',
  },
]

export default function DistrictMap() {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#003087] inline-block" />
        <span className="text-sm font-medium text-gray-700">OKC Metro School Districts</span>
        <span className="text-xs text-gray-400 ml-auto">Click any pin to visit that district's jobs page</span>
      </div>
      <MapContainer
        center={[35.50, -97.52]}
        zoom={10}
        style={{ height: 'clamp(260px, 50vw, 420px)', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {DISTRICT_PINS.map((pin) => (
          <Marker key={pin.name} position={[pin.lat, pin.lng]}>
            <Popup>
              <div className="text-sm">
                <p className="font-bold text-[#003087]">{pin.name}</p>
                <p className="text-gray-600 text-xs mt-0.5">{pin.note}</p>
                <a
                  href={pin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-white bg-[#003087] px-2 py-1 rounded hover:bg-blue-800"
                >
                  View Jobs →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
