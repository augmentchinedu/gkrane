// composables/useWebSocket.js
import { ref } from "vue";

export function useWebSocket(url) {
  let ws = null;
  const connected = ref(false);
  let reconnectTimer = null;

  const connect = () => {
    if (ws) return; // avoid multiple connections

    ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("WebSocket connected");
      connected.value = true;
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("WS message:", data);
    };

    ws.onclose = (event) => {
      console.log("WebSocket disconnected", event.code, event.reason);
      connected.value = false;
      ws = null;

      // Only attempt reconnect if normal closure didn't happen
      if (event.code !== 1000) {
        reconnectTimer = setTimeout(connect, 2000);
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      ws.close(); // correct close
    };
  };

  const send = (type, payload) => {
    if (ws && connected.value) {
      ws.send(JSON.stringify({ type, payload }));
    }
  };

  const disconnect = () => {
    if (ws) {
      ws.close(1000, "Manual disconnect");
      ws = null;
      connected.value = false;
    }
  };

  // Removed auto-connect; connect lazily when ready
  connect();

  return { connected, connect, send, disconnect };
}
