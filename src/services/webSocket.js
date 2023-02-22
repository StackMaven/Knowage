const url = new URL(window.location.origin)
url.protocol = url.protocol.replace('http', 'ws')

const uri = url + import.meta.env.VITE_WEBSOCKET_URL
const WEB_SOCKET = new WebSocket(uri)

export default WEB_SOCKET
